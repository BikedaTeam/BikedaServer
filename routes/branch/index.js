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
      stoCelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '01',
      dlvryFoodAmnt : '30000',
      dlvryAmnt : '3000',
      dlvryPickReqTm : '30',
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
      stoCelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '02',
      dlvryFoodAmnt : '30000',
      dlvryAmnt : '3000',
      dlvryPickReqTm : '30',
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
      stoCelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '03',
      dlvryFoodAmnt : '30000',
      dlvryAmnt : '3000',
      dlvryPickReqTm : '30',
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
      stoCelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '03',
      dlvryFoodAmnt : '30000',
      dlvryAmnt : '3000',
      dlvryPickReqTm : '30',
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
      stoCelno : '01012345678',
      dlvryCusTelno : '01012345678',
      dlvryCusAdres : '부산시 해운대구 반여2동 1291-60번지',
      dlvryCusRoadAdres : '부산시 해운대구 재반로 226번길45-17',
      dlvryCusDetlAdres : '1층 101호',
      dlvryCusLa : '00.0',
      dlvryCusLo : '00.0',
      dlvryPaySeCd : '03',
      dlvryFoodAmnt : '30000',
      dlvryAmnt : '3000',
      dlvryPickReqTm : '30',
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

module.exports = router;
