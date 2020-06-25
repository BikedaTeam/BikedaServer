var express = require('express');
var router = express.Router();
var passport = require('../../config/passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('branch/index', {});
});

router.post('/login', function(req, res, next) {
  next();
},passport.authenticate('branch',{
  successRedirect : '/branch/main',
  failureRedirect : '/branch'
}));

router.get('/main', function(req, res, next) {
    res.render('branch/realTimeDelivery', {});
});

router.get('/main/:pageName', function(req, res, next) {
  var pageName = req.params.pageName || '';
  if( pageName )
    res.render('branch/' + pageName, {});
  else
    res.render('branch/realTimeDelivery', {});
});


router.post('/realTimeDelivery', function(req, res, next) {
  var data = { "data" : [
    {
      dlvryNo : 'S0001O2020061000002',
      stoBrcofcId : 'B0001',
      stoId : 'S0001',
      stoMtlty : '테스트 상점1',
      stoTelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '01',
      dlvryFoodAmnt : 30000,
      dlvryAmnt : 3000,
      dlvryPickReqTm : 30,
      dlvryRecvDt: '20200610142456',
      dlvryDsptcDt: '',
      dlvryPickDt: '',
      dlvryTcDt: '',
      dlvryDstnc : '1.5',
      dlvryStateCd : '02',
      dlvryReqCn : '전화주세요',
      riderBrcofcId : 'B0001',
      riderId : 'R00001',
      riderNm : '테스트 라이더1',
      riderCelno : '01012345678',
    },
    {
      dlvryNo : 'S0001O2020061000001',
      stoBrcofcId : 'B0001',
      stoId : 'S0002',
      stoMtlty : '테스트 상점2',
      stoTelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '02',
      dlvryFoodAmnt : 30000,
      dlvryAmnt : 3000,
      dlvryPickReqTm : 30,
      dlvryRecvDt: '20200610132456',
      dlvryDsptcDt: '',
      dlvryPickDt: '',
      dlvryTcDt: '',
      dlvryDstnc : '1.5',
      dlvryStateCd : '03',
      dlvryReqCn : '전화주세요',
      riderBrcofcId : 'B0001',
      riderId : 'R00002',
      riderNm : '테스트 라이더2',
      riderCelno : '01012345678',
    },
    {
      dlvryNo : 'S0001O2020061000004',
      stoBrcofcId : 'B0001',
      stoId : 'S0001',
      stoMtlty : '테스트 상점1',
      stoTelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '03',
      dlvryFoodAmnt : 30000,
      dlvryAmnt : 3000,
      dlvryPickReqTm : 30,
      dlvryRecvDt: '20200610162456',
      dlvryDsptcDt: '',
      dlvryPickDt: '',
      dlvryTcDt: '',
      dlvryDstnc : '1.5',
      dlvryStateCd : '01',
      dlvryReqCn : '전화주세요',
      riderBrcofcId : 'B0001',
      riderId : '',
      riderNm : '',
      riderCelno : '',
    },
    {
      dlvryNo : 'S0001O2020061000003',
      stoBrcofcId : 'B0001',
      stoId : 'S0002',
      stoMtlty : '테스트 상점2',
      stoTelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '03',
      dlvryFoodAmnt : 30000,
      dlvryAmnt : 3000,
      dlvryPickReqTm : 30,
      dlvryRecvDt: '20200610152456',
      dlvryDsptcDt: '',
      dlvryPickDt: '',
      dlvryTcDt: '',
      dlvryDstnc : '1.5',
      dlvryStateCd : '04',
      dlvryReqCn : '전화주세요',
      riderBrcofcId : 'B0001',
      riderId : 'R00001',
      riderNm : '테스트 라이더1',
      riderCelno : '01012345678',
    },
    {
      dlvryNo : 'S0001O2020061000005',
      stoBrcofcId : 'B0001',
      stoId : 'S0001',
      stoMtlty : '테스트 상점2',
      stoTelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '03',
      dlvryFoodAmnt : 30000,
      dlvryAmnt : 3000,
      dlvryPickReqTm : 30,
      dlvryRecvDt: '20200610162456',
      dlvryDsptcDt: '',
      dlvryPickDt: '',
      dlvryTcDt: '',
      dlvryDstnc : '1.5',
      dlvryStateCd : '01',
      dlvryReqCn : '전화주세요',
      riderBrcofcId : 'B0001',
      riderId : '',
      riderNm : '',
      riderCelno : '',
    }
  ] };
  res.json(data);
});
router.post('/dispatchRider', function(req, res, next) {
  var data = { "data" : [
    {
      riderBrcofcId : 'B0001',
      riderId : 'R00001',
      riderNm : '테스트 라이더1',
      riderCelno : '01012345678',
      riderDsptCnt : 5,
    },
    {
      riderBrcofcId : 'B0001',
      riderId : 'R00002',
      riderNm : '테스트 라이더2',
      riderCelno : '01012345678',
      riderDsptCnt : 3,
    },
    {
      riderBrcofcId : 'B0001',
      riderId : 'R00003',
      riderNm : '테스트 라이더3',
      riderCelno : '01012345678',
      riderDsptCnt : 0,
    },
  ] };
  res.json(data);
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
      stoLa : 0.000000,
      stoLo : 0.000000
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
      stoLa : 0.000000,
      stoLo : 0.000000
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
      stoLa : 0.000000,
      stoLo : 0.000000
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
