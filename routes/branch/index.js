var express = require('express');
var router = express.Router();
var request = require('request');
var crypto  = require('crypto');
var restUrl = 'http://127.0.0.1:8080';
// var restUrl = 'http://deliverylabapi.gabia.io';

// 메인 root
router.get('/', function(req, res, next) {
  if( req.session.logined ) {
    res.redirect('/branch/main/realTimeDelivery');
  } else {
    req.session.logined = false;
    req.session.branch = null;
    req.session.save(function () {
      res.render('branch/index');
    });
  }
});

// 로그인 처리
router.post('/login', function(req, res, next) {
  if( req.body.adminId && req.body.adminPassword ) {
    var options = {
      uri : restUrl + '/api/branch/login',
      method : 'post',
      form : {
        adminId : req.body.adminId,
        adminPassword : crypto.createHash('sha256').update(req.body.adminPassword).digest('hex')
      },
      json : true
    };
    request( options, function ( err, httpRespones, result ) {
      if( result.success ) {
        req.session.logined = true;
        req.session.branch = result.data;

        var body = {};
        body.query = req.session.branch.brcofcBsnsPlaceAdres;
        var options = {
          uri : 'https://dapi.kakao.com/v2/local/search/address.json',
          method : 'get',
          headers : {
            'Authorization' : 'KakaoAK 0662ade9504f2f9a44bb691790995783'
          },
          qs : body,
          json : true
        };
        request( options, function ( err, httpRespones, resultKaKao ) {
          req.session.branch.brcofcLo = resultKaKao.documents[0].x;
          req.session.branch.brcofcLa = resultKaKao.documents[0].y;
          req.session.save(function () {
            res.json(result);
          });
        });
      } else {
        res.json(result);
      }
    });
  } else {
    var result = {};
    result.success = false;
    result.data = null;
    result.message = 'ID 또는 패스워드를 입력하십시오';
    res.json(result);
  }
});
router.get('/logout', function (req, res, next) {
  req.session.logined = false;
  req.session.branch = null;
  req.session.save(function () {
    res.redirect('/branch');
  });
});

// 화면 전환
router.get('/main/:pageName', function(req, res, next) {
  if( req.session.logined ) {
    var pageName = req.params.pageName || '';
    if( pageName )
      res.render('branch/' + pageName, {});
    else
      res.render('branch/realTimeDelivery', { });
  } else {
    req.session.logined = false;
    req.session.branch = null;
    req.session.save(function () {
      res.redirect('/branch');
    });
  }
});

// 실시간 배달 목록
router.post('/realTimeDelivery', function(req, res, next) {
  var body = {};
  if( req.session.branch.brcofcId ) body.stoBrcofcId = req.session.branch.brcofcId;
  if( req.body.dlvryRecvDtStd ) body.dlvryRecvDtStd = req.body.dlvryRecvDtStd;
  if( req.body.dlvryRecvDtEnd ) body.dlvryRecvDtEnd = req.body.dlvryRecvDtEnd;
  var options = {
    uri : restUrl + '/api/branch/realTimeDelivery',
    method : 'get',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});

// 실시간 배달 상태 건수
router.post('/realTimedeliveryCount', function(req, res, next) {
  var body = {};
  if( req.session.branch.brcofcId ) body.stoBrcofcId = req.session.branch.brcofcId;
  if( req.body.dlvryRecvDtStd ) body.dlvryRecvDtStd = req.body.dlvryRecvDtStd;
  if( req.body.dlvryRecvDtEnd ) body.dlvryRecvDtEnd = req.body.dlvryRecvDtEnd;
  var options = {
    uri : restUrl + '/api/branch/realTimedeliveryCount',
    method : 'get',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
// 실시간 배차 라이더 목록
router.post('/realTimeDispatchRider', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  var options = {
    uri : restUrl + '/api/branch/realTimeDispatchRider',
    method : 'get',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});

//실시간 배차
router.post('/realTimeDispatch', function(req, res, next) {
  var body = {};
  body.dlvryNo = req.body.dlvryNo || '';
  body.riderId = req.body.riderId || '';
  body.riderBrcofcId = req.body.riderBrcofcId || '';
  var options = {
    uri : restUrl + '/api/branch/realTimeDispatch',
    method : 'post',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    form : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
// 실시간 주문 취소
router.post('/realTimeCancelDelivery', function(req, res, next) {
  var body = {};
  body.dlvryNo = req.body.dlvryNo || '';
  var options = {
    uri : restUrl + '/api/branch/realTimeCancelDelivery',
    method : 'post',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    form : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});

// 지점 좌표 조회
router.get('/branchLocation', function(req, res, next) {
  var result = {};
  var data = {};
  data.brcofcLo = req.session.branch.brcofcLo;
  data.brcofcLa = req.session.branch.brcofcLa;
  result.success = true;
  result.data = data;
  result.message = null;
  res.json(result);
});

// 실시간 라이더 조회
router.post('/realTimeRider', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  var options = {
    uri : restUrl + '/api/branch/realTimeRider',
    method : 'get',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});

// 실시간 라이더 배달 목록 조회
router.post('/realTimeRiderDelivery', function(req, res, next) {
  var body = {};
  body.riderId = req.body.riderId || '';
  var options = {
    uri : restUrl + '/api/branch/realTimeRiderDelivery',
    method : 'get',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});

router.post('/stores', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  body.stoMtlty = req.body.stoMtlty || '';
  var options = {
    uri : restUrl + '/api/branch/stores',
    method : 'get',
    headers : {
      'x-access-token' : req.session.branch.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
router.post('/surcharge', function(req, res, next) {
  var data = { "data" : [
    {
      srchrSeqNo : 1,
      stoId : 'S0001',
      srchrSeCd : '01',
      srchrCn : '눈',
      srchrAmnt : 500,
      srchrApplyYn : 'Y',
    },
    {
      srchrSeqNo : 2,
      stoId : 'S0001',
      srchrSeCd : '02',
      srchrCn : '비',
      srchrAmnt : 500,
      srchrApplyYn : 'Y',
    },
    {
      srchrSeqNo : 3,
      stoId : 'S0001',
      srchrSeCd : '03',
      srchrCn : '결빙',
      srchrAmnt : 500,
      srchrApplyYn : 'N',
    },
    {
      srchrSeqNo : 4,
      stoId : 'S0001',
      srchrSeCd : '04',
      srchrCn : '기타',
      srchrAmnt : 500,
      srchrApplyYn : 'Y',
    },
  ] };
  res.json(data);
});
router.post('/setDistance', function(req, res, next) {
  var data = { "data" : [
    {
      setSeqNo : 1,
      stoId : 'S0001',
      setStdDstnc : 0,
      setEndDstnc : 0.5,
      setAmnt : 500
    },
    {
      setSeqNo : 2,
      stoId : 'S0001',
      setStdDstnc : 0.5,
      setEndDstnc : 1,
      setAmnt : 1000
    },
    {
      setSeqNo : 3,
      stoId : 'S0001',
      setStdDstnc : 1,
      setEndDstnc : 2,
      setAmnt : 2000
    },
  ] };
  res.json(data);
});

router.post('/setArea', function(req, res, next) {
  var data = { "data" : [
    {
      setSeqNo : 1,
      stoId : 'S0001',
      setPrvnc : '부산',
      setMncpl: '해운대구',
      setSbmnc: '반여1동',
      setVlg: '',
      setAmnt : 1000
    },
    {
      setSeqNo : 2,
      stoId : 'S0001',
      setPrvnc : '부산',
      setMncpl: '해운대구',
      setSbmnc: '반여2동',
      setVlg: '',
      setAmnt : 1000
    },
    {
      setSeqNo : 3,
      stoId : 'S0001',
      setDCd : '4113510900',
      setPrvnc : '부산',
      setMncpl: '해운대구',
      setSbmnc: '반여3동',
      setVlg: '',
      setAmnt : 1000
    },
  ] };
  res.json(data);
});

router.post('/getAreaCoordinate', function(req, res, next) {
  var sendData = req.body;
  apiAjaxSend.send( '/api/commond/coordinate', 'get', sendData, function ( result ) {
    res.send(data);
  });
  res.send(null);
});

router.post('/setSpecial', function(req, res, next) {
  var data = { "data" : [
    {
      setSeqNo : 1,
      stoId : 'S0001',
      setNm : '반여동',
      setAmnt : 500,
    },
    {
      setSeqNo : 2,
      stoId : 'S0001',
      setNm : '재송동',
      setAmnt : 1000,
    },
  ] };
  res.json(data);
});

router.post('/setSpecialPolygons', function(req, res, next) {

  res.send(null);
});
module.exports = router;
