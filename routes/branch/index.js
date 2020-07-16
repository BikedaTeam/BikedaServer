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

// 상점 조회
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

// 상점 할증
router.post('/storeSurcharge', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  var options = {
    uri : restUrl + '/api/branch/storeSurcharge',
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

// 상점 거리 요금
router.post('/storeDistanceSetting', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  var options = {
    uri : restUrl + '/api/branch/storeDistanceSetting',
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

// 상점 지역 요금
router.post('/storeAreaSetting', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  var options = {
    uri : restUrl + '/api/branch/storeAreaSetting',
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

// 상점 지역 좌표
router.post('/storeAreaSettingCoordinate', function(req, res, next) {
  var body = {};
  body.setSdCd = req.body.setSdCd || '';
  body.setSggCd = req.body.setSggCd || '';
  body.setEmdCd = req.body.setEmdCd || '';
  body.setRiCd = req.body.setRiCd || '';
  var options = {
    uri : restUrl + '/api/branch/storeAreaSettingCoordinate',
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

// 상점 특별 요금
router.post('/storeSpecialSetting', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  var options = {
    uri : restUrl + '/api/branch/storeSpecialSetting',
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

// 상점 특별 요금 좌표
router.post('/storeSpecialSettingLocation', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.setSeqNo = req.body.setSeqNo || '';
  var options = {
    uri : restUrl + '/api/branch/storeSpecialSettingLocation',
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

module.exports = router;
