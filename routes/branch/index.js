var express = require('express');
var router = express.Router();
var request = require('request');
var crypto  = require('crypto');
var restUrl = 'http://127.0.0.1:8080';
/* GET home page. */
router.get('/', function(req, res, next) {
  if( req.session.logined ) {
    res.redirect('/branch/main/realTimeDelivery');
  } else {
    req.session.logined = false;
    req.session.user = null;
    req.session.save(function () {
      res.render('branch/index');
    });
  }
});
router.post('/login', function(req, res, next) {
  if( req.body.adminId && req.body.adminPassword ) {
    var options = {
      uri : restUrl + '/api/auth/branch',
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
        req.session.user = result.data.user;
        req.session.branch = result.data.branch;
        req.session.token = result.data.token;

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
  req.session.user = null;
  req.session.save(function () {
    res.redirect('/branch');
  });
});
router.get('/main/:pageName', function(req, res, next) {
  if( req.session.logined ) {
    var pageName = req.params.pageName || '';
    if( pageName )
      res.render('branch/' + pageName, {});
    else
      res.render('branch/realTimeDelivery', { });
  } else {
    req.session.logined = false;
    req.session.user = null;
    req.session.save(function () {
      res.redirect('/branch');
    });
  }
});
router.post('/realTimeDelivery', function(req, res, next) {
  var body = {};
  body.stoBrcofcId = req.session.user.brcofcId || '';
  body.dlvryRecvDtStd = req.body.dlvryRecvDtStd || '';
  body.dlvryRecvDtEnd = req.body.dlvryRecvDtEnd || '';
  var options = {
    uri : restUrl + '/api/delivery/delivery',
    method : 'get',
    headers : {
      'x-access-token' : req.session.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
router.post('/realTimedeliveryCount', function(req, res, next) {
  var body = {};
  body.stoBrcofcId = req.session.user.brcofcId || '';
  body.dlvryRecvDtStd = req.body.dlvryRecvDtStd || '';
  body.dlvryRecvDtEnd = req.body.dlvryRecvDtEnd || '';
  var options = {
    uri : restUrl + '/api/delivery/delivery-count',
    method : 'get',
    headers : {
      'x-access-token' : req.session.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
router.post('/realTimeDeliveryDispatch', function(req, res, next) {
  var body = {};
  body.dlvryNo = req.body.dlvryNo || '';
  body.riderId = req.body.riderId || '';
  body.riderBrcofcId = req.body.riderBrcofcId || '';
  body.dlvryStateCd = req.body.dlvryStateCd || '';
  var options = {
    uri : restUrl + '/api/delivery/delivery',
    method : 'put',
    headers : {
      'x-access-token' : req.session.token
    },
    form : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
router.post('/realTimeDeliveryCancel', function(req, res, next) {
  var body = {};
  body.dlvryNo = req.body.dlvryNo || '';
  body.dlvryStateCd = req.body.dlvryStateCd || '';
  var options = {
    uri : restUrl + '/api/delivery/delivery',
    method : 'put',
    headers : {
      'x-access-token' : req.session.token
    },
    form : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
router.post('/dispatchRider', function(req, res, next) {
  var body = {};
  body.stoBrcofcId = req.session.user.brcofcId || '';
  body.riderStateCd = req.body.riderStateCd || '';
  body.riderLoginYn = req.body.riderLoginYn || '';
  var options = {
    uri : restUrl + '/api/rider/rider',
    method : 'get',
    headers : {
      'x-access-token' : req.session.token
    },
    qs : body,
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    res.json(result);
  });
});
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

router.post('/realTimeRider', function(req, res, next) {
  var data = { "data" : [
    {
      riderBrcofcId : 'B0001',
      riderId : 'R00001',
      riderNm : '테스트 라이더1',
      riderCelno : '01012345678',
      riderStateCd : '01',
      riderLa : 35.19461943325928,
      riderLo : 129.11751365461865
    },
    {
      riderBrcofcId : 'B0001',
      riderId : 'R00002',
      riderNm : '테스트 라이더2',
      riderCelno : '01012345678',
      riderStateCd : '02',
      riderLa : 35.196597453088884,
      riderLo : 129.11570970633733
    },
    {
      riderBrcofcId : 'B0001',
      riderId : 'R00003',
      riderNm : '테스트 라이더3',
      riderCelno : '01012345678',
      riderStateCd : '01',
      riderLa : 35.19688847791782,
      riderLo : 129.12481813852943
    },
  ] };
  res.json(data);
});

router.post('/stores', function(req, res, next) {
  var data = { "data" : [
    {
      stoId : 'S0001',
      stoBsnsRgnmb : '1234567890',
      stoMtlty : '테스트 상점1',
      stoBizSeCd : '01',
      stoRprsntvNm : '테스트 대표1',
      stoBsnsPlaceAdres : '부산시 부산진구 중앙대로 993',
      stoStateCd : '01',
      brcofcId : 'B0001',
      stoBrdYmd : '20201231',
      stoCrprtRgnmb : '1234567890123',
      stoOpnngYmd : '20201231',
      stoHdofcAdres : '부산시 부산진구 중앙대로 993',
      stoBizcnd : '제조',
      stoInduty : '음식',
      stoTelno : '01012345678',
      stoVrtlAcnt : '0000000000000',
      stoSetSeCd : '01',
      stoNightSrchrApplyYn : 'Y',
      stoNightSrchrStdTm : '210000',
      stoNightSrchrEndTm : '030000',
      stoNightSrchrAmnt : 1000,
      stoLa : 35.19688847791782,
      stoLo : 129.12481813852943
    },
    {
      stoId : 'S0002',
      stoBsnsRgnmb : '1234567890',
      stoMtlty : '테스트 상점1',
      stoBizSeCd : '02',
      stoRprsntvNm : '테스트 대표2',
      stoBsnsPlaceAdres : '부산시 부산진구 중앙대로 993',
      stoStateCd : '01',
      brcofcId : 'B0001',
      stoBrdYmd : '20201231',
      stoCrprtRgnmb : '1234567890123',
      stoOpnngYmd : '20201231',
      stoHdofcAdres : '부산시 부산진구 중앙대로 993',
      stoBizcnd : '제조',
      stoInduty : '음식',
      stoTelno : '01012345678',
      stoVrtlAcnt : '0000000000000',
      stoSetSeCd : '02',
      stoNightSrchrApplyYn : 'N',
      stoNightSrchrStdTm : '210000',
      stoNightSrchrEndTm : '030000',
      stoNightSrchrAmnt : 1000,
      stoLa : 35.19688847791782,
      stoLo : 129.12481813852943
    },
    {
      stoId : 'S0003',
      stoBsnsRgnmb : '1234567890',
      stoMtlty : '테스트 상점1',
      stoBizSeCd : '01',
      stoRprsntvNm : '테스트 대표3',
      stoBsnsPlaceAdres : '부산시 부산진구 중앙대로 993',
      stoStateCd : '02',
      brcofcId : 'B0001',
      stoBrdYmd : '20201231',
      stoCrprtRgnmb : '1234567890123',
      stoOpnngYmd : '20201231',
      stoHdofcAdres : '부산시 부산진구 중앙대로 993',
      stoBizcnd : '제조',
      stoInduty : '음식',
      stoTelno : '01012345678',
      stoVrtlAcnt : '0000000000000',
      stoSetSeCd : '01',
      stoNightSrchrApplyYn : 'N',
      stoNightSrchrStdTm : '210000',
      stoNightSrchrEndTm : '030000',
      stoNightSrchrAmnt : 1000,
      stoLa : 35.19688847791782,
      stoLo : 129.12481813852943
    },
  ] };
  res.json(data);
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
