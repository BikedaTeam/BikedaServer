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
  if( req.session.branch.brcofcId ) body.riderBrcofcId = req.session.branch.brcofcId;
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

//
router.post('/storeRegister', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId;
  body.stoBsnsRgnmb = req.body.stoBsnsRgnmb || '';
  body.stoPassword = crypto.createHash('sha256').update(req.body.stoBsnsRgnmb).digest('hex');
  body.stoMtlty = req.body.stoMtlty || '';
  body.stoRprsntvNm = req.body.stoRprsntvNm || '';
  body.stoBrdYmd = req.body.stoBrdYmd || '';
  body.stoCrprtRgnmb = req.body.stoCrprtRgnmb || '';
  body.stoOpnngYmd = req.body.stoOpnngYmd || '';
  body.stoBsnsPlaceAdres = req.body.stoBsnsPlaceAdres || '';
  body.stoHdofcAdres = req.body.stoHdofcAdres || '';
  body.stoBizcnd = req.body.stoBizcnd || '';
  body.stoInduty = req.body.stoInduty || '';
  body.stoTelno = req.body.stoTelno || '';
  body.stoVrtlBankCd = req.body.stoVrtlBankCd || '';
  body.stoVrtlAcnt = req.body.stoVrtlAcnt || '';
  body.stoBizSeCd = req.body.stoBizSeCd || '';
  body.stoVatYn = req.body.stoVatYn || '';
  var options = {
    uri : 'https://dapi.kakao.com/v2/local/search/address.json',
    method : 'get',
    headers : {
      'Authorization' : 'KakaoAK 0662ade9504f2f9a44bb691790995783'
    },
    qs : { query : body.stoBsnsPlaceAdres },
    json : true
  };
  request( options, function ( err, httpRespones, result ) {
    body.stoLo = result.documents[0].x;
    body.stoLa = result.documents[0].y;

    options = {
      uri : restUrl + '/api/branch/storeRegister',
      method : 'post',
      headers : {
        'x-access-token' : req.session.branch.token
      },
      form : body,
      json : true
    };
    request( options, function ( err, httpRespones, result ) {
      res.json(result);
      return;
    });
  });
});
// 상점 수정
router.post('/storeModify', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.stoBsnsRgnmb = req.body.stoBsnsRgnmb || '';
  body.stoMtlty = req.body.stoMtlty || '';
  body.stoRprsntvNm = req.body.stoRprsntvNm || '';
  body.stoBrdYmd = req.body.stoBrdYmd || '';
  body.stoCrprtRgnmb = req.body.stoCrprtRgnmb || '';
  body.stoOpnngYmd = req.body.stoOpnngYmd || '';
  body.stoBsnsPlaceAdres = req.body.stoBsnsPlaceAdres || '';
  body.stoHdofcAdres = req.body.stoHdofcAdres || '';
  body.stoBizcnd = req.body.stoBizcnd || '';
  body.stoInduty = req.body.stoInduty || '';
  body.stoTelno = req.body.stoTelno || '';
  body.stoVrtlBankCd = req.body.stoVrtlBankCd || '';
  body.stoVrtlAcnt = req.body.stoVrtlAcnt || '';
  body.stoStateCd = req.body.stoStateCd || '';
  body.stoBizSeCd = req.body.stoBizSeCd || '';
  body.stoVatYn = req.body.stoVatYn || '';
  var options = {
    uri : restUrl + '/api/branch/storeModify',
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

// 상점 야간 할증 수정
router.post('/storeModifyNightSurcharge', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.stoNightSrchrApplyYn = req.body.stoNightSrchrApplyYn || '';
  body.stoNightSrchrStdTm = req.body.stoNightSrchrStdTm || '000000';
  body.stoNightSrchrEndTm = req.body.stoNightSrchrEndTm || '000000';
  body.stoNightSrchrAmnt = req.body.stoNightSrchrAmnt || '0';
  body.surcharge = req.body.surcharge;
  var options = {
    uri : restUrl + '/api/branch/storeModifyNightSurcharge',
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

// 상점 요금 수정
router.post('/storeModifyFee', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.stoSetSeCd = req.body.stoSetSeCd || '';
  body.stoSetData = req.body.stoSetData;
  var options = {
    uri : restUrl + '/api/branch/storeModifyFee',
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

// 상점 지역 요금 삭제
router.post('/storeModifyFeeAreaDelt', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.setSeqNo = req.body.setSeqNo || '';
  var options = {
    uri : restUrl + '/api/branch/storeModifyFeeAreaDelt',
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

// 상점 구간 요금 삭제
router.post('/storeModifyFeeDistanceDelt', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.setSeqNo = req.body.setSeqNo || '';
  var options = {
    uri : restUrl + '/api/branch/storeModifyFeeDistanceDelt',
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

// 상점 특수 요금 수정
router.post('/storeModifySpecial', function(req, res, next) {
  var body = {};
  body.stoId = req.body.stoId || '';
  body.stoSetData = req.body.stoSetData;
  var options = {
    uri : restUrl + '/api/branch/storeModifySpecial',
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

// 라이더 조회
router.post('/riders', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  body.riderNm = req.body.riderNm || '';
  var options = {
    uri : restUrl + '/api/branch/riders',
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

// 라이더 등록
router.post('/riderRegister', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId;
  body.riderNm = req.body.riderNm || '';
  body.riderCelno = req.body.riderCelno || '';
  body.riderWthdrBankCd = req.body.riderWthdrBankCd || '';
  body.riderWthdrAcnt = req.body.riderWthdrAcnt || '';
  body.riderMinWthdrAmnt = req.body.riderMinWthdrAmnt || '';
  body.riderCallLimit = req.body.riderCallLimit || '';
  body.riderCallDelayTime = req.body.riderCallDelayTime || '';
  body.riderStateCd = req.body.riderStateCd || '';
  console.log(body);
  var options = {
    uri : restUrl + '/api/branch/riderRegister',
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
// 라이더 수정
router.post('/riderModify', function(req, res, next) {
  var body = {};
  body.riderId = req.body.riderId || '';
  body.riderNm = req.body.riderNm || '';
  body.riderCelno = req.body.riderCelno || '';
  body.riderWthdrBankCd = req.body.riderWthdrBankCd || '';
  body.riderWthdrAcnt = req.body.riderWthdrAcnt || '';
  body.riderMinWthdrAmnt = req.body.riderMinWthdrAmnt || '';
  body.riderCallLimit = req.body.riderCallLimit || '';
  body.riderCallDelayTime = req.body.riderCallDelayTime || '';
  body.riderStateCd = req.body.riderStateCd || '';
  var options = {
    uri : restUrl + '/api/branch/riderModify',
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

// 지점 포인트 총액 조회
router.post('/branchTotPoint', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  var options = {
    uri : restUrl + '/api/branch/branchTotPoint',
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

// 지점 포인트 조회
router.post('/branchPoint', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  body.stdDate = req.body.stdDate.replace(/-/g,'') || '';
  body.endDate = req.body.endDate.replace(/-/g,'') || '';
  var options = {
    uri : restUrl + '/api/branch/branchPoint',
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

// 상점 포인트 조회
router.post('/storePoint', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  body.storeId = req.body.storeId || '';
  var options = {
    uri : restUrl + '/api/branch/storePoint',
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

// 라이더 포인트 조회
router.post('/riderPoint', function(req, res, next) {
  var body = {};
  body.brcofcId = req.session.branch.brcofcId || '';
  body.riderId = req.body.riderId || '';
  var options = {
    uri : restUrl + '/api/branch/riderPoint',
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
