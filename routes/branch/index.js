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
      setDCd : '4113510900',
      setPrvnc : '부산',
      setMncpl: '해운대구',
      setSbmnc: '반여1동',
      setVlg: '',
      setAmnt : 1000
    },
    {
      setSeqNo : 2,
      stoId : 'S0001',
      setDCd : '4113510900',
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
  var data = { "data" : [
    {
setSeqNo : 1,
plygnSeqNo : 1,
plygnLo : 127.126667235118,
plygnLa : 37.4686251456097
},
{
setSeqNo : 1,
plygnSeqNo : 2,
plygnLo : 127.126666026843,
plygnLa : 37.4686258428936
},
{
setSeqNo : 1,
plygnSeqNo : 3,
plygnLo : 127.126373097454,
plygnLa : 37.4687925599768
},
{
setSeqNo : 1,
plygnSeqNo : 4,
plygnLo : 127.126024601622,
plygnLa : 37.4691063141171
},
{
setSeqNo : 1,
plygnSeqNo : 5,
plygnLo : 127.125701369265,
plygnLa : 37.4693186692538
},
{
setSeqNo : 1,
plygnSeqNo : 6,
plygnLo : 127.125518222319,
plygnLa : 37.4694309182065
},
{
setSeqNo : 1,
plygnSeqNo : 7,
plygnLo : 127.125374586365,
plygnLa : 37.4695175115494
},
{
setSeqNo : 1,
plygnSeqNo : 8,
plygnLo : 127.125314936812,
plygnLa : 37.4695533358126
},
{
setSeqNo : 1,
plygnSeqNo : 9,
plygnLo : 127.125304535749,
plygnLa : 37.4695595365848
},
{
setSeqNo : 1,
plygnSeqNo : 10,
plygnLo : 127.12520306638,
plygnLa : 37.4696201813419
},
{
setSeqNo : 1,
plygnSeqNo : 11,
plygnLo : 127.125100966572,
plygnLa : 37.4696140885787
},
{
setSeqNo : 1,
plygnSeqNo : 12,
plygnLo : 127.124943391832,
plygnLa : 37.4696035581973
},
{
setSeqNo : 1,
plygnSeqNo : 13,
plygnLo : 127.124878393123,
plygnLa : 37.4695977150319
},
{
setSeqNo : 1,
plygnSeqNo : 14,
plygnLo : 127.124851411044,
plygnLa : 37.4695236902718
},
{
setSeqNo : 1,
plygnSeqNo : 15,
plygnLo : 127.124937203211,
plygnLa : 37.4694917870728
},
{
setSeqNo : 1,
plygnSeqNo : 16,
plygnLo : 127.124897647253,
plygnLa : 37.4693859600322
},
{
setSeqNo : 1,
plygnSeqNo : 17,
plygnLo : 127.1249487129,
plygnLa : 37.469292706599
},
{
setSeqNo : 1,
plygnSeqNo : 18,
plygnLo : 127.124965540514,
plygnLa : 37.4692152570297
},
{
setSeqNo : 1,
plygnSeqNo : 19,
plygnLo : 127.125015575623,
plygnLa : 37.4690299397844
},
{
setSeqNo : 1,
plygnSeqNo : 20,
plygnLo : 127.1250315916,
plygnLa : 37.4689950103982
},
{
setSeqNo : 1,
plygnSeqNo : 21,
plygnLo : 127.125045876727,
plygnLa : 37.4689800657809
},
{
setSeqNo : 1,
plygnSeqNo : 22,
plygnLo : 127.125168255218,
plygnLa : 37.4687518748137
},
{
setSeqNo : 1,
plygnSeqNo : 23,
plygnLo : 127.12514167041,
plygnLa : 37.4685897233279
},
{
setSeqNo : 1,
plygnSeqNo : 24,
plygnLo : 127.125137934077,
plygnLa : 37.4684692164333
},
{
setSeqNo : 1,
plygnSeqNo : 25,
plygnLo : 127.125157473017,
plygnLa : 37.4684244268534
},
{
setSeqNo : 1,
plygnSeqNo : 26,
plygnLo : 127.125182078535,
plygnLa : 37.4683528874229
},
{
setSeqNo : 1,
plygnSeqNo : 27,
plygnLo : 127.125174114994,
plygnLa : 37.4680203627919
},
{
setSeqNo : 1,
plygnSeqNo : 28,
plygnLo : 127.125199421592,
plygnLa : 37.4678336669809
},
{
setSeqNo : 1,
plygnSeqNo : 29,
plygnLo : 127.125132694718,
plygnLa : 37.4677515192069
},
{
setSeqNo : 1,
plygnSeqNo : 30,
plygnLo : 127.125103728488,
plygnLa : 37.467747603766
},
{
setSeqNo : 1,
plygnSeqNo : 31,
plygnLo : 127.125072348925,
plygnLa : 37.4676789356515
},
{
setSeqNo : 1,
plygnSeqNo : 32,
plygnLo : 127.125080515775,
plygnLa : 37.4675941789726
},
{
setSeqNo : 1,
plygnSeqNo : 33,
plygnLo : 127.125069610255,
plygnLa : 37.467519009768
},
{
setSeqNo : 1,
plygnSeqNo : 34,
plygnLo : 127.12506763188,
plygnLa : 37.4674984597709
},
{
setSeqNo : 1,
plygnSeqNo : 35,
plygnLo : 127.125060359702,
plygnLa : 37.4674759421431
},
{
setSeqNo : 1,
plygnSeqNo : 36,
plygnLo : 127.125079056269,
plygnLa : 37.4674621294204
},
{
setSeqNo : 1,
plygnSeqNo : 37,
plygnLo : 127.125102871591,
plygnLa : 37.4674477415228
},
{
setSeqNo : 1,
plygnSeqNo : 38,
plygnLo : 127.125067568791,
plygnLa : 37.4673503612552
},
{
setSeqNo : 1,
plygnSeqNo : 39,
plygnLo : 127.125065254778,
plygnLa : 37.4673399395639
},
{
setSeqNo : 1,
plygnSeqNo : 40,
plygnLo : 127.12504799647,
plygnLa : 37.4672650659834
},
{
setSeqNo : 1,
plygnSeqNo : 41,
plygnLo : 127.125005415341,
plygnLa : 37.4672515963145
},
{
setSeqNo : 1,
plygnSeqNo : 42,
plygnLo : 127.124988274036,
plygnLa : 37.4672487944648
},
{
setSeqNo : 1,
plygnSeqNo : 43,
plygnLo : 127.124938386183,
plygnLa : 37.4671992914807
},
{
setSeqNo : 1,
plygnSeqNo : 44,
plygnLo : 127.124898019104,
plygnLa : 37.4671441460956
},
{
setSeqNo : 1,
plygnSeqNo : 45,
plygnLo : 127.12486702839,
plygnLa : 37.4670918131243
},
{
setSeqNo : 1,
plygnSeqNo : 46,
plygnLo : 127.124849989618,
plygnLa : 37.4670414285101
},
{
setSeqNo : 1,
plygnSeqNo : 47,
plygnLo : 127.124835999301,
plygnLa : 37.4670155385715
},
{
setSeqNo : 1,
plygnSeqNo : 48,
plygnLo : 127.124827319038,
plygnLa : 37.4670020317742
},
{
setSeqNo : 1,
plygnSeqNo : 49,
plygnLo : 127.12475935604,
plygnLa : 37.4669167885599
},
{
setSeqNo : 1,
plygnSeqNo : 50,
plygnLo : 127.124724696109,
plygnLa : 37.466888667577
},
{
setSeqNo : 1,
plygnSeqNo : 51,
plygnLo : 127.124577590791,
plygnLa : 37.4668009733889
},
{
setSeqNo : 1,
plygnSeqNo : 52,
plygnLo : 127.12457051539,
plygnLa : 37.4667939436423
},
{
setSeqNo : 1,
plygnSeqNo : 53,
plygnLo : 127.124531419227,
plygnLa : 37.4667551328363
},
{
setSeqNo : 1,
plygnSeqNo : 54,
plygnLo : 127.124528501699,
plygnLa : 37.4666991033848
},
{
setSeqNo : 1,
plygnSeqNo : 55,
plygnLo : 127.124488146234,
plygnLa : 37.466643957343
},
{
setSeqNo : 1,
plygnSeqNo : 56,
plygnLo : 127.124206932229,
plygnLa : 37.4665209211404
},
{
setSeqNo : 1,
plygnSeqNo : 57,
plygnLo : 127.124143317978,
plygnLa : 37.4664956517586
},
{
setSeqNo : 1,
plygnSeqNo : 58,
plygnLo : 127.123916018962,
plygnLa : 37.4663973357077
},
{
setSeqNo : 1,
plygnSeqNo : 59,
plygnLo : 127.123767021734,
plygnLa : 37.4663338598172
},
{
setSeqNo : 1,
plygnSeqNo : 60,
plygnLo : 127.123613853363,
plygnLa : 37.4661997151626
},
{
setSeqNo : 1,
plygnSeqNo : 61,
plygnLo : 127.123607478525,
plygnLa : 37.4661940904733
},
{
setSeqNo : 1,
plygnSeqNo : 62,
plygnLo : 127.123426781085,
plygnLa : 37.4660785525526
},
{
setSeqNo : 1,
plygnSeqNo : 63,
plygnLo : 127.123315777312,
plygnLa : 37.4660220652419
},
{
setSeqNo : 1,
plygnSeqNo : 64,
plygnLo : 127.123202308051,
plygnLa : 37.4659791047706
},
{
setSeqNo : 1,
plygnSeqNo : 65,
plygnLo : 127.123116194965,
plygnLa : 37.465915276756
},
{
setSeqNo : 1,
plygnSeqNo : 66,
plygnLo : 127.123085258084,
plygnLa : 37.4658953247973
},
{
setSeqNo : 1,
plygnSeqNo : 67,
plygnLo : 127.123060327224,
plygnLa : 37.4658770501429
},
{
setSeqNo : 1,
plygnSeqNo : 68,
plygnLo : 127.123036807084,
plygnLa : 37.4658655242798
},
{
setSeqNo : 1,
plygnSeqNo : 69,
plygnLo : 127.123002881877,
plygnLa : 37.4658497917743
},
{
setSeqNo : 1,
plygnSeqNo : 70,
plygnLo : 127.122937826707,
plygnLa : 37.4658194497085
},
{
setSeqNo : 1,
plygnSeqNo : 71,
plygnLo : 127.12288792127,
plygnLa : 37.4657572780275
},
{
setSeqNo : 1,
plygnSeqNo : 72,
plygnLo : 127.122858211472,
plygnLa : 37.4657339349456
},
{
setSeqNo : 1,
plygnSeqNo : 73,
plygnLo : 127.122831164015,
plygnLa : 37.4657142583053
},
{
setSeqNo : 1,
plygnSeqNo : 74,
plygnLo : 127.122824909174,
plygnLa : 37.4656703418223
},
{
setSeqNo : 1,
plygnSeqNo : 75,
plygnLo : 127.12278540668,
plygnLa : 37.4656025268466
},
{
setSeqNo : 1,
plygnSeqNo : 76,
plygnLo : 127.122736312037,
plygnLa : 37.4656008830609
},
{
setSeqNo : 1,
plygnSeqNo : 77,
plygnLo : 127.122689151344,
plygnLa : 37.4655992377277
},
{
setSeqNo : 1,
plygnSeqNo : 78,
plygnLo : 127.122592963042,
plygnLa : 37.4655337349595
},
{
setSeqNo : 1,
plygnSeqNo : 79,
plygnLo : 127.122521704311,
plygnLa : 37.4654848206709
},
{
setSeqNo : 1,
plygnSeqNo : 80,
plygnLo : 127.122508442603,
plygnLa : 37.4654752562997
},
{
setSeqNo : 1,
plygnSeqNo : 81,
plygnLo : 127.122435768004,
plygnLa : 37.4654238100439
},
{
setSeqNo : 1,
plygnSeqNo : 82,
plygnLo : 127.122398982567,
plygnLa : 37.4653945658784
},
{
setSeqNo : 1,
plygnSeqNo : 83,
plygnLo : 127.122318691994,
plygnLa : 37.4653307305777
},
{
setSeqNo : 1,
plygnSeqNo : 84,
plygnLo : 127.122299246337,
plygnLa : 37.4653141358483
},
{
setSeqNo : 1,
plygnSeqNo : 85,
plygnLo : 127.122234870782,
plygnLa : 37.4652646464726
},
{
setSeqNo : 1,
plygnSeqNo : 86,
plygnLo : 127.122180049439,
plygnLa : 37.4652227527313
},
{
setSeqNo : 1,
plygnSeqNo : 87,
plygnLo : 127.122151073424,
plygnLa : 37.4652123662142
},
{
setSeqNo : 1,
plygnSeqNo : 88,
plygnLo : 127.122025621847,
plygnLa : 37.4651820846801
},
{
setSeqNo : 1,
plygnSeqNo : 89,
plygnLo : 127.121957771364,
plygnLa : 37.465164413555
},
{
setSeqNo : 1,
plygnSeqNo : 90,
plygnLo : 127.121859355801,
plygnLa : 37.465138889113
},
{
setSeqNo : 1,
plygnSeqNo : 91,
plygnLo : 127.121859528984,
plygnLa : 37.4651341039065
},
{
setSeqNo : 1,
plygnSeqNo : 92,
plygnLo : 127.121664138887,
plygnLa : 37.464776992962
},
{
setSeqNo : 1,
plygnSeqNo : 93,
plygnLo : 127.12143936537,
plygnLa : 37.4643723365
},
{
setSeqNo : 1,
plygnSeqNo : 94,
plygnLo : 127.121354491373,
plygnLa : 37.4643110457056
},
{
setSeqNo : 1,
plygnSeqNo : 95,
plygnLo : 127.12109315425,
plygnLa : 37.4641257573415
},
{
setSeqNo : 1,
plygnSeqNo : 96,
plygnLo : 127.120745732244,
plygnLa : 37.4638918487509
},
{
setSeqNo : 1,
plygnSeqNo : 97,
plygnLo : 127.120104345502,
plygnLa : 37.4634932321796
},
{
setSeqNo : 1,
plygnSeqNo : 98,
plygnLo : 127.119204271573,
plygnLa : 37.4631266932277
},
{
setSeqNo : 1,
plygnSeqNo : 99,
plygnLo : 127.118326351535,
plygnLa : 37.4626950822147
},
{
setSeqNo : 1,
plygnSeqNo : 100,
plygnLo : 127.117474849348,
plygnLa : 37.4622006475895
},
{
setSeqNo : 1,
plygnSeqNo : 101,
plygnLo : 127.117470770821,
plygnLa : 37.4621950206478
},
{
setSeqNo : 1,
plygnSeqNo : 102,
plygnLo : 127.117119938754,
plygnLa : 37.461677576117
},
{
setSeqNo : 1,
plygnSeqNo : 103,
plygnLo : 127.116989293223,
plygnLa : 37.4614845465693
},
{
setSeqNo : 1,
plygnSeqNo : 104,
plygnLo : 127.116939656845,
plygnLa : 37.4609003465354
},
{
setSeqNo : 1,
plygnSeqNo : 105,
plygnLo : 127.116907737188,
plygnLa : 37.4604732472195
},
{
setSeqNo : 1,
plygnSeqNo : 106,
plygnLo : 127.116899680875,
plygnLa : 37.4604011749757
},
{
setSeqNo : 1,
plygnSeqNo : 107,
plygnLo : 127.116901975574,
plygnLa : 37.4602837631307
},
{
setSeqNo : 1,
plygnSeqNo : 108,
plygnLo : 127.116906426873,
plygnLa : 37.4600770869145
},
{
setSeqNo : 1,
plygnSeqNo : 109,
plygnLo : 127.116905245515,
plygnLa : 37.4597713140736
},
{
setSeqNo : 1,
plygnSeqNo : 110,
plygnLo : 127.116906797442,
plygnLa : 37.4592875800421
},
{
setSeqNo : 1,
plygnSeqNo : 111,
plygnLo : 127.11689609316,
plygnLa : 37.4586405615309
},
{
setSeqNo : 1,
plygnSeqNo : 112,
plygnLo : 127.11669702807,
plygnLa : 37.4586232948666
},
{
setSeqNo : 1,
plygnSeqNo : 113,
plygnLo : 127.116239410754,
plygnLa : 37.4585961517559
},
{
setSeqNo : 1,
plygnSeqNo : 114,
plygnLo : 127.115892910201,
plygnLa : 37.4585919826012
},
{
setSeqNo : 1,
plygnSeqNo : 115,
plygnLo : 127.115826186388,
plygnLa : 37.4586106259933
},
{
setSeqNo : 1,
plygnSeqNo : 116,
plygnLo : 127.115729792558,
plygnLa : 37.458636621921
},
{
setSeqNo : 1,
plygnSeqNo : 117,
plygnLo : 127.115686901524,
plygnLa : 37.4586473671866
},
{
setSeqNo : 1,
plygnSeqNo : 118,
plygnLo : 127.115577098633,
plygnLa : 37.4586776028588
},
{
setSeqNo : 1,
plygnSeqNo : 119,
plygnLo : 127.11549606698,
plygnLa : 37.4586979550525
},
{
setSeqNo : 1,
plygnSeqNo : 120,
plygnLo : 127.115476648525,
plygnLa : 37.4587044414196
},
{
setSeqNo : 1,
plygnSeqNo : 121,
plygnLo : 127.115478672886,
plygnLa : 37.4587573741978
},
{
setSeqNo : 1,
plygnSeqNo : 122,
plygnLo : 127.115365833944,
plygnLa : 37.4588813708554
},
{
setSeqNo : 1,
plygnSeqNo : 123,
plygnLo : 127.115285248863,
plygnLa : 37.4589659181911
},
{
setSeqNo : 1,
plygnSeqNo : 124,
plygnLo : 127.115148527279,
plygnLa : 37.4590600968153
},
{
setSeqNo : 1,
plygnSeqNo : 125,
plygnLo : 127.114992690326,
plygnLa : 37.4591303535008
},
{
setSeqNo : 1,
plygnSeqNo : 126,
plygnLo : 127.114785111808,
plygnLa : 37.4592026320314
},
{
setSeqNo : 1,
plygnSeqNo : 127,
plygnLo : 127.114592488391,
plygnLa : 37.4592385780283
},
{
setSeqNo : 1,
plygnSeqNo : 128,
plygnLo : 127.114510597296,
plygnLa : 37.4592741290643
},
{
setSeqNo : 1,
plygnSeqNo : 129,
plygnLo : 127.114361874268,
plygnLa : 37.4593787342447
},
{
setSeqNo : 1,
plygnSeqNo : 130,
plygnLo : 127.114184847687,
plygnLa : 37.4594521082838
},
{
setSeqNo : 1,
plygnSeqNo : 131,
plygnLo : 127.114073110552,
plygnLa : 37.4594826245146
},
{
setSeqNo : 1,
plygnSeqNo : 132,
plygnLo : 127.113955363358,
plygnLa : 37.4595168037175
},
{
setSeqNo : 1,
plygnSeqNo : 133,
plygnLo : 127.113836509232,
plygnLa : 37.4596334886387
},
{
setSeqNo : 1,
plygnSeqNo : 134,
plygnLo : 127.113737740367,
plygnLa : 37.4597208632244
},
{
setSeqNo : 1,
plygnSeqNo : 135,
plygnLo : 127.113634258683,
plygnLa : 37.4597325022812
},
{
setSeqNo : 1,
plygnSeqNo : 136,
plygnLo : 127.113536354479,
plygnLa : 37.4598015859014
},
{
setSeqNo : 1,
plygnSeqNo : 137,
plygnLo : 127.113419755524,
plygnLa : 37.4599008071749
},
{
setSeqNo : 1,
plygnSeqNo : 138,
plygnLo : 127.113271115517,
plygnLa : 37.4600549561847
},
{
setSeqNo : 1,
plygnSeqNo : 139,
plygnLo : 127.11324096181,
plygnLa : 37.4602090021062
},
{
setSeqNo : 1,
plygnSeqNo : 140,
plygnLo : 127.113236479662,
plygnLa : 37.4602796796366
},
{
setSeqNo : 1,
plygnSeqNo : 141,
plygnLo : 127.113233412957,
plygnLa : 37.4603534486955
},
{
setSeqNo : 1,
plygnSeqNo : 142,
plygnLo : 127.113089191578,
plygnLa : 37.460402014299
},
{
setSeqNo : 1,
plygnSeqNo : 143,
plygnLo : 127.112842598808,
plygnLa : 37.4604875633246
},
{
setSeqNo : 1,
plygnSeqNo : 144,
plygnLo : 127.112763010153,
plygnLa : 37.4605304343867
},
{
setSeqNo : 1,
plygnSeqNo : 145,
plygnLo : 127.112908702175,
plygnLa : 37.4606423640327
},
{
setSeqNo : 1,
plygnSeqNo : 146,
plygnLo : 127.113184914976,
plygnLa : 37.4607586670322
},
{
setSeqNo : 1,
plygnSeqNo : 147,
plygnLo : 127.113291877072,
plygnLa : 37.4608368464005
},
{
setSeqNo : 1,
plygnSeqNo : 148,
plygnLo : 127.113334897706,
plygnLa : 37.4609057851946
},
{
setSeqNo : 1,
plygnSeqNo : 149,
plygnLo : 127.11333392518,
plygnLa : 37.4610876817075
},
{
setSeqNo : 1,
plygnSeqNo : 150,
plygnLo : 127.113121152251,
plygnLa : 37.4611137771175
},
{
setSeqNo : 1,
plygnSeqNo : 151,
plygnLo : 127.1129749548,
plygnLa : 37.4611347564883
},
{
setSeqNo : 1,
plygnSeqNo : 152,
plygnLo : 127.112922529166,
plygnLa : 37.4611547989738
},
{
setSeqNo : 1,
plygnSeqNo : 153,
plygnLo : 127.112783266713,
plygnLa : 37.461209827104
},
{
setSeqNo : 1,
plygnSeqNo : 154,
plygnLo : 127.112702965526,
plygnLa : 37.4612451048021
},
{
setSeqNo : 1,
plygnSeqNo : 155,
plygnLo : 127.112521732055,
plygnLa : 37.4613446651102
},
{
setSeqNo : 1,
plygnSeqNo : 156,
plygnLo : 127.11230520688,
plygnLa : 37.4614639720063
},
{
setSeqNo : 1,
plygnSeqNo : 157,
plygnLo : 127.112229853514,
plygnLa : 37.4615054256516
},
{
setSeqNo : 1,
plygnSeqNo : 158,
plygnLo : 127.111820322557,
plygnLa : 37.461644625949
},
{
setSeqNo : 1,
plygnSeqNo : 159,
plygnLo : 127.111749339413,
plygnLa : 37.4616531363062
},
{
setSeqNo : 1,
plygnSeqNo : 160,
plygnLo : 127.111347294147,
plygnLa : 37.4617177062873
},
{
setSeqNo : 1,
plygnSeqNo : 161,
plygnLo : 127.111065132299,
plygnLa : 37.4617627403113
},
{
setSeqNo : 1,
plygnSeqNo : 162,
plygnLo : 127.110637771086,
plygnLa : 37.4617935443199
},
{
setSeqNo : 1,
plygnSeqNo : 163,
plygnLo : 127.109891099961,
plygnLa : 37.4619414913569
},
{
setSeqNo : 1,
plygnSeqNo : 164,
plygnLo : 127.10945918277,
plygnLa : 37.4618709316877
},
{
setSeqNo : 1,
plygnSeqNo : 165,
plygnLo : 127.109089203203,
plygnLa : 37.4620081043101
},
{
setSeqNo : 1,
plygnSeqNo : 166,
plygnLo : 127.108686209176,
plygnLa : 37.4621568571517
},
{
setSeqNo : 1,
plygnSeqNo : 167,
plygnLo : 127.108153546911,
plygnLa : 37.4622744687545
},
{
setSeqNo : 1,
plygnSeqNo : 168,
plygnLo : 127.107514446062,
plygnLa : 37.4621894494799
},
{
setSeqNo : 1,
plygnSeqNo : 169,
plygnLo : 127.107301786355,
plygnLa : 37.4621809099367
},
{
setSeqNo : 1,
plygnSeqNo : 170,
plygnLo : 127.106880128782,
plygnLa : 37.4623699382306
},
{
setSeqNo : 1,
plygnSeqNo : 171,
plygnLo : 127.106672138967,
plygnLa : 37.4624109486542
},
{
setSeqNo : 1,
plygnSeqNo : 172,
plygnLo : 127.106467287503,
plygnLa : 37.4624243659033
},
{
setSeqNo : 1,
plygnSeqNo : 173,
plygnLo : 127.106167366182,
plygnLa : 37.462406891373
},
{
setSeqNo : 1,
plygnSeqNo : 174,
plygnLo : 127.10592551848,
plygnLa : 37.4623547379079
},
{
setSeqNo : 1,
plygnSeqNo : 175,
plygnLo : 127.105656188929,
plygnLa : 37.4622361512266
},
{
setSeqNo : 1,
plygnSeqNo : 176,
plygnLo : 127.105608253212,
plygnLa : 37.4621784752032
},
{
setSeqNo : 1,
plygnSeqNo : 177,
plygnLo : 127.10527091071,
plygnLa : 37.4621705996168
},
{
setSeqNo : 1,
plygnSeqNo : 178,
plygnLo : 127.105128523254,
plygnLa : 37.4621462358248
},
{
setSeqNo : 1,
plygnSeqNo : 179,
plygnLo : 127.105030497797,
plygnLa : 37.4621418162127
},
{
setSeqNo : 1,
plygnSeqNo : 180,
plygnLo : 127.104866990758,
plygnLa : 37.4621611069395
},
{
setSeqNo : 1,
plygnSeqNo : 181,
plygnLo : 127.104705199036,
plygnLa : 37.4621547700084
},
{
setSeqNo : 1,
plygnSeqNo : 182,
plygnLo : 127.104341229384,
plygnLa : 37.4621747916096
},
{
setSeqNo : 1,
plygnSeqNo : 183,
plygnLo : 127.104471004684,
plygnLa : 37.4617560002371
},
{
setSeqNo : 1,
plygnSeqNo : 184,
plygnLo : 127.104550629842,
plygnLa : 37.4616123291431
},
{
setSeqNo : 1,
plygnSeqNo : 185,
plygnLo : 127.104611854608,
plygnLa : 37.4614447429934
},
{
setSeqNo : 1,
plygnSeqNo : 186,
plygnLo : 127.104749718272,
plygnLa : 37.4612635823735
},
{
setSeqNo : 1,
plygnSeqNo : 187,
plygnLo : 127.104780309091,
plygnLa : 37.4611602200368
},
{
setSeqNo : 1,
plygnSeqNo : 188,
plygnLo : 127.104625340013,
plygnLa : 37.4610998166472
},
{
setSeqNo : 1,
plygnSeqNo : 189,
plygnLo : 127.104520728686,
plygnLa : 37.4610565526426
},
{
setSeqNo : 1,
plygnSeqNo : 190,
plygnLo : 127.104472303052,
plygnLa : 37.4610295641207
},
{
setSeqNo : 1,
plygnSeqNo : 191,
plygnLo : 127.104427017184,
plygnLa : 37.4609851122008
},
{
setSeqNo : 1,
plygnSeqNo : 192,
plygnLo : 127.10440826221,
plygnLa : 37.460956412972
},
{
setSeqNo : 1,
plygnSeqNo : 193,
plygnLo : 127.10429909833,
plygnLa : 37.4608171322228
},
{
setSeqNo : 1,
plygnSeqNo : 194,
plygnLo : 127.104258822224,
plygnLa : 37.4608053462599
},
{
setSeqNo : 1,
plygnSeqNo : 195,
plygnLo : 127.104249275859,
plygnLa : 37.4608019666232
},
{
setSeqNo : 1,
plygnSeqNo : 196,
plygnLo : 127.104170765577,
plygnLa : 37.460726863365
},
{
setSeqNo : 1,
plygnSeqNo : 197,
plygnLo : 127.104046241707,
plygnLa : 37.4605856219054
},
{
setSeqNo : 1,
plygnSeqNo : 198,
plygnLo : 127.104023415552,
plygnLa : 37.4605574860815
},
{
setSeqNo : 1,
plygnSeqNo : 199,
plygnLo : 127.103980007315,
plygnLa : 37.4604539084219
},
{
setSeqNo : 1,
plygnSeqNo : 200,
plygnLo : 127.10398593543,
plygnLa : 37.4602689175238
},
{
setSeqNo : 1,
plygnSeqNo : 201,
plygnLo : 127.103974284257,
plygnLa : 37.4602689268923
},
{
setSeqNo : 1,
plygnSeqNo : 202,
plygnLo : 127.103974583877,
plygnLa : 37.4602314818812
},
{
setSeqNo : 1,
plygnSeqNo : 203,
plygnLo : 127.10396939724,
plygnLa : 37.4601836162326
},
{
setSeqNo : 1,
plygnSeqNo : 204,
plygnLo : 127.103941660287,
plygnLa : 37.4600510293525
},
{
setSeqNo : 1,
plygnSeqNo : 205,
plygnLo : 127.103889680827,
plygnLa : 37.4600029243426
},
{
setSeqNo : 1,
plygnSeqNo : 206,
plygnLo : 127.103810989485,
plygnLa : 37.4599280920057
},
{
setSeqNo : 1,
plygnSeqNo : 207,
plygnLo : 127.103749142899,
plygnLa : 37.4599044944315
},
{
setSeqNo : 1,
plygnSeqNo : 208,
plygnLo : 127.103640296855,
plygnLa : 37.4598632053399
},
{
setSeqNo : 1,
plygnSeqNo : 209,
plygnLo : 127.103546120228,
plygnLa : 37.4598289313721
},
{
setSeqNo : 1,
plygnSeqNo : 210,
plygnLo : 127.103442878902,
plygnLa : 37.459751867537
},
{
setSeqNo : 1,
plygnSeqNo : 211,
plygnLo : 127.103245796804,
plygnLa : 37.45976386665
},
{
setSeqNo : 1,
plygnSeqNo : 212,
plygnLo : 127.103158904604,
plygnLa : 37.4597594377566
},
{
setSeqNo : 1,
plygnSeqNo : 213,
plygnLo : 127.103065118722,
plygnLa : 37.4597544536485
},
{
setSeqNo : 1,
plygnSeqNo : 214,
plygnLo : 127.10294586894,
plygnLa : 37.4597249858235
},
{
setSeqNo : 1,
plygnSeqNo : 215,
plygnLo : 127.102800334807,
plygnLa : 37.4597172265128
},
{
setSeqNo : 1,
plygnSeqNo : 216,
plygnLo : 127.102691904851,
plygnLa : 37.4597243649748
},
{
setSeqNo : 1,
plygnSeqNo : 217,
plygnLo : 127.102670784744,
plygnLa : 37.4597781559341
},
{
setSeqNo : 1,
plygnSeqNo : 218,
plygnLo : 127.102634172095,
plygnLa : 37.4598674411412
},
{
setSeqNo : 1,
plygnSeqNo : 219,
plygnLo : 127.102550705172,
plygnLa : 37.459788395358
},
{
setSeqNo : 1,
plygnSeqNo : 220,
plygnLo : 127.102447255881,
plygnLa : 37.4596899389907
},
{
setSeqNo : 1,
plygnSeqNo : 221,
plygnLo : 127.102381479482,
plygnLa : 37.4596277723597
},
{
setSeqNo : 1,
plygnSeqNo : 222,
plygnLo : 127.102287581414,
plygnLa : 37.4595385905215
},
{
setSeqNo : 1,
plygnSeqNo : 223,
plygnLo : 127.102258950031,
plygnLa : 37.4595208832816
},
{
setSeqNo : 1,
plygnSeqNo : 224,
plygnLo : 127.102132746946,
plygnLa : 37.4594393315586
},
{
setSeqNo : 1,
plygnSeqNo : 225,
plygnLo : 127.102098818022,
plygnLa : 37.459423593039
},
{
setSeqNo : 1,
plygnSeqNo : 226,
plygnLo : 127.101953716043,
plygnLa : 37.4593496647474
},
{
setSeqNo : 1,
plygnSeqNo : 227,
plygnLo : 127.101852654927,
plygnLa : 37.4591779996207
},
{
setSeqNo : 1,
plygnSeqNo : 228,
plygnLo : 127.101625719195,
plygnLa : 37.4590512057165
},
{
setSeqNo : 1,
plygnSeqNo : 229,
plygnLo : 127.101381192898,
plygnLa : 37.4589728527943
},
{
setSeqNo : 1,
plygnSeqNo : 230,
plygnLo : 127.101320272809,
plygnLa : 37.4588453577768
},
{
setSeqNo : 1,
plygnSeqNo : 231,
plygnLo : 127.101226600487,
plygnLa : 37.4586615774019
},
{
setSeqNo : 1,
plygnSeqNo : 232,
plygnLo : 127.101164807338,
plygnLa : 37.4585405535288
},
{
setSeqNo : 1,
plygnSeqNo : 233,
plygnLo : 127.101277798945,
plygnLa : 37.4582417203696
},
{
setSeqNo : 1,
plygnSeqNo : 234,
plygnLo : 127.1010595277,
plygnLa : 37.4579899025346
},
{
setSeqNo : 1,
plygnSeqNo : 235,
plygnLo : 127.100765888731,
plygnLa : 37.4577598357406
},
{
setSeqNo : 1,
plygnSeqNo : 236,
plygnLo : 127.100249231893,
plygnLa : 37.4575476845095
},
{
setSeqNo : 1,
plygnSeqNo : 237,
plygnLo : 127.099738774032,
plygnLa : 37.4573546741636
},
{
setSeqNo : 1,
plygnSeqNo : 238,
plygnLo : 127.099506329535,
plygnLa : 37.4569128151765
},
{
setSeqNo : 1,
plygnSeqNo : 239,
plygnLo : 127.099306106833,
plygnLa : 37.4566775933244
},
{
setSeqNo : 1,
plygnSeqNo : 240,
plygnLo : 127.099135821673,
plygnLa : 37.4563702658992
},
{
setSeqNo : 1,
plygnSeqNo : 241,
plygnLo : 127.099095705632,
plygnLa : 37.4562188140601
},
{
setSeqNo : 1,
plygnSeqNo : 242,
plygnLo : 127.098893194656,
plygnLa : 37.456116212506
},
{
setSeqNo : 1,
plygnSeqNo : 243,
plygnLo : 127.098685385497,
plygnLa : 37.4561481980846
},
{
setSeqNo : 1,
plygnSeqNo : 244,
plygnLo : 127.098472012394,
plygnLa : 37.4562548077929
},
{
setSeqNo : 1,
plygnSeqNo : 245,
plygnLo : 127.098237460117,
plygnLa : 37.4563712841426
},
{
setSeqNo : 1,
plygnSeqNo : 246,
plygnLo : 127.097230499738,
plygnLa : 37.4563675985482
},
{
setSeqNo : 1,
plygnSeqNo : 247,
plygnLo : 127.096365316984,
plygnLa : 37.4563468971926
},
{
setSeqNo : 1,
plygnSeqNo : 248,
plygnLo : 127.096076330384,
plygnLa : 37.4564296251989
},
{
setSeqNo : 1,
plygnSeqNo : 249,
plygnLo : 127.095769337866,
plygnLa : 37.4565196909891
},
{
setSeqNo : 1,
plygnSeqNo : 250,
plygnLo : 127.095458441096,
plygnLa : 37.4564534909248
},
{
setSeqNo : 1,
plygnSeqNo : 251,
plygnLo : 127.095230380851,
plygnLa : 37.4563962320696
},
{
setSeqNo : 1,
plygnSeqNo : 252,
plygnLo : 127.095222781559,
plygnLa : 37.4563942645583
},
{
setSeqNo : 1,
plygnSeqNo : 253,
plygnLo : 127.095213864931,
plygnLa : 37.4563213439584
},
{
setSeqNo : 1,
plygnSeqNo : 254,
plygnLo : 127.095039186863,
plygnLa : 37.4563026246468
},
{
setSeqNo : 1,
plygnSeqNo : 255,
plygnLo : 127.094312207708,
plygnLa : 37.4562251985151
},
{
setSeqNo : 1,
plygnSeqNo : 256,
plygnLo : 127.093773575174,
plygnLa : 37.4560778008504
},
{
setSeqNo : 1,
plygnSeqNo : 257,
plygnLo : 127.093540415056,
plygnLa : 37.455888492661
},
{
setSeqNo : 1,
plygnSeqNo : 258,
plygnLo : 127.093458239032,
plygnLa : 37.4555498329957
},
{
setSeqNo : 1,
plygnSeqNo : 259,
plygnLo : 127.093342283331,
plygnLa : 37.4553128503801
},
{
setSeqNo : 1,
plygnSeqNo : 260,
plygnLo : 127.093142575088,
plygnLa : 37.4549058571706
},
{
setSeqNo : 1,
plygnSeqNo : 261,
plygnLo : 127.093199641745,
plygnLa : 37.4547785478439
},
{
setSeqNo : 1,
plygnSeqNo : 262,
plygnLo : 127.09321758272,
plygnLa : 37.4547160299073
},
{
setSeqNo : 1,
plygnSeqNo : 263,
plygnLo : 127.092815365778,
plygnLa : 37.4537593028567
},
{
setSeqNo : 1,
plygnSeqNo : 264,
plygnLo : 127.092725511806,
plygnLa : 37.4536340781017
},
{
setSeqNo : 1,
plygnSeqNo : 265,
plygnLo : 127.091882257882,
plygnLa : 37.4534669131926
},
{
setSeqNo : 1,
plygnSeqNo : 266,
plygnLo : 127.091128842814,
plygnLa : 37.4529558779475
},
{
setSeqNo : 1,
plygnSeqNo : 267,
plygnLo : 127.090959110386,
plygnLa : 37.452782572268
},
{
setSeqNo : 1,
plygnSeqNo : 268,
plygnLo : 127.090302866392,
plygnLa : 37.4512668372007
},
{
setSeqNo : 1,
plygnSeqNo : 269,
plygnLo : 127.090140567062,
plygnLa : 37.451095766586
},
{
setSeqNo : 1,
plygnSeqNo : 270,
plygnLo : 127.089619572143,
plygnLa : 37.4508869520697
},
{
setSeqNo : 1,
plygnSeqNo : 271,
plygnLo : 127.089542792199,
plygnLa : 37.4501662037827
},
{
setSeqNo : 1,
plygnSeqNo : 272,
plygnLo : 127.088821134497,
plygnLa : 37.4497497436719
},
{
setSeqNo : 1,
plygnSeqNo : 273,
plygnLo : 127.088959592031,
plygnLa : 37.4494618886764
},
{
setSeqNo : 1,
plygnSeqNo : 274,
plygnLo : 127.088432141051,
plygnLa : 37.4489948801235
},
{
setSeqNo : 1,
plygnSeqNo : 275,
plygnLo : 127.088326818635,
plygnLa : 37.4486277971054
},
{
setSeqNo : 1,
plygnSeqNo : 276,
plygnLo : 127.088360246655,
plygnLa : 37.4483732389975
},
{
setSeqNo : 1,
plygnSeqNo : 277,
plygnLo : 127.088415006596,
plygnLa : 37.4480752986783
},
{
setSeqNo : 1,
plygnSeqNo : 278,
plygnLo : 127.08864240528,
plygnLa : 37.4475970397294
},
{
setSeqNo : 1,
plygnSeqNo : 279,
plygnLo : 127.088545831576,
plygnLa : 37.4474537878989
},
{
setSeqNo : 1,
plygnSeqNo : 280,
plygnLo : 127.088369358929,
plygnLa : 37.4472404957477
},
{
setSeqNo : 1,
plygnSeqNo : 281,
plygnLo : 127.088276925213,
plygnLa : 37.446554392539
},
{
setSeqNo : 1,
plygnSeqNo : 282,
plygnLo : 127.088386577398,
plygnLa : 37.4463977616933
},
{
setSeqNo : 1,
plygnSeqNo : 283,
plygnLo : 127.088237822465,
plygnLa : 37.446178530127
},
{
setSeqNo : 1,
plygnSeqNo : 284,
plygnLo : 127.088161339505,
plygnLa : 37.4453854210689
},
{
setSeqNo : 1,
plygnSeqNo : 285,
plygnLo : 127.087869097433,
plygnLa : 37.4449168315577
},
{
setSeqNo : 1,
plygnSeqNo : 286,
plygnLo : 127.087855126165,
plygnLa : 37.4448943080317
},
{
setSeqNo : 1,
plygnSeqNo : 287,
plygnLo : 127.087476802267,
plygnLa : 37.4448022312545
},
{
setSeqNo : 1,
plygnSeqNo : 288,
plygnLo : 127.08730393543,
plygnLa : 37.4446421486203
},
{
setSeqNo : 1,
plygnSeqNo : 289,
plygnLo : 127.086421352832,
plygnLa : 37.4442626770896
},
{
setSeqNo : 1,
plygnSeqNo : 290,
plygnLo : 127.085703064476,
plygnLa : 37.4444172001392
},
{
setSeqNo : 1,
plygnSeqNo : 291,
plygnLo : 127.085260122951,
plygnLa : 37.4443186933884
},
{
setSeqNo : 1,
plygnSeqNo : 292,
plygnLo : 127.083861954402,
plygnLa : 37.4439218258782
},
{
setSeqNo : 1,
plygnSeqNo : 293,
plygnLo : 127.083805078188,
plygnLa : 37.4434167346232
},
{
setSeqNo : 1,
plygnSeqNo : 294,
plygnLo : 127.083471501934,
plygnLa : 37.4430627525295
},
{
setSeqNo : 1,
plygnSeqNo : 295,
plygnLo : 127.083334734108,
plygnLa : 37.4429575479199
},
{
setSeqNo : 1,
plygnSeqNo : 296,
plygnLo : 127.083208064496,
plygnLa : 37.4425685085455
},
{
setSeqNo : 1,
plygnSeqNo : 297,
plygnLo : 127.082974728603,
plygnLa : 37.4423206127378
},
{
setSeqNo : 1,
plygnSeqNo : 298,
plygnLo : 127.082904642995,
plygnLa : 37.4421742461334
},
{
setSeqNo : 1,
plygnSeqNo : 299,
plygnLo : 127.082431872706,
plygnLa : 37.4415799067367
},
{
setSeqNo : 1,
plygnSeqNo : 300,
plygnLo : 127.082097393384,
plygnLa : 37.4413512245634
},
{
setSeqNo : 1,
plygnSeqNo : 301,
plygnLo : 127.081444156909,
plygnLa : 37.4412314374636
},
{
setSeqNo : 1,
plygnSeqNo : 302,
plygnLo : 127.081250175588,
plygnLa : 37.4411189429454
},
{
setSeqNo : 1,
plygnSeqNo : 303,
plygnLo : 127.080700745273,
plygnLa : 37.4411514148311
},
{
setSeqNo : 1,
plygnSeqNo : 304,
plygnLo : 127.080171654057,
plygnLa : 37.4410515325813
},
{
setSeqNo : 1,
plygnSeqNo : 305,
plygnLo : 127.079961010216,
plygnLa : 37.4412124480509
},
{
setSeqNo : 1,
plygnSeqNo : 306,
plygnLo : 127.079575396777,
plygnLa : 37.4413869848822
},
{
setSeqNo : 1,
plygnSeqNo : 307,
plygnLo : 127.079083404682,
plygnLa : 37.4412991817764
},
{
setSeqNo : 1,
plygnSeqNo : 308,
plygnLo : 127.078530680907,
plygnLa : 37.441558014477
},
{
setSeqNo : 1,
plygnSeqNo : 309,
plygnLo : 127.078178960746,
plygnLa : 37.4415520526573
},
{
setSeqNo : 1,
plygnSeqNo : 310,
plygnLo : 127.077861019845,
plygnLa : 37.4417735646339
},
{
setSeqNo : 1,
plygnSeqNo : 311,
plygnLo : 127.077748461241,
plygnLa : 37.4418634584764
},
{
setSeqNo : 1,
plygnSeqNo : 312,
plygnLo : 127.077601934137,
plygnLa : 37.4417095343676
},
{
setSeqNo : 1,
plygnSeqNo : 313,
plygnLo : 127.077358541616,
plygnLa : 37.4416314207428
},
{
setSeqNo : 1,
plygnSeqNo : 314,
plygnLo : 127.077078005013,
plygnLa : 37.4416513142402
},
{
setSeqNo : 1,
plygnSeqNo : 315,
plygnLo : 127.076936116646,
plygnLa : 37.4417156022605
},
{
setSeqNo : 1,
plygnSeqNo : 316,
plygnLo : 127.076721455204,
plygnLa : 37.4419378901002
},
{
setSeqNo : 1,
plygnSeqNo : 317,
plygnLo : 127.076671146634,
plygnLa : 37.4419460854383
},
{
setSeqNo : 1,
plygnSeqNo : 318,
plygnLo : 127.076440257559,
plygnLa : 37.4419983204139
},
{
setSeqNo : 1,
plygnSeqNo : 319,
plygnLo : 127.076010630165,
plygnLa : 37.4421393744704
},
{
setSeqNo : 1,
plygnSeqNo : 320,
plygnLo : 127.075242908596,
plygnLa : 37.4419422019733
},
{
setSeqNo : 1,
plygnSeqNo : 321,
plygnLo : 127.074756040642,
plygnLa : 37.4422192754749
},
{
setSeqNo : 1,
plygnSeqNo : 322,
plygnLo : 127.07449774398,
plygnLa : 37.4422332379436
},
{
setSeqNo : 1,
plygnSeqNo : 323,
plygnLo : 127.073853083217,
plygnLa : 37.4422130739571
},
{
setSeqNo : 1,
plygnSeqNo : 324,
plygnLo : 127.072993372511,
plygnLa : 37.4420176281342
},
{
setSeqNo : 1,
plygnSeqNo : 325,
plygnLo : 127.072758926003,
plygnLa : 37.4420512776309
},
{
setSeqNo : 1,
plygnSeqNo : 326,
plygnLo : 127.072607848359,
plygnLa : 37.4421152857054
},
{
setSeqNo : 1,
plygnSeqNo : 327,
plygnLo : 127.07224986028,
plygnLa : 37.4422002500904
},
{
setSeqNo : 1,
plygnSeqNo : 328,
plygnLo : 127.072138499828,
plygnLa : 37.442263106786
},
{
setSeqNo : 1,
plygnSeqNo : 329,
plygnLo : 127.071915003745,
plygnLa : 37.4419256419565
},
{
setSeqNo : 1,
plygnSeqNo : 330,
plygnLo : 127.071702570964,
plygnLa : 37.4417036166546
},
{
setSeqNo : 1,
plygnSeqNo : 331,
plygnLo : 127.071625945222,
plygnLa : 37.441524018584
},
{
setSeqNo : 1,
plygnSeqNo : 332,
plygnLo : 127.071861372208,
plygnLa : 37.441029739218
},
{
setSeqNo : 1,
plygnSeqNo : 333,
plygnLo : 127.072077693148,
plygnLa : 37.4401212769354
},
{
setSeqNo : 1,
plygnSeqNo : 334,
plygnLo : 127.072211715847,
plygnLa : 37.4393829385648
},
{
setSeqNo : 1,
plygnSeqNo : 335,
plygnLo : 127.072007826255,
plygnLa : 37.4388568084101
},
{
setSeqNo : 1,
plygnSeqNo : 336,
plygnLo : 127.072490106737,
plygnLa : 37.4385926948881
},
{
setSeqNo : 1,
plygnSeqNo : 337,
plygnLo : 127.072966269611,
plygnLa : 37.4382083545014
},
{
setSeqNo : 1,
plygnSeqNo : 338,
plygnLo : 127.073555325168,
plygnLa : 37.4379109524254
},
{
setSeqNo : 1,
plygnSeqNo : 339,
plygnLo : 127.073702493323,
plygnLa : 37.4378218783337
},
{
setSeqNo : 1,
plygnSeqNo : 340,
plygnLo : 127.073760192213,
plygnLa : 37.4377894711854
},
{
setSeqNo : 1,
plygnSeqNo : 341,
plygnLo : 127.073795375165,
plygnLa : 37.4376571092631
},
{
setSeqNo : 1,
plygnSeqNo : 342,
plygnLo : 127.073843509807,
plygnLa : 37.4374078970954
},
{
setSeqNo : 1,
plygnSeqNo : 343,
plygnLo : 127.073560066309,
plygnLa : 37.4369637650255
},
{
setSeqNo : 1,
plygnSeqNo : 344,
plygnLo : 127.073203506137,
plygnLa : 37.4366697386835
},
{
setSeqNo : 1,
plygnSeqNo : 345,
plygnLo : 127.073024228064,
plygnLa : 37.4364068698461
},
{
setSeqNo : 1,
plygnSeqNo : 346,
plygnLo : 127.072779249034,
plygnLa : 37.4362991758527
},
{
setSeqNo : 1,
plygnSeqNo : 347,
plygnLo : 127.072093579452,
plygnLa : 37.4361610577076
},
{
setSeqNo : 1,
plygnSeqNo : 348,
plygnLo : 127.071964769511,
plygnLa : 37.4360541395705
},
{
setSeqNo : 1,
plygnSeqNo : 349,
plygnLo : 127.071688751831,
plygnLa : 37.4359810967002
},
{
setSeqNo : 1,
plygnSeqNo : 350,
plygnLo : 127.071439527807,
plygnLa : 37.4358635560744
},
{
setSeqNo : 1,
plygnSeqNo : 351,
plygnLo : 127.07127209011,
plygnLa : 37.4356015136613
},
{
setSeqNo : 1,
plygnSeqNo : 352,
plygnLo : 127.071274512309,
plygnLa : 37.4353492313039
},
{
setSeqNo : 1,
plygnSeqNo : 353,
plygnLo : 127.071445651708,
plygnLa : 37.4350377146145
},
{
setSeqNo : 1,
plygnSeqNo : 354,
plygnLo : 127.071458181504,
plygnLa : 37.4348420168571
},
{
setSeqNo : 1,
plygnSeqNo : 355,
plygnLo : 127.071469400729,
plygnLa : 37.4347569824862
},
{
setSeqNo : 1,
plygnSeqNo : 356,
plygnLo : 127.071484827671,
plygnLa : 37.4346375887324
},
{
setSeqNo : 1,
plygnSeqNo : 357,
plygnLo : 127.071545989933,
plygnLa : 37.4345291520055
},
{
setSeqNo : 1,
plygnSeqNo : 358,
plygnLo : 127.071502645756,
plygnLa : 37.4344449871316
},
{
setSeqNo : 1,
plygnSeqNo : 359,
plygnLo : 127.071519358666,
plygnLa : 37.4343737440856
},
{
setSeqNo : 1,
plygnSeqNo : 360,
plygnLo : 127.071519820767,
plygnLa : 37.4341169565154
},
{
setSeqNo : 1,
plygnSeqNo : 361,
plygnLo : 127.071370969542,
plygnLa : 37.4339002354561
},
{
setSeqNo : 1,
plygnSeqNo : 362,
plygnLo : 127.071119108254,
plygnLa : 37.4334017384904
},
{
setSeqNo : 1,
plygnSeqNo : 363,
plygnLo : 127.071004301654,
plygnLa : 37.4333412672096
},
{
setSeqNo : 1,
plygnSeqNo : 364,
plygnLo : 127.070909977577,
plygnLa : 37.43309494991
},
{
setSeqNo : 1,
plygnSeqNo : 365,
plygnLo : 127.070792293255,
plygnLa : 37.4329885830364
},
{
setSeqNo : 1,
plygnSeqNo : 366,
plygnLo : 127.070730816248,
plygnLa : 37.432940758377
},
{
setSeqNo : 1,
plygnSeqNo : 367,
plygnLo : 127.070571091769,
plygnLa : 37.4324168608012
},
{
setSeqNo : 1,
plygnSeqNo : 368,
plygnLo : 127.07062900372,
plygnLa : 37.4320445924187
},
{
setSeqNo : 1,
plygnSeqNo : 369,
plygnLo : 127.070896061366,
plygnLa : 37.4317907484416
},
{
setSeqNo : 1,
plygnSeqNo : 370,
plygnLo : 127.070960060716,
plygnLa : 37.4316963836181
},
{
setSeqNo : 1,
plygnSeqNo : 371,
plygnLo : 127.071206753282,
plygnLa : 37.4308177553541
},
{
setSeqNo : 1,
plygnSeqNo : 372,
plygnLo : 127.071220197682,
plygnLa : 37.4306606375262
},
{
setSeqNo : 1,
plygnSeqNo : 373,
plygnLo : 127.071169664614,
plygnLa : 37.4304204950901
},
{
setSeqNo : 1,
plygnSeqNo : 374,
plygnLo : 127.071105229794,
plygnLa : 37.4304191186486
},
{
setSeqNo : 1,
plygnSeqNo : 375,
plygnLo : 127.070952700361,
plygnLa : 37.4302347810136
},
{
setSeqNo : 1,
plygnSeqNo : 376,
plygnLo : 127.070952509507,
plygnLa : 37.4302131020921
},
{
setSeqNo : 1,
plygnSeqNo : 377,
plygnLo : 127.070905172523,
plygnLa : 37.430191452294
},
{
setSeqNo : 1,
plygnSeqNo : 378,
plygnLo : 127.07088965627,
plygnLa : 37.4302131391155
},
{
setSeqNo : 1,
plygnSeqNo : 379,
plygnLo : 127.070874113961,
plygnLa : 37.4302038582781
},
{
setSeqNo : 1,
plygnSeqNo : 380,
plygnLo : 127.070884698144,
plygnLa : 37.4301883642316
},
{
setSeqNo : 1,
plygnSeqNo : 381,
plygnLo : 127.070706466254,
plygnLa : 37.4302740646933
},
{
setSeqNo : 1,
plygnSeqNo : 382,
plygnLo : 127.07056388581,
plygnLa : 37.430342290613
},
{
setSeqNo : 1,
plygnSeqNo : 383,
plygnLo : 127.070334868619,
plygnLa : 37.4304795396347
},
{
setSeqNo : 1,
plygnSeqNo : 384,
plygnLo : 127.070235944148,
plygnLa : 37.4306063071617
},
{
setSeqNo : 1,
plygnSeqNo : 385,
plygnLo : 127.070112695972,
plygnLa : 37.4307629282191
},
{
setSeqNo : 1,
plygnSeqNo : 386,
plygnLo : 127.0700324985,
plygnLa : 37.4309105154399
},
{
setSeqNo : 1,
plygnSeqNo : 387,
plygnLo : 127.070014863886,
plygnLa : 37.4309246083789
},
{
setSeqNo : 1,
plygnSeqNo : 388,
plygnLo : 127.069873676888,
plygnLa : 37.4309722727064
},
{
setSeqNo : 1,
plygnSeqNo : 389,
plygnLo : 127.069819824892,
plygnLa : 37.4309694827678
},
{
setSeqNo : 1,
plygnSeqNo : 390,
plygnLo : 127.069901842902,
plygnLa : 37.4308855335553
},
{
setSeqNo : 1,
plygnSeqNo : 391,
plygnLo : 127.069911347057,
plygnLa : 37.4308632825416
},
{
setSeqNo : 1,
plygnSeqNo : 392,
plygnLo : 127.069764886326,
plygnLa : 37.4307394784449
},
{
setSeqNo : 1,
plygnSeqNo : 393,
plygnLo : 127.069706052496,
plygnLa : 37.4306877039607
},
{
setSeqNo : 1,
plygnSeqNo : 394,
plygnLo : 127.06961542838,
plygnLa : 37.4306117291091
},
{
setSeqNo : 1,
plygnSeqNo : 395,
plygnLo : 127.069424543302,
plygnLa : 37.4305645361262
},
{
setSeqNo : 1,
plygnSeqNo : 396,
plygnLo : 127.069334488058,
plygnLa : 37.4305451617653
},
{
setSeqNo : 1,
plygnSeqNo : 397,
plygnLo : 127.069118529449,
plygnLa : 37.4304816556754
},
{
setSeqNo : 1,
plygnSeqNo : 398,
plygnLo : 127.069013281383,
plygnLa : 37.4304513068035
},
{
setSeqNo : 1,
plygnSeqNo : 399,
plygnLo : 127.068964194338,
plygnLa : 37.4304324693831
},
{
setSeqNo : 1,
plygnSeqNo : 400,
plygnLo : 127.068909285793,
plygnLa : 37.4304339042034
},
{
setSeqNo : 1,
plygnSeqNo : 401,
plygnLo : 127.068750596813,
plygnLa : 37.4304559625143
},
{
setSeqNo : 1,
plygnSeqNo : 402,
plygnLo : 127.068372117124,
plygnLa : 37.4306636881893
},
{
setSeqNo : 1,
plygnSeqNo : 403,
plygnLo : 127.068270263724,
plygnLa : 37.4306795138327
},
{
setSeqNo : 1,
plygnSeqNo : 404,
plygnLo : 127.067829915851,
plygnLa : 37.4304066485222
},
{
setSeqNo : 1,
plygnSeqNo : 405,
plygnLo : 127.066720138789,
plygnLa : 37.4301304835835
},
{
setSeqNo : 1,
plygnSeqNo : 406,
plygnLo : 127.066700366378,
plygnLa : 37.4301288013601
},
{
setSeqNo : 1,
plygnSeqNo : 407,
plygnLo : 127.066585902726,
plygnLa : 37.4300525673528
},
{
setSeqNo : 1,
plygnSeqNo : 408,
plygnLo : 127.066577362286,
plygnLa : 37.4299734444018
},
{
setSeqNo : 1,
plygnSeqNo : 409,
plygnLo : 127.06611791105,
plygnLa : 37.4296524319463
},
{
setSeqNo : 1,
plygnSeqNo : 410,
plygnLo : 127.066093893974,
plygnLa : 37.4296428685046
},
{
setSeqNo : 1,
plygnSeqNo : 411,
plygnLo : 127.066091767458,
plygnLa : 37.4296273898473
},
{
setSeqNo : 1,
plygnSeqNo : 412,
plygnLo : 127.065961406607,
plygnLa : 37.429532854905
},
{
setSeqNo : 1,
plygnSeqNo : 413,
plygnLo : 127.065698039919,
plygnLa : 37.4291585108498
},
{
setSeqNo : 1,
plygnSeqNo : 414,
plygnLo : 127.065681658463,
plygnLa : 37.4289853554719
},
{
setSeqNo : 1,
plygnSeqNo : 415,
plygnLo : 127.065392863788,
plygnLa : 37.429011424833
},
{
setSeqNo : 1,
plygnSeqNo : 416,
plygnLo : 127.065073669157,
plygnLa : 37.4289870987568
},
{
setSeqNo : 1,
plygnSeqNo : 417,
plygnLo : 127.064669032926,
plygnLa : 37.4291720231172
},
{
setSeqNo : 1,
plygnSeqNo : 418,
plygnLo : 127.064385648226,
plygnLa : 37.4291136086411
},
{
setSeqNo : 1,
plygnSeqNo : 419,
plygnLo : 127.064041044968,
plygnLa : 37.4293204539403
},
{
setSeqNo : 1,
plygnSeqNo : 420,
plygnLo : 127.063656029536,
plygnLa : 37.4295323953132
},
{
setSeqNo : 1,
plygnSeqNo : 421,
plygnLo : 127.06346206429,
plygnLa : 37.4295927560413
},
{
setSeqNo : 1,
plygnSeqNo : 422,
plygnLo : 127.063316198753,
plygnLa : 37.4297516350813
},
{
setSeqNo : 1,
plygnSeqNo : 423,
plygnLo : 127.063096566261,
plygnLa : 37.429729225056
},
{
setSeqNo : 1,
plygnSeqNo : 424,
plygnLo : 127.062926730071,
plygnLa : 37.4297152317933
},
{
setSeqNo : 1,
plygnSeqNo : 425,
plygnLo : 127.062880825805,
plygnLa : 37.4297034323711
},
{
setSeqNo : 1,
plygnSeqNo : 426,
plygnLo : 127.061144989722,
plygnLa : 37.4299853203928
},
{
setSeqNo : 1,
plygnSeqNo : 427,
plygnLo : 127.060768514782,
plygnLa : 37.4298528987985
},
{
setSeqNo : 1,
plygnSeqNo : 428,
plygnLo : 127.060575146095,
plygnLa : 37.4297831678546
},
{
setSeqNo : 1,
plygnSeqNo : 429,
plygnLo : 127.060517939402,
plygnLa : 37.4297640409258
},
{
setSeqNo : 1,
plygnSeqNo : 430,
plygnLo : 127.060207195749,
plygnLa : 37.4297140811498
},
{
setSeqNo : 1,
plygnSeqNo : 431,
plygnLo : 127.06011977478,
plygnLa : 37.4296631621609
},
{
setSeqNo : 1,
plygnSeqNo : 432,
plygnLo : 127.059961346249,
plygnLa : 37.429568914482
},
{
setSeqNo : 1,
plygnSeqNo : 433,
plygnLo : 127.059781118958,
plygnLa : 37.4295873018277
},
{
setSeqNo : 1,
plygnSeqNo : 434,
plygnLo : 127.059189419333,
plygnLa : 37.4296495378422
},
{
setSeqNo : 1,
plygnSeqNo : 435,
plygnLo : 127.059057376256,
plygnLa : 37.4296636854808
},
{
setSeqNo : 1,
plygnSeqNo : 436,
plygnLo : 127.058673175827,
plygnLa : 37.4298080317389
},
{
setSeqNo : 1,
plygnSeqNo : 437,
plygnLo : 127.058460679181,
plygnLa : 37.4298864057304
},
{
setSeqNo : 1,
plygnSeqNo : 438,
plygnLo : 127.058069929768,
plygnLa : 37.4300107715126
},
{
setSeqNo : 1,
plygnSeqNo : 439,
plygnLo : 127.057379026277,
plygnLa : 37.4298573598975
},
{
setSeqNo : 1,
plygnSeqNo : 440,
plygnLo : 127.05680836804,
plygnLa : 37.4297309196558
},
{
setSeqNo : 1,
plygnSeqNo : 441,
plygnLo : 127.056758216946,
plygnLa : 37.4297179950285
},
{
setSeqNo : 1,
plygnSeqNo : 442,
plygnLo : 127.056394628734,
plygnLa : 37.4295810399233
},
{
setSeqNo : 1,
plygnSeqNo : 443,
plygnLo : 127.056107785028,
plygnLa : 37.4296107447168
},
{
setSeqNo : 1,
plygnSeqNo : 444,
plygnLo : 127.055971100233,
plygnLa : 37.4295499890819
},
{
setSeqNo : 1,
plygnSeqNo : 445,
plygnLo : 127.055546750446,
plygnLa : 37.429361529425
},
{
setSeqNo : 1,
plygnSeqNo : 446,
plygnLo : 127.055337938719,
plygnLa : 37.4293982249321
},
{
setSeqNo : 1,
plygnSeqNo : 447,
plygnLo : 127.05512125419,
plygnLa : 37.4292930219941
},
{
setSeqNo : 1,
plygnSeqNo : 448,
plygnLo : 127.054768522266,
plygnLa : 37.4292731868131
},
{
setSeqNo : 1,
plygnSeqNo : 449,
plygnLo : 127.054275702263,
plygnLa : 37.4291103884329
},
{
setSeqNo : 1,
plygnSeqNo : 450,
plygnLo : 127.054112542109,
plygnLa : 37.4290564011252
},
{
setSeqNo : 1,
plygnSeqNo : 451,
plygnLo : 127.053890061785,
plygnLa : 37.428982157574
},
{
setSeqNo : 1,
plygnSeqNo : 452,
plygnLo : 127.053684397037,
plygnLa : 37.4289746534124
},
{
setSeqNo : 1,
plygnSeqNo : 453,
plygnLo : 127.053458318574,
plygnLa : 37.4288086233768
},
{
setSeqNo : 1,
plygnSeqNo : 454,
plygnLo : 127.053380424388,
plygnLa : 37.4287520655238
},
{
setSeqNo : 1,
plygnSeqNo : 455,
plygnLo : 127.053125432403,
plygnLa : 37.4286336409065
},
{
setSeqNo : 1,
plygnSeqNo : 456,
plygnLo : 127.052910691786,
plygnLa : 37.4285363084508
},
{
setSeqNo : 1,
plygnSeqNo : 457,
plygnLo : 127.052500905019,
plygnLa : 37.4284463857
},
{
setSeqNo : 1,
plygnSeqNo : 458,
plygnLo : 127.052463274299,
plygnLa : 37.4284007923625
},
{
setSeqNo : 1,
plygnSeqNo : 459,
plygnLo : 127.052396130201,
plygnLa : 37.4283191622838
},
{
setSeqNo : 1,
plygnSeqNo : 460,
plygnLo : 127.052324621009,
plygnLa : 37.4282975147515
},
{
setSeqNo : 1,
plygnSeqNo : 461,
plygnLo : 127.052169482623,
plygnLa : 37.4283398126296
},
{
setSeqNo : 1,
plygnSeqNo : 462,
plygnLo : 127.051880682753,
plygnLa : 37.4286136163159
},
{
setSeqNo : 1,
plygnSeqNo : 463,
plygnLo : 127.051654864647,
plygnLa : 37.4288282702852
},
{
setSeqNo : 1,
plygnSeqNo : 464,
plygnLo : 127.051417750842,
plygnLa : 37.4290539032569
},
{
setSeqNo : 1,
plygnSeqNo : 465,
plygnLo : 127.051359064363,
plygnLa : 37.4291983773038
},
{
setSeqNo : 1,
plygnSeqNo : 466,
plygnLo : 127.050918417727,
plygnLa : 37.4294508454614
},
{
setSeqNo : 1,
plygnSeqNo : 467,
plygnLo : 127.050716564324,
plygnLa : 37.4296055053628
},
{
setSeqNo : 1,
plygnSeqNo : 468,
plygnLo : 127.050554231023,
plygnLa : 37.4297291743418
},
{
setSeqNo : 1,
plygnSeqNo : 469,
plygnLo : 127.050361520305,
plygnLa : 37.4298213275859
},
{
setSeqNo : 1,
plygnSeqNo : 470,
plygnLo : 127.050193510463,
plygnLa : 37.4299022083552
},
{
setSeqNo : 1,
plygnSeqNo : 471,
plygnLo : 127.050050462066,
plygnLa : 37.430094858279
},
{
setSeqNo : 1,
plygnSeqNo : 472,
plygnLo : 127.049966849031,
plygnLa : 37.4302094916152
},
{
setSeqNo : 1,
plygnSeqNo : 473,
plygnLo : 127.04986522766,
plygnLa : 37.4303097716027
},
{
setSeqNo : 1,
plygnSeqNo : 474,
plygnLo : 127.049579750029,
plygnLa : 37.4302701795226
},
{
setSeqNo : 1,
plygnSeqNo : 475,
plygnLo : 127.049241884416,
plygnLa : 37.4303255028726
},
{
setSeqNo : 1,
plygnSeqNo : 476,
plygnLo : 127.048538993794,
plygnLa : 37.4304432037297
},
{
setSeqNo : 1,
plygnSeqNo : 477,
plygnLo : 127.048144291571,
plygnLa : 37.4305086838264
},
{
setSeqNo : 1,
plygnSeqNo : 478,
plygnLo : 127.04778613582,
plygnLa : 37.4305690759723
},
{
setSeqNo : 1,
plygnSeqNo : 479,
plygnLo : 127.047554904475,
plygnLa : 37.4306074588272
},
{
setSeqNo : 1,
plygnSeqNo : 480,
plygnLo : 127.047369237282,
plygnLa : 37.4307018583891
},
{
setSeqNo : 1,
plygnSeqNo : 481,
plygnLo : 127.047302572347,
plygnLa : 37.4311008597551
},
{
setSeqNo : 1,
plygnSeqNo : 482,
plygnLo : 127.047181146374,
plygnLa : 37.4317324603848
},
{
setSeqNo : 1,
plygnSeqNo : 483,
plygnLo : 127.047224754639,
plygnLa : 37.4320404789507
},
{
setSeqNo : 1,
plygnSeqNo : 484,
plygnLo : 127.046536433014,
plygnLa : 37.4326508888727
},
{
setSeqNo : 1,
plygnSeqNo : 485,
plygnLo : 127.0464416584,
plygnLa : 37.4329904984575
},
{
setSeqNo : 1,
plygnSeqNo : 486,
plygnLo : 127.046311644953,
plygnLa : 37.4334472409441
},
{
setSeqNo : 1,
plygnSeqNo : 487,
plygnLo : 127.046306881283,
plygnLa : 37.4334525948965
},
{
setSeqNo : 1,
plygnSeqNo : 488,
plygnLo : 127.04622867353,
plygnLa : 37.4334588244469
},
{
setSeqNo : 1,
plygnSeqNo : 489,
plygnLo : 127.045905606269,
plygnLa : 37.4334814625873
},
{
setSeqNo : 1,
plygnSeqNo : 490,
plygnLo : 127.045780816067,
plygnLa : 37.4335288117046
},
{
setSeqNo : 1,
plygnSeqNo : 491,
plygnLo : 127.045553657506,
plygnLa : 37.4336153390633
},
{
setSeqNo : 1,
plygnSeqNo : 492,
plygnLo : 127.045261545968,
plygnLa : 37.4337275156341
},
{
setSeqNo : 1,
plygnSeqNo : 493,
plygnLo : 127.044951245075,
plygnLa : 37.4338472927774
},
{
setSeqNo : 1,
plygnSeqNo : 494,
plygnLo : 127.044848002539,
plygnLa : 37.4339177174635
},
{
setSeqNo : 1,
plygnSeqNo : 495,
plygnLo : 127.044626180132,
plygnLa : 37.4340687166482
},
{
setSeqNo : 1,
plygnSeqNo : 496,
plygnLo : 127.044461940459,
plygnLa : 37.4342914972764
},
{
setSeqNo : 1,
plygnSeqNo : 497,
plygnLo : 127.044364381857,
plygnLa : 37.4344235846781
},
{
setSeqNo : 1,
plygnSeqNo : 498,
plygnLo : 127.044256729384,
plygnLa : 37.4348102192464
},
{
setSeqNo : 1,
plygnSeqNo : 499,
plygnLo : 127.044185729522,
plygnLa : 37.4350554909845
},
{
setSeqNo : 1,
plygnSeqNo : 500,
plygnLo : 127.043888557596,
plygnLa : 37.4353028070447
},
{
setSeqNo : 1,
plygnSeqNo : 501,
plygnLo : 127.043480035445,
plygnLa : 37.4356425260766
},
{
setSeqNo : 1,
plygnSeqNo : 502,
plygnLo : 127.043297219167,
plygnLa : 37.4357935005987
},
{
setSeqNo : 1,
plygnSeqNo : 503,
plygnLo : 127.043169632671,
plygnLa : 37.435905332633
},
{
setSeqNo : 1,
plygnSeqNo : 504,
plygnLo : 127.042906873998,
plygnLa : 37.4361396877547
},
{
setSeqNo : 1,
plygnSeqNo : 505,
plygnLo : 127.042702525629,
plygnLa : 37.4363219257231
},
{
setSeqNo : 1,
plygnSeqNo : 506,
plygnLo : 127.042646237947,
plygnLa : 37.4363723466712
},
{
setSeqNo : 1,
plygnSeqNo : 507,
plygnLo : 127.042522697625,
plygnLa : 37.4364467239035
},
{
setSeqNo : 1,
plygnSeqNo : 508,
plygnLo : 127.042334378627,
plygnLa : 37.4365599819535
},
{
setSeqNo : 1,
plygnSeqNo : 509,
plygnLo : 127.042200592428,
plygnLa : 37.4366405507428
},
{
setSeqNo : 1,
plygnSeqNo : 510,
plygnLo : 127.042102285376,
plygnLa : 37.4366988705998
},
{
setSeqNo : 1,
plygnSeqNo : 511,
plygnLo : 127.041973087752,
plygnLa : 37.4367791598222
},
{
setSeqNo : 1,
plygnSeqNo : 512,
plygnLo : 127.041872138381,
plygnLa : 37.4368428326764
},
{
setSeqNo : 1,
plygnSeqNo : 513,
plygnLo : 127.041736590934,
plygnLa : 37.4369270592189
},
{
setSeqNo : 1,
plygnSeqNo : 514,
plygnLo : 127.041442904692,
plygnLa : 37.4371096225071
},
{
setSeqNo : 1,
plygnSeqNo : 515,
plygnLo : 127.041365613497,
plygnLa : 37.4371884861684
},
{
setSeqNo : 1,
plygnSeqNo : 516,
plygnLo : 127.041248095068,
plygnLa : 37.4373070631537
},
{
setSeqNo : 1,
plygnSeqNo : 517,
plygnLo : 127.041140444948,
plygnLa : 37.4374149393667
},
{
setSeqNo : 1,
plygnSeqNo : 518,
plygnLo : 127.041105098484,
plygnLa : 37.4376669454861
},
{
setSeqNo : 1,
plygnSeqNo : 519,
plygnLo : 127.041090314658,
plygnLa : 37.437769161293
},
{
setSeqNo : 1,
plygnSeqNo : 520,
plygnLo : 127.040879749075,
plygnLa : 37.4378784800978
},
{
setSeqNo : 1,
plygnSeqNo : 521,
plygnLo : 127.04048048449,
plygnLa : 37.4380824635705
},
{
setSeqNo : 1,
plygnSeqNo : 522,
plygnLo : 127.040368391643,
plygnLa : 37.4381227681151
},
{
setSeqNo : 1,
plygnSeqNo : 523,
plygnLo : 127.040052775358,
plygnLa : 37.4382371822489
},
{
setSeqNo : 1,
plygnSeqNo : 524,
plygnLo : 127.039568286593,
plygnLa : 37.4381959474548
},
{
setSeqNo : 1,
plygnSeqNo : 525,
plygnLo : 127.039221859885,
plygnLa : 37.4381645223276
},
{
setSeqNo : 1,
plygnSeqNo : 526,
plygnLo : 127.039032413846,
plygnLa : 37.4381513557221
},
{
setSeqNo : 1,
plygnSeqNo : 527,
plygnLo : 127.038745208315,
plygnLa : 37.4382539361142
},
{
setSeqNo : 1,
plygnSeqNo : 528,
plygnLo : 127.038437347316,
plygnLa : 37.4383607395329
},
{
setSeqNo : 1,
plygnSeqNo : 529,
plygnLo : 127.03826059795,
plygnLa : 37.4383354585178
},
{
setSeqNo : 1,
plygnSeqNo : 530,
plygnLo : 127.037800106655,
plygnLa : 37.4382683040044
},
{
setSeqNo : 1,
plygnSeqNo : 531,
plygnLo : 127.037701772516,
plygnLa : 37.4382793180297
},
{
setSeqNo : 1,
plygnSeqNo : 532,
plygnLo : 127.037395469987,
plygnLa : 37.4383134784085
},
{
setSeqNo : 1,
plygnSeqNo : 533,
plygnLo : 127.037067763957,
plygnLa : 37.4382750051265
},
{
setSeqNo : 1,
plygnSeqNo : 534,
plygnLo : 127.036977726333,
plygnLa : 37.4382964313028
},
{
setSeqNo : 1,
plygnSeqNo : 535,
plygnLo : 127.036920183115,
plygnLa : 37.4383288298607
},
{
setSeqNo : 1,
plygnSeqNo : 536,
plygnLo : 127.036856108025,
plygnLa : 37.4383646010822
},
{
setSeqNo : 1,
plygnSeqNo : 537,
plygnLo : 127.036820108534,
plygnLa : 37.4383924891393
},
{
setSeqNo : 1,
plygnSeqNo : 538,
plygnLo : 127.036736273434,
plygnLa : 37.4384569904466
},
{
setSeqNo : 1,
plygnSeqNo : 539,
plygnLo : 127.036322754716,
plygnLa : 37.4387783849537
},
{
setSeqNo : 1,
plygnSeqNo : 540,
plygnLo : 127.036055990642,
plygnLa : 37.4388229457225
},
{
setSeqNo : 1,
plygnSeqNo : 541,
plygnLo : 127.035890243141,
plygnLa : 37.4388857858047
},
{
setSeqNo : 1,
plygnSeqNo : 542,
plygnLo : 127.035573724601,
plygnLa : 37.4390041339298
},
{
setSeqNo : 1,
plygnSeqNo : 543,
plygnLo : 127.035574672005,
plygnLa : 37.4391497016826
},
{
setSeqNo : 1,
plygnSeqNo : 544,
plygnLo : 127.035579204419,
plygnLa : 37.4394036765586
},
{
setSeqNo : 1,
plygnSeqNo : 545,
plygnLo : 127.035537958813,
plygnLa : 37.4395729066674
},
{
setSeqNo : 1,
plygnSeqNo : 546,
plygnLo : 127.035492314081,
plygnLa : 37.4397624112531
},
{
setSeqNo : 1,
plygnSeqNo : 547,
plygnLo : 127.035393143116,
plygnLa : 37.4398787234403
},
{
setSeqNo : 1,
plygnSeqNo : 548,
plygnLo : 127.035320265516,
plygnLa : 37.4399666014618
},
{
setSeqNo : 1,
plygnSeqNo : 549,
plygnLo : 127.035295068537,
plygnLa : 37.4400721892312
},
{
setSeqNo : 1,
plygnSeqNo : 550,
plygnLo : 127.035208009311,
plygnLa : 37.4404376887675
},
{
setSeqNo : 1,
plygnSeqNo : 551,
plygnLo : 127.035169066151,
plygnLa : 37.4406057922561
},
{
setSeqNo : 1,
plygnSeqNo : 552,
plygnLo : 127.035171861196,
plygnLa : 37.4409419847626
},
{
setSeqNo : 1,
plygnSeqNo : 553,
plygnLo : 127.035224142105,
plygnLa : 37.4409847583142
},
{
setSeqNo : 1,
plygnSeqNo : 554,
plygnLo : 127.035241629651,
plygnLa : 37.4409991156084
},
{
setSeqNo : 1,
plygnSeqNo : 555,
plygnLo : 127.035619446874,
plygnLa : 37.4413278746318
},
{
setSeqNo : 1,
plygnSeqNo : 556,
plygnLo : 127.036038172564,
plygnLa : 37.4415321738659
},
{
setSeqNo : 1,
plygnSeqNo : 557,
plygnLo : 127.036072252091,
plygnLa : 37.4415510303851
},
{
setSeqNo : 1,
plygnSeqNo : 558,
plygnLo : 127.036087625301,
plygnLa : 37.4415625690819
},
{
setSeqNo : 1,
plygnSeqNo : 559,
plygnLo : 127.036288093202,
plygnLa : 37.4417210246974
},
{
setSeqNo : 1,
plygnSeqNo : 560,
plygnLo : 127.036430990445,
plygnLa : 37.4418327708083
},
{
setSeqNo : 1,
plygnSeqNo : 561,
plygnLo : 127.036654451229,
plygnLa : 37.442080201711
},
{
setSeqNo : 1,
plygnSeqNo : 562,
plygnLo : 127.036789630146,
plygnLa : 37.4422848519708
},
{
setSeqNo : 1,
plygnSeqNo : 563,
plygnLo : 127.036836630464,
plygnLa : 37.4423597395416
},
{
setSeqNo : 1,
plygnSeqNo : 564,
plygnLo : 127.036819254233,
plygnLa : 37.4425872486406
},
{
setSeqNo : 1,
plygnSeqNo : 565,
plygnLo : 127.036974778154,
plygnLa : 37.4428969224869
},
{
setSeqNo : 1,
plygnSeqNo : 566,
plygnLo : 127.037145223103,
plygnLa : 37.4430213190835
},
{
setSeqNo : 1,
plygnSeqNo : 567,
plygnLo : 127.037482938004,
plygnLa : 37.4432667426395
},
{
setSeqNo : 1,
plygnSeqNo : 568,
plygnLo : 127.037518543975,
plygnLa : 37.4435009921773
},
{
setSeqNo : 1,
plygnSeqNo : 569,
plygnLo : 127.037567964154,
plygnLa : 37.4438380084029
},
{
setSeqNo : 1,
plygnSeqNo : 570,
plygnLo : 127.037924783248,
plygnLa : 37.4441608566608
},
{
setSeqNo : 1,
plygnSeqNo : 571,
plygnLo : 127.037934860317,
plygnLa : 37.4441788733432
},
{
setSeqNo : 1,
plygnSeqNo : 572,
plygnLo : 127.038035316943,
plygnLa : 37.4445164404026
},
{
setSeqNo : 1,
plygnSeqNo : 573,
plygnLo : 127.038057254379,
plygnLa : 37.4445916135083
},
{
setSeqNo : 1,
plygnSeqNo : 574,
plygnLo : 127.03818352912,
plygnLa : 37.4450175794606
},
{
setSeqNo : 1,
plygnSeqNo : 575,
plygnLo : 127.038230394929,
plygnLa : 37.445180306331
},
{
setSeqNo : 1,
plygnSeqNo : 576,
plygnLo : 127.03820566043,
plygnLa : 37.4458588885406
},
{
setSeqNo : 1,
plygnSeqNo : 577,
plygnLo : 127.037749147703,
plygnLa : 37.4460952653755
},
{
setSeqNo : 1,
plygnSeqNo : 578,
plygnLo : 127.037351254316,
plygnLa : 37.446300923373
},
{
setSeqNo : 1,
plygnSeqNo : 579,
plygnLo : 127.037260384257,
plygnLa : 37.4464389223129
},
{
setSeqNo : 1,
plygnSeqNo : 580,
plygnLo : 127.037254026097,
plygnLa : 37.4464484931497
},
{
setSeqNo : 1,
plygnSeqNo : 581,
plygnLo : 127.037394977685,
plygnLa : 37.446914999567
},
{
setSeqNo : 1,
plygnSeqNo : 582,
plygnLo : 127.037531513588,
plygnLa : 37.4473615251856
},
{
setSeqNo : 1,
plygnSeqNo : 583,
plygnLo : 127.037341318034,
plygnLa : 37.4476904503736
},
{
setSeqNo : 1,
plygnSeqNo : 584,
plygnLo : 127.037172823974,
plygnLa : 37.4479853019128
},
{
setSeqNo : 1,
plygnSeqNo : 585,
plygnLo : 127.037159241475,
plygnLa : 37.448010362551
},
{
setSeqNo : 1,
plygnSeqNo : 586,
plygnLo : 127.037278930096,
plygnLa : 37.448321741712
},
{
setSeqNo : 1,
plygnSeqNo : 587,
plygnLo : 127.037374756754,
plygnLa : 37.4485644164001
},
{
setSeqNo : 1,
plygnSeqNo : 588,
plygnLo : 127.03781196565,
plygnLa : 37.4489224336923
},
{
setSeqNo : 1,
plygnSeqNo : 589,
plygnLo : 127.037774491646,
plygnLa : 37.4492017559404
},
{
setSeqNo : 1,
plygnSeqNo : 590,
plygnLo : 127.037744398722,
plygnLa : 37.4494188552955
},
{
setSeqNo : 1,
plygnSeqNo : 591,
plygnLo : 127.037430104588,
plygnLa : 37.4498317189502
},
{
setSeqNo : 1,
plygnSeqNo : 592,
plygnLo : 127.03729563577,
plygnLa : 37.4500099980885
},
{
setSeqNo : 1,
plygnSeqNo : 593,
plygnLo : 127.037260703847,
plygnLa : 37.4500817995511
},
{
setSeqNo : 1,
plygnSeqNo : 594,
plygnLo : 127.036968037938,
plygnLa : 37.4506911937665
},
{
setSeqNo : 1,
plygnSeqNo : 595,
plygnLo : 127.036936279384,
plygnLa : 37.4507593463051
},
{
setSeqNo : 1,
plygnSeqNo : 596,
plygnLo : 127.036913529976,
plygnLa : 37.4508080621116
},
{
setSeqNo : 1,
plygnSeqNo : 597,
plygnLo : 127.036809195439,
plygnLa : 37.4508804535506
},
{
setSeqNo : 1,
plygnSeqNo : 598,
plygnLo : 127.036752213638,
plygnLa : 37.4509778945625
},
{
setSeqNo : 1,
plygnSeqNo : 599,
plygnLo : 127.036624958029,
plygnLa : 37.4511201217542
},
{
setSeqNo : 1,
plygnSeqNo : 600,
plygnLo : 127.036542883222,
plygnLa : 37.4512102468498
},
{
setSeqNo : 1,
plygnSeqNo : 601,
plygnLo : 127.036466325068,
plygnLa : 37.4513766757225
},
{
setSeqNo : 1,
plygnSeqNo : 602,
plygnLo : 127.036409702043,
plygnLa : 37.4514969139957
},
{
setSeqNo : 1,
plygnSeqNo : 603,
plygnLo : 127.036076733193,
plygnLa : 37.45166313919
},
{
setSeqNo : 1,
plygnSeqNo : 604,
plygnLo : 127.035861441581,
plygnLa : 37.4519915016171
},
{
setSeqNo : 1,
plygnSeqNo : 605,
plygnLo : 127.035776421855,
plygnLa : 37.452195945726
},
{
setSeqNo : 1,
plygnSeqNo : 606,
plygnLo : 127.035371338866,
plygnLa : 37.4522267522061
},
{
setSeqNo : 1,
plygnSeqNo : 607,
plygnLo : 127.035146643845,
plygnLa : 37.4524391195031
},
{
setSeqNo : 1,
plygnSeqNo : 608,
plygnLo : 127.034754687873,
plygnLa : 37.452617459216
},
{
setSeqNo : 1,
plygnSeqNo : 609,
plygnLo : 127.034785161359,
plygnLa : 37.45282721336
},
{
setSeqNo : 1,
plygnSeqNo : 610,
plygnLo : 127.034823597434,
plygnLa : 37.4531062346796
},
{
setSeqNo : 1,
plygnSeqNo : 611,
plygnLo : 127.034984703118,
plygnLa : 37.4532309253616
},
{
setSeqNo : 1,
plygnSeqNo : 612,
plygnLo : 127.034997602387,
plygnLa : 37.4532388053033
},
{
setSeqNo : 1,
plygnSeqNo : 613,
plygnLo : 127.035469193466,
plygnLa : 37.4534374497191
},
{
setSeqNo : 1,
plygnSeqNo : 614,
plygnLo : 127.035586858124,
plygnLa : 37.4539642253818
},
{
setSeqNo : 1,
plygnSeqNo : 615,
plygnLo : 127.035587779454,
plygnLa : 37.4540492618519
},
{
setSeqNo : 1,
plygnSeqNo : 616,
plygnLo : 127.035588157609,
plygnLa : 37.4540875460821
},
{
setSeqNo : 1,
plygnSeqNo : 617,
plygnLo : 127.035737590974,
plygnLa : 37.4541863339039
},
{
setSeqNo : 1,
plygnSeqNo : 618,
plygnLo : 127.036267405953,
plygnLa : 37.4542622067851
},
{
setSeqNo : 1,
plygnSeqNo : 619,
plygnLo : 127.03634324655,
plygnLa : 37.4544392857307
},
{
setSeqNo : 1,
plygnSeqNo : 620,
plygnLo : 127.036424933826,
plygnLa : 37.4546507185718
},
{
setSeqNo : 1,
plygnSeqNo : 621,
plygnLo : 127.036824875224,
plygnLa : 37.454933569082
},
{
setSeqNo : 1,
plygnSeqNo : 622,
plygnLo : 127.036843781356,
plygnLa : 37.4549487640521
},
{
setSeqNo : 1,
plygnSeqNo : 623,
plygnLo : 127.036905787221,
plygnLa : 37.4550047785021
},
{
setSeqNo : 1,
plygnSeqNo : 624,
plygnLo : 127.037005605093,
plygnLa : 37.4550937234021
},
{
setSeqNo : 1,
plygnSeqNo : 625,
plygnLo : 127.037127699221,
plygnLa : 37.4552077174253
},
{
setSeqNo : 1,
plygnSeqNo : 626,
plygnLo : 127.03706742655,
plygnLa : 37.4554743794625
},
{
setSeqNo : 1,
plygnSeqNo : 627,
plygnLo : 127.036971437842,
plygnLa : 37.455641940548
},
{
setSeqNo : 1,
plygnSeqNo : 628,
plygnLo : 127.036849662229,
plygnLa : 37.4558230255055
},
{
setSeqNo : 1,
plygnSeqNo : 629,
plygnLo : 127.036819020315,
plygnLa : 37.4559885946231
},
{
setSeqNo : 1,
plygnSeqNo : 630,
plygnLo : 127.036773733069,
plygnLa : 37.456205128877
},
{
setSeqNo : 1,
plygnSeqNo : 631,
plygnLo : 127.036771111055,
plygnLa : 37.4562544048798
},
{
setSeqNo : 1,
plygnSeqNo : 632,
plygnLo : 127.036751530404,
plygnLa : 37.4563155091981
},
{
setSeqNo : 1,
plygnSeqNo : 633,
plygnLo : 127.036740648288,
plygnLa : 37.4564439039863
},
{
setSeqNo : 1,
plygnSeqNo : 634,
plygnLo : 127.036563780606,
plygnLa : 37.4566387998158
},
{
setSeqNo : 1,
plygnSeqNo : 635,
plygnLo : 127.036354978008,
plygnLa : 37.4568745281919
},
{
setSeqNo : 1,
plygnSeqNo : 636,
plygnLo : 127.036076968967,
plygnLa : 37.457160400805
},
{
setSeqNo : 1,
plygnSeqNo : 637,
plygnLo : 127.035763292722,
plygnLa : 37.4574814742593
},
{
setSeqNo : 1,
plygnSeqNo : 638,
plygnLo : 127.035706615989,
plygnLa : 37.457517251752
},
{
setSeqNo : 1,
plygnSeqNo : 639,
plygnLo : 127.035462611985,
plygnLa : 37.4576538792597
},
{
setSeqNo : 1,
plygnSeqNo : 640,
plygnLo : 127.035190897726,
plygnLa : 37.4578029010751
},
{
setSeqNo : 1,
plygnSeqNo : 641,
plygnLo : 127.035016099154,
plygnLa : 37.4578936186084
},
{
setSeqNo : 1,
plygnSeqNo : 642,
plygnLo : 127.034968457194,
plygnLa : 37.4579890862256
},
{
setSeqNo : 1,
plygnSeqNo : 643,
plygnLo : 127.034934168536,
plygnLa : 37.4583278104979
},
{
setSeqNo : 1,
plygnSeqNo : 644,
plygnLo : 127.034924692976,
plygnLa : 37.4584443845838
},
{
setSeqNo : 1,
plygnSeqNo : 645,
plygnLo : 127.035010701274,
plygnLa : 37.4588683916327
},
{
setSeqNo : 1,
plygnSeqNo : 646,
plygnLo : 127.035057098131,
plygnLa : 37.4587385793245
},
{
setSeqNo : 1,
plygnSeqNo : 647,
plygnLo : 127.03505516994,
plygnLa : 37.4587760253761
},
{
setSeqNo : 1,
plygnSeqNo : 648,
plygnLo : 127.035044086019,
plygnLa : 37.4588565599846
},
{
setSeqNo : 1,
plygnSeqNo : 649,
plygnLo : 127.035043089283,
plygnLa : 37.4590055068745
},
{
setSeqNo : 1,
plygnSeqNo : 650,
plygnLo : 127.034994603294,
plygnLa : 37.4591871267911
},
{
setSeqNo : 1,
plygnSeqNo : 651,
plygnLo : 127.034953885086,
plygnLa : 37.4597587166625
},
{
setSeqNo : 1,
plygnSeqNo : 652,
plygnLo : 127.034947043431,
plygnLa : 37.4598530359847
},
{
setSeqNo : 1,
plygnSeqNo : 653,
plygnLo : 127.034924220855,
plygnLa : 37.4601754416202
},
{
setSeqNo : 1,
plygnSeqNo : 654,
plygnLo : 127.034643040583,
plygnLa : 37.4601304690731
},
{
setSeqNo : 1,
plygnSeqNo : 655,
plygnLo : 127.03451497466,
plygnLa : 37.4600696864613
},
{
setSeqNo : 1,
plygnSeqNo : 656,
plygnLo : 127.034504200443,
plygnLa : 37.4600646184055
},
{
setSeqNo : 1,
plygnSeqNo : 657,
plygnLo : 127.034327980658,
plygnLa : 37.4601454777439
},
{
setSeqNo : 1,
plygnSeqNo : 658,
plygnLo : 127.034324996976,
plygnLa : 37.4601711024031
},
{
setSeqNo : 1,
plygnSeqNo : 659,
plygnLo : 127.034315841689,
plygnLa : 37.4602521963215
},
{
setSeqNo : 1,
plygnSeqNo : 660,
plygnLo : 127.03428776881,
plygnLa : 37.4602567096985
},
{
setSeqNo : 1,
plygnSeqNo : 661,
plygnLo : 127.034012979119,
plygnLa : 37.460300420728
},
{
setSeqNo : 1,
plygnSeqNo : 662,
plygnLo : 127.033899118354,
plygnLa : 37.4608323326148
},
{
setSeqNo : 1,
plygnSeqNo : 663,
plygnLo : 127.033791666287,
plygnLa : 37.4610550829137
},
{
setSeqNo : 1,
plygnSeqNo : 664,
plygnLo : 127.033732222039,
plygnLa : 37.461236983593
},
{
setSeqNo : 1,
plygnSeqNo : 665,
plygnLo : 127.033744593765,
plygnLa : 37.4612502172871
},
{
setSeqNo : 1,
plygnSeqNo : 666,
plygnLo : 127.033780680847,
plygnLa : 37.4613991519663
},
{
setSeqNo : 1,
plygnSeqNo : 667,
plygnLo : 127.033797485368,
plygnLa : 37.461448423623
},
{
setSeqNo : 1,
plygnSeqNo : 668,
plygnLo : 127.033799440926,
plygnLa : 37.461470379547
},
{
setSeqNo : 1,
plygnSeqNo : 669,
plygnLo : 127.03382171141,
plygnLa : 37.4615303451108
},
{
setSeqNo : 1,
plygnSeqNo : 670,
plygnLo : 127.03384610405,
plygnLa : 37.4615613146168
},
{
setSeqNo : 1,
plygnSeqNo : 671,
plygnLo : 127.033843642808,
plygnLa : 37.4615931304982
},
{
setSeqNo : 1,
plygnSeqNo : 672,
plygnLo : 127.033872995874,
plygnLa : 37.461669427666
},
{
setSeqNo : 1,
plygnSeqNo : 673,
plygnLo : 127.033876877564,
plygnLa : 37.4616798430005
},
{
setSeqNo : 1,
plygnSeqNo : 674,
plygnLo : 127.033880448585,
plygnLa : 37.4617564263221
},
{
setSeqNo : 1,
plygnSeqNo : 675,
plygnLo : 127.033883484943,
plygnLa : 37.4618254160231
},
{
setSeqNo : 1,
plygnSeqNo : 676,
plygnLo : 127.033886664381,
plygnLa : 37.4618366686651
},
{
setSeqNo : 1,
plygnSeqNo : 677,
plygnLo : 127.033901698902,
plygnLa : 37.4618884805136
},
{
setSeqNo : 1,
plygnSeqNo : 678,
plygnLo : 127.033919379902,
plygnLa : 37.461949572814
},
{
setSeqNo : 1,
plygnSeqNo : 679,
plygnLo : 127.033920461773,
plygnLa : 37.4619932083236
},
{
setSeqNo : 1,
plygnSeqNo : 680,
plygnLo : 127.033923337146,
plygnLa : 37.4621089331204
},
{
setSeqNo : 1,
plygnSeqNo : 681,
plygnLo : 127.033923875164,
plygnLa : 37.4621261065026
},
{
setSeqNo : 1,
plygnSeqNo : 682,
plygnLo : 127.033925471783,
plygnLa : 37.4621311785746
},
{
setSeqNo : 1,
plygnSeqNo : 683,
plygnLo : 127.033956948129,
plygnLa : 37.4622291528203
},
{
setSeqNo : 1,
plygnSeqNo : 684,
plygnLo : 127.033977094059,
plygnLa : 37.4622651894779
},
{
setSeqNo : 1,
plygnSeqNo : 685,
plygnLo : 127.034025883538,
plygnLa : 37.4623524644567
},
{
setSeqNo : 1,
plygnSeqNo : 686,
plygnLo : 127.034034906243,
plygnLa : 37.4623868078946
},
{
setSeqNo : 1,
plygnSeqNo : 687,
plygnLo : 127.034054720706,
plygnLa : 37.4624617030258
},
{
setSeqNo : 1,
plygnSeqNo : 688,
plygnLo : 127.034077866556,
plygnLa : 37.4625118111087
},
{
setSeqNo : 1,
plygnSeqNo : 689,
plygnLo : 127.034101389539,
plygnLa : 37.4625627657027
},
{
setSeqNo : 1,
plygnSeqNo : 690,
plygnLo : 127.034106153016,
plygnLa : 37.4625729000777
},
{
setSeqNo : 1,
plygnSeqNo : 691,
plygnLo : 127.03417350157,
plygnLa : 37.4626877594746
},
{
setSeqNo : 1,
plygnSeqNo : 692,
plygnLo : 127.034200185677,
plygnLa : 37.4627333708058
},
{
setSeqNo : 1,
plygnSeqNo : 693,
plygnLo : 127.034247556413,
plygnLa : 37.4628065645267
},
{
setSeqNo : 1,
plygnSeqNo : 694,
plygnLo : 127.034260449821,
plygnLa : 37.4628265445001
},
{
setSeqNo : 1,
plygnSeqNo : 695,
plygnLo : 127.034285739212,
plygnLa : 37.462885950258
},
{
setSeqNo : 1,
plygnSeqNo : 696,
plygnLo : 127.034319152236,
plygnLa : 37.4629653463377
},
{
setSeqNo : 1,
plygnSeqNo : 697,
plygnLo : 127.034328340319,
plygnLa : 37.4629873015913
},
{
setSeqNo : 1,
plygnSeqNo : 698,
plygnLo : 127.034384720488,
plygnLa : 37.4630661230247
},
{
setSeqNo : 1,
plygnSeqNo : 699,
plygnLo : 127.034393025073,
plygnLa : 37.4630796366029
},
{
setSeqNo : 1,
plygnSeqNo : 700,
plygnLo : 127.034444989491,
plygnLa : 37.4631649373202
},
{
setSeqNo : 1,
plygnSeqNo : 701,
plygnLo : 127.03445011975,
plygnLa : 37.4631866136057
},
{
setSeqNo : 1,
plygnSeqNo : 702,
plygnLo : 127.034453119338,
plygnLa : 37.4631992898581
},
{
setSeqNo : 1,
plygnSeqNo : 703,
plygnLo : 127.034460198091,
plygnLa : 37.4632288497556
},
{
setSeqNo : 1,
plygnSeqNo : 704,
plygnLo : 127.034462497093,
plygnLa : 37.4632384187556
},
{
setSeqNo : 1,
plygnSeqNo : 705,
plygnLo : 127.034510564581,
plygnLa : 37.4633048548778
},
{
setSeqNo : 1,
plygnSeqNo : 706,
plygnLo : 127.034532663997,
plygnLa : 37.4633352562503
},
{
setSeqNo : 1,
plygnSeqNo : 707,
plygnLo : 127.034531090895,
plygnLa : 37.463381711805
},
{
setSeqNo : 1,
plygnSeqNo : 708,
plygnLo : 127.034521571951,
plygnLa : 37.4634295857037
},
{
setSeqNo : 1,
plygnSeqNo : 709,
plygnLo : 127.034534128843,
plygnLa : 37.46345210821
},
{
setSeqNo : 1,
plygnSeqNo : 710,
plygnLo : 127.034537307414,
plygnLa : 37.4634577377535
},
{
setSeqNo : 1,
plygnSeqNo : 711,
plygnLo : 127.034552862321,
plygnLa : 37.4634872952713
},
{
setSeqNo : 1,
plygnSeqNo : 712,
plygnLo : 127.034550941055,
plygnLa : 37.4635382562759
},
{
setSeqNo : 1,
plygnSeqNo : 713,
plygnLo : 127.034561391278,
plygnLa : 37.463603575939
},
{
setSeqNo : 1,
plygnSeqNo : 714,
plygnLo : 127.034584210921,
plygnLa : 37.4636790291032
},
{
setSeqNo : 1,
plygnSeqNo : 715,
plygnLo : 127.034597819815,
plygnLa : 37.4636993072856
},
{
setSeqNo : 1,
plygnSeqNo : 716,
plygnLo : 127.034605419638,
plygnLa : 37.4637108479878
},
{
setSeqNo : 1,
plygnSeqNo : 717,
plygnLo : 127.034625242201,
plygnLa : 37.4638068528149
},
{
setSeqNo : 1,
plygnSeqNo : 718,
plygnLo : 127.034631077731,
plygnLa : 37.4638355748777
},
{
setSeqNo : 1,
plygnSeqNo : 719,
plygnLo : 127.034660111168,
plygnLa : 37.4639766286244
},
{
setSeqNo : 1,
plygnSeqNo : 720,
plygnLo : 127.034668269158,
plygnLa : 37.4640757371097
},
{
setSeqNo : 1,
plygnSeqNo : 721,
plygnLo : 127.034693387485,
plygnLa : 37.4641548456878
},
{
setSeqNo : 1,
plygnSeqNo : 722,
plygnLo : 127.034563059128,
plygnLa : 37.4641824714599
},
{
setSeqNo : 1,
plygnSeqNo : 723,
plygnLo : 127.034204937907,
plygnLa : 37.4643306778295
},
{
setSeqNo : 1,
plygnSeqNo : 724,
plygnLo : 127.033479713577,
plygnLa : 37.4646358129542
},
{
setSeqNo : 1,
plygnSeqNo : 725,
plygnLo : 127.03319671316,
plygnLa : 37.4649222357066
},
{
setSeqNo : 1,
plygnSeqNo : 726,
plygnLo : 127.033180289918,
plygnLa : 37.4649501189496
},
{
setSeqNo : 1,
plygnSeqNo : 727,
plygnLo : 127.033140587048,
plygnLa : 37.4650174252234
},
{
setSeqNo : 1,
plygnSeqNo : 728,
plygnLo : 127.032757570161,
plygnLa : 37.4651932134042
},
{
setSeqNo : 1,
plygnSeqNo : 729,
plygnLo : 127.032321545194,
plygnLa : 37.4653084947749
},
{
setSeqNo : 1,
plygnSeqNo : 730,
plygnLo : 127.032239952141,
plygnLa : 37.4653299142606
},
{
setSeqNo : 1,
plygnSeqNo : 731,
plygnLo : 127.032169152652,
plygnLa : 37.4653718826752
},
{
setSeqNo : 1,
plygnSeqNo : 732,
plygnLo : 127.031921763563,
plygnLa : 37.4655189200234
},
{
setSeqNo : 1,
plygnSeqNo : 733,
plygnLo : 127.031759996471,
plygnLa : 37.4655426122204
},
{
setSeqNo : 1,
plygnSeqNo : 734,
plygnLo : 127.031676455557,
plygnLa : 37.4655550226098
},
{
setSeqNo : 1,
plygnSeqNo : 735,
plygnLo : 127.031195544567,
plygnLa : 37.4656260973389
},
{
setSeqNo : 1,
plygnSeqNo : 736,
plygnLo : 127.03055508054,
plygnLa : 37.4655141994021
},
{
setSeqNo : 1,
plygnSeqNo : 737,
plygnLo : 127.030396817856,
plygnLa : 37.465486360201
},
{
setSeqNo : 1,
plygnSeqNo : 738,
plygnLo : 127.030353537817,
plygnLa : 37.4654601892587
},
{
setSeqNo : 1,
plygnSeqNo : 739,
plygnLo : 127.030314491553,
plygnLa : 37.4654227521244
},
{
setSeqNo : 1,
plygnSeqNo : 740,
plygnLo : 127.030260958483,
plygnLa : 37.4653957360771
},
{
setSeqNo : 1,
plygnSeqNo : 741,
plygnLo : 127.030166278515,
plygnLa : 37.4653622489558
},
{
setSeqNo : 1,
plygnSeqNo : 742,
plygnLo : 127.030024445523,
plygnLa : 37.4653462373138
},
{
setSeqNo : 1,
plygnSeqNo : 743,
plygnLo : 127.029928545836,
plygnLa : 37.4653516032705
},
{
setSeqNo : 1,
plygnSeqNo : 744,
plygnLo : 127.029527274408,
plygnLa : 37.4653745127186
},
{
setSeqNo : 1,
plygnSeqNo : 745,
plygnLo : 127.029494804789,
plygnLa : 37.4649637165139
},
{
setSeqNo : 1,
plygnSeqNo : 746,
plygnLo : 127.029493204112,
plygnLa : 37.464942039223
},
{
setSeqNo : 1,
plygnSeqNo : 747,
plygnLo : 127.029488927888,
plygnLa : 37.4648437666921
},
{
setSeqNo : 1,
plygnSeqNo : 748,
plygnLo : 127.029510682945,
plygnLa : 37.4644701332557
},
{
setSeqNo : 1,
plygnSeqNo : 749,
plygnLo : 127.029583386864,
plygnLa : 37.4642882210529
},
{
setSeqNo : 1,
plygnSeqNo : 750,
plygnLo : 127.02962381035,
plygnLa : 37.4642304941862
},
{
setSeqNo : 1,
plygnSeqNo : 751,
plygnLo : 127.02967059162,
plygnLa : 37.4641637542114
},
{
setSeqNo : 1,
plygnSeqNo : 752,
plygnLo : 127.029694333494,
plygnLa : 37.4639055575787
},
{
setSeqNo : 1,
plygnSeqNo : 753,
plygnLo : 127.029638915839,
plygnLa : 37.4635474122211
},
{
setSeqNo : 1,
plygnSeqNo : 754,
plygnLo : 127.029633253421,
plygnLa : 37.463490263301
},
{
setSeqNo : 1,
plygnSeqNo : 755,
plygnLo : 127.029618367881,
plygnLa : 37.4633725667674
},
{
setSeqNo : 1,
plygnSeqNo : 756,
plygnLo : 127.029606146701,
plygnLa : 37.4632754338566
},
{
setSeqNo : 1,
plygnSeqNo : 757,
plygnLo : 127.029544114853,
plygnLa : 37.4631580387104
},
{
setSeqNo : 1,
plygnSeqNo : 758,
plygnLo : 127.029491436766,
plygnLa : 37.4630535878221
},
{
setSeqNo : 1,
plygnSeqNo : 759,
plygnLo : 127.029429933548,
plygnLa : 37.46292436321
},
{
setSeqNo : 1,
plygnSeqNo : 760,
plygnLo : 127.029365423888,
plygnLa : 37.4627968320525
},
{
setSeqNo : 1,
plygnSeqNo : 761,
plygnLo : 127.029321942797,
plygnLa : 37.4627120943467
},
{
setSeqNo : 1,
plygnSeqNo : 762,
plygnLo : 127.029316286303,
plygnLa : 37.4627013906706
},
{
setSeqNo : 1,
plygnSeqNo : 763,
plygnLo : 127.029202488991,
plygnLa : 37.4625603571861
},
{
setSeqNo : 1,
plygnSeqNo : 764,
plygnLo : 127.029120152849,
plygnLa : 37.4624576067552
},
{
setSeqNo : 1,
plygnSeqNo : 765,
plygnLo : 127.028985335902,
plygnLa : 37.4622898268682
},
{
setSeqNo : 1,
plygnSeqNo : 766,
plygnLo : 127.028924383208,
plygnLa : 37.4622152196866
},
{
setSeqNo : 1,
plygnSeqNo : 767,
plygnLo : 127.028819079049,
plygnLa : 37.4621150077443
},
{
setSeqNo : 1,
plygnSeqNo : 768,
plygnLo : 127.028731269572,
plygnLa : 37.4620283050723
},
{
setSeqNo : 1,
plygnSeqNo : 769,
plygnLo : 127.028601066298,
plygnLa : 37.4618993831236
},
{
setSeqNo : 1,
plygnSeqNo : 770,
plygnLo : 127.028537994599,
plygnLa : 37.4618349219414
},
{
setSeqNo : 1,
plygnSeqNo : 771,
plygnLo : 127.028445061552,
plygnLa : 37.4617445549749
},
{
setSeqNo : 1,
plygnSeqNo : 772,
plygnLo : 127.028426505924,
plygnLa : 37.4617254210087
},
{
setSeqNo : 1,
plygnSeqNo : 773,
plygnLo : 127.028386395654,
plygnLa : 37.4616739028575
},
{
setSeqNo : 1,
plygnSeqNo : 774,
plygnLo : 127.028320492352,
plygnLa : 37.4615911322933
},
{
setSeqNo : 1,
plygnSeqNo : 775,
plygnLo : 127.028255467705,
plygnLa : 37.461503867729
},
{
setSeqNo : 1,
plygnSeqNo : 776,
plygnLo : 127.028191327206,
plygnLa : 37.4614241976175
},
{
setSeqNo : 1,
plygnSeqNo : 777,
plygnLo : 127.028149105346,
plygnLa : 37.4613752093421
},
{
setSeqNo : 1,
plygnSeqNo : 778,
plygnLo : 127.028043093059,
plygnLa : 37.4612451554269
},
{
setSeqNo : 1,
plygnSeqNo : 779,
plygnLo : 127.028067421781,
plygnLa : 37.4610959255698
},
{
setSeqNo : 1,
plygnSeqNo : 780,
plygnLo : 127.028103368442,
plygnLa : 37.4608833340899
},
{
setSeqNo : 1,
plygnSeqNo : 781,
plygnLo : 127.028156965883,
plygnLa : 37.4606220318776
},
{
setSeqNo : 1,
plygnSeqNo : 782,
plygnLo : 127.028222982513,
plygnLa : 37.4605169941171
},
{
setSeqNo : 1,
plygnSeqNo : 783,
plygnLo : 127.028345468577,
plygnLa : 37.4603147986737
},
{
setSeqNo : 1,
plygnSeqNo : 784,
plygnLo : 127.028382711485,
plygnLa : 37.4602559476433
},
{
setSeqNo : 1,
plygnSeqNo : 785,
plygnLo : 127.028461787725,
plygnLa : 37.4601314728179
},
{
setSeqNo : 1,
plygnSeqNo : 786,
plygnLo : 127.028460734085,
plygnLa : 37.4601252838343
},
{
setSeqNo : 1,
plygnSeqNo : 787,
plygnLo : 127.028382077795,
plygnLa : 37.4599380627486
},
{
setSeqNo : 1,
plygnSeqNo : 788,
plygnLo : 127.028367758554,
plygnLa : 37.459907090506
},
{
setSeqNo : 1,
plygnSeqNo : 789,
plygnLo : 127.028361920606,
plygnLa : 37.4598935758928
},
{
setSeqNo : 1,
plygnSeqNo : 790,
plygnLo : 127.028158101048,
plygnLa : 37.4598381571849
},
{
setSeqNo : 1,
plygnSeqNo : 791,
plygnLo : 127.02806149455,
plygnLa : 37.4598376113244
},
{
setSeqNo : 1,
plygnSeqNo : 792,
plygnLo : 127.028009037167,
plygnLa : 37.4598336844601
},
{
setSeqNo : 1,
plygnSeqNo : 793,
plygnLo : 127.027874645569,
plygnLa : 37.4598328681436
},
{
setSeqNo : 1,
plygnSeqNo : 794,
plygnLo : 127.02753220256,
plygnLa : 37.4598261867373
},
{
setSeqNo : 1,
plygnSeqNo : 795,
plygnLo : 127.027388963732,
plygnLa : 37.4597977819146
},
{
setSeqNo : 1,
plygnSeqNo : 796,
plygnLo : 127.027316191337,
plygnLa : 37.4597834367389
},
{
setSeqNo : 1,
plygnSeqNo : 797,
plygnLo : 127.027114669649,
plygnLa : 37.4597404032355
},
{
setSeqNo : 1,
plygnSeqNo : 798,
plygnLo : 127.026891423037,
plygnLa : 37.4596939941725
},
{
setSeqNo : 1,
plygnSeqNo : 799,
plygnLo : 127.026572283303,
plygnLa : 37.4596416880649
},
{
setSeqNo : 1,
plygnSeqNo : 800,
plygnLo : 127.026499320802,
plygnLa : 37.4595628652166
},
{
setSeqNo : 1,
plygnSeqNo : 801,
plygnLo : 127.026401267048,
plygnLa : 37.4594544851198
},
{
setSeqNo : 1,
plygnSeqNo : 802,
plygnLo : 127.026408811635,
plygnLa : 37.4593080710841
},
{
setSeqNo : 1,
plygnSeqNo : 803,
plygnLo : 127.026418987618,
plygnLa : 37.4591081545543
},
{
setSeqNo : 1,
plygnSeqNo : 804,
plygnLo : 127.026426520527,
plygnLa : 37.4589183826337
},
{
setSeqNo : 1,
plygnSeqNo : 805,
plygnLo : 127.02643544103,
plygnLa : 37.4586584953153
},
{
setSeqNo : 1,
plygnSeqNo : 806,
plygnLo : 127.026443303517,
plygnLa : 37.4584079062229
},
{
setSeqNo : 1,
plygnSeqNo : 807,
plygnLo : 127.026445043998,
plygnLa : 37.4583366638853
},
{
setSeqNo : 1,
plygnSeqNo : 808,
plygnLo : 127.026419061836,
plygnLa : 37.4582772569503
},
{
setSeqNo : 1,
plygnSeqNo : 809,
plygnLo : 127.026346780874,
plygnLa : 37.4581043958164
},
{
setSeqNo : 1,
plygnSeqNo : 810,
plygnLo : 127.026204578711,
plygnLa : 37.4579878542591
},
{
setSeqNo : 1,
plygnSeqNo : 811,
plygnLo : 127.026016262166,
plygnLa : 37.4578344419603
},
{
setSeqNo : 1,
plygnSeqNo : 812,
plygnLo : 127.025995415911,
plygnLa : 37.4578169945279
},
{
setSeqNo : 1,
plygnSeqNo : 813,
plygnLo : 127.025898460433,
plygnLa : 37.4577736482731
},
{
setSeqNo : 1,
plygnSeqNo : 814,
plygnLo : 127.025687389254,
plygnLa : 37.4576785276796
},
{
setSeqNo : 1,
plygnSeqNo : 815,
plygnLo : 127.025434810241,
plygnLa : 37.4575645398985
},
{
setSeqNo : 1,
plygnSeqNo : 816,
plygnLo : 127.025277614498,
plygnLa : 37.4574939053079
},
{
setSeqNo : 1,
plygnSeqNo : 817,
plygnLo : 127.025116722333,
plygnLa : 37.4574857647479
},
{
setSeqNo : 1,
plygnSeqNo : 818,
plygnLo : 127.024984277679,
plygnLa : 37.457479602225
},
{
setSeqNo : 1,
plygnSeqNo : 819,
plygnLo : 127.024856590524,
plygnLa : 37.4574731489476
},
{
setSeqNo : 1,
plygnSeqNo : 820,
plygnLo : 127.024676981185,
plygnLa : 37.4574667139172
},
{
setSeqNo : 1,
plygnSeqNo : 821,
plygnLo : 127.024545587796,
plygnLa : 37.4574619470095
},
{
setSeqNo : 1,
plygnSeqNo : 822,
plygnLo : 127.024388765317,
plygnLa : 37.4574557869662
},
{
setSeqNo : 1,
plygnSeqNo : 823,
plygnLo : 127.024283505586,
plygnLa : 37.4574524287956
},
{
setSeqNo : 1,
plygnSeqNo : 824,
plygnLo : 127.02412597958,
plygnLa : 37.4574465395461
},
{
setSeqNo : 1,
plygnSeqNo : 825,
plygnLo : 127.023963311074,
plygnLa : 37.457394771657
},
{
setSeqNo : 1,
plygnSeqNo : 826,
plygnLo : 127.023826617981,
plygnLa : 37.4573514330734
},
{
setSeqNo : 1,
plygnSeqNo : 827,
plygnLo : 127.023745720015,
plygnLa : 37.4573292023268
},
{
setSeqNo : 1,
plygnSeqNo : 828,
plygnLo : 127.023712521085,
plygnLa : 37.4573190723127
},
{
setSeqNo : 1,
plygnSeqNo : 829,
plygnLo : 127.023524081107,
plygnLa : 37.4572999608052
},
{
setSeqNo : 1,
plygnSeqNo : 830,
plygnLo : 127.02334323676,
plygnLa : 37.4572822533574
},
{
setSeqNo : 1,
plygnSeqNo : 831,
plygnLo : 127.02306049225,
plygnLa : 37.4572656990524
},
{
setSeqNo : 1,
plygnSeqNo : 832,
plygnLo : 127.022792765009,
plygnLa : 37.4572505393758
},
{
setSeqNo : 1,
plygnSeqNo : 833,
plygnLo : 127.022731819371,
plygnLa : 37.4571942368706
},
{
setSeqNo : 1,
plygnSeqNo : 834,
plygnLo : 127.022582553919,
plygnLa : 37.4570565818017
},
{
setSeqNo : 1,
plygnSeqNo : 835,
plygnLo : 127.022432226224,
plygnLa : 37.4569161060343
},
{
setSeqNo : 1,
plygnSeqNo : 836,
plygnLo : 127.022356970798,
plygnLa : 37.4568153231295
},
{
setSeqNo : 1,
plygnSeqNo : 837,
plygnLo : 127.022248858855,
plygnLa : 37.4566759656512
},
{
setSeqNo : 1,
plygnSeqNo : 838,
plygnLo : 127.022207874237,
plygnLa : 37.4566244440447
},
{
setSeqNo : 1,
plygnSeqNo : 839,
plygnLo : 127.022203272026,
plygnLa : 37.4566162821238
},
{
setSeqNo : 1,
plygnSeqNo : 840,
plygnLo : 127.022091470322,
plygnLa : 37.456539437932
},
{
setSeqNo : 1,
plygnSeqNo : 841,
plygnLo : 127.02197365564,
plygnLa : 37.4564580784408
},
{
setSeqNo : 1,
plygnSeqNo : 842,
plygnLo : 127.021695466374,
plygnLa : 37.4563150923713
},
{
setSeqNo : 1,
plygnSeqNo : 843,
plygnLo : 127.021502955198,
plygnLa : 37.4562258710099
},
{
setSeqNo : 1,
plygnSeqNo : 844,
plygnLo : 127.021427371858,
plygnLa : 37.4562095583498
},
{
setSeqNo : 1,
plygnSeqNo : 845,
plygnLo : 127.021347720958,
plygnLa : 37.4561966147874
},
{
setSeqNo : 1,
plygnSeqNo : 846,
plygnLo : 127.021283794765,
plygnLa : 37.4561926874546
},
{
setSeqNo : 1,
plygnSeqNo : 847,
plygnLo : 127.021263482429,
plygnLa : 37.4561881863699
},
{
setSeqNo : 1,
plygnSeqNo : 848,
plygnLo : 127.021139687012,
plygnLa : 37.4561814494171
},
{
setSeqNo : 1,
plygnSeqNo : 849,
plygnLo : 127.020858708925,
plygnLa : 37.456166854994
},
{
setSeqNo : 1,
plygnSeqNo : 850,
plygnLo : 127.020828509232,
plygnLa : 37.4561643278446
},
{
setSeqNo : 1,
plygnSeqNo : 851,
plygnLo : 127.020427278408,
plygnLa : 37.4561601674211
},
{
setSeqNo : 1,
plygnSeqNo : 852,
plygnLo : 127.020365825535,
plygnLa : 37.45615820376
},
{
setSeqNo : 1,
plygnSeqNo : 853,
plygnLo : 127.02022063902,
plygnLa : 37.4560715050081
},
{
setSeqNo : 1,
plygnSeqNo : 854,
plygnLo : 127.020164999391,
plygnLa : 37.4560391311183
},
{
setSeqNo : 1,
plygnSeqNo : 855,
plygnLo : 127.020125087648,
plygnLa : 37.4560149275222
},
{
setSeqNo : 1,
plygnSeqNo : 856,
plygnLo : 127.01998007817,
plygnLa : 37.4559237229179
},
{
setSeqNo : 1,
plygnSeqNo : 857,
plygnLo : 127.019813703132,
plygnLa : 37.4558460376238
},
{
setSeqNo : 1,
plygnSeqNo : 858,
plygnLo : 127.019708975841,
plygnLa : 37.4557964985409
},
{
setSeqNo : 1,
plygnSeqNo : 859,
plygnLo : 127.019692009076,
plygnLa : 37.4557866446239
},
{
setSeqNo : 1,
plygnSeqNo : 860,
plygnLo : 127.019201412588,
plygnLa : 37.4557315322001
},
{
setSeqNo : 1,
plygnSeqNo : 861,
plygnLo : 127.019060489158,
plygnLa : 37.4557490146913
},
{
setSeqNo : 1,
plygnSeqNo : 862,
plygnLo : 127.01897608618,
plygnLa : 37.4557642272043
},
{
setSeqNo : 1,
plygnSeqNo : 863,
plygnLo : 127.018835866323,
plygnLa : 37.4557887465036
},
{
setSeqNo : 1,
plygnSeqNo : 864,
plygnLo : 127.018636859701,
plygnLa : 37.455849314067
},
{
setSeqNo : 1,
plygnSeqNo : 865,
plygnLo : 127.018433432267,
plygnLa : 37.4559101510076
},
{
setSeqNo : 1,
plygnSeqNo : 866,
plygnLo : 127.018291634783,
plygnLa : 37.4559549422933
},
{
setSeqNo : 1,
plygnSeqNo : 867,
plygnLo : 127.018119998953,
plygnLa : 37.4560101542596
},
{
setSeqNo : 1,
plygnSeqNo : 868,
plygnLo : 127.018065074836,
plygnLa : 37.4560267753187
},
{
setSeqNo : 1,
plygnSeqNo : 869,
plygnLo : 127.018007683745,
plygnLa : 37.4560391726953
},
{
setSeqNo : 1,
plygnSeqNo : 870,
plygnLo : 127.017778471877,
plygnLa : 37.456085101565
},
{
setSeqNo : 1,
plygnSeqNo : 871,
plygnLo : 127.017599589582,
plygnLa : 37.4561228506151
},
{
setSeqNo : 1,
plygnSeqNo : 872,
plygnLo : 127.017545375617,
plygnLa : 37.4561352469816
},
{
setSeqNo : 1,
plygnSeqNo : 873,
plygnLo : 127.017259794791,
plygnLa : 37.4560572947511
},
{
setSeqNo : 1,
plygnSeqNo : 874,
plygnLo : 127.01702843626,
plygnLa : 37.4559925689744
},
{
setSeqNo : 1,
plygnSeqNo : 875,
plygnLo : 127.016946321891,
plygnLa : 37.4559697680043
},
{
setSeqNo : 1,
plygnSeqNo : 876,
plygnLo : 127.016768455247,
plygnLa : 37.4557859318211
},
{
setSeqNo : 1,
plygnSeqNo : 877,
plygnLo : 127.016631556849,
plygnLa : 37.4556448874273
},
{
setSeqNo : 1,
plygnSeqNo : 878,
plygnLo : 127.016617606171,
plygnLa : 37.4556288325674
},
{
setSeqNo : 1,
plygnSeqNo : 879,
plygnLo : 127.016475233817,
plygnLa : 37.4554652655836
},
{
setSeqNo : 1,
plygnSeqNo : 880,
plygnLo : 127.016378793785,
plygnLa : 37.4553543453649
},
{
setSeqNo : 1,
plygnSeqNo : 881,
plygnLo : 127.016287990667,
plygnLa : 37.4552296217792
},
{
setSeqNo : 1,
plygnSeqNo : 882,
plygnLo : 127.016244732916,
plygnLa : 37.4552076692449
},
{
setSeqNo : 1,
plygnSeqNo : 883,
plygnLo : 127.016215230715,
plygnLa : 37.4551944373117
},
{
setSeqNo : 1,
plygnSeqNo : 884,
plygnLo : 127.015787308164,
plygnLa : 37.455005836915
},
{
setSeqNo : 1,
plygnSeqNo : 885,
plygnLo : 127.015574845772,
plygnLa : 37.4549160504806
},
{
setSeqNo : 1,
plygnSeqNo : 886,
plygnLo : 127.015064994303,
plygnLa : 37.4548319189579
},
{
setSeqNo : 1,
plygnSeqNo : 887,
plygnLo : 127.014873573135,
plygnLa : 37.4548417891766
},
{
setSeqNo : 1,
plygnSeqNo : 888,
plygnLo : 127.014509615543,
plygnLa : 37.4548612640718
},
{
setSeqNo : 1,
plygnSeqNo : 889,
plygnLo : 127.01415644648,
plygnLa : 37.4549778659913
},
{
setSeqNo : 1,
plygnSeqNo : 890,
plygnLo : 127.01385925732,
plygnLa : 37.455120373721
},
{
setSeqNo : 1,
plygnSeqNo : 891,
plygnLo : 127.013557831413,
plygnLa : 37.4552654032978
},
{
setSeqNo : 1,
plygnSeqNo : 892,
plygnLo : 127.013386717654,
plygnLa : 37.4553476465364
},
{
setSeqNo : 1,
plygnSeqNo : 893,
plygnLo : 127.012753647031,
plygnLa : 37.4554682182296
},
{
setSeqNo : 1,
plygnSeqNo : 894,
plygnLo : 127.012493522394,
plygnLa : 37.4555177894692
},
{
setSeqNo : 1,
plygnSeqNo : 895,
plygnLo : 127.012376448742,
plygnLa : 37.4555425775788
},
{
setSeqNo : 1,
plygnSeqNo : 896,
plygnLo : 127.012372561846,
plygnLa : 37.4555487771295
},
{
setSeqNo : 1,
plygnSeqNo : 897,
plygnLo : 127.011939016361,
plygnLa : 37.4555093968308
},
{
setSeqNo : 1,
plygnSeqNo : 898,
plygnLo : 127.011367711952,
plygnLa : 37.4554080823122
},
{
setSeqNo : 1,
plygnSeqNo : 899,
plygnLo : 127.011151031401,
plygnLa : 37.4554469510094
},
{
setSeqNo : 1,
plygnSeqNo : 900,
plygnLo : 127.011150841887,
plygnLa : 37.4553819165085
},
{
setSeqNo : 1,
plygnSeqNo : 901,
plygnLo : 127.010823266205,
plygnLa : 37.4554230479718
},
{
setSeqNo : 1,
plygnSeqNo : 902,
plygnLo : 127.010807734032,
plygnLa : 37.4554847126466
},
{
setSeqNo : 1,
plygnSeqNo : 903,
plygnLo : 127.010768012138,
plygnLa : 37.4556235242127
},
{
setSeqNo : 1,
plygnSeqNo : 904,
plygnLo : 127.010725116439,
plygnLa : 37.4557724827812
},
{
setSeqNo : 1,
plygnSeqNo : 905,
plygnLo : 127.010703232004,
plygnLa : 37.455847654814
},
{
setSeqNo : 1,
plygnSeqNo : 906,
plygnLo : 127.01068840002,
plygnLa : 37.4559059422493
},
{
setSeqNo : 1,
plygnSeqNo : 907,
plygnLo : 127.010654510346,
plygnLa : 37.4560379956724
},
{
setSeqNo : 1,
plygnSeqNo : 908,
plygnLo : 127.010642147823,
plygnLa : 37.4560678484015
},
{
setSeqNo : 1,
plygnSeqNo : 909,
plygnLo : 127.010631561252,
plygnLa : 37.4560881215803
},
{
setSeqNo : 1,
plygnSeqNo : 910,
plygnLo : 127.010584247295,
plygnLa : 37.4561689274397
},
{
setSeqNo : 1,
plygnSeqNo : 911,
plygnLo : 127.010520848372,
plygnLa : 37.4562187752209
},
{
setSeqNo : 1,
plygnSeqNo : 912,
plygnLo : 127.010405722953,
plygnLa : 37.456308606446
},
{
setSeqNo : 1,
plygnSeqNo : 913,
plygnLo : 127.010371640342,
plygnLa : 37.4563598480906
},
{
setSeqNo : 1,
plygnSeqNo : 914,
plygnLo : 127.010288482302,
plygnLa : 37.4564831759965
},
{
setSeqNo : 1,
plygnSeqNo : 915,
plygnLo : 127.010117369947,
plygnLa : 37.4566245362681
},
{
setSeqNo : 1,
plygnSeqNo : 916,
plygnLo : 127.01003173346,
plygnLa : 37.4567518109357
},
{
setSeqNo : 1,
plygnSeqNo : 917,
plygnLo : 127.009907603036,
plygnLa : 37.4568754286066
},
{
setSeqNo : 1,
plygnSeqNo : 918,
plygnLo : 127.009845964976,
plygnLa : 37.4569269618246
},
{
setSeqNo : 1,
plygnSeqNo : 919,
plygnLo : 127.009786994276,
plygnLa : 37.4569652579296
},
{
setSeqNo : 1,
plygnSeqNo : 920,
plygnLo : 127.00961181885,
plygnLa : 37.4570784544109
},
{
setSeqNo : 1,
plygnSeqNo : 921,
plygnLo : 127.009551772146,
plygnLa : 37.4571009847056
},
{
setSeqNo : 1,
plygnSeqNo : 922,
plygnLo : 127.009303477946,
plygnLa : 37.4571891276864
},
{
setSeqNo : 1,
plygnSeqNo : 923,
plygnLo : 127.009232671423,
plygnLa : 37.4572209475225
},
{
setSeqNo : 1,
plygnSeqNo : 924,
plygnLo : 127.009076566252,
plygnLa : 37.4573707495533
},
{
setSeqNo : 1,
plygnSeqNo : 925,
plygnLo : 127.008985279123,
plygnLa : 37.4575106985092
},
{
setSeqNo : 1,
plygnSeqNo : 926,
plygnLo : 127.008887454065,
plygnLa : 37.4576005258348
},
{
setSeqNo : 1,
plygnSeqNo : 927,
plygnLo : 127.008797755323,
plygnLa : 37.4576838659365
},
{
setSeqNo : 1,
plygnSeqNo : 928,
plygnLo : 127.008710868775,
plygnLa : 37.4577649702999
},
{
setSeqNo : 1,
plygnSeqNo : 929,
plygnLo : 127.008690912487,
plygnLa : 37.4577973455863
},
{
setSeqNo : 1,
plygnSeqNo : 930,
plygnLo : 127.00863352673,
plygnLa : 37.4578880163952
},
{
setSeqNo : 1,
plygnSeqNo : 931,
plygnLo : 127.008578964459,
plygnLa : 37.4579755806703
},
{
setSeqNo : 1,
plygnSeqNo : 932,
plygnLo : 127.008531649367,
plygnLa : 37.4580516087223
},
{
setSeqNo : 1,
plygnSeqNo : 933,
plygnLo : 127.008599471859,
plygnLa : 37.458123406851
},
{
setSeqNo : 1,
plygnSeqNo : 934,
plygnLo : 127.008600889337,
plygnLa : 37.4581932343737
},
{
setSeqNo : 1,
plygnSeqNo : 935,
plygnLo : 127.008597188036,
plygnLa : 37.4582467275883
},
{
setSeqNo : 1,
plygnSeqNo : 936,
plygnLo : 127.008581825014,
plygnLa : 37.4583371175738
},
{
setSeqNo : 1,
plygnSeqNo : 937,
plygnLo : 127.008548104318,
plygnLa : 37.4583973683153
},
{
setSeqNo : 1,
plygnSeqNo : 938,
plygnLo : 127.008579718283,
plygnLa : 37.4584046836302
},
{
setSeqNo : 1,
plygnSeqNo : 939,
plygnLo : 127.008577424172,
plygnLa : 37.4584114508272
},
{
setSeqNo : 1,
plygnSeqNo : 940,
plygnLo : 127.008327531524,
plygnLa : 37.4584917091401
},
{
setSeqNo : 1,
plygnSeqNo : 941,
plygnLo : 127.008315360927,
plygnLa : 37.4586457266584
},
{
setSeqNo : 1,
plygnSeqNo : 942,
plygnLo : 127.008217706827,
plygnLa : 37.4587732778394
},
{
setSeqNo : 1,
plygnSeqNo : 943,
plygnLo : 127.008220533928,
plygnLa : 37.4588053731981
},
{
setSeqNo : 1,
plygnSeqNo : 944,
plygnLo : 127.008214028209,
plygnLa : 37.459099893732
},
{
setSeqNo : 1,
plygnSeqNo : 945,
plygnLo : 127.008020654561,
plygnLa : 37.4591629738029
},
{
setSeqNo : 1,
plygnSeqNo : 946,
plygnLo : 127.00787604609,
plygnLa : 37.4595447830196
},
{
setSeqNo : 1,
plygnSeqNo : 947,
plygnLo : 127.007722236463,
plygnLa : 37.4596653000573
},
{
setSeqNo : 1,
plygnSeqNo : 948,
plygnLo : 127.007557480789,
plygnLa : 37.4598545200936
},
{
setSeqNo : 1,
plygnSeqNo : 949,
plygnLo : 127.007312178359,
plygnLa : 37.460038111672
},
{
setSeqNo : 1,
plygnSeqNo : 950,
plygnLo : 127.00726945037,
plygnLa : 37.4601414511976
},
{
setSeqNo : 1,
plygnSeqNo : 951,
plygnLo : 127.007040923753,
plygnLa : 37.4602155059774
},
{
setSeqNo : 1,
plygnSeqNo : 952,
plygnLo : 127.006961280348,
plygnLa : 37.4603517861466
},
{
setSeqNo : 1,
plygnSeqNo : 953,
plygnLo : 127.00680923676,
plygnLa : 37.4605500145678
},
{
setSeqNo : 1,
plygnSeqNo : 954,
plygnLo : 127.006794940592,
plygnLa : 37.4605750813022
},
{
setSeqNo : 1,
plygnSeqNo : 955,
plygnLo : 127.006513814536,
plygnLa : 37.4611094979257
},
{
setSeqNo : 1,
plygnSeqNo : 956,
plygnLo : 127.006415276252,
plygnLa : 37.4612688622599
},
{
setSeqNo : 1,
plygnSeqNo : 957,
plygnLo : 127.006139441076,
plygnLa : 37.4617126266961
},
{
setSeqNo : 1,
plygnSeqNo : 958,
plygnLo : 127.006127607981,
plygnLa : 37.4617309269047
},
{
setSeqNo : 1,
plygnSeqNo : 959,
plygnLo : 127.00602429188,
plygnLa : 37.4618249688174
},
{
setSeqNo : 1,
plygnSeqNo : 960,
plygnLo : 127.006157470026,
plygnLa : 37.4618883144744
},
{
setSeqNo : 1,
plygnSeqNo : 961,
plygnLo : 127.006148631578,
plygnLa : 37.4619049277897
},
{
setSeqNo : 1,
plygnSeqNo : 962,
plygnLo : 127.006043387116,
plygnLa : 37.4620873854115
},
{
setSeqNo : 1,
plygnSeqNo : 963,
plygnLo : 127.00593901274,
plygnLa : 37.4622568955197
},
{
setSeqNo : 1,
plygnSeqNo : 964,
plygnLo : 127.005932309851,
plygnLa : 37.4622729422904
},
{
setSeqNo : 1,
plygnSeqNo : 965,
plygnLo : 127.005769480752,
plygnLa : 37.4625483133565
},
{
setSeqNo : 1,
plygnSeqNo : 966,
plygnLo : 127.005713498949,
plygnLa : 37.4625894283826
},
{
setSeqNo : 1,
plygnSeqNo : 967,
plygnLo : 127.005457239775,
plygnLa : 37.4627578086085
},
{
setSeqNo : 1,
plygnSeqNo : 968,
plygnLo : 127.005329199306,
plygnLa : 37.4627949875813
},
{
setSeqNo : 1,
plygnSeqNo : 969,
plygnLo : 127.004968755808,
plygnLa : 37.4631869362273
},
{
setSeqNo : 1,
plygnSeqNo : 970,
plygnLo : 127.004797627976,
plygnLa : 37.4635177712182
},
{
setSeqNo : 1,
plygnSeqNo : 971,
plygnLo : 127.004764951896,
plygnLa : 37.4635802846493
},
{
setSeqNo : 1,
plygnSeqNo : 972,
plygnLo : 127.004748368962,
plygnLa : 37.4638362240263
},
{
setSeqNo : 1,
plygnSeqNo : 973,
plygnLo : 127.004648574446,
plygnLa : 37.4639212548117
},
{
setSeqNo : 1,
plygnSeqNo : 974,
plygnLo : 127.004469669636,
plygnLa : 37.4640733128798
},
{
setSeqNo : 1,
plygnSeqNo : 975,
plygnLo : 127.004805452754,
plygnLa : 37.464880541103
},
{
setSeqNo : 1,
plygnSeqNo : 976,
plygnLo : 127.004762183768,
plygnLa : 37.4649230606438
},
{
setSeqNo : 1,
plygnSeqNo : 977,
plygnLo : 127.004683601502,
plygnLa : 37.465172243397
},
{
setSeqNo : 1,
plygnSeqNo : 978,
plygnLo : 127.004704628167,
plygnLa : 37.4652305289804
},
{
setSeqNo : 1,
plygnSeqNo : 979,
plygnLo : 127.004891864953,
plygnLa : 37.4658026625264
},
{
setSeqNo : 1,
plygnSeqNo : 980,
plygnLo : 127.004905465359,
plygnLa : 37.4658426388246
},
{
setSeqNo : 1,
plygnSeqNo : 981,
plygnLo : 127.004558952775,
plygnLa : 37.4662441624519
},
{
setSeqNo : 1,
plygnSeqNo : 982,
plygnLo : 127.004488839816,
plygnLa : 37.4663283530909
},
{
setSeqNo : 1,
plygnSeqNo : 983,
plygnLo : 127.004492728671,
plygnLa : 37.4663497536624
},
{
setSeqNo : 1,
plygnSeqNo : 984,
plygnLo : 127.004521357567,
plygnLa : 37.4667906761634
},
{
setSeqNo : 1,
plygnSeqNo : 985,
plygnLo : 127.004524534338,
plygnLa : 37.4667977220289
},
{
setSeqNo : 1,
plygnSeqNo : 986,
plygnLo : 127.00438076613,
plygnLa : 37.4669776387087
},
{
setSeqNo : 1,
plygnSeqNo : 987,
plygnLo : 127.004245657084,
plygnLa : 37.4671434796832
},
{
setSeqNo : 1,
plygnSeqNo : 988,
plygnLo : 127.004129627542,
plygnLa : 37.467287084352
},
{
setSeqNo : 1,
plygnSeqNo : 989,
plygnLo : 127.003675356629,
plygnLa : 37.4677204236006
},
{
setSeqNo : 1,
plygnSeqNo : 990,
plygnLo : 127.002734820817,
plygnLa : 37.4671246474786
},
{
setSeqNo : 1,
plygnSeqNo : 991,
plygnLo : 127.001962796986,
plygnLa : 37.4670874866436
},
{
setSeqNo : 1,
plygnSeqNo : 992,
plygnLo : 127.001717467834,
plygnLa : 37.4672088339512
},
{
setSeqNo : 1,
plygnSeqNo : 993,
plygnLo : 127.001485917026,
plygnLa : 37.4673231546155
},
{
setSeqNo : 1,
plygnSeqNo : 994,
plygnLo : 127.001043289448,
plygnLa : 37.4672096811882
},
{
setSeqNo : 1,
plygnSeqNo : 995,
plygnLo : 127.00099666187,
plygnLa : 37.4671975790875
},
{
setSeqNo : 1,
plygnSeqNo : 996,
plygnLo : 127.000476863044,
plygnLa : 37.4670629853292
},
{
setSeqNo : 1,
plygnSeqNo : 997,
plygnLo : 127.000091296785,
plygnLa : 37.4671063365552
},
{
setSeqNo : 1,
plygnSeqNo : 998,
plygnLo : 126.999505785956,
plygnLa : 37.4671584245001
},
{
setSeqNo : 1,
plygnSeqNo : 999,
plygnLo : 126.998991456917,
plygnLa : 37.4672119078098
},
{
setSeqNo : 1,
plygnSeqNo : 1000,
plygnLo : 126.998779505876,
plygnLa : 37.4672341487508
},
{
setSeqNo : 1,
plygnSeqNo : 1001,
plygnLo : 126.998695260283,
plygnLa : 37.4672121892633
},
{
setSeqNo : 1,
plygnSeqNo : 1002,
plygnLo : 126.998085375333,
plygnLa : 37.4670550549207
},
{
setSeqNo : 1,
plygnSeqNo : 1003,
plygnLo : 126.99780190863,
plygnLa : 37.4670226648486
},
{
setSeqNo : 1,
plygnSeqNo : 1004,
plygnLo : 126.997600546434,
plygnLa : 37.4671420415608
},
{
setSeqNo : 1,
plygnSeqNo : 1005,
plygnLo : 126.997476197783,
plygnLa : 37.4672138385737
},
{
setSeqNo : 1,
plygnSeqNo : 1006,
plygnLo : 126.997426743569,
plygnLa : 37.4672422717078
},
{
setSeqNo : 1,
plygnSeqNo : 1007,
plygnLo : 126.997170993289,
plygnLa : 37.4672141065057
},
{
setSeqNo : 1,
plygnSeqNo : 1008,
plygnLo : 126.996985543363,
plygnLa : 37.4671797543347
},
{
setSeqNo : 1,
plygnSeqNo : 1009,
plygnLo : 126.996751874987,
plygnLa : 37.4670724702563
},
{
setSeqNo : 1,
plygnSeqNo : 1010,
plygnLo : 126.996613579924,
plygnLa : 37.4669260430002
},
{
setSeqNo : 1,
plygnSeqNo : 1011,
plygnLo : 126.996231045186,
plygnLa : 37.4666084324865
},
{
setSeqNo : 1,
plygnSeqNo : 1012,
plygnLo : 126.996262838438,
plygnLa : 37.4665338128005
},
{
setSeqNo : 1,
plygnSeqNo : 1013,
plygnLo : 126.996367595047,
plygnLa : 37.4662868874283
},
{
setSeqNo : 1,
plygnSeqNo : 1014,
plygnLo : 126.996524278949,
plygnLa : 37.4659174825665
},
{
setSeqNo : 1,
plygnSeqNo : 1015,
plygnLo : 126.996455240032,
plygnLa : 37.4656854714836
},
{
setSeqNo : 1,
plygnSeqNo : 1016,
plygnLo : 126.996460712789,
plygnLa : 37.4656815342877
},
{
setSeqNo : 1,
plygnSeqNo : 1017,
plygnLo : 126.996643181744,
plygnLa : 37.4654275666686
},
{
setSeqNo : 1,
plygnSeqNo : 1018,
plygnLo : 126.996632065115,
plygnLa : 37.4651293884916
},
{
setSeqNo : 1,
plygnSeqNo : 1019,
plygnLo : 126.996619203363,
plygnLa : 37.4647785630283
},
{
setSeqNo : 1,
plygnSeqNo : 1020,
plygnLo : 126.996772342564,
plygnLa : 37.4646175156989
},
{
setSeqNo : 1,
plygnSeqNo : 1021,
plygnLo : 126.996954623275,
plygnLa : 37.4644285913257
},
{
setSeqNo : 1,
plygnSeqNo : 1022,
plygnLo : 126.99711923518,
plygnLa : 37.4642588114543
},
{
setSeqNo : 1,
plygnSeqNo : 1023,
plygnLo : 126.997193594251,
plygnLa : 37.4641842015224
},
{
setSeqNo : 1,
plygnSeqNo : 1024,
plygnLo : 126.997253128318,
plygnLa : 37.4640197717676
},
{
setSeqNo : 1,
plygnSeqNo : 1025,
plygnLo : 126.997314955775,
plygnLa : 37.463844078093
},
{
setSeqNo : 1,
plygnSeqNo : 1026,
plygnLo : 126.997370770312,
plygnLa : 37.4636875287249
},
{
setSeqNo : 1,
plygnSeqNo : 1027,
plygnLo : 126.997259338346,
plygnLa : 37.4635357611427
},
{
setSeqNo : 1,
plygnSeqNo : 1028,
plygnLo : 126.997166794216,
plygnLa : 37.4634082099365
},
{
setSeqNo : 1,
plygnSeqNo : 1029,
plygnLo : 126.996984903495,
plygnLa : 37.4631590223545
},
{
setSeqNo : 1,
plygnSeqNo : 1030,
plygnLo : 126.996983478892,
plygnLa : 37.4631525443442
},
{
setSeqNo : 1,
plygnSeqNo : 1031,
plygnLo : 126.996951526435,
plygnLa : 37.4629548797322
},
{
setSeqNo : 1,
plygnSeqNo : 1032,
plygnLo : 126.996898034585,
plygnLa : 37.4626516373879
},
{
setSeqNo : 1,
plygnSeqNo : 1033,
plygnLo : 126.996851956507,
plygnLa : 37.4623720438967
},
{
setSeqNo : 1,
plygnSeqNo : 1034,
plygnLo : 126.996802693375,
plygnLa : 37.4620761166569
},
{
setSeqNo : 1,
plygnSeqNo : 1035,
plygnLo : 126.99676862728,
plygnLa : 37.4618733881973
},
{
setSeqNo : 1,
plygnSeqNo : 1036,
plygnLo : 126.996348823396,
plygnLa : 37.4617984794815
},
{
setSeqNo : 1,
plygnSeqNo : 1037,
plygnLo : 126.995901304098,
plygnLa : 37.4617179270089
},
{
setSeqNo : 1,
plygnSeqNo : 1038,
plygnLo : 126.995439829,
plygnLa : 37.4616325979335
},
{
setSeqNo : 1,
plygnSeqNo : 1039,
plygnLo : 126.995059238699,
plygnLa : 37.4615621822847
},
{
setSeqNo : 1,
plygnSeqNo : 1040,
plygnLo : 126.994748226091,
plygnLa : 37.46150500406
},
{
setSeqNo : 1,
plygnSeqNo : 1041,
plygnLo : 126.994525526096,
plygnLa : 37.4614647254141
},
{
setSeqNo : 1,
plygnSeqNo : 1042,
plygnLo : 126.994289930849,
plygnLa : 37.4614213548954
},
{
setSeqNo : 1,
plygnSeqNo : 1043,
plygnLo : 126.993962487402,
plygnLa : 37.4614483644862
},
{
setSeqNo : 1,
plygnSeqNo : 1044,
plygnLo : 126.993695281288,
plygnLa : 37.4614694674057
},
{
setSeqNo : 1,
plygnSeqNo : 1045,
plygnLo : 126.993354412843,
plygnLa : 37.4614959072523
},
{
setSeqNo : 1,
plygnSeqNo : 1046,
plygnLo : 126.993152926455,
plygnLa : 37.4612762733811
},
{
setSeqNo : 1,
plygnSeqNo : 1047,
plygnLo : 126.992988706041,
plygnLa : 37.4610667770991
},
{
setSeqNo : 1,
plygnSeqNo : 1048,
plygnLo : 126.992895120098,
plygnLa : 37.4609479544146
},
{
setSeqNo : 1,
plygnSeqNo : 1049,
plygnLo : 126.992655183043,
plygnLa : 37.4603439754752
},
{
setSeqNo : 1,
plygnSeqNo : 1050,
plygnLo : 126.99220604441,
plygnLa : 37.4604878219828
},
{
setSeqNo : 1,
plygnSeqNo : 1051,
plygnLo : 126.992027834669,
plygnLa : 37.4605463730917
},
{
setSeqNo : 1,
plygnSeqNo : 1052,
plygnLo : 126.991698471519,
plygnLa : 37.4605190371494
},
{
setSeqNo : 1,
plygnSeqNo : 1053,
plygnLo : 126.991623068912,
plygnLa : 37.4604415995706
},
{
setSeqNo : 1,
plygnSeqNo : 1054,
plygnLo : 126.991332059636,
plygnLa : 37.4601360793815
},
{
setSeqNo : 1,
plygnSeqNo : 1055,
plygnLo : 126.990954672352,
plygnLa : 37.4599471149989
},
{
setSeqNo : 1,
plygnSeqNo : 1056,
plygnLo : 126.990522721325,
plygnLa : 37.459727455208
},
{
setSeqNo : 1,
plygnSeqNo : 1057,
plygnLo : 126.98999453731,
plygnLa : 37.4594630134782
},
{
setSeqNo : 1,
plygnSeqNo : 1058,
plygnLo : 126.989919328873,
plygnLa : 37.4593084310546
},
{
setSeqNo : 1,
plygnSeqNo : 1059,
plygnLo : 126.989780384945,
plygnLa : 37.4590248787967
},
{
setSeqNo : 1,
plygnSeqNo : 1060,
plygnLo : 126.989674274105,
plygnLa : 37.4588089158328
},
{
setSeqNo : 1,
plygnSeqNo : 1061,
plygnLo : 126.989631370367,
plygnLa : 37.4587379572242
},
{
setSeqNo : 1,
plygnSeqNo : 1062,
plygnLo : 126.98949912836,
plygnLa : 37.4585228291444
},
{
setSeqNo : 1,
plygnSeqNo : 1063,
plygnLo : 126.989170673205,
plygnLa : 37.4583856716188
},
{
setSeqNo : 1,
plygnSeqNo : 1064,
plygnLo : 126.988817493927,
plygnLa : 37.4582395004288
},
{
setSeqNo : 1,
plygnSeqNo : 1065,
plygnLo : 126.988717541199,
plygnLa : 37.458196412249
},
{
setSeqNo : 1,
plygnSeqNo : 1066,
plygnLo : 126.988645845446,
plygnLa : 37.4581448754914
},
{
setSeqNo : 1,
plygnSeqNo : 1067,
plygnLo : 126.988635783121,
plygnLa : 37.4581659939706
},
{
setSeqNo : 1,
plygnSeqNo : 1068,
plygnLo : 126.988411860761,
plygnLa : 37.4580753016087
},
{
setSeqNo : 1,
plygnSeqNo : 1069,
plygnLo : 126.988356596443,
plygnLa : 37.4580530580558
},
{
setSeqNo : 1,
plygnSeqNo : 1070,
plygnLo : 126.988165166092,
plygnLa : 37.4579730731534
},
{
setSeqNo : 1,
plygnSeqNo : 1071,
plygnLo : 126.98790752257,
plygnLa : 37.4578668961848
},
{
setSeqNo : 1,
plygnSeqNo : 1072,
plygnLo : 126.987261214508,
plygnLa : 37.457600734824
},
{
setSeqNo : 1,
plygnSeqNo : 1073,
plygnLo : 126.986781067556,
plygnLa : 37.4574033015922
},
{
setSeqNo : 1,
plygnSeqNo : 1074,
plygnLo : 126.986612632558,
plygnLa : 37.457212375318
},
{
setSeqNo : 1,
plygnSeqNo : 1075,
plygnLo : 126.986209984518,
plygnLa : 37.4572067023203
},
{
setSeqNo : 1,
plygnSeqNo : 1076,
plygnLo : 126.98526394275,
plygnLa : 37.4571817893027
},
{
setSeqNo : 1,
plygnSeqNo : 1077,
plygnLo : 126.984903358076,
plygnLa : 37.4570426501828
},
{
setSeqNo : 1,
plygnSeqNo : 1078,
plygnLo : 126.984387842212,
plygnLa : 37.4571056464145
},
{
setSeqNo : 1,
plygnSeqNo : 1079,
plygnLo : 126.982888227473,
plygnLa : 37.456826956333
},
{
setSeqNo : 1,
plygnSeqNo : 1080,
plygnLo : 126.982437703098,
plygnLa : 37.4568778456807
},
{
setSeqNo : 1,
plygnSeqNo : 1081,
plygnLo : 126.981903651093,
plygnLa : 37.4569357539922
},
{
setSeqNo : 1,
plygnSeqNo : 1082,
plygnLo : 126.982033879203,
plygnLa : 37.456662943319
},
{
setSeqNo : 1,
plygnSeqNo : 1083,
plygnLo : 126.982389212364,
plygnLa : 37.4559171396476
},
{
setSeqNo : 1,
plygnSeqNo : 1084,
plygnLo : 126.982398045518,
plygnLa : 37.4558912371709
},
{
setSeqNo : 1,
plygnSeqNo : 1085,
plygnLo : 126.981201284058,
plygnLa : 37.4557775645031
},
{
setSeqNo : 1,
plygnSeqNo : 1086,
plygnLo : 126.979790477165,
plygnLa : 37.4556472359139
},
{
setSeqNo : 1,
plygnSeqNo : 1087,
plygnLo : 126.978477463765,
plygnLa : 37.4557348354928
},
{
setSeqNo : 1,
plygnSeqNo : 1088,
plygnLo : 126.977757117234,
plygnLa : 37.4551991539051
},
{
setSeqNo : 1,
plygnSeqNo : 1089,
plygnLo : 126.976553011428,
plygnLa : 37.454897635441
},
{
setSeqNo : 1,
plygnSeqNo : 1090,
plygnLo : 126.974579560032,
plygnLa : 37.4544129124463
},
{
setSeqNo : 1,
plygnSeqNo : 1091,
plygnLo : 126.974061798258,
plygnLa : 37.4539048510271
},
{
setSeqNo : 1,
plygnSeqNo : 1092,
plygnLo : 126.974012539834,
plygnLa : 37.4538555629326
},
{
setSeqNo : 1,
plygnSeqNo : 1093,
plygnLo : 126.97337156778,
plygnLa : 37.4532376646187
},
{
setSeqNo : 1,
plygnSeqNo : 1094,
plygnLo : 126.973324443396,
plygnLa : 37.4531644460186
},
{
setSeqNo : 1,
plygnSeqNo : 1095,
plygnLo : 126.973256677468,
plygnLa : 37.4530487062719
},
{
setSeqNo : 1,
plygnSeqNo : 1096,
plygnLo : 126.972843534459,
plygnLa : 37.4523824202137
},
{
setSeqNo : 1,
plygnSeqNo : 1097,
plygnLo : 126.97175282481,
plygnLa : 37.4517373725571
},
{
setSeqNo : 1,
plygnSeqNo : 1098,
plygnLo : 126.971067649024,
plygnLa : 37.4504698692976
},
{
setSeqNo : 1,
plygnSeqNo : 1099,
plygnLo : 126.970569392113,
plygnLa : 37.4494527381843
},
{
setSeqNo : 1,
plygnSeqNo : 1100,
plygnLo : 126.97031198123,
plygnLa : 37.449349334074
},
{
setSeqNo : 1,
plygnSeqNo : 1101,
plygnLo : 126.97014707614,
plygnLa : 37.4492912841958
},
{
setSeqNo : 1,
plygnSeqNo : 1102,
plygnLo : 126.970051378918,
plygnLa : 37.4492574704246
},
{
setSeqNo : 1,
plygnSeqNo : 1103,
plygnLo : 126.969593567905,
plygnLa : 37.4490960142859
},
{
setSeqNo : 1,
plygnSeqNo : 1104,
plygnLo : 126.968661717638,
plygnLa : 37.4487545018657
},
{
setSeqNo : 1,
plygnSeqNo : 1105,
plygnLo : 126.967662977213,
plygnLa : 37.4483805812841
},
{
setSeqNo : 1,
plygnSeqNo : 1106,
plygnLo : 126.965780674036,
plygnLa : 37.4471994291235
},
{
setSeqNo : 1,
plygnSeqNo : 1107,
plygnLo : 126.965343429088,
plygnLa : 37.4469239221414
},
{
setSeqNo : 1,
plygnSeqNo : 1108,
plygnLo : 126.96520256109,
plygnLa : 37.446833218772
},
{
setSeqNo : 1,
plygnSeqNo : 1109,
plygnLo : 126.964940065327,
plygnLa : 37.4466698301982
},
{
setSeqNo : 1,
plygnSeqNo : 1110,
plygnLo : 126.964620033522,
plygnLa : 37.4464701043863
},
{
setSeqNo : 1,
plygnSeqNo : 1111,
plygnLo : 126.964365141926,
plygnLa : 37.4463115006185
},
{
setSeqNo : 1,
plygnSeqNo : 1112,
plygnLo : 126.964289766362,
plygnLa : 37.4462672735837
},
{
setSeqNo : 1,
plygnSeqNo : 1113,
plygnLo : 126.964121732235,
plygnLa : 37.4457708207325
},
{
setSeqNo : 1,
plygnSeqNo : 1114,
plygnLo : 126.963941897053,
plygnLa : 37.4452459263788
},
{
setSeqNo : 1,
plygnSeqNo : 1115,
plygnLo : 126.963933616413,
plygnLa : 37.4452146672963
},
{
setSeqNo : 1,
plygnSeqNo : 1116,
plygnLo : 126.964140214262,
plygnLa : 37.4448320934082
},
{
setSeqNo : 1,
plygnSeqNo : 1117,
plygnLo : 126.964372270795,
plygnLa : 37.4443988370106
},
{
setSeqNo : 1,
plygnSeqNo : 1118,
plygnLo : 126.964419277802,
plygnLa : 37.4443126886769
},
{
setSeqNo : 1,
plygnSeqNo : 1119,
plygnLo : 126.96431621809,
plygnLa : 37.4438308964164
},
{
setSeqNo : 1,
plygnSeqNo : 1120,
plygnLo : 126.964303004317,
plygnLa : 37.4437703618958
},
{
setSeqNo : 1,
plygnSeqNo : 1121,
plygnLo : 126.964320819806,
plygnLa : 37.443462330872
},
{
setSeqNo : 1,
plygnSeqNo : 1122,
plygnLo : 126.964334310255,
plygnLa : 37.4433063531087
},
{
setSeqNo : 1,
plygnSeqNo : 1123,
plygnLo : 126.964356025571,
plygnLa : 37.4429687625894
},
{
setSeqNo : 1,
plygnSeqNo : 1124,
plygnLo : 126.964381646337,
plygnLa : 37.4425771111414
},
{
setSeqNo : 1,
plygnSeqNo : 1125,
plygnLo : 126.964610184126,
plygnLa : 37.4420878274053
},
{
setSeqNo : 1,
plygnSeqNo : 1126,
plygnLo : 126.964634038899,
plygnLa : 37.4420396834858
},
{
setSeqNo : 1,
plygnSeqNo : 1127,
plygnLo : 126.96415382713,
plygnLa : 37.4416132495404
},
{
setSeqNo : 1,
plygnSeqNo : 1128,
plygnLo : 126.963822021922,
plygnLa : 37.4413186222915
},
{
setSeqNo : 1,
plygnSeqNo : 1129,
plygnLo : 126.963784263956,
plygnLa : 37.4412867953858
},
{
setSeqNo : 1,
plygnSeqNo : 1130,
plygnLo : 126.963799657966,
plygnLa : 37.4408714906395
},
{
setSeqNo : 1,
plygnSeqNo : 1131,
plygnLo : 126.963803407635,
plygnLa : 37.4407870228061
},
{
setSeqNo : 1,
plygnSeqNo : 1132,
plygnLo : 126.963113959371,
plygnLa : 37.4403765621969
},
{
setSeqNo : 1,
plygnSeqNo : 1133,
plygnLo : 126.962983529674,
plygnLa : 37.4402996457362
},
{
setSeqNo : 1,
plygnSeqNo : 1134,
plygnLo : 126.962942927644,
plygnLa : 37.4402804948414
},
{
setSeqNo : 1,
plygnSeqNo : 1135,
plygnLo : 126.962466918276,
plygnLa : 37.4402806184998
},
{
setSeqNo : 1,
plygnSeqNo : 1136,
plygnLo : 126.961949420487,
plygnLa : 37.4402787523935
},
{
setSeqNo : 1,
plygnSeqNo : 1137,
plygnLo : 126.96176262172,
plygnLa : 37.4402792574627
},
{
setSeqNo : 1,
plygnSeqNo : 1138,
plygnLo : 126.961499890149,
plygnLa : 37.4402991529297
},
{
setSeqNo : 1,
plygnSeqNo : 1139,
plygnLo : 126.960903965512,
plygnLa : 37.440343162786
},
{
setSeqNo : 1,
plygnSeqNo : 1140,
plygnLo : 126.960275918834,
plygnLa : 37.4403854533802
},
{
setSeqNo : 1,
plygnSeqNo : 1141,
plygnLo : 126.960055912972,
plygnLa : 37.4404005866314
},
{
setSeqNo : 1,
plygnSeqNo : 1142,
plygnLo : 126.960000499521,
plygnLa : 37.4403557950072
},
{
setSeqNo : 1,
plygnSeqNo : 1143,
plygnLo : 126.959756601295,
plygnLa : 37.4401558035381
},
{
setSeqNo : 1,
plygnSeqNo : 1144,
plygnLo : 126.959571480264,
plygnLa : 37.4400053775925
},
{
setSeqNo : 1,
plygnSeqNo : 1145,
plygnLo : 126.959542534305,
plygnLa : 37.4399786168919
},
{
setSeqNo : 1,
plygnSeqNo : 1146,
plygnLo : 126.959496841916,
plygnLa : 37.4399101871856
},
{
setSeqNo : 1,
plygnSeqNo : 1147,
plygnLo : 126.959252689481,
plygnLa : 37.4395434981382
},
{
setSeqNo : 1,
plygnSeqNo : 1148,
plygnLo : 126.959169430865,
plygnLa : 37.4394069100239
},
{
setSeqNo : 1,
plygnSeqNo : 1149,
plygnLo : 126.958998860013,
plygnLa : 37.4391269784749
},
{
setSeqNo : 1,
plygnSeqNo : 1150,
plygnLo : 126.958977344457,
plygnLa : 37.4390895165708
},
{
setSeqNo : 1,
plygnSeqNo : 1151,
plygnLo : 126.958966055229,
plygnLa : 37.4390698063937
},
{
setSeqNo : 1,
plygnSeqNo : 1152,
plygnLo : 126.95843252623,
plygnLa : 37.4390166788012
},
{
setSeqNo : 1,
plygnSeqNo : 1153,
plygnLo : 126.958139633067,
plygnLa : 37.4389881260121
},
{
setSeqNo : 1,
plygnSeqNo : 1154,
plygnLo : 126.957740641471,
plygnLa : 37.438947723545
},
{
setSeqNo : 1,
plygnSeqNo : 1155,
plygnLo : 126.957566918951,
plygnLa : 37.4389304851892
},
{
setSeqNo : 1,
plygnSeqNo : 1156,
plygnLo : 126.957040647929,
plygnLa : 37.4388531351263
},
{
setSeqNo : 1,
plygnSeqNo : 1157,
plygnLo : 126.956705031774,
plygnLa : 37.4388034526232
},
{
setSeqNo : 1,
plygnSeqNo : 1158,
plygnLo : 126.95647817921,
plygnLa : 37.4387698578567
},
{
setSeqNo : 1,
plygnSeqNo : 1159,
plygnLo : 126.956368198363,
plygnLa : 37.4387540485471
},
{
setSeqNo : 1,
plygnSeqNo : 1160,
plygnLo : 126.95606311497,
plygnLa : 37.4387378844369
},
{
setSeqNo : 1,
plygnSeqNo : 1161,
plygnLo : 126.955619969829,
plygnLa : 37.4387143411109
},
{
setSeqNo : 1,
plygnSeqNo : 1162,
plygnLo : 126.955260336688,
plygnLa : 37.4386964613779
},
{
setSeqNo : 1,
plygnSeqNo : 1163,
plygnLo : 126.955174878788,
plygnLa : 37.4386924887676
},
{
setSeqNo : 1,
plygnSeqNo : 1164,
plygnLo : 126.955108856368,
plygnLa : 37.4386921844196
},
{
setSeqNo : 1,
plygnSeqNo : 1165,
plygnLo : 126.95499583803,
plygnLa : 37.438724522138
},
{
setSeqNo : 1,
plygnSeqNo : 1166,
plygnLo : 126.954630812103,
plygnLa : 37.438856988592
},
{
setSeqNo : 1,
plygnSeqNo : 1167,
plygnLo : 126.954381305498,
plygnLa : 37.4389103910239
},
{
setSeqNo : 1,
plygnSeqNo : 1168,
plygnLo : 126.953904180709,
plygnLa : 37.4390095894883
},
{
setSeqNo : 1,
plygnSeqNo : 1169,
plygnLo : 126.95361054864,
plygnLa : 37.4390443861038
},
{
setSeqNo : 1,
plygnSeqNo : 1170,
plygnLo : 126.953447569149,
plygnLa : 37.4390671239697
},
{
setSeqNo : 1,
plygnSeqNo : 1171,
plygnLo : 126.953167170819,
plygnLa : 37.4390954459981
},
{
setSeqNo : 1,
plygnSeqNo : 1172,
plygnLo : 126.952652113582,
plygnLa : 37.4391591503412
},
{
setSeqNo : 1,
plygnSeqNo : 1173,
plygnLo : 126.952411091653,
plygnLa : 37.4391903079352
},
{
setSeqNo : 1,
plygnSeqNo : 1174,
plygnLo : 126.952086544045,
plygnLa : 37.4389812555517
},
{
setSeqNo : 1,
plygnSeqNo : 1175,
plygnLo : 126.952072241139,
plygnLa : 37.4389761757344
},
{
setSeqNo : 1,
plygnSeqNo : 1176,
plygnLo : 126.951871053652,
plygnLa : 37.4388364363063
},
{
setSeqNo : 1,
plygnSeqNo : 1177,
plygnLo : 126.951467262106,
plygnLa : 37.4385766573069
},
{
setSeqNo : 1,
plygnSeqNo : 1178,
plygnLo : 126.951158386548,
plygnLa : 37.4384441959667
},
{
setSeqNo : 1,
plygnSeqNo : 1179,
plygnLo : 126.951138782458,
plygnLa : 37.4384433402262
},
{
setSeqNo : 1,
plygnSeqNo : 1180,
plygnLo : 126.951135255469,
plygnLa : 37.438443338152
},
{
setSeqNo : 1,
plygnSeqNo : 1181,
plygnLo : 126.951067926112,
plygnLa : 37.4385365096567
},
{
setSeqNo : 1,
plygnSeqNo : 1182,
plygnLo : 126.950925305442,
plygnLa : 37.4387338251526
},
{
setSeqNo : 1,
plygnSeqNo : 1183,
plygnLo : 126.950032712291,
plygnLa : 37.4386216594663
},
{
setSeqNo : 1,
plygnSeqNo : 1184,
plygnLo : 126.949843077532,
plygnLa : 37.4383797101866
},
{
setSeqNo : 1,
plygnSeqNo : 1185,
plygnLo : 126.949577958318,
plygnLa : 37.4382942776697
},
{
setSeqNo : 1,
plygnSeqNo : 1186,
plygnLo : 126.949513344117,
plygnLa : 37.4382810223817
},
{
setSeqNo : 1,
plygnSeqNo : 1187,
plygnLo : 126.94931066759,
plygnLa : 37.4382612196889
},
{
setSeqNo : 1,
plygnSeqNo : 1188,
plygnLo : 126.949284199039,
plygnLa : 37.4382502331122
},
{
setSeqNo : 1,
plygnSeqNo : 1189,
plygnLo : 126.949277134176,
plygnLa : 37.4382561418105
},
{
setSeqNo : 1,
plygnSeqNo : 1190,
plygnLo : 126.949189330314,
plygnLa : 37.4383287419225
},
{
setSeqNo : 1,
plygnSeqNo : 1191,
plygnLo : 126.949176616121,
plygnLa : 37.4383329622861
},
{
setSeqNo : 1,
plygnSeqNo : 1192,
plygnLo : 126.949161419684,
plygnLa : 37.4383442179465
},
{
setSeqNo : 1,
plygnSeqNo : 1193,
plygnLo : 126.949053668094,
plygnLa : 37.4384252605618
},
{
setSeqNo : 1,
plygnSeqNo : 1194,
plygnLo : 126.948945201505,
plygnLa : 37.4385074297509
},
{
setSeqNo : 1,
plygnSeqNo : 1195,
plygnLo : 126.948765905131,
plygnLa : 37.4386458800218
},
{
setSeqNo : 1,
plygnSeqNo : 1196,
plygnLo : 126.948623579399,
plygnLa : 37.4386711518709
},
{
setSeqNo : 1,
plygnSeqNo : 1197,
plygnLo : 126.948363125906,
plygnLa : 37.4387127151192
},
{
setSeqNo : 1,
plygnSeqNo : 1198,
plygnLo : 126.94830453136,
plygnLa : 37.4386910017583
},
{
setSeqNo : 1,
plygnSeqNo : 1199,
plygnLo : 126.948289164151,
plygnLa : 37.4386904365449
},
{
setSeqNo : 1,
plygnSeqNo : 1200,
plygnLo : 126.9481126643,
plygnLa : 37.4386112404508
},
{
setSeqNo : 1,
plygnSeqNo : 1201,
plygnLo : 126.9480343036,
plygnLa : 37.4385760005594
},
{
setSeqNo : 1,
plygnSeqNo : 1202,
plygnLo : 126.947854450432,
plygnLa : 37.4384920186235
},
{
setSeqNo : 1,
plygnSeqNo : 1203,
plygnLo : 126.947599204847,
plygnLa : 37.4384119367423
},
{
setSeqNo : 1,
plygnSeqNo : 1204,
plygnLo : 126.947165683087,
plygnLa : 37.4382726409335
},
{
setSeqNo : 1,
plygnSeqNo : 1205,
plygnLo : 126.94702765347,
plygnLa : 37.4382345740822
},
{
setSeqNo : 1,
plygnSeqNo : 1206,
plygnLo : 126.946789349663,
plygnLa : 37.4381671675885
},
{
setSeqNo : 1,
plygnSeqNo : 1207,
plygnLo : 126.94659036815,
plygnLa : 37.4379297141486
},
{
setSeqNo : 1,
plygnSeqNo : 1208,
plygnLo : 126.946380202103,
plygnLa : 37.4377691271486
},
{
setSeqNo : 1,
plygnSeqNo : 1209,
plygnLo : 126.945676270469,
plygnLa : 37.4373053367647
},
{
setSeqNo : 1,
plygnSeqNo : 1210,
plygnLo : 126.945090637425,
plygnLa : 37.4370882582253
},
{
setSeqNo : 1,
plygnSeqNo : 1211,
plygnLo : 126.944637392783,
plygnLa : 37.4371235127065
},
{
setSeqNo : 1,
plygnSeqNo : 1212,
plygnLo : 126.944060365193,
plygnLa : 37.4371981357182
},
{
setSeqNo : 1,
plygnSeqNo : 1213,
plygnLo : 126.943522878358,
plygnLa : 37.4372660063373
},
{
setSeqNo : 1,
plygnSeqNo : 1214,
plygnLo : 126.943385158591,
plygnLa : 37.4372828339217
},
{
setSeqNo : 1,
plygnSeqNo : 1215,
plygnLo : 126.943283981071,
plygnLa : 37.437299677774
},
{
setSeqNo : 1,
plygnSeqNo : 1216,
plygnLo : 126.942624296228,
plygnLa : 37.4374052194772
},
{
setSeqNo : 1,
plygnSeqNo : 1217,
plygnLo : 126.941979616068,
plygnLa : 37.4375056921335
},
{
setSeqNo : 1,
plygnSeqNo : 1218,
plygnLo : 126.941424430374,
plygnLa : 37.4374043360716
},
{
setSeqNo : 1,
plygnSeqNo : 1219,
plygnLo : 126.941149158407,
plygnLa : 37.4369917040352
},
{
setSeqNo : 1,
plygnSeqNo : 1220,
plygnLo : 126.941137871878,
plygnLa : 37.4369756424197
},
{
setSeqNo : 1,
plygnSeqNo : 1221,
plygnLo : 126.941136825743,
plygnLa : 37.4369694526922
},
{
setSeqNo : 1,
plygnSeqNo : 1222,
plygnLo : 126.941102786957,
plygnLa : 37.4369181861538
},
{
setSeqNo : 1,
plygnSeqNo : 1223,
plygnLo : 126.940879645767,
plygnLa : 37.4366697368245
},
{
setSeqNo : 1,
plygnSeqNo : 1224,
plygnLo : 126.940708196265,
plygnLa : 37.4364790223052
},
{
setSeqNo : 1,
plygnSeqNo : 1225,
plygnLo : 126.94053039411,
plygnLa : 37.436280428481
},
{
setSeqNo : 1,
plygnSeqNo : 1226,
plygnLo : 126.940502611839,
plygnLa : 37.4361371007383
},
{
setSeqNo : 1,
plygnSeqNo : 1227,
plygnLo : 126.94050298576,
plygnLa : 37.4361227381021
},
{
setSeqNo : 1,
plygnSeqNo : 1228,
plygnLo : 126.940480649953,
plygnLa : 37.4360078475082
},
{
setSeqNo : 1,
plygnSeqNo : 1229,
plygnLo : 126.940472026311,
plygnLa : 37.4359816597254
},
{
setSeqNo : 1,
plygnSeqNo : 1230,
plygnLo : 126.940426794843,
plygnLa : 37.4358019944962
},
{
setSeqNo : 1,
plygnSeqNo : 1231,
plygnLo : 126.940352664117,
plygnLa : 37.4357690141527
},
{
setSeqNo : 1,
plygnSeqNo : 1232,
plygnLo : 126.940220306643,
plygnLa : 37.4357123530057
},
{
setSeqNo : 1,
plygnSeqNo : 1233,
plygnLo : 126.939558391355,
plygnLa : 37.4359558479148
},
{
setSeqNo : 1,
plygnSeqNo : 1234,
plygnLo : 126.939364304364,
plygnLa : 37.4360258544276
},
{
setSeqNo : 1,
plygnSeqNo : 1235,
plygnLo : 126.938625975599,
plygnLa : 37.4360285530582
},
{
setSeqNo : 1,
plygnSeqNo : 1236,
plygnLo : 126.938621908508,
plygnLa : 37.4360285518968
},
{
setSeqNo : 1,
plygnSeqNo : 1237,
plygnLo : 126.938615320635,
plygnLa : 37.4360964134654
},
{
setSeqNo : 1,
plygnSeqNo : 1238,
plygnLo : 126.938575505965,
plygnLa : 37.4364151234943
},
{
setSeqNo : 1,
plygnSeqNo : 1239,
plygnLo : 126.938574801661,
plygnLa : 37.4364204654018
},
{
setSeqNo : 1,
plygnSeqNo : 1240,
plygnLo : 126.938545816535,
plygnLa : 37.436449174814
},
{
setSeqNo : 1,
plygnSeqNo : 1241,
plygnLo : 126.938375128995,
plygnLa : 37.4366092919953
},
{
setSeqNo : 1,
plygnSeqNo : 1242,
plygnLo : 126.938326370719,
plygnLa : 37.4366526304986
},
{
setSeqNo : 1,
plygnSeqNo : 1243,
plygnLo : 126.938283228836,
plygnLa : 37.4367210208726
},
{
setSeqNo : 1,
plygnSeqNo : 1244,
plygnLo : 126.938251946278,
plygnLa : 37.4367700022038
},
{
setSeqNo : 1,
plygnSeqNo : 1245,
plygnLo : 126.938165493227,
plygnLa : 37.4369053852427
},
{
setSeqNo : 1,
plygnSeqNo : 1246,
plygnLo : 126.938145869803,
plygnLa : 37.4369419830834
},
{
setSeqNo : 1,
plygnSeqNo : 1247,
plygnLo : 126.938015191363,
plygnLa : 37.4371843391902
},
{
setSeqNo : 1,
plygnSeqNo : 1248,
plygnLo : 126.9380125428,
plygnLa : 37.4371894011758
},
{
setSeqNo : 1,
plygnSeqNo : 1249,
plygnLo : 126.937989215733,
plygnLa : 37.4372093817195
},
{
setSeqNo : 1,
plygnSeqNo : 1250,
plygnLo : 126.937752130636,
plygnLa : 37.4373818604359
},
{
setSeqNo : 1,
plygnSeqNo : 1251,
plygnLo : 126.937746659671,
plygnLa : 37.4373857954871
},
{
setSeqNo : 1,
plygnSeqNo : 1252,
plygnLo : 126.937751240767,
plygnLa : 37.4373917082788
},
{
setSeqNo : 1,
plygnSeqNo : 1253,
plygnLo : 126.93774163852,
plygnLa : 37.4374691351927
},
{
setSeqNo : 1,
plygnSeqNo : 1254,
plygnLo : 126.937742424139,
plygnLa : 37.4375820416913
},
{
setSeqNo : 1,
plygnSeqNo : 1255,
plygnLo : 126.937744465555,
plygnLa : 37.4378790963118
},
{
setSeqNo : 1,
plygnSeqNo : 1256,
plygnLo : 126.937725713774,
plygnLa : 37.4379263881738
},
{
setSeqNo : 1,
plygnSeqNo : 1257,
plygnLo : 126.937655831416,
plygnLa : 37.4380935960017
},
{
setSeqNo : 1,
plygnSeqNo : 1258,
plygnLo : 126.937579396466,
plygnLa : 37.4382855870888
},
{
setSeqNo : 1,
plygnSeqNo : 1259,
plygnLo : 126.937562942751,
plygnLa : 37.4383269696991
},
{
setSeqNo : 1,
plygnSeqNo : 1260,
plygnLo : 126.937470530677,
plygnLa : 37.4384237781664
},
{
setSeqNo : 1,
plygnSeqNo : 1261,
plygnLo : 126.93727296121,
plygnLa : 37.4386323076111
},
{
setSeqNo : 1,
plygnSeqNo : 1262,
plygnLo : 126.937265399482,
plygnLa : 37.4387928013201
},
{
setSeqNo : 1,
plygnSeqNo : 1263,
plygnLo : 126.937258052477,
plygnLa : 37.438927379615
},
{
setSeqNo : 1,
plygnSeqNo : 1264,
plygnLo : 126.937248841178,
plygnLa : 37.4391675474273
},
{
setSeqNo : 1,
plygnSeqNo : 1265,
plygnLo : 126.937247389537,
plygnLa : 37.439212875564
},
{
setSeqNo : 1,
plygnSeqNo : 1266,
plygnLo : 126.9374024429,
plygnLa : 37.439374304041
},
{
setSeqNo : 1,
plygnSeqNo : 1267,
plygnLo : 126.937639172601,
plygnLa : 37.439627273521
},
{
setSeqNo : 1,
plygnSeqNo : 1268,
plygnLo : 126.93769385978,
plygnLa : 37.4396844636947
},
{
setSeqNo : 1,
plygnSeqNo : 1269,
plygnLo : 126.937714134868,
plygnLa : 37.4397207935272
},
{
setSeqNo : 1,
plygnSeqNo : 1270,
plygnLo : 126.937758148838,
plygnLa : 37.4398658247302
},
{
setSeqNo : 1,
plygnSeqNo : 1271,
plygnLo : 126.93784372984,
plygnLa : 37.4401356156467
},
{
setSeqNo : 1,
plygnSeqNo : 1272,
plygnLo : 126.93786433297,
plygnLa : 37.4401975707591
},
{
setSeqNo : 1,
plygnSeqNo : 1273,
plygnLo : 126.937746083188,
plygnLa : 37.4403540566294
},
{
setSeqNo : 1,
plygnSeqNo : 1274,
plygnLo : 126.9375429792,
plygnLa : 37.4406200237407
},
{
setSeqNo : 1,
plygnSeqNo : 1275,
plygnLo : 126.937373121429,
plygnLa : 37.4408432096135
},
{
setSeqNo : 1,
plygnSeqNo : 1276,
plygnLo : 126.937353851681,
plygnLa : 37.4408716354121
},
{
setSeqNo : 1,
plygnSeqNo : 1277,
plygnLo : 126.937239155683,
plygnLa : 37.4409940570329
},
{
setSeqNo : 1,
plygnSeqNo : 1278,
plygnLo : 126.937194445492,
plygnLa : 37.4410418941636
},
{
setSeqNo : 1,
plygnSeqNo : 1279,
plygnLo : 126.936949150815,
plygnLa : 37.4412985466335
},
{
setSeqNo : 1,
plygnSeqNo : 1280,
plygnLo : 126.936847721491,
plygnLa : 37.4414023964127
},
{
setSeqNo : 1,
plygnSeqNo : 1281,
plygnLo : 126.936812378128,
plygnLa : 37.4414384173606
},
{
setSeqNo : 1,
plygnSeqNo : 1282,
plygnLo : 126.936772208245,
plygnLa : 37.4415428494341
},
{
setSeqNo : 1,
plygnSeqNo : 1283,
plygnLo : 126.936735402208,
plygnLa : 37.4416349032158
},
{
setSeqNo : 1,
plygnSeqNo : 1284,
plygnLo : 126.936688385496,
plygnLa : 37.4416959827948
},
{
setSeqNo : 1,
plygnSeqNo : 1285,
plygnLo : 126.936650910628,
plygnLa : 37.4417412927015
},
{
setSeqNo : 1,
plygnSeqNo : 1286,
plygnLo : 126.936647200673,
plygnLa : 37.4417457961429
},
{
setSeqNo : 1,
plygnSeqNo : 1287,
plygnLo : 126.936306995852,
plygnLa : 37.4419049699969
},
{
setSeqNo : 1,
plygnSeqNo : 1288,
plygnLo : 126.936202258474,
plygnLa : 37.4419544674168
},
{
setSeqNo : 1,
plygnSeqNo : 1289,
plygnLo : 126.936041641911,
plygnLa : 37.4420934758336
},
{
setSeqNo : 1,
plygnSeqNo : 1290,
plygnLo : 126.935985980271,
plygnLa : 37.4421415952785
},
{
setSeqNo : 1,
plygnSeqNo : 1291,
plygnLo : 126.935841178746,
plygnLa : 37.4421564349013
},
{
setSeqNo : 1,
plygnSeqNo : 1292,
plygnLo : 126.935643407242,
plygnLa : 37.4421780028219
},
{
setSeqNo : 1,
plygnSeqNo : 1293,
plygnLo : 126.935577637738,
plygnLa : 37.4422827088883
},
{
setSeqNo : 1,
plygnSeqNo : 1294,
plygnLo : 126.93544113638,
plygnLa : 37.4424971888288
},
{
setSeqNo : 1,
plygnSeqNo : 1295,
plygnLo : 126.935382295519,
plygnLa : 37.4425486767635
},
{
setSeqNo : 1,
plygnSeqNo : 1296,
plygnLo : 126.935258780231,
plygnLa : 37.4426567278503
},
{
setSeqNo : 1,
plygnSeqNo : 1297,
plygnLo : 126.935255250458,
plygnLa : 37.4426598242768
},
{
setSeqNo : 1,
plygnSeqNo : 1298,
plygnLo : 126.935126137351,
plygnLa : 37.4428985192789
},
{
setSeqNo : 1,
plygnSeqNo : 1299,
plygnLo : 126.935113585506,
plygnLa : 37.4429215957987
},
{
setSeqNo : 1,
plygnSeqNo : 1300,
plygnLo : 126.93510987367,
plygnLa : 37.4429280731155
},
{
setSeqNo : 1,
plygnSeqNo : 1301,
plygnLo : 126.935031884127,
plygnLa : 37.4430637471979
},
{
setSeqNo : 1,
plygnSeqNo : 1302,
plygnLo : 126.934898275599,
plygnLa : 37.4432095184629
},
{
setSeqNo : 1,
plygnSeqNo : 1303,
plygnLo : 126.934895615888,
plygnLa : 37.4432123362618
},
{
setSeqNo : 1,
plygnSeqNo : 1304,
plygnLo : 126.934894056964,
plygnLa : 37.4432131017672
},
{
setSeqNo : 1,
plygnSeqNo : 1305,
plygnLo : 126.934888199996,
plygnLa : 37.4432159906522
},
{
setSeqNo : 1,
plygnSeqNo : 1306,
plygnLo : 126.934741485334,
plygnLa : 37.4432083038296
},
{
setSeqNo : 1,
plygnSeqNo : 1307,
plygnLo : 126.934564214627,
plygnLa : 37.443196660866
},
{
setSeqNo : 1,
plygnSeqNo : 1308,
plygnLo : 126.934451157138,
plygnLa : 37.4432582619937
},
{
setSeqNo : 1,
plygnSeqNo : 1309,
plygnLo : 126.934051578097,
plygnLa : 37.4434725825434
},
{
setSeqNo : 1,
plygnSeqNo : 1310,
plygnLo : 126.93402754138,
plygnLa : 37.443485245198
},
{
setSeqNo : 1,
plygnSeqNo : 1311,
plygnLo : 126.933818707352,
plygnLa : 37.4436388560387
},
{
setSeqNo : 1,
plygnSeqNo : 1312,
plygnLo : 126.933468864086,
plygnLa : 37.443896289226
},
{
setSeqNo : 1,
plygnSeqNo : 1313,
plygnLo : 126.933407900918,
plygnLa : 37.4439413050379
},
{
setSeqNo : 1,
plygnSeqNo : 1314,
plygnLo : 126.933224861619,
plygnLa : 37.4440746565547
},
{
setSeqNo : 1,
plygnSeqNo : 1315,
plygnLo : 126.933218856424,
plygnLa : 37.4440791582314
},
{
setSeqNo : 1,
plygnSeqNo : 1316,
plygnLo : 126.933002088578,
plygnLa : 37.4442062993132
},
{
setSeqNo : 1,
plygnSeqNo : 1317,
plygnLo : 126.9326519364,
plygnLa : 37.4444113544064
},
{
setSeqNo : 1,
plygnSeqNo : 1318,
plygnLo : 126.932215931315,
plygnLa : 37.4446662015036
},
{
setSeqNo : 1,
plygnSeqNo : 1319,
plygnLo : 126.932136254151,
plygnLa : 37.4447137383006
},
{
setSeqNo : 1,
plygnSeqNo : 1320,
plygnLo : 126.93183924411,
plygnLa : 37.4449179822849
},
{
setSeqNo : 1,
plygnSeqNo : 1321,
plygnLo : 126.931749846219,
plygnLa : 37.4449762082369
},
{
setSeqNo : 1,
plygnSeqNo : 1322,
plygnLo : 126.931489843218,
plygnLa : 37.4450740478717
},
{
setSeqNo : 1,
plygnSeqNo : 1323,
plygnLo : 126.9313259258,
plygnLa : 37.4451356070712
},
{
setSeqNo : 1,
plygnSeqNo : 1324,
plygnLo : 126.930862764402,
plygnLa : 37.4453349652551
},
{
setSeqNo : 1,
plygnSeqNo : 1325,
plygnLo : 126.93055999945,
plygnLa : 37.4454659892655
},
{
setSeqNo : 1,
plygnSeqNo : 1326,
plygnLo : 126.930554345658,
plygnLa : 37.4454685185651
},
{
setSeqNo : 1,
plygnSeqNo : 1327,
plygnLo : 126.930517723952,
plygnLa : 37.4455484607865
},
{
setSeqNo : 1,
plygnSeqNo : 1328,
plygnLo : 126.930394212684,
plygnLa : 37.4458184099047
},
{
setSeqNo : 1,
plygnSeqNo : 1329,
plygnLo : 126.930326614282,
plygnLa : 37.4459687284951
},
{
setSeqNo : 1,
plygnSeqNo : 1330,
plygnLo : 126.93028531715,
plygnLa : 37.4461418597485
},
{
setSeqNo : 1,
plygnSeqNo : 1331,
plygnLo : 126.930281781097,
plygnLa : 37.4461525601446
},
{
setSeqNo : 1,
plygnSeqNo : 1332,
plygnLo : 126.930240560544,
plygnLa : 37.4462294009196
},
{
setSeqNo : 1,
plygnSeqNo : 1333,
plygnLo : 126.930163439665,
plygnLa : 37.4463780208518
},
{
setSeqNo : 1,
plygnSeqNo : 1334,
plygnLo : 126.930210480314,
plygnLa : 37.4464780066056
},
{
setSeqNo : 1,
plygnSeqNo : 1335,
plygnLo : 126.930277979763,
plygnLa : 37.4466213606831
},
{
setSeqNo : 1,
plygnSeqNo : 1336,
plygnLo : 126.930265936266,
plygnLa : 37.4466537371746
},
{
setSeqNo : 1,
plygnSeqNo : 1337,
plygnLo : 126.930278755772,
plygnLa : 37.4467328613444
},
{
setSeqNo : 1,
plygnSeqNo : 1338,
plygnLo : 126.930289619773,
plygnLa : 37.4468238158285
},
{
setSeqNo : 1,
plygnSeqNo : 1339,
plygnLo : 126.930324672101,
plygnLa : 37.4470899138487
},
{
setSeqNo : 1,
plygnSeqNo : 1340,
plygnLo : 126.930364820178,
plygnLa : 37.4473934596967
},
{
setSeqNo : 1,
plygnSeqNo : 1341,
plygnLo : 126.930365938443,
plygnLa : 37.4475232681777
},
{
setSeqNo : 1,
plygnSeqNo : 1342,
plygnLo : 126.93036807567,
plygnLa : 37.4476902347312
},
{
setSeqNo : 1,
plygnSeqNo : 1343,
plygnLo : 126.930368248596,
plygnLa : 37.4476975508864
},
{
setSeqNo : 1,
plygnSeqNo : 1344,
plygnLo : 126.930342915118,
plygnLa : 37.4477775006631
},
{
setSeqNo : 1,
plygnSeqNo : 1345,
plygnLo : 126.930303957221,
plygnLa : 37.447901085787
},
{
setSeqNo : 1,
plygnSeqNo : 1346,
plygnLo : 126.930255927776,
plygnLa : 37.4480792937446
},
{
setSeqNo : 1,
plygnSeqNo : 1347,
plygnLo : 126.930246004793,
plygnLa : 37.448116454084
},
{
setSeqNo : 1,
plygnSeqNo : 1348,
plygnLo : 126.930174255968,
plygnLa : 37.4483655943423
},
{
setSeqNo : 1,
plygnSeqNo : 1349,
plygnLo : 126.930171423186,
plygnLa : 37.4483723502579
},
{
setSeqNo : 1,
plygnSeqNo : 1350,
plygnLo : 126.930166293522,
plygnLa : 37.4483841674656
},
{
setSeqNo : 1,
plygnSeqNo : 1351,
plygnLo : 126.930055795996,
plygnLa : 37.4485327671724
},
{
setSeqNo : 1,
plygnSeqNo : 1352,
plygnLo : 126.930047478434,
plygnLa : 37.4485440243541
},
{
setSeqNo : 1,
plygnSeqNo : 1353,
plygnLo : 126.929909739408,
plygnLa : 37.4487354046503
},
{
setSeqNo : 1,
plygnSeqNo : 1354,
plygnLo : 126.929786179071,
plygnLa : 37.4488811842883
},
{
setSeqNo : 1,
plygnSeqNo : 1355,
plygnLo : 126.929607092146,
plygnLa : 37.4490930920963
},
{
setSeqNo : 1,
plygnSeqNo : 1356,
plygnLo : 126.929436679871,
plygnLa : 37.4492945875867
},
{
setSeqNo : 1,
plygnSeqNo : 1357,
plygnLo : 126.929286416959,
plygnLa : 37.4494721661607
},
{
setSeqNo : 1,
plygnSeqNo : 1358,
plygnLo : 126.928991896496,
plygnLa : 37.4496338778583
},
{
setSeqNo : 1,
plygnSeqNo : 1359,
plygnLo : 126.928955420782,
plygnLa : 37.4497357876444
},
{
setSeqNo : 1,
plygnSeqNo : 1360,
plygnLo : 126.928910800335,
plygnLa : 37.4498655593687
},
{
setSeqNo : 1,
plygnSeqNo : 1361,
plygnLo : 126.928717129466,
plygnLa : 37.4499943999717
},
{
setSeqNo : 1,
plygnSeqNo : 1362,
plygnLo : 126.928416212003,
plygnLa : 37.4502005989136
},
{
setSeqNo : 1,
plygnSeqNo : 1363,
plygnLo : 126.928398718176,
plygnLa : 37.4502126973324
},
{
setSeqNo : 1,
plygnSeqNo : 1364,
plygnLo : 126.928357005425,
plygnLa : 37.449898725811
},
{
setSeqNo : 1,
plygnSeqNo : 1365,
plygnLo : 126.928307902283,
plygnLa : 37.4495487074688
},
{
setSeqNo : 1,
plygnSeqNo : 1366,
plygnLo : 126.928279657644,
plygnLa : 37.4493527225267
},
{
setSeqNo : 1,
plygnSeqNo : 1367,
plygnLo : 126.928256361188,
plygnLa : 37.4493363799087
},
{
setSeqNo : 1,
plygnSeqNo : 1368,
plygnLo : 126.927992023834,
plygnLa : 37.4491523570333
},
{
setSeqNo : 1,
plygnSeqNo : 1369,
plygnLo : 126.927770393114,
plygnLa : 37.4489936969731
},
{
setSeqNo : 1,
plygnSeqNo : 1370,
plygnLo : 126.927744799617,
plygnLa : 37.4489779125354
},
{
setSeqNo : 1,
plygnSeqNo : 1371,
plygnLo : 126.927256267124,
plygnLa : 37.4487447506535
},
{
setSeqNo : 1,
plygnSeqNo : 1372,
plygnLo : 126.927230320337,
plygnLa : 37.4487320672276
},
{
setSeqNo : 1,
plygnSeqNo : 1373,
plygnLo : 126.926782895855,
plygnLa : 37.448515822159
},
{
setSeqNo : 1,
plygnSeqNo : 1374,
plygnLo : 126.926517794942,
plygnLa : 37.4483906405242
},
{
setSeqNo : 1,
plygnSeqNo : 1375,
plygnLo : 126.926433686537,
plygnLa : 37.4482717695215
},
{
setSeqNo : 1,
plygnSeqNo : 1376,
plygnLo : 126.92635434315,
plygnLa : 37.448157679267
},
{
setSeqNo : 1,
plygnSeqNo : 1377,
plygnLo : 126.926112580997,
plygnLa : 37.4478306308085
},
{
setSeqNo : 1,
plygnSeqNo : 1378,
plygnLo : 126.926017533612,
plygnLa : 37.447701618868
},
{
setSeqNo : 1,
plygnSeqNo : 1379,
plygnLo : 126.92577954453,
plygnLa : 37.4474888818743
},
{
setSeqNo : 1,
plygnSeqNo : 1380,
plygnLo : 126.925463055675,
plygnLa : 37.4472057096948
},
{
setSeqNo : 1,
plygnSeqNo : 1381,
plygnLo : 126.924982134515,
plygnLa : 37.446781637664
},
{
setSeqNo : 1,
plygnSeqNo : 1382,
plygnLo : 126.92459848299,
plygnLa : 37.446560641463
},
{
setSeqNo : 1,
plygnSeqNo : 1383,
plygnLo : 126.924257901276,
plygnLa : 37.446360793028
},
{
setSeqNo : 1,
plygnSeqNo : 1384,
plygnLo : 126.923996024638,
plygnLa : 37.4462102623545
},
{
setSeqNo : 1,
plygnSeqNo : 1385,
plygnLo : 126.923992922112,
plygnLa : 37.4461407194965
},
{
setSeqNo : 1,
plygnSeqNo : 1386,
plygnLo : 126.923469468831,
plygnLa : 37.4458813365394
},
{
setSeqNo : 1,
plygnSeqNo : 1387,
plygnLo : 126.923253274244,
plygnLa : 37.4457727833052
},
{
setSeqNo : 1,
plygnSeqNo : 1388,
plygnLo : 126.923071551654,
plygnLa : 37.4454657630606
},
{
setSeqNo : 1,
plygnSeqNo : 1389,
plygnLo : 126.922897229473,
plygnLa : 37.4451733861998
},
{
setSeqNo : 1,
plygnSeqNo : 1390,
plygnLo : 126.922946619979,
plygnLa : 37.4448729883436
},
{
setSeqNo : 1,
plygnSeqNo : 1391,
plygnLo : 126.922903401366,
plygnLa : 37.4446730443089
},
{
setSeqNo : 1,
plygnSeqNo : 1392,
plygnLo : 126.92282042838,
plygnLa : 37.4443111795445
},
{
setSeqNo : 1,
plygnSeqNo : 1393,
plygnLo : 126.922762808574,
plygnLa : 37.4440411185652
},
{
setSeqNo : 1,
plygnSeqNo : 1394,
plygnLo : 126.922649373612,
plygnLa : 37.4439436266938
},
{
setSeqNo : 1,
plygnSeqNo : 1395,
plygnLo : 126.922358461624,
plygnLa : 37.4437040971571
},
{
setSeqNo : 1,
plygnSeqNo : 1396,
plygnLo : 126.922247369926,
plygnLa : 37.4435604302871
},
{
setSeqNo : 1,
plygnSeqNo : 1397,
plygnLo : 126.922026062158,
plygnLa : 37.443275319809
},
{
setSeqNo : 1,
plygnSeqNo : 1398,
plygnLo : 126.922007046102,
plygnLa : 37.4432508249799
},
{
setSeqNo : 1,
plygnSeqNo : 1399,
plygnLo : 126.921887494547,
plygnLa : 37.4430970068649
},
{
setSeqNo : 1,
plygnSeqNo : 1400,
plygnLo : 126.921657378244,
plygnLa : 37.4428059973673
},
{
setSeqNo : 1,
plygnSeqNo : 1401,
plygnLo : 126.921547262452,
plygnLa : 37.4427467994547
},
{
setSeqNo : 1,
plygnSeqNo : 1402,
plygnLo : 126.921169452392,
plygnLa : 37.4425460694345
},
{
setSeqNo : 1,
plygnSeqNo : 1403,
plygnLo : 126.921107098218,
plygnLa : 37.4424072173906
},
{
setSeqNo : 1,
plygnSeqNo : 1404,
plygnLo : 126.92108348955,
plygnLa : 37.4423576367998
},
{
setSeqNo : 1,
plygnSeqNo : 1405,
plygnLo : 126.920943800072,
plygnLa : 37.4420483884851
},
{
setSeqNo : 1,
plygnSeqNo : 1406,
plygnLo : 126.920793890352,
plygnLa : 37.441724201788
},
{
setSeqNo : 1,
plygnSeqNo : 1407,
plygnLo : 126.920698950837,
plygnLa : 37.4415200049172
},
{
setSeqNo : 1,
plygnSeqNo : 1408,
plygnLo : 126.920667962881,
plygnLa : 37.4414276305192
},
{
setSeqNo : 1,
plygnSeqNo : 1409,
plygnLo : 126.920562678208,
plygnLa : 37.4411578144585
},
{
setSeqNo : 1,
plygnSeqNo : 1410,
plygnLo : 126.920523590825,
plygnLa : 37.4410544595047
},
{
setSeqNo : 1,
plygnSeqNo : 1411,
plygnLo : 126.920497179189,
plygnLa : 37.4409848929996
},
{
setSeqNo : 1,
plygnSeqNo : 1412,
plygnLo : 126.920425242964,
plygnLa : 37.4407342473897
},
{
setSeqNo : 1,
plygnSeqNo : 1413,
plygnLo : 126.920382482794,
plygnLa : 37.4405979501753
},
{
setSeqNo : 1,
plygnSeqNo : 1414,
plygnLo : 126.920278976619,
plygnLa : 37.4404714496883
},
{
setSeqNo : 1,
plygnSeqNo : 1415,
plygnLo : 126.920274744844,
plygnLa : 37.4404663813178
},
{
setSeqNo : 1,
plygnSeqNo : 1416,
plygnLo : 126.91997708882,
plygnLa : 37.4402848501616
},
{
setSeqNo : 1,
plygnSeqNo : 1417,
plygnLo : 126.919427287257,
plygnLa : 37.4399491221347
},
{
setSeqNo : 1,
plygnSeqNo : 1418,
plygnLo : 126.919263893937,
plygnLa : 37.439852430711
},
{
setSeqNo : 1,
plygnSeqNo : 1419,
plygnLo : 126.91866309767,
plygnLa : 37.439982657238
},
{
setSeqNo : 1,
plygnSeqNo : 1420,
plygnLo : 126.918163315708,
plygnLa : 37.4400870473423
},
{
setSeqNo : 1,
plygnSeqNo : 1421,
plygnLo : 126.91785726897,
plygnLa : 37.4401496222335
},
{
setSeqNo : 1,
plygnSeqNo : 1422,
plygnLo : 126.917359225422,
plygnLa : 37.4401222398338
},
{
setSeqNo : 1,
plygnSeqNo : 1423,
plygnLo : 126.91647224191,
plygnLa : 37.4400717682538
},
{
setSeqNo : 1,
plygnSeqNo : 1424,
plygnLo : 126.916124794533,
plygnLa : 37.4400532189418
},
{
setSeqNo : 1,
plygnSeqNo : 1425,
plygnLo : 126.916109267086,
plygnLa : 37.4400450368962
},
{
setSeqNo : 1,
plygnSeqNo : 1426,
plygnLo : 126.915389513857,
plygnLa : 37.4396680640311
},
{
setSeqNo : 1,
plygnSeqNo : 1427,
plygnLo : 126.915346104337,
plygnLa : 37.4396449477251
},
{
setSeqNo : 1,
plygnSeqNo : 1428,
plygnLo : 126.914972201445,
plygnLa : 37.4394520766519
},
{
setSeqNo : 1,
plygnSeqNo : 1429,
plygnLo : 126.914873026784,
plygnLa : 37.4394007635451
},
{
setSeqNo : 1,
plygnSeqNo : 1430,
plygnLo : 126.914829626641,
plygnLa : 37.4393790527256
},
{
setSeqNo : 1,
plygnSeqNo : 1431,
plygnLo : 126.91411550453,
plygnLa : 37.4393230523083
},
{
setSeqNo : 1,
plygnSeqNo : 1432,
plygnLo : 126.9138916521,
plygnLa : 37.4393071187219
},
{
setSeqNo : 1,
plygnSeqNo : 1433,
plygnLo : 126.913878345152,
plygnLa : 37.4393030272968
},
{
setSeqNo : 1,
plygnSeqNo : 1434,
plygnLo : 126.913535836966,
plygnLa : 37.4391976066043
},
{
setSeqNo : 1,
plygnSeqNo : 1435,
plygnLo : 126.913190085118,
plygnLa : 37.4390954278973
},
{
setSeqNo : 1,
plygnSeqNo : 1436,
plygnLo : 126.912808801272,
plygnLa : 37.4387203772817
},
{
setSeqNo : 1,
plygnSeqNo : 1437,
plygnLo : 126.912308789996,
plygnLa : 37.438579496796
},
{
setSeqNo : 1,
plygnSeqNo : 1438,
plygnLo : 126.912246238062,
plygnLa : 37.4384730230219
},
{
setSeqNo : 1,
plygnSeqNo : 1439,
plygnLo : 126.91205891555,
plygnLa : 37.4381763952615
},
{
setSeqNo : 1,
plygnSeqNo : 1440,
plygnLo : 126.91186524779,
plygnLa : 37.4378682127566
},
{
setSeqNo : 1,
plygnSeqNo : 1441,
plygnLo : 126.911801979585,
plygnLa : 37.4377659630679
},
{
setSeqNo : 1,
plygnSeqNo : 1442,
plygnLo : 126.91178928068,
plygnLa : 37.4377544017637
},
{
setSeqNo : 1,
plygnSeqNo : 1443,
plygnLo : 126.911756454317,
plygnLa : 37.437745646725
},
{
setSeqNo : 1,
plygnSeqNo : 1444,
plygnLo : 126.911431923016,
plygnLa : 37.4376232052854
},
{
setSeqNo : 1,
plygnSeqNo : 1445,
plygnLo : 126.911277067428,
plygnLa : 37.437337296383
},
{
setSeqNo : 1,
plygnSeqNo : 1446,
plygnLo : 126.911203084247,
plygnLa : 37.4372012512751
},
{
setSeqNo : 1,
plygnSeqNo : 1447,
plygnLo : 126.911200276067,
plygnLa : 37.4371874445065
},
{
setSeqNo : 1,
plygnSeqNo : 1448,
plygnLo : 126.911216681737,
plygnLa : 37.437046396016
},
{
setSeqNo : 1,
plygnSeqNo : 1449,
plygnLo : 126.911284551163,
plygnLa : 37.4365432879581
},
{
setSeqNo : 1,
plygnSeqNo : 1450,
plygnLo : 126.911333551299,
plygnLa : 37.4361713805195
},
{
setSeqNo : 1,
plygnSeqNo : 1451,
plygnLo : 126.911141527873,
plygnLa : 37.4359761119975
},
{
setSeqNo : 1,
plygnSeqNo : 1452,
plygnLo : 126.910851818183,
plygnLa : 37.4356760244105
},
{
setSeqNo : 1,
plygnSeqNo : 1453,
plygnLo : 126.910678306023,
plygnLa : 37.4354982221967
},
{
setSeqNo : 1,
plygnSeqNo : 1454,
plygnLo : 126.910653866009,
plygnLa : 37.4354148589596
},
{
setSeqNo : 1,
plygnSeqNo : 1455,
plygnLo : 126.910611327507,
plygnLa : 37.4352641877263
},
{
setSeqNo : 1,
plygnSeqNo : 1456,
plygnLo : 126.910411043851,
plygnLa : 37.4350368075317
},
{
setSeqNo : 1,
plygnSeqNo : 1457,
plygnLo : 126.910223091543,
plygnLa : 37.434824368402
},
{
setSeqNo : 1,
plygnSeqNo : 1458,
plygnLo : 126.910140909358,
plygnLa : 37.4346142525314
},
{
setSeqNo : 1,
plygnSeqNo : 1459,
plygnLo : 126.910028623466,
plygnLa : 37.4343241575263
},
{
setSeqNo : 1,
plygnSeqNo : 1460,
plygnLo : 126.909970405758,
plygnLa : 37.4342818724083
},
{
setSeqNo : 1,
plygnSeqNo : 1461,
plygnLo : 126.909904271268,
plygnLa : 37.4342274824208
},
{
setSeqNo : 1,
plygnSeqNo : 1462,
plygnLo : 126.909678676937,
plygnLa : 37.4340597730489
},
{
setSeqNo : 1,
plygnSeqNo : 1463,
plygnLo : 126.909405980095,
plygnLa : 37.4338647182127
},
{
setSeqNo : 1,
plygnSeqNo : 1464,
plygnLo : 126.909395917315,
plygnLa : 37.4338604857005
},
{
setSeqNo : 1,
plygnSeqNo : 1465,
plygnLo : 126.909174728613,
plygnLa : 37.4338420126472
},
{
setSeqNo : 1,
plygnSeqNo : 1466,
plygnLo : 126.909140657643,
plygnLa : 37.4338372023826
},
{
setSeqNo : 1,
plygnSeqNo : 1467,
plygnLo : 126.908593722028,
plygnLa : 37.4336917650651
},
{
setSeqNo : 1,
plygnSeqNo : 1468,
plygnLo : 126.908560365255,
plygnLa : 37.4336841436446
},
{
setSeqNo : 1,
plygnSeqNo : 1469,
plygnLo : 126.90854960148,
plygnLa : 37.4336815932095
},
{
setSeqNo : 1,
plygnSeqNo : 1470,
plygnLo : 126.908509518768,
plygnLa : 37.4336863461804
},
{
setSeqNo : 1,
plygnSeqNo : 1471,
plygnLo : 126.908398994136,
plygnLa : 37.4336935848136
},
{
setSeqNo : 1,
plygnSeqNo : 1472,
plygnLo : 126.907933758673,
plygnLa : 37.4337247534033
},
{
setSeqNo : 1,
plygnSeqNo : 1473,
plygnLo : 126.907526958926,
plygnLa : 37.4336202553085
},
{
setSeqNo : 1,
plygnSeqNo : 1474,
plygnLo : 126.907469956149,
plygnLa : 37.4336035954893
},
{
setSeqNo : 1,
plygnSeqNo : 1475,
plygnLo : 126.907457069958,
plygnLa : 37.4335976740053
},
{
setSeqNo : 1,
plygnSeqNo : 1476,
plygnLo : 126.907253972766,
plygnLa : 37.4335178276071
},
{
setSeqNo : 1,
plygnSeqNo : 1477,
plygnLo : 126.90708939032,
plygnLa : 37.4335466909499
},
{
setSeqNo : 1,
plygnSeqNo : 1478,
plygnLo : 126.907068981859,
plygnLa : 37.4336300175708
},
{
setSeqNo : 1,
plygnSeqNo : 1479,
plygnLo : 126.906934906804,
plygnLa : 37.4336949551537
},
{
setSeqNo : 1,
plygnSeqNo : 1480,
plygnLo : 126.906927659484,
plygnLa : 37.4336986157918
},
{
setSeqNo : 1,
plygnSeqNo : 1481,
plygnLo : 126.906897834087,
plygnLa : 37.4336943669797
},
{
setSeqNo : 1,
plygnSeqNo : 1482,
plygnLo : 126.906748320778,
plygnLa : 37.4336731269195
},
{
setSeqNo : 1,
plygnSeqNo : 1483,
plygnLo : 126.906505658157,
plygnLa : 37.4337421913782
},
{
setSeqNo : 1,
plygnSeqNo : 1484,
plygnLo : 126.906498227346,
plygnLa : 37.4337571170188
},
{
setSeqNo : 1,
plygnSeqNo : 1485,
plygnLo : 126.906470258529,
plygnLa : 37.4338134075596
},
{
setSeqNo : 1,
plygnSeqNo : 1486,
plygnLo : 126.906464099979,
plygnLa : 37.4338055183076
},
{
setSeqNo : 1,
plygnSeqNo : 1487,
plygnLo : 126.906402224616,
plygnLa : 37.4337269098409
},
{
setSeqNo : 1,
plygnSeqNo : 1488,
plygnLo : 126.906379844724,
plygnLa : 37.4336984548746
},
{
setSeqNo : 1,
plygnSeqNo : 1489,
plygnLo : 126.906368010319,
plygnLa : 37.4337021034443
},
{
setSeqNo : 1,
plygnSeqNo : 1490,
plygnLo : 126.906232896449,
plygnLa : 37.4338810704335
},
{
setSeqNo : 1,
plygnSeqNo : 1491,
plygnLo : 126.906205861929,
plygnLa : 37.4339052589112
},
{
setSeqNo : 1,
plygnSeqNo : 1492,
plygnLo : 126.906137459983,
plygnLa : 37.4339663107882
},
{
setSeqNo : 1,
plygnSeqNo : 1493,
plygnLo : 126.906105639993,
plygnLa : 37.4339947201484
},
{
setSeqNo : 1,
plygnSeqNo : 1494,
plygnLo : 126.905844000162,
plygnLa : 37.4339962033207
},
{
setSeqNo : 1,
plygnSeqNo : 1495,
plygnLo : 126.905825469466,
plygnLa : 37.4339961877428
},
{
setSeqNo : 1,
plygnSeqNo : 1496,
plygnLo : 126.9053906272,
plygnLa : 37.4339983670519
},
{
setSeqNo : 1,
plygnSeqNo : 1497,
plygnLo : 126.905224852584,
plygnLa : 37.4339971060914
},
{
setSeqNo : 1,
plygnSeqNo : 1498,
plygnLo : 126.904818443786,
plygnLa : 37.4339945212387
},
{
setSeqNo : 1,
plygnSeqNo : 1499,
plygnLo : 126.904445011435,
plygnLa : 37.4340319396259
},
{
setSeqNo : 1,
plygnSeqNo : 1500,
plygnLo : 126.904254984888,
plygnLa : 37.4340759875031
},
{
setSeqNo : 1,
plygnSeqNo : 1501,
plygnLo : 126.903750201418,
plygnLa : 37.4341054224146
},
{
setSeqNo : 1,
plygnSeqNo : 1502,
plygnLo : 126.90365412816,
plygnLa : 37.4341298407832
},
{
setSeqNo : 1,
plygnSeqNo : 1503,
plygnLo : 126.903525910724,
plygnLa : 37.434161828661
},
{
setSeqNo : 1,
plygnSeqNo : 1504,
plygnLo : 126.903472251658,
plygnLa : 37.4341629095858
},
{
setSeqNo : 1,
plygnSeqNo : 1505,
plygnLo : 126.903438549945,
plygnLa : 37.434142896729
},
{
setSeqNo : 1,
plygnSeqNo : 1506,
plygnLo : 126.90338598186,
plygnLa : 37.4341118769847
},
{
setSeqNo : 1,
plygnSeqNo : 1507,
plygnLo : 126.903210340429,
plygnLa : 37.4340948379407
},
{
setSeqNo : 1,
plygnSeqNo : 1508,
plygnLo : 126.902987571814,
plygnLa : 37.4340676221751
},
{
setSeqNo : 1,
plygnSeqNo : 1509,
plygnLo : 126.902988796516,
plygnLa : 37.4340814172912
},
{
setSeqNo : 1,
plygnSeqNo : 1510,
plygnLo : 126.902972296756,
plygnLa : 37.4341444745341
},
{
setSeqNo : 1,
plygnSeqNo : 1511,
plygnLo : 126.902942931597,
plygnLa : 37.434186688768
},
{
setSeqNo : 1,
plygnSeqNo : 1512,
plygnLo : 126.902929646647,
plygnLa : 37.4342184917833
},
{
setSeqNo : 1,
plygnSeqNo : 1513,
plygnLo : 126.902926091688,
plygnLa : 37.4342322847619
},
{
setSeqNo : 1,
plygnSeqNo : 1514,
plygnLo : 126.902874267707,
plygnLa : 37.4344448238288
},
{
setSeqNo : 1,
plygnSeqNo : 1515,
plygnLo : 126.902862004151,
plygnLa : 37.4345073165437
},
{
setSeqNo : 1,
plygnSeqNo : 1516,
plygnLo : 126.902822498741,
plygnLa : 37.4346142782406
},
{
setSeqNo : 1,
plygnSeqNo : 1517,
plygnLo : 126.902798504691,
plygnLa : 37.4347311109416
},
{
setSeqNo : 1,
plygnSeqNo : 1518,
plygnLo : 126.902789441118,
plygnLa : 37.4347755941891
},
{
setSeqNo : 1,
plygnSeqNo : 1519,
plygnLo : 126.90278381903,
plygnLa : 37.4348915949073
},
{
setSeqNo : 1,
plygnSeqNo : 1520,
plygnLo : 126.902785333985,
plygnLa : 37.4349439629693
},
{
setSeqNo : 1,
plygnSeqNo : 1521,
plygnLo : 126.902791098469,
plygnLa : 37.4351312159635
},
{
setSeqNo : 1,
plygnSeqNo : 1522,
plygnLo : 126.902801088449,
plygnLa : 37.435456992439
},
{
setSeqNo : 1,
plygnSeqNo : 1523,
plygnLo : 126.902803669609,
plygnLa : 37.435642260901
},
{
setSeqNo : 1,
plygnSeqNo : 1524,
plygnLo : 126.902759875386,
plygnLa : 37.4356419438984
},
{
setSeqNo : 1,
plygnSeqNo : 1525,
plygnLo : 126.902748684242,
plygnLa : 37.4358342457349
},
{
setSeqNo : 1,
plygnSeqNo : 1526,
plygnLo : 126.902750237614,
plygnLa : 37.4358567733695
},
{
setSeqNo : 1,
plygnSeqNo : 1527,
plygnLo : 126.902750592851,
plygnLa : 37.4358615576068
},
{
setSeqNo : 1,
plygnSeqNo : 1528,
plygnLo : 126.902706254273,
plygnLa : 37.4358784145748
},
{
setSeqNo : 1,
plygnSeqNo : 1529,
plygnLo : 126.902603752404,
plygnLa : 37.435951536156
},
{
setSeqNo : 1,
plygnSeqNo : 1530,
plygnLo : 126.902588733386,
plygnLa : 37.4359622261054
},
{
setSeqNo : 1,
plygnSeqNo : 1531,
plygnLo : 126.90248415412,
plygnLa : 37.4360085954561
},
{
setSeqNo : 1,
plygnSeqNo : 1532,
plygnLo : 126.902463828817,
plygnLa : 37.436024066314
},
{
setSeqNo : 1,
plygnSeqNo : 1533,
plygnLo : 126.902427600428,
plygnLa : 37.4360519044319
},
{
setSeqNo : 1,
plygnSeqNo : 1534,
plygnLo : 126.902211681816,
plygnLa : 37.4361829363169
},
{
setSeqNo : 1,
plygnSeqNo : 1535,
plygnLo : 126.902205658529,
plygnLa : 37.4362006630011
},
{
setSeqNo : 1,
plygnSeqNo : 1536,
plygnLo : 126.902023346315,
plygnLa : 37.4362841424068
},
{
setSeqNo : 1,
plygnSeqNo : 1537,
plygnLo : 126.901879494056,
plygnLa : 37.4363870697048
},
{
setSeqNo : 1,
plygnSeqNo : 1538,
plygnLo : 126.901589032309,
plygnLa : 37.4365506985574
},
{
setSeqNo : 1,
plygnSeqNo : 1539,
plygnLo : 126.901388070439,
plygnLa : 37.4367143959886
},
{
setSeqNo : 1,
plygnSeqNo : 1540,
plygnLo : 126.901067531926,
plygnLa : 37.4369258601202
},
{
setSeqNo : 1,
plygnSeqNo : 1541,
plygnLo : 126.900849228504,
plygnLa : 37.4369842401873
},
{
setSeqNo : 1,
plygnSeqNo : 1542,
plygnLo : 126.900547226151,
plygnLa : 37.4373229878752
},
{
setSeqNo : 1,
plygnSeqNo : 1543,
plygnLo : 126.900521700953,
plygnLa : 37.4373899831328
},
{
setSeqNo : 1,
plygnSeqNo : 1544,
plygnLo : 126.900508248697,
plygnLa : 37.4374198110719
},
{
setSeqNo : 1,
plygnSeqNo : 1545,
plygnLo : 126.900438617136,
plygnLa : 37.4375996749617
},
{
setSeqNo : 1,
plygnSeqNo : 1546,
plygnLo : 126.900337104292,
plygnLa : 37.437733053463
},
{
setSeqNo : 1,
plygnSeqNo : 1547,
plygnLo : 126.900262511227,
plygnLa : 37.4377781491652
},
{
setSeqNo : 1,
plygnSeqNo : 1548,
plygnLo : 126.900274711671,
plygnLa : 37.4377811422611
},
{
setSeqNo : 1,
plygnSeqNo : 1549,
plygnLo : 126.90021092117,
plygnLa : 37.437825857574
},
{
setSeqNo : 1,
plygnSeqNo : 1550,
plygnLo : 126.90016127834,
plygnLa : 37.4378466471773
},
{
setSeqNo : 1,
plygnSeqNo : 1551,
plygnLo : 126.89993121161,
plygnLa : 37.4379855477151
},
{
setSeqNo : 1,
plygnSeqNo : 1552,
plygnLo : 126.899883799188,
plygnLa : 37.4380519552753
},
{
setSeqNo : 1,
plygnSeqNo : 1553,
plygnLo : 126.89981576988,
plygnLa : 37.4380989209623
},
{
setSeqNo : 1,
plygnSeqNo : 1554,
plygnLo : 126.899703506103,
plygnLa : 37.4382094764193
},
{
setSeqNo : 1,
plygnSeqNo : 1555,
plygnLo : 126.8996495664,
plygnLa : 37.4382803845034
},
{
setSeqNo : 1,
plygnSeqNo : 1556,
plygnLo : 126.89959055225,
plygnLa : 37.4383121484862
},
{
setSeqNo : 1,
plygnSeqNo : 1557,
plygnLo : 126.899511932859,
plygnLa : 37.4383512211351
},
{
setSeqNo : 1,
plygnSeqNo : 1558,
plygnLo : 126.89949124492,
plygnLa : 37.4383675374075
},
{
setSeqNo : 1,
plygnSeqNo : 1559,
plygnLo : 126.899388386187,
plygnLa : 37.4384490980095
},
{
setSeqNo : 1,
plygnSeqNo : 1560,
plygnLo : 126.899327043947,
plygnLa : 37.4385045102579
},
{
setSeqNo : 1,
plygnSeqNo : 1561,
plygnLo : 126.899199767568,
plygnLa : 37.4386195678133
},
{
setSeqNo : 1,
plygnSeqNo : 1562,
plygnLo : 126.899185095284,
plygnLa : 37.4386313769855
},
{
setSeqNo : 1,
plygnSeqNo : 1563,
plygnLo : 126.899144614714,
plygnLa : 37.4386682297474
},
{
setSeqNo : 1,
plygnSeqNo : 1564,
plygnLo : 126.899068678706,
plygnLa : 37.4386782998161
},
{
setSeqNo : 1,
plygnSeqNo : 1565,
plygnLo : 126.899033711448,
plygnLa : 37.4386830541097
},
{
setSeqNo : 1,
plygnSeqNo : 1566,
plygnLo : 126.8990185346,
plygnLa : 37.438684445838
},
{
setSeqNo : 1,
plygnSeqNo : 1567,
plygnLo : 126.898999288226,
plygnLa : 37.4386861238544
},
{
setSeqNo : 1,
plygnSeqNo : 1568,
plygnLo : 126.898991864124,
plygnLa : 37.4386866758631
},
{
setSeqNo : 1,
plygnSeqNo : 1569,
plygnLo : 126.898977910614,
plygnLa : 37.4387018627237
},
{
setSeqNo : 1,
plygnSeqNo : 1570,
plygnLo : 126.898881508886,
plygnLa : 37.4389535037937
},
{
setSeqNo : 1,
plygnSeqNo : 1571,
plygnLo : 126.898872477859,
plygnLa : 37.4389720836834
},
{
setSeqNo : 1,
plygnSeqNo : 1572,
plygnLo : 126.898755708396,
plygnLa : 37.4392766300311
},
{
setSeqNo : 1,
plygnSeqNo : 1573,
plygnLo : 126.898805214133,
plygnLa : 37.4393501588456
},
{
setSeqNo : 1,
plygnSeqNo : 1574,
plygnLo : 126.898866598839,
plygnLa : 37.4394054094141
},
{
setSeqNo : 1,
plygnSeqNo : 1575,
plygnLo : 126.898969086473,
plygnLa : 37.4394643420554
},
{
setSeqNo : 1,
plygnSeqNo : 1576,
plygnLo : 126.899191019974,
plygnLa : 37.4395915225615
},
{
setSeqNo : 1,
plygnSeqNo : 1577,
plygnLo : 126.899281346389,
plygnLa : 37.4396439668319
},
{
setSeqNo : 1,
plygnSeqNo : 1578,
plygnLo : 126.899904901891,
plygnLa : 37.4395529979627
},
{
setSeqNo : 1,
plygnSeqNo : 1579,
plygnLo : 126.899925914234,
plygnLa : 37.4395563961811
},
{
setSeqNo : 1,
plygnSeqNo : 1580,
plygnLo : 126.899892792052,
plygnLa : 37.4396332317148
},
{
setSeqNo : 1,
plygnSeqNo : 1581,
plygnLo : 126.899883058153,
plygnLa : 37.4396540543668
},
{
setSeqNo : 1,
plygnSeqNo : 1582,
plygnLo : 126.899754271771,
plygnLa : 37.4399642335958
},
{
setSeqNo : 1,
plygnSeqNo : 1583,
plygnLo : 126.899736737965,
plygnLa : 37.4400033481107
},
{
setSeqNo : 1,
plygnSeqNo : 1584,
plygnLo : 126.899610626778,
plygnLa : 37.4403079072297
},
{
setSeqNo : 1,
plygnSeqNo : 1585,
plygnLo : 126.89959911532,
plygnLa : 37.4403309813846
},
{
setSeqNo : 1,
plygnSeqNo : 1586,
plygnLo : 126.899490512336,
plygnLa : 37.4405966760528
},
{
setSeqNo : 1,
plygnSeqNo : 1587,
plygnLo : 126.89935793778,
plygnLa : 37.4408494187846
},
{
setSeqNo : 1,
plygnSeqNo : 1588,
plygnLo : 126.899278486506,
plygnLa : 37.4409740774157
},
{
setSeqNo : 1,
plygnSeqNo : 1589,
plygnLo : 126.899222050934,
plygnLa : 37.4410599030468
},
{
setSeqNo : 1,
plygnSeqNo : 1590,
plygnLo : 126.89899887268,
plygnLa : 37.4411788228303
},
{
setSeqNo : 1,
plygnSeqNo : 1591,
plygnLo : 126.898982568644,
plygnLa : 37.4412261027221
},
{
setSeqNo : 1,
plygnSeqNo : 1592,
plygnLo : 126.89897212492,
plygnLa : 37.4412534040769
},
{
setSeqNo : 1,
plygnSeqNo : 1593,
plygnLo : 126.898893595101,
plygnLa : 37.4414811285571
},
{
setSeqNo : 1,
plygnSeqNo : 1594,
plygnLo : 126.898878296224,
plygnLa : 37.4415624765096
},
{
setSeqNo : 1,
plygnSeqNo : 1595,
plygnLo : 126.898871192933,
plygnLa : 37.4415923205725
},
{
setSeqNo : 1,
plygnSeqNo : 1596,
plygnLo : 126.898821395524,
plygnLa : 37.4418552630552
},
{
setSeqNo : 1,
plygnSeqNo : 1597,
plygnLo : 126.898802187562,
plygnLa : 37.4419537980877
},
{
setSeqNo : 1,
plygnSeqNo : 1598,
plygnLo : 126.898778921403,
plygnLa : 37.4420593664694
},
{
setSeqNo : 1,
plygnSeqNo : 1599,
plygnLo : 126.8987029371,
plygnLa : 37.4422273923256
},
{
setSeqNo : 1,
plygnSeqNo : 1600,
plygnLo : 126.898680623447,
plygnLa : 37.4422738301239
},
{
setSeqNo : 1,
plygnSeqNo : 1601,
plygnLo : 126.898542849353,
plygnLa : 37.4425800522339
},
{
setSeqNo : 1,
plygnSeqNo : 1602,
plygnLo : 126.898529207756,
plygnLa : 37.4426076293972
},
{
setSeqNo : 1,
plygnSeqNo : 1603,
plygnLo : 126.898388940536,
plygnLa : 37.4429186337079
},
{
setSeqNo : 1,
plygnSeqNo : 1604,
plygnLo : 126.898257009847,
plygnLa : 37.4432065619619
},
{
setSeqNo : 1,
plygnSeqNo : 1605,
plygnLo : 126.898190057835,
plygnLa : 37.4433515096189
},
{
setSeqNo : 1,
plygnSeqNo : 1606,
plygnLo : 126.898128434149,
plygnLa : 37.4434863192859
},
{
setSeqNo : 1,
plygnSeqNo : 1607,
plygnLo : 126.898074594021,
plygnLa : 37.4436042498617
},
{
setSeqNo : 1,
plygnSeqNo : 1608,
plygnLo : 126.897926001025,
plygnLa : 37.4439360865129
},
{
setSeqNo : 1,
plygnSeqNo : 1609,
plygnLo : 126.897916075612,
plygnLa : 37.4439546650556
},
{
setSeqNo : 1,
plygnSeqNo : 1610,
plygnLo : 126.897774026699,
plygnLa : 37.4442758052964
},
{
setSeqNo : 1,
plygnSeqNo : 1611,
plygnLo : 126.897762887233,
plygnLa : 37.4442980322704
},
{
setSeqNo : 1,
plygnSeqNo : 1612,
plygnLo : 126.897755600034,
plygnLa : 37.4443211183982
},
{
setSeqNo : 1,
plygnSeqNo : 1613,
plygnLo : 126.897748344749,
plygnLa : 37.4443377261482
},
{
setSeqNo : 1,
plygnSeqNo : 1614,
plygnLo : 126.897657820497,
plygnLa : 37.444547978019
},
{
setSeqNo : 1,
plygnSeqNo : 1615,
plygnLo : 126.897558638812,
plygnLa : 37.4447751148274
},
{
setSeqNo : 1,
plygnSeqNo : 1616,
plygnLo : 126.897408070117,
plygnLa : 37.4451179249231
},
{
setSeqNo : 1,
plygnSeqNo : 1617,
plygnLo : 126.897269195075,
plygnLa : 37.4454368129522
},
{
setSeqNo : 1,
plygnSeqNo : 1618,
plygnLo : 126.897072488536,
plygnLa : 37.4455630675813
},
{
setSeqNo : 1,
plygnSeqNo : 1619,
plygnLo : 126.896990667158,
plygnLa : 37.4456150819657
},
{
setSeqNo : 1,
plygnSeqNo : 1620,
plygnLo : 126.896764179908,
plygnLa : 37.4457044155615
},
{
setSeqNo : 1,
plygnSeqNo : 1621,
plygnLo : 126.896333490625,
plygnLa : 37.4457271162011
},
{
setSeqNo : 1,
plygnSeqNo : 1622,
plygnLo : 126.895782352318,
plygnLa : 37.4456334336506
},
{
setSeqNo : 1,
plygnSeqNo : 1623,
plygnLo : 126.895577541556,
plygnLa : 37.4457436234973
},
{
setSeqNo : 1,
plygnSeqNo : 1624,
plygnLo : 126.895505462192,
plygnLa : 37.4457781947269
},
{
setSeqNo : 1,
plygnSeqNo : 1625,
plygnLo : 126.895484377149,
plygnLa : 37.4458237755355
},
{
setSeqNo : 1,
plygnSeqNo : 1626,
plygnLo : 126.895309734185,
plygnLa : 37.4462099340227
},
{
setSeqNo : 1,
plygnSeqNo : 1627,
plygnLo : 126.89500868613,
plygnLa : 37.4464526550012
},
{
setSeqNo : 1,
plygnSeqNo : 1628,
plygnLo : 126.894680168992,
plygnLa : 37.4466381913711
},
{
setSeqNo : 1,
plygnSeqNo : 1629,
plygnLo : 126.894650068289,
plygnLa : 37.4466981342073
},
{
setSeqNo : 1,
plygnSeqNo : 1630,
plygnLo : 126.894670405762,
plygnLa : 37.4467969843384
},
{
setSeqNo : 1,
plygnSeqNo : 1631,
plygnLo : 126.894724946999,
plygnLa : 37.4470639569946
},
{
setSeqNo : 1,
plygnSeqNo : 1632,
plygnLo : 126.894696653854,
plygnLa : 37.4473404234556
},
{
setSeqNo : 1,
plygnSeqNo : 1633,
plygnLo : 126.894726087046,
plygnLa : 37.4476307461311
},
{
setSeqNo : 1,
plygnSeqNo : 1634,
plygnLo : 126.894751049814,
plygnLa : 37.4477025697266
},
{
setSeqNo : 1,
plygnSeqNo : 1635,
plygnLo : 126.894851581073,
plygnLa : 37.4479104499124
},
{
setSeqNo : 1,
plygnSeqNo : 1636,
plygnLo : 126.89496815405,
plygnLa : 37.4481476365079
},
{
setSeqNo : 1,
plygnSeqNo : 1637,
plygnLo : 126.895003522805,
plygnLa : 37.4482225600326
},
{
setSeqNo : 1,
plygnSeqNo : 1638,
plygnLo : 126.895234808462,
plygnLa : 37.4483745341993
},
{
setSeqNo : 1,
plygnSeqNo : 1639,
plygnLo : 126.895424213517,
plygnLa : 37.4483525043451
},
{
setSeqNo : 1,
plygnSeqNo : 1640,
plygnLo : 126.895580792388,
plygnLa : 37.4483342992818
},
{
setSeqNo : 1,
plygnSeqNo : 1641,
plygnLo : 126.895641232351,
plygnLa : 37.4482932411392
},
{
setSeqNo : 1,
plygnSeqNo : 1642,
plygnLo : 126.895860932681,
plygnLa : 37.4481428076189
},
{
setSeqNo : 1,
plygnSeqNo : 1643,
plygnLo : 126.895994911685,
plygnLa : 37.4480502842511
},
{
setSeqNo : 1,
plygnSeqNo : 1644,
plygnLo : 126.896049835965,
plygnLa : 37.4480430191165
},
{
setSeqNo : 1,
plygnSeqNo : 1645,
plygnLo : 126.895995989387,
plygnLa : 37.4481617864729
},
{
setSeqNo : 1,
plygnSeqNo : 1646,
plygnLo : 126.89594129708,
plygnLa : 37.4482538117682
},
{
setSeqNo : 1,
plygnSeqNo : 1647,
plygnLo : 126.895908229696,
plygnLa : 37.4484156825969
},
{
setSeqNo : 1,
plygnSeqNo : 1648,
plygnLo : 126.895866424986,
plygnLa : 37.4485054675083
},
{
setSeqNo : 1,
plygnSeqNo : 1649,
plygnLo : 126.895793977709,
plygnLa : 37.448662511351
},
{
setSeqNo : 1,
plygnSeqNo : 1650,
plygnLo : 126.895719420685,
plygnLa : 37.4488254727439
},
{
setSeqNo : 1,
plygnSeqNo : 1651,
plygnLo : 126.89567655105,
plygnLa : 37.4489169399871
},
{
setSeqNo : 1,
plygnSeqNo : 1652,
plygnLo : 126.895567439546,
plygnLa : 37.4491570147664
},
{
setSeqNo : 1,
plygnSeqNo : 1653,
plygnLo : 126.89522963646,
plygnLa : 37.4499065192542
},
{
setSeqNo : 1,
plygnSeqNo : 1654,
plygnLo : 126.89504150724,
plygnLa : 37.4503261565498
},
{
setSeqNo : 1,
plygnSeqNo : 1655,
plygnLo : 126.894957724604,
plygnLa : 37.4505141821947
},
{
setSeqNo : 1,
plygnSeqNo : 1656,
plygnLo : 126.894903519321,
plygnLa : 37.4506346350061
},
{
setSeqNo : 1,
plygnSeqNo : 1657,
plygnLo : 126.894814898432,
plygnLa : 37.4508623481317
},
{
setSeqNo : 1,
plygnSeqNo : 1658,
plygnLo : 126.89479454996,
plygnLa : 37.4508910441289
},
{
setSeqNo : 1,
plygnSeqNo : 1659,
plygnLo : 126.894603817202,
plygnLa : 37.4511591920255
},
{
setSeqNo : 1,
plygnSeqNo : 1660,
plygnLo : 126.894512363399,
plygnLa : 37.4513908475941
},
{
setSeqNo : 1,
plygnSeqNo : 1661,
plygnLo : 126.894377678952,
plygnLa : 37.4517263506568
},
{
setSeqNo : 1,
plygnSeqNo : 1662,
plygnLo : 126.894368111274,
plygnLa : 37.4517457674771
},
{
setSeqNo : 1,
plygnSeqNo : 1663,
plygnLo : 126.894243353487,
plygnLa : 37.4520550951771
},
{
setSeqNo : 1,
plygnSeqNo : 1664,
plygnLo : 126.894116097383,
plygnLa : 37.4523787830555
},
{
setSeqNo : 1,
plygnSeqNo : 1665,
plygnLo : 126.894074987238,
plygnLa : 37.4524784140468
},
{
setSeqNo : 1,
plygnSeqNo : 1666,
plygnLo : 126.89398299849,
plygnLa : 37.4527173762015
},
{
setSeqNo : 1,
plygnSeqNo : 1667,
plygnLo : 126.893807907205,
plygnLa : 37.4527831087075
},
{
setSeqNo : 1,
plygnSeqNo : 1668,
plygnLo : 126.893613946737,
plygnLa : 37.4528234681881
},
{
setSeqNo : 1,
plygnSeqNo : 1669,
plygnLo : 126.893376114538,
plygnLa : 37.4528057976821
},
{
setSeqNo : 1,
plygnSeqNo : 1670,
plygnLo : 126.893254500535,
plygnLa : 37.452762888532
},
{
setSeqNo : 1,
plygnSeqNo : 1671,
plygnLo : 126.893226457903,
plygnLa : 37.4527431582275
},
{
setSeqNo : 1,
plygnSeqNo : 1672,
plygnLo : 126.893142488205,
plygnLa : 37.4526859216577
},
{
setSeqNo : 1,
plygnSeqNo : 1673,
plygnLo : 126.893062772717,
plygnLa : 37.4526024951294
},
{
setSeqNo : 1,
plygnSeqNo : 1674,
plygnLo : 126.893054490272,
plygnLa : 37.4525932079252
},
{
setSeqNo : 1,
plygnSeqNo : 1675,
plygnLo : 126.893028650858,
plygnLa : 37.4525095535707
},
{
setSeqNo : 1,
plygnSeqNo : 1676,
plygnLo : 126.89299430186,
plygnLa : 37.4524501087274
},
{
setSeqNo : 1,
plygnSeqNo : 1677,
plygnLo : 126.892835954195,
plygnLa : 37.4521768504669
},
{
setSeqNo : 1,
plygnSeqNo : 1678,
plygnLo : 126.892783632415,
plygnLa : 37.4520867013981
},
{
setSeqNo : 1,
plygnSeqNo : 1679,
plygnLo : 126.892759516843,
plygnLa : 37.4520393765353
},
{
setSeqNo : 1,
plygnSeqNo : 1680,
plygnLo : 126.892719475186,
plygnLa : 37.4520072468606
},
{
setSeqNo : 1,
plygnSeqNo : 1681,
plygnLo : 126.892712418147,
plygnLa : 37.4520032841989
},
{
setSeqNo : 1,
plygnSeqNo : 1682,
plygnLo : 126.892650478661,
plygnLa : 37.4519674753716
},
{
setSeqNo : 1,
plygnSeqNo : 1683,
plygnLo : 126.892625411925,
plygnLa : 37.4519601357718
},
{
setSeqNo : 1,
plygnSeqNo : 1684,
plygnLo : 126.89258816555,
plygnLa : 37.4519491191026
},
{
setSeqNo : 1,
plygnSeqNo : 1685,
plygnLo : 126.892476738436,
plygnLa : 37.4519535202291
},
{
setSeqNo : 1,
plygnSeqNo : 1686,
plygnLo : 126.892391027045,
plygnLa : 37.4519993392408
},
{
setSeqNo : 1,
plygnSeqNo : 1687,
plygnLo : 126.892357411617,
plygnLa : 37.4520409803224
},
{
setSeqNo : 1,
plygnSeqNo : 1688,
plygnLo : 126.892285586392,
plygnLa : 37.4521296077137
},
{
setSeqNo : 1,
plygnSeqNo : 1689,
plygnLo : 126.89222436888,
plygnLa : 37.4522050019154
},
{
setSeqNo : 1,
plygnSeqNo : 1690,
plygnLo : 126.892202648738,
plygnLa : 37.4522184969944
},
{
setSeqNo : 1,
plygnSeqNo : 1691,
plygnLo : 126.892103658689,
plygnLa : 37.4522800702757
},
{
setSeqNo : 1,
plygnSeqNo : 1692,
plygnLo : 126.891963764764,
plygnLa : 37.4523044389551
},
{
setSeqNo : 1,
plygnSeqNo : 1693,
plygnLo : 126.891904260884,
plygnLa : 37.4523055098118
},
{
setSeqNo : 1,
plygnSeqNo : 1694,
plygnLo : 126.891752448395,
plygnLa : 37.4522645441894
},
{
setSeqNo : 1,
plygnSeqNo : 1695,
plygnLo : 126.891691562625,
plygnLa : 37.4522439358916
},
{
setSeqNo : 1,
plygnSeqNo : 1696,
plygnLo : 126.891567784736,
plygnLa : 37.4522291797388
},
{
setSeqNo : 1,
plygnSeqNo : 1697,
plygnLo : 126.891364913058,
plygnLa : 37.4522115283829
},
{
setSeqNo : 1,
plygnSeqNo : 1698,
plygnLo : 126.891048601393,
plygnLa : 37.4522424901912
},
{
setSeqNo : 1,
plygnSeqNo : 1699,
plygnLo : 126.890724444775,
plygnLa : 37.4523198981145
},
{
setSeqNo : 1,
plygnSeqNo : 1700,
plygnLo : 126.89050865193,
plygnLa : 37.4524413212555
},
{
setSeqNo : 1,
plygnSeqNo : 1701,
plygnLo : 126.890321990355,
plygnLa : 37.452496369435
},
{
setSeqNo : 1,
plygnSeqNo : 1702,
plygnLo : 126.890209765678,
plygnLa : 37.452504120751
},
{
setSeqNo : 1,
plygnSeqNo : 1703,
plygnLo : 126.890147823872,
plygnLa : 37.4524860335849
},
{
setSeqNo : 1,
plygnSeqNo : 1704,
plygnLo : 126.889849509302,
plygnLa : 37.4522774025921
},
{
setSeqNo : 1,
plygnSeqNo : 1705,
plygnLo : 126.889780122298,
plygnLa : 37.4522731124367
},
{
setSeqNo : 1,
plygnSeqNo : 1706,
plygnLo : 126.889642134885,
plygnLa : 37.4523154994651
},
{
setSeqNo : 1,
plygnSeqNo : 1707,
plygnLo : 126.88963736524,
plygnLa : 37.4523225321147
},
{
setSeqNo : 1,
plygnSeqNo : 1708,
plygnLo : 126.889560555208,
plygnLa : 37.4524322654263
},
{
setSeqNo : 1,
plygnSeqNo : 1709,
plygnLo : 126.889520547727,
plygnLa : 37.4526211590682
},
{
setSeqNo : 1,
plygnSeqNo : 1710,
plygnLo : 126.889503657714,
plygnLa : 37.4527011071695
},
{
setSeqNo : 1,
plygnSeqNo : 1711,
plygnLo : 126.889519177996,
plygnLa : 37.4528196586957
},
{
setSeqNo : 1,
plygnSeqNo : 1712,
plygnLo : 126.889535772332,
plygnLa : 37.4529466704208
},
{
setSeqNo : 1,
plygnSeqNo : 1713,
plygnLo : 126.889647703809,
plygnLa : 37.4533192792242
},
{
setSeqNo : 1,
plygnSeqNo : 1714,
plygnLo : 126.889666480167,
plygnLa : 37.4535217443564
},
{
setSeqNo : 1,
plygnSeqNo : 1715,
plygnLo : 126.88965276963,
plygnLa : 37.453598595607
},
{
setSeqNo : 1,
plygnSeqNo : 1716,
plygnLo : 126.889592047438,
plygnLa : 37.4537030002044
},
{
setSeqNo : 1,
plygnSeqNo : 1717,
plygnLo : 126.88951742235,
plygnLa : 37.4537705050324
},
{
setSeqNo : 1,
plygnSeqNo : 1718,
plygnLo : 126.88927181314,
plygnLa : 37.4538662840911
},
{
setSeqNo : 1,
plygnSeqNo : 1719,
plygnLo : 126.889085171533,
plygnLa : 37.4539716957645
},
{
setSeqNo : 1,
plygnSeqNo : 1720,
plygnLo : 126.889021488501,
plygnLa : 37.4541670360906
},
{
setSeqNo : 1,
plygnSeqNo : 1721,
plygnLo : 126.889031664329,
plygnLa : 37.4542087166421
},
{
setSeqNo : 1,
plygnSeqNo : 1722,
plygnLo : 126.889131611195,
plygnLa : 37.4543281948138
},
{
setSeqNo : 1,
plygnSeqNo : 1723,
plygnLo : 126.889264890908,
plygnLa : 37.4544823294543
},
{
setSeqNo : 1,
plygnSeqNo : 1724,
plygnLo : 126.889285592389,
plygnLa : 37.4545749919968
},
{
setSeqNo : 1,
plygnSeqNo : 1725,
plygnLo : 126.8892032489,
plygnLa : 37.4547238674142
},
{
setSeqNo : 1,
plygnSeqNo : 1726,
plygnLo : 126.889180792634,
plygnLa : 37.4547381987468
},
{
setSeqNo : 1,
plygnSeqNo : 1727,
plygnLo : 126.889172785535,
plygnLa : 37.4547418400418
},
{
setSeqNo : 1,
plygnSeqNo : 1728,
plygnLo : 126.88916347768,
plygnLa : 37.4547460665705
},
{
setSeqNo : 1,
plygnSeqNo : 1729,
plygnLo : 126.888879722564,
plygnLa : 37.4547277760777
},
{
setSeqNo : 1,
plygnSeqNo : 1730,
plygnLo : 126.888764171205,
plygnLa : 37.454765679389
},
{
setSeqNo : 1,
plygnSeqNo : 1731,
plygnLo : 126.888341098629,
plygnLa : 37.4550896365407
},
{
setSeqNo : 1,
plygnSeqNo : 1732,
plygnLo : 126.88828498889,
plygnLa : 37.4551686909955
},
{
setSeqNo : 1,
plygnSeqNo : 1733,
plygnLo : 126.888238022137,
plygnLa : 37.4552849397435
},
{
setSeqNo : 1,
plygnSeqNo : 1734,
plygnLo : 126.888235538584,
plygnLa : 37.4552908563659
},
{
setSeqNo : 1,
plygnSeqNo : 1735,
plygnLo : 126.888199173525,
plygnLa : 37.4554003469627
},
{
setSeqNo : 1,
plygnSeqNo : 1736,
plygnLo : 126.888115102071,
plygnLa : 37.4555235967249
},
{
setSeqNo : 1,
plygnSeqNo : 1737,
plygnLo : 126.888070907928,
plygnLa : 37.4555553677114
},
{
setSeqNo : 1,
plygnSeqNo : 1738,
plygnLo : 126.888016656734,
plygnLa : 37.4555786897155
},
{
setSeqNo : 1,
plygnSeqNo : 1739,
plygnLo : 126.887971620801,
plygnLa : 37.4555755451117
},
{
setSeqNo : 1,
plygnSeqNo : 1740,
plygnLo : 126.887860024059,
plygnLa : 37.4555675544356
},
{
setSeqNo : 1,
plygnSeqNo : 1741,
plygnLo : 126.887660349589,
plygnLa : 37.4555372329352
},
{
setSeqNo : 1,
plygnSeqNo : 1742,
plygnLo : 126.88753239798,
plygnLa : 37.4554858612303
},
{
setSeqNo : 1,
plygnSeqNo : 1743,
plygnLo : 126.887475886401,
plygnLa : 37.4554784907042
},
{
setSeqNo : 1,
plygnSeqNo : 1744,
plygnLo : 126.887373489657,
plygnLa : 37.4554634696194
},
{
setSeqNo : 1,
plygnSeqNo : 1745,
plygnLo : 126.88724150834,
plygnLa : 37.4555035990721
},
{
setSeqNo : 1,
plygnSeqNo : 1746,
plygnLo : 126.88709710322,
plygnLa : 37.4555921555
},
{
setSeqNo : 1,
plygnSeqNo : 1747,
plygnLo : 126.886835949896,
plygnLa : 37.4557946289317
},
{
setSeqNo : 1,
plygnSeqNo : 1748,
plygnLo : 126.886681752783,
plygnLa : 37.4559279434604
},
{
setSeqNo : 1,
plygnSeqNo : 1749,
plygnLo : 126.886601932692,
plygnLa : 37.4560486648094
},
{
setSeqNo : 1,
plygnSeqNo : 1750,
plygnLo : 126.886598390689,
plygnLa : 37.4560525981258
},
{
setSeqNo : 1,
plygnSeqNo : 1751,
plygnLo : 126.886532051239,
plygnLa : 37.4561305258423
},
{
setSeqNo : 1,
plygnSeqNo : 1752,
plygnLo : 126.88640323976,
plygnLa : 37.4561734759994
},
{
setSeqNo : 1,
plygnSeqNo : 1753,
plygnLo : 126.886346815866,
plygnLa : 37.456235645537
},
{
setSeqNo : 1,
plygnSeqNo : 1754,
plygnLo : 126.886326803063,
plygnLa : 37.4562699807759
},
{
setSeqNo : 1,
plygnSeqNo : 1755,
plygnLo : 126.886317587466,
plygnLa : 37.4562877037473
},
{
setSeqNo : 1,
plygnSeqNo : 1756,
plygnLo : 126.88629544567,
plygnLa : 37.4563313264982
},
{
setSeqNo : 1,
plygnSeqNo : 1757,
plygnLo : 126.886264680112,
plygnLa : 37.4563625520226
},
{
setSeqNo : 1,
plygnSeqNo : 1758,
plygnLo : 126.886220915585,
plygnLa : 37.4564512041677
},
{
setSeqNo : 1,
plygnSeqNo : 1759,
plygnLo : 126.886185486365,
plygnLa : 37.4565226838609
},
{
setSeqNo : 1,
plygnSeqNo : 1760,
plygnLo : 126.886127664571,
plygnLa : 37.456802506459
},
{
setSeqNo : 1,
plygnSeqNo : 1761,
plygnLo : 126.886108892827,
plygnLa : 37.4569480541223
},
{
setSeqNo : 1,
plygnSeqNo : 1762,
plygnLo : 126.886068444265,
plygnLa : 37.4570704974551
},
{
setSeqNo : 1,
plygnSeqNo : 1763,
plygnLo : 126.8859999661,
plygnLa : 37.4572751195758
},
{
setSeqNo : 1,
plygnSeqNo : 1764,
plygnLo : 126.885880751461,
plygnLa : 37.4575084266908
},
{
setSeqNo : 1,
plygnSeqNo : 1765,
plygnLo : 126.885869144062,
plygnLa : 37.4575883796351
},
{
setSeqNo : 1,
plygnSeqNo : 1766,
plygnLo : 126.885914532175,
plygnLa : 37.4578179015812
},
{
setSeqNo : 1,
plygnSeqNo : 1767,
plygnLo : 126.885947270418,
plygnLa : 37.4578945090097
},
{
setSeqNo : 1,
plygnSeqNo : 1768,
plygnLo : 126.88600134693,
plygnLa : 37.457987204643
},
{
setSeqNo : 1,
plygnSeqNo : 1769,
plygnLo : 126.886147120152,
plygnLa : 37.4581602226166
},
{
setSeqNo : 1,
plygnSeqNo : 1770,
plygnLo : 126.88623875063,
plygnLa : 37.4582926500097
},
{
setSeqNo : 1,
plygnSeqNo : 1771,
plygnLo : 126.886321864184,
plygnLa : 37.4584509658908
},
{
setSeqNo : 1,
plygnSeqNo : 1772,
plygnLo : 126.886361925364,
plygnLa : 37.458588130052
},
{
setSeqNo : 1,
plygnSeqNo : 1773,
plygnLo : 126.886374266278,
plygnLa : 37.458714561048
},
{
setSeqNo : 1,
plygnSeqNo : 1774,
plygnLo : 126.886364580218,
plygnLa : 37.4588176081335
},
{
setSeqNo : 1,
plygnSeqNo : 1775,
plygnLo : 126.886337161062,
plygnLa : 37.4589572380705
},
{
setSeqNo : 1,
plygnSeqNo : 1776,
plygnLo : 126.886285705964,
plygnLa : 37.4591145838601
},
{
setSeqNo : 1,
plygnSeqNo : 1777,
plygnLo : 126.886228695814,
plygnLa : 37.4592096913536
},
{
setSeqNo : 1,
plygnSeqNo : 1778,
plygnLo : 126.886198447089,
plygnLa : 37.4592411989998
},
{
setSeqNo : 1,
plygnSeqNo : 1779,
plygnLo : 126.886103520424,
plygnLa : 37.4592974177097
},
{
setSeqNo : 1,
plygnSeqNo : 1780,
plygnLo : 126.885940976771,
plygnLa : 37.459340056743
},
{
setSeqNo : 1,
plygnSeqNo : 1781,
plygnLo : 126.88585319158,
plygnLa : 37.4593532073159
},
{
setSeqNo : 1,
plygnSeqNo : 1782,
plygnLo : 126.885768760036,
plygnLa : 37.4593601613554
},
{
setSeqNo : 1,
plygnSeqNo : 1783,
plygnLo : 126.885511071724,
plygnLa : 37.459372864705
},
{
setSeqNo : 1,
plygnSeqNo : 1784,
plygnLo : 126.885433489973,
plygnLa : 37.4594093881623
},
{
setSeqNo : 1,
plygnSeqNo : 1785,
plygnLo : 126.885417937352,
plygnLa : 37.4594166880378
},
{
setSeqNo : 1,
plygnSeqNo : 1786,
plygnLo : 126.885376522941,
plygnLa : 37.4594693031687
},
{
setSeqNo : 1,
plygnSeqNo : 1787,
plygnLo : 126.885356472055,
plygnLa : 37.4595346046408
},
{
setSeqNo : 1,
plygnSeqNo : 1788,
plygnLo : 126.885340058237,
plygnLa : 37.4596370796871
},
{
setSeqNo : 1,
plygnSeqNo : 1789,
plygnLo : 126.885349600821,
plygnLa : 37.4598626187604
},
{
setSeqNo : 1,
plygnSeqNo : 1790,
plygnLo : 126.885352942045,
plygnLa : 37.4598721998769
},
{
setSeqNo : 1,
plygnSeqNo : 1791,
plygnLo : 126.885400941909,
plygnLa : 37.4600138761048
},
{
setSeqNo : 1,
plygnSeqNo : 1792,
plygnLo : 126.885443675064,
plygnLa : 37.4601245687579
},
{
setSeqNo : 1,
plygnSeqNo : 1793,
plygnLo : 126.885518536301,
plygnLa : 37.4602552892802
},
{
setSeqNo : 1,
plygnSeqNo : 1794,
plygnLo : 126.885650373194,
plygnLa : 37.4604308347841
},
{
setSeqNo : 1,
plygnSeqNo : 1795,
plygnLo : 126.885668889802,
plygnLa : 37.4604440800848
},
{
setSeqNo : 1,
plygnSeqNo : 1796,
plygnLo : 126.88576503905,
plygnLa : 37.4605123171597
},
{
setSeqNo : 1,
plygnSeqNo : 1797,
plygnLo : 126.885915604273,
plygnLa : 37.4606825297688
},
{
setSeqNo : 1,
plygnSeqNo : 1798,
plygnLo : 126.886013973305,
plygnLa : 37.4607938452485
},
{
setSeqNo : 1,
plygnSeqNo : 1799,
plygnLo : 126.886071979786,
plygnLa : 37.4608595039552
},
{
setSeqNo : 1,
plygnSeqNo : 1800,
plygnLo : 126.886128083027,
plygnLa : 37.4608998251289
},
{
setSeqNo : 1,
plygnSeqNo : 1801,
plygnLo : 126.88618599331,
plygnLa : 37.4609105759671
},
{
setSeqNo : 1,
plygnSeqNo : 1802,
plygnLo : 126.886201345576,
plygnLa : 37.4609165021108
},
{
setSeqNo : 1,
plygnSeqNo : 1803,
plygnLo : 126.88625378752,
plygnLa : 37.4609266985728
},
{
setSeqNo : 1,
plygnSeqNo : 1804,
plygnLo : 126.886260139408,
plygnLa : 37.4609269835293
},
{
setSeqNo : 1,
plygnSeqNo : 1805,
plygnLo : 126.886826345348,
plygnLa : 37.4609303448146
},
{
setSeqNo : 1,
plygnSeqNo : 1806,
plygnLo : 126.886960706414,
plygnLa : 37.4609583533643
},
{
setSeqNo : 1,
plygnSeqNo : 1807,
plygnLo : 126.887076874845,
plygnLa : 37.4609826848519
},
{
setSeqNo : 1,
plygnSeqNo : 1808,
plygnLo : 126.887473596789,
plygnLa : 37.4610655632719
},
{
setSeqNo : 1,
plygnSeqNo : 1809,
plygnLo : 126.887496555149,
plygnLa : 37.4610630536747
},
{
setSeqNo : 1,
plygnSeqNo : 1810,
plygnLo : 126.887525526027,
plygnLa : 37.4610554775835
},
{
setSeqNo : 1,
plygnSeqNo : 1811,
plygnLo : 126.887682033437,
plygnLa : 37.4610373295215
},
{
setSeqNo : 1,
plygnSeqNo : 1812,
plygnLo : 126.88785888295,
plygnLa : 37.4609975135022
},
{
setSeqNo : 1,
plygnSeqNo : 1813,
plygnLo : 126.887953249892,
plygnLa : 37.4609545259135
},
{
setSeqNo : 1,
plygnSeqNo : 1814,
plygnLo : 126.888335867148,
plygnLa : 37.4607808827963
},
{
setSeqNo : 1,
plygnSeqNo : 1815,
plygnLo : 126.888630614438,
plygnLa : 37.4607882110054
},
{
setSeqNo : 1,
plygnSeqNo : 1816,
plygnLo : 126.88876919029,
plygnLa : 37.4608325461835
},
{
setSeqNo : 1,
plygnSeqNo : 1817,
plygnLo : 126.888875516707,
plygnLa : 37.4609469576142
},
{
setSeqNo : 1,
plygnSeqNo : 1818,
plygnLo : 126.888532490166,
plygnLa : 37.461332088141
},
{
setSeqNo : 1,
plygnSeqNo : 1819,
plygnLo : 126.888107909404,
plygnLa : 37.4618066820551
},
{
setSeqNo : 1,
plygnSeqNo : 1820,
plygnLo : 126.887989208402,
plygnLa : 37.4619383400261
},
{
setSeqNo : 1,
plygnSeqNo : 1821,
plygnLo : 126.887859007786,
plygnLa : 37.4620801237041
},
{
setSeqNo : 1,
plygnSeqNo : 1822,
plygnLo : 126.887121804085,
plygnLa : 37.462904399052
},
{
setSeqNo : 1,
plygnSeqNo : 1823,
plygnLo : 126.887043395548,
plygnLa : 37.4629023501781
},
{
setSeqNo : 1,
plygnSeqNo : 1824,
plygnLo : 126.886923845611,
plygnLa : 37.4628918185715
},
{
setSeqNo : 1,
plygnSeqNo : 1825,
plygnLo : 126.886643778959,
plygnLa : 37.4628667672644
},
{
setSeqNo : 1,
plygnSeqNo : 1826,
plygnLo : 126.886391815005,
plygnLa : 37.4628234450959
},
{
setSeqNo : 1,
plygnSeqNo : 1827,
plygnLo : 126.886244912427,
plygnLa : 37.4627982375676
},
{
setSeqNo : 1,
plygnSeqNo : 1828,
plygnLo : 126.886044528212,
plygnLa : 37.462746522153
},
{
setSeqNo : 1,
plygnSeqNo : 1829,
plygnLo : 126.88600885772,
plygnLa : 37.4627450731343
},
{
setSeqNo : 1,
plygnSeqNo : 1830,
plygnLo : 126.885835667302,
plygnLa : 37.4627021051383
},
{
setSeqNo : 1,
plygnSeqNo : 1831,
plygnLo : 126.885665529352,
plygnLa : 37.4626228222339
},
{
setSeqNo : 1,
plygnSeqNo : 1832,
plygnLo : 126.885567409141,
plygnLa : 37.4625771071634
},
{
setSeqNo : 1,
plygnSeqNo : 1833,
plygnLo : 126.885456568476,
plygnLa : 37.4625257589343
},
{
setSeqNo : 1,
plygnSeqNo : 1834,
plygnLo : 126.885319406249,
plygnLa : 37.4624881780711
},
{
setSeqNo : 1,
plygnSeqNo : 1835,
plygnLo : 126.88514123141,
plygnLa : 37.4624680092283
},
{
setSeqNo : 1,
plygnSeqNo : 1836,
plygnLo : 126.884858003376,
plygnLa : 37.4625431903014
},
{
setSeqNo : 1,
plygnSeqNo : 1837,
plygnLo : 126.884353695993,
plygnLa : 37.462711629057
},
{
setSeqNo : 1,
plygnSeqNo : 1838,
plygnLo : 126.884317111097,
plygnLa : 37.4627239817702
},
{
setSeqNo : 1,
plygnSeqNo : 1839,
plygnLo : 126.884182400471,
plygnLa : 37.4628085969686
},
{
setSeqNo : 1,
plygnSeqNo : 1840,
plygnLo : 126.883782145224,
plygnLa : 37.4631815568221
},
{
setSeqNo : 1,
plygnSeqNo : 1841,
plygnLo : 126.883418600821,
plygnLa : 37.4636744938879
},
{
setSeqNo : 1,
plygnSeqNo : 1842,
plygnLo : 126.883148516091,
plygnLa : 37.463926216196
},
{
setSeqNo : 1,
plygnSeqNo : 1843,
plygnLo : 126.882970514083,
plygnLa : 37.4641315826405
},
{
setSeqNo : 1,
plygnSeqNo : 1844,
plygnLo : 126.882745615717,
plygnLa : 37.4643909635994
},
{
setSeqNo : 1,
plygnSeqNo : 1845,
plygnLo : 126.882773544754,
plygnLa : 37.4648291050556
},
{
setSeqNo : 1,
plygnSeqNo : 1846,
plygnLo : 126.88287347327,
plygnLa : 37.4649615353505
},
{
setSeqNo : 1,
plygnSeqNo : 1847,
plygnLo : 126.882928161675,
plygnLa : 37.4650041089789
},
{
setSeqNo : 1,
plygnSeqNo : 1848,
plygnLo : 126.883147501529,
plygnLa : 37.465128496662
},
{
setSeqNo : 1,
plygnSeqNo : 1849,
plygnLo : 126.883332697467,
plygnLa : 37.4651740102042
},
{
setSeqNo : 1,
plygnSeqNo : 1850,
plygnLo : 126.883445869423,
plygnLa : 37.4652017212734
},
{
setSeqNo : 1,
plygnSeqNo : 1851,
plygnLo : 126.883789085759,
plygnLa : 37.4652859657176
},
{
setSeqNo : 1,
plygnSeqNo : 1852,
plygnLo : 126.883851917927,
plygnLa : 37.4653105256132
},
{
setSeqNo : 1,
plygnSeqNo : 1853,
plygnLo : 126.883990521733,
plygnLa : 37.4653413516554
},
{
setSeqNo : 1,
plygnSeqNo : 1854,
plygnLo : 126.884148536056,
plygnLa : 37.4653767029692
},
{
setSeqNo : 1,
plygnSeqNo : 1855,
plygnLo : 126.884185258477,
plygnLa : 37.4653851899945
},
{
setSeqNo : 1,
plygnSeqNo : 1856,
plygnLo : 126.884344811235,
plygnLa : 37.4654574291637
},
{
setSeqNo : 1,
plygnSeqNo : 1857,
plygnLo : 126.884568462144,
plygnLa : 37.4656547457976
},
{
setSeqNo : 1,
plygnSeqNo : 1858,
plygnLo : 126.884574294208,
plygnLa : 37.4656482718027
},
{
setSeqNo : 1,
plygnSeqNo : 1859,
plygnLo : 126.884594185081,
plygnLa : 37.4658099151462
},
{
setSeqNo : 1,
plygnSeqNo : 1860,
plygnLo : 126.884617527882,
plygnLa : 37.4660123757924
},
{
setSeqNo : 1,
plygnSeqNo : 1861,
plygnLo : 126.884492369916,
plygnLa : 37.4662034352906
},
{
setSeqNo : 1,
plygnSeqNo : 1862,
plygnLo : 126.884328077379,
plygnLa : 37.4664521742955
},
{
setSeqNo : 1,
plygnSeqNo : 1863,
plygnLo : 126.884317096721,
plygnLa : 37.4664696254585
},
{
setSeqNo : 1,
plygnSeqNo : 1864,
plygnLo : 126.884321329628,
plygnLa : 37.4664738456725
},
{
setSeqNo : 1,
plygnSeqNo : 1865,
plygnLo : 126.884249710168,
plygnLa : 37.4665298073725
},
{
setSeqNo : 1,
plygnSeqNo : 1866,
plygnLo : 126.88399444473,
plygnLa : 37.4666686512014
},
{
setSeqNo : 1,
plygnSeqNo : 1867,
plygnLo : 126.88366332043,
plygnLa : 37.466755322448
},
{
setSeqNo : 1,
plygnSeqNo : 1868,
plygnLo : 126.883276004702,
plygnLa : 37.4668565770804
},
{
setSeqNo : 1,
plygnSeqNo : 1869,
plygnLo : 126.883014094997,
plygnLa : 37.4670643937662
},
{
setSeqNo : 1,
plygnSeqNo : 1870,
plygnLo : 126.882921386882,
plygnLa : 37.4672743424177
},
{
setSeqNo : 1,
plygnSeqNo : 1871,
plygnLo : 126.882905086599,
plygnLa : 37.4673106538011
},
{
setSeqNo : 1,
plygnSeqNo : 1872,
plygnLo : 126.882846951583,
plygnLa : 37.4674387001657
},
{
setSeqNo : 1,
plygnSeqNo : 1873,
plygnLo : 126.882772510587,
plygnLa : 37.4675988415185
},
{
setSeqNo : 1,
plygnSeqNo : 1874,
plygnLo : 126.882721825267,
plygnLa : 37.4677116954072
},
{
setSeqNo : 1,
plygnSeqNo : 1875,
plygnLo : 126.882652784747,
plygnLa : 37.4678082053881
},
{
setSeqNo : 1,
plygnSeqNo : 1876,
plygnLo : 126.88261104009,
plygnLa : 37.4678512396985
},
{
setSeqNo : 1,
plygnSeqNo : 1877,
plygnLo : 126.882529825045,
plygnLa : 37.4679339329143
},
{
setSeqNo : 1,
plygnSeqNo : 1878,
plygnLo : 126.882423577276,
plygnLa : 37.4679983118447
},
{
setSeqNo : 1,
plygnSeqNo : 1879,
plygnLo : 126.88227014664,
plygnLa : 37.4680705163061
},
{
setSeqNo : 1,
plygnSeqNo : 1880,
plygnLo : 126.882101355646,
plygnLa : 37.4681483364475
},
{
setSeqNo : 1,
plygnSeqNo : 1881,
plygnLo : 126.88194740301,
plygnLa : 37.4682137830742
},
{
setSeqNo : 1,
plygnSeqNo : 1882,
plygnLo : 126.881796203899,
plygnLa : 37.4683310483186
},
{
setSeqNo : 1,
plygnSeqNo : 1883,
plygnLo : 126.881631207649,
plygnLa : 37.4684592737729
},
{
setSeqNo : 1,
plygnSeqNo : 1884,
plygnLo : 126.881580869345,
plygnLa : 37.4685673427011
},
{
setSeqNo : 1,
plygnSeqNo : 1885,
plygnLo : 126.881511204545,
plygnLa : 37.468721002196
},
{
setSeqNo : 1,
plygnSeqNo : 1886,
plygnLo : 126.881459562048,
plygnLa : 37.4688797513041
},
{
setSeqNo : 1,
plygnSeqNo : 1887,
plygnLo : 126.881446827312,
plygnLa : 37.4689960315151
},
{
setSeqNo : 1,
plygnSeqNo : 1888,
plygnLo : 126.881468478901,
plygnLa : 37.4691565396376
},
{
setSeqNo : 1,
plygnSeqNo : 1889,
plygnLo : 126.881531849721,
plygnLa : 37.4692911952996
},
{
setSeqNo : 1,
plygnSeqNo : 1890,
plygnLo : 126.881592940013,
plygnLa : 37.4694168309159
},
{
setSeqNo : 1,
plygnSeqNo : 1891,
plygnLo : 126.881466602446,
plygnLa : 37.4695591770916
},
{
setSeqNo : 1,
plygnSeqNo : 1892,
plygnLo : 126.881336006823,
plygnLa : 37.4697065759203
},
{
setSeqNo : 1,
plygnSeqNo : 1893,
plygnLo : 126.881195160113,
plygnLa : 37.4698655207214
},
{
setSeqNo : 1,
plygnSeqNo : 1894,
plygnLo : 126.881067042743,
plygnLa : 37.4700089843798
},
{
setSeqNo : 1,
plygnSeqNo : 1895,
plygnLo : 126.880910612584,
plygnLa : 37.4701853660159
},
{
setSeqNo : 1,
plygnSeqNo : 1896,
plygnLo : 126.880800730449,
plygnLa : 37.4703082961306
},
{
setSeqNo : 1,
plygnSeqNo : 1897,
plygnLo : 126.880668191412,
plygnLa : 37.4704585194555
},
{
setSeqNo : 1,
plygnSeqNo : 1898,
plygnLo : 126.880585205186,
plygnLa : 37.4705510666441
},
{
setSeqNo : 1,
plygnSeqNo : 1899,
plygnLo : 126.880548046569,
plygnLa : 37.470592420988
},
{
setSeqNo : 1,
plygnSeqNo : 1900,
plygnLo : 126.880465759478,
plygnLa : 37.4706855268508
},
{
setSeqNo : 1,
plygnSeqNo : 1901,
plygnLo : 126.880443100625,
plygnLa : 37.4707167607994
},
{
setSeqNo : 1,
plygnSeqNo : 1902,
plygnLo : 126.880405971414,
plygnLa : 37.4707406520032
},
{
setSeqNo : 1,
plygnSeqNo : 1903,
plygnLo : 126.880325173848,
plygnLa : 37.4707926659048
},
{
setSeqNo : 1,
plygnSeqNo : 1904,
plygnLo : 126.880204472228,
plygnLa : 37.4709350077789
},
{
setSeqNo : 1,
plygnSeqNo : 1905,
plygnLo : 126.880099965321,
plygnLa : 37.4711153801756
},
{
setSeqNo : 1,
plygnSeqNo : 1906,
plygnLo : 126.880050904318,
plygnLa : 37.4711986820701
},
{
setSeqNo : 1,
plygnSeqNo : 1907,
plygnLo : 126.880039754873,
plygnLa : 37.4712147180576
},
{
setSeqNo : 1,
plygnSeqNo : 1908,
plygnLo : 126.879930189718,
plygnLa : 37.4713548184621
},
{
setSeqNo : 1,
plygnSeqNo : 1909,
plygnLo : 126.879784515349,
plygnLa : 37.4715390951031
},
{
setSeqNo : 1,
plygnSeqNo : 1910,
plygnLo : 126.879557961989,
plygnLa : 37.4718297145836
},
{
setSeqNo : 1,
plygnSeqNo : 1911,
plygnLo : 126.879460254423,
plygnLa : 37.4719566012518
},
{
setSeqNo : 1,
plygnSeqNo : 1912,
plygnLo : 126.879406092484,
plygnLa : 37.4720258039219
},
{
setSeqNo : 1,
plygnSeqNo : 1913,
plygnLo : 126.878965350795,
plygnLa : 37.4725912947411
},
{
setSeqNo : 1,
plygnSeqNo : 1914,
plygnLo : 126.878737715554,
plygnLa : 37.472884172933
},
{
setSeqNo : 1,
plygnSeqNo : 1915,
plygnLo : 126.878566004071,
plygnLa : 37.4731075512611
},
{
setSeqNo : 1,
plygnSeqNo : 1916,
plygnLo : 126.878451479911,
plygnLa : 37.4732552508019
},
{
setSeqNo : 1,
plygnSeqNo : 1917,
plygnLo : 126.878275347293,
plygnLa : 37.4734856698365
},
{
setSeqNo : 1,
plygnSeqNo : 1918,
plygnLo : 126.878122586905,
plygnLa : 37.4736831627781
},
{
setSeqNo : 1,
plygnSeqNo : 1919,
plygnLo : 126.878011414353,
plygnLa : 37.4738277750462
},
{
setSeqNo : 1,
plygnSeqNo : 1920,
plygnLo : 126.877979524272,
plygnLa : 37.4738809552311
},
{
setSeqNo : 1,
plygnSeqNo : 1921,
plygnLo : 126.877868303189,
plygnLa : 37.4740621643628
},
{
setSeqNo : 1,
plygnSeqNo : 1922,
plygnLo : 126.87781251663,
plygnLa : 37.474149954796
},
{
setSeqNo : 1,
plygnSeqNo : 1923,
plygnLo : 126.877774259554,
plygnLa : 37.4742124169901
},
{
setSeqNo : 1,
plygnSeqNo : 1924,
plygnLo : 126.877584045789,
plygnLa : 37.4745179990885
},
{
setSeqNo : 1,
plygnSeqNo : 1925,
plygnLo : 126.877484860826,
plygnLa : 37.4746789494515
},
{
setSeqNo : 1,
plygnSeqNo : 1926,
plygnLo : 126.877431019534,
plygnLa : 37.4747642082738
},
{
setSeqNo : 1,
plygnSeqNo : 1927,
plygnLo : 126.877325099469,
plygnLa : 37.474936982468
},
{
setSeqNo : 1,
plygnSeqNo : 1928,
plygnLo : 126.877236015493,
plygnLa : 37.4750804813449
},
{
setSeqNo : 1,
plygnSeqNo : 1929,
plygnLo : 126.87711415802,
plygnLa : 37.4752782854236
},
{
setSeqNo : 1,
plygnSeqNo : 1930,
plygnLo : 126.876993189717,
plygnLa : 37.4754715938757
},
{
setSeqNo : 1,
plygnSeqNo : 1931,
plygnLo : 126.876841389805,
plygnLa : 37.475719777126
},
{
setSeqNo : 1,
plygnSeqNo : 1932,
plygnLo : 126.876790563568,
plygnLa : 37.4757999660039
},
{
setSeqNo : 1,
plygnSeqNo : 1933,
plygnLo : 126.876695446238,
plygnLa : 37.4759538826118
},
{
setSeqNo : 1,
plygnSeqNo : 1934,
plygnLo : 126.876574473612,
plygnLa : 37.4761480295523
},
{
setSeqNo : 1,
plygnSeqNo : 1935,
plygnLo : 126.876430301572,
plygnLa : 37.4763829841051
},
{
setSeqNo : 1,
plygnSeqNo : 1936,
plygnLo : 126.876369725639,
plygnLa : 37.4764789308283
},
{
setSeqNo : 1,
plygnSeqNo : 1937,
plygnLo : 126.876250695785,
plygnLa : 37.4766730876681
},
{
setSeqNo : 1,
plygnSeqNo : 1938,
plygnLo : 126.876143538569,
plygnLa : 37.4768447225498
},
{
setSeqNo : 1,
plygnSeqNo : 1939,
plygnLo : 126.875985712844,
plygnLa : 37.4771038723876
},
{
setSeqNo : 1,
plygnSeqNo : 1940,
plygnLo : 126.875928117421,
plygnLa : 37.477215309614
},
{
setSeqNo : 1,
plygnSeqNo : 1941,
plygnLo : 126.875820903435,
plygnLa : 37.4774198953133
},
{
setSeqNo : 1,
plygnSeqNo : 1942,
plygnLo : 126.875671857796,
plygnLa : 37.4777072100455
},
{
setSeqNo : 1,
plygnSeqNo : 1943,
plygnLo : 126.875634459877,
plygnLa : 37.4777803862405
},
{
setSeqNo : 1,
plygnSeqNo : 1944,
plygnLo : 126.875546205157,
plygnLa : 37.4779517617306
},
{
setSeqNo : 1,
plygnSeqNo : 1945,
plygnLo : 126.875498539872,
plygnLa : 37.4780395581557
},
{
setSeqNo : 1,
plygnSeqNo : 1946,
plygnLo : 126.875360843706,
plygnLa : 37.4782984492885
},
{
setSeqNo : 1,
plygnSeqNo : 1947,
plygnLo : 126.875320448329,
plygnLa : 37.4783727290708
},
{
setSeqNo : 1,
plygnSeqNo : 1948,
plygnLo : 126.875270826308,
plygnLa : 37.4784681367452
},
{
setSeqNo : 1,
plygnSeqNo : 1949,
plygnLo : 126.875131527724,
plygnLa : 37.4787377205138
},
{
setSeqNo : 1,
plygnSeqNo : 1950,
plygnLo : 126.875070559731,
plygnLa : 37.4788561911907
},
{
setSeqNo : 1,
plygnSeqNo : 1951,
plygnLo : 126.874958542051,
plygnLa : 37.4790720324271
},
{
setSeqNo : 1,
plygnSeqNo : 1952,
plygnLo : 126.87485237854,
plygnLa : 37.4792805545997
},
{
setSeqNo : 1,
plygnSeqNo : 1953,
plygnLo : 126.874785382601,
plygnLa : 37.4794074604853
},
{
setSeqNo : 1,
plygnSeqNo : 1954,
plygnLo : 126.874750114602,
plygnLa : 37.4794778265062
},
{
setSeqNo : 1,
plygnSeqNo : 1955,
plygnLo : 126.874556759267,
plygnLa : 37.4798534998223
},
{
setSeqNo : 1,
plygnSeqNo : 1956,
plygnLo : 126.874405749617,
plygnLa : 37.4801456046122
},
{
setSeqNo : 1,
plygnSeqNo : 1957,
plygnLo : 126.874284697397,
plygnLa : 37.4803802930998
},
{
setSeqNo : 1,
plygnSeqNo : 1958,
plygnLo : 126.874265741678,
plygnLa : 37.4804168795982
},
{
setSeqNo : 1,
plygnSeqNo : 1959,
plygnLo : 126.87423512838,
plygnLa : 37.4804416241219
},
{
setSeqNo : 1,
plygnSeqNo : 1960,
plygnLo : 126.874198851709,
plygnLa : 37.480479598756
},
{
setSeqNo : 1,
plygnSeqNo : 1961,
plygnLo : 126.874178943482,
plygnLa : 37.480552495735
},
{
setSeqNo : 1,
plygnSeqNo : 1962,
plygnLo : 126.874207818476,
plygnLa : 37.4806057386524
},
{
setSeqNo : 1,
plygnSeqNo : 1963,
plygnLo : 126.874181775503,
plygnLa : 37.480655842589
},
{
setSeqNo : 1,
plygnSeqNo : 1964,
plygnLo : 126.874136910841,
plygnLa : 37.4807571477229
},
{
setSeqNo : 1,
plygnSeqNo : 1965,
plygnLo : 126.874064550039,
plygnLa : 37.4809181231986
},
{
setSeqNo : 1,
plygnSeqNo : 1966,
plygnLo : 126.873992569679,
plygnLa : 37.4810751638118
},
{
setSeqNo : 1,
plygnSeqNo : 1967,
plygnLo : 126.873939195463,
plygnLa : 37.4811939210943
},
{
setSeqNo : 1,
plygnSeqNo : 1968,
plygnLo : 126.873879787308,
plygnLa : 37.4813233763759
},
{
setSeqNo : 1,
plygnSeqNo : 1969,
plygnLo : 126.87380993584,
plygnLa : 37.4814784338754
},
{
setSeqNo : 1,
plygnSeqNo : 1970,
plygnLo : 126.873755311566,
plygnLa : 37.4816005771751
},
{
setSeqNo : 1,
plygnSeqNo : 1971,
plygnLo : 126.873695370608,
plygnLa : 37.4817305994775
},
{
setSeqNo : 1,
plygnSeqNo : 1972,
plygnLo : 126.873629227855,
plygnLa : 37.4818783469529
},
{
setSeqNo : 1,
plygnSeqNo : 1973,
plygnLo : 126.873572668836,
plygnLa : 37.4820010459984
},
{
setSeqNo : 1,
plygnSeqNo : 1974,
plygnLo : 126.873516807979,
plygnLa : 37.4821254321551
},
{
setSeqNo : 1,
plygnSeqNo : 1975,
plygnLo : 126.873441800329,
plygnLa : 37.4822920447925
},
{
setSeqNo : 1,
plygnSeqNo : 1976,
plygnLo : 126.8733790137,
plygnLa : 37.4824335960367
},
{
setSeqNo : 1,
plygnSeqNo : 1977,
plygnLo : 126.873204363513,
plygnLa : 37.4822957245704
},
{
setSeqNo : 1,
plygnSeqNo : 1978,
plygnLo : 126.873189007945,
plygnLa : 37.4822835993617
},
{
setSeqNo : 1,
plygnSeqNo : 1979,
plygnLo : 126.872971386266,
plygnLa : 37.482270415167
},
{
setSeqNo : 1,
plygnSeqNo : 1980,
plygnLo : 126.872744296539,
plygnLa : 37.4824250324083
},
{
setSeqNo : 1,
plygnSeqNo : 1981,
plygnLo : 126.87276861128,
plygnLa : 37.4826655076585
},
{
setSeqNo : 1,
plygnSeqNo : 1982,
plygnLo : 126.872780562627,
plygnLa : 37.4828029232413
},
{
setSeqNo : 1,
plygnSeqNo : 1983,
plygnLo : 126.872778704476,
plygnLa : 37.4829642545162
},
{
setSeqNo : 1,
plygnSeqNo : 1984,
plygnLo : 126.872772951174,
plygnLa : 37.4831278344497
},
{
setSeqNo : 1,
plygnSeqNo : 1985,
plygnLo : 126.87276851673,
plygnLa : 37.4832339847501
},
{
setSeqNo : 1,
plygnSeqNo : 1986,
plygnLo : 126.872765086182,
plygnLa : 37.4833826472135
},
{
setSeqNo : 1,
plygnSeqNo : 1987,
plygnLo : 126.872786634539,
plygnLa : 37.4834888166182
},
{
setSeqNo : 1,
plygnSeqNo : 1988,
plygnLo : 126.87280070697,
plygnLa : 37.48352430571
},
{
setSeqNo : 1,
plygnSeqNo : 1989,
plygnLo : 126.872857543459,
plygnLa : 37.4836566974164
},
{
setSeqNo : 1,
plygnSeqNo : 1990,
plygnLo : 126.872873242159,
plygnLa : 37.4836730589417
},
{
setSeqNo : 1,
plygnSeqNo : 1991,
plygnLo : 126.872946946784,
plygnLa : 37.4837533733375
},
{
setSeqNo : 1,
plygnSeqNo : 1992,
plygnLo : 126.873010987212,
plygnLa : 37.4838046906031
},
{
setSeqNo : 1,
plygnSeqNo : 1993,
plygnLo : 126.873147710497,
plygnLa : 37.4839146525832
},
{
setSeqNo : 1,
plygnSeqNo : 1994,
plygnLo : 126.873234124656,
plygnLa : 37.4840009020614
},
{
setSeqNo : 1,
plygnSeqNo : 1995,
plygnLo : 126.873295092818,
plygnLa : 37.4840916261515
},
{
setSeqNo : 1,
plygnSeqNo : 1996,
plygnLo : 126.873304762093,
plygnLa : 37.4841226136568
},
{
setSeqNo : 1,
plygnSeqNo : 1997,
plygnLo : 126.873297414204,
plygnLa : 37.4841811699051
},
{
setSeqNo : 1,
plygnSeqNo : 1998,
plygnLo : 126.873190436375,
plygnLa : 37.4842390606305
},
{
setSeqNo : 1,
plygnSeqNo : 1999,
plygnLo : 126.873144295262,
plygnLa : 37.4842573099946
},
{
setSeqNo : 1,
plygnSeqNo : 2000,
plygnLo : 126.872976368113,
plygnLa : 37.4843131590257
},
{
setSeqNo : 1,
plygnSeqNo : 2001,
plygnLo : 126.872783526992,
plygnLa : 37.4843703884486
},
{
setSeqNo : 1,
plygnSeqNo : 2002,
plygnLo : 126.872747308621,
plygnLa : 37.4843731614375
},
{
setSeqNo : 1,
plygnSeqNo : 2003,
plygnLo : 126.872443235527,
plygnLa : 37.484396200795
},
{
setSeqNo : 1,
plygnSeqNo : 2004,
plygnLo : 126.872208380773,
plygnLa : 37.484433390489
},
{
setSeqNo : 1,
plygnSeqNo : 2005,
plygnLo : 126.872013650922,
plygnLa : 37.48466180607
},
{
setSeqNo : 1,
plygnSeqNo : 2006,
plygnLo : 126.871895142312,
plygnLa : 37.484847505782
},
{
setSeqNo : 1,
plygnSeqNo : 2007,
plygnLo : 126.871797193369,
plygnLa : 37.4849974701035
},
{
setSeqNo : 1,
plygnSeqNo : 2008,
plygnLo : 126.871762623237,
plygnLa : 37.4852694251076
},
{
setSeqNo : 1,
plygnSeqNo : 2009,
plygnLo : 126.872031478139,
plygnLa : 37.4856002708837
},
{
setSeqNo : 1,
plygnSeqNo : 2010,
plygnLo : 126.872232231082,
plygnLa : 37.4857621121853
},
{
setSeqNo : 1,
plygnSeqNo : 2011,
plygnLo : 126.872377556817,
plygnLa : 37.4860128567287
},
{
setSeqNo : 1,
plygnSeqNo : 2012,
plygnLo : 126.872444696371,
plygnLa : 37.4861100770964
},
{
setSeqNo : 1,
plygnSeqNo : 2013,
plygnLo : 126.872614171555,
plygnLa : 37.486190782621
},
{
setSeqNo : 1,
plygnSeqNo : 2014,
plygnLo : 126.872673821649,
plygnLa : 37.4862201320785
},
{
setSeqNo : 1,
plygnSeqNo : 2015,
plygnLo : 126.872686715005,
plygnLa : 37.4862243706256
},
{
setSeqNo : 1,
plygnSeqNo : 2016,
plygnLo : 126.872734560192,
plygnLa : 37.4862401909651
},
{
setSeqNo : 1,
plygnSeqNo : 2017,
plygnLo : 126.872895323557,
plygnLa : 37.4862519075359
},
{
setSeqNo : 1,
plygnSeqNo : 2018,
plygnLo : 126.873042222903,
plygnLa : 37.4861980073533
},
{
setSeqNo : 1,
plygnSeqNo : 2019,
plygnLo : 126.873137176491,
plygnLa : 37.4861519344357
},
{
setSeqNo : 1,
plygnSeqNo : 2020,
plygnLo : 126.873214148964,
plygnLa : 37.4860748749544
},
{
setSeqNo : 1,
plygnSeqNo : 2021,
plygnLo : 126.873300330881,
plygnLa : 37.4859882378674
},
{
setSeqNo : 1,
plygnSeqNo : 2022,
plygnLo : 126.873436089365,
plygnLa : 37.4858436667462
},
{
setSeqNo : 1,
plygnSeqNo : 2023,
plygnLo : 126.873558027837,
plygnLa : 37.4857125947704
},
{
setSeqNo : 1,
plygnSeqNo : 2024,
plygnLo : 126.873624942274,
plygnLa : 37.4856402987352
},
{
setSeqNo : 1,
plygnSeqNo : 2025,
plygnLo : 126.87366728431,
plygnLa : 37.4855671385029
},
{
setSeqNo : 1,
plygnSeqNo : 2026,
plygnLo : 126.873751274256,
plygnLa : 37.4854264477775
},
{
setSeqNo : 1,
plygnSeqNo : 2027,
plygnLo : 126.873813106025,
plygnLa : 37.4853217729606
},
{
setSeqNo : 1,
plygnSeqNo : 2028,
plygnLo : 126.873939549664,
plygnLa : 37.4852487035077
},
{
setSeqNo : 1,
plygnSeqNo : 2029,
plygnLo : 126.874090326056,
plygnLa : 37.4852004466628
},
{
setSeqNo : 1,
plygnSeqNo : 2030,
plygnLo : 126.874125848354,
plygnLa : 37.4851892133231
},
{
setSeqNo : 1,
plygnSeqNo : 2031,
plygnLo : 126.874219492076,
plygnLa : 37.4851876287254
},
{
setSeqNo : 1,
plygnSeqNo : 2032,
plygnLo : 126.874420909998,
plygnLa : 37.4852737200681
},
{
setSeqNo : 1,
plygnSeqNo : 2033,
plygnLo : 126.87455644229,
plygnLa : 37.4853667869023
},
{
setSeqNo : 1,
plygnSeqNo : 2034,
plygnLo : 126.874591377626,
plygnLa : 37.4853887811738
},
{
setSeqNo : 1,
plygnSeqNo : 2035,
plygnLo : 126.874724023656,
plygnLa : 37.4855181551999
},
{
setSeqNo : 1,
plygnSeqNo : 2036,
plygnLo : 126.874778157722,
plygnLa : 37.4855731286892
},
{
setSeqNo : 1,
plygnSeqNo : 2037,
plygnLo : 126.87485677311,
plygnLa : 37.4856734490755
},
{
setSeqNo : 1,
plygnSeqNo : 2038,
plygnLo : 126.874925445611,
plygnLa : 37.4858165564626
},
{
setSeqNo : 1,
plygnSeqNo : 2039,
plygnLo : 126.874990228161,
plygnLa : 37.4859540185635
},
{
setSeqNo : 1,
plygnSeqNo : 2040,
plygnLo : 126.874994464779,
plygnLa : 37.4859562855608
},
{
setSeqNo : 1,
plygnSeqNo : 2041,
plygnLo : 126.875001323788,
plygnLa : 37.4859717726208
},
{
setSeqNo : 1,
plygnSeqNo : 2042,
plygnLo : 126.875022621119,
plygnLa : 37.486014312336
},
{
setSeqNo : 1,
plygnSeqNo : 2043,
plygnLo : 126.875017971086,
plygnLa : 37.4860500679565
},
{
setSeqNo : 1,
plygnSeqNo : 2044,
plygnLo : 126.87498901408,
plygnLa : 37.4862581060397
},
{
setSeqNo : 1,
plygnSeqNo : 2045,
plygnLo : 126.87498932809,
plygnLa : 37.4862730358384
},
{
setSeqNo : 1,
plygnSeqNo : 2046,
plygnLo : 126.874998321789,
plygnLa : 37.4864909698543
},
{
setSeqNo : 1,
plygnSeqNo : 2047,
plygnLo : 126.875013431995,
plygnLa : 37.4865427946127
},
{
setSeqNo : 1,
plygnSeqNo : 2048,
plygnLo : 126.875050516577,
plygnLa : 37.4866574321342
},
{
setSeqNo : 1,
plygnSeqNo : 2049,
plygnLo : 126.875121384517,
plygnLa : 37.4867535275099
},
{
setSeqNo : 1,
plygnSeqNo : 2050,
plygnLo : 126.875123494389,
plygnLa : 37.4867563399987
},
{
setSeqNo : 1,
plygnSeqNo : 2051,
plygnLo : 126.875139161339,
plygnLa : 37.4867923978286
},
{
setSeqNo : 1,
plygnSeqNo : 2052,
plygnLo : 126.875362989601,
plygnLa : 37.4869013149009
},
{
setSeqNo : 1,
plygnSeqNo : 2053,
plygnLo : 126.875974257495,
plygnLa : 37.4869112635359
},
{
setSeqNo : 1,
plygnSeqNo : 2054,
plygnLo : 126.876261853596,
plygnLa : 37.4872395882444
},
{
setSeqNo : 1,
plygnSeqNo : 2055,
plygnLo : 126.876688734078,
plygnLa : 37.4878527290203
},
{
setSeqNo : 1,
plygnSeqNo : 2056,
plygnLo : 126.876698542717,
plygnLa : 37.487903977643
},
{
setSeqNo : 1,
plygnSeqNo : 2057,
plygnLo : 126.876760025351,
plygnLa : 37.4881174725725
},
{
setSeqNo : 1,
plygnSeqNo : 2058,
plygnLo : 126.876767979365,
plygnLa : 37.4882168709339
},
{
setSeqNo : 1,
plygnSeqNo : 2059,
plygnLo : 126.876769379964,
plygnLa : 37.4882236291289
},
{
setSeqNo : 1,
plygnSeqNo : 2060,
plygnLo : 126.876800253894,
plygnLa : 37.4883571098294
},
{
setSeqNo : 1,
plygnSeqNo : 2061,
plygnLo : 126.87679035449,
plygnLa : 37.4885708157154
},
{
setSeqNo : 1,
plygnSeqNo : 2062,
plygnLo : 126.876668365622,
plygnLa : 37.4887317414667
},
{
setSeqNo : 1,
plygnSeqNo : 2063,
plygnLo : 126.876522961049,
plygnLa : 37.4888365983643
},
{
setSeqNo : 1,
plygnSeqNo : 2064,
plygnLo : 126.87638214802,
plygnLa : 37.4889412003942
},
{
setSeqNo : 1,
plygnSeqNo : 2065,
plygnLo : 126.876095791606,
plygnLa : 37.4890298596746
},
{
setSeqNo : 1,
plygnSeqNo : 2066,
plygnLo : 126.876043468409,
plygnLa : 37.4890472753914
},
{
setSeqNo : 1,
plygnSeqNo : 2067,
plygnLo : 126.875816823926,
plygnLa : 37.4890281682451
},
{
setSeqNo : 1,
plygnSeqNo : 2068,
plygnLo : 126.87563135957,
plygnLa : 37.4888953524874
},
{
setSeqNo : 1,
plygnSeqNo : 2069,
plygnLo : 126.875372137983,
plygnLa : 37.4886084491783
},
{
setSeqNo : 1,
plygnSeqNo : 2070,
plygnLo : 126.875189450532,
plygnLa : 37.4885071717042
},
{
setSeqNo : 1,
plygnSeqNo : 2071,
plygnLo : 126.874997419508,
plygnLa : 37.4884945770924
},
{
setSeqNo : 1,
plygnSeqNo : 2072,
plygnLo : 126.87471601491,
plygnLa : 37.4885773391422
},
{
setSeqNo : 1,
plygnSeqNo : 2073,
plygnLo : 126.874566814185,
plygnLa : 37.4887334485144
},
{
setSeqNo : 1,
plygnSeqNo : 2074,
plygnLo : 126.874494874648,
plygnLa : 37.4888611948546
},
{
setSeqNo : 1,
plygnSeqNo : 2075,
plygnLo : 126.874344162346,
plygnLa : 37.4888601860926
},
{
setSeqNo : 1,
plygnSeqNo : 2076,
plygnLo : 126.874072029683,
plygnLa : 37.4887956965601
},
{
setSeqNo : 1,
plygnSeqNo : 2077,
plygnLo : 126.873730583999,
plygnLa : 37.48864497762
},
{
setSeqNo : 1,
plygnSeqNo : 2078,
plygnLo : 126.873575290172,
plygnLa : 37.4885403472612
},
{
setSeqNo : 1,
plygnSeqNo : 2079,
plygnLo : 126.873479462744,
plygnLa : 37.488479426805
},
{
setSeqNo : 1,
plygnSeqNo : 2080,
plygnLo : 126.873269527413,
plygnLa : 37.4882981436552
},
{
setSeqNo : 1,
plygnSeqNo : 2081,
plygnLo : 126.873077747384,
plygnLa : 37.4882528946178
},
{
setSeqNo : 1,
plygnSeqNo : 2082,
plygnLo : 126.872955400678,
plygnLa : 37.4883006298426
},
{
setSeqNo : 1,
plygnSeqNo : 2083,
plygnLo : 126.872922521421,
plygnLa : 37.4883135432305
},
{
setSeqNo : 1,
plygnSeqNo : 2084,
plygnLo : 126.8727484719,
plygnLa : 37.4884307707316
},
{
setSeqNo : 1,
plygnSeqNo : 2085,
plygnLo : 126.872669110946,
plygnLa : 37.4885540038901
},
{
setSeqNo : 1,
plygnSeqNo : 2086,
plygnLo : 126.872683392262,
plygnLa : 37.488777864685
},
{
setSeqNo : 1,
plygnSeqNo : 2087,
plygnLo : 126.87263992952,
plygnLa : 37.4889813886908
},
{
setSeqNo : 1,
plygnSeqNo : 2088,
plygnLo : 126.872457746621,
plygnLa : 37.4892044668138
},
{
setSeqNo : 1,
plygnSeqNo : 2089,
plygnLo : 126.872445316789,
plygnLa : 37.4892404929141
},
{
setSeqNo : 1,
plygnSeqNo : 2090,
plygnLo : 126.87241371613,
plygnLa : 37.4893308389621
},
{
setSeqNo : 1,
plygnSeqNo : 2091,
plygnLo : 126.872440397918,
plygnLa : 37.4895355645413
},
{
setSeqNo : 1,
plygnSeqNo : 2092,
plygnLo : 126.87244515861,
plygnLa : 37.4895420490579
},
{
setSeqNo : 1,
plygnSeqNo : 2093,
plygnLo : 126.872671486236,
plygnLa : 37.4898449687034
},
{
setSeqNo : 1,
plygnSeqNo : 2094,
plygnLo : 126.872676246295,
plygnLa : 37.4898514510065
},
{
setSeqNo : 1,
plygnSeqNo : 2095,
plygnLo : 126.872770591419,
plygnLa : 37.489958818298
},
{
setSeqNo : 1,
plygnSeqNo : 2096,
plygnLo : 126.872839221782,
plygnLa : 37.4900143762867
},
{
setSeqNo : 1,
plygnSeqNo : 2097,
plygnLo : 126.873149307539,
plygnLa : 37.4902095375248
},
{
setSeqNo : 1,
plygnSeqNo : 2098,
plygnLo : 126.873276380558,
plygnLa : 37.4902893701174
},
{
setSeqNo : 1,
plygnSeqNo : 2099,
plygnLo : 126.873368436597,
plygnLa : 37.4903866153605
},
{
setSeqNo : 1,
plygnSeqNo : 2100,
plygnLo : 126.873576931748,
plygnLa : 37.4904817250861
},
{
setSeqNo : 1,
plygnSeqNo : 2101,
plygnLo : 126.873752737131,
plygnLa : 37.4904757165521
},
{
setSeqNo : 1,
plygnSeqNo : 2102,
plygnLo : 126.873933216887,
plygnLa : 37.4904288981749
},
{
setSeqNo : 1,
plygnSeqNo : 2103,
plygnLo : 126.874020678658,
plygnLa : 37.4903160701706
},
{
setSeqNo : 1,
plygnSeqNo : 2104,
plygnLo : 126.874090641339,
plygnLa : 37.490214512039
},
{
setSeqNo : 1,
plygnSeqNo : 2105,
plygnLo : 126.874091880921,
plygnLa : 37.4902094314352
},
{
setSeqNo : 1,
plygnSeqNo : 2106,
plygnLo : 126.874149157057,
plygnLa : 37.4899805943095
},
{
setSeqNo : 1,
plygnSeqNo : 2107,
plygnLo : 126.874110470399,
plygnLa : 37.4897772694437
},
{
setSeqNo : 1,
plygnSeqNo : 2108,
plygnLo : 126.874322439818,
plygnLa : 37.4896955616263
},
{
setSeqNo : 1,
plygnSeqNo : 2109,
plygnLo : 126.874579194206,
plygnLa : 37.489769323255
},
{
setSeqNo : 1,
plygnSeqNo : 2110,
plygnLo : 126.874651239918,
plygnLa : 37.4898989101057
},
{
setSeqNo : 1,
plygnSeqNo : 2111,
plygnLo : 126.874620112892,
plygnLa : 37.4900253134157
},
{
setSeqNo : 1,
plygnSeqNo : 2112,
plygnLo : 126.87454589436,
plygnLa : 37.4901370110255
},
{
setSeqNo : 1,
plygnSeqNo : 2113,
plygnLo : 126.874497354227,
plygnLa : 37.4902093184306
},
{
setSeqNo : 1,
plygnSeqNo : 2114,
plygnLo : 126.874492400183,
plygnLa : 37.4902166382586
},
{
setSeqNo : 1,
plygnSeqNo : 2115,
plygnLo : 126.874427959454,
plygnLa : 37.4902892074839
},
{
setSeqNo : 1,
plygnSeqNo : 2116,
plygnLo : 126.874453699503,
plygnLa : 37.4904269086567
},
{
setSeqNo : 1,
plygnSeqNo : 2117,
plygnLo : 126.874580899917,
plygnLa : 37.4905391208328
},
{
setSeqNo : 1,
plygnSeqNo : 2118,
plygnLo : 126.874640357459,
plygnLa : 37.4905904145713
},
{
setSeqNo : 1,
plygnSeqNo : 2119,
plygnLo : 126.874667707397,
plygnLa : 37.49061241872
},
{
setSeqNo : 1,
plygnSeqNo : 2120,
plygnLo : 126.874839559608,
plygnLa : 37.490745501168
},
{
setSeqNo : 1,
plygnSeqNo : 2121,
plygnLo : 126.874667845973,
plygnLa : 37.4908444102904
},
{
setSeqNo : 1,
plygnSeqNo : 2122,
plygnLo : 126.874534592238,
plygnLa : 37.4910684085071
},
{
setSeqNo : 1,
plygnSeqNo : 2123,
plygnLo : 126.874372681265,
plygnLa : 37.4912214035646
},
{
setSeqNo : 1,
plygnSeqNo : 2124,
plygnLo : 126.874130073142,
plygnLa : 37.4913377054915
},
{
setSeqNo : 1,
plygnSeqNo : 2125,
plygnLo : 126.873951848118,
plygnLa : 37.4913079501782
},
{
setSeqNo : 1,
plygnSeqNo : 2126,
plygnLo : 126.873768427243,
plygnLa : 37.4912224364908
},
{
setSeqNo : 1,
plygnSeqNo : 2127,
plygnLo : 126.873559684288,
plygnLa : 37.4910667798286
},
{
setSeqNo : 1,
plygnSeqNo : 2128,
plygnLo : 126.873297692663,
plygnLa : 37.4908454800685
},
{
setSeqNo : 1,
plygnSeqNo : 2129,
plygnLo : 126.873083436058,
plygnLa : 37.4908075227723
},
{
setSeqNo : 1,
plygnSeqNo : 2130,
plygnLo : 126.87286394967,
plygnLa : 37.4908385219307
},
{
setSeqNo : 1,
plygnSeqNo : 2131,
plygnLo : 126.872716985914,
plygnLa : 37.4908195127009
},
{
setSeqNo : 1,
plygnSeqNo : 2132,
plygnLo : 126.87253885686,
plygnLa : 37.4907416072729
},
{
setSeqNo : 1,
plygnSeqNo : 2133,
plygnLo : 126.872447761808,
plygnLa : 37.4906970168118
},
{
setSeqNo : 1,
plygnSeqNo : 2134,
plygnLo : 126.872254635671,
plygnLa : 37.4906024802443
},
{
setSeqNo : 1,
plygnSeqNo : 2135,
plygnLo : 126.872178983661,
plygnLa : 37.4906190110768
},
{
setSeqNo : 1,
plygnSeqNo : 2136,
plygnLo : 126.872122049164,
plygnLa : 37.4906454195793
},
{
setSeqNo : 1,
plygnSeqNo : 2137,
plygnLo : 126.872016463578,
plygnLa : 37.4907154108791
},
{
setSeqNo : 1,
plygnSeqNo : 2138,
plygnLo : 126.871949983814,
plygnLa : 37.4907372865447
},
{
setSeqNo : 1,
plygnSeqNo : 2139,
plygnLo : 126.871834026671,
plygnLa : 37.4907757494239
},
{
setSeqNo : 1,
plygnSeqNo : 2140,
plygnLo : 126.871770934294,
plygnLa : 37.4907810237369
},
{
setSeqNo : 1,
plygnSeqNo : 2141,
plygnLo : 126.871689148549,
plygnLa : 37.4907730408336
},
{
setSeqNo : 1,
plygnSeqNo : 2142,
plygnLo : 126.871567964223,
plygnLa : 37.4907613746995
},
{
setSeqNo : 1,
plygnSeqNo : 2143,
plygnLo : 126.871505661162,
plygnLa : 37.490721886303
},
{
setSeqNo : 1,
plygnSeqNo : 2144,
plygnLo : 126.871480291845,
plygnLa : 37.4906799085775
},
{
setSeqNo : 1,
plygnSeqNo : 2145,
plygnLo : 126.871472903652,
plygnLa : 37.4905658697866
},
{
setSeqNo : 1,
plygnSeqNo : 2146,
plygnLo : 126.871503103196,
plygnLa : 37.490468749255
},
{
setSeqNo : 1,
plygnSeqNo : 2147,
plygnLo : 126.871557531703,
plygnLa : 37.4903609863574
},
{
setSeqNo : 1,
plygnSeqNo : 2148,
plygnLo : 126.871577232397,
plygnLa : 37.490209243489
},
{
setSeqNo : 1,
plygnSeqNo : 2149,
plygnLo : 126.871547765136,
plygnLa : 37.4900853238602
},
{
setSeqNo : 1,
plygnSeqNo : 2150,
plygnLo : 126.871505681113,
plygnLa : 37.489998834837
},
{
setSeqNo : 1,
plygnSeqNo : 2151,
plygnLo : 126.871342374588,
plygnLa : 37.4898336635838
},
{
setSeqNo : 1,
plygnSeqNo : 2152,
plygnLo : 126.871259610561,
plygnLa : 37.4897707824779
},
{
setSeqNo : 1,
plygnSeqNo : 2153,
plygnLo : 126.871080270006,
plygnLa : 37.4896832871164
},
{
setSeqNo : 1,
plygnSeqNo : 2154,
plygnLo : 126.870945896737,
plygnLa : 37.4896372591828
},
{
setSeqNo : 1,
plygnSeqNo : 2155,
plygnLo : 126.870658212714,
plygnLa : 37.4895609141829
},
{
setSeqNo : 1,
plygnSeqNo : 2156,
plygnLo : 126.87042098485,
plygnLa : 37.4895358746825
},
{
setSeqNo : 1,
plygnSeqNo : 2157,
plygnLo : 126.870375567097,
plygnLa : 37.4895405987766
},
{
setSeqNo : 1,
plygnSeqNo : 2158,
plygnLo : 126.870334750593,
plygnLa : 37.4895447889823
},
{
setSeqNo : 1,
plygnSeqNo : 2159,
plygnLo : 126.870228124435,
plygnLa : 37.4895961981275
},
{
setSeqNo : 1,
plygnSeqNo : 2160,
plygnLo : 126.870170414798,
plygnLa : 37.4896656821463
},
{
setSeqNo : 1,
plygnSeqNo : 2161,
plygnLo : 126.870136218492,
plygnLa : 37.4897191360063
},
{
setSeqNo : 1,
plygnSeqNo : 2162,
plygnLo : 126.870125374709,
plygnLa : 37.4897571370715
},
{
setSeqNo : 1,
plygnSeqNo : 2163,
plygnLo : 126.870134118879,
plygnLa : 37.4898075316614
},
{
setSeqNo : 1,
plygnSeqNo : 2164,
plygnLo : 126.870165911229,
plygnLa : 37.4899126056902
},
{
setSeqNo : 1,
plygnSeqNo : 2165,
plygnLo : 126.870216136414,
plygnLa : 37.489984460776
},
{
setSeqNo : 1,
plygnSeqNo : 2166,
plygnLo : 126.870234402729,
plygnLa : 37.4900528864346
},
{
setSeqNo : 1,
plygnSeqNo : 2167,
plygnLo : 126.870233404061,
plygnLa : 37.4901128736313
},
{
setSeqNo : 1,
plygnSeqNo : 2168,
plygnLo : 126.87021040214,
plygnLa : 37.4901342461906
},
{
setSeqNo : 1,
plygnSeqNo : 2169,
plygnLo : 126.870165449677,
plygnLa : 37.4901764264025
},
{
setSeqNo : 1,
plygnSeqNo : 2170,
plygnLo : 126.870113276892,
plygnLa : 37.4902092998449
},
{
setSeqNo : 1,
plygnSeqNo : 2171,
plygnLo : 126.870064988306,
plygnLa : 37.490237411584
},
{
setSeqNo : 1,
plygnSeqNo : 2172,
plygnLo : 126.869968644217,
plygnLa : 37.4902674340461
},
{
setSeqNo : 1,
plygnSeqNo : 2173,
plygnLo : 126.869876900362,
plygnLa : 37.4902960544457
},
{
setSeqNo : 1,
plygnSeqNo : 2174,
plygnLo : 126.869786741751,
plygnLa : 37.4903252372238
},
{
setSeqNo : 1,
plygnSeqNo : 2175,
plygnLo : 126.869759701458,
plygnLa : 37.4903333693211
},
{
setSeqNo : 1,
plygnSeqNo : 2176,
plygnLo : 126.869727863816,
plygnLa : 37.490356409443
},
{
setSeqNo : 1,
plygnSeqNo : 2177,
plygnLo : 126.869702743076,
plygnLa : 37.4903741308534
},
{
setSeqNo : 1,
plygnSeqNo : 2178,
plygnLo : 126.869680378961,
plygnLa : 37.4904309865159
},
{
setSeqNo : 1,
plygnSeqNo : 2179,
plygnLo : 126.869684340669,
plygnLa : 37.4904864372844
},
{
setSeqNo : 1,
plygnSeqNo : 2180,
plygnLo : 126.869726425465,
plygnLa : 37.4905709722895
},
{
setSeqNo : 1,
plygnSeqNo : 2181,
plygnLo : 126.869736114717,
plygnLa : 37.4905842180546
},
{
setSeqNo : 1,
plygnSeqNo : 2182,
plygnLo : 126.869789898191,
plygnLa : 37.4906391666062
},
{
setSeqNo : 1,
plygnSeqNo : 2183,
plygnLo : 126.869863099605,
plygnLa : 37.4907113286965
},
{
setSeqNo : 1,
plygnSeqNo : 2184,
plygnLo : 126.869910194492,
plygnLa : 37.4907575575137
},
{
setSeqNo : 1,
plygnSeqNo : 2185,
plygnLo : 126.869950204497,
plygnLa : 37.4908068859911
},
{
setSeqNo : 1,
plygnSeqNo : 2186,
plygnLo : 126.869993039259,
plygnLa : 37.4908700034417
},
{
setSeqNo : 1,
plygnSeqNo : 2187,
plygnLo : 126.869993184516,
plygnLa : 37.4909876835905
},
{
setSeqNo : 1,
plygnSeqNo : 2188,
plygnLo : 126.869993119308,
plygnLa : 37.49102429964
},
{
setSeqNo : 1,
plygnSeqNo : 2189,
plygnLo : 126.869950184346,
plygnLa : 37.4911213810063
},
{
setSeqNo : 1,
plygnSeqNo : 2190,
plygnLo : 126.869892002602,
plygnLa : 37.4912533838617
},
{
setSeqNo : 1,
plygnSeqNo : 2191,
plygnLo : 126.869799444099,
plygnLa : 37.4913461926925
},
{
setSeqNo : 1,
plygnSeqNo : 2192,
plygnLo : 126.869688005898,
plygnLa : 37.4914189938073
},
{
setSeqNo : 1,
plygnSeqNo : 2193,
plygnLo : 126.869649968641,
plygnLa : 37.4914437293727
},
{
setSeqNo : 1,
plygnSeqNo : 2194,
plygnLo : 126.869581558418,
plygnLa : 37.4914689806255
},
{
setSeqNo : 1,
plygnSeqNo : 2195,
plygnLo : 126.869525864267,
plygnLa : 37.4914908932189
},
{
setSeqNo : 1,
plygnSeqNo : 2196,
plygnLo : 126.869413362811,
plygnLa : 37.4915625683063
},
{
setSeqNo : 1,
plygnSeqNo : 2197,
plygnLo : 126.869345918191,
plygnLa : 37.4916365287014
},
{
setSeqNo : 1,
plygnSeqNo : 2198,
plygnLo : 126.869304534976,
plygnLa : 37.4917575669102
},
{
setSeqNo : 1,
plygnSeqNo : 2199,
plygnLo : 126.869298194394,
plygnLa : 37.4918518671113
},
{
setSeqNo : 1,
plygnSeqNo : 2200,
plygnLo : 126.869306268681,
plygnLa : 37.4918769516081
},
{
setSeqNo : 1,
plygnSeqNo : 2201,
plygnLo : 126.86936626641,
plygnLa : 37.4920186469928
},
{
setSeqNo : 1,
plygnSeqNo : 2202,
plygnLo : 126.869437364706,
plygnLa : 37.4920851750998
},
{
setSeqNo : 1,
plygnSeqNo : 2203,
plygnLo : 126.869462928632,
plygnLa : 37.4921127922682
},
{
setSeqNo : 1,
plygnSeqNo : 2204,
plygnLo : 126.869512185798,
plygnLa : 37.4921314354244
},
{
setSeqNo : 1,
plygnSeqNo : 2205,
plygnLo : 126.869615829635,
plygnLa : 37.4921712477942
},
{
setSeqNo : 1,
plygnSeqNo : 2206,
plygnLo : 126.869665101558,
plygnLa : 37.492181160753
},
{
setSeqNo : 1,
plygnSeqNo : 2207,
plygnLo : 126.869681533566,
plygnLa : 37.4921808803819
},
{
setSeqNo : 1,
plygnSeqNo : 2208,
plygnLo : 126.869888266457,
plygnLa : 37.4921766061324
},
{
setSeqNo : 1,
plygnSeqNo : 2209,
plygnLo : 126.869976913265,
plygnLa : 37.4922054387698
},
{
setSeqNo : 1,
plygnSeqNo : 2210,
plygnLo : 126.870022396507,
plygnLa : 37.4922620808405
},
{
setSeqNo : 1,
plygnSeqNo : 2211,
plygnLo : 126.870057403469,
plygnLa : 37.4923522191259
},
{
setSeqNo : 1,
plygnSeqNo : 2212,
plygnLo : 126.870054421196,
plygnLa : 37.4924352791518
},
{
setSeqNo : 1,
plygnSeqNo : 2213,
plygnLo : 126.870013531133,
plygnLa : 37.4924814106146
},
{
setSeqNo : 1,
plygnSeqNo : 2214,
plygnLo : 126.869959236547,
plygnLa : 37.4925100651647
},
{
setSeqNo : 1,
plygnSeqNo : 2215,
plygnLo : 126.869561399452,
plygnLa : 37.4925794398349
},
{
setSeqNo : 1,
plygnSeqNo : 2216,
plygnLo : 126.869537726002,
plygnLa : 37.4925830885761
},
{
setSeqNo : 1,
plygnSeqNo : 2217,
plygnLo : 126.869455192909,
plygnLa : 37.4925953860893
},
{
setSeqNo : 1,
plygnSeqNo : 2218,
plygnLo : 126.869405125846,
plygnLa : 37.4926316488625
},
{
setSeqNo : 1,
plygnSeqNo : 2219,
plygnLo : 126.869381568589,
plygnLa : 37.4926648336942
},
{
setSeqNo : 1,
plygnSeqNo : 2220,
plygnLo : 126.869368924422,
plygnLa : 37.4927174825046
},
{
setSeqNo : 1,
plygnSeqNo : 2221,
plygnLo : 126.869373419678,
plygnLa : 37.4927721158475
},
{
setSeqNo : 1,
plygnSeqNo : 2222,
plygnLo : 126.869388515756,
plygnLa : 37.492829571344
},
{
setSeqNo : 1,
plygnSeqNo : 2223,
plygnLo : 126.86941846126,
plygnLa : 37.492885627869
},
{
setSeqNo : 1,
plygnSeqNo : 2224,
plygnLo : 126.869433429913,
plygnLa : 37.4929132423994
},
{
setSeqNo : 1,
plygnSeqNo : 2225,
plygnLo : 126.869580441481,
plygnLa : 37.4931068425956
},
{
setSeqNo : 1,
plygnSeqNo : 2226,
plygnLo : 126.870066896032,
plygnLa : 37.4934858048405
},
{
setSeqNo : 1,
plygnSeqNo : 2227,
plygnLo : 126.870016591718,
plygnLa : 37.493657217347
},
{
setSeqNo : 1,
plygnSeqNo : 2228,
plygnLo : 126.869854039726,
plygnLa : 37.4937606513417
},
{
setSeqNo : 1,
plygnSeqNo : 2229,
plygnLo : 126.869800220448,
plygnLa : 37.493815777897
},
{
setSeqNo : 1,
plygnSeqNo : 2230,
plygnLo : 126.869709456846,
plygnLa : 37.4940955455728
},
{
setSeqNo : 1,
plygnSeqNo : 2231,
plygnLo : 126.869502676127,
plygnLa : 37.4943284391517
},
{
setSeqNo : 1,
plygnSeqNo : 2232,
plygnLo : 126.869243100621,
plygnLa : 37.4945331241515
},
{
setSeqNo : 1,
plygnSeqNo : 2233,
plygnLo : 126.868807351655,
plygnLa : 37.4947601483215
},
{
setSeqNo : 1,
plygnSeqNo : 2234,
plygnLo : 126.868709197447,
plygnLa : 37.4948112871532
},
{
setSeqNo : 1,
plygnSeqNo : 2235,
plygnLo : 126.868483225262,
plygnLa : 37.4949974132736
},
{
setSeqNo : 1,
plygnSeqNo : 2236,
plygnLo : 126.868348926588,
plygnLa : 37.4951079312814
},
{
setSeqNo : 1,
plygnSeqNo : 2237,
plygnLo : 126.868294478992,
plygnLa : 37.4951261683825
},
{
setSeqNo : 1,
plygnSeqNo : 2238,
plygnLo : 126.868229454077,
plygnLa : 37.4951283480042
},
{
setSeqNo : 1,
plygnSeqNo : 2239,
plygnLo : 126.86799050657,
plygnLa : 37.4950616299122
},
{
setSeqNo : 1,
plygnSeqNo : 2240,
plygnLo : 126.86758862729,
plygnLa : 37.4948159317588
},
{
setSeqNo : 1,
plygnSeqNo : 2241,
plygnLo : 126.867610409106,
plygnLa : 37.4946881320304
},
{
setSeqNo : 1,
plygnSeqNo : 2242,
plygnLo : 126.86758892737,
plygnLa : 37.494646715101
},
{
setSeqNo : 1,
plygnSeqNo : 2243,
plygnLo : 126.867550983278,
plygnLa : 37.494624427055
},
{
setSeqNo : 1,
plygnSeqNo : 2244,
plygnLo : 126.867424703304,
plygnLa : 37.494595001041
},
{
setSeqNo : 1,
plygnSeqNo : 2245,
plygnLo : 126.867374221901,
plygnLa : 37.4945651033529
},
{
setSeqNo : 1,
plygnSeqNo : 2246,
plygnLo : 126.867327091194,
plygnLa : 37.4945385783559
},
{
setSeqNo : 1,
plygnSeqNo : 2247,
plygnLo : 126.867273783164,
plygnLa : 37.4945086764896
},
{
setSeqNo : 1,
plygnSeqNo : 2248,
plygnLo : 126.867223830328,
plygnLa : 37.4944798950562
},
{
setSeqNo : 1,
plygnSeqNo : 2249,
plygnLo : 126.867122173571,
plygnLa : 37.4944217830556
},
{
setSeqNo : 1,
plygnSeqNo : 2250,
plygnLo : 126.867075750061,
plygnLa : 37.4943991864621
},
{
setSeqNo : 1,
plygnSeqNo : 2251,
plygnLo : 126.867042371062,
plygnLa : 37.4943842379533
},
{
setSeqNo : 1,
plygnSeqNo : 2252,
plygnLo : 126.86698358473,
plygnLa : 37.4943579870554
},
{
setSeqNo : 1,
plygnSeqNo : 2253,
plygnLo : 126.866951627802,
plygnLa : 37.4943452835698
},
{
setSeqNo : 1,
plygnSeqNo : 2254,
plygnLo : 126.866891404523,
plygnLa : 37.4943249417063
},
{
setSeqNo : 1,
plygnSeqNo : 2255,
plygnLo : 126.866786783552,
plygnLa : 37.4942426067199
},
{
setSeqNo : 1,
plygnSeqNo : 2256,
plygnLo : 126.866775206951,
plygnLa : 37.4941966963578
},
{
setSeqNo : 1,
plygnSeqNo : 2257,
plygnLo : 126.866843871923,
plygnLa : 37.4941314533241
},
{
setSeqNo : 1,
plygnSeqNo : 2258,
plygnLo : 126.866907051711,
plygnLa : 37.4940797171057
},
{
setSeqNo : 1,
plygnSeqNo : 2259,
plygnLo : 126.866976648873,
plygnLa : 37.4939874433438
},
{
setSeqNo : 1,
plygnSeqNo : 2260,
plygnLo : 126.867035723308,
plygnLa : 37.4939545703421
},
{
setSeqNo : 1,
plygnSeqNo : 2261,
plygnLo : 126.867136230444,
plygnLa : 37.4939673527839
},
{
setSeqNo : 1,
plygnSeqNo : 2262,
plygnLo : 126.867216579662,
plygnLa : 37.4939944739047
},
{
setSeqNo : 1,
plygnSeqNo : 2263,
plygnLo : 126.86729154447,
plygnLa : 37.4940680366562
},
{
setSeqNo : 1,
plygnSeqNo : 2264,
plygnLo : 126.867300000137,
plygnLa : 37.4940765062726
},
{
setSeqNo : 1,
plygnSeqNo : 2265,
plygnLo : 126.867349566973,
plygnLa : 37.4941249900554
},
{
setSeqNo : 1,
plygnSeqNo : 2266,
plygnLo : 126.867420128963,
plygnLa : 37.4941870152172
},
{
setSeqNo : 1,
plygnSeqNo : 2267,
plygnLo : 126.867473426957,
plygnLa : 37.4942228353958
},
{
setSeqNo : 1,
plygnSeqNo : 2268,
plygnLo : 126.867613482474,
plygnLa : 37.4942584658863
},
{
setSeqNo : 1,
plygnSeqNo : 2269,
plygnLo : 126.867627268225,
plygnLa : 37.4942511666748
},
{
setSeqNo : 1,
plygnSeqNo : 2270,
plygnLo : 126.867751377443,
plygnLa : 37.4941096785878
},
{
setSeqNo : 1,
plygnSeqNo : 2271,
plygnLo : 126.867780770877,
plygnLa : 37.4940759251219
},
{
setSeqNo : 1,
plygnSeqNo : 2272,
plygnLo : 126.867771517465,
plygnLa : 37.4940077712781
},
{
setSeqNo : 1,
plygnSeqNo : 2273,
plygnLo : 126.867756015516,
plygnLa : 37.4938925979828
},
{
setSeqNo : 1,
plygnSeqNo : 2274,
plygnLo : 126.867749015602,
plygnLa : 37.493753782706
},
{
setSeqNo : 1,
plygnSeqNo : 2275,
plygnLo : 126.867764687824,
plygnLa : 37.4935823123814
},
{
setSeqNo : 1,
plygnSeqNo : 2276,
plygnLo : 126.867743552864,
plygnLa : 37.4935440138858
},
{
setSeqNo : 1,
plygnSeqNo : 2277,
plygnLo : 126.867670882536,
plygnLa : 37.4934724112005
},
{
setSeqNo : 1,
plygnSeqNo : 2278,
plygnLo : 126.867537489495,
plygnLa : 37.4933742751596
},
{
setSeqNo : 1,
plygnSeqNo : 2279,
plygnLo : 126.867473303714,
plygnLa : 37.4932038604846
},
{
setSeqNo : 1,
plygnSeqNo : 2280,
plygnLo : 126.867370000631,
plygnLa : 37.4930745041338
},
{
setSeqNo : 1,
plygnSeqNo : 2281,
plygnLo : 126.867159486375,
plygnLa : 37.4929216621889
},
{
setSeqNo : 1,
plygnSeqNo : 2282,
plygnLo : 126.867042053877,
plygnLa : 37.4928846422352
},
{
setSeqNo : 1,
plygnSeqNo : 2283,
plygnLo : 126.866955693199,
plygnLa : 37.492866803244
},
{
setSeqNo : 1,
plygnSeqNo : 2284,
plygnLo : 126.866834994158,
plygnLa : 37.4928796205882
},
{
setSeqNo : 1,
plygnSeqNo : 2285,
plygnLo : 126.866755806104,
plygnLa : 37.4928983895112
},
{
setSeqNo : 1,
plygnSeqNo : 2286,
plygnLo : 126.866602099351,
plygnLa : 37.4928920239106
},
{
setSeqNo : 1,
plygnSeqNo : 2287,
plygnLo : 126.866686074521,
plygnLa : 37.4926634910875
},
{
setSeqNo : 1,
plygnSeqNo : 2288,
plygnLo : 126.866585987746,
plygnLa : 37.492613821269
},
{
setSeqNo : 1,
plygnSeqNo : 2289,
plygnLo : 126.866499433859,
plygnLa : 37.4926038661008
},
{
setSeqNo : 1,
plygnSeqNo : 2290,
plygnLo : 126.866364027464,
plygnLa : 37.4926389035707
},
{
setSeqNo : 1,
plygnSeqNo : 2291,
plygnLo : 126.866303974484,
plygnLa : 37.4926315187257
},
{
setSeqNo : 1,
plygnSeqNo : 2292,
plygnLo : 126.866204808335,
plygnLa : 37.4925553795689
},
{
setSeqNo : 1,
plygnSeqNo : 2293,
plygnLo : 126.866081131984,
plygnLa : 37.4923626409014
},
{
setSeqNo : 1,
plygnSeqNo : 2294,
plygnLo : 126.865813668355,
plygnLa : 37.4921452645715
},
{
setSeqNo : 1,
plygnSeqNo : 2295,
plygnLo : 126.865552374363,
plygnLa : 37.4917440196859
},
{
setSeqNo : 1,
plygnSeqNo : 2296,
plygnLo : 126.865478090493,
plygnLa : 37.4915963954391
},
{
setSeqNo : 1,
plygnSeqNo : 2297,
plygnLo : 126.865404039642,
plygnLa : 37.4915081734834
},
{
setSeqNo : 1,
plygnSeqNo : 2298,
plygnLo : 126.865152108951,
plygnLa : 37.4915929205254
},
{
setSeqNo : 1,
plygnSeqNo : 2299,
plygnLo : 126.865053625172,
plygnLa : 37.4915412775101
},
{
setSeqNo : 1,
plygnSeqNo : 2300,
plygnLo : 126.864851586795,
plygnLa : 37.4913957581377
},
{
setSeqNo : 1,
plygnSeqNo : 2301,
plygnLo : 126.864795361561,
plygnLa : 37.4913236127265
},
{
setSeqNo : 1,
plygnSeqNo : 2302,
plygnLo : 126.864799358444,
plygnLa : 37.4912571687483
},
{
setSeqNo : 1,
plygnSeqNo : 2303,
plygnLo : 126.86476984527,
plygnLa : 37.4911656286339
},
{
setSeqNo : 1,
plygnSeqNo : 2304,
plygnLo : 126.864555446599,
plygnLa : 37.4910212217951
},
{
setSeqNo : 1,
plygnSeqNo : 2305,
plygnLo : 126.864496708113,
plygnLa : 37.4910684557548
},
{
setSeqNo : 1,
plygnSeqNo : 2306,
plygnLo : 126.86448937248,
plygnLa : 37.4911165972264
},
{
setSeqNo : 1,
plygnSeqNo : 2307,
plygnLo : 126.864518193673,
plygnLa : 37.4912030624742
},
{
setSeqNo : 1,
plygnSeqNo : 2308,
plygnLo : 126.86427987694,
plygnLa : 37.4910921341328
},
{
setSeqNo : 1,
plygnSeqNo : 2309,
plygnLo : 126.86415485857,
plygnLa : 37.4910505884814
},
{
setSeqNo : 1,
plygnSeqNo : 2310,
plygnLo : 126.864030000352,
plygnLa : 37.4910194852651
},
{
setSeqNo : 1,
plygnSeqNo : 2311,
plygnLo : 126.863690860561,
plygnLa : 37.4909731932702
},
{
setSeqNo : 1,
plygnSeqNo : 2312,
plygnLo : 126.863448343145,
plygnLa : 37.4909393931658
},
{
setSeqNo : 1,
plygnSeqNo : 2313,
plygnLo : 126.863291840034,
plygnLa : 37.4909186676396
},
{
setSeqNo : 1,
plygnSeqNo : 2314,
plygnLo : 126.863190628001,
plygnLa : 37.4909053032396
},
{
setSeqNo : 1,
plygnSeqNo : 2315,
plygnLo : 126.863113095723,
plygnLa : 37.4908914276986
},
{
setSeqNo : 1,
plygnSeqNo : 2316,
plygnLo : 126.863102674048,
plygnLa : 37.4908900104618
},
{
setSeqNo : 1,
plygnSeqNo : 2317,
plygnLo : 126.863028137618,
plygnLa : 37.4908761279101
},
{
setSeqNo : 1,
plygnSeqNo : 2318,
plygnLo : 126.862811087776,
plygnLa : 37.490828274536
},
{
setSeqNo : 1,
plygnSeqNo : 2319,
plygnLo : 126.862733755467,
plygnLa : 37.490804532469
},
{
setSeqNo : 1,
plygnSeqNo : 2320,
plygnLo : 126.86258684303,
plygnLa : 37.4907587602431
},
{
setSeqNo : 1,
plygnSeqNo : 2321,
plygnLo : 126.862387683712,
plygnLa : 37.490679110858
},
{
setSeqNo : 1,
plygnSeqNo : 2322,
plygnLo : 126.862174977004,
plygnLa : 37.4905774978259
},
{
setSeqNo : 1,
plygnSeqNo : 2323,
plygnLo : 126.86208955649,
plygnLa : 37.4905312300958
},
{
setSeqNo : 1,
plygnSeqNo : 2324,
plygnLo : 126.861950483583,
plygnLa : 37.4904480121494
},
{
setSeqNo : 1,
plygnSeqNo : 2325,
plygnLo : 126.861830319988,
plygnLa : 37.4903679054663
},
{
setSeqNo : 1,
plygnSeqNo : 2326,
plygnLo : 126.861768206609,
plygnLa : 37.4903261617933
},
{
setSeqNo : 1,
plygnSeqNo : 2327,
plygnLo : 126.861623033671,
plygnLa : 37.4902037865702
},
{
setSeqNo : 1,
plygnSeqNo : 2328,
plygnLo : 126.861481765836,
plygnLa : 37.4900673425737
},
{
setSeqNo : 1,
plygnSeqNo : 2329,
plygnLo : 126.861384424219,
plygnLa : 37.4899681180971
},
{
setSeqNo : 1,
plygnSeqNo : 2330,
plygnLo : 126.861119083647,
plygnLa : 37.489668220126
},
{
setSeqNo : 1,
plygnSeqNo : 2331,
plygnLo : 126.861025810864,
plygnLa : 37.4895583055285
},
{
setSeqNo : 1,
plygnSeqNo : 2332,
plygnLo : 126.861016479691,
plygnLa : 37.4895473110729
},
{
setSeqNo : 1,
plygnSeqNo : 2333,
plygnLo : 126.860686103079,
plygnLa : 37.4891682188542
},
{
setSeqNo : 1,
plygnSeqNo : 2334,
plygnLo : 126.860185956357,
plygnLa : 37.4885954859291
},
{
setSeqNo : 1,
plygnSeqNo : 2335,
plygnLo : 126.859256015931,
plygnLa : 37.4875311897408
},
{
setSeqNo : 1,
plygnSeqNo : 2336,
plygnLo : 126.859013788775,
plygnLa : 37.4872560928409
},
{
setSeqNo : 1,
plygnSeqNo : 2337,
plygnLo : 126.858545040201,
plygnLa : 37.4867211172363
},
{
setSeqNo : 1,
plygnSeqNo : 2338,
plygnLo : 126.858392551379,
plygnLa : 37.486551716101
},
{
setSeqNo : 1,
plygnSeqNo : 2339,
plygnLo : 126.858242529612,
plygnLa : 37.4863814704952
},
{
setSeqNo : 1,
plygnSeqNo : 2340,
plygnLo : 126.858225426713,
plygnLa : 37.486360329127
},
{
setSeqNo : 1,
plygnSeqNo : 2341,
plygnLo : 126.85811613282,
plygnLa : 37.4862374358767
},
{
setSeqNo : 1,
plygnSeqNo : 2342,
plygnLo : 126.85797103228,
plygnLa : 37.486084657837
},
{
setSeqNo : 1,
plygnSeqNo : 2343,
plygnLo : 126.857834300822,
plygnLa : 37.4859831285502
},
{
setSeqNo : 1,
plygnSeqNo : 2344,
plygnLo : 126.857721704541,
plygnLa : 37.4859199212312
},
{
setSeqNo : 1,
plygnSeqNo : 2345,
plygnLo : 126.857676887612,
plygnLa : 37.4858947929681
},
{
setSeqNo : 1,
plygnSeqNo : 2346,
plygnLo : 126.857630119787,
plygnLa : 37.485867155332
},
{
setSeqNo : 1,
plygnSeqNo : 2347,
plygnLo : 126.857483598698,
plygnLa : 37.485807006417
},
{
setSeqNo : 1,
plygnSeqNo : 2348,
plygnLo : 126.857449172439,
plygnLa : 37.4857945752079
},
{
setSeqNo : 1,
plygnSeqNo : 2349,
plygnLo : 126.857290421788,
plygnLa : 37.4857605942004
},
{
setSeqNo : 1,
plygnSeqNo : 2350,
plygnLo : 126.857214996658,
plygnLa : 37.4857543033808
},
{
setSeqNo : 1,
plygnSeqNo : 2351,
plygnLo : 126.857086402182,
plygnLa : 37.4857437319016
},
{
setSeqNo : 1,
plygnSeqNo : 2352,
plygnLo : 126.856768094589,
plygnLa : 37.4857210949776
},
{
setSeqNo : 1,
plygnSeqNo : 2353,
plygnLo : 126.856551880836,
plygnLa : 37.4857067559873
},
{
setSeqNo : 1,
plygnSeqNo : 2354,
plygnLo : 126.856423095698,
plygnLa : 37.4857020940325
},
{
setSeqNo : 1,
plygnSeqNo : 2355,
plygnLo : 126.856024234988,
plygnLa : 37.4855830581642
},
{
setSeqNo : 1,
plygnSeqNo : 2356,
plygnLo : 126.855973562003,
plygnLa : 37.4855694728909
},
{
setSeqNo : 1,
plygnSeqNo : 2357,
plygnLo : 126.855890207639,
plygnLa : 37.4855468449731
},
{
setSeqNo : 1,
plygnSeqNo : 2358,
plygnLo : 126.855729711014,
plygnLa : 37.4854982180039
},
{
setSeqNo : 1,
plygnSeqNo : 2359,
plygnLo : 126.855597137477,
plygnLa : 37.485448228581
},
{
setSeqNo : 1,
plygnSeqNo : 2360,
plygnLo : 126.85550694657,
plygnLa : 37.4854067163116
},
{
setSeqNo : 1,
plygnSeqNo : 2361,
plygnLo : 126.855423287515,
plygnLa : 37.4853598867212
},
{
setSeqNo : 1,
plygnSeqNo : 2362,
plygnLo : 126.855334361418,
plygnLa : 37.4853017619568
},
{
setSeqNo : 1,
plygnSeqNo : 2363,
plygnLo : 126.855165028025,
plygnLa : 37.4851709078702
},
{
setSeqNo : 1,
plygnSeqNo : 2364,
plygnLo : 126.855077755486,
plygnLa : 37.4850773214795
},
{
setSeqNo : 1,
plygnSeqNo : 2365,
plygnLo : 126.855050247931,
plygnLa : 37.4850477331763
},
{
setSeqNo : 1,
plygnSeqNo : 2366,
plygnLo : 126.854979935029,
plygnLa : 37.4849581150501
},
{
setSeqNo : 1,
plygnSeqNo : 2367,
plygnLo : 126.854946642728,
plygnLa : 37.4849099234183
},
{
setSeqNo : 1,
plygnSeqNo : 2368,
plygnLo : 126.854886936248,
plygnLa : 37.4848152440658
},
{
setSeqNo : 1,
plygnSeqNo : 2369,
plygnLo : 126.854866144795,
plygnLa : 37.4847862150271
},
{
setSeqNo : 1,
plygnSeqNo : 2370,
plygnLo : 126.854770408274,
plygnLa : 37.4845968853891
},
{
setSeqNo : 1,
plygnSeqNo : 2371,
plygnLo : 126.854671320548,
plygnLa : 37.4844047415385
},
{
setSeqNo : 1,
plygnSeqNo : 2372,
plygnLo : 126.854577806311,
plygnLa : 37.4842593401306
},
{
setSeqNo : 1,
plygnSeqNo : 2373,
plygnLo : 126.854573933587,
plygnLa : 37.4842514502804
},
{
setSeqNo : 1,
plygnSeqNo : 2374,
plygnLo : 126.854510406353,
plygnLa : 37.4841218526442
},
{
setSeqNo : 1,
plygnSeqNo : 2375,
plygnLo : 126.854442489621,
plygnLa : 37.4839826728044
},
{
setSeqNo : 1,
plygnSeqNo : 2376,
plygnLo : 126.854368408179,
plygnLa : 37.4838330686859
},
{
setSeqNo : 1,
plygnSeqNo : 2377,
plygnLo : 126.854311753394,
plygnLa : 37.4837178397155
},
{
setSeqNo : 1,
plygnSeqNo : 2378,
plygnLo : 126.854221306229,
plygnLa : 37.4835307704464
},
{
setSeqNo : 1,
plygnSeqNo : 2379,
plygnLo : 126.854080211341,
plygnLa : 37.4832329852188
},
{
setSeqNo : 1,
plygnSeqNo : 2380,
plygnLo : 126.853973758093,
plygnLa : 37.4830163323254
},
{
setSeqNo : 1,
plygnSeqNo : 2381,
plygnLo : 126.853948247491,
plygnLa : 37.4829670254517
},
{
setSeqNo : 1,
plygnSeqNo : 2382,
plygnLo : 126.853899804728,
plygnLa : 37.4828954422095
},
{
setSeqNo : 1,
plygnSeqNo : 2383,
plygnLo : 126.853864052804,
plygnLa : 37.4828385258472
},
{
setSeqNo : 1,
plygnSeqNo : 2384,
plygnLo : 126.853789135345,
plygnLa : 37.4827533874817
},
{
setSeqNo : 1,
plygnSeqNo : 2385,
plygnLo : 126.853650163271,
plygnLa : 37.4826313080979
},
{
setSeqNo : 1,
plygnSeqNo : 2386,
plygnLo : 126.853637111942,
plygnLa : 37.4826217241741
},
{
setSeqNo : 1,
plygnSeqNo : 2387,
plygnLo : 126.853400042457,
plygnLa : 37.4826219860704
},
{
setSeqNo : 1,
plygnSeqNo : 2388,
plygnLo : 126.853155362583,
plygnLa : 37.4826222459852
},
{
setSeqNo : 1,
plygnSeqNo : 2389,
plygnLo : 126.853067343746,
plygnLa : 37.4825537135682
},
{
setSeqNo : 1,
plygnSeqNo : 2390,
plygnLo : 126.852958671544,
plygnLa : 37.4824775414709
},
{
setSeqNo : 1,
plygnSeqNo : 2391,
plygnLo : 126.852969290444,
plygnLa : 37.4824648962736
},
{
setSeqNo : 1,
plygnSeqNo : 2392,
plygnLo : 126.853042409972,
plygnLa : 37.4823897989143
},
{
setSeqNo : 1,
plygnSeqNo : 2393,
plygnLo : 126.853051424244,
plygnLa : 37.4823822249432
},
{
setSeqNo : 1,
plygnSeqNo : 2394,
plygnLo : 126.853091437265,
plygnLa : 37.4823417296054
},
{
setSeqNo : 1,
plygnSeqNo : 2395,
plygnLo : 126.853128420132,
plygnLa : 37.4823074210758
},
{
setSeqNo : 1,
plygnSeqNo : 2396,
plygnLo : 126.853069307713,
plygnLa : 37.4822752523836
},
{
setSeqNo : 1,
plygnSeqNo : 2397,
plygnLo : 126.853036366076,
plygnLa : 37.482227342144
},
{
setSeqNo : 1,
plygnSeqNo : 2398,
plygnLo : 126.852700466951,
plygnLa : 37.4818186577842
},
{
setSeqNo : 1,
plygnSeqNo : 2399,
plygnLo : 126.852619625274,
plygnLa : 37.4817867235577
},
{
setSeqNo : 1,
plygnSeqNo : 2400,
plygnLo : 126.852586241792,
plygnLa : 37.4817787979176
},
{
setSeqNo : 1,
plygnSeqNo : 2401,
plygnLo : 126.852467934384,
plygnLa : 37.4817564211192
},
{
setSeqNo : 1,
plygnSeqNo : 2402,
plygnLo : 126.852326995159,
plygnLa : 37.4817373750379
},
{
setSeqNo : 1,
plygnSeqNo : 2403,
plygnLo : 126.85224698092,
plygnLa : 37.481732770148
},
{
setSeqNo : 1,
plygnSeqNo : 2404,
plygnLo : 126.852226312692,
plygnLa : 37.481732463731
},
{
setSeqNo : 1,
plygnSeqNo : 2405,
plygnLo : 126.852066218048,
plygnLa : 37.4816649668423
},
{
setSeqNo : 1,
plygnSeqNo : 2406,
plygnLo : 126.851965733952,
plygnLa : 37.481645413244
},
{
setSeqNo : 1,
plygnSeqNo : 2407,
plygnLo : 126.851853608965,
plygnLa : 37.4816241518729
},
{
setSeqNo : 1,
plygnSeqNo : 2408,
plygnLo : 126.851751884165,
plygnLa : 37.4816037512183
},
{
setSeqNo : 1,
plygnSeqNo : 2409,
plygnLo : 126.851667829871,
plygnLa : 37.4815887227654
},
{
setSeqNo : 1,
plygnSeqNo : 2410,
plygnLo : 126.851613773773,
plygnLa : 37.4815835821126
},
{
setSeqNo : 1,
plygnSeqNo : 2411,
plygnLo : 126.851291256288,
plygnLa : 37.481555863675
},
{
setSeqNo : 1,
plygnSeqNo : 2412,
plygnLo : 126.850990469039,
plygnLa : 37.4815278830291
},
{
setSeqNo : 1,
plygnSeqNo : 2413,
plygnLo : 126.850843149908,
plygnLa : 37.4815226318296
},
{
setSeqNo : 1,
plygnSeqNo : 2414,
plygnLo : 126.850701817824,
plygnLa : 37.4815255505148
},
{
setSeqNo : 1,
plygnSeqNo : 2415,
plygnLo : 126.850573001718,
plygnLa : 37.4815394592677
},
{
setSeqNo : 1,
plygnSeqNo : 2416,
plygnLo : 126.850522818786,
plygnLa : 37.4815484060126
},
{
setSeqNo : 1,
plygnSeqNo : 2417,
plygnLo : 126.850514337219,
plygnLa : 37.4815500879371
},
{
setSeqNo : 1,
plygnSeqNo : 2418,
plygnLo : 126.850418371588,
plygnLa : 37.4815668590501
},
{
setSeqNo : 1,
plygnSeqNo : 2419,
plygnLo : 126.850374366916,
plygnLa : 37.4815780661287
},
{
setSeqNo : 1,
plygnSeqNo : 2420,
plygnLo : 126.849332426525,
plygnLa : 37.4818433516459
},
{
setSeqNo : 1,
plygnSeqNo : 2421,
plygnLo : 126.849223549914,
plygnLa : 37.4818708186284
},
{
setSeqNo : 1,
plygnSeqNo : 2422,
plygnLo : 126.849013381565,
plygnLa : 37.4819313653809
},
{
setSeqNo : 1,
plygnSeqNo : 2423,
plygnLo : 126.848938264191,
plygnLa : 37.481952667256
},
{
setSeqNo : 1,
plygnSeqNo : 2424,
plygnLo : 126.848732509279,
plygnLa : 37.4820106873642
},
{
setSeqNo : 1,
plygnSeqNo : 2425,
plygnLo : 126.848469136933,
plygnLa : 37.4820866343306
},
{
setSeqNo : 1,
plygnSeqNo : 2426,
plygnLo : 126.848323561331,
plygnLa : 37.4820912470614
},
{
setSeqNo : 1,
plygnSeqNo : 2427,
plygnLo : 126.848199534876,
plygnLa : 37.4820952946704
},
{
setSeqNo : 1,
plygnSeqNo : 2428,
plygnLo : 126.848134170439,
plygnLa : 37.4820971912829
},
{
setSeqNo : 1,
plygnSeqNo : 2429,
plygnLo : 126.848073054543,
plygnLa : 37.4820943014031
},
{
setSeqNo : 1,
plygnSeqNo : 2430,
plygnLo : 126.847802963126,
plygnLa : 37.4820832470676
},
{
setSeqNo : 1,
plygnSeqNo : 2431,
plygnLo : 126.847578149799,
plygnLa : 37.4820452287861
},
{
setSeqNo : 1,
plygnSeqNo : 2432,
plygnLo : 126.847514044431,
plygnLa : 37.4820344407621
},
{
setSeqNo : 1,
plygnSeqNo : 2433,
plygnLo : 126.847455417359,
plygnLa : 37.4820247970002
},
{
setSeqNo : 1,
plygnSeqNo : 2434,
plygnLo : 126.847015766013,
plygnLa : 37.4819101745366
},
{
setSeqNo : 1,
plygnSeqNo : 2435,
plygnLo : 126.846986482062,
plygnLa : 37.4818946647985
},
{
setSeqNo : 1,
plygnSeqNo : 2436,
plygnLo : 126.84692772097,
plygnLa : 37.4818627651044
},
{
setSeqNo : 1,
plygnSeqNo : 2437,
plygnLo : 126.846873016341,
plygnLa : 37.4818328518157
},
{
setSeqNo : 1,
plygnSeqNo : 2438,
plygnLo : 126.846849549427,
plygnLa : 37.4818193063023
},
{
setSeqNo : 1,
plygnSeqNo : 2439,
plygnLo : 126.846792556093,
plygnLa : 37.4817865712942
},
{
setSeqNo : 1,
plygnSeqNo : 2440,
plygnLo : 126.846724100464,
plygnLa : 37.4817462161177
},
{
setSeqNo : 1,
plygnSeqNo : 2441,
plygnLo : 126.846707331817,
plygnLa : 37.4817363363553
},
{
setSeqNo : 1,
plygnSeqNo : 2442,
plygnLo : 126.846635519443,
plygnLa : 37.4816962651451
},
{
setSeqNo : 1,
plygnSeqNo : 2443,
plygnLo : 126.846623695235,
plygnLa : 37.4816897713361
},
{
setSeqNo : 1,
plygnSeqNo : 2444,
plygnLo : 126.846556856839,
plygnLa : 37.4816333718366
},
{
setSeqNo : 1,
plygnSeqNo : 2445,
plygnLo : 126.846517176097,
plygnLa : 37.4815989730887
},
{
setSeqNo : 1,
plygnSeqNo : 2446,
plygnLo : 126.846467458813,
plygnLa : 37.4815513082294
},
{
setSeqNo : 1,
plygnSeqNo : 2447,
plygnLo : 126.846462347085,
plygnLa : 37.481546526169
},
{
setSeqNo : 1,
plygnSeqNo : 2448,
plygnLo : 126.84642038076,
plygnLa : 37.4815070506802
},
{
setSeqNo : 1,
plygnSeqNo : 2449,
plygnLo : 126.846408218248,
plygnLa : 37.4814954947637
},
{
setSeqNo : 1,
plygnSeqNo : 2450,
plygnLo : 126.846387958271,
plygnLa : 37.481467590565
},
{
setSeqNo : 1,
plygnSeqNo : 2451,
plygnLo : 126.846346920968,
plygnLa : 37.4814115031228
},
{
setSeqNo : 1,
plygnSeqNo : 2452,
plygnLo : 126.846285953491,
plygnLa : 37.481331747174
},
{
setSeqNo : 1,
plygnSeqNo : 2453,
plygnLo : 126.846263049055,
plygnLa : 37.4813032732273
},
{
setSeqNo : 1,
plygnSeqNo : 2454,
plygnLo : 126.846219187664,
plygnLa : 37.481240146439
},
{
setSeqNo : 1,
plygnSeqNo : 2455,
plygnLo : 126.846200540534,
plygnLa : 37.4812040721573
},
{
setSeqNo : 1,
plygnSeqNo : 2456,
plygnLo : 126.846159186398,
plygnLa : 37.4811263067137
},
{
setSeqNo : 1,
plygnSeqNo : 2457,
plygnLo : 126.846147404587,
plygnLa : 37.4811049014674
},
{
setSeqNo : 1,
plygnSeqNo : 2458,
plygnLo : 126.846089868158,
plygnLa : 37.4809899376504
},
{
setSeqNo : 1,
plygnSeqNo : 2459,
plygnLo : 126.846049368725,
plygnLa : 37.4809254182876
},
{
setSeqNo : 1,
plygnSeqNo : 2460,
plygnLo : 126.846033759871,
plygnLa : 37.4808730314521
},
{
setSeqNo : 1,
plygnSeqNo : 2461,
plygnLo : 126.846007245267,
plygnLa : 37.4807983771771
},
{
setSeqNo : 1,
plygnSeqNo : 2462,
plygnLo : 126.845986780304,
plygnLa : 37.4806955813616
},
{
setSeqNo : 1,
plygnSeqNo : 2463,
plygnLo : 126.845976827943,
plygnLa : 37.4806417877546
},
{
setSeqNo : 1,
plygnSeqNo : 2464,
plygnLo : 126.845963273733,
plygnLa : 37.4805325225463
},
{
setSeqNo : 1,
plygnSeqNo : 2465,
plygnLo : 126.845948490755,
plygnLa : 37.480420725376
},
{
setSeqNo : 1,
plygnSeqNo : 2466,
plygnLo : 126.845934216837,
plygnLa : 37.4803148395559
},
{
setSeqNo : 1,
plygnSeqNo : 2467,
plygnLo : 126.845929268217,
plygnLa : 37.480230932407
},
{
setSeqNo : 1,
plygnSeqNo : 2468,
plygnLo : 126.845916856115,
plygnLa : 37.480083079326
},
{
setSeqNo : 1,
plygnSeqNo : 2469,
plygnLo : 126.84590413713,
plygnLa : 37.4799135758626
},
{
setSeqNo : 1,
plygnSeqNo : 2470,
plygnLo : 126.845894160515,
plygnLa : 37.4797854489806
},
{
setSeqNo : 1,
plygnSeqNo : 2471,
plygnLo : 126.845892272405,
plygnLa : 37.4797581365785
},
{
setSeqNo : 1,
plygnSeqNo : 2472,
plygnLo : 126.845890387718,
plygnLa : 37.4797294020754
},
{
setSeqNo : 1,
plygnSeqNo : 2473,
plygnLo : 126.845880862555,
plygnLa : 37.4796387396796
},
{
setSeqNo : 1,
plygnSeqNo : 2474,
plygnLo : 126.845869043001,
plygnLa : 37.4793751810172
},
{
setSeqNo : 1,
plygnSeqNo : 2475,
plygnLo : 126.845865672502,
plygnLa : 37.4792994379114
},
{
setSeqNo : 1,
plygnSeqNo : 2476,
plygnLo : 126.845854657776,
plygnLa : 37.4791586415219
},
{
setSeqNo : 1,
plygnSeqNo : 2477,
plygnLo : 126.845850884271,
plygnLa : 37.4791026028581
},
{
setSeqNo : 1,
plygnSeqNo : 2478,
plygnLo : 126.845842822604,
plygnLa : 37.4789837597697
},
{
setSeqNo : 1,
plygnSeqNo : 2479,
plygnLo : 126.845840233457,
plygnLa : 37.4789561766625
},
{
setSeqNo : 1,
plygnSeqNo : 2480,
plygnLo : 126.845834769334,
plygnLa : 37.4788652231548
},
{
setSeqNo : 1,
plygnSeqNo : 2481,
plygnLo : 126.845827427475,
plygnLa : 37.4787418932278
},
{
setSeqNo : 1,
plygnSeqNo : 2482,
plygnLo : 126.84581502102,
plygnLa : 37.4785095816044
},
{
setSeqNo : 1,
plygnSeqNo : 2483,
plygnLo : 126.845813483314,
plygnLa : 37.4784819900124
},
{
setSeqNo : 1,
plygnSeqNo : 2484,
plygnLo : 126.84581263466,
plygnLa : 37.4784664998837
},
{
setSeqNo : 1,
plygnSeqNo : 2485,
plygnLo : 126.845794948546,
plygnLa : 37.4782181437968
},
{
setSeqNo : 1,
plygnSeqNo : 2486,
plygnLo : 126.845781834747,
plygnLa : 37.4780708671698
},
{
setSeqNo : 1,
plygnSeqNo : 2487,
plygnLo : 126.845764000327,
plygnLa : 37.4778109583339
},
{
setSeqNo : 1,
plygnSeqNo : 2488,
plygnLo : 126.845754658936,
plygnLa : 37.4777149357721
},
{
setSeqNo : 1,
plygnSeqNo : 2489,
plygnLo : 126.845691334405,
plygnLa : 37.4770793665922
},
{
setSeqNo : 1,
plygnSeqNo : 2490,
plygnLo : 126.845688041774,
plygnLa : 37.4770419078063
},
{
setSeqNo : 1,
plygnSeqNo : 2491,
plygnLo : 126.845674055646,
plygnLa : 37.4768906927844
},
{
setSeqNo : 1,
plygnSeqNo : 2492,
plygnLo : 126.845655908045,
plygnLa : 37.4766958255946
},
{
setSeqNo : 1,
plygnSeqNo : 2493,
plygnLo : 126.845652613039,
plygnLa : 37.4766651346555
},
{
setSeqNo : 1,
plygnSeqNo : 2494,
plygnLo : 126.845650538138,
plygnLa : 37.4766468325492
},
{
setSeqNo : 1,
plygnSeqNo : 2495,
plygnLo : 126.845641923247,
plygnLa : 37.4765432049519
},
{
setSeqNo : 1,
plygnSeqNo : 2496,
plygnLo : 126.845634166484,
plygnLa : 37.4764516814074
},
{
setSeqNo : 1,
plygnSeqNo : 2497,
plygnLo : 126.845628620678,
plygnLa : 37.4763945232576
},
{
setSeqNo : 1,
plygnSeqNo : 2498,
plygnLo : 126.845623613346,
plygnLa : 37.4763449606178
},
{
setSeqNo : 1,
plygnSeqNo : 2499,
plygnLo : 126.845606948178,
plygnLa : 37.4761985257835
},
{
setSeqNo : 1,
plygnSeqNo : 2500,
plygnLo : 126.845546177628,
plygnLa : 37.4756947139142
},
{
setSeqNo : 1,
plygnSeqNo : 2501,
plygnLo : 126.845496490484,
plygnLa : 37.4749504929088
},
{
setSeqNo : 1,
plygnSeqNo : 2502,
plygnLo : 126.845487287829,
plygnLa : 37.4748741749903
},
{
setSeqNo : 1,
plygnSeqNo : 2503,
plygnLo : 126.84547965073,
plygnLa : 37.4748125012099
},
{
setSeqNo : 1,
plygnSeqNo : 2504,
plygnLo : 126.845476008476,
plygnLa : 37.4747809605621
},
{
setSeqNo : 1,
plygnSeqNo : 2505,
plygnLo : 126.845430968896,
plygnLa : 37.474437673471
},
{
setSeqNo : 1,
plygnSeqNo : 2506,
plygnLo : 126.845419498889,
plygnLa : 37.4743486841776
},
{
setSeqNo : 1,
plygnSeqNo : 2507,
plygnLo : 126.845409630569,
plygnLa : 37.47425040853
},
{
setSeqNo : 1,
plygnSeqNo : 2508,
plygnLo : 126.84539855879,
plygnLa : 37.4741377680162
},
{
setSeqNo : 1,
plygnSeqNo : 2509,
plygnLo : 126.845384833595,
plygnLa : 37.4740301983259
},
{
setSeqNo : 1,
plygnSeqNo : 2510,
plygnLo : 126.845370777085,
plygnLa : 37.4739071198997
},
{
setSeqNo : 1,
plygnSeqNo : 2511,
plygnLo : 126.845367485844,
plygnLa : 37.4738753105182
},
{
setSeqNo : 1,
plygnSeqNo : 2512,
plygnLo : 126.84536592464,
plygnLa : 37.4738595408052
},
{
setSeqNo : 1,
plygnSeqNo : 2513,
plygnLo : 126.84536055117,
plygnLa : 37.4738125018152
},
{
setSeqNo : 1,
plygnSeqNo : 2514,
plygnLo : 126.845320506485,
plygnLa : 37.4737871213265
},
{
setSeqNo : 1,
plygnSeqNo : 2515,
plygnLo : 126.84523778415,
plygnLa : 37.4737287273295
},
{
setSeqNo : 1,
plygnSeqNo : 2516,
plygnLo : 126.845109923112,
plygnLa : 37.4736325473518
},
{
setSeqNo : 1,
plygnSeqNo : 2517,
plygnLo : 126.845051221764,
plygnLa : 37.4735764352203
},
{
setSeqNo : 1,
plygnSeqNo : 2518,
plygnLo : 126.845033236853,
plygnLa : 37.473558959242
},
{
setSeqNo : 1,
plygnSeqNo : 2519,
plygnLo : 126.844977891835,
plygnLa : 37.4735037002465
},
{
setSeqNo : 1,
plygnSeqNo : 2520,
plygnLo : 126.844955165962,
plygnLa : 37.4734724130256
},
{
setSeqNo : 1,
plygnSeqNo : 2521,
plygnLo : 126.844915014048,
plygnLa : 37.4734982644777
},
{
setSeqNo : 1,
plygnSeqNo : 2522,
plygnLo : 126.844872135898,
plygnLa : 37.4736485493314
},
{
setSeqNo : 1,
plygnSeqNo : 2523,
plygnLo : 126.84483681878,
plygnLa : 37.4737248174133
},
{
setSeqNo : 1,
plygnSeqNo : 2524,
plygnLo : 126.844819998627,
plygnLa : 37.473745345728
},
{
setSeqNo : 1,
plygnSeqNo : 2525,
plygnLo : 126.84474260689,
plygnLa : 37.473755667469
},
{
setSeqNo : 1,
plygnSeqNo : 2526,
plygnLo : 126.84471080986,
plygnLa : 37.4737598433143
},
{
setSeqNo : 1,
plygnSeqNo : 2527,
plygnLo : 126.844700021874,
plygnLa : 37.4737612435651
},
{
setSeqNo : 1,
plygnSeqNo : 2528,
plygnLo : 126.844606942919,
plygnLa : 37.4738450203049
},
{
setSeqNo : 1,
plygnSeqNo : 2529,
plygnLo : 126.844552605803,
plygnLa : 37.4739781155006
},
{
setSeqNo : 1,
plygnSeqNo : 2530,
plygnLo : 126.844490955758,
plygnLa : 37.4739800164283
},
{
setSeqNo : 1,
plygnSeqNo : 2531,
plygnLo : 126.844489385241,
plygnLa : 37.4740551947323
},
{
setSeqNo : 1,
plygnSeqNo : 2532,
plygnLo : 126.844394853899,
plygnLa : 37.4741575580919
},
{
setSeqNo : 1,
plygnSeqNo : 2533,
plygnLo : 126.844319653746,
plygnLa : 37.4743024645188
},
{
setSeqNo : 1,
plygnSeqNo : 2534,
plygnLo : 126.844335264791,
plygnLa : 37.4744384646499
},
{
setSeqNo : 1,
plygnSeqNo : 2535,
plygnLo : 126.844340906617,
plygnLa : 37.4745246440266
},
{
setSeqNo : 1,
plygnSeqNo : 2536,
plygnLo : 126.844307238735,
plygnLa : 37.4745786595312
},
{
setSeqNo : 1,
plygnSeqNo : 2537,
plygnLo : 126.844249788626,
plygnLa : 37.4745999822471
},
{
setSeqNo : 1,
plygnSeqNo : 2538,
plygnLo : 126.844221921955,
plygnLa : 37.4745774196927
},
{
setSeqNo : 1,
plygnSeqNo : 2539,
plygnLo : 126.84413166087,
plygnLa : 37.474492831467
},
{
setSeqNo : 1,
plygnSeqNo : 2540,
plygnLo : 126.844048327571,
plygnLa : 37.4744730060136
},
{
setSeqNo : 1,
plygnSeqNo : 2541,
plygnLo : 126.843820758739,
plygnLa : 37.4744985971278
},
{
setSeqNo : 1,
plygnSeqNo : 2542,
plygnLo : 126.843664859535,
plygnLa : 37.4745434481573
},
{
setSeqNo : 1,
plygnSeqNo : 2543,
plygnLo : 126.843535571027,
plygnLa : 37.4745404638679
},
{
setSeqNo : 1,
plygnSeqNo : 2544,
plygnLo : 126.843518042112,
plygnLa : 37.4745590190911
},
{
setSeqNo : 1,
plygnSeqNo : 2545,
plygnLo : 126.843357580983,
plygnLa : 37.474675934614
},
{
setSeqNo : 1,
plygnSeqNo : 2546,
plygnLo : 126.843350262322,
plygnLa : 37.4747153441767
},
{
setSeqNo : 1,
plygnSeqNo : 2547,
plygnLo : 126.843263925833,
plygnLa : 37.4747794247611
},
{
setSeqNo : 1,
plygnSeqNo : 2548,
plygnLo : 126.843112000762,
plygnLa : 37.4748698897303
},
{
setSeqNo : 1,
plygnSeqNo : 2549,
plygnLo : 126.843077340549,
plygnLa : 37.4748850322781
},
{
setSeqNo : 1,
plygnSeqNo : 2550,
plygnLo : 126.84295254864,
plygnLa : 37.4749248614032
},
{
setSeqNo : 1,
plygnSeqNo : 2551,
plygnLo : 126.842865953316,
plygnLa : 37.4749461440474
},
{
setSeqNo : 1,
plygnSeqNo : 2552,
plygnLo : 126.842848634527,
plygnLa : 37.4749514721394
},
{
setSeqNo : 1,
plygnSeqNo : 2553,
plygnLo : 126.842781643712,
plygnLa : 37.4749716539903
},
{
setSeqNo : 1,
plygnSeqNo : 2554,
plygnLo : 126.84269634764,
plygnLa : 37.4749602784221
},
{
setSeqNo : 1,
plygnSeqNo : 2555,
plygnLo : 126.842646900599,
plygnLa : 37.4749540133734
},
{
setSeqNo : 1,
plygnSeqNo : 2556,
plygnLo : 126.842503808675,
plygnLa : 37.4749614247866
},
{
setSeqNo : 1,
plygnSeqNo : 2557,
plygnLo : 126.842472061934,
plygnLa : 37.4749357577774
},
{
setSeqNo : 1,
plygnSeqNo : 2558,
plygnLo : 126.842397920146,
plygnLa : 37.4749159531535
},
{
setSeqNo : 1,
plygnSeqNo : 2559,
plygnLo : 126.842378847208,
plygnLa : 37.4749111333712
},
{
setSeqNo : 1,
plygnSeqNo : 2560,
plygnLo : 126.842342476154,
plygnLa : 37.4749017963526
},
{
setSeqNo : 1,
plygnSeqNo : 2561,
plygnLo : 126.842299964983,
plygnLa : 37.4748764027682
},
{
setSeqNo : 1,
plygnSeqNo : 2562,
plygnLo : 126.842193131416,
plygnLa : 37.4748610493431
},
{
setSeqNo : 1,
plygnSeqNo : 2563,
plygnLo : 126.842038262719,
plygnLa : 37.4748343776113
},
{
setSeqNo : 1,
plygnSeqNo : 2564,
plygnLo : 126.841964048796,
plygnLa : 37.4748491988889
},
{
setSeqNo : 1,
plygnSeqNo : 2565,
plygnLo : 126.841961959911,
plygnLa : 37.4748317334062
},
{
setSeqNo : 1,
plygnSeqNo : 2566,
plygnLo : 126.841867289017,
plygnLa : 37.4748324538454
},
{
setSeqNo : 1,
plygnSeqNo : 2567,
plygnLo : 126.841817296173,
plygnLa : 37.4748329521734
},
{
setSeqNo : 1,
plygnSeqNo : 2568,
plygnLo : 126.841742598865,
plygnLa : 37.4748201660746
},
{
setSeqNo : 1,
plygnSeqNo : 2569,
plygnLo : 126.841637392781,
plygnLa : 37.4747879384143
},
{
setSeqNo : 1,
plygnSeqNo : 2570,
plygnLo : 126.841525828467,
plygnLa : 37.4747540011402
},
{
setSeqNo : 1,
plygnSeqNo : 2571,
plygnLo : 126.841402212047,
plygnLa : 37.4747366604262
},
{
setSeqNo : 1,
plygnSeqNo : 2572,
plygnLo : 126.841289193377,
plygnLa : 37.4747212986659
},
{
setSeqNo : 1,
plygnSeqNo : 2573,
plygnLo : 126.841214718183,
plygnLa : 37.4746888150383
},
{
setSeqNo : 1,
plygnSeqNo : 2574,
plygnLo : 126.841158048846,
plygnLa : 37.4746769168911
},
{
setSeqNo : 1,
plygnSeqNo : 2575,
plygnLo : 126.841032340463,
plygnLa : 37.4746480138655
},
{
setSeqNo : 1,
plygnSeqNo : 2576,
plygnLo : 126.840939764874,
plygnLa : 37.4746535188421
},
{
setSeqNo : 1,
plygnSeqNo : 2577,
plygnLo : 126.84082529246,
plygnLa : 37.4746575977485
},
{
setSeqNo : 1,
plygnSeqNo : 2578,
plygnLo : 126.840786954043,
plygnLa : 37.474664023537
},
{
setSeqNo : 1,
plygnSeqNo : 2579,
plygnLo : 126.84076786333,
plygnLa : 37.4746673763258
},
{
setSeqNo : 1,
plygnSeqNo : 2580,
plygnLo : 126.840625081476,
plygnLa : 37.4746928071412
},
{
setSeqNo : 1,
plygnSeqNo : 2581,
plygnLo : 126.840452425482,
plygnLa : 37.4747331163491
},
{
setSeqNo : 1,
plygnSeqNo : 2582,
plygnLo : 126.840420091492,
plygnLa : 37.474733911259
},
{
setSeqNo : 1,
plygnSeqNo : 2583,
plygnLo : 126.840274707353,
plygnLa : 37.4747399120139
},
{
setSeqNo : 1,
plygnSeqNo : 2584,
plygnLo : 126.840108607369,
plygnLa : 37.4747633354644
},
{
setSeqNo : 1,
plygnSeqNo : 2585,
plygnLo : 126.840030796711,
plygnLa : 37.4748046209896
},
{
setSeqNo : 1,
plygnSeqNo : 2586,
plygnLo : 126.839949072296,
plygnLa : 37.4748616599595
},
{
setSeqNo : 1,
plygnSeqNo : 2587,
plygnLo : 126.83994535776,
plygnLa : 37.4748656018912
},
{
setSeqNo : 1,
plygnSeqNo : 2588,
plygnLo : 126.839825144424,
plygnLa : 37.4749887477329
},
{
setSeqNo : 1,
plygnSeqNo : 2589,
plygnLo : 126.839694803128,
plygnLa : 37.475143722604
},
{
setSeqNo : 1,
plygnSeqNo : 2590,
plygnLo : 126.839663507756,
plygnLa : 37.4751555089218
},
{
setSeqNo : 1,
plygnSeqNo : 2591,
plygnLo : 126.839567697668,
plygnLa : 37.4751919777128
},
{
setSeqNo : 1,
plygnSeqNo : 2592,
plygnLo : 126.83947233339,
plygnLa : 37.4751783314148
},
{
setSeqNo : 1,
plygnSeqNo : 2593,
plygnLo : 126.839446198579,
plygnLa : 37.475177168644
},
{
setSeqNo : 1,
plygnSeqNo : 2594,
plygnLo : 126.839234253178,
plygnLa : 37.4751656161049
},
{
setSeqNo : 1,
plygnSeqNo : 2595,
plygnLo : 126.839122730098,
plygnLa : 37.4751902395481
},
{
setSeqNo : 1,
plygnSeqNo : 2596,
plygnLo : 126.839080657935,
plygnLa : 37.4752087701546
},
{
setSeqNo : 1,
plygnSeqNo : 2597,
plygnLo : 126.838904367638,
plygnLa : 37.4752918700081
},
{
setSeqNo : 1,
plygnSeqNo : 2598,
plygnLo : 126.838845497609,
plygnLa : 37.4753095115848
},
{
setSeqNo : 1,
plygnSeqNo : 2599,
plygnLo : 126.838777654367,
plygnLa : 37.4753153474549
},
{
setSeqNo : 1,
plygnSeqNo : 2600,
plygnLo : 126.838752575405,
plygnLa : 37.4753172679407
},
{
setSeqNo : 1,
plygnSeqNo : 2601,
plygnLo : 126.838667747757,
plygnLa : 37.4753351696103
},
{
setSeqNo : 1,
plygnSeqNo : 2602,
plygnLo : 126.838585793121,
plygnLa : 37.4753311288842
},
{
setSeqNo : 1,
plygnSeqNo : 2603,
plygnLo : 126.838560175005,
plygnLa : 37.4753316434456
},
{
setSeqNo : 1,
plygnSeqNo : 2604,
plygnLo : 126.83851193604,
plygnLa : 37.4753366591659
},
{
setSeqNo : 1,
plygnSeqNo : 2605,
plygnLo : 126.838445297673,
plygnLa : 37.4753607756984
},
{
setSeqNo : 1,
plygnSeqNo : 2606,
plygnLo : 126.838395280974,
plygnLa : 37.4753716905057
},
{
setSeqNo : 1,
plygnSeqNo : 2607,
plygnLo : 126.838300736643,
plygnLa : 37.4753921121725
},
{
setSeqNo : 1,
plygnSeqNo : 2608,
plygnLo : 126.838150188732,
plygnLa : 37.4753291225844
},
{
setSeqNo : 1,
plygnSeqNo : 2609,
plygnLo : 126.837987043155,
plygnLa : 37.4752151442644
},
{
setSeqNo : 1,
plygnSeqNo : 2610,
plygnLo : 126.837973625915,
plygnLa : 37.4752140001594
},
{
setSeqNo : 1,
plygnSeqNo : 2611,
plygnLo : 126.837898029297,
plygnLa : 37.4752088227758
},
{
setSeqNo : 1,
plygnSeqNo : 2612,
plygnLo : 126.837755348295,
plygnLa : 37.4751097956245
},
{
setSeqNo : 1,
plygnSeqNo : 2613,
plygnLo : 126.837698473248,
plygnLa : 37.4751046526261
},
{
setSeqNo : 1,
plygnSeqNo : 2614,
plygnLo : 126.837639925893,
plygnLa : 37.4750623319981
},
{
setSeqNo : 1,
plygnSeqNo : 2615,
plygnLo : 126.837519517865,
plygnLa : 37.4750297920986
},
{
setSeqNo : 1,
plygnSeqNo : 2616,
plygnLo : 126.837455174383,
plygnLa : 37.4749753538842
},
{
setSeqNo : 1,
plygnSeqNo : 2617,
plygnLo : 126.837391955038,
plygnLa : 37.474966544768
},
{
setSeqNo : 1,
plygnSeqNo : 2618,
plygnLo : 126.837256945003,
plygnLa : 37.4749108821637
},
{
setSeqNo : 1,
plygnSeqNo : 2619,
plygnLo : 126.83720472422,
plygnLa : 37.4748812484508
},
{
setSeqNo : 1,
plygnSeqNo : 2620,
plygnLo : 126.837123588348,
plygnLa : 37.4749070389715
},
{
setSeqNo : 1,
plygnSeqNo : 2621,
plygnLo : 126.836946610045,
plygnLa : 37.4749008828556
},
{
setSeqNo : 1,
plygnSeqNo : 2622,
plygnLo : 126.836828463089,
plygnLa : 37.4748843740123
},
{
setSeqNo : 1,
plygnSeqNo : 2623,
plygnLo : 126.836738067867,
plygnLa : 37.4748639844375
},
{
setSeqNo : 1,
plygnSeqNo : 2624,
plygnLo : 126.836620211815,
plygnLa : 37.4748849390226
},
{
setSeqNo : 1,
plygnSeqNo : 2625,
plygnLo : 126.836479719597,
plygnLa : 37.4748298273541
},
{
setSeqNo : 1,
plygnSeqNo : 2626,
plygnLo : 126.836453361079,
plygnLa : 37.4748478186528
},
{
setSeqNo : 1,
plygnSeqNo : 2627,
plygnLo : 126.836179651223,
plygnLa : 37.4748088637674
},
{
setSeqNo : 1,
plygnSeqNo : 2628,
plygnLo : 126.836136051746,
plygnLa : 37.4747139188035
},
{
setSeqNo : 1,
plygnSeqNo : 2629,
plygnLo : 126.836108757012,
plygnLa : 37.474675587703
},
{
setSeqNo : 1,
plygnSeqNo : 2630,
plygnLo : 126.836032581558,
plygnLa : 37.4746146642627
},
{
setSeqNo : 1,
plygnSeqNo : 2631,
plygnLo : 126.835946768811,
plygnLa : 37.4745199386232
},
{
setSeqNo : 1,
plygnSeqNo : 2632,
plygnLo : 126.835883127561,
plygnLa : 37.4744612850024
},
{
setSeqNo : 1,
plygnSeqNo : 2633,
plygnLo : 126.835830874213,
plygnLa : 37.4744471282305
},
{
setSeqNo : 1,
plygnSeqNo : 2634,
plygnLo : 126.835767811838,
plygnLa : 37.4744487333409
},
{
setSeqNo : 1,
plygnSeqNo : 2635,
plygnLo : 126.835725027447,
plygnLa : 37.474383910397
},
{
setSeqNo : 1,
plygnSeqNo : 2636,
plygnLo : 126.834833790215,
plygnLa : 37.474423488322
},
{
setSeqNo : 1,
plygnSeqNo : 2637,
plygnLo : 126.834640158307,
plygnLa : 37.4743626783991
},
{
setSeqNo : 1,
plygnSeqNo : 2638,
plygnLo : 126.834613592643,
plygnLa : 37.4748703010658
},
{
setSeqNo : 1,
plygnSeqNo : 2639,
plygnLo : 126.834763983326,
plygnLa : 37.4753134101751
},
{
setSeqNo : 1,
plygnSeqNo : 2640,
plygnLo : 126.834872003702,
plygnLa : 37.47575109766
},
{
setSeqNo : 1,
plygnSeqNo : 2641,
plygnLo : 126.834495698683,
plygnLa : 37.4760107301884
},
{
setSeqNo : 1,
plygnSeqNo : 2642,
plygnLo : 126.834079508601,
plygnLa : 37.476415321652
},
{
setSeqNo : 1,
plygnSeqNo : 2643,
plygnLo : 126.833996087181,
plygnLa : 37.4765928705773
},
{
setSeqNo : 1,
plygnSeqNo : 2644,
plygnLo : 126.833932247814,
plygnLa : 37.4767842432431
},
{
setSeqNo : 1,
plygnSeqNo : 2645,
plygnLo : 126.833480082945,
plygnLa : 37.4771558147797
},
{
setSeqNo : 1,
plygnSeqNo : 2646,
plygnLo : 126.833327470626,
plygnLa : 37.4772321822794
},
{
setSeqNo : 1,
plygnSeqNo : 2647,
plygnLo : 126.833052036996,
plygnLa : 37.477246431784
},
{
setSeqNo : 1,
plygnSeqNo : 2648,
plygnLo : 126.83207904451,
plygnLa : 37.4775682748198
},
{
setSeqNo : 1,
plygnSeqNo : 2649,
plygnLo : 126.831748170594,
plygnLa : 37.4776514394819
},
{
setSeqNo : 1,
plygnSeqNo : 2650,
plygnLo : 126.830801502767,
plygnLa : 37.477424256721
},
{
setSeqNo : 1,
plygnSeqNo : 2651,
plygnLo : 126.830457591365,
plygnLa : 37.4773395712706
},
{
setSeqNo : 1,
plygnSeqNo : 2652,
plygnLo : 126.829621642527,
plygnLa : 37.4768957308323
},
{
setSeqNo : 1,
plygnSeqNo : 2653,
plygnLo : 126.829553367489,
plygnLa : 37.4766250615502
},
{
setSeqNo : 1,
plygnSeqNo : 2654,
plygnLo : 126.82953683889,
plygnLa : 37.4765960346458
},
{
setSeqNo : 1,
plygnSeqNo : 2655,
plygnLo : 126.829204419756,
plygnLa : 37.4761957310845
},
{
setSeqNo : 1,
plygnSeqNo : 2656,
plygnLo : 126.828182027688,
plygnLa : 37.4760345954181
},
{
setSeqNo : 1,
plygnSeqNo : 2657,
plygnLo : 126.828122498222,
plygnLa : 37.4760322560505
},
{
setSeqNo : 1,
plygnSeqNo : 2658,
plygnLo : 126.827872119781,
plygnLa : 37.4759896488688
},
{
setSeqNo : 1,
plygnSeqNo : 2659,
plygnLo : 126.826117851106,
plygnLa : 37.4762215983265
},
{
setSeqNo : 1,
plygnSeqNo : 2660,
plygnLo : 126.825341938308,
plygnLa : 37.4762598636744
},
{
setSeqNo : 1,
plygnSeqNo : 2661,
plygnLo : 126.825279561556,
plygnLa : 37.4762670950542
},
{
setSeqNo : 1,
plygnSeqNo : 2662,
plygnLo : 126.82483438638,
plygnLa : 37.4762603302234
},
{
setSeqNo : 1,
plygnSeqNo : 2663,
plygnLo : 126.824334721892,
plygnLa : 37.4762527256414
},
{
setSeqNo : 1,
plygnSeqNo : 2664,
plygnLo : 126.824173047254,
plygnLa : 37.4761947649377
},
{
setSeqNo : 1,
plygnSeqNo : 2665,
plygnLo : 126.824108381297,
plygnLa : 37.4763526221379
},
{
setSeqNo : 1,
plygnSeqNo : 2666,
plygnLo : 126.823950703504,
plygnLa : 37.4764728856737
},
{
setSeqNo : 1,
plygnSeqNo : 2667,
plygnLo : 126.8239418649,
plygnLa : 37.4764673045159
},
{
setSeqNo : 1,
plygnSeqNo : 2668,
plygnLo : 126.823816654571,
plygnLa : 37.4763882152298
},
{
setSeqNo : 1,
plygnSeqNo : 2669,
plygnLo : 126.823654217361,
plygnLa : 37.4761314828876
},
{
setSeqNo : 1,
plygnSeqNo : 2670,
plygnLo : 126.823523868603,
plygnLa : 37.476126763529
},
{
setSeqNo : 1,
plygnSeqNo : 2671,
plygnLo : 126.823430316391,
plygnLa : 37.4760987636423
},
{
setSeqNo : 1,
plygnSeqNo : 2672,
plygnLo : 126.823226227918,
plygnLa : 37.4761246392812
},
{
setSeqNo : 1,
plygnSeqNo : 2673,
plygnLo : 126.823176234436,
plygnLa : 37.4761254108361
},
{
setSeqNo : 1,
plygnSeqNo : 2674,
plygnLo : 126.823148341755,
plygnLa : 37.4761219898078
},
{
setSeqNo : 1,
plygnSeqNo : 2675,
plygnLo : 126.823182272448,
plygnLa : 37.4759635191643
},
{
setSeqNo : 1,
plygnSeqNo : 2676,
plygnLo : 126.823180369977,
plygnLa : 37.4759457661632
},
{
setSeqNo : 1,
plygnSeqNo : 2677,
plygnLo : 126.823163412018,
plygnLa : 37.4759460381674
},
{
setSeqNo : 1,
plygnSeqNo : 2678,
plygnLo : 126.823161598219,
plygnLa : 37.4759620809421
},
{
setSeqNo : 1,
plygnSeqNo : 2679,
plygnLo : 126.823064300885,
plygnLa : 37.4759540514992
},
{
setSeqNo : 1,
plygnSeqNo : 2680,
plygnLo : 126.822947847047,
plygnLa : 37.4759679481726
},
{
setSeqNo : 1,
plygnSeqNo : 2681,
plygnLo : 126.822777292058,
plygnLa : 37.4759316504596
},
{
setSeqNo : 1,
plygnSeqNo : 2682,
plygnLo : 126.822701076158,
plygnLa : 37.4758921072417
},
{
setSeqNo : 1,
plygnSeqNo : 2683,
plygnLo : 126.822633043345,
plygnLa : 37.4758340160638
},
{
setSeqNo : 1,
plygnSeqNo : 2684,
plygnLo : 126.822493382086,
plygnLa : 37.4758048015413
},
{
setSeqNo : 1,
plygnSeqNo : 2685,
plygnLo : 126.822366208392,
plygnLa : 37.4758054564037
},
{
setSeqNo : 1,
plygnSeqNo : 2686,
plygnLo : 126.822249675334,
plygnLa : 37.4757810520994
},
{
setSeqNo : 1,
plygnSeqNo : 2687,
plygnLo : 126.822107375398,
plygnLa : 37.4757484716162
},
{
setSeqNo : 1,
plygnSeqNo : 2688,
plygnLo : 126.822033973924,
plygnLa : 37.4756379861572
},
{
setSeqNo : 1,
plygnSeqNo : 2689,
plygnLo : 126.82198396995,
plygnLa : 37.4755728687543
},
{
setSeqNo : 1,
plygnSeqNo : 2690,
plygnLo : 126.821949263597,
plygnLa : 37.47553424267
},
{
setSeqNo : 1,
plygnSeqNo : 2691,
plygnLo : 126.821920112831,
plygnLa : 37.475461830084
},
{
setSeqNo : 1,
plygnSeqNo : 2692,
plygnLo : 126.82191951683,
plygnLa : 37.4754176265451
},
{
setSeqNo : 1,
plygnSeqNo : 2693,
plygnLo : 126.821913467446,
plygnLa : 37.4752861165122
},
{
setSeqNo : 1,
plygnSeqNo : 2694,
plygnLo : 126.821901488917,
plygnLa : 37.4752742851646
},
{
setSeqNo : 1,
plygnSeqNo : 2695,
plygnLo : 126.821778952474,
plygnLa : 37.4752459426807
},
{
setSeqNo : 1,
plygnSeqNo : 2696,
plygnLo : 126.82174507668,
plygnLa : 37.4752340609917
},
{
setSeqNo : 1,
plygnSeqNo : 2697,
plygnLo : 126.821717547271,
plygnLa : 37.4752205053316
},
{
setSeqNo : 1,
plygnSeqNo : 2698,
plygnLo : 126.821701442144,
plygnLa : 37.4753088950866
},
{
setSeqNo : 1,
plygnSeqNo : 2699,
plygnLo : 126.821668175711,
plygnLa : 37.4754811606524
},
{
setSeqNo : 1,
plygnSeqNo : 2700,
plygnLo : 126.821682098023,
plygnLa : 37.4755684536074
},
{
setSeqNo : 1,
plygnSeqNo : 2701,
plygnLo : 126.821705031711,
plygnLa : 37.4757258930759
},
{
setSeqNo : 1,
plygnSeqNo : 2702,
plygnLo : 126.821707441714,
plygnLa : 37.4757585573309
},
{
setSeqNo : 1,
plygnSeqNo : 2703,
plygnLo : 126.821719078969,
plygnLa : 37.4759120259282
},
{
setSeqNo : 1,
plygnSeqNo : 2704,
plygnLo : 126.82173327489,
plygnLa : 37.4761074559378
},
{
setSeqNo : 1,
plygnSeqNo : 2705,
plygnLo : 126.821778867108,
plygnLa : 37.4761694695189
},
{
setSeqNo : 1,
plygnSeqNo : 2706,
plygnLo : 126.821786618625,
plygnLa : 37.4761807446263
},
{
setSeqNo : 1,
plygnSeqNo : 2707,
plygnLo : 126.821779498025,
plygnLa : 37.4762035368744
},
{
setSeqNo : 1,
plygnSeqNo : 2708,
plygnLo : 126.821705965344,
plygnLa : 37.476223968469
},
{
setSeqNo : 1,
plygnSeqNo : 2709,
plygnLo : 126.821570911056,
plygnLa : 37.4762620650524
},
{
setSeqNo : 1,
plygnSeqNo : 2710,
plygnLo : 126.821525691736,
plygnLa : 37.4762614373514
},
{
setSeqNo : 1,
plygnSeqNo : 2711,
plygnLo : 126.82149574287,
plygnLa : 37.4762284510123
},
{
setSeqNo : 1,
plygnSeqNo : 2712,
plygnLo : 126.821480396784,
plygnLa : 37.4762168759065
},
{
setSeqNo : 1,
plygnSeqNo : 2713,
plygnLo : 126.821416640165,
plygnLa : 37.4762145264893
},
{
setSeqNo : 1,
plygnSeqNo : 2714,
plygnLo : 126.821363113638,
plygnLa : 37.4762124817106
},
{
setSeqNo : 1,
plygnSeqNo : 2715,
plygnLo : 126.821265457872,
plygnLa : 37.4762086556681
},
{
setSeqNo : 1,
plygnSeqNo : 2716,
plygnLo : 126.821236463571,
plygnLa : 37.4762117195436
},
{
setSeqNo : 1,
plygnSeqNo : 2717,
plygnLo : 126.821226439719,
plygnLa : 37.476266612407
},
{
setSeqNo : 1,
plygnSeqNo : 2718,
plygnLo : 126.8212023853,
plygnLa : 37.4762834681216
},
{
setSeqNo : 1,
plygnSeqNo : 2719,
plygnLo : 126.821150226187,
plygnLa : 37.4763011124552
},
{
setSeqNo : 1,
plygnSeqNo : 2720,
plygnLo : 126.821069499947,
plygnLa : 37.4763038179862
},
{
setSeqNo : 1,
plygnSeqNo : 2721,
plygnLo : 126.821008563985,
plygnLa : 37.4762997686616
},
{
setSeqNo : 1,
plygnSeqNo : 2722,
plygnLo : 126.820795748275,
plygnLa : 37.4762828477107
},
{
setSeqNo : 1,
plygnSeqNo : 2723,
plygnLo : 126.820619172469,
plygnLa : 37.4762538451255
},
{
setSeqNo : 1,
plygnSeqNo : 2724,
plygnLo : 126.82047588877,
plygnLa : 37.4762634914718
},
{
setSeqNo : 1,
plygnSeqNo : 2725,
plygnLo : 126.820338791482,
plygnLa : 37.4762722913523
},
{
setSeqNo : 1,
plygnSeqNo : 2726,
plygnLo : 126.820161089473,
plygnLa : 37.4762694859979
},
{
setSeqNo : 1,
plygnSeqNo : 2727,
plygnLo : 126.820061263386,
plygnLa : 37.4762045608367
},
{
setSeqNo : 1,
plygnSeqNo : 2728,
plygnLo : 126.819980340239,
plygnLa : 37.4762143019149
},
{
setSeqNo : 1,
plygnSeqNo : 2729,
plygnLo : 126.819916398913,
plygnLa : 37.4762139069323
},
{
setSeqNo : 1,
plygnSeqNo : 2730,
plygnLo : 126.819866020525,
plygnLa : 37.4762237027108
},
{
setSeqNo : 1,
plygnSeqNo : 2731,
plygnLo : 126.81983377909,
plygnLa : 37.4762656052228
},
{
setSeqNo : 1,
plygnSeqNo : 2732,
plygnLo : 126.819781112126,
plygnLa : 37.4762776340225
},
{
setSeqNo : 1,
plygnSeqNo : 2733,
plygnLo : 126.81957601372,
plygnLa : 37.4763558590051
},
{
setSeqNo : 1,
plygnSeqNo : 2734,
plygnLo : 126.819545824524,
plygnLa : 37.476348784158
},
{
setSeqNo : 1,
plygnSeqNo : 2735,
plygnLo : 126.819515101136,
plygnLa : 37.4763416996249
},
{
setSeqNo : 1,
plygnSeqNo : 2736,
plygnLo : 126.81942344885,
plygnLa : 37.4763280442293
},
{
setSeqNo : 1,
plygnSeqNo : 2737,
plygnLo : 126.819344906259,
plygnLa : 37.4763020184099
},
{
setSeqNo : 1,
plygnSeqNo : 2738,
plygnLo : 126.819307674013,
plygnLa : 37.4762898520692
},
{
setSeqNo : 1,
plygnSeqNo : 2739,
plygnLo : 126.819296547836,
plygnLa : 37.4762856002842
},
{
setSeqNo : 1,
plygnSeqNo : 2740,
plygnLo : 126.819143239025,
plygnLa : 37.4762059766843
},
{
setSeqNo : 1,
plygnSeqNo : 2741,
plygnLo : 126.819079293352,
plygnLa : 37.4761329497482
},
{
setSeqNo : 1,
plygnSeqNo : 2742,
plygnLo : 126.819064594133,
plygnLa : 37.4760777418472
},
{
setSeqNo : 1,
plygnSeqNo : 2743,
plygnLo : 126.819055914924,
plygnLa : 37.4759369471937
},
{
setSeqNo : 1,
plygnSeqNo : 2744,
plygnLo : 126.819071222582,
plygnLa : 37.4758204079294
},
{
setSeqNo : 1,
plygnSeqNo : 2745,
plygnLo : 126.819070911383,
plygnLa : 37.4758043419713
},
{
setSeqNo : 1,
plygnSeqNo : 2746,
plygnLo : 126.81905807567,
plygnLa : 37.4756339878493
},
{
setSeqNo : 1,
plygnSeqNo : 2747,
plygnLo : 126.81905203454,
plygnLa : 37.4755005219854
},
{
setSeqNo : 1,
plygnSeqNo : 2748,
plygnLo : 126.819069298525,
plygnLa : 37.4754498499149
},
{
setSeqNo : 1,
plygnSeqNo : 2749,
plygnLo : 126.819137954686,
plygnLa : 37.4754026703284
},
{
setSeqNo : 1,
plygnSeqNo : 2750,
plygnLo : 126.819300026904,
plygnLa : 37.4752902967717
},
{
setSeqNo : 1,
plygnSeqNo : 2751,
plygnLo : 126.819422661345,
plygnLa : 37.4751989604963
},
{
setSeqNo : 1,
plygnSeqNo : 2752,
plygnLo : 126.819412645577,
plygnLa : 37.4751795295294
},
{
setSeqNo : 1,
plygnSeqNo : 2753,
plygnLo : 126.819387037068,
plygnLa : 37.4751763908918
},
{
setSeqNo : 1,
plygnSeqNo : 2754,
plygnLo : 126.81931070872,
plygnLa : 37.4751841571159
},
{
setSeqNo : 1,
plygnSeqNo : 2755,
plygnLo : 126.819283525759,
plygnLa : 37.4751773575383
},
{
setSeqNo : 1,
plygnSeqNo : 2756,
plygnLo : 126.819158182612,
plygnLa : 37.4752196823535
},
{
setSeqNo : 1,
plygnSeqNo : 2757,
plygnLo : 126.818951860985,
plygnLa : 37.4752911638303
},
{
setSeqNo : 1,
plygnSeqNo : 2758,
plygnLo : 126.818821595954,
plygnLa : 37.4753270028914
},
{
setSeqNo : 1,
plygnSeqNo : 2759,
plygnLo : 126.818807312381,
plygnLa : 37.4752402604201
},
{
setSeqNo : 1,
plygnSeqNo : 2760,
plygnLo : 126.818595830393,
plygnLa : 37.4752582327043
},
{
setSeqNo : 1,
plygnSeqNo : 2761,
plygnLo : 126.818465231855,
plygnLa : 37.4752816807865
},
{
setSeqNo : 1,
plygnSeqNo : 2762,
plygnLo : 126.818399837071,
plygnLa : 37.4752979140167
},
{
setSeqNo : 1,
plygnSeqNo : 2763,
plygnLo : 126.818321230776,
plygnLa : 37.4752991984323
},
{
setSeqNo : 1,
plygnSeqNo : 2764,
plygnLo : 126.818632626423,
plygnLa : 37.4740807972996
},
{
setSeqNo : 1,
plygnSeqNo : 2765,
plygnLo : 126.817918364391,
plygnLa : 37.4736891589413
},
{
setSeqNo : 1,
plygnSeqNo : 2766,
plygnLo : 126.817640497394,
plygnLa : 37.4731878240995
},
{
setSeqNo : 1,
plygnSeqNo : 2767,
plygnLo : 126.817076254063,
plygnLa : 37.4732880290264
},
{
setSeqNo : 1,
plygnSeqNo : 2768,
plygnLo : 126.816953054276,
plygnLa : 37.4736789244708
},
{
setSeqNo : 1,
plygnSeqNo : 2769,
plygnLo : 126.816562427206,
plygnLa : 37.473994232243
},
{
setSeqNo : 1,
plygnSeqNo : 2770,
plygnLo : 126.815989701262,
plygnLa : 37.4740243023933
},
{
setSeqNo : 1,
plygnSeqNo : 2771,
plygnLo : 126.815473485731,
plygnLa : 37.4740505204849
},
{
setSeqNo : 1,
plygnSeqNo : 2772,
plygnLo : 126.81481620222,
plygnLa : 37.4745526389495
},
{
setSeqNo : 1,
plygnSeqNo : 2773,
plygnLo : 126.814628545099,
plygnLa : 37.474649478706
},
{
setSeqNo : 1,
plygnSeqNo : 2774,
plygnLo : 126.814729795151,
plygnLa : 37.4750573425818
},
{
setSeqNo : 1,
plygnSeqNo : 2775,
plygnLo : 126.814964868737,
plygnLa : 37.4758601550195
},
{
setSeqNo : 1,
plygnSeqNo : 2776,
plygnLo : 126.815221791771,
plygnLa : 37.476251099558
},
{
setSeqNo : 1,
plygnSeqNo : 2777,
plygnLo : 126.815295533377,
plygnLa : 37.4763621556169
},
{
setSeqNo : 1,
plygnSeqNo : 2778,
plygnLo : 126.816108737448,
plygnLa : 37.4767449541027
},
{
setSeqNo : 1,
plygnSeqNo : 2779,
plygnLo : 126.816100333151,
plygnLa : 37.4768612231741
},
{
setSeqNo : 1,
plygnSeqNo : 2780,
plygnLo : 126.816071879216,
plygnLa : 37.4770805003836
},
{
setSeqNo : 1,
plygnSeqNo : 2781,
plygnLo : 126.816411496628,
plygnLa : 37.4775371837894
},
{
setSeqNo : 1,
plygnSeqNo : 2782,
plygnLo : 126.816999713126,
plygnLa : 37.4779767742016
},
{
setSeqNo : 1,
plygnSeqNo : 2783,
plygnLo : 126.817060723156,
plygnLa : 37.478025298434
},
{
setSeqNo : 1,
plygnSeqNo : 2784,
plygnLo : 126.817210431629,
plygnLa : 37.4781356244116
},
{
setSeqNo : 1,
plygnSeqNo : 2785,
plygnLo : 126.817323995942,
plygnLa : 37.4781397289322
},
{
setSeqNo : 1,
plygnSeqNo : 2786,
plygnLo : 126.818256294932,
plygnLa : 37.4781642625269
},
{
setSeqNo : 1,
plygnSeqNo : 2787,
plygnLo : 126.81837356413,
plygnLa : 37.478319308526
},
{
setSeqNo : 1,
plygnSeqNo : 2788,
plygnLo : 126.818779421105,
plygnLa : 37.4788630883746
},
{
setSeqNo : 1,
plygnSeqNo : 2789,
plygnLo : 126.818997377531,
plygnLa : 37.479162438368
},
{
setSeqNo : 1,
plygnSeqNo : 2790,
plygnLo : 126.819367363288,
plygnLa : 37.4798635393309
},
{
setSeqNo : 1,
plygnSeqNo : 2791,
plygnLo : 126.81952586548,
plygnLa : 37.4802807653158
},
{
setSeqNo : 1,
plygnSeqNo : 2792,
plygnLo : 126.819542890611,
plygnLa : 37.4803235896162
},
{
setSeqNo : 1,
plygnSeqNo : 2793,
plygnLo : 126.819597834152,
plygnLa : 37.4806139773252
},
{
setSeqNo : 1,
plygnSeqNo : 2794,
plygnLo : 126.819577976162,
plygnLa : 37.4807927224421
},
{
setSeqNo : 1,
plygnSeqNo : 2795,
plygnLo : 126.819687686275,
plygnLa : 37.4810085824902
},
{
setSeqNo : 1,
plygnSeqNo : 2796,
plygnLo : 126.819746238219,
plygnLa : 37.4811215854399
},
{
setSeqNo : 1,
plygnSeqNo : 2797,
plygnLo : 126.819759931019,
plygnLa : 37.4811542497475
},
{
setSeqNo : 1,
plygnSeqNo : 2798,
plygnLo : 126.819775569508,
plygnLa : 37.4811906106578
},
{
setSeqNo : 1,
plygnSeqNo : 2799,
plygnLo : 126.819787156098,
plygnLa : 37.4812187846785
},
{
setSeqNo : 1,
plygnSeqNo : 2800,
plygnLo : 126.819801387287,
plygnLa : 37.4812534408444
},
{
setSeqNo : 1,
plygnSeqNo : 2801,
plygnLo : 126.819814388191,
plygnLa : 37.4812858255406
},
{
setSeqNo : 1,
plygnSeqNo : 2802,
plygnLo : 126.819843190264,
plygnLa : 37.4813543014024
},
{
setSeqNo : 1,
plygnSeqNo : 2803,
plygnLo : 126.819867779414,
plygnLa : 37.4814106515279
},
{
setSeqNo : 1,
plygnSeqNo : 2804,
plygnLo : 126.819887976316,
plygnLa : 37.481459958201
},
{
setSeqNo : 1,
plygnSeqNo : 2805,
plygnLo : 126.819899585838,
plygnLa : 37.4814796706057
},
{
setSeqNo : 1,
plygnSeqNo : 2806,
plygnLo : 126.819914002894,
plygnLa : 37.4815118059754
},
{
setSeqNo : 1,
plygnSeqNo : 2807,
plygnLo : 126.819946707465,
plygnLa : 37.4815735204712
},
{
setSeqNo : 1,
plygnSeqNo : 2808,
plygnLo : 126.819966584687,
plygnLa : 37.4816104278372
},
{
setSeqNo : 1,
plygnSeqNo : 2809,
plygnLo : 126.819982940256,
plygnLa : 37.4816405839416
},
{
setSeqNo : 1,
plygnSeqNo : 2810,
plygnLo : 126.819986458173,
plygnLa : 37.4816442455801
},
{
setSeqNo : 1,
plygnSeqNo : 2811,
plygnLo : 126.819984656784,
plygnLa : 37.4816605788339
},
{
setSeqNo : 1,
plygnSeqNo : 2812,
plygnLo : 126.819984929238,
plygnLa : 37.4816926723921
},
{
setSeqNo : 1,
plygnSeqNo : 2813,
plygnLo : 126.819981270306,
plygnLa : 37.4817469971208
},
{
setSeqNo : 1,
plygnSeqNo : 2814,
plygnLo : 126.81998084508,
plygnLa : 37.4817731973916
},
{
setSeqNo : 1,
plygnSeqNo : 2815,
plygnLo : 126.819977983965,
plygnLa : 37.4817875555869
},
{
setSeqNo : 1,
plygnSeqNo : 2816,
plygnLo : 126.819973501808,
plygnLa : 37.4818173898516
},
{
setSeqNo : 1,
plygnSeqNo : 2817,
plygnLo : 126.819963831211,
plygnLa : 37.4818750837058
},
{
setSeqNo : 1,
plygnSeqNo : 2818,
plygnLo : 126.819962716619,
plygnLa : 37.4818914258629
},
{
setSeqNo : 1,
plygnSeqNo : 2819,
plygnLo : 126.819938762252,
plygnLa : 37.4819369976384
},
{
setSeqNo : 1,
plygnSeqNo : 2820,
plygnLo : 126.819922625099,
plygnLa : 37.4819668242282
},
{
setSeqNo : 1,
plygnSeqNo : 2821,
plygnLo : 126.81989709267,
plygnLa : 37.4820002744326
},
{
setSeqNo : 1,
plygnSeqNo : 2822,
plygnLo : 126.81984567978,
plygnLa : 37.4820770781285
},
{
setSeqNo : 1,
plygnSeqNo : 2823,
plygnLo : 126.819799583338,
plygnLa : 37.4821473849733
},
{
setSeqNo : 1,
plygnSeqNo : 2824,
plygnLo : 126.81973897207,
plygnLa : 37.4822267048257
},
{
setSeqNo : 1,
plygnSeqNo : 2825,
plygnLo : 126.819682069314,
plygnLa : 37.4823051751252
},
{
setSeqNo : 1,
plygnSeqNo : 2826,
plygnLo : 126.819613119519,
plygnLa : 37.482400512692
},
{
setSeqNo : 1,
plygnSeqNo : 2827,
plygnLo : 126.819583698164,
plygnLa : 37.482438749771
},
{
setSeqNo : 1,
plygnSeqNo : 2828,
plygnLo : 126.819567876329,
plygnLa : 37.4824826502077
},
{
setSeqNo : 1,
plygnSeqNo : 2829,
plygnLo : 126.819561998988,
plygnLa : 37.4825006615671
},
{
setSeqNo : 1,
plygnSeqNo : 2830,
plygnLo : 126.819555424416,
plygnLa : 37.4825169959287
},
{
setSeqNo : 1,
plygnSeqNo : 2831,
plygnLo : 126.819553956202,
plygnLa : 37.4825347152493
},
{
setSeqNo : 1,
plygnSeqNo : 2832,
plygnLo : 126.819553368949,
plygnLa : 37.4825623218447
},
{
setSeqNo : 1,
plygnSeqNo : 2833,
plygnLo : 126.819550276944,
plygnLa : 37.4825969503305
},
{
setSeqNo : 1,
plygnSeqNo : 2834,
plygnLo : 126.8195484598,
plygnLa : 37.4826191942096
},
{
setSeqNo : 1,
plygnSeqNo : 2835,
plygnLo : 126.819543003436,
plygnLa : 37.4826828147648
},
{
setSeqNo : 1,
plygnSeqNo : 2836,
plygnLo : 126.819540017311,
plygnLa : 37.4827486990771
},
{
setSeqNo : 1,
plygnSeqNo : 2837,
plygnLo : 126.819536892718,
plygnLa : 37.4828016102427
},
{
setSeqNo : 1,
plygnSeqNo : 2838,
plygnLo : 126.81953396611,
plygnLa : 37.4828379429188
},
{
setSeqNo : 1,
plygnSeqNo : 2839,
plygnLo : 126.819529660602,
plygnLa : 37.4828652469746
},
{
setSeqNo : 1,
plygnSeqNo : 2840,
plygnLo : 126.819525550807,
plygnLa : 37.4828911426935
},
{
setSeqNo : 1,
plygnSeqNo : 2841,
plygnLo : 126.819516050594,
plygnLa : 37.4829429355568
},
{
setSeqNo : 1,
plygnSeqNo : 2842,
plygnLo : 126.81950708433,
plygnLa : 37.4829989554844
},
{
setSeqNo : 1,
plygnSeqNo : 2843,
plygnLo : 126.819502064064,
plygnLa : 37.4830276544325
},
{
setSeqNo : 1,
plygnSeqNo : 2844,
plygnLo : 126.819494741197,
plygnLa : 37.4830628532484
},
{
setSeqNo : 1,
plygnSeqNo : 2845,
plygnLo : 126.819487584963,
plygnLa : 37.4830952065888
},
{
setSeqNo : 1,
plygnSeqNo : 2846,
plygnLo : 126.819469119854,
plygnLa : 37.4831377054238
},
{
setSeqNo : 1,
plygnSeqNo : 2847,
plygnLo : 126.819449756838,
plygnLa : 37.483178500795
},
{
setSeqNo : 1,
plygnSeqNo : 2848,
plygnLo : 126.819432182595,
plygnLa : 37.4832176120296
},
{
setSeqNo : 1,
plygnSeqNo : 2849,
plygnLo : 126.81941565391,
plygnLa : 37.4832544742524
},
{
setSeqNo : 1,
plygnSeqNo : 2850,
plygnLo : 126.81940394119,
plygnLa : 37.483282043711
},
{
setSeqNo : 1,
plygnSeqNo : 2851,
plygnLo : 126.819390611356,
plygnLa : 37.4833093414347
},
{
setSeqNo : 1,
plygnSeqNo : 2852,
plygnLo : 126.819398180061,
plygnLa : 37.4833211745779
},
{
setSeqNo : 1,
plygnSeqNo : 2853,
plygnLo : 126.819407326264,
plygnLa : 37.4833397769523
},
{
setSeqNo : 1,
plygnSeqNo : 2854,
plygnLo : 126.819419108393,
plygnLa : 37.4833631576392
},
{
setSeqNo : 1,
plygnSeqNo : 2855,
plygnLo : 126.819430701799,
plygnLa : 37.4833890788935
},
{
setSeqNo : 1,
plygnSeqNo : 2856,
plygnLo : 126.819446886929,
plygnLa : 37.4834200813005
},
{
setSeqNo : 1,
plygnSeqNo : 2857,
plygnLo : 126.819462362302,
plygnLa : 37.4834488097313
},
{
setSeqNo : 1,
plygnSeqNo : 2858,
plygnLo : 126.819475538286,
plygnLa : 37.4834753116943
},
{
setSeqNo : 1,
plygnSeqNo : 2859,
plygnLo : 126.819490838437,
plygnLa : 37.4835071490642
},
{
setSeqNo : 1,
plygnSeqNo : 2860,
plygnLo : 126.819501908652,
plygnLa : 37.4835294110542
},
{
setSeqNo : 1,
plygnSeqNo : 2861,
plygnLo : 126.819520386947,
plygnLa : 37.4835609746003
},
{
setSeqNo : 1,
plygnSeqNo : 2862,
plygnLo : 126.819540966546,
plygnLa : 37.4835970465559
},
{
setSeqNo : 1,
plygnSeqNo : 2863,
plygnLo : 126.819558382194,
plygnLa : 37.4836283300047
},
{
setSeqNo : 1,
plygnSeqNo : 2864,
plygnLo : 126.819573339705,
plygnLa : 37.4836522824065
},
{
setSeqNo : 1,
plygnSeqNo : 2865,
plygnLo : 126.81956672965,
plygnLa : 37.4836784552989
},
{
setSeqNo : 1,
plygnSeqNo : 2866,
plygnLo : 126.819560860722,
plygnLa : 37.4836967461749
},
{
setSeqNo : 1,
plygnSeqNo : 2867,
plygnLo : 126.819549160897,
plygnLa : 37.4837147471017
},
{
setSeqNo : 1,
plygnSeqNo : 2868,
plygnLo : 126.819537807825,
plygnLa : 37.4837338679128
},
{
setSeqNo : 1,
plygnSeqNo : 2869,
plygnLo : 126.81952734371,
plygnLa : 37.4837501963712
},
{
setSeqNo : 1,
plygnSeqNo : 2870,
plygnLo : 126.819524683258,
plygnLa : 37.483756949994
},
{
setSeqNo : 1,
plygnSeqNo : 2871,
plygnLo : 126.819512227969,
plygnLa : 37.4837924025683
},
{
setSeqNo : 1,
plygnSeqNo : 2872,
plygnLo : 126.819502813045,
plygnLa : 37.4838140745442
},
{
setSeqNo : 1,
plygnSeqNo : 2873,
plygnLo : 126.819496596838,
plygnLa : 37.4838267332639
},
{
setSeqNo : 1,
plygnSeqNo : 2874,
plygnLo : 126.819471935726,
plygnLa : 37.4838700524256
},
{
setSeqNo : 1,
plygnSeqNo : 2875,
plygnLo : 126.819452777789,
plygnLa : 37.4839046571259
},
{
setSeqNo : 1,
plygnSeqNo : 2876,
plygnLo : 126.819424923552,
plygnLa : 37.4839533212169
},
{
setSeqNo : 1,
plygnSeqNo : 2877,
plygnLo : 126.819385533372,
plygnLa : 37.4840225304601
},
{
setSeqNo : 1,
plygnSeqNo : 2878,
plygnLo : 126.819342958036,
plygnLa : 37.484095669707
},
{
setSeqNo : 1,
plygnSeqNo : 2879,
plygnLo : 126.819325035822,
plygnLa : 37.4841282855893
},
{
setSeqNo : 1,
plygnSeqNo : 2880,
plygnLo : 126.819313822739,
plygnLa : 37.4841646068189
},
{
setSeqNo : 1,
plygnSeqNo : 2881,
plygnLo : 126.81930758246,
plygnLa : 37.4841831838152
},
{
setSeqNo : 1,
plygnSeqNo : 2882,
plygnLo : 126.819310895351,
plygnLa : 37.4842017674396
},
{
setSeqNo : 1,
plygnSeqNo : 2883,
plygnLo : 126.819313473281,
plygnLa : 37.4842290715291
},
{
setSeqNo : 1,
plygnSeqNo : 2884,
plygnLo : 126.819317489106,
plygnLa : 37.4842519007968
},
{
setSeqNo : 1,
plygnSeqNo : 2885,
plygnLo : 126.819320805954,
plygnLa : 37.4842690595761
},
{
setSeqNo : 1,
plygnSeqNo : 2886,
plygnLo : 126.819326600696,
plygnLa : 37.4842851334479
},
{
setSeqNo : 1,
plygnSeqNo : 2887,
plygnLo : 126.819344711872,
plygnLa : 37.4843130392103
},
{
setSeqNo : 1,
plygnSeqNo : 2888,
plygnLo : 126.819367062841,
plygnLa : 37.4843516465484
},
{
setSeqNo : 1,
plygnSeqNo : 2889,
plygnLo : 126.819386243462,
plygnLa : 37.4843823636385
},
{
setSeqNo : 1,
plygnSeqNo : 2890,
plygnLo : 126.819402780502,
plygnLa : 37.4844119602615
},
{
setSeqNo : 1,
plygnSeqNo : 2891,
plygnLo : 126.819420543999,
plygnLa : 37.484443800824
},
{
setSeqNo : 1,
plygnSeqNo : 2892,
plygnLo : 126.819437269336,
plygnLa : 37.4844711363435
},
{
setSeqNo : 1,
plygnSeqNo : 2893,
plygnLo : 126.819451156497,
plygnLa : 37.4844973409244
},
{
setSeqNo : 1,
plygnSeqNo : 2894,
plygnLo : 126.819467701673,
plygnLa : 37.4845198814657
},
{
setSeqNo : 1,
plygnSeqNo : 2895,
plygnLo : 126.819476280759,
plygnLa : 37.4845536831843
},
{
setSeqNo : 1,
plygnSeqNo : 2896,
plygnLo : 126.819488198803,
plygnLa : 37.4845945255949
},
{
setSeqNo : 1,
plygnSeqNo : 2897,
plygnLo : 126.819482836271,
plygnLa : 37.4846193121545
},
{
setSeqNo : 1,
plygnSeqNo : 2898,
plygnLo : 126.819473739716,
plygnLa : 37.4846589970516
},
{
setSeqNo : 1,
plygnSeqNo : 2899,
plygnLo : 126.819466762256,
plygnLa : 37.4846924764513
},
{
setSeqNo : 1,
plygnSeqNo : 2900,
plygnLo : 126.81947251763,
plygnLa : 37.4847206603602
},
{
setSeqNo : 1,
plygnSeqNo : 2901,
plygnLo : 126.819484746169,
plygnLa : 37.4847781160906
},
{
setSeqNo : 1,
plygnSeqNo : 2902,
plygnLo : 126.819491557554,
plygnLa : 37.4848085363558
},
{
setSeqNo : 1,
plygnSeqNo : 2903,
plygnLo : 126.819482094087,
plygnLa : 37.4848552571029
},
{
setSeqNo : 1,
plygnSeqNo : 2904,
plygnLo : 126.819468521758,
plygnLa : 37.4849135214626
},
{
setSeqNo : 1,
plygnSeqNo : 2905,
plygnLo : 126.819447595111,
plygnLa : 37.4849455825637
},
{
setSeqNo : 1,
plygnSeqNo : 2906,
plygnLo : 126.819413199988,
plygnLa : 37.4850015440042
},
{
setSeqNo : 1,
plygnSeqNo : 2907,
plygnLo : 126.819400906126,
plygnLa : 37.485034773265
},
{
setSeqNo : 1,
plygnSeqNo : 2908,
plygnLo : 126.819386868485,
plygnLa : 37.485075296161
},
{
setSeqNo : 1,
plygnSeqNo : 2909,
plygnLo : 126.819365142297,
plygnLa : 37.4851428191804
},
{
setSeqNo : 1,
plygnSeqNo : 2910,
plygnLo : 126.819362297972,
plygnLa : 37.4851504283091
},
{
setSeqNo : 1,
plygnSeqNo : 2911,
plygnLo : 126.819361738229,
plygnLa : 37.4851619786118
},
{
setSeqNo : 1,
plygnSeqNo : 2912,
plygnLo : 126.819352807135,
plygnLa : 37.4852033478824
},
{
setSeqNo : 1,
plygnSeqNo : 2913,
plygnLo : 126.819342051889,
plygnLa : 37.4852697716516
},
{
setSeqNo : 1,
plygnSeqNo : 2914,
plygnLo : 126.81933435738,
plygnLa : 37.4853097545353
},
{
setSeqNo : 1,
plygnSeqNo : 2915,
plygnLo : 126.81932521799,
plygnLa : 37.485361827261
},
{
setSeqNo : 1,
plygnSeqNo : 2916,
plygnLo : 126.819319839755,
plygnLa : 37.4853933540559
},
{
setSeqNo : 1,
plygnSeqNo : 2917,
plygnLo : 126.819306678805,
plygnLa : 37.4854302213472
},
{
setSeqNo : 1,
plygnSeqNo : 2918,
plygnLo : 126.819289959519,
plygnLa : 37.4854752448914
},
{
setSeqNo : 1,
plygnSeqNo : 2919,
plygnLo : 126.81929930426,
plygnLa : 37.4854825672058
},
{
setSeqNo : 1,
plygnSeqNo : 2920,
plygnLo : 126.81931674802,
plygnLa : 37.4855020376501
},
{
setSeqNo : 1,
plygnSeqNo : 2921,
plygnLo : 126.819326997456,
plygnLa : 37.485504304971
},
{
setSeqNo : 1,
plygnSeqNo : 2922,
plygnLo : 126.819417364387,
plygnLa : 37.4855356918319
},
{
setSeqNo : 1,
plygnSeqNo : 2923,
plygnLo : 126.81947791775,
plygnLa : 37.4855563260206
},
{
setSeqNo : 1,
plygnSeqNo : 2924,
plygnLo : 126.819508282613,
plygnLa : 37.4855676544967
},
{
setSeqNo : 1,
plygnSeqNo : 2925,
plygnLo : 126.819513919895,
plygnLa : 37.4855698968862
},
{
setSeqNo : 1,
plygnSeqNo : 2926,
plygnLo : 126.819614534899,
plygnLa : 37.4856035690471
},
{
setSeqNo : 1,
plygnSeqNo : 2927,
plygnLo : 126.819711264666,
plygnLa : 37.4856400464792
},
{
setSeqNo : 1,
plygnSeqNo : 2928,
plygnLo : 126.819764214028,
plygnLa : 37.4856592745851
},
{
setSeqNo : 1,
plygnSeqNo : 2929,
plygnLo : 126.819803578085,
plygnLa : 37.4856705964851
},
{
setSeqNo : 1,
plygnSeqNo : 2930,
plygnLo : 126.819824764291,
plygnLa : 37.485676541161
},
{
setSeqNo : 1,
plygnSeqNo : 2931,
plygnLo : 126.819923455176,
plygnLa : 37.4857068219109
},
{
setSeqNo : 1,
plygnSeqNo : 2932,
plygnLo : 126.820000070557,
plygnLa : 37.4857297263019
},
{
setSeqNo : 1,
plygnSeqNo : 2933,
plygnLo : 126.820033965978,
plygnLa : 37.4857399317695
},
{
setSeqNo : 1,
plygnSeqNo : 2934,
plygnLo : 126.820123293112,
plygnLa : 37.4857704786423
},
{
setSeqNo : 1,
plygnSeqNo : 2935,
plygnLo : 126.820232034998,
plygnLa : 37.4858058370184
},
{
setSeqNo : 1,
plygnSeqNo : 2936,
plygnLo : 126.820352956579,
plygnLa : 37.4858451631165
},
{
setSeqNo : 1,
plygnSeqNo : 2937,
plygnLo : 126.820459752381,
plygnLa : 37.485881069032
},
{
setSeqNo : 1,
plygnSeqNo : 2938,
plygnLo : 126.820521708877,
plygnLa : 37.4859017344136
},
{
setSeqNo : 1,
plygnSeqNo : 2939,
plygnLo : 126.820540426395,
plygnLa : 37.4859085196833
},
{
setSeqNo : 1,
plygnSeqNo : 2940,
plygnLo : 126.820636272803,
plygnLa : 37.4859421574991
},
{
setSeqNo : 1,
plygnSeqNo : 2941,
plygnLo : 126.820641922179,
plygnLa : 37.485944138587
},
{
setSeqNo : 1,
plygnSeqNo : 2942,
plygnLo : 126.8207441253,
plygnLa : 37.4859803352683
},
{
setSeqNo : 1,
plygnSeqNo : 2943,
plygnLo : 126.820856735701,
plygnLa : 37.4860202237239
},
{
setSeqNo : 1,
plygnSeqNo : 2944,
plygnLo : 126.820974472714,
plygnLa : 37.4860623536577
},
{
setSeqNo : 1,
plygnSeqNo : 2945,
plygnLo : 126.820991069325,
plygnLa : 37.4860680104287
},
{
setSeqNo : 1,
plygnSeqNo : 2946,
plygnLo : 126.821092034101,
plygnLa : 37.4861030785035
},
{
setSeqNo : 1,
plygnSeqNo : 2947,
plygnLo : 126.821185945594,
plygnLa : 37.4861364417874
},
{
setSeqNo : 1,
plygnSeqNo : 2948,
plygnLo : 126.821206595889,
plygnLa : 37.4861446453196
},
{
setSeqNo : 1,
plygnSeqNo : 2949,
plygnLo : 126.821292028569,
plygnLa : 37.4861774371689
},
{
setSeqNo : 1,
plygnSeqNo : 2950,
plygnLo : 126.821328346249,
plygnLa : 37.4862109920935
},
{
setSeqNo : 1,
plygnSeqNo : 2951,
plygnLo : 126.821377512907,
plygnLa : 37.486260621686
},
{
setSeqNo : 1,
plygnSeqNo : 2952,
plygnLo : 126.821438312611,
plygnLa : 37.4863203972206
},
{
setSeqNo : 1,
plygnSeqNo : 2953,
plygnLo : 126.821510225203,
plygnLa : 37.4863908922407
},
{
setSeqNo : 1,
plygnSeqNo : 2954,
plygnLo : 126.821568386306,
plygnLa : 37.4864478616855
},
{
setSeqNo : 1,
plygnSeqNo : 2955,
plygnLo : 126.821620200065,
plygnLa : 37.4865011714213
},
{
setSeqNo : 1,
plygnSeqNo : 2956,
plygnLo : 126.82163678838,
plygnLa : 37.4865155494507
},
{
setSeqNo : 1,
plygnSeqNo : 2957,
plygnLo : 126.821722402713,
plygnLa : 37.486539618435
},
{
setSeqNo : 1,
plygnSeqNo : 2958,
plygnLo : 126.821877234827,
plygnLa : 37.4865834892795
},
{
setSeqNo : 1,
plygnSeqNo : 2959,
plygnLo : 126.821993065097,
plygnLa : 37.4866149224031
},
{
setSeqNo : 1,
plygnSeqNo : 2960,
plygnLo : 126.822137832683,
plygnLa : 37.4866545601212
},
{
setSeqNo : 1,
plygnSeqNo : 2961,
plygnLo : 126.822243766902,
plygnLa : 37.4866834270221
},
{
setSeqNo : 1,
plygnSeqNo : 2962,
plygnLo : 126.82234439915,
plygnLa : 37.4867109062168
},
{
setSeqNo : 1,
plygnSeqNo : 2963,
plygnLo : 126.822390660486,
plygnLa : 37.4867233665521
},
{
setSeqNo : 1,
plygnSeqNo : 2964,
plygnLo : 126.822406125579,
plygnLa : 37.4867571767389
},
{
setSeqNo : 1,
plygnSeqNo : 2965,
plygnLo : 126.822420005715,
plygnLa : 37.4867876065649
},
{
setSeqNo : 1,
plygnSeqNo : 2966,
plygnLo : 126.822436188634,
plygnLa : 37.4868202925238
},
{
setSeqNo : 1,
plygnSeqNo : 2967,
plygnLo : 126.822454466464,
plygnLa : 37.4868602875744
},
{
setSeqNo : 1,
plygnSeqNo : 2968,
plygnLo : 126.822472924475,
plygnLa : 37.4869005917347
},
{
setSeqNo : 1,
plygnSeqNo : 2969,
plygnLo : 126.822482947205,
plygnLa : 37.486921724592
},
{
setSeqNo : 1,
plygnSeqNo : 2970,
plygnLo : 126.822500412315,
plygnLa : 37.4869329964771
},
{
setSeqNo : 1,
plygnSeqNo : 2971,
plygnLo : 126.822518573758,
plygnLa : 37.4869459805427
},
{
setSeqNo : 1,
plygnSeqNo : 2972,
plygnLo : 126.822543960339,
plygnLa : 37.4869645971267
},
{
setSeqNo : 1,
plygnSeqNo : 2973,
plygnLo : 126.822569004288,
plygnLa : 37.4869840782139
},
{
setSeqNo : 1,
plygnSeqNo : 2974,
plygnLo : 126.822791906725,
plygnLa : 37.4871550484486
},
{
setSeqNo : 1,
plygnSeqNo : 2975,
plygnLo : 126.822911127854,
plygnLa : 37.4872453278623
},
{
setSeqNo : 1,
plygnSeqNo : 2976,
plygnLo : 126.822957503386,
plygnLa : 37.4872802938268
},
{
setSeqNo : 1,
plygnSeqNo : 2977,
plygnLo : 126.822997009685,
plygnLa : 37.4873093564492
},
{
setSeqNo : 1,
plygnSeqNo : 2978,
plygnLo : 126.823105102322,
plygnLa : 37.4873954128238
},
{
setSeqNo : 1,
plygnSeqNo : 2979,
plygnLo : 126.82322519556,
plygnLa : 37.4874901987261
},
{
setSeqNo : 1,
plygnSeqNo : 2980,
plygnLo : 126.823322554291,
plygnLa : 37.4875587489688
},
{
setSeqNo : 1,
plygnSeqNo : 2981,
plygnLo : 126.823413388278,
plygnLa : 37.4876230900402
},
{
setSeqNo : 1,
plygnSeqNo : 2982,
plygnLo : 126.823587120401,
plygnLa : 37.4877424560999
},
{
setSeqNo : 1,
plygnSeqNo : 2983,
plygnLo : 126.823560889121,
plygnLa : 37.4877753474182
},
{
setSeqNo : 1,
plygnSeqNo : 2984,
plygnLo : 126.823556318074,
plygnLa : 37.4877719719832
},
{
setSeqNo : 1,
plygnSeqNo : 2985,
plygnLo : 126.823506406129,
plygnLa : 37.4877352805651
},
{
setSeqNo : 1,
plygnSeqNo : 2986,
plygnLo : 126.823010736709,
plygnLa : 37.4881504146394
},
{
setSeqNo : 1,
plygnSeqNo : 2987,
plygnLo : 126.823037682497,
plygnLa : 37.4881873421616
},
{
setSeqNo : 1,
plygnSeqNo : 2988,
plygnLo : 126.82304057024,
plygnLa : 37.488380765388
},
{
setSeqNo : 1,
plygnSeqNo : 2989,
plygnLo : 126.823046954033,
plygnLa : 37.4887442739019
},
{
setSeqNo : 1,
plygnSeqNo : 2990,
plygnLo : 126.823047813056,
plygnLa : 37.4888248145959
},
{
setSeqNo : 1,
plygnSeqNo : 2991,
plygnLo : 126.823046916822,
plygnLa : 37.4890537222531
},
{
setSeqNo : 1,
plygnSeqNo : 2992,
plygnLo : 126.823047066904,
plygnLa : 37.4892910816695
},
{
setSeqNo : 1,
plygnSeqNo : 2993,
plygnLo : 126.823005562248,
plygnLa : 37.4893554942632
},
{
setSeqNo : 1,
plygnSeqNo : 2994,
plygnLo : 126.822911034804,
plygnLa : 37.4895116020236
},
{
setSeqNo : 1,
plygnSeqNo : 2995,
plygnLo : 126.822834051928,
plygnLa : 37.4896359493761
},
{
setSeqNo : 1,
plygnSeqNo : 2996,
plygnLo : 126.82281797613,
plygnLa : 37.4897150517429
},
{
setSeqNo : 1,
plygnSeqNo : 2997,
plygnLo : 126.822779532172,
plygnLa : 37.489900536569
},
{
setSeqNo : 1,
plygnSeqNo : 2998,
plygnLo : 126.822762393567,
plygnLa : 37.4899793484087
},
{
setSeqNo : 1,
plygnSeqNo : 2999,
plygnLo : 126.822739925242,
plygnLa : 37.4899849449268
},
{
setSeqNo : 1,
plygnSeqNo : 3000,
plygnLo : 126.822570393851,
plygnLa : 37.4900317119914
},
{
setSeqNo : 1,
plygnSeqNo : 3001,
plygnLo : 126.822520359926,
plygnLa : 37.4900457188498
},
{
setSeqNo : 1,
plygnSeqNo : 3002,
plygnLo : 126.822321293038,
plygnLa : 37.4900980525006
},
{
setSeqNo : 1,
plygnSeqNo : 3003,
plygnLo : 126.822090057124,
plygnLa : 37.490159645501
},
{
setSeqNo : 1,
plygnSeqNo : 3004,
plygnLo : 126.821950552815,
plygnLa : 37.4902002766007
},
{
setSeqNo : 1,
plygnSeqNo : 3005,
plygnLo : 126.821632686666,
plygnLa : 37.4902870724127
},
{
setSeqNo : 1,
plygnSeqNo : 3006,
plygnLo : 126.821512972731,
plygnLa : 37.4903296876616
},
{
setSeqNo : 1,
plygnSeqNo : 3007,
plygnLo : 126.821465404088,
plygnLa : 37.4903484818061
},
{
setSeqNo : 1,
plygnSeqNo : 3008,
plygnLo : 126.821367231377,
plygnLa : 37.4903919759721
},
{
setSeqNo : 1,
plygnSeqNo : 3009,
plygnLo : 126.821275705064,
plygnLa : 37.4904734855981
},
{
setSeqNo : 1,
plygnSeqNo : 3010,
plygnLo : 126.821148606944,
plygnLa : 37.4905307842338
},
{
setSeqNo : 1,
plygnSeqNo : 3011,
plygnLo : 126.821023659626,
plygnLa : 37.490587130695
},
{
setSeqNo : 1,
plygnSeqNo : 3012,
plygnLo : 126.820931980878,
plygnLa : 37.4905774229922
},
{
setSeqNo : 1,
plygnSeqNo : 3013,
plygnLo : 126.82099382044,
plygnLa : 37.4906479033006
},
{
setSeqNo : 1,
plygnSeqNo : 3014,
plygnLo : 126.820988476582,
plygnLa : 37.4906511822363
},
{
setSeqNo : 1,
plygnSeqNo : 3015,
plygnLo : 126.820963054027,
plygnLa : 37.4906667233936
},
{
setSeqNo : 1,
plygnSeqNo : 3016,
plygnLo : 126.820793766606,
plygnLa : 37.4905273583333
},
{
setSeqNo : 1,
plygnSeqNo : 3017,
plygnLo : 126.820785451006,
plygnLa : 37.4905335535281
},
{
setSeqNo : 1,
plygnSeqNo : 3018,
plygnLo : 126.82077802067,
plygnLa : 37.490538893941
},
{
setSeqNo : 1,
plygnSeqNo : 3019,
plygnLo : 126.820810212324,
plygnLa : 37.4905955356223
},
{
setSeqNo : 1,
plygnSeqNo : 3020,
plygnLo : 126.820899712889,
plygnLa : 37.4907023864049
},
{
setSeqNo : 1,
plygnSeqNo : 3021,
plygnLo : 126.820976170927,
plygnLa : 37.4907934495684
},
{
setSeqNo : 1,
plygnSeqNo : 3022,
plygnLo : 126.820847929642,
plygnLa : 37.4907805674803
},
{
setSeqNo : 1,
plygnSeqNo : 3023,
plygnLo : 126.820339568752,
plygnLa : 37.4907291082376
},
{
setSeqNo : 1,
plygnSeqNo : 3024,
plygnLo : 126.820209664892,
plygnLa : 37.4907486318673
},
{
setSeqNo : 1,
plygnSeqNo : 3025,
plygnLo : 126.820045259835,
plygnLa : 37.4907886448454
},
{
setSeqNo : 1,
plygnSeqNo : 3026,
plygnLo : 126.81993822911,
plygnLa : 37.4908422523414
},
{
setSeqNo : 1,
plygnSeqNo : 3027,
plygnLo : 126.819820421501,
plygnLa : 37.4909014834014
},
{
setSeqNo : 1,
plygnSeqNo : 3028,
plygnLo : 126.819618226451,
plygnLa : 37.4910056348217
},
{
setSeqNo : 1,
plygnSeqNo : 3029,
plygnLo : 126.819527473056,
plygnLa : 37.4910527972568
},
{
setSeqNo : 1,
plygnSeqNo : 3030,
plygnLo : 126.819411230604,
plygnLa : 37.491122993532
},
{
setSeqNo : 1,
plygnSeqNo : 3031,
plygnLo : 126.819374219779,
plygnLa : 37.4911564550006
},
{
setSeqNo : 1,
plygnSeqNo : 3032,
plygnLo : 126.819325868106,
plygnLa : 37.4912028355479
},
{
setSeqNo : 1,
plygnSeqNo : 3033,
plygnLo : 126.819319890184,
plygnLa : 37.4911921311155
},
{
setSeqNo : 1,
plygnSeqNo : 3034,
plygnLo : 126.819248389861,
plygnLa : 37.4913145029398
},
{
setSeqNo : 1,
plygnSeqNo : 3035,
plygnLo : 126.818898076916,
plygnLa : 37.4914415067371
},
{
setSeqNo : 1,
plygnSeqNo : 3036,
plygnLo : 126.818574110767,
plygnLa : 37.4915592623009
},
{
setSeqNo : 1,
plygnSeqNo : 3037,
plygnLo : 126.817889347622,
plygnLa : 37.4915356754275
},
{
setSeqNo : 1,
plygnSeqNo : 3038,
plygnLo : 126.817432376144,
plygnLa : 37.4917838657163
},
{
setSeqNo : 1,
plygnSeqNo : 3039,
plygnLo : 126.817044227003,
plygnLa : 37.4919924628992
},
{
setSeqNo : 1,
plygnSeqNo : 3040,
plygnLo : 126.816908540722,
plygnLa : 37.4920640428609
},
{
setSeqNo : 1,
plygnSeqNo : 3041,
plygnLo : 126.816667217887,
plygnLa : 37.4921951563986
},
{
setSeqNo : 1,
plygnSeqNo : 3042,
plygnLo : 126.816439696573,
plygnLa : 37.4923184085611
},
{
setSeqNo : 1,
plygnSeqNo : 3043,
plygnLo : 126.816282245004,
plygnLa : 37.4924023506047
},
{
setSeqNo : 1,
plygnSeqNo : 3044,
plygnLo : 126.816170781439,
plygnLa : 37.4924627056336
},
{
setSeqNo : 1,
plygnSeqNo : 3045,
plygnLo : 126.81605826714,
plygnLa : 37.4925236343215
},
{
setSeqNo : 1,
plygnSeqNo : 3046,
plygnLo : 126.815971743016,
plygnLa : 37.492572206487
},
{
setSeqNo : 1,
plygnSeqNo : 3047,
plygnLo : 126.815872668355,
plygnLa : 37.4926261104931
},
{
setSeqNo : 1,
plygnSeqNo : 3048,
plygnLo : 126.815743754186,
plygnLa : 37.4928153974186
},
{
setSeqNo : 1,
plygnSeqNo : 3049,
plygnLo : 126.815519052504,
plygnLa : 37.493154890955
},
{
setSeqNo : 1,
plygnSeqNo : 3050,
plygnLo : 126.815488373276,
plygnLa : 37.4932015692455
},
{
setSeqNo : 1,
plygnSeqNo : 3051,
plygnLo : 126.815444728045,
plygnLa : 37.4932003734007
},
{
setSeqNo : 1,
plygnSeqNo : 3052,
plygnLo : 126.815433601869,
plygnLa : 37.4931998060985
},
{
setSeqNo : 1,
plygnSeqNo : 3053,
plygnLo : 126.815160455748,
plygnLa : 37.4931968437517
},
{
setSeqNo : 1,
plygnSeqNo : 3054,
plygnLo : 126.814680052708,
plygnLa : 37.4931932645204
},
{
setSeqNo : 1,
plygnSeqNo : 3055,
plygnLo : 126.814664155221,
plygnLa : 37.4931929615912
},
{
setSeqNo : 1,
plygnSeqNo : 3056,
plygnLo : 126.814574934269,
plygnLa : 37.4931933703959
},
{
setSeqNo : 1,
plygnSeqNo : 3057,
plygnLo : 126.81442817366,
plygnLa : 37.4935183534741
},
{
setSeqNo : 1,
plygnSeqNo : 3058,
plygnLo : 126.814392478314,
plygnLa : 37.4935943232204
},
{
setSeqNo : 1,
plygnSeqNo : 3059,
plygnLo : 126.814317683796,
plygnLa : 37.4937589159643
},
{
setSeqNo : 1,
plygnSeqNo : 3060,
plygnLo : 126.814327104807,
plygnLa : 37.4939484198906
},
{
setSeqNo : 1,
plygnSeqNo : 3061,
plygnLo : 126.814332584919,
plygnLa : 37.4940179762933
},
{
setSeqNo : 1,
plygnSeqNo : 3062,
plygnLo : 126.814352621796,
plygnLa : 37.4943403942235
},
{
setSeqNo : 1,
plygnSeqNo : 3063,
plygnLo : 126.814352772306,
plygnLa : 37.4944251327305
},
{
setSeqNo : 1,
plygnSeqNo : 3064,
plygnLo : 126.814238690437,
plygnLa : 37.494541253323
},
{
setSeqNo : 1,
plygnSeqNo : 3065,
plygnLo : 126.814220620647,
plygnLa : 37.4945586775616
},
{
setSeqNo : 1,
plygnSeqNo : 3066,
plygnLo : 126.814069172092,
plygnLa : 37.4947130017898
},
{
setSeqNo : 1,
plygnSeqNo : 3067,
plygnLo : 126.81395385231,
plygnLa : 37.4948305265712
},
{
setSeqNo : 1,
plygnSeqNo : 3068,
plygnLo : 126.813867456946,
plygnLa : 37.4948982428047
},
{
setSeqNo : 1,
plygnSeqNo : 3069,
plygnLo : 126.813854866622,
plygnLa : 37.4949182173552
},
{
setSeqNo : 1,
plygnSeqNo : 3070,
plygnLo : 126.813717676308,
plygnLa : 37.4951584486303
},
{
setSeqNo : 1,
plygnSeqNo : 3071,
plygnLo : 126.813565771013,
plygnLa : 37.4954262442984
},
{
setSeqNo : 1,
plygnSeqNo : 3072,
plygnLo : 126.813368776989,
plygnLa : 37.4957702912464
},
{
setSeqNo : 1,
plygnSeqNo : 3073,
plygnLo : 126.813320678312,
plygnLa : 37.4958538371421
},
{
setSeqNo : 1,
plygnSeqNo : 3074,
plygnLo : 126.81319981825,
plygnLa : 37.4960690460199
},
{
setSeqNo : 1,
plygnSeqNo : 3075,
plygnLo : 126.81301239874,
plygnLa : 37.4964006933556
},
{
setSeqNo : 1,
plygnSeqNo : 3076,
plygnLo : 126.813146034674,
plygnLa : 37.496587864104
},
{
setSeqNo : 1,
plygnSeqNo : 3077,
plygnLo : 126.813247442337,
plygnLa : 37.496733888281
},
{
setSeqNo : 1,
plygnSeqNo : 3078,
plygnLo : 126.813645465232,
plygnLa : 37.4970447896394
},
{
setSeqNo : 1,
plygnSeqNo : 3079,
plygnLo : 126.813936795642,
plygnLa : 37.4972685461682
},
{
setSeqNo : 1,
plygnSeqNo : 3080,
plygnLo : 126.814036601932,
plygnLa : 37.4973517486206
},
{
setSeqNo : 1,
plygnSeqNo : 3081,
plygnLo : 126.8140713086,
plygnLa : 37.4976043804616
},
{
setSeqNo : 1,
plygnSeqNo : 3082,
plygnLo : 126.814113308923,
plygnLa : 37.4979076873577
},
{
setSeqNo : 1,
plygnSeqNo : 3083,
plygnLo : 126.814139619003,
plygnLa : 37.4981265000344
},
{
setSeqNo : 1,
plygnSeqNo : 3084,
plygnLo : 126.814196892741,
plygnLa : 37.498186561849
},
{
setSeqNo : 1,
plygnSeqNo : 3085,
plygnLo : 126.814282918562,
plygnLa : 37.4982680760223
},
{
setSeqNo : 1,
plygnSeqNo : 3086,
plygnLo : 126.81461871656,
plygnLa : 37.4980275905532
},
{
setSeqNo : 1,
plygnSeqNo : 3087,
plygnLo : 126.814642459023,
plygnLa : 37.4980022832076
},
{
setSeqNo : 1,
plygnSeqNo : 3088,
plygnLo : 126.815141962249,
plygnLa : 37.498009551564
},
{
setSeqNo : 1,
plygnSeqNo : 3089,
plygnLo : 126.815275548925,
plygnLa : 37.4979328964403
},
{
setSeqNo : 1,
plygnSeqNo : 3090,
plygnLo : 126.815325810523,
plygnLa : 37.4979028464179
},
{
setSeqNo : 1,
plygnSeqNo : 3091,
plygnLo : 126.815743763033,
plygnLa : 37.4976610816529
},
{
setSeqNo : 1,
plygnSeqNo : 3092,
plygnLo : 126.81577225568,
plygnLa : 37.4976442346955
},
{
setSeqNo : 1,
plygnSeqNo : 3093,
plygnLo : 126.816096663551,
plygnLa : 37.4976438962102
},
{
setSeqNo : 1,
plygnSeqNo : 3094,
plygnLo : 126.816222032078,
plygnLa : 37.4976792857601
},
{
setSeqNo : 1,
plygnSeqNo : 3095,
plygnLo : 126.816514578363,
plygnLa : 37.4977777281275
},
{
setSeqNo : 1,
plygnSeqNo : 3096,
plygnLo : 126.816582706731,
plygnLa : 37.4978071168979
},
{
setSeqNo : 1,
plygnSeqNo : 3097,
plygnLo : 126.816700507814,
plygnLa : 37.4978985280819
},
{
setSeqNo : 1,
plygnSeqNo : 3098,
plygnLo : 126.816890344285,
plygnLa : 37.4980179282236
},
{
setSeqNo : 1,
plygnSeqNo : 3099,
plygnLo : 126.816995760106,
plygnLa : 37.4980470944616
},
{
setSeqNo : 1,
plygnSeqNo : 3100,
plygnLo : 126.817095868597,
plygnLa : 37.4980776591892
},
{
setSeqNo : 1,
plygnSeqNo : 3101,
plygnLo : 126.81725072228,
plygnLa : 37.4981254840324
},
{
setSeqNo : 1,
plygnSeqNo : 3102,
plygnLo : 126.817582661912,
plygnLa : 37.4982273637047
},
{
setSeqNo : 1,
plygnSeqNo : 3103,
plygnLo : 126.817725932253,
plygnLa : 37.4983832863369
},
{
setSeqNo : 1,
plygnSeqNo : 3104,
plygnLo : 126.817925587174,
plygnLa : 37.4986046121409
},
{
setSeqNo : 1,
plygnSeqNo : 3105,
plygnLo : 126.818028838738,
plygnLa : 37.4987236062053
},
{
setSeqNo : 1,
plygnSeqNo : 3106,
plygnLo : 126.818208572441,
plygnLa : 37.4988559341705
},
{
setSeqNo : 1,
plygnSeqNo : 3107,
plygnLo : 126.818912445839,
plygnLa : 37.4987489052353
},
{
setSeqNo : 1,
plygnSeqNo : 3108,
plygnLo : 126.819338159548,
plygnLa : 37.4990198622107
},
{
setSeqNo : 1,
plygnSeqNo : 3109,
plygnLo : 126.819450009701,
plygnLa : 37.4990912574634
},
{
setSeqNo : 1,
plygnSeqNo : 3110,
plygnLo : 126.819552866212,
plygnLa : 37.4991598473518
},
{
setSeqNo : 1,
plygnSeqNo : 3111,
plygnLo : 126.819640204299,
plygnLa : 37.4992106624069
},
{
setSeqNo : 1,
plygnSeqNo : 3112,
plygnLo : 126.819629924865,
plygnLa : 37.4992244315332
},
{
setSeqNo : 1,
plygnSeqNo : 3113,
plygnLo : 126.819609522388,
plygnLa : 37.4992576387813
},
{
setSeqNo : 1,
plygnSeqNo : 3114,
plygnLo : 126.819594891431,
plygnLa : 37.499312801817
},
{
setSeqNo : 1,
plygnSeqNo : 3115,
plygnLo : 126.819517704255,
plygnLa : 37.4995939658524
},
{
setSeqNo : 1,
plygnSeqNo : 3116,
plygnLo : 126.819466885379,
plygnLa : 37.4997839265138
},
{
setSeqNo : 1,
plygnSeqNo : 3117,
plygnLo : 126.819442572668,
plygnLa : 37.4999700161302
},
{
setSeqNo : 1,
plygnSeqNo : 3118,
plygnLo : 126.819402760303,
plygnLa : 37.5002841776891
},
{
setSeqNo : 1,
plygnSeqNo : 3119,
plygnLo : 126.819388673097,
plygnLa : 37.5004128271714
},
{
setSeqNo : 1,
plygnSeqNo : 3120,
plygnLo : 126.81938130021,
plygnLa : 37.5004640555725
},
{
setSeqNo : 1,
plygnSeqNo : 3121,
plygnLo : 126.819404134509,
plygnLa : 37.5006640036155
},
{
setSeqNo : 1,
plygnSeqNo : 3122,
plygnLo : 126.819415319769,
plygnLa : 37.5007890351894
},
{
setSeqNo : 1,
plygnSeqNo : 3123,
plygnLo : 126.819429614212,
plygnLa : 37.5007989149952
},
{
setSeqNo : 1,
plygnSeqNo : 3124,
plygnLo : 126.819713698269,
plygnLa : 37.5011098980277
},
{
setSeqNo : 1,
plygnSeqNo : 3125,
plygnLo : 126.819907380359,
plygnLa : 37.5013233536889
},
{
setSeqNo : 1,
plygnSeqNo : 3126,
plygnLo : 126.820000410777,
plygnLa : 37.501434427302
},
{
setSeqNo : 1,
plygnSeqNo : 3127,
plygnLo : 126.820064480231,
plygnLa : 37.5014657822075
},
{
setSeqNo : 1,
plygnSeqNo : 3128,
plygnLo : 126.820379309885,
plygnLa : 37.5016354813737
},
{
setSeqNo : 1,
plygnSeqNo : 3129,
plygnLo : 126.820612411882,
plygnLa : 37.5017676098699
},
{
setSeqNo : 1,
plygnSeqNo : 3130,
plygnLo : 126.820753120011,
plygnLa : 37.5018238577937
},
{
setSeqNo : 1,
plygnSeqNo : 3131,
plygnLo : 126.820871747412,
plygnLa : 37.5018730176802
},
{
setSeqNo : 1,
plygnSeqNo : 3132,
plygnLo : 126.821176690344,
plygnLa : 37.5019652861535
},
{
setSeqNo : 1,
plygnSeqNo : 3133,
plygnLo : 126.821341240125,
plygnLa : 37.5020207235938
},
{
setSeqNo : 1,
plygnSeqNo : 3134,
plygnLo : 126.82154432911,
plygnLa : 37.5021494237378
},
{
setSeqNo : 1,
plygnSeqNo : 3135,
plygnLo : 126.821564452722,
plygnLa : 37.5021564925398
},
{
setSeqNo : 1,
plygnSeqNo : 3136,
plygnLo : 126.821555657948,
plygnLa : 37.5023620239436
},
{
setSeqNo : 1,
plygnSeqNo : 3137,
plygnLo : 126.82155181601,
plygnLa : 37.5024174835221
},
{
setSeqNo : 1,
plygnSeqNo : 3138,
plygnLo : 126.821543721829,
plygnLa : 37.5026235734809
},
{
setSeqNo : 1,
plygnSeqNo : 3139,
plygnLo : 126.821546864392,
plygnLa : 37.5027088935234
},
{
setSeqNo : 1,
plygnSeqNo : 3140,
plygnLo : 126.821554507725,
plygnLa : 37.5028412356928
},
{
setSeqNo : 1,
plygnSeqNo : 3141,
plygnLo : 126.821563546725,
plygnLa : 37.502902065998
},
{
setSeqNo : 1,
plygnSeqNo : 3142,
plygnLo : 126.821590698075,
plygnLa : 37.50300178466
},
{
setSeqNo : 1,
plygnSeqNo : 3143,
plygnLo : 126.821651970111,
plygnLa : 37.5032431738636
},
{
setSeqNo : 1,
plygnSeqNo : 3144,
plygnLo : 126.821812725947,
plygnLa : 37.5035570744177
},
{
setSeqNo : 1,
plygnSeqNo : 3145,
plygnLo : 126.821874663869,
plygnLa : 37.5036664138727
},
{
setSeqNo : 1,
plygnSeqNo : 3146,
plygnLo : 126.821976251747,
plygnLa : 37.5038957634516
},
{
setSeqNo : 1,
plygnSeqNo : 3147,
plygnLo : 126.821972919518,
plygnLa : 37.5041060865475
},
{
setSeqNo : 1,
plygnSeqNo : 3148,
plygnLo : 126.821914040121,
plygnLa : 37.5042726819751
},
{
setSeqNo : 1,
plygnSeqNo : 3149,
plygnLo : 126.821878460793,
plygnLa : 37.504366386088
},
{
setSeqNo : 1,
plygnSeqNo : 3150,
plygnLo : 126.821827194788,
plygnLa : 37.5045220091657
},
{
setSeqNo : 1,
plygnSeqNo : 3151,
plygnLo : 126.821826989322,
plygnLa : 37.5045377761006
},
{
setSeqNo : 1,
plygnSeqNo : 3152,
plygnLo : 126.821895257313,
plygnLa : 37.5047344150878
},
{
setSeqNo : 1,
plygnSeqNo : 3153,
plygnLo : 126.821957237713,
plygnLa : 37.5049023193336
},
{
setSeqNo : 1,
plygnSeqNo : 3154,
plygnLo : 126.821968459742,
plygnLa : 37.5049392145246
},
{
setSeqNo : 1,
plygnSeqNo : 3155,
plygnLo : 126.822020064936,
plygnLa : 37.5050809214754
},
{
setSeqNo : 1,
plygnSeqNo : 3156,
plygnLo : 126.822155721557,
plygnLa : 37.5051813622877
},
{
setSeqNo : 1,
plygnSeqNo : 3157,
plygnLo : 126.822378871217,
plygnLa : 37.5053478276682
},
{
setSeqNo : 1,
plygnSeqNo : 3158,
plygnLo : 126.822389220836,
plygnLa : 37.5053751525286
},
{
setSeqNo : 1,
plygnSeqNo : 3159,
plygnLo : 126.822465097625,
plygnLa : 37.5055692607111
},
{
setSeqNo : 1,
plygnSeqNo : 3160,
plygnLo : 126.82251494606,
plygnLa : 37.5056377573843
},
{
setSeqNo : 1,
plygnSeqNo : 3161,
plygnLo : 126.82255053771,
plygnLa : 37.5056851145633
},
{
setSeqNo : 1,
plygnSeqNo : 3162,
plygnLo : 126.822536813611,
plygnLa : 37.5057349274962
},
{
setSeqNo : 1,
plygnSeqNo : 3163,
plygnLo : 126.822513553618,
plygnLa : 37.5059981537918
},
{
setSeqNo : 1,
plygnSeqNo : 3164,
plygnLo : 126.822493099743,
plygnLa : 37.5060575346613
},
{
setSeqNo : 1,
plygnSeqNo : 3165,
plygnLo : 126.822491217504,
plygnLa : 37.5061022849013
},
{
setSeqNo : 1,
plygnSeqNo : 3166,
plygnLo : 126.822383215482,
plygnLa : 37.5061139599079
},
{
setSeqNo : 1,
plygnSeqNo : 3167,
plygnLo : 126.822361923507,
plygnLa : 37.5062257059653
},
{
setSeqNo : 1,
plygnSeqNo : 3168,
plygnLo : 126.822318986561,
plygnLa : 37.5065209958947
},
{
setSeqNo : 1,
plygnSeqNo : 3169,
plygnLo : 126.822296801501,
plygnLa : 37.5067082082977
},
{
setSeqNo : 1,
plygnSeqNo : 3170,
plygnLo : 126.822247123421,
plygnLa : 37.5070842981472
},
{
setSeqNo : 1,
plygnSeqNo : 3171,
plygnLo : 126.822224013225,
plygnLa : 37.5072892400667
},
{
setSeqNo : 1,
plygnSeqNo : 3172,
plygnLo : 126.822218732346,
plygnLa : 37.5074308498618
},
{
setSeqNo : 1,
plygnSeqNo : 3173,
plygnLo : 126.822215188271,
plygnLa : 37.5076544090902
},
{
setSeqNo : 1,
plygnSeqNo : 3174,
plygnLo : 126.822222891367,
plygnLa : 37.5076873615534
},
{
setSeqNo : 1,
plygnSeqNo : 3175,
plygnLo : 126.822553117705,
plygnLa : 37.5077123596322
},
{
setSeqNo : 1,
plygnSeqNo : 3176,
plygnLo : 126.822638941198,
plygnLa : 37.5077395204011
},
{
setSeqNo : 1,
plygnSeqNo : 3177,
plygnLo : 126.822865822124,
plygnLa : 37.5078237548229
},
{
setSeqNo : 1,
plygnSeqNo : 3178,
plygnLo : 126.823114914046,
plygnLa : 37.5079333768618
},
{
setSeqNo : 1,
plygnSeqNo : 3179,
plygnLo : 126.82359191696,
plygnLa : 37.5081379463276
},
{
setSeqNo : 1,
plygnSeqNo : 3180,
plygnLo : 126.824189223861,
plygnLa : 37.5082199434287
},
{
setSeqNo : 1,
plygnSeqNo : 3181,
plygnLo : 126.824457385317,
plygnLa : 37.5082580793041
},
{
setSeqNo : 1,
plygnSeqNo : 3182,
plygnLo : 126.824550811581,
plygnLa : 37.5082846825157
},
{
setSeqNo : 1,
plygnSeqNo : 3183,
plygnLo : 126.824870836294,
plygnLa : 37.5083648443226
},
{
setSeqNo : 1,
plygnSeqNo : 3184,
plygnLo : 126.825060504769,
plygnLa : 37.5084231350979
},
{
setSeqNo : 1,
plygnSeqNo : 3185,
plygnLo : 126.825517918936,
plygnLa : 37.5085434789452
},
{
setSeqNo : 1,
plygnSeqNo : 3186,
plygnLo : 126.825906799734,
plygnLa : 37.50865808807
},
{
setSeqNo : 1,
plygnSeqNo : 3187,
plygnLo : 126.82613374088,
plygnLa : 37.5087195209777
},
{
setSeqNo : 1,
plygnSeqNo : 3188,
plygnLo : 126.826273591316,
plygnLa : 37.5087681479015
},
{
setSeqNo : 1,
plygnSeqNo : 3189,
plygnLo : 126.826460252197,
plygnLa : 37.508750134692
},
{
setSeqNo : 1,
plygnSeqNo : 3190,
plygnLo : 126.826510679909,
plygnLa : 37.5087220531739
},
{
setSeqNo : 1,
plygnSeqNo : 3191,
plygnLo : 126.826881219831,
plygnLa : 37.5085156524527
},
{
setSeqNo : 1,
plygnSeqNo : 3192,
plygnLo : 126.826921743456,
plygnLa : 37.5084915017296
},
{
setSeqNo : 1,
plygnSeqNo : 3193,
plygnLo : 126.826988512586,
plygnLa : 37.5085031385962
},
{
setSeqNo : 1,
plygnSeqNo : 3194,
plygnLo : 126.827049411028,
plygnLa : 37.5092158577691
},
{
setSeqNo : 1,
plygnSeqNo : 3195,
plygnLo : 126.826606179421,
plygnLa : 37.5094508655559
},
{
setSeqNo : 1,
plygnSeqNo : 3196,
plygnLo : 126.826416555082,
plygnLa : 37.509449180838
},
{
setSeqNo : 1,
plygnSeqNo : 3197,
plygnLo : 126.826680416252,
plygnLa : 37.5096714414847
},
{
setSeqNo : 1,
plygnSeqNo : 3198,
plygnLo : 126.827074854275,
plygnLa : 37.5103596018486
},
{
setSeqNo : 1,
plygnSeqNo : 3199,
plygnLo : 126.826832577197,
plygnLa : 37.5104265305031
},
{
setSeqNo : 1,
plygnSeqNo : 3200,
plygnLo : 126.824187829417,
plygnLa : 37.510525365683
},
{
setSeqNo : 1,
plygnSeqNo : 3201,
plygnLo : 126.82406016149,
plygnLa : 37.5104812494905
},
{
setSeqNo : 1,
plygnSeqNo : 3202,
plygnLo : 126.823856701937,
plygnLa : 37.5108751209424
},
{
setSeqNo : 1,
plygnSeqNo : 3203,
plygnLo : 126.824147071082,
plygnLa : 37.5124404799771
},
{
setSeqNo : 1,
plygnSeqNo : 3204,
plygnLo : 126.824408125142,
plygnLa : 37.5131765888697
},
{
setSeqNo : 1,
plygnSeqNo : 3205,
plygnLo : 126.824299159855,
plygnLa : 37.5136677466411
},
{
setSeqNo : 1,
plygnSeqNo : 3206,
plygnLo : 126.824255734508,
plygnLa : 37.5144676031368
},
{
setSeqNo : 1,
plygnSeqNo : 3207,
plygnLo : 126.823795939337,
plygnLa : 37.5146637171309
},
{
setSeqNo : 1,
plygnSeqNo : 3208,
plygnLo : 126.823401310077,
plygnLa : 37.5149534143668
},
{
setSeqNo : 1,
plygnSeqNo : 3209,
plygnLo : 126.823104555315,
plygnLa : 37.5162202786487
},
{
setSeqNo : 1,
plygnSeqNo : 3210,
plygnLo : 126.823811227451,
plygnLa : 37.5170128055634
},
{
setSeqNo : 1,
plygnSeqNo : 3211,
plygnLo : 126.823820740686,
plygnLa : 37.5170226772576
},
{
setSeqNo : 1,
plygnSeqNo : 3212,
plygnLo : 126.82416084018,
plygnLa : 37.5173768277751
},
{
setSeqNo : 1,
plygnSeqNo : 3213,
plygnLo : 126.824496193525,
plygnLa : 37.5177157635751
},
{
setSeqNo : 1,
plygnSeqNo : 3214,
plygnLo : 126.824591924668,
plygnLa : 37.5180461842557
},
{
setSeqNo : 1,
plygnSeqNo : 3215,
plygnLo : 126.825135654929,
plygnLa : 37.5190670850399
},
{
setSeqNo : 1,
plygnSeqNo : 3216,
plygnLo : 126.825138820592,
plygnLa : 37.5190727310487
},
{
setSeqNo : 1,
plygnSeqNo : 3217,
plygnLo : 126.825415475352,
plygnLa : 37.5196537177206
},
{
setSeqNo : 1,
plygnSeqNo : 3218,
plygnLo : 126.825498848117,
plygnLa : 37.5198295346705
},
{
setSeqNo : 1,
plygnSeqNo : 3219,
plygnLo : 126.825614043387,
plygnLa : 37.5200729758791
},
{
setSeqNo : 1,
plygnSeqNo : 3220,
plygnLo : 126.825617386517,
plygnLa : 37.5200800163892
},
{
setSeqNo : 1,
plygnSeqNo : 3221,
plygnLo : 126.825618978141,
plygnLa : 37.5203024564703
},
{
setSeqNo : 1,
plygnSeqNo : 3222,
plygnLo : 126.82561168074,
plygnLa : 37.5203998614234
},
{
setSeqNo : 1,
plygnSeqNo : 3223,
plygnLo : 126.825631868005,
plygnLa : 37.5204593031011
},
{
setSeqNo : 1,
plygnSeqNo : 3224,
plygnLo : 126.82562909815,
plygnLa : 37.5206614561062
},
{
setSeqNo : 1,
plygnSeqNo : 3225,
plygnLo : 126.82565439766,
plygnLa : 37.5210300619914
},
{
setSeqNo : 1,
plygnSeqNo : 3226,
plygnLo : 126.825541871937,
plygnLa : 37.5214513889818
},
{
setSeqNo : 1,
plygnSeqNo : 3227,
plygnLo : 126.825589242099,
plygnLa : 37.5217521666508
},
{
setSeqNo : 1,
plygnSeqNo : 3228,
plygnLo : 126.825480359399,
plygnLa : 37.5217525631507
},
{
setSeqNo : 1,
plygnSeqNo : 3229,
plygnLo : 126.825660754835,
plygnLa : 37.522235152693
},
{
setSeqNo : 1,
plygnSeqNo : 3230,
plygnLo : 126.825581338995,
plygnLa : 37.522332727858
},
{
setSeqNo : 1,
plygnSeqNo : 3231,
plygnLo : 126.825421274047,
plygnLa : 37.5225293040872
},
{
setSeqNo : 1,
plygnSeqNo : 3232,
plygnLo : 126.825389714208,
plygnLa : 37.5225667010306
},
{
setSeqNo : 1,
plygnSeqNo : 3233,
plygnLo : 126.82521741217,
plygnLa : 37.5227801507872
},
{
setSeqNo : 1,
plygnSeqNo : 3234,
plygnLo : 126.825195785972,
plygnLa : 37.5228082751838
},
{
setSeqNo : 1,
plygnSeqNo : 3235,
plygnLo : 126.825192760778,
plygnLa : 37.5228144700624
},
{
setSeqNo : 1,
plygnSeqNo : 3236,
plygnLo : 126.825137346514,
plygnLa : 37.5230055598034
},
{
setSeqNo : 1,
plygnSeqNo : 3237,
plygnLo : 126.825162851546,
plygnLa : 37.5230551519869
},
{
setSeqNo : 1,
plygnSeqNo : 3238,
plygnLo : 126.825450440537,
plygnLa : 37.5233557302557
},
{
setSeqNo : 1,
plygnSeqNo : 3239,
plygnLo : 126.825496562468,
plygnLa : 37.523360303461
},
{
setSeqNo : 1,
plygnSeqNo : 3240,
plygnLo : 126.825724005811,
plygnLa : 37.5236022168139
},
{
setSeqNo : 1,
plygnSeqNo : 3241,
plygnLo : 126.825820794944,
plygnLa : 37.5237082358579
},
{
setSeqNo : 1,
plygnSeqNo : 3242,
plygnLo : 126.825870269865,
plygnLa : 37.5237933369642
},
{
setSeqNo : 1,
plygnSeqNo : 3243,
plygnLo : 126.825914278317,
plygnLa : 37.5238688597462
},
{
setSeqNo : 1,
plygnSeqNo : 3244,
plygnLo : 126.825941915942,
plygnLa : 37.5239162028608
},
{
setSeqNo : 1,
plygnSeqNo : 3245,
plygnLo : 126.826088317008,
plygnLa : 37.5241991075053
},
{
setSeqNo : 1,
plygnSeqNo : 3246,
plygnLo : 126.826126450598,
plygnLa : 37.5242957423501
},
{
setSeqNo : 1,
plygnSeqNo : 3247,
plygnLo : 126.826312111578,
plygnLa : 37.5245716672011
},
{
setSeqNo : 1,
plygnSeqNo : 3248,
plygnLo : 126.826479045626,
plygnLa : 37.5247628087633
},
{
setSeqNo : 1,
plygnSeqNo : 3249,
plygnLo : 126.826506932256,
plygnLa : 37.5249323542883
},
{
setSeqNo : 1,
plygnSeqNo : 3250,
plygnLo : 126.826749876536,
plygnLa : 37.5251281116049
},
{
setSeqNo : 1,
plygnSeqNo : 3251,
plygnLo : 126.827308978218,
plygnLa : 37.5252759074513
},
{
setSeqNo : 1,
plygnSeqNo : 3252,
plygnLo : 126.827959031797,
plygnLa : 37.525688232374
},
{
setSeqNo : 1,
plygnSeqNo : 3253,
plygnLo : 126.828148899349,
plygnLa : 37.5258326698948
},
{
setSeqNo : 1,
plygnSeqNo : 3254,
plygnLo : 126.828146463901,
plygnLa : 37.526117317389
},
{
setSeqNo : 1,
plygnSeqNo : 3255,
plygnLo : 126.828258639566,
plygnLa : 37.5262999428787
},
{
setSeqNo : 1,
plygnSeqNo : 3256,
plygnLo : 126.828837239013,
plygnLa : 37.5265085771209
},
{
setSeqNo : 1,
plygnSeqNo : 3257,
plygnLo : 126.828837402019,
plygnLa : 37.5265159025879
},
{
setSeqNo : 1,
plygnSeqNo : 3258,
plygnLo : 126.828427763092,
plygnLa : 37.5267028170169
},
{
setSeqNo : 1,
plygnSeqNo : 3259,
plygnLo : 126.828344602397,
plygnLa : 37.5268879563195
},
{
setSeqNo : 1,
plygnSeqNo : 3260,
plygnLo : 126.828326799279,
plygnLa : 37.5269453791672
},
{
setSeqNo : 1,
plygnSeqNo : 3261,
plygnLo : 126.828301162017,
plygnLa : 37.5270250149445
},
{
setSeqNo : 1,
plygnSeqNo : 3262,
plygnLo : 126.828094916467,
plygnLa : 37.5276159900637
},
{
setSeqNo : 1,
plygnSeqNo : 3263,
plygnLo : 126.827954845948,
plygnLa : 37.5279545033892
},
{
setSeqNo : 1,
plygnSeqNo : 3264,
plygnLo : 126.827939177754,
plygnLa : 37.528003189469
},
{
setSeqNo : 1,
plygnSeqNo : 3265,
plygnLo : 126.82787505489,
plygnLa : 37.5283649061632
},
{
setSeqNo : 1,
plygnSeqNo : 3266,
plygnLo : 126.828213974512,
plygnLa : 37.5290293184922
},
{
setSeqNo : 1,
plygnSeqNo : 3267,
plygnLo : 126.828136633206,
plygnLa : 37.5290697493636
},
{
setSeqNo : 1,
plygnSeqNo : 3268,
plygnLo : 126.827586026968,
plygnLa : 37.5293586645907
},
{
setSeqNo : 1,
plygnSeqNo : 3269,
plygnLo : 126.827574178773,
plygnLa : 37.5293642773029
},
{
setSeqNo : 1,
plygnSeqNo : 3270,
plygnLo : 126.827069754299,
plygnLa : 37.5297087319949
},
{
setSeqNo : 1,
plygnSeqNo : 3271,
plygnLo : 126.8268952824,
plygnLa : 37.5297084732225
},
{
setSeqNo : 1,
plygnSeqNo : 3272,
plygnLo : 126.826544541162,
plygnLa : 37.5297969272557
},
{
setSeqNo : 1,
plygnSeqNo : 3273,
plygnLo : 126.82624731616,
plygnLa : 37.5298263267996
},
{
setSeqNo : 1,
plygnSeqNo : 3274,
plygnLo : 126.825558386482,
plygnLa : 37.5298469810803
},
{
setSeqNo : 1,
plygnSeqNo : 3275,
plygnLo : 126.825312589859,
plygnLa : 37.5299589593822
},
{
setSeqNo : 1,
plygnSeqNo : 3276,
plygnLo : 126.825059679786,
plygnLa : 37.5302373313515
},
{
setSeqNo : 1,
plygnSeqNo : 3277,
plygnLo : 126.824735507024,
plygnLa : 37.5306003339421
},
{
setSeqNo : 1,
plygnSeqNo : 3278,
plygnLo : 126.824578841282,
plygnLa : 37.5312170006148
},
{
setSeqNo : 1,
plygnSeqNo : 3279,
plygnLo : 126.824218176906,
plygnLa : 37.5316128953153
},
{
setSeqNo : 1,
plygnSeqNo : 3280,
plygnLo : 126.824133948149,
plygnLa : 37.5316459975418
},
{
setSeqNo : 1,
plygnSeqNo : 3281,
plygnLo : 126.823961023837,
plygnLa : 37.5318112950876
},
{
setSeqNo : 1,
plygnSeqNo : 3282,
plygnLo : 126.823946882877,
plygnLa : 37.5318870120948
},
{
setSeqNo : 1,
plygnSeqNo : 3283,
plygnLo : 126.823866561912,
plygnLa : 37.532061179125
},
{
setSeqNo : 1,
plygnSeqNo : 3284,
plygnLo : 126.82376917458,
plygnLa : 37.5322037854503
},
{
setSeqNo : 1,
plygnSeqNo : 3285,
plygnLo : 126.823715714888,
plygnLa : 37.5322383310775
},
{
setSeqNo : 1,
plygnSeqNo : 3286,
plygnLo : 126.823672434938,
plygnLa : 37.532297117378
},
{
setSeqNo : 1,
plygnSeqNo : 3287,
plygnLo : 126.823430729007,
plygnLa : 37.5326166066239
},
{
setSeqNo : 1,
plygnSeqNo : 3288,
plygnLo : 126.823496229089,
plygnLa : 37.5329472525222
},
{
setSeqNo : 1,
plygnSeqNo : 3289,
plygnLo : 126.823474710029,
plygnLa : 37.5334472713255
},
{
setSeqNo : 1,
plygnSeqNo : 3290,
plygnLo : 126.823552806044,
plygnLa : 37.5337633033914
},
{
setSeqNo : 1,
plygnSeqNo : 3291,
plygnLo : 126.823281349326,
plygnLa : 37.5338068082236
},
{
setSeqNo : 1,
plygnSeqNo : 3292,
plygnLo : 126.822702866913,
plygnLa : 37.5337546946198
},
{
setSeqNo : 1,
plygnSeqNo : 3293,
plygnLo : 126.822622952824,
plygnLa : 37.5342011320987
},
{
setSeqNo : 1,
plygnSeqNo : 3294,
plygnLo : 126.821921926413,
plygnLa : 37.5348276630326
},
{
setSeqNo : 1,
plygnSeqNo : 3295,
plygnLo : 126.821868003751,
plygnLa : 37.5349030390776
},
{
setSeqNo : 1,
plygnSeqNo : 3296,
plygnLo : 126.821932890213,
plygnLa : 37.5350501074246
},
{
setSeqNo : 1,
plygnSeqNo : 3297,
plygnLo : 126.82243403243,
plygnLa : 37.5365431372599
},
{
setSeqNo : 1,
plygnSeqNo : 3298,
plygnLo : 126.822341939845,
plygnLa : 37.5369799793692
},
{
setSeqNo : 1,
plygnSeqNo : 3299,
plygnLo : 126.822341209451,
plygnLa : 37.5369923648151
},
{
setSeqNo : 1,
plygnSeqNo : 3300,
plygnLo : 126.822335871606,
plygnLa : 37.5374499002379
},
{
setSeqNo : 1,
plygnSeqNo : 3301,
plygnLo : 126.822321825939,
plygnLa : 37.5379240168443
},
{
setSeqNo : 1,
plygnSeqNo : 3302,
plygnLo : 126.822054405609,
plygnLa : 37.5386373672351
},
{
setSeqNo : 1,
plygnSeqNo : 3303,
plygnLo : 126.821890585218,
plygnLa : 37.5390504480861
},
{
setSeqNo : 1,
plygnSeqNo : 3304,
plygnLo : 126.821747612571,
plygnLa : 37.5393230675503
},
{
setSeqNo : 1,
plygnSeqNo : 3305,
plygnLo : 126.821590568804,
plygnLa : 37.5397119412185
},
{
setSeqNo : 1,
plygnSeqNo : 3306,
plygnLo : 126.82205433006,
plygnLa : 37.5406609400819
},
{
setSeqNo : 1,
plygnSeqNo : 3307,
plygnLo : 126.822121298212,
plygnLa : 37.5406779348235
},
{
setSeqNo : 1,
plygnSeqNo : 3308,
plygnLo : 126.822066850725,
plygnLa : 37.5406727892931
},
{
setSeqNo : 1,
plygnSeqNo : 3309,
plygnLo : 126.821833057974,
plygnLa : 37.5407017065414
},
{
setSeqNo : 1,
plygnSeqNo : 3310,
plygnLo : 126.821555440126,
plygnLa : 37.5407224022566
},
{
setSeqNo : 1,
plygnSeqNo : 3311,
plygnLo : 126.820936223869,
plygnLa : 37.5407521548084
},
{
setSeqNo : 1,
plygnSeqNo : 3312,
plygnLo : 126.820727774452,
plygnLa : 37.5407540795625
},
{
setSeqNo : 1,
plygnSeqNo : 3313,
plygnLo : 126.820187474328,
plygnLa : 37.5407569172252
},
{
setSeqNo : 1,
plygnSeqNo : 3314,
plygnLo : 126.819791282361,
plygnLa : 37.5407515152764
},
{
setSeqNo : 1,
plygnSeqNo : 3315,
plygnLo : 126.819319791347,
plygnLa : 37.5407440319575
},
{
setSeqNo : 1,
plygnSeqNo : 3316,
plygnLo : 126.818952465288,
plygnLa : 37.5407201015935
},
{
setSeqNo : 1,
plygnSeqNo : 3317,
plygnLo : 126.818668939241,
plygnLa : 37.5406945966773
},
{
setSeqNo : 1,
plygnSeqNo : 3318,
plygnLo : 126.818377998495,
plygnLa : 37.5406704956901
},
{
setSeqNo : 1,
plygnSeqNo : 3319,
plygnLo : 126.818168344472,
plygnLa : 37.5406600430015
},
{
setSeqNo : 1,
plygnSeqNo : 3320,
plygnLo : 126.817900661964,
plygnLa : 37.5406618699398
},
{
setSeqNo : 1,
plygnSeqNo : 3321,
plygnLo : 126.817349406662,
plygnLa : 37.5406615791769
},
{
setSeqNo : 1,
plygnSeqNo : 3322,
plygnLo : 126.817091006671,
plygnLa : 37.5406296415958
},
{
setSeqNo : 1,
plygnSeqNo : 3323,
plygnLo : 126.816952093141,
plygnLa : 37.5406116837763
},
{
setSeqNo : 1,
plygnSeqNo : 3324,
plygnLo : 126.816820790329,
plygnLa : 37.5405898000406
},
{
setSeqNo : 1,
plygnSeqNo : 3325,
plygnLo : 126.816567859933,
plygnLa : 37.5405601226644
},
{
setSeqNo : 1,
plygnSeqNo : 3326,
plygnLo : 126.816312411646,
plygnLa : 37.5405518387338
},
{
setSeqNo : 1,
plygnSeqNo : 3327,
plygnLo : 126.816118087869,
plygnLa : 37.540565327839
},
{
setSeqNo : 1,
plygnSeqNo : 3328,
plygnLo : 126.815752107653,
plygnLa : 37.540568978067
},
{
setSeqNo : 1,
plygnSeqNo : 3329,
plygnLo : 126.815348283882,
plygnLa : 37.5405750990153
},
{
setSeqNo : 1,
plygnSeqNo : 3330,
plygnLo : 126.81499985842,
plygnLa : 37.5406303029638
},
{
setSeqNo : 1,
plygnSeqNo : 3331,
plygnLo : 126.814726573477,
plygnLa : 37.5406827962896
},
{
setSeqNo : 1,
plygnSeqNo : 3332,
plygnLo : 126.814639769426,
plygnLa : 37.5406857589157
},
{
setSeqNo : 1,
plygnSeqNo : 3333,
plygnLo : 126.814349277075,
plygnLa : 37.5406909299742
},
{
setSeqNo : 1,
plygnSeqNo : 3334,
plygnLo : 126.813933791477,
plygnLa : 37.5406950550889
},
{
setSeqNo : 1,
plygnSeqNo : 3335,
plygnLo : 126.813647910739,
plygnLa : 37.5406940412744
},
{
setSeqNo : 1,
plygnSeqNo : 3336,
plygnLo : 126.81349797355,
plygnLa : 37.5407036591271
},
{
setSeqNo : 1,
plygnSeqNo : 3337,
plygnLo : 126.81350407894,
plygnLa : 37.5406600247876
},
{
setSeqNo : 1,
plygnSeqNo : 3338,
plygnLo : 126.813513345909,
plygnLa : 37.5406327297271
},
{
setSeqNo : 1,
plygnSeqNo : 3339,
plygnLo : 126.81331779197,
plygnLa : 37.5406411397614
},
{
setSeqNo : 1,
plygnSeqNo : 3340,
plygnLo : 126.813050601394,
plygnLa : 37.5406581769895
},
{
setSeqNo : 1,
plygnSeqNo : 3341,
plygnLo : 126.812650047344,
plygnLa : 37.5407051168506
},
{
setSeqNo : 1,
plygnSeqNo : 3342,
plygnLo : 126.812549759867,
plygnLa : 37.5407195985299
},
{
setSeqNo : 1,
plygnSeqNo : 3343,
plygnLo : 126.812334210248,
plygnLa : 37.5407367147105
},
{
setSeqNo : 1,
plygnSeqNo : 3344,
plygnLo : 126.811836309666,
plygnLa : 37.5409580645507
},
{
setSeqNo : 1,
plygnSeqNo : 3345,
plygnLo : 126.811636482417,
plygnLa : 37.541048968452
},
{
setSeqNo : 1,
plygnSeqNo : 3346,
plygnLo : 126.811550459965,
plygnLa : 37.5410865633464
},
{
setSeqNo : 1,
plygnSeqNo : 3347,
plygnLo : 126.81111790371,
plygnLa : 37.5412711288201
},
{
setSeqNo : 1,
plygnSeqNo : 3348,
plygnLo : 126.810594706669,
plygnLa : 37.5414963780989
},
{
setSeqNo : 1,
plygnSeqNo : 3349,
plygnLo : 126.810560013218,
plygnLa : 37.54151517945
},
{
setSeqNo : 1,
plygnSeqNo : 3350,
plygnLo : 126.810344858229,
plygnLa : 37.5416468909834
},
{
setSeqNo : 1,
plygnSeqNo : 3351,
plygnLo : 126.810203702701,
plygnLa : 37.5417437976444
},
{
setSeqNo : 1,
plygnSeqNo : 3352,
plygnLo : 126.809977500334,
plygnLa : 37.5419129252965
},
{
setSeqNo : 1,
plygnSeqNo : 3353,
plygnLo : 126.809813461387,
plygnLa : 37.5420371126984
},
{
setSeqNo : 1,
plygnSeqNo : 3354,
plygnLo : 126.809590459598,
plygnLa : 37.5421972448687
},
{
setSeqNo : 1,
plygnSeqNo : 3355,
plygnLo : 126.809434408186,
plygnLa : 37.5423132726033
},
{
setSeqNo : 1,
plygnSeqNo : 3356,
plygnLo : 126.809084731725,
plygnLa : 37.5425731430857
},
{
setSeqNo : 1,
plygnSeqNo : 3357,
plygnLo : 126.808652727381,
plygnLa : 37.5428801811118
},
{
setSeqNo : 1,
plygnSeqNo : 3358,
plygnLo : 126.808209602071,
plygnLa : 37.5431063989952
},
{
setSeqNo : 1,
plygnSeqNo : 3359,
plygnLo : 126.807886531388,
plygnLa : 37.5432652275026
},
{
setSeqNo : 1,
plygnSeqNo : 3360,
plygnLo : 126.807922061389,
plygnLa : 37.5432652861157
},
{
setSeqNo : 1,
plygnSeqNo : 3361,
plygnLo : 126.80763759541,
plygnLa : 37.5434706407431
},
{
setSeqNo : 1,
plygnSeqNo : 3362,
plygnLo : 126.807588363794,
plygnLa : 37.5435004010437
},
{
setSeqNo : 1,
plygnSeqNo : 3363,
plygnLo : 126.807193345058,
plygnLa : 37.5437165567892
},
{
setSeqNo : 1,
plygnSeqNo : 3364,
plygnLo : 126.80717704238,
plygnLa : 37.5437334245796
},
{
setSeqNo : 1,
plygnSeqNo : 3365,
plygnLo : 126.807103207523,
plygnLa : 37.5437732887984
},
{
setSeqNo : 1,
plygnSeqNo : 3366,
plygnLo : 126.8068717926,
plygnLa : 37.5439007306557
},
{
setSeqNo : 1,
plygnSeqNo : 3367,
plygnLo : 126.806695333245,
plygnLa : 37.5440417788727
},
{
setSeqNo : 1,
plygnSeqNo : 3368,
plygnLo : 126.806478128489,
plygnLa : 37.5442128956038
},
{
setSeqNo : 1,
plygnSeqNo : 3369,
plygnLo : 126.806471573545,
plygnLa : 37.5442134429987
},
{
setSeqNo : 1,
plygnSeqNo : 3370,
plygnLo : 126.806412757849,
plygnLa : 37.5442603696157
},
{
setSeqNo : 1,
plygnSeqNo : 3371,
plygnLo : 126.806317794201,
plygnLa : 37.5443353910931
},
{
setSeqNo : 1,
plygnSeqNo : 3372,
plygnLo : 126.806240694995,
plygnLa : 37.5444076226393
},
{
setSeqNo : 1,
plygnSeqNo : 3373,
plygnLo : 126.806240021845,
plygnLa : 37.5443972062615
},
{
setSeqNo : 1,
plygnSeqNo : 3374,
plygnLo : 126.806238670331,
plygnLa : 37.5443729846381
},
{
setSeqNo : 1,
plygnSeqNo : 3375,
plygnLo : 126.806236628411,
plygnLa : 37.5443397614849
},
{
setSeqNo : 1,
plygnSeqNo : 3376,
plygnLo : 126.806216224505,
plygnLa : 37.5443017152301
},
{
setSeqNo : 1,
plygnSeqNo : 3377,
plygnLo : 126.806533822242,
plygnLa : 37.5441439996438
},
{
setSeqNo : 1,
plygnSeqNo : 3378,
plygnLo : 126.806603278614,
plygnLa : 37.5440863973467
},
{
setSeqNo : 1,
plygnSeqNo : 3379,
plygnLo : 126.806702834784,
plygnLa : 37.5440113827941
},
{
setSeqNo : 1,
plygnSeqNo : 3380,
plygnLo : 126.806830390815,
plygnLa : 37.5439127727057
},
{
setSeqNo : 1,
plygnSeqNo : 3381,
plygnLo : 126.807014147451,
plygnLa : 37.5437539872624
},
{
setSeqNo : 1,
plygnSeqNo : 3382,
plygnLo : 126.807025654396,
plygnLa : 37.5437503485277
},
{
setSeqNo : 1,
plygnSeqNo : 3383,
plygnLo : 126.807193365634,
plygnLa : 37.5436436314289
},
{
setSeqNo : 1,
plygnSeqNo : 3384,
plygnLo : 126.807241173984,
plygnLa : 37.5436133001554
},
{
setSeqNo : 1,
plygnSeqNo : 3385,
plygnLo : 126.807324865592,
plygnLa : 37.5435906342585
},
{
setSeqNo : 1,
plygnSeqNo : 3386,
plygnLo : 126.80719331587,
plygnLa : 37.5435932386767
},
{
setSeqNo : 1,
plygnSeqNo : 3387,
plygnLo : 126.80712718454,
plygnLa : 37.5435945362635
},
{
setSeqNo : 1,
plygnSeqNo : 3388,
plygnLo : 126.806805936994,
plygnLa : 37.5435956902967
},
{
setSeqNo : 1,
plygnSeqNo : 3389,
plygnLo : 126.80654156567,
plygnLa : 37.543547105763
},
{
setSeqNo : 1,
plygnSeqNo : 3390,
plygnLo : 126.80630004263,
plygnLa : 37.5434796999343
},
{
setSeqNo : 1,
plygnSeqNo : 3391,
plygnLo : 126.806106535279,
plygnLa : 37.5434464405083
},
{
setSeqNo : 1,
plygnSeqNo : 3392,
plygnLo : 126.805638578479,
plygnLa : 37.543363169535
},
{
setSeqNo : 1,
plygnSeqNo : 3393,
plygnLo : 126.805451786559,
plygnLa : 37.5433310372463
},
{
setSeqNo : 1,
plygnSeqNo : 3394,
plygnLo : 126.805262330562,
plygnLa : 37.543297501545
},
{
setSeqNo : 1,
plygnSeqNo : 3395,
plygnLo : 126.805061013538,
plygnLa : 37.5432783010459
},
{
setSeqNo : 1,
plygnSeqNo : 3396,
plygnLo : 126.804932677233,
plygnLa : 37.5432682313223
},
{
setSeqNo : 1,
plygnSeqNo : 3397,
plygnLo : 126.804917474522,
plygnLa : 37.5432665211312
},
{
setSeqNo : 1,
plygnSeqNo : 3398,
plygnLo : 126.804809476776,
plygnLa : 37.5432550779268
},
{
setSeqNo : 1,
plygnSeqNo : 3399,
plygnLo : 126.804467381485,
plygnLa : 37.5432494363128
},
{
setSeqNo : 1,
plygnSeqNo : 3400,
plygnLo : 126.804411512969,
plygnLa : 37.5432468109466
},
{
setSeqNo : 1,
plygnSeqNo : 3401,
plygnLo : 126.804411209889,
plygnLa : 37.5432287911076
},
{
setSeqNo : 1,
plygnSeqNo : 3402,
plygnLo : 126.804410356789,
plygnLa : 37.5432172469799
},
{
setSeqNo : 1,
plygnSeqNo : 3403,
plygnLo : 126.804176723806,
plygnLa : 37.5431810969101
},
{
setSeqNo : 1,
plygnSeqNo : 3404,
plygnLo : 126.803959875959,
plygnLa : 37.5431469465923
},
{
setSeqNo : 1,
plygnSeqNo : 3405,
plygnLo : 126.803492730681,
plygnLa : 37.5430909790097
},
{
setSeqNo : 1,
plygnSeqNo : 3406,
plygnLo : 126.803025423872,
plygnLa : 37.5429654604397
},
{
setSeqNo : 1,
plygnSeqNo : 3407,
plygnLo : 126.802049314076,
plygnLa : 37.5427582823946
},
{
setSeqNo : 1,
plygnSeqNo : 3408,
plygnLo : 126.801849994488,
plygnLa : 37.5427159869255
},
{
setSeqNo : 1,
plygnSeqNo : 3409,
plygnLo : 126.801680909393,
plygnLa : 37.5426106818638
},
{
setSeqNo : 1,
plygnSeqNo : 3410,
plygnLo : 126.801668890954,
plygnLa : 37.5426070035457
},
{
setSeqNo : 1,
plygnSeqNo : 3411,
plygnLo : 126.801636725264,
plygnLa : 37.5426013169044
},
{
setSeqNo : 1,
plygnSeqNo : 3412,
plygnLo : 126.801571037186,
plygnLa : 37.542505196479
},
{
setSeqNo : 1,
plygnSeqNo : 3413,
plygnLo : 126.801419013723,
plygnLa : 37.5424297598147
},
{
setSeqNo : 1,
plygnSeqNo : 3414,
plygnLo : 126.801005227122,
plygnLa : 37.542125253422
},
{
setSeqNo : 1,
plygnSeqNo : 3415,
plygnLo : 126.800956181801,
plygnLa : 37.5420888516065
},
{
setSeqNo : 1,
plygnSeqNo : 3416,
plygnLo : 126.80067364094,
plygnLa : 37.5419580072403
},
{
setSeqNo : 1,
plygnSeqNo : 3417,
plygnLo : 126.800469420198,
plygnLa : 37.5417704230642
},
{
setSeqNo : 1,
plygnSeqNo : 3418,
plygnLo : 126.800298176323,
plygnLa : 37.5416775021986
},
{
setSeqNo : 1,
plygnSeqNo : 3419,
plygnLo : 126.800114013651,
plygnLa : 37.5415879351624
},
{
setSeqNo : 1,
plygnSeqNo : 3420,
plygnLo : 126.799984053504,
plygnLa : 37.5415277336073
},
{
setSeqNo : 1,
plygnSeqNo : 3421,
plygnLo : 126.799748612376,
plygnLa : 37.5414378009353
},
{
setSeqNo : 1,
plygnSeqNo : 3422,
plygnLo : 126.799653110354,
plygnLa : 37.5413883615661
},
{
setSeqNo : 1,
plygnSeqNo : 3423,
plygnLo : 126.799862208793,
plygnLa : 37.5414070194063
},
{
setSeqNo : 1,
plygnSeqNo : 3424,
plygnLo : 126.800214996419,
plygnLa : 37.5414473274976
},
{
setSeqNo : 1,
plygnSeqNo : 3425,
plygnLo : 126.800508069538,
plygnLa : 37.5414678098505
},
{
setSeqNo : 1,
plygnSeqNo : 3426,
plygnLo : 126.80054607328,
plygnLa : 37.5414692898309
},
{
setSeqNo : 1,
plygnSeqNo : 3427,
plygnLo : 126.800559743704,
plygnLa : 37.541447347211
},
{
setSeqNo : 1,
plygnSeqNo : 3428,
plygnLo : 126.800618519009,
plygnLa : 37.5413531231083
},
{
setSeqNo : 1,
plygnSeqNo : 3429,
plygnLo : 126.80066167732,
plygnLa : 37.5412802777437
},
{
setSeqNo : 1,
plygnSeqNo : 3430,
plygnLo : 126.800580822497,
plygnLa : 37.5412373349538
},
{
setSeqNo : 1,
plygnSeqNo : 3431,
plygnLo : 126.800300379162,
plygnLa : 37.5411867449595
},
{
setSeqNo : 1,
plygnSeqNo : 3432,
plygnLo : 126.800312172332,
plygnLa : 37.5410718881184
},
{
setSeqNo : 1,
plygnSeqNo : 3433,
plygnLo : 126.800333083453,
plygnLa : 37.5408568130991
},
{
setSeqNo : 1,
plygnSeqNo : 3434,
plygnLo : 126.800350742959,
plygnLa : 37.5408658513944
},
{
setSeqNo : 1,
plygnSeqNo : 3435,
plygnLo : 126.80055830326,
plygnLa : 37.5409976965332
},
{
setSeqNo : 1,
plygnSeqNo : 3436,
plygnLo : 126.800719273087,
plygnLa : 37.5410306315132
},
{
setSeqNo : 1,
plygnSeqNo : 3437,
plygnLo : 126.800782184633,
plygnLa : 37.541043406325
},
{
setSeqNo : 1,
plygnSeqNo : 3438,
plygnLo : 126.800810092386,
plygnLa : 37.5408562188829
},
{
setSeqNo : 1,
plygnSeqNo : 3439,
plygnLo : 126.800814622234,
plygnLa : 37.5408123030345
},
{
setSeqNo : 1,
plygnSeqNo : 3440,
plygnLo : 126.800389468869,
plygnLa : 37.5407963714497
},
{
setSeqNo : 1,
plygnSeqNo : 3441,
plygnLo : 126.800380459922,
plygnLa : 37.5407935437373
},
{
setSeqNo : 1,
plygnSeqNo : 3442,
plygnLo : 126.800185700717,
plygnLa : 37.5407658934562
},
{
setSeqNo : 1,
plygnSeqNo : 3443,
plygnLo : 126.799867419717,
plygnLa : 37.5407197438917
},
{
setSeqNo : 1,
plygnSeqNo : 3444,
plygnLo : 126.799706421221,
plygnLa : 37.5406941227422
},
{
setSeqNo : 1,
plygnSeqNo : 3445,
plygnLo : 126.799329454346,
plygnLa : 37.5406422389442
},
{
setSeqNo : 1,
plygnSeqNo : 3446,
plygnLo : 126.799273618395,
plygnLa : 37.540632007367
},
{
setSeqNo : 1,
plygnSeqNo : 3447,
plygnLo : 126.799302807415,
plygnLa : 37.5405588523905
},
{
setSeqNo : 1,
plygnSeqNo : 3448,
plygnLo : 126.799355106781,
plygnLa : 37.5404406865155
},
{
setSeqNo : 1,
plygnSeqNo : 3449,
plygnLo : 126.799360629231,
plygnLa : 37.5404277399222
},
{
setSeqNo : 1,
plygnSeqNo : 3450,
plygnLo : 126.799397196339,
plygnLa : 37.5403027893723
},
{
setSeqNo : 1,
plygnSeqNo : 3451,
plygnLo : 126.799416797617,
plygnLa : 37.5402470784064
},
{
setSeqNo : 1,
plygnSeqNo : 3452,
plygnLo : 126.799422382112,
plygnLa : 37.5402113279361
},
{
setSeqNo : 1,
plygnSeqNo : 3453,
plygnLo : 126.799362144327,
plygnLa : 37.5401937732801
},
{
setSeqNo : 1,
plygnSeqNo : 3454,
plygnLo : 126.799217508137,
plygnLa : 37.5401969040398
},
{
setSeqNo : 1,
plygnSeqNo : 3455,
plygnLo : 126.799152067257,
plygnLa : 37.5402074870169
},
{
setSeqNo : 1,
plygnSeqNo : 3456,
plygnLo : 126.799010191387,
plygnLa : 37.540240472187
},
{
setSeqNo : 1,
plygnSeqNo : 3457,
plygnLo : 126.798948929819,
plygnLa : 37.5402747131572
},
{
setSeqNo : 1,
plygnSeqNo : 3458,
plygnLo : 126.798931925866,
plygnLa : 37.5402817287651
},
{
setSeqNo : 1,
plygnSeqNo : 3459,
plygnLo : 126.79886154255,
plygnLa : 37.5402925831613
},
{
setSeqNo : 1,
plygnSeqNo : 3460,
plygnLo : 126.798861420019,
plygnLa : 37.540270623752
},
{
setSeqNo : 1,
plygnSeqNo : 3461,
plygnLo : 126.798859173145,
plygnLa : 37.5399927196144
},
{
setSeqNo : 1,
plygnSeqNo : 3462,
plygnLo : 126.798843336806,
plygnLa : 37.5398324875607
},
{
setSeqNo : 1,
plygnSeqNo : 3463,
plygnLo : 126.798801699583,
plygnLa : 37.5396060408462
},
{
setSeqNo : 1,
plygnSeqNo : 3464,
plygnLo : 126.798762969326,
plygnLa : 37.539480115197
},
{
setSeqNo : 1,
plygnSeqNo : 3465,
plygnLo : 126.798736318768,
plygnLa : 37.5393987007201
},
{
setSeqNo : 1,
plygnSeqNo : 3466,
plygnLo : 126.798895262641,
plygnLa : 37.5393927760808
},
{
setSeqNo : 1,
plygnSeqNo : 3467,
plygnLo : 126.799009034459,
plygnLa : 37.5393589029765
},
{
setSeqNo : 1,
plygnSeqNo : 3468,
plygnLo : 126.799139441377,
plygnLa : 37.5393191512672
},
{
setSeqNo : 1,
plygnSeqNo : 3469,
plygnLo : 126.799242773905,
plygnLa : 37.5392877917134
},
{
setSeqNo : 1,
plygnSeqNo : 3470,
plygnLo : 126.799295684547,
plygnLa : 37.5392028477877
},
{
setSeqNo : 1,
plygnSeqNo : 3471,
plygnLo : 126.799370401695,
plygnLa : 37.5390962621329
},
{
setSeqNo : 1,
plygnSeqNo : 3472,
plygnLo : 126.799411917055,
plygnLa : 37.5390414271608
},
{
setSeqNo : 1,
plygnSeqNo : 3473,
plygnLo : 126.799426651737,
plygnLa : 37.5390192153586
},
{
setSeqNo : 1,
plygnSeqNo : 3474,
plygnLo : 126.79945858834,
plygnLa : 37.5389117107118
},
{
setSeqNo : 1,
plygnSeqNo : 3475,
plygnLo : 126.799442392841,
plygnLa : 37.5388880319405
},
{
setSeqNo : 1,
plygnSeqNo : 3476,
plygnLo : 126.79929958037,
plygnLa : 37.5388748395369
},
{
setSeqNo : 1,
plygnSeqNo : 3477,
plygnLo : 126.799146076013,
plygnLa : 37.5388911824818
},
{
setSeqNo : 1,
plygnSeqNo : 3478,
plygnLo : 126.799189202405,
plygnLa : 37.5388301593135
},
{
setSeqNo : 1,
plygnSeqNo : 3479,
plygnLo : 126.799282145766,
plygnLa : 37.5385853671702
},
{
setSeqNo : 1,
plygnSeqNo : 3480,
plygnLo : 126.799341059412,
plygnLa : 37.5383768338622
},
{
setSeqNo : 1,
plygnSeqNo : 3481,
plygnLo : 126.799355134842,
plygnLa : 37.5383346196005
},
{
setSeqNo : 1,
plygnSeqNo : 3482,
plygnLo : 126.799364264682,
plygnLa : 37.5382929646389
},
{
setSeqNo : 1,
plygnSeqNo : 3483,
plygnLo : 126.799411015404,
plygnLa : 37.5381339660075
},
{
setSeqNo : 1,
plygnSeqNo : 3484,
plygnLo : 126.79942872608,
plygnLa : 37.5380574117889
},
{
setSeqNo : 1,
plygnSeqNo : 3485,
plygnLo : 126.799479009524,
plygnLa : 37.5377674862322
},
{
setSeqNo : 1,
plygnSeqNo : 3486,
plygnLo : 126.799462319629,
plygnLa : 37.5377257870121
},
{
setSeqNo : 1,
plygnSeqNo : 3487,
plygnLo : 126.799373022912,
plygnLa : 37.5377309858001
},
{
setSeqNo : 1,
plygnSeqNo : 3488,
plygnLo : 126.799287825465,
plygnLa : 37.5377266139175
},
{
setSeqNo : 1,
plygnSeqNo : 3489,
plygnLo : 126.799181943845,
plygnLa : 37.5376549217161
},
{
setSeqNo : 1,
plygnSeqNo : 3490,
plygnLo : 126.79912375265,
plygnLa : 37.5376013215001
},
{
setSeqNo : 1,
plygnSeqNo : 3491,
plygnLo : 126.799088141315,
plygnLa : 37.5375652203361
},
{
setSeqNo : 1,
plygnSeqNo : 3492,
plygnLo : 126.798657787724,
plygnLa : 37.5376469856368
},
{
setSeqNo : 1,
plygnSeqNo : 3493,
plygnLo : 126.79851241906,
plygnLa : 37.5376633414323
},
{
setSeqNo : 1,
plygnSeqNo : 3494,
plygnLo : 126.798427727521,
plygnLa : 37.5376685476076
},
{
setSeqNo : 1,
plygnSeqNo : 3495,
plygnLo : 126.798254197855,
plygnLa : 37.5377051348251
},
{
setSeqNo : 1,
plygnSeqNo : 3496,
plygnLo : 126.798252876285,
plygnLa : 37.5376707786612
},
{
setSeqNo : 1,
plygnSeqNo : 3497,
plygnLo : 126.798252721894,
plygnLa : 37.5376606409322
},
{
setSeqNo : 1,
plygnSeqNo : 3498,
plygnLo : 126.798239464312,
plygnLa : 37.5376600609716
},
{
setSeqNo : 1,
plygnSeqNo : 3499,
plygnLo : 126.798238597577,
plygnLa : 37.5375919164879
},
{
setSeqNo : 1,
plygnSeqNo : 3500,
plygnLo : 126.798250378602,
plygnLa : 37.5375485812946
},
{
setSeqNo : 1,
plygnSeqNo : 3501,
plygnLo : 126.798266648736,
plygnLa : 37.5374818809804
},
{
setSeqNo : 1,
plygnSeqNo : 3502,
plygnLo : 126.798284358919,
plygnLa : 37.5374064448034
},
{
setSeqNo : 1,
plygnSeqNo : 3503,
plygnLo : 126.798297581118,
plygnLa : 37.5373541030838
},
{
setSeqNo : 1,
plygnSeqNo : 3504,
plygnLo : 126.798307431738,
plygnLa : 37.5373056907564
},
{
setSeqNo : 1,
plygnSeqNo : 3505,
plygnLo : 126.798349835141,
plygnLa : 37.5372522730673
},
{
setSeqNo : 1,
plygnSeqNo : 3506,
plygnLo : 126.798255495533,
plygnLa : 37.537227044915
},
{
setSeqNo : 1,
plygnSeqNo : 3507,
plygnLo : 126.798244235566,
plygnLa : 37.5372692636804
},
{
setSeqNo : 1,
plygnSeqNo : 3508,
plygnLo : 126.798171789725,
plygnLa : 37.5373231981544
},
{
setSeqNo : 1,
plygnSeqNo : 3509,
plygnLo : 126.79816789354,
plygnLa : 37.5373251653912
},
{
setSeqNo : 1,
plygnSeqNo : 3510,
plygnLo : 126.79801903718,
plygnLa : 37.5372595856541
},
{
setSeqNo : 1,
plygnSeqNo : 3511,
plygnLo : 126.797926586939,
plygnLa : 37.5371929696116
},
{
setSeqNo : 1,
plygnSeqNo : 3512,
plygnLo : 126.797890854649,
plygnLa : 37.5371346314074
},
{
setSeqNo : 1,
plygnSeqNo : 3513,
plygnLo : 126.797834396254,
plygnLa : 37.5370925761184
},
{
setSeqNo : 1,
plygnSeqNo : 3514,
plygnLo : 126.797810113312,
plygnLa : 37.5370483305947
},
{
setSeqNo : 1,
plygnSeqNo : 3515,
plygnLo : 126.797768017413,
plygnLa : 37.5370583953245
},
{
setSeqNo : 1,
plygnSeqNo : 3516,
plygnLo : 126.797692151663,
plygnLa : 37.5370675522761
},
{
setSeqNo : 1,
plygnSeqNo : 3517,
plygnLo : 126.797563085122,
plygnLa : 37.5370687441805
},
{
setSeqNo : 1,
plygnSeqNo : 3518,
plygnLo : 126.797245755988,
plygnLa : 37.5370701695944
},
{
setSeqNo : 1,
plygnSeqNo : 3519,
plygnLo : 126.797213224936,
plygnLa : 37.5370712396548
},
{
setSeqNo : 1,
plygnSeqNo : 3520,
plygnLo : 126.797152052472,
plygnLa : 37.5370688725273
},
{
setSeqNo : 1,
plygnSeqNo : 3521,
plygnLo : 126.797006403724,
plygnLa : 37.5370601782
},
{
setSeqNo : 1,
plygnSeqNo : 3522,
plygnLo : 126.796902564631,
plygnLa : 37.5370208584384
},
{
setSeqNo : 1,
plygnSeqNo : 3523,
plygnLo : 126.796894969014,
plygnLa : 37.5370180350248
},
{
setSeqNo : 1,
plygnSeqNo : 3524,
plygnLo : 126.796830518916,
plygnLa : 37.5369906131617
},
{
setSeqNo : 1,
plygnSeqNo : 3525,
plygnLo : 126.796801374299,
plygnLa : 37.5369815450067
},
{
setSeqNo : 1,
plygnSeqNo : 3526,
plygnLo : 126.796733769023,
plygnLa : 37.5369406034064
},
{
setSeqNo : 1,
plygnSeqNo : 3527,
plygnLo : 126.796723048276,
plygnLa : 37.5369186281787
},
{
setSeqNo : 1,
plygnSeqNo : 3528,
plygnLo : 126.796721317347,
plygnLa : 37.5369062348514
},
{
setSeqNo : 1,
plygnSeqNo : 3529,
plygnLo : 126.796732491905,
plygnLa : 37.536828544583
},
{
setSeqNo : 1,
plygnSeqNo : 3530,
plygnLo : 126.796697323412,
plygnLa : 37.536821438072
},
{
setSeqNo : 1,
plygnSeqNo : 3531,
plygnLo : 126.796657737209,
plygnLa : 37.5368165855532
},
{
setSeqNo : 1,
plygnSeqNo : 3532,
plygnLo : 126.79661737047,
plygnLa : 37.5367742849927
},
{
setSeqNo : 1,
plygnSeqNo : 3533,
plygnLo : 126.796562394486,
plygnLa : 37.5367739014022
},
{
setSeqNo : 1,
plygnSeqNo : 3534,
plygnLo : 126.796545068127,
plygnLa : 37.5367749985861
},
{
setSeqNo : 1,
plygnSeqNo : 3535,
plygnLo : 126.796307601856,
plygnLa : 37.5367875423458
},
{
setSeqNo : 1,
plygnSeqNo : 3536,
plygnLo : 126.796181224775,
plygnLa : 37.5367774654725
},
{
setSeqNo : 1,
plygnSeqNo : 3537,
plygnLo : 126.796111437055,
plygnLa : 37.5367649553074
},
{
setSeqNo : 1,
plygnSeqNo : 3538,
plygnLo : 126.796041997712,
plygnLa : 37.5367496348811
},
{
setSeqNo : 1,
plygnSeqNo : 3539,
plygnLo : 126.796010589344,
plygnLa : 37.5367287399591
},
{
setSeqNo : 1,
plygnSeqNo : 3540,
plygnLo : 126.795993467955,
plygnLa : 37.5367177352849
},
{
setSeqNo : 1,
plygnSeqNo : 3541,
plygnLo : 126.795960113389,
plygnLa : 37.5366965586298
},
{
setSeqNo : 1,
plygnSeqNo : 3542,
plygnLo : 126.795894802771,
plygnLa : 37.5366615326436
},
{
setSeqNo : 1,
plygnSeqNo : 3543,
plygnLo : 126.79575232014,
plygnLa : 37.5365914576864
},
{
setSeqNo : 1,
plygnSeqNo : 3544,
plygnLo : 126.795553578569,
plygnLa : 37.5364739811459
},
{
setSeqNo : 1,
plygnSeqNo : 3545,
plygnLo : 126.795494256273,
plygnLa : 37.5364451538389
},
{
setSeqNo : 1,
plygnSeqNo : 3546,
plygnLo : 126.795426112772,
plygnLa : 37.5364112478246
},
{
setSeqNo : 1,
plygnSeqNo : 3547,
plygnLo : 126.795244535175,
plygnLa : 37.5362904243682
},
{
setSeqNo : 1,
plygnSeqNo : 3548,
plygnLo : 126.795112408333,
plygnLa : 37.5361868664305
},
{
setSeqNo : 1,
plygnSeqNo : 3549,
plygnLo : 126.794794457292,
plygnLa : 37.5359641532622
},
{
setSeqNo : 1,
plygnSeqNo : 3550,
plygnLo : 126.794630916402,
plygnLa : 37.53590446485
},
{
setSeqNo : 1,
plygnSeqNo : 3551,
plygnLo : 126.79453553243,
plygnLa : 37.5358772585559
},
{
setSeqNo : 1,
plygnSeqNo : 3552,
plygnLo : 126.794536793904,
plygnLa : 37.535866844859
},
{
setSeqNo : 1,
plygnSeqNo : 3553,
plygnLo : 126.794425171274,
plygnLa : 37.5358289254828
},
{
setSeqNo : 1,
plygnSeqNo : 3554,
plygnLo : 126.794396860107,
plygnLa : 37.5359034868421
},
{
setSeqNo : 1,
plygnSeqNo : 3555,
plygnLo : 126.794368781152,
plygnLa : 37.5359555247986
},
{
setSeqNo : 1,
plygnSeqNo : 3556,
plygnLo : 126.794364870209,
plygnLa : 37.5360239383894
},
{
setSeqNo : 1,
plygnSeqNo : 3557,
plygnLo : 126.794372913411,
plygnLa : 37.5362494796295
},
{
setSeqNo : 1,
plygnSeqNo : 3558,
plygnLo : 126.794295609345,
plygnLa : 37.5364593925494
},
{
setSeqNo : 1,
plygnSeqNo : 3559,
plygnLo : 126.794253381834,
plygnLa : 37.5365787002035
},
{
setSeqNo : 1,
plygnSeqNo : 3560,
plygnLo : 126.794215880983,
plygnLa : 37.5366504338989
},
{
setSeqNo : 1,
plygnSeqNo : 3561,
plygnLo : 126.794185108806,
plygnLa : 37.5367185119837
},
{
setSeqNo : 1,
plygnSeqNo : 3562,
plygnLo : 126.794181192243,
plygnLa : 37.5367269579218
},
{
setSeqNo : 1,
plygnSeqNo : 3563,
plygnLo : 126.794133952923,
plygnLa : 37.5368670868344
},
{
setSeqNo : 1,
plygnSeqNo : 3564,
plygnLo : 126.793982657804,
plygnLa : 37.5373029547721
},
{
setSeqNo : 1,
plygnSeqNo : 3565,
plygnLo : 126.793963400034,
plygnLa : 37.5373603580221
},
{
setSeqNo : 1,
plygnSeqNo : 3566,
plygnLo : 126.793983278952,
plygnLa : 37.5375895876947
},
{
setSeqNo : 1,
plygnSeqNo : 3567,
plygnLo : 126.793994266681,
plygnLa : 37.5377072950579
},
{
setSeqNo : 1,
plygnSeqNo : 3568,
plygnLo : 126.794007747651,
plygnLa : 37.5378196628489
},
{
setSeqNo : 1,
plygnSeqNo : 3569,
plygnLo : 126.794015548692,
plygnLa : 37.5378751423079
},
{
setSeqNo : 1,
plygnSeqNo : 3570,
plygnLo : 126.794039793508,
plygnLa : 37.5379940066363
},
{
setSeqNo : 1,
plygnSeqNo : 3571,
plygnLo : 126.794063969338,
plygnLa : 37.5380734439388
},
{
setSeqNo : 1,
plygnSeqNo : 3572,
plygnLo : 126.794148890511,
plygnLa : 37.5381774872035
},
{
setSeqNo : 1,
plygnSeqNo : 3573,
plygnLo : 126.794182896697,
plygnLa : 37.5382200647051
},
{
setSeqNo : 1,
plygnSeqNo : 3574,
plygnLo : 126.794223364071,
plygnLa : 37.5382919359533
},
{
setSeqNo : 1,
plygnSeqNo : 3575,
plygnLo : 126.794215667523,
plygnLa : 37.5383865254673
},
{
setSeqNo : 1,
plygnSeqNo : 3576,
plygnLo : 126.794174122873,
plygnLa : 37.5385773460216
},
{
setSeqNo : 1,
plygnSeqNo : 3577,
plygnLo : 126.794137582954,
plygnLa : 37.538619800563
},
{
setSeqNo : 1,
plygnSeqNo : 3578,
plygnLo : 126.794103775962,
plygnLa : 37.5387013971081
},
{
setSeqNo : 1,
plygnSeqNo : 3579,
plygnLo : 126.794072273668,
plygnLa : 37.5387759535752
},
{
setSeqNo : 1,
plygnSeqNo : 3580,
plygnLo : 126.794057872598,
plygnLa : 37.5388074634475
},
{
setSeqNo : 1,
plygnSeqNo : 3581,
plygnLo : 126.794042053145,
plygnLa : 37.5388369975516
},
{
setSeqNo : 1,
plygnSeqNo : 3582,
plygnLo : 126.793990890847,
plygnLa : 37.5389253207913
},
{
setSeqNo : 1,
plygnSeqNo : 3583,
plygnLo : 126.793936540849,
plygnLa : 37.5390172987553
},
{
setSeqNo : 1,
plygnSeqNo : 3584,
plygnLo : 126.793912415596,
plygnLa : 37.5391735141655
},
{
setSeqNo : 1,
plygnSeqNo : 3585,
plygnLo : 126.793930229591,
plygnLa : 37.5392532286677
},
{
setSeqNo : 1,
plygnSeqNo : 3586,
plygnLo : 126.793948377006,
plygnLa : 37.5393394230115
},
{
setSeqNo : 1,
plygnSeqNo : 3587,
plygnLo : 126.793935947092,
plygnLa : 37.5394235811149
},
{
setSeqNo : 1,
plygnSeqNo : 3588,
plygnLo : 126.793885030919,
plygnLa : 37.5395496302453
},
{
setSeqNo : 1,
plygnSeqNo : 3589,
plygnLo : 126.793799382284,
plygnLa : 37.5395767981466
},
{
setSeqNo : 1,
plygnSeqNo : 3590,
plygnLo : 126.793795139725,
plygnLa : 37.5395767892779
},
{
setSeqNo : 1,
plygnSeqNo : 3591,
plygnLo : 126.79365748579,
plygnLa : 37.5396162452587
},
{
setSeqNo : 1,
plygnSeqNo : 3592,
plygnLo : 126.793475438039,
plygnLa : 37.5396621014644
},
{
setSeqNo : 1,
plygnSeqNo : 3593,
plygnLo : 126.793262459736,
plygnLa : 37.5397028292992
},
{
setSeqNo : 1,
plygnSeqNo : 3594,
plygnLo : 126.793310997043,
plygnLa : 37.5397327633144
},
{
setSeqNo : 1,
plygnSeqNo : 3595,
plygnLo : 126.793444474925,
plygnLa : 37.5397985996815
},
{
setSeqNo : 1,
plygnSeqNo : 3596,
plygnLo : 126.793570882027,
plygnLa : 37.5398607660011
},
{
setSeqNo : 1,
plygnSeqNo : 3597,
plygnLo : 126.793610594917,
plygnLa : 37.5398861706449
},
{
setSeqNo : 1,
plygnSeqNo : 3598,
plygnLo : 126.793655247313,
plygnLa : 37.5399132887885
},
{
setSeqNo : 1,
plygnSeqNo : 3599,
plygnLo : 126.793795055557,
plygnLa : 37.5399901191341
},
{
setSeqNo : 1,
plygnSeqNo : 3600,
plygnLo : 126.7938028165,
plygnLa : 37.5399949176231
},
{
setSeqNo : 1,
plygnSeqNo : 3601,
plygnLo : 126.794091028741,
plygnLa : 37.5401747749473
},
{
setSeqNo : 1,
plygnSeqNo : 3602,
plygnLo : 126.794268047836,
plygnLa : 37.5401590390472
},
{
setSeqNo : 1,
plygnSeqNo : 3603,
plygnLo : 126.794281555917,
plygnLa : 37.5401970753081
},
{
setSeqNo : 1,
plygnSeqNo : 3604,
plygnLo : 126.794343031168,
plygnLa : 37.540212951579
},
{
setSeqNo : 1,
plygnSeqNo : 3605,
plygnLo : 126.794376395198,
plygnLa : 37.5402341193875
},
{
setSeqNo : 1,
plygnSeqNo : 3606,
plygnLo : 126.79437246583,
plygnLa : 37.5403746138298
},
{
setSeqNo : 1,
plygnSeqNo : 3607,
plygnLo : 126.794405145933,
plygnLa : 37.5404470298569
},
{
setSeqNo : 1,
plygnSeqNo : 3608,
plygnLo : 126.794544812158,
plygnLa : 37.5406415556461
},
{
setSeqNo : 1,
plygnSeqNo : 3609,
plygnLo : 126.794722949958,
plygnLa : 37.5408611953516
},
{
setSeqNo : 1,
plygnSeqNo : 3610,
plygnLo : 126.794813024178,
plygnLa : 37.5409565239249
},
{
setSeqNo : 1,
plygnSeqNo : 3611,
plygnLo : 126.79488879031,
plygnLa : 37.5410509808467
},
{
setSeqNo : 1,
plygnSeqNo : 3612,
plygnLo : 126.794903724359,
plygnLa : 37.5410842272626
},
{
setSeqNo : 1,
plygnSeqNo : 3613,
plygnLo : 126.794925659474,
plygnLa : 37.5412089992263
},
{
setSeqNo : 1,
plygnSeqNo : 3614,
plygnLo : 126.794922794551,
plygnLa : 37.5412838836689
},
{
setSeqNo : 1,
plygnSeqNo : 3615,
plygnLo : 126.794942087183,
plygnLa : 37.5413410776621
},
{
setSeqNo : 1,
plygnSeqNo : 3616,
plygnLo : 126.794944478157,
plygnLa : 37.5413720579859
},
{
setSeqNo : 1,
plygnSeqNo : 3617,
plygnLo : 126.794609364882,
plygnLa : 37.5414030042156
},
{
setSeqNo : 1,
plygnSeqNo : 3618,
plygnLo : 126.79434049416,
plygnLa : 37.5414484211542
},
{
setSeqNo : 1,
plygnSeqNo : 3619,
plygnLo : 126.793667953199,
plygnLa : 37.541515939776
},
{
setSeqNo : 1,
plygnSeqNo : 3620,
plygnLo : 126.793422303871,
plygnLa : 37.541539157457
},
{
setSeqNo : 1,
plygnSeqNo : 3621,
plygnLo : 126.793017465925,
plygnLa : 37.5415944765415
},
{
setSeqNo : 1,
plygnSeqNo : 3622,
plygnLo : 126.792694795865,
plygnLa : 37.5416614806098
},
{
setSeqNo : 1,
plygnSeqNo : 3623,
plygnLo : 126.792416340755,
plygnLa : 37.541722652148
},
{
setSeqNo : 1,
plygnSeqNo : 3624,
plygnLo : 126.792366809616,
plygnLa : 37.541732421164
},
{
setSeqNo : 1,
plygnSeqNo : 3625,
plygnLo : 126.792130525995,
plygnLa : 37.5417610054888
},
{
setSeqNo : 1,
plygnSeqNo : 3626,
plygnLo : 126.792050484173,
plygnLa : 37.5418090030407
},
{
setSeqNo : 1,
plygnSeqNo : 3627,
plygnLo : 126.791810125835,
plygnLa : 37.5419029024621
},
{
setSeqNo : 1,
plygnSeqNo : 3628,
plygnLo : 126.791767984676,
plygnLa : 37.5421142814182
},
{
setSeqNo : 1,
plygnSeqNo : 3629,
plygnLo : 126.791762260017,
plygnLa : 37.542137642153
},
{
setSeqNo : 1,
plygnSeqNo : 3630,
plygnLo : 126.791754212131,
plygnLa : 37.5421711274034
},
{
setSeqNo : 1,
plygnSeqNo : 3631,
plygnLo : 126.791721477532,
plygnLa : 37.5422437162094
},
{
setSeqNo : 1,
plygnSeqNo : 3632,
plygnLo : 126.791674144469,
plygnLa : 37.5423531562945
},
{
setSeqNo : 1,
plygnSeqNo : 3633,
plygnLo : 126.791588813996,
plygnLa : 37.5424549234172
},
{
setSeqNo : 1,
plygnSeqNo : 3634,
plygnLo : 126.791576224844,
plygnLa : 37.5426553800354
},
{
setSeqNo : 1,
plygnSeqNo : 3635,
plygnLo : 126.791535957613,
plygnLa : 37.5428312825216
},
{
setSeqNo : 1,
plygnSeqNo : 3636,
plygnLo : 126.791573693616,
plygnLa : 37.5429926799573
},
{
setSeqNo : 1,
plygnSeqNo : 3637,
plygnLo : 126.791577300894,
plygnLa : 37.5430304205469
},
{
setSeqNo : 1,
plygnSeqNo : 3638,
plygnLo : 126.791583394289,
plygnLa : 37.5430647767638
},
{
setSeqNo : 1,
plygnSeqNo : 3639,
plygnLo : 126.791613814348,
plygnLa : 37.5431236746866
},
{
setSeqNo : 1,
plygnSeqNo : 3640,
plygnLo : 126.791643777112,
plygnLa : 37.5431555510484
},
{
setSeqNo : 1,
plygnSeqNo : 3641,
plygnLo : 126.791701583344,
plygnLa : 37.5432215333893
},
{
setSeqNo : 1,
plygnSeqNo : 3642,
plygnLo : 126.791762915263,
plygnLa : 37.543293442554
},
{
setSeqNo : 1,
plygnSeqNo : 3643,
plygnLo : 126.79177701408,
plygnLa : 37.5433100740955
},
{
setSeqNo : 1,
plygnSeqNo : 3644,
plygnLo : 126.791783739593,
plygnLa : 37.5434939504893
},
{
setSeqNo : 1,
plygnSeqNo : 3645,
plygnLo : 126.791817418671,
plygnLa : 37.5435286338819
},
{
setSeqNo : 1,
plygnSeqNo : 3646,
plygnLo : 126.79181927649,
plygnLa : 37.5437462902035
},
{
setSeqNo : 1,
plygnSeqNo : 3647,
plygnLo : 126.79177223089,
plygnLa : 37.5437532445207
},
{
setSeqNo : 1,
plygnSeqNo : 3648,
plygnLo : 126.791763211336,
plygnLa : 37.5437535073
},
{
setSeqNo : 1,
plygnSeqNo : 3649,
plygnLo : 126.791725197269,
plygnLa : 37.5437551343431
},
{
setSeqNo : 1,
plygnSeqNo : 3650,
plygnLo : 126.791666504638,
plygnLa : 37.5437547498142
},
{
setSeqNo : 1,
plygnSeqNo : 3651,
plygnLo : 126.791432537436,
plygnLa : 37.5437740388571
},
{
setSeqNo : 1,
plygnSeqNo : 3652,
plygnLo : 126.791233924541,
plygnLa : 37.5437311674887
},
{
setSeqNo : 1,
plygnSeqNo : 3653,
plygnLo : 126.791127085875,
plygnLa : 37.5437504113437
},
{
setSeqNo : 1,
plygnSeqNo : 3654,
plygnLo : 126.790991232247,
plygnLa : 37.5437755054183
},
{
setSeqNo : 1,
plygnSeqNo : 3655,
plygnLo : 126.790759966362,
plygnLa : 37.543839854993
},
{
setSeqNo : 1,
plygnSeqNo : 3656,
plygnLo : 126.790564890215,
plygnLa : 37.5439228488894
},
{
setSeqNo : 1,
plygnSeqNo : 3657,
plygnLo : 126.790200167516,
plygnLa : 37.5441038004197
},
{
setSeqNo : 1,
plygnSeqNo : 3658,
plygnLo : 126.790044872866,
plygnLa : 37.5441846114312
},
{
setSeqNo : 1,
plygnSeqNo : 3659,
plygnLo : 126.789823652752,
plygnLa : 37.544261647368
},
{
setSeqNo : 1,
plygnSeqNo : 3660,
plygnLo : 126.789641494758,
plygnLa : 37.544341274121
},
{
setSeqNo : 1,
plygnSeqNo : 3661,
plygnLo : 126.789385485998,
plygnLa : 37.544463015743
},
{
setSeqNo : 1,
plygnSeqNo : 3662,
plygnLo : 126.789214784699,
plygnLa : 37.5445570330035
},
{
setSeqNo : 1,
plygnSeqNo : 3663,
plygnLo : 126.788948982192,
plygnLa : 37.544704371927
},
{
setSeqNo : 1,
plygnSeqNo : 3664,
plygnLo : 126.788711197283,
plygnLa : 37.544819377026
},
{
setSeqNo : 1,
plygnSeqNo : 3665,
plygnLo : 126.788397336621,
plygnLa : 37.5450181659633
},
{
setSeqNo : 1,
plygnSeqNo : 3666,
plygnLo : 126.788192521876,
plygnLa : 37.545165891045
},
{
setSeqNo : 1,
plygnSeqNo : 3667,
plygnLo : 126.788112189814,
plygnLa : 37.5452499344899
},
{
setSeqNo : 1,
plygnSeqNo : 3668,
plygnLo : 126.788072974498,
plygnLa : 37.5452999765693
},
{
setSeqNo : 1,
plygnSeqNo : 3669,
plygnLo : 126.787945542592,
plygnLa : 37.5454681233579
},
{
setSeqNo : 1,
plygnSeqNo : 3670,
plygnLo : 126.787837114667,
plygnLa : 37.5456073017229
},
{
setSeqNo : 1,
plygnSeqNo : 3671,
plygnLo : 126.787731357543,
plygnLa : 37.5457419695815
},
{
setSeqNo : 1,
plygnSeqNo : 3672,
plygnLo : 126.787556787919,
plygnLa : 37.5458855332034
},
{
setSeqNo : 1,
plygnSeqNo : 3673,
plygnLo : 126.787423384903,
plygnLa : 37.5459810222271
},
{
setSeqNo : 1,
plygnSeqNo : 3674,
plygnLo : 126.78726079643,
plygnLa : 37.5460764570601
},
{
setSeqNo : 1,
plygnSeqNo : 3675,
plygnLo : 126.787162365638,
plygnLa : 37.5460585374589
},
{
setSeqNo : 1,
plygnSeqNo : 3676,
plygnLo : 126.787062156022,
plygnLa : 37.5460417496663
},
{
setSeqNo : 1,
plygnSeqNo : 3677,
plygnLo : 126.78694633645,
plygnLa : 37.5459838136841
},
{
setSeqNo : 1,
plygnSeqNo : 3678,
plygnLo : 126.78691221586,
plygnLa : 37.5459851579092
},
{
setSeqNo : 1,
plygnSeqNo : 3679,
plygnLo : 126.786806450335,
plygnLa : 37.545995668713
},
{
setSeqNo : 1,
plygnSeqNo : 3680,
plygnLo : 126.786623608093,
plygnLa : 37.5460040677729
},
{
setSeqNo : 1,
plygnSeqNo : 3681,
plygnLo : 126.786620950131,
plygnLa : 37.5460040627171
},
{
setSeqNo : 1,
plygnSeqNo : 3682,
plygnLo : 126.786259216738,
plygnLa : 37.5460003044055
},
{
setSeqNo : 1,
plygnSeqNo : 3683,
plygnLo : 126.786135964936,
plygnLa : 37.5460043042336
},
{
setSeqNo : 1,
plygnSeqNo : 3684,
plygnLo : 126.785932786913,
plygnLa : 37.5460129434654
},
{
setSeqNo : 1,
plygnSeqNo : 3685,
plygnLo : 126.785868581995,
plygnLa : 37.5460204221019
},
{
setSeqNo : 1,
plygnSeqNo : 3686,
plygnLo : 126.785620015799,
plygnLa : 37.5460103991101
},
{
setSeqNo : 1,
plygnSeqNo : 3687,
plygnLo : 126.785579526583,
plygnLa : 37.5460103252297
},
{
setSeqNo : 1,
plygnSeqNo : 3688,
plygnLo : 126.785481944638,
plygnLa : 37.5460047956581
},
{
setSeqNo : 1,
plygnSeqNo : 3689,
plygnLo : 126.785424985288,
plygnLa : 37.5460148270645
},
{
setSeqNo : 1,
plygnSeqNo : 3690,
plygnLo : 126.785414021583,
plygnLa : 37.5460139602673
},
{
setSeqNo : 1,
plygnSeqNo : 3691,
plygnLo : 126.785160057064,
plygnLa : 37.5460391188872
},
{
setSeqNo : 1,
plygnSeqNo : 3692,
plygnLo : 126.784847433999,
plygnLa : 37.5461061209125
},
{
setSeqNo : 1,
plygnSeqNo : 3693,
plygnLo : 126.78464885099,
plygnLa : 37.546115045427
},
{
setSeqNo : 1,
plygnSeqNo : 3694,
plygnLo : 126.784513573971,
plygnLa : 37.5461209946533
},
{
setSeqNo : 1,
plygnSeqNo : 3695,
plygnLo : 126.784475034391,
plygnLa : 37.5461206439369
},
{
setSeqNo : 1,
plygnSeqNo : 3696,
plygnLo : 126.784225719752,
plygnLa : 37.5460638734456
},
{
setSeqNo : 1,
plygnSeqNo : 3697,
plygnLo : 126.783947228461,
plygnLa : 37.5460087354407
},
{
setSeqNo : 1,
plygnSeqNo : 3698,
plygnLo : 126.7837708988,
plygnLa : 37.546026429999
},
{
setSeqNo : 1,
plygnSeqNo : 3699,
plygnLo : 126.783599582784,
plygnLa : 37.546020770671
},
{
setSeqNo : 1,
plygnSeqNo : 3700,
plygnLo : 126.783554474915,
plygnLa : 37.5460296979907
},
{
setSeqNo : 1,
plygnSeqNo : 3701,
plygnLo : 126.783394880841,
plygnLa : 37.5460085626723
},
{
setSeqNo : 1,
plygnSeqNo : 3702,
plygnLo : 126.783312285205,
plygnLa : 37.5460176986377
},
{
setSeqNo : 1,
plygnSeqNo : 3703,
plygnLo : 126.783158189858,
plygnLa : 37.5460472643651
},
{
setSeqNo : 1,
plygnSeqNo : 3704,
plygnLo : 126.782585720245,
plygnLa : 37.5461565762042
},
{
setSeqNo : 1,
plygnSeqNo : 3705,
plygnLo : 126.782560276618,
plygnLa : 37.546151175522
},
{
setSeqNo : 1,
plygnSeqNo : 3706,
plygnLo : 126.782480789081,
plygnLa : 37.5461839701921
},
{
setSeqNo : 1,
plygnSeqNo : 3707,
plygnLo : 126.782396865362,
plygnLa : 37.5462240782993
},
{
setSeqNo : 1,
plygnSeqNo : 3708,
plygnLo : 126.782197371294,
plygnLa : 37.5463005722861
},
{
setSeqNo : 1,
plygnSeqNo : 3709,
plygnLo : 126.782038348174,
plygnLa : 37.5463275864209
},
{
setSeqNo : 1,
plygnSeqNo : 3710,
plygnLo : 126.781969809122,
plygnLa : 37.5463043748057
},
{
setSeqNo : 1,
plygnSeqNo : 3711,
plygnLo : 126.781914432496,
plygnLa : 37.5461955849777
},
{
setSeqNo : 1,
plygnSeqNo : 3712,
plygnLo : 126.781906520268,
plygnLa : 37.546180929674
},
{
setSeqNo : 1,
plygnSeqNo : 3713,
plygnLo : 126.781887980688,
plygnLa : 37.5461744265539
},
{
setSeqNo : 1,
plygnSeqNo : 3714,
plygnLo : 126.781836306199,
plygnLa : 37.5460687421598
},
{
setSeqNo : 1,
plygnSeqNo : 3715,
plygnLo : 126.781671834318,
plygnLa : 37.5461405157561
},
{
setSeqNo : 1,
plygnSeqNo : 3716,
plygnLo : 126.78147738707,
plygnLa : 37.5461857624027
},
{
setSeqNo : 1,
plygnSeqNo : 3717,
plygnLo : 126.781472087268,
plygnLa : 37.5461868788339
},
{
setSeqNo : 1,
plygnSeqNo : 3718,
plygnLo : 126.781439347831,
plygnLa : 37.5461955483269
},
{
setSeqNo : 1,
plygnSeqNo : 3719,
plygnLo : 126.781436516528,
plygnLa : 37.5461961098389
},
{
setSeqNo : 1,
plygnSeqNo : 3720,
plygnLo : 126.781256587012,
plygnLa : 37.5462334983184
},
{
setSeqNo : 1,
plygnSeqNo : 3721,
plygnLo : 126.781204754963,
plygnLa : 37.5462435374404
},
{
setSeqNo : 1,
plygnSeqNo : 3722,
plygnLo : 126.781075968271,
plygnLa : 37.5462669494114
},
{
setSeqNo : 1,
plygnSeqNo : 3723,
plygnLo : 126.780811493168,
plygnLa : 37.546317414597
},
{
setSeqNo : 1,
plygnSeqNo : 3724,
plygnLo : 126.78068250703,
plygnLa : 37.5463467443748
},
{
setSeqNo : 1,
plygnSeqNo : 3725,
plygnLo : 126.780485940473,
plygnLa : 37.5463928308309
},
{
setSeqNo : 1,
plygnSeqNo : 3726,
plygnLo : 126.780239037599,
plygnLa : 37.5464202466275
},
{
setSeqNo : 1,
plygnSeqNo : 3727,
plygnLo : 126.780043233963,
plygnLa : 37.5464449356453
},
{
setSeqNo : 1,
plygnSeqNo : 3728,
plygnLo : 126.779999889393,
plygnLa : 37.5464504851742
},
{
setSeqNo : 1,
plygnSeqNo : 3729,
plygnLo : 126.779946648413,
plygnLa : 37.5464579894812
},
{
setSeqNo : 1,
plygnSeqNo : 3730,
plygnLo : 126.779796654545,
plygnLa : 37.5464779803677
},
{
setSeqNo : 1,
plygnSeqNo : 3731,
plygnLo : 126.779551864936,
plygnLa : 37.5465062350172
},
{
setSeqNo : 1,
plygnSeqNo : 3732,
plygnLo : 126.779396934289,
plygnLa : 37.546522836699
},
{
setSeqNo : 1,
plygnSeqNo : 3733,
plygnLo : 126.779215088491,
plygnLa : 37.5465495245424
},
{
setSeqNo : 1,
plygnSeqNo : 3734,
plygnLo : 126.77921083704,
plygnLa : 37.546552049015
},
{
setSeqNo : 1,
plygnSeqNo : 3735,
plygnLo : 126.779192779718,
plygnLa : 37.5465629986955
},
{
setSeqNo : 1,
plygnSeqNo : 3736,
plygnLo : 126.779061268781,
plygnLa : 37.546607799781
},
{
setSeqNo : 1,
plygnSeqNo : 3737,
plygnLo : 126.778894728241,
plygnLa : 37.5466623920965
},
{
setSeqNo : 1,
plygnSeqNo : 3738,
plygnLo : 126.778747121571,
plygnLa : 37.5467130739457
},
{
setSeqNo : 1,
plygnSeqNo : 3739,
plygnLo : 126.778669321474,
plygnLa : 37.5467134948561
},
{
setSeqNo : 1,
plygnSeqNo : 3740,
plygnLo : 126.77848896312,
plygnLa : 37.5467159660256
},
{
setSeqNo : 1,
plygnSeqNo : 3741,
plygnLo : 126.778468453213,
plygnLa : 37.5467173420144
},
{
setSeqNo : 1,
plygnSeqNo : 3742,
plygnLo : 126.778333180792,
plygnLa : 37.5467182119363
},
{
setSeqNo : 1,
plygnSeqNo : 3743,
plygnLo : 126.778291112352,
plygnLa : 37.5467172858467
},
{
setSeqNo : 1,
plygnSeqNo : 3744,
plygnLo : 126.778264592913,
plygnLa : 37.5467149820752
},
{
setSeqNo : 1,
plygnSeqNo : 3745,
plygnLo : 126.778089264936,
plygnLa : 37.5466918382959
},
{
setSeqNo : 1,
plygnSeqNo : 3746,
plygnLo : 126.777906334765,
plygnLa : 37.5466686873752
},
{
setSeqNo : 1,
plygnSeqNo : 3747,
plygnLo : 126.77783387122,
plygnLa : 37.546659541068
},
{
setSeqNo : 1,
plygnSeqNo : 3748,
plygnLo : 126.777676423672,
plygnLa : 37.5466893712415
},
{
setSeqNo : 1,
plygnSeqNo : 3749,
plygnLo : 126.777563016415,
plygnLa : 37.546711960779
},
{
setSeqNo : 1,
plygnSeqNo : 3750,
plygnLo : 126.777515758023,
plygnLa : 37.5467884550406
},
{
setSeqNo : 1,
plygnSeqNo : 3751,
plygnLo : 126.777451084392,
plygnLa : 37.5468922256729
},
{
setSeqNo : 1,
plygnSeqNo : 3752,
plygnLo : 126.777428961641,
plygnLa : 37.5469603251638
},
{
setSeqNo : 1,
plygnSeqNo : 3753,
plygnLo : 126.77741291076,
plygnLa : 37.5470073168267
},
{
setSeqNo : 1,
plygnSeqNo : 3754,
plygnLo : 126.777381526009,
plygnLa : 37.5470962311897
},
{
setSeqNo : 1,
plygnSeqNo : 3755,
plygnLo : 126.777347792796,
plygnLa : 37.5471980868436
},
{
setSeqNo : 1,
plygnSeqNo : 3756,
plygnLo : 126.777328435564,
plygnLa : 37.5472270528958
},
{
setSeqNo : 1,
plygnSeqNo : 3757,
plygnLo : 126.777317068359,
plygnLa : 37.5472439252735
},
{
setSeqNo : 1,
plygnSeqNo : 3758,
plygnLo : 126.777288310567,
plygnLa : 37.5472830096248
},
{
setSeqNo : 1,
plygnSeqNo : 3759,
plygnLo : 126.777238076653,
plygnLa : 37.5473482352968
},
{
setSeqNo : 1,
plygnSeqNo : 3760,
plygnLo : 126.777105458898,
plygnLa : 37.5475270550898
},
{
setSeqNo : 1,
plygnSeqNo : 3761,
plygnLo : 126.77701989395,
plygnLa : 37.5476414901053
},
{
setSeqNo : 1,
plygnSeqNo : 3762,
plygnLo : 126.776969822802,
plygnLa : 37.5477123478328
},
{
setSeqNo : 1,
plygnSeqNo : 3763,
plygnLo : 126.77693170411,
plygnLa : 37.5478054645658
},
{
setSeqNo : 1,
plygnSeqNo : 3764,
plygnLo : 126.776847245461,
plygnLa : 37.5480223864138
},
{
setSeqNo : 1,
plygnSeqNo : 3765,
plygnLo : 126.776812510756,
plygnLa : 37.5481073471759
},
{
setSeqNo : 1,
plygnSeqNo : 3766,
plygnLo : 126.77674360946,
plygnLa : 37.5482043616975
},
{
setSeqNo : 1,
plygnSeqNo : 3767,
plygnLo : 126.776534665356,
plygnLa : 37.5483072980455
},
{
setSeqNo : 1,
plygnSeqNo : 3768,
plygnLo : 126.776334750228,
plygnLa : 37.5484029258056
},
{
setSeqNo : 1,
plygnSeqNo : 3769,
plygnLo : 126.776184561024,
plygnLa : 37.5484857015943
},
{
setSeqNo : 1,
plygnSeqNo : 3770,
plygnLo : 126.776051159537,
plygnLa : 37.5485746987187
},
{
setSeqNo : 1,
plygnSeqNo : 3771,
plygnLo : 126.775865487227,
plygnLa : 37.5486973827993
},
{
setSeqNo : 1,
plygnSeqNo : 3772,
plygnLo : 126.775756175457,
plygnLa : 37.5487675685838
},
{
setSeqNo : 1,
plygnSeqNo : 3773,
plygnLo : 126.775610258443,
plygnLa : 37.5488402066497
},
{
setSeqNo : 1,
plygnSeqNo : 3774,
plygnLo : 126.775546340975,
plygnLa : 37.5488679615786
},
{
setSeqNo : 1,
plygnSeqNo : 3775,
plygnLo : 126.775293360258,
plygnLa : 37.5489716586553
},
{
setSeqNo : 1,
plygnSeqNo : 3776,
plygnLo : 126.774896412389,
plygnLa : 37.5489700506643
},
{
setSeqNo : 1,
plygnSeqNo : 3777,
plygnLo : 126.774835049876,
plygnLa : 37.548972185177
},
{
setSeqNo : 1,
plygnSeqNo : 3778,
plygnLo : 126.774479762401,
plygnLa : 37.548935742411
},
{
setSeqNo : 1,
plygnSeqNo : 3779,
plygnLo : 126.774223794812,
plygnLa : 37.548915546145
},
{
setSeqNo : 1,
plygnSeqNo : 3780,
plygnLo : 126.774069083289,
plygnLa : 37.5489135531033
},
{
setSeqNo : 1,
plygnSeqNo : 3781,
plygnLo : 126.773926964493,
plygnLa : 37.548902297663
},
{
setSeqNo : 1,
plygnSeqNo : 3782,
plygnLo : 126.773575890486,
plygnLa : 37.5488720577506
},
{
setSeqNo : 1,
plygnSeqNo : 3783,
plygnLo : 126.77339384122,
plygnLa : 37.5488520019561
},
{
setSeqNo : 1,
plygnSeqNo : 3784,
plygnLo : 126.772963789694,
plygnLa : 37.5488038679272
},
{
setSeqNo : 1,
plygnSeqNo : 3785,
plygnLo : 126.772580426232,
plygnLa : 37.5487532830569
},
{
setSeqNo : 1,
plygnSeqNo : 3786,
plygnLo : 126.772546383848,
plygnLa : 37.5487284399539
},
{
setSeqNo : 1,
plygnSeqNo : 3787,
plygnLo : 126.772513904363,
plygnLa : 37.5487103571708
},
{
setSeqNo : 1,
plygnSeqNo : 3788,
plygnLo : 126.772366645834,
plygnLa : 37.5485850594156
},
{
setSeqNo : 1,
plygnSeqNo : 3789,
plygnLo : 126.772261852707,
plygnLa : 37.5485096871582
},
{
setSeqNo : 1,
plygnSeqNo : 3790,
plygnLo : 126.772219110897,
plygnLa : 37.5484912956825
},
{
setSeqNo : 1,
plygnSeqNo : 3791,
plygnLo : 126.772188559155,
plygnLa : 37.5484794153556
},
{
setSeqNo : 1,
plygnSeqNo : 3792,
plygnLo : 126.772129410296,
plygnLa : 37.548453676341
},
{
setSeqNo : 1,
plygnSeqNo : 3793,
plygnLo : 126.771957072095,
plygnLa : 37.5483776040904
},
{
setSeqNo : 1,
plygnSeqNo : 3794,
plygnLo : 126.771818239806,
plygnLa : 37.5483314377913
},
{
setSeqNo : 1,
plygnSeqNo : 3795,
plygnLo : 126.771690826606,
plygnLa : 37.5483072585741
},
{
setSeqNo : 1,
plygnSeqNo : 3796,
plygnLo : 126.771551819787,
plygnLa : 37.54831796324
},
{
setSeqNo : 1,
plygnSeqNo : 3797,
plygnLo : 126.771494407387,
plygnLa : 37.5483567109334
},
{
setSeqNo : 1,
plygnSeqNo : 3798,
plygnLo : 126.771351584992,
plygnLa : 37.5486295396981
},
{
setSeqNo : 1,
plygnSeqNo : 3799,
plygnLo : 126.771242351026,
plygnLa : 37.5486180746619
},
{
setSeqNo : 1,
plygnSeqNo : 3800,
plygnLo : 126.771232723357,
plygnLa : 37.5486422651656
},
{
setSeqNo : 1,
plygnSeqNo : 3801,
plygnLo : 126.771191151002,
plygnLa : 37.5486528786741
},
{
setSeqNo : 1,
plygnSeqNo : 3802,
plygnLo : 126.771053120191,
plygnLa : 37.5486880906613
},
{
setSeqNo : 1,
plygnSeqNo : 3803,
plygnLo : 126.770992831683,
plygnLa : 37.5487456894109
},
{
setSeqNo : 1,
plygnSeqNo : 3804,
plygnLo : 126.770990651664,
plygnLa : 37.5487625793817
},
{
setSeqNo : 1,
plygnSeqNo : 3805,
plygnLo : 126.77102543335,
plygnLa : 37.5488930109455
},
{
setSeqNo : 1,
plygnSeqNo : 3806,
plygnLo : 126.771006625941,
plygnLa : 37.5490286817559
},
{
setSeqNo : 1,
plygnSeqNo : 3807,
plygnLo : 126.77092673853,
plygnLa : 37.5491332647181
},
{
setSeqNo : 1,
plygnSeqNo : 3808,
plygnLo : 126.770880041897,
plygnLa : 37.5492567808118
},
{
setSeqNo : 1,
plygnSeqNo : 3809,
plygnLo : 126.770859720041,
plygnLa : 37.549307143352
},
{
setSeqNo : 1,
plygnSeqNo : 3810,
plygnLo : 126.770843494351,
plygnLa : 37.5493504658081
},
{
setSeqNo : 1,
plygnSeqNo : 3811,
plygnLo : 126.770702290719,
plygnLa : 37.5495008262093
},
{
setSeqNo : 1,
plygnSeqNo : 3812,
plygnLo : 126.770636118791,
plygnLa : 37.5495719299817
},
{
setSeqNo : 1,
plygnSeqNo : 3813,
plygnLo : 126.770484183355,
plygnLa : 37.5496462530184
},
{
setSeqNo : 1,
plygnSeqNo : 3814,
plygnLo : 126.770401280031,
plygnLa : 37.5497528035093
},
{
setSeqNo : 1,
plygnSeqNo : 3815,
plygnLo : 126.770327489516,
plygnLa : 37.5498286748016
},
{
setSeqNo : 1,
plygnSeqNo : 3816,
plygnLo : 126.770267719649,
plygnLa : 37.5499991870333
},
{
setSeqNo : 1,
plygnSeqNo : 3817,
plygnLo : 126.770086148311,
plygnLa : 37.5501091945867
},
{
setSeqNo : 1,
plygnSeqNo : 3818,
plygnLo : 126.769922207484,
plygnLa : 37.5501750421187
},
{
setSeqNo : 1,
plygnSeqNo : 3819,
plygnLo : 126.76990019674,
plygnLa : 37.5502591871365
},
{
setSeqNo : 1,
plygnSeqNo : 3820,
plygnLo : 126.769866295444,
plygnLa : 37.5503571027488
},
{
setSeqNo : 1,
plygnSeqNo : 3821,
plygnLo : 126.769850438313,
plygnLa : 37.5504530817854
},
{
setSeqNo : 1,
plygnSeqNo : 3822,
plygnLo : 126.769807030672,
plygnLa : 37.5505397153011
},
{
setSeqNo : 1,
plygnSeqNo : 3823,
plygnLo : 126.769840642762,
plygnLa : 37.5506490268853
},
{
setSeqNo : 1,
plygnSeqNo : 3824,
plygnLo : 126.769866364141,
plygnLa : 37.5506789262011
},
{
setSeqNo : 1,
plygnSeqNo : 3825,
plygnLo : 126.769928927802,
plygnLa : 37.5507457764339
},
{
setSeqNo : 1,
plygnSeqNo : 3826,
plygnLo : 126.769936521687,
plygnLa : 37.5507500181624
},
{
setSeqNo : 1,
plygnSeqNo : 3827,
plygnLo : 126.770041378019,
plygnLa : 37.5508639737622
},
{
setSeqNo : 1,
plygnSeqNo : 3828,
plygnLo : 126.770101305509,
plygnLa : 37.5509237807408
},
{
setSeqNo : 1,
plygnSeqNo : 3829,
plygnLo : 126.770267721439,
plygnLa : 37.551086563694
},
{
setSeqNo : 1,
plygnSeqNo : 3830,
plygnLo : 126.770159608239,
plygnLa : 37.5511694151773
},
{
setSeqNo : 1,
plygnSeqNo : 3831,
plygnLo : 126.770029340296,
plygnLa : 37.5511519859146
},
{
setSeqNo : 1,
plygnSeqNo : 3832,
plygnLo : 126.769972516023,
plygnLa : 37.5511166730082
},
{
setSeqNo : 1,
plygnSeqNo : 3833,
plygnLo : 126.769894678079,
plygnLa : 37.5510697873446
},
{
setSeqNo : 1,
plygnSeqNo : 3834,
plygnLo : 126.769789127742,
plygnLa : 37.5510667602349
},
{
setSeqNo : 1,
plygnSeqNo : 3835,
plygnLo : 126.769716827571,
plygnLa : 37.5511175866771
},
{
setSeqNo : 1,
plygnSeqNo : 3836,
plygnLo : 126.769523143512,
plygnLa : 37.5512526336841
},
{
setSeqNo : 1,
plygnSeqNo : 3837,
plygnLo : 126.769389088822,
plygnLa : 37.5513174033377
},
{
setSeqNo : 1,
plygnSeqNo : 3838,
plygnLo : 126.769347392209,
plygnLa : 37.5513634979678
},
{
setSeqNo : 1,
plygnSeqNo : 3839,
plygnLo : 126.769378326923,
plygnLa : 37.5514821019187
},
{
setSeqNo : 1,
plygnSeqNo : 3840,
plygnLo : 126.769382845143,
plygnLa : 37.5515063198254
},
{
setSeqNo : 1,
plygnSeqNo : 3841,
plygnLo : 126.769320582786,
plygnLa : 37.5515720859587
},
{
setSeqNo : 1,
plygnSeqNo : 3842,
plygnLo : 126.769184771604,
plygnLa : 37.5515718203015
},
{
setSeqNo : 1,
plygnSeqNo : 3843,
plygnLo : 126.769134574637,
plygnLa : 37.5515666480533
},
{
setSeqNo : 1,
plygnSeqNo : 3844,
plygnLo : 126.769046180133,
plygnLa : 37.5515597170942
},
{
setSeqNo : 1,
plygnSeqNo : 3845,
plygnLo : 126.768917549616,
plygnLa : 37.5515324339367
},
{
setSeqNo : 1,
plygnSeqNo : 3846,
plygnLo : 126.768858036697,
plygnLa : 37.5515069815071
},
{
setSeqNo : 1,
plygnSeqNo : 3847,
plygnLo : 126.768769505006,
plygnLa : 37.5514890660641
},
{
setSeqNo : 1,
plygnSeqNo : 3848,
plygnLo : 126.768559279506,
plygnLa : 37.5515973291712
},
{
setSeqNo : 1,
plygnSeqNo : 3849,
plygnLo : 126.768217599831,
plygnLa : 37.5516143940592
},
{
setSeqNo : 1,
plygnSeqNo : 3850,
plygnLo : 126.768156533532,
plygnLa : 37.5516362387795
},
{
setSeqNo : 1,
plygnSeqNo : 3851,
plygnLo : 126.768130051544,
plygnLa : 37.5515643877592
},
{
setSeqNo : 1,
plygnSeqNo : 3852,
plygnLo : 126.768079104682,
plygnLa : 37.5515713243668
},
{
setSeqNo : 1,
plygnSeqNo : 3853,
plygnLo : 126.768107513922,
plygnLa : 37.5516493780037
},
{
setSeqNo : 1,
plygnSeqNo : 3854,
plygnLo : 126.76807171855,
plygnLa : 37.5517292616826
},
{
setSeqNo : 1,
plygnSeqNo : 3855,
plygnLo : 126.768049062607,
plygnLa : 37.5517948270462
},
{
setSeqNo : 1,
plygnSeqNo : 3856,
plygnLo : 126.767663359867,
plygnLa : 37.5518661433906
},
{
setSeqNo : 1,
plygnSeqNo : 3857,
plygnLo : 126.767550489774,
plygnLa : 37.5518873165817
},
{
setSeqNo : 1,
plygnSeqNo : 3858,
plygnLo : 126.767530456972,
plygnLa : 37.5519027566982
},
{
setSeqNo : 1,
plygnSeqNo : 3859,
plygnLo : 126.767465053775,
plygnLa : 37.5519507764867
},
{
setSeqNo : 1,
plygnSeqNo : 3860,
plygnLo : 126.767520112028,
plygnLa : 37.5521023680668
},
{
setSeqNo : 1,
plygnSeqNo : 3861,
plygnLo : 126.767604062788,
plygnLa : 37.5523401704503
},
{
setSeqNo : 1,
plygnSeqNo : 3862,
plygnLo : 126.767680130028,
plygnLa : 37.5525548650042
},
{
setSeqNo : 1,
plygnSeqNo : 3863,
plygnLo : 126.767639789723,
plygnLa : 37.5525649209979
},
{
setSeqNo : 1,
plygnSeqNo : 3864,
plygnLo : 126.767624348666,
plygnLa : 37.5526383742805
},
{
setSeqNo : 1,
plygnSeqNo : 3865,
plygnLo : 126.767656251142,
plygnLa : 37.5527293838797
},
{
setSeqNo : 1,
plygnSeqNo : 3866,
plygnLo : 126.767713924901,
plygnLa : 37.5528331112184
},
{
setSeqNo : 1,
plygnSeqNo : 3867,
plygnLo : 126.767642191234,
plygnLa : 37.5528678831155
},
{
setSeqNo : 1,
plygnSeqNo : 3868,
plygnLo : 126.767578464251,
plygnLa : 37.5528939492552
},
{
setSeqNo : 1,
plygnSeqNo : 3869,
plygnLo : 126.76754057275,
plygnLa : 37.5529096411229
},
{
setSeqNo : 1,
plygnSeqNo : 3870,
plygnLo : 126.767483429804,
plygnLa : 37.5529725965771
},
{
setSeqNo : 1,
plygnSeqNo : 3871,
plygnLo : 126.767455983984,
plygnLa : 37.5530418003852
},
{
setSeqNo : 1,
plygnSeqNo : 3872,
plygnLo : 126.767396924553,
plygnLa : 37.5530985626
},
{
setSeqNo : 1,
plygnSeqNo : 3873,
plygnLo : 126.767390357698,
plygnLa : 37.5531067133472
},
{
setSeqNo : 1,
plygnSeqNo : 3874,
plygnLo : 126.767370123706,
plygnLa : 37.553132009483
},
{
setSeqNo : 1,
plygnSeqNo : 3875,
plygnLo : 126.767470877511,
plygnLa : 37.5533132540457
},
{
setSeqNo : 1,
plygnSeqNo : 3876,
plygnLo : 126.767585174538,
plygnLa : 37.5534047044078
},
{
setSeqNo : 1,
plygnSeqNo : 3877,
plygnLo : 126.767623805664,
plygnLa : 37.5534351893041
},
{
setSeqNo : 1,
plygnSeqNo : 3878,
plygnLo : 126.767625556457,
plygnLa : 37.5534982631129
},
{
setSeqNo : 1,
plygnSeqNo : 3879,
plygnLo : 126.767625274095,
plygnLa : 37.5535303638745
},
{
setSeqNo : 1,
plygnSeqNo : 3880,
plygnLo : 126.76756396212,
plygnLa : 37.5535724725818
},
{
setSeqNo : 1,
plygnSeqNo : 3881,
plygnLo : 126.767406728419,
plygnLa : 37.553582017287
},
{
setSeqNo : 1,
plygnSeqNo : 3882,
plygnLo : 126.767350131931,
plygnLa : 37.5535858432679
},
{
setSeqNo : 1,
plygnSeqNo : 3883,
plygnLo : 126.767288291765,
plygnLa : 37.5536271117997
},
{
setSeqNo : 1,
plygnSeqNo : 3884,
plygnLo : 126.767287582954,
plygnLa : 37.55368398024
},
{
setSeqNo : 1,
plygnSeqNo : 3885,
plygnLo : 126.767294819118,
plygnLa : 37.5536896260593
},
{
setSeqNo : 1,
plygnSeqNo : 3886,
plygnLo : 126.7675179653,
plygnLa : 37.5538598494806
},
{
setSeqNo : 1,
plygnSeqNo : 3887,
plygnLo : 126.7675488462,
plygnLa : 37.5538827241781
},
{
setSeqNo : 1,
plygnSeqNo : 3888,
plygnLo : 126.767641454834,
plygnLa : 37.5539546994261
},
{
setSeqNo : 1,
plygnSeqNo : 3889,
plygnLo : 126.767639089475,
plygnLa : 37.5540890037831
},
{
setSeqNo : 1,
plygnSeqNo : 3890,
plygnLo : 126.767605567096,
plygnLa : 37.5541215904206
},
{
setSeqNo : 1,
plygnSeqNo : 3891,
plygnLo : 126.767552348433,
plygnLa : 37.554174705785
},
{
setSeqNo : 1,
plygnSeqNo : 3892,
plygnLo : 126.767481901177,
plygnLa : 37.5541990555643
},
{
setSeqNo : 1,
plygnSeqNo : 3893,
plygnLo : 126.767457991747,
plygnLa : 37.5542091446624
},
{
setSeqNo : 1,
plygnSeqNo : 3894,
plygnLo : 126.767406854558,
plygnLa : 37.5542225565133
},
{
setSeqNo : 1,
plygnSeqNo : 3895,
plygnLo : 126.767232469657,
plygnLa : 37.5541754776599
},
{
setSeqNo : 1,
plygnSeqNo : 3896,
plygnLo : 126.767214617169,
plygnLa : 37.554173468348
},
{
setSeqNo : 1,
plygnSeqNo : 3897,
plygnLo : 126.76702429373,
plygnLa : 37.5540779274501
},
{
setSeqNo : 1,
plygnSeqNo : 3898,
plygnLo : 126.766945674357,
plygnLa : 37.5540560941544
},
{
setSeqNo : 1,
plygnSeqNo : 3899,
plygnLo : 126.766888338323,
plygnLa : 37.5540680809565
},
{
setSeqNo : 1,
plygnSeqNo : 3900,
plygnLo : 126.766842913878,
plygnLa : 37.5540634852964
},
{
setSeqNo : 1,
plygnSeqNo : 3901,
plygnLo : 126.766727262719,
plygnLa : 37.5540649500185
},
{
setSeqNo : 1,
plygnSeqNo : 3902,
plygnLo : 126.766666604582,
plygnLa : 37.5540104819213
},
{
setSeqNo : 1,
plygnSeqNo : 3903,
plygnLo : 126.766632989011,
plygnLa : 37.5539577700048
},
{
setSeqNo : 1,
plygnSeqNo : 3904,
plygnLo : 126.766530363006,
plygnLa : 37.5538105873099
},
{
setSeqNo : 1,
plygnSeqNo : 3905,
plygnLo : 126.766428142959,
plygnLa : 37.5537585763488
},
{
setSeqNo : 1,
plygnSeqNo : 3906,
plygnLo : 126.766365351525,
plygnLa : 37.5537635235986
},
{
setSeqNo : 1,
plygnSeqNo : 3907,
plygnLo : 126.766349907008,
plygnLa : 37.5539538283949
},
{
setSeqNo : 1,
plygnSeqNo : 3908,
plygnLo : 126.766335021906,
plygnLa : 37.5540193987716
},
{
setSeqNo : 1,
plygnSeqNo : 3909,
plygnLo : 126.766324516403,
plygnLa : 37.5540421821977
},
{
setSeqNo : 1,
plygnSeqNo : 3910,
plygnLo : 126.766240456914,
plygnLa : 37.5541740627197
},
{
setSeqNo : 1,
plygnSeqNo : 3911,
plygnLo : 126.766204357483,
plygnLa : 37.5542424125411
},
{
setSeqNo : 1,
plygnSeqNo : 3912,
plygnLo : 126.766279283949,
plygnLa : 37.5543115513893
},
{
setSeqNo : 1,
plygnSeqNo : 3913,
plygnLo : 126.766373946715,
plygnLa : 37.5545758368947
},
{
setSeqNo : 1,
plygnSeqNo : 3914,
plygnLo : 126.766400262162,
plygnLa : 37.5546437433265
},
{
setSeqNo : 1,
plygnSeqNo : 3915,
plygnLo : 126.766402339475,
plygnLa : 37.5546561353433
},
{
setSeqNo : 1,
plygnSeqNo : 3916,
plygnLo : 126.766396605315,
plygnLa : 37.5547915602456
},
{
setSeqNo : 1,
plygnSeqNo : 3917,
plygnLo : 126.766336589787,
plygnLa : 37.5548708367876
},
{
setSeqNo : 1,
plygnSeqNo : 3918,
plygnLo : 126.766325433025,
plygnLa : 37.5548775709629
},
{
setSeqNo : 1,
plygnSeqNo : 3919,
plygnLo : 126.766237209009,
plygnLa : 37.5549269495352
},
{
setSeqNo : 1,
plygnSeqNo : 3920,
plygnLo : 126.76616918198,
plygnLa : 37.5549662326404
},
{
setSeqNo : 1,
plygnSeqNo : 3921,
plygnLo : 126.766048681623,
plygnLa : 37.5549935888518
},
{
setSeqNo : 1,
plygnSeqNo : 3922,
plygnLo : 126.765954429313,
plygnLa : 37.5549945278726
},
{
setSeqNo : 1,
plygnSeqNo : 3923,
plygnLo : 126.765632071239,
plygnLa : 37.5549907837384
},
{
setSeqNo : 1,
plygnSeqNo : 3924,
plygnLo : 126.765393190017,
plygnLa : 37.5549869287915
},
{
setSeqNo : 1,
plygnSeqNo : 3925,
plygnLo : 126.765059063457,
plygnLa : 37.5550155418995
},
{
setSeqNo : 1,
plygnSeqNo : 3926,
plygnLo : 126.764784084605,
plygnLa : 37.5550746812735
},
{
setSeqNo : 1,
plygnSeqNo : 3927,
plygnLo : 126.764592778819,
plygnLa : 37.5551781912662
},
{
setSeqNo : 1,
plygnSeqNo : 3928,
plygnLo : 126.764494861501,
plygnLa : 37.5552751293671
},
{
setSeqNo : 1,
plygnSeqNo : 3929,
plygnLo : 126.7644839598,
plygnLa : 37.5553694319253
},
{
setSeqNo : 1,
plygnSeqNo : 3930,
plygnLo : 126.764559220915,
plygnLa : 37.5554439151823
},
{
setSeqNo : 1,
plygnSeqNo : 3931,
plygnLo : 126.764708465389,
plygnLa : 37.5554994009423
},
{
setSeqNo : 1,
plygnSeqNo : 3932,
plygnLo : 126.765051332766,
plygnLa : 37.555617774038
},
{
setSeqNo : 1,
plygnSeqNo : 3933,
plygnLo : 126.765378617517,
plygnLa : 37.555793005067
},
{
setSeqNo : 1,
plygnSeqNo : 3934,
plygnLo : 126.765893553494,
plygnLa : 37.5560769983463
},
{
setSeqNo : 1,
plygnSeqNo : 3935,
plygnLo : 126.76597670786,
plygnLa : 37.5561182665005
},
{
setSeqNo : 1,
plygnSeqNo : 3936,
plygnLo : 126.765983949675,
plygnLa : 37.5561216590863
},
{
setSeqNo : 1,
plygnSeqNo : 3937,
plygnLo : 126.76600901474,
plygnLa : 37.5561338193793
},
{
setSeqNo : 1,
plygnSeqNo : 3938,
plygnLo : 126.76604682554,
plygnLa : 37.5561443094767
},
{
setSeqNo : 1,
plygnSeqNo : 3939,
plygnLo : 126.766231806717,
plygnLa : 37.5561953591364
},
{
setSeqNo : 1,
plygnSeqNo : 3940,
plygnLo : 126.766372671524,
plygnLa : 37.5562176055587
},
{
setSeqNo : 1,
plygnSeqNo : 3941,
plygnLo : 126.766627013162,
plygnLa : 37.5562583777679
},
{
setSeqNo : 1,
plygnSeqNo : 3942,
plygnLo : 126.766724615419,
plygnLa : 37.5563157214728
},
{
setSeqNo : 1,
plygnSeqNo : 3943,
plygnLo : 126.766747399988,
plygnLa : 37.5563833407176
},
{
setSeqNo : 1,
plygnSeqNo : 3944,
plygnLo : 126.7667486211,
plygnLa : 37.5563870006383
},
{
setSeqNo : 1,
plygnSeqNo : 3945,
plygnLo : 126.766751795649,
plygnLa : 37.5565041366443
},
{
setSeqNo : 1,
plygnSeqNo : 3946,
plygnLo : 126.766663303048,
plygnLa : 37.5565844891176
},
{
setSeqNo : 1,
plygnSeqNo : 3947,
plygnLo : 126.766519975511,
plygnLa : 37.5566683936171
},
{
setSeqNo : 1,
plygnSeqNo : 3948,
plygnLo : 126.76641757218,
plygnLa : 37.5567309699359
},
{
setSeqNo : 1,
plygnSeqNo : 3949,
plygnLo : 126.766401629875,
plygnLa : 37.5567407947381
},
{
setSeqNo : 1,
plygnSeqNo : 3950,
plygnLo : 126.766275375718,
plygnLa : 37.5568509143586
},
{
setSeqNo : 1,
plygnSeqNo : 3951,
plygnLo : 126.766284356923,
plygnLa : 37.5569171011754
},
{
setSeqNo : 1,
plygnSeqNo : 3952,
plygnLo : 126.766435116533,
plygnLa : 37.5569427367755
},
{
setSeqNo : 1,
plygnSeqNo : 3953,
plygnLo : 126.766594893225,
plygnLa : 37.556969247896
},
{
setSeqNo : 1,
plygnSeqNo : 3954,
plygnLo : 126.766596486741,
plygnLa : 37.5569695301108
},
{
setSeqNo : 1,
plygnSeqNo : 3955,
plygnLo : 126.766619107994,
plygnLa : 37.5569743594177
},
{
setSeqNo : 1,
plygnSeqNo : 3956,
plygnLo : 126.766704857497,
plygnLa : 37.5569210367135
},
{
setSeqNo : 1,
plygnSeqNo : 3957,
plygnLo : 126.766829771213,
plygnLa : 37.5568438558077
},
{
setSeqNo : 1,
plygnSeqNo : 3958,
plygnLo : 126.766906846955,
plygnLa : 37.556795858847
},
{
setSeqNo : 1,
plygnSeqNo : 3959,
plygnLo : 126.767003921805,
plygnLa : 37.5567436861559
},
{
setSeqNo : 1,
plygnSeqNo : 3960,
plygnLo : 126.767141354922,
plygnLa : 37.5566727188305
},
{
setSeqNo : 1,
plygnSeqNo : 3961,
plygnLo : 126.767186346352,
plygnLa : 37.5566500030617
},
{
setSeqNo : 1,
plygnSeqNo : 3962,
plygnLo : 126.767239096551,
plygnLa : 37.5566318102168
},
{
setSeqNo : 1,
plygnSeqNo : 3963,
plygnLo : 126.767292004499,
plygnLa : 37.5566214989908
},
{
setSeqNo : 1,
plygnSeqNo : 3964,
plygnLo : 126.767350373054,
plygnLa : 37.5566193625039
},
{
setSeqNo : 1,
plygnSeqNo : 3965,
plygnLo : 126.767501800297,
plygnLa : 37.5566554127133
},
{
setSeqNo : 1,
plygnSeqNo : 3966,
plygnLo : 126.767500243679,
plygnLa : 37.5566430316514
},
{
setSeqNo : 1,
plygnSeqNo : 3967,
plygnLo : 126.767500082695,
plygnLa : 37.5566407701536
},
{
setSeqNo : 1,
plygnSeqNo : 3968,
plygnLo : 126.767549022801,
plygnLa : 37.5566541014925
},
{
setSeqNo : 1,
plygnSeqNo : 3969,
plygnLo : 126.767736139353,
plygnLa : 37.5567026220811
},
{
setSeqNo : 1,
plygnSeqNo : 3970,
plygnLo : 126.767838665639,
plygnLa : 37.5567129600839
},
{
setSeqNo : 1,
plygnSeqNo : 3971,
plygnLo : 126.767987004194,
plygnLa : 37.556723390601
},
{
setSeqNo : 1,
plygnSeqNo : 3972,
plygnLo : 126.768018654109,
plygnLa : 37.5567251464582
},
{
setSeqNo : 1,
plygnSeqNo : 3973,
plygnLo : 126.768131484995,
plygnLa : 37.5567188911479
},
{
setSeqNo : 1,
plygnSeqNo : 3974,
plygnLo : 126.768187026682,
plygnLa : 37.5567161816392
},
{
setSeqNo : 1,
plygnSeqNo : 3975,
plygnLo : 126.768272587739,
plygnLa : 37.5567233960739
},
{
setSeqNo : 1,
plygnSeqNo : 3976,
plygnLo : 126.768335146544,
plygnLa : 37.5567350615162
},
{
setSeqNo : 1,
plygnSeqNo : 3977,
plygnLo : 126.768459026707,
plygnLa : 37.5567606412821
},
{
setSeqNo : 1,
plygnSeqNo : 3978,
plygnLo : 126.768735610421,
plygnLa : 37.5568166512383
},
{
setSeqNo : 1,
plygnSeqNo : 3979,
plygnLo : 126.768817208208,
plygnLa : 37.5569040997251
},
{
setSeqNo : 1,
plygnSeqNo : 3980,
plygnLo : 126.768871165746,
plygnLa : 37.5569523543651
},
{
setSeqNo : 1,
plygnSeqNo : 3981,
plygnLo : 126.768939549002,
plygnLa : 37.5570282269917
},
{
setSeqNo : 1,
plygnSeqNo : 3982,
plygnLo : 126.768994859264,
plygnLa : 37.5570964785055
},
{
setSeqNo : 1,
plygnSeqNo : 3983,
plygnLo : 126.769050689002,
plygnLa : 37.5571148867035
},
{
setSeqNo : 1,
plygnSeqNo : 3984,
plygnLo : 126.769097863286,
plygnLa : 37.5571248358008
},
{
setSeqNo : 1,
plygnSeqNo : 3985,
plygnLo : 126.769148592232,
plygnLa : 37.5571345043101
},
{
setSeqNo : 1,
plygnSeqNo : 3986,
plygnLo : 126.769247418009,
plygnLa : 37.5571406102129
},
{
setSeqNo : 1,
plygnSeqNo : 3987,
plygnLo : 126.769440496343,
plygnLa : 37.557151124917
},
{
setSeqNo : 1,
plygnSeqNo : 3988,
plygnLo : 126.769533312355,
plygnLa : 37.5571583530748
},
{
setSeqNo : 1,
plygnSeqNo : 3989,
plygnLo : 126.76970490646,
plygnLa : 37.5571952877207
},
{
setSeqNo : 1,
plygnSeqNo : 3990,
plygnLo : 126.76986730378,
plygnLa : 37.557230521444
},
{
setSeqNo : 1,
plygnSeqNo : 3991,
plygnLo : 126.769947223373,
plygnLa : 37.5572360290236
},
{
setSeqNo : 1,
plygnSeqNo : 3992,
plygnLo : 126.769961004455,
plygnLa : 37.5572371831481
},
{
setSeqNo : 1,
plygnSeqNo : 3993,
plygnLo : 126.769984398771,
plygnLa : 37.557222019234
},
{
setSeqNo : 1,
plygnSeqNo : 3994,
plygnLo : 126.770063656682,
plygnLa : 37.5572106335412
},
{
setSeqNo : 1,
plygnSeqNo : 3995,
plygnLo : 126.770349381955,
plygnLa : 37.557224149457
},
{
setSeqNo : 1,
plygnSeqNo : 3996,
plygnLo : 126.77042172264,
plygnLa : 37.5572206234437
},
{
setSeqNo : 1,
plygnSeqNo : 3997,
plygnLo : 126.770662600514,
plygnLa : 37.557210399909
},
{
setSeqNo : 1,
plygnSeqNo : 3998,
plygnLo : 126.770699024103,
plygnLa : 37.5572093463982
},
{
setSeqNo : 1,
plygnSeqNo : 3999,
plygnLo : 126.77097955995,
plygnLa : 37.5571845493331
},
{
setSeqNo : 1,
plygnSeqNo : 4000,
plygnLo : 126.771192181883,
plygnLa : 37.5571655384468
},
{
setSeqNo : 1,
plygnSeqNo : 4001,
plygnLo : 126.771376259032,
plygnLa : 37.5571109917268
},
{
setSeqNo : 1,
plygnSeqNo : 4002,
plygnLo : 126.771501743125,
plygnLa : 37.5570754853079
},
{
setSeqNo : 1,
plygnSeqNo : 4003,
plygnLo : 126.77160862382,
plygnLa : 37.5570506278997
},
{
setSeqNo : 1,
plygnSeqNo : 4004,
plygnLo : 126.771954406339,
plygnLa : 37.5569727431808
},
{
setSeqNo : 1,
plygnSeqNo : 4005,
plygnLo : 126.771994039693,
plygnLa : 37.5569655046548
},
{
setSeqNo : 1,
plygnSeqNo : 4006,
plygnLo : 126.772114820004,
plygnLa : 37.5569651716333
},
{
setSeqNo : 1,
plygnSeqNo : 4007,
plygnLo : 126.772244761943,
plygnLa : 37.5569741531616
},
{
setSeqNo : 1,
plygnSeqNo : 4008,
plygnLo : 126.772381073164,
plygnLa : 37.556984554636
},
{
setSeqNo : 1,
plygnSeqNo : 4009,
plygnLo : 126.772431031605,
plygnLa : 37.5570128076569
},
{
setSeqNo : 1,
plygnSeqNo : 4010,
plygnLo : 126.772473038398,
plygnLa : 37.5570402057119
},
{
setSeqNo : 1,
plygnSeqNo : 4011,
plygnLo : 126.772544645978,
plygnLa : 37.5570983416684
},
{
setSeqNo : 1,
plygnSeqNo : 4012,
plygnLo : 126.772645724314,
plygnLa : 37.5571790682911
},
{
setSeqNo : 1,
plygnSeqNo : 4013,
plygnLo : 126.772678373153,
plygnLa : 37.5572022160524
},
{
setSeqNo : 1,
plygnSeqNo : 4014,
plygnLo : 126.772711362239,
plygnLa : 37.5572281831354
},
{
setSeqNo : 1,
plygnSeqNo : 4015,
plygnLo : 126.772778761752,
plygnLa : 37.5572787143855
},
{
setSeqNo : 1,
plygnSeqNo : 4016,
plygnLo : 126.77292352537,
plygnLa : 37.5573561367251
},
{
setSeqNo : 1,
plygnSeqNo : 4017,
plygnLo : 126.773092671529,
plygnLa : 37.5574429044955
},
{
setSeqNo : 1,
plygnSeqNo : 4018,
plygnLo : 126.773175785286,
plygnLa : 37.5574993785397
},
{
setSeqNo : 1,
plygnSeqNo : 4019,
plygnLo : 126.773170263465,
plygnLa : 37.5575140078099
},
{
setSeqNo : 1,
plygnSeqNo : 4020,
plygnLo : 126.773184188984,
plygnLa : 37.5575275503583
},
{
setSeqNo : 1,
plygnSeqNo : 4021,
plygnLo : 126.773057008106,
plygnLa : 37.5576554155616
},
{
setSeqNo : 1,
plygnSeqNo : 4022,
plygnLo : 126.773008232766,
plygnLa : 37.5577020553878
},
{
setSeqNo : 1,
plygnSeqNo : 4023,
plygnLo : 126.772935732222,
plygnLa : 37.5577618936825
},
{
setSeqNo : 1,
plygnSeqNo : 4024,
plygnLo : 126.77288962215,
plygnLa : 37.5578029077007
},
{
setSeqNo : 1,
plygnSeqNo : 4025,
plygnLo : 126.772837545664,
plygnLa : 37.5578304039277
},
{
setSeqNo : 1,
plygnSeqNo : 4026,
plygnLo : 126.772772472622,
plygnLa : 37.557888274377
},
{
setSeqNo : 1,
plygnSeqNo : 4027,
plygnLo : 126.772734380205,
plygnLa : 37.55791353733
},
{
setSeqNo : 1,
plygnSeqNo : 4028,
plygnLo : 126.772681382374,
plygnLa : 37.5579539779575
},
{
setSeqNo : 1,
plygnSeqNo : 4029,
plygnLo : 126.772482351056,
plygnLa : 37.5580983181349
},
{
setSeqNo : 1,
plygnSeqNo : 4030,
plygnLo : 126.772270720122,
plygnLa : 37.558257553294
},
{
setSeqNo : 1,
plygnSeqNo : 4031,
plygnLo : 126.772179614479,
plygnLa : 37.5583238241225
},
{
setSeqNo : 1,
plygnSeqNo : 4032,
plygnLo : 126.772129090715,
plygnLa : 37.5583648298822
},
{
setSeqNo : 1,
plygnSeqNo : 4033,
plygnLo : 126.772083009007,
plygnLa : 37.558400500305
},
{
setSeqNo : 1,
plygnSeqNo : 4034,
plygnLo : 126.7720480848,
plygnLa : 37.5584291455325
},
{
setSeqNo : 1,
plygnSeqNo : 4035,
plygnLo : 126.771957336114,
plygnLa : 37.5584971111476
},
{
setSeqNo : 1,
plygnSeqNo : 4036,
plygnLo : 126.771821910817,
plygnLa : 37.5585999029689
},
{
setSeqNo : 1,
plygnSeqNo : 4037,
plygnLo : 126.771771412853,
plygnLa : 37.5586318991939
},
{
setSeqNo : 1,
plygnSeqNo : 4038,
plygnLo : 126.771817694949,
plygnLa : 37.5586491606811
},
{
setSeqNo : 1,
plygnSeqNo : 4039,
plygnLo : 126.771913027415,
plygnLa : 37.5586442825034
},
{
setSeqNo : 1,
plygnSeqNo : 4040,
plygnLo : 126.771952120218,
plygnLa : 37.5586401340648
},
{
setSeqNo : 1,
plygnSeqNo : 4041,
plygnLo : 126.772093110329,
plygnLa : 37.5586235141173
},
{
setSeqNo : 1,
plygnSeqNo : 4042,
plygnLo : 126.772132025785,
plygnLa : 37.5586224634279
},
{
setSeqNo : 1,
plygnSeqNo : 4043,
plygnLo : 126.772203267567,
plygnLa : 37.5586268267216
},
{
setSeqNo : 1,
plygnSeqNo : 4044,
plygnLo : 126.772279408814,
plygnLa : 37.5586540045039
},
{
setSeqNo : 1,
plygnSeqNo : 4045,
plygnLo : 126.772377626367,
plygnLa : 37.5586865770227
},
{
setSeqNo : 1,
plygnSeqNo : 4046,
plygnLo : 126.772446133431,
plygnLa : 37.5587227408409
},
{
setSeqNo : 1,
plygnSeqNo : 4047,
plygnLo : 126.772463537294,
plygnLa : 37.5587540291103
},
{
setSeqNo : 1,
plygnSeqNo : 4048,
plygnLo : 126.772544282722,
plygnLa : 37.5588929919759
},
{
setSeqNo : 1,
plygnSeqNo : 4049,
plygnLo : 126.772546369446,
plygnLa : 37.5589059533269
},
{
setSeqNo : 1,
plygnSeqNo : 4050,
plygnLo : 126.772570895149,
plygnLa : 37.5589800522933
},
{
setSeqNo : 1,
plygnSeqNo : 4051,
plygnLo : 126.772532081532,
plygnLa : 37.5590078539975
},
{
setSeqNo : 1,
plygnSeqNo : 4052,
plygnLo : 126.772635487973,
plygnLa : 37.5591978206716
},
{
setSeqNo : 1,
plygnSeqNo : 4053,
plygnLo : 126.772657461607,
plygnLa : 37.5592400918731
},
{
setSeqNo : 1,
plygnSeqNo : 4054,
plygnLo : 126.772665355186,
plygnLa : 37.559260099897
},
{
setSeqNo : 1,
plygnSeqNo : 4055,
plygnLo : 126.772742361112,
plygnLa : 37.55940863336
},
{
setSeqNo : 1,
plygnSeqNo : 4056,
plygnLo : 126.77289436286,
plygnLa : 37.5593782389346
},
{
setSeqNo : 1,
plygnSeqNo : 4057,
plygnLo : 126.772971529073,
plygnLa : 37.5593552977181
},
{
setSeqNo : 1,
plygnSeqNo : 4058,
plygnLo : 126.773192265743,
plygnLa : 37.5592864658267
},
{
setSeqNo : 1,
plygnSeqNo : 4059,
plygnLo : 126.773244232424,
plygnLa : 37.5594104513472
},
{
setSeqNo : 1,
plygnSeqNo : 4060,
plygnLo : 126.773283030925,
plygnLa : 37.5595028771485
},
{
setSeqNo : 1,
plygnSeqNo : 4061,
plygnLo : 126.773331126282,
plygnLa : 37.5595640674639
},
{
setSeqNo : 1,
plygnSeqNo : 4062,
plygnLo : 126.773359916006,
plygnLa : 37.5595722848622
},
{
setSeqNo : 1,
plygnSeqNo : 4063,
plygnLo : 126.773398834014,
plygnLa : 37.5596297987866
},
{
setSeqNo : 1,
plygnSeqNo : 4064,
plygnLo : 126.773419605675,
plygnLa : 37.5596582739019
},
{
setSeqNo : 1,
plygnSeqNo : 4065,
plygnLo : 126.773497272331,
plygnLa : 37.5597645777382
},
{
setSeqNo : 1,
plygnSeqNo : 4066,
plygnLo : 126.773502943199,
plygnLa : 37.5598169534358
},
{
setSeqNo : 1,
plygnSeqNo : 4067,
plygnLo : 126.77358153956,
plygnLa : 37.5599674634113
},
{
setSeqNo : 1,
plygnSeqNo : 4068,
plygnLo : 126.773601226875,
plygnLa : 37.56000663962
},
{
setSeqNo : 1,
plygnSeqNo : 4069,
plygnLo : 126.773598391679,
plygnLa : 37.5600080404199
},
{
setSeqNo : 1,
plygnSeqNo : 4070,
plygnLo : 126.773590986329,
plygnLa : 37.5600572912173
},
{
setSeqNo : 1,
plygnSeqNo : 4071,
plygnLo : 126.773623898665,
plygnLa : 37.5600500394077
},
{
setSeqNo : 1,
plygnSeqNo : 4072,
plygnLo : 126.773786234902,
plygnLa : 37.5599974193159
},
{
setSeqNo : 1,
plygnSeqNo : 4073,
plygnLo : 126.77383339028,
plygnLa : 37.5599586597912
},
{
setSeqNo : 1,
plygnSeqNo : 4074,
plygnLo : 126.773880175996,
plygnLa : 37.5599257998059
},
{
setSeqNo : 1,
plygnSeqNo : 4075,
plygnLo : 126.773976241927,
plygnLa : 37.5598550333401
},
{
setSeqNo : 1,
plygnSeqNo : 4076,
plygnLo : 126.774014698665,
plygnLa : 37.5598261132992
},
{
setSeqNo : 1,
plygnSeqNo : 4077,
plygnLo : 126.774124235591,
plygnLa : 37.5597429750732
},
{
setSeqNo : 1,
plygnSeqNo : 4078,
plygnLo : 126.774186991339,
plygnLa : 37.5596955141333
},
{
setSeqNo : 1,
plygnSeqNo : 4079,
plygnLo : 126.774289018578,
plygnLa : 37.5597559688988
},
{
setSeqNo : 1,
plygnSeqNo : 4080,
plygnLo : 126.774290930702,
plygnLa : 37.5597675142018
},
{
setSeqNo : 1,
plygnSeqNo : 4081,
plygnLo : 126.774271852793,
plygnLa : 37.5598181583012
},
{
setSeqNo : 1,
plygnSeqNo : 4082,
plygnLo : 126.774260633412,
plygnLa : 37.5598451658063
},
{
setSeqNo : 1,
plygnSeqNo : 4083,
plygnLo : 126.774250085522,
plygnLa : 37.5598823114475
},
{
setSeqNo : 1,
plygnSeqNo : 4084,
plygnLo : 126.774242523425,
plygnLa : 37.5599236872642
},
{
setSeqNo : 1,
plygnSeqNo : 4085,
plygnLo : 126.77424398068,
plygnLa : 37.5599695867094
},
{
setSeqNo : 1,
plygnSeqNo : 4086,
plygnLo : 126.774250249361,
plygnLa : 37.5600591303151
},
{
setSeqNo : 1,
plygnSeqNo : 4087,
plygnLo : 126.774244022994,
plygnLa : 37.560070947967
},
{
setSeqNo : 1,
plygnSeqNo : 4088,
plygnLo : 126.774210673879,
plygnLa : 37.5601072019529
},
{
setSeqNo : 1,
plygnSeqNo : 4089,
plygnLo : 126.77416524428,
plygnLa : 37.5601592007476
},
{
setSeqNo : 1,
plygnSeqNo : 4090,
plygnLo : 126.774251462841,
plygnLa : 37.5602410152076
},
{
setSeqNo : 1,
plygnSeqNo : 4091,
plygnLo : 126.774360798294,
plygnLa : 37.56034427946
},
{
setSeqNo : 1,
plygnSeqNo : 4092,
plygnLo : 126.774393579712,
plygnLa : 37.5603801037333
},
{
setSeqNo : 1,
plygnSeqNo : 4093,
plygnLo : 126.774408356302,
plygnLa : 37.5604080076479
},
{
setSeqNo : 1,
plygnSeqNo : 4094,
plygnLo : 126.774448404066,
plygnLa : 37.5604362313591
},
{
setSeqNo : 1,
plygnSeqNo : 4095,
plygnLo : 126.774550360334,
plygnLa : 37.5604088406975
},
{
setSeqNo : 1,
plygnSeqNo : 4096,
plygnLo : 126.774684281629,
plygnLa : 37.560447390033
},
{
setSeqNo : 1,
plygnSeqNo : 4097,
plygnLo : 126.774745637687,
plygnLa : 37.5604508856696
},
{
setSeqNo : 1,
plygnSeqNo : 4098,
plygnLo : 126.774808581427,
plygnLa : 37.5604569166895
},
{
setSeqNo : 1,
plygnSeqNo : 4099,
plygnLo : 126.774807131628,
plygnLa : 37.5604681761681
},
{
setSeqNo : 1,
plygnSeqNo : 4100,
plygnLo : 126.774782329822,
plygnLa : 37.5605407762208
},
{
setSeqNo : 1,
plygnSeqNo : 4101,
plygnLo : 126.774753004155,
plygnLa : 37.5605891475559
},
{
setSeqNo : 1,
plygnSeqNo : 4102,
plygnLo : 126.774693043415,
plygnLa : 37.5606487217435
},
{
setSeqNo : 1,
plygnSeqNo : 4103,
plygnLo : 126.774667633001,
plygnLa : 37.5606903444165
},
{
setSeqNo : 1,
plygnSeqNo : 4104,
plygnLo : 126.774663165632,
plygnLa : 37.560703849703
},
{
setSeqNo : 1,
plygnSeqNo : 4105,
plygnLo : 126.774686798271,
plygnLa : 37.5607264205342
},
{
setSeqNo : 1,
plygnSeqNo : 4106,
plygnLo : 126.774796085336,
plygnLa : 37.5607854748095
},
{
setSeqNo : 1,
plygnSeqNo : 4107,
plygnLo : 126.774885388671,
plygnLa : 37.5608444898676
},
{
setSeqNo : 1,
plygnSeqNo : 4108,
plygnLo : 126.77493314643,
plygnLa : 37.5609020179647
},
{
setSeqNo : 1,
plygnSeqNo : 4109,
plygnLo : 126.774941202172,
plygnLa : 37.5609850968783
},
{
setSeqNo : 1,
plygnSeqNo : 4110,
plygnLo : 126.7749472248,
plygnLa : 37.5610402940947
},
{
setSeqNo : 1,
plygnSeqNo : 4111,
plygnLo : 126.774878197459,
plygnLa : 37.561118717474
},
{
setSeqNo : 1,
plygnSeqNo : 4112,
plygnLo : 126.774842738718,
plygnLa : 37.5612076223957
},
{
setSeqNo : 1,
plygnSeqNo : 4113,
plygnLo : 126.774770951888,
plygnLa : 37.5612590029058
},
{
setSeqNo : 1,
plygnSeqNo : 4114,
plygnLo : 126.774679340188,
plygnLa : 37.561319365183
},
{
setSeqNo : 1,
plygnSeqNo : 4115,
plygnLo : 126.774727534734,
plygnLa : 37.5613484607479
},
{
setSeqNo : 1,
plygnSeqNo : 4116,
plygnLo : 126.774944012283,
plygnLa : 37.5613421182678
},
{
setSeqNo : 1,
plygnSeqNo : 4117,
plygnLo : 126.775040926597,
plygnLa : 37.5613437102622
},
{
setSeqNo : 1,
plygnSeqNo : 4118,
plygnLo : 126.775109081116,
plygnLa : 37.5613776280263
},
{
setSeqNo : 1,
plygnSeqNo : 4119,
plygnLo : 126.775151746389,
plygnLa : 37.5613610944119
},
{
setSeqNo : 1,
plygnSeqNo : 4120,
plygnLo : 126.775175290321,
plygnLa : 37.5613526981403
},
{
setSeqNo : 1,
plygnSeqNo : 4121,
plygnLo : 126.775247002587,
plygnLa : 37.5613821177716
},
{
setSeqNo : 1,
plygnSeqNo : 4122,
plygnLo : 126.775415265838,
plygnLa : 37.5614131273668
},
{
setSeqNo : 1,
plygnSeqNo : 4123,
plygnLo : 126.775459414762,
plygnLa : 37.5614332047732
},
{
setSeqNo : 1,
plygnSeqNo : 4124,
plygnLo : 126.77547455426,
plygnLa : 37.5614571646723
},
{
setSeqNo : 1,
plygnSeqNo : 4125,
plygnLo : 126.775490336871,
plygnLa : 37.56150027921
},
{
setSeqNo : 1,
plygnSeqNo : 4126,
plygnLo : 126.775495497274,
plygnLa : 37.5615487182168
},
{
setSeqNo : 1,
plygnSeqNo : 4127,
plygnLo : 126.775523209909,
plygnLa : 37.5616853235624
},
{
setSeqNo : 1,
plygnSeqNo : 4128,
plygnLo : 126.775534798198,
plygnLa : 37.561828377641
},
{
setSeqNo : 1,
plygnSeqNo : 4129,
plygnLo : 126.775635570175,
plygnLa : 37.5618975503011
},
{
setSeqNo : 1,
plygnSeqNo : 4130,
plygnLo : 126.775729560703,
plygnLa : 37.5619301117067
},
{
setSeqNo : 1,
plygnSeqNo : 4131,
plygnLo : 126.77575852338,
plygnLa : 37.5619414295844
},
{
setSeqNo : 1,
plygnSeqNo : 4132,
plygnLo : 126.775796704795,
plygnLa : 37.5618871637413
},
{
setSeqNo : 1,
plygnSeqNo : 4133,
plygnLo : 126.775886367968,
plygnLa : 37.5617704857987
},
{
setSeqNo : 1,
plygnSeqNo : 4134,
plygnLo : 126.776108909676,
plygnLa : 37.5618635418254
},
{
setSeqNo : 1,
plygnSeqNo : 4135,
plygnLo : 126.776155418435,
plygnLa : 37.5618064728317
},
{
setSeqNo : 1,
plygnSeqNo : 4136,
plygnLo : 126.776221989917,
plygnLa : 37.5617243835204
},
{
setSeqNo : 1,
plygnSeqNo : 4137,
plygnLo : 126.776315174989,
plygnLa : 37.561610812535
},
{
setSeqNo : 1,
plygnSeqNo : 4138,
plygnLo : 126.776339128689,
plygnLa : 37.5615829817792
},
{
setSeqNo : 1,
plygnSeqNo : 4139,
plygnLo : 126.776423072202,
plygnLa : 37.5614860060459
},
{
setSeqNo : 1,
plygnSeqNo : 4140,
plygnLo : 126.776527057213,
plygnLa : 37.5613676698055
},
{
setSeqNo : 1,
plygnSeqNo : 4141,
plygnLo : 126.776668646711,
plygnLa : 37.5612136462075
},
{
setSeqNo : 1,
plygnSeqNo : 4142,
plygnLo : 126.776788026219,
plygnLa : 37.5610899874323
},
{
setSeqNo : 1,
plygnSeqNo : 4143,
plygnLo : 126.776865369924,
plygnLa : 37.5610124231126
},
{
setSeqNo : 1,
plygnSeqNo : 4144,
plygnLo : 126.77691569472,
plygnLa : 37.5609764797511
},
{
setSeqNo : 1,
plygnSeqNo : 4145,
plygnLo : 126.776957231476,
plygnLa : 37.5609281320499
},
{
setSeqNo : 1,
plygnSeqNo : 4146,
plygnLo : 126.777004776978,
plygnLa : 37.5608755685987
},
{
setSeqNo : 1,
plygnSeqNo : 4147,
plygnLo : 126.777089344798,
plygnLa : 37.5608044970326
},
{
setSeqNo : 1,
plygnSeqNo : 4148,
plygnLo : 126.777181606787,
plygnLa : 37.5607033114408
},
{
setSeqNo : 1,
plygnSeqNo : 4149,
plygnLo : 126.777229084487,
plygnLa : 37.5606169599293
},
{
setSeqNo : 1,
plygnSeqNo : 4150,
plygnLo : 126.777237637724,
plygnLa : 37.5605955785392
},
{
setSeqNo : 1,
plygnSeqNo : 4151,
plygnLo : 126.777307885296,
plygnLa : 37.5604039729009
},
{
setSeqNo : 1,
plygnSeqNo : 4152,
plygnLo : 126.777348112529,
plygnLa : 37.5603159238015
},
{
setSeqNo : 1,
plygnSeqNo : 4153,
plygnLo : 126.777393322121,
plygnLa : 37.5602794026363
},
{
setSeqNo : 1,
plygnSeqNo : 4154,
plygnLo : 126.777414045667,
plygnLa : 37.5602684574871
},
{
setSeqNo : 1,
plygnSeqNo : 4155,
plygnLo : 126.777466290852,
plygnLa : 37.5602418162927
},
{
setSeqNo : 1,
plygnSeqNo : 4156,
plygnLo : 126.777515677268,
plygnLa : 37.5602283948948
},
{
setSeqNo : 1,
plygnSeqNo : 4157,
plygnLo : 126.777548975765,
plygnLa : 37.5602090320617
},
{
setSeqNo : 1,
plygnSeqNo : 4158,
plygnLo : 126.777605487437,
plygnLa : 37.5601778854625
},
{
setSeqNo : 1,
plygnSeqNo : 4159,
plygnLo : 126.777682603143,
plygnLa : 37.5601115820781
},
{
setSeqNo : 1,
plygnSeqNo : 4160,
plygnLo : 126.777708885022,
plygnLa : 37.5600772775517
},
{
setSeqNo : 1,
plygnSeqNo : 4161,
plygnLo : 126.777787220374,
plygnLa : 37.5599619927102
},
{
setSeqNo : 1,
plygnSeqNo : 4162,
plygnLo : 126.777842120639,
plygnLa : 37.5599330927859
},
{
setSeqNo : 1,
plygnSeqNo : 4163,
plygnLo : 126.777911953452,
plygnLa : 37.5600610573958
},
{
setSeqNo : 1,
plygnSeqNo : 4164,
plygnLo : 126.777936074927,
plygnLa : 37.5601548596714
},
{
setSeqNo : 1,
plygnSeqNo : 4165,
plygnLo : 126.777933746174,
plygnLa : 37.5602215837865
},
{
setSeqNo : 1,
plygnSeqNo : 4166,
plygnLo : 126.777930021192,
plygnLa : 37.5602866181531
},
{
setSeqNo : 1,
plygnSeqNo : 4167,
plygnLo : 126.77788628921,
plygnLa : 37.5604799597392
},
{
setSeqNo : 1,
plygnSeqNo : 4168,
plygnLo : 126.777860235587,
plygnLa : 37.5606201301013
},
{
setSeqNo : 1,
plygnSeqNo : 4169,
plygnLo : 126.777833057417,
plygnLa : 37.560776345922
},
{
setSeqNo : 1,
plygnSeqNo : 4170,
plygnLo : 126.777812106968,
plygnLa : 37.5608069949889
},
{
setSeqNo : 1,
plygnSeqNo : 4171,
plygnLo : 126.777774087079,
plygnLa : 37.5608646392101
},
{
setSeqNo : 1,
plygnSeqNo : 4172,
plygnLo : 126.777726347233,
plygnLa : 37.5609211407407
},
{
setSeqNo : 1,
plygnSeqNo : 4173,
plygnLo : 126.777702217786,
plygnLa : 37.5609475662179
},
{
setSeqNo : 1,
plygnSeqNo : 4174,
plygnLo : 126.777643646651,
plygnLa : 37.5611938211638
},
{
setSeqNo : 1,
plygnSeqNo : 4175,
plygnLo : 126.7776146489,
plygnLa : 37.5613111731557
},
{
setSeqNo : 1,
plygnSeqNo : 4176,
plygnLo : 126.777573926902,
plygnLa : 37.5615036824981
},
{
setSeqNo : 1,
plygnSeqNo : 4177,
plygnLo : 126.777539960204,
plygnLa : 37.5616857883245
},
{
setSeqNo : 1,
plygnSeqNo : 4178,
plygnLo : 126.777524545491,
plygnLa : 37.5619312779632
},
{
setSeqNo : 1,
plygnSeqNo : 4179,
plygnLo : 126.777521972849,
plygnLa : 37.5619622396829
},
{
setSeqNo : 1,
plygnSeqNo : 4180,
plygnLo : 126.777520625773,
plygnLa : 37.5619999700421
},
{
setSeqNo : 1,
plygnSeqNo : 4181,
plygnLo : 126.777514167158,
plygnLa : 37.5622066183919
},
{
setSeqNo : 1,
plygnSeqNo : 4182,
plygnLo : 126.777509527002,
plygnLa : 37.5622823549175
},
{
setSeqNo : 1,
plygnSeqNo : 4183,
plygnLo : 126.777489537922,
plygnLa : 37.5622825967759
},
{
setSeqNo : 1,
plygnSeqNo : 4184,
plygnLo : 126.777436307222,
plygnLa : 37.5622833344042
},
{
setSeqNo : 1,
plygnSeqNo : 4185,
plygnLo : 126.777243537116,
plygnLa : 37.5622863458888
},
{
setSeqNo : 1,
plygnSeqNo : 4186,
plygnLo : 126.777011503202,
plygnLa : 37.5622890043874
},
{
setSeqNo : 1,
plygnSeqNo : 4187,
plygnLo : 126.776982143845,
plygnLa : 37.562289237188
},
{
setSeqNo : 1,
plygnSeqNo : 4188,
plygnLo : 126.776948718864,
plygnLa : 37.5622297627613
},
{
setSeqNo : 1,
plygnSeqNo : 4189,
plygnLo : 126.776914111528,
plygnLa : 37.5622696725813
},
{
setSeqNo : 1,
plygnSeqNo : 4190,
plygnLo : 126.776810159331,
plygnLa : 37.5623170575423
},
{
setSeqNo : 1,
plygnSeqNo : 4191,
plygnLo : 126.776722500637,
plygnLa : 37.5623577222294
},
{
setSeqNo : 1,
plygnSeqNo : 4192,
plygnLo : 126.776632255745,
plygnLa : 37.5623741651368
},
{
setSeqNo : 1,
plygnSeqNo : 4193,
plygnLo : 126.776618157022,
plygnLa : 37.5624788687023
},
{
setSeqNo : 1,
plygnSeqNo : 4194,
plygnLo : 126.776608543731,
plygnLa : 37.562615412859
},
{
setSeqNo : 1,
plygnSeqNo : 4195,
plygnLo : 126.776691412894,
plygnLa : 37.5626392220502
},
{
setSeqNo : 1,
plygnSeqNo : 4196,
plygnLo : 126.776695457187,
plygnLa : 37.5626493648806
},
{
setSeqNo : 1,
plygnSeqNo : 4197,
plygnLo : 126.776730104674,
plygnLa : 37.5627688135981
},
{
setSeqNo : 1,
plygnSeqNo : 4198,
plygnLo : 126.776722716404,
plygnLa : 37.5629340668932
},
{
setSeqNo : 1,
plygnSeqNo : 4199,
plygnLo : 126.776719631722,
plygnLa : 37.5630793541551
},
{
setSeqNo : 1,
plygnSeqNo : 4200,
plygnLo : 126.776730738163,
plygnLa : 37.5631494816733
},
{
setSeqNo : 1,
plygnSeqNo : 4201,
plygnLo : 126.776732976866,
plygnLa : 37.5631694690779
},
{
setSeqNo : 1,
plygnSeqNo : 4202,
plygnLo : 126.776741672851,
plygnLa : 37.5632170753239
},
{
setSeqNo : 1,
plygnSeqNo : 4203,
plygnLo : 126.776741470189,
plygnLa : 37.5632246703227
},
{
setSeqNo : 1,
plygnSeqNo : 4204,
plygnLo : 126.776743019062,
plygnLa : 37.5632398816447
},
{
setSeqNo : 1,
plygnSeqNo : 4205,
plygnLo : 126.776842029046,
plygnLa : 37.5634824906961
},
{
setSeqNo : 1,
plygnSeqNo : 4206,
plygnLo : 126.776847140942,
plygnLa : 37.563491510086
},
{
setSeqNo : 1,
plygnSeqNo : 4207,
plygnLo : 126.776905105513,
plygnLa : 37.5635620142726
},
{
setSeqNo : 1,
plygnSeqNo : 4208,
plygnLo : 126.776944873243,
plygnLa : 37.5636316373467
},
{
setSeqNo : 1,
plygnSeqNo : 4209,
plygnLo : 126.776969966617,
plygnLa : 37.5636958711026
},
{
setSeqNo : 1,
plygnSeqNo : 4210,
plygnLo : 126.777009907408,
plygnLa : 37.5637035513103
},
{
setSeqNo : 1,
plygnSeqNo : 4211,
plygnLo : 126.777043865635,
plygnLa : 37.5637027695779
},
{
setSeqNo : 1,
plygnSeqNo : 4212,
plygnLo : 126.777101640489,
plygnLa : 37.5637194936792
},
{
setSeqNo : 1,
plygnSeqNo : 4213,
plygnLo : 126.777034918414,
plygnLa : 37.5637987708025
},
{
setSeqNo : 1,
plygnSeqNo : 4214,
plygnLo : 126.777008471683,
plygnLa : 37.5638277235451
},
{
setSeqNo : 1,
plygnSeqNo : 4215,
plygnLo : 126.776837389564,
plygnLa : 37.5640287055257
},
{
setSeqNo : 1,
plygnSeqNo : 4216,
plygnLo : 126.776736960974,
plygnLa : 37.5641374782404
},
{
setSeqNo : 1,
plygnSeqNo : 4217,
plygnLo : 126.77668835477,
plygnLa : 37.5641877888528
},
{
setSeqNo : 1,
plygnSeqNo : 4218,
plygnLo : 126.77664577143,
plygnLa : 37.5642338821678
},
{
setSeqNo : 1,
plygnSeqNo : 4219,
plygnLo : 126.776636005245,
plygnLa : 37.5642445592777
},
{
setSeqNo : 1,
plygnSeqNo : 4220,
plygnLo : 126.776607095442,
plygnLa : 37.5642754800651
},
{
setSeqNo : 1,
plygnSeqNo : 4221,
plygnLo : 126.776480415854,
plygnLa : 37.5644117914532
},
{
setSeqNo : 1,
plygnSeqNo : 4222,
plygnLo : 126.776393118818,
plygnLa : 37.5645051019792
},
{
setSeqNo : 1,
plygnSeqNo : 4223,
plygnLo : 126.776385673318,
plygnLa : 37.5645118455364
},
{
setSeqNo : 1,
plygnSeqNo : 4224,
plygnLo : 126.776340268834,
plygnLa : 37.5645548351981
},
{
setSeqNo : 1,
plygnSeqNo : 4225,
plygnLo : 126.776301937686,
plygnLa : 37.5645986862505
},
{
setSeqNo : 1,
plygnSeqNo : 4226,
plygnLo : 126.776170461108,
plygnLa : 37.5647375298577
},
{
setSeqNo : 1,
plygnSeqNo : 4227,
plygnLo : 126.77610694994,
plygnLa : 37.5648061073279
},
{
setSeqNo : 1,
plygnSeqNo : 4228,
plygnLo : 126.776085559453,
plygnLa : 37.5648612535401
},
{
setSeqNo : 1,
plygnSeqNo : 4229,
plygnLo : 126.776034420978,
plygnLa : 37.5649856001124
},
{
setSeqNo : 1,
plygnSeqNo : 4230,
plygnLo : 126.775999512658,
plygnLa : 37.5651254741274
},
{
setSeqNo : 1,
plygnSeqNo : 4231,
plygnLo : 126.775942856959,
plygnLa : 37.565205886198
},
{
setSeqNo : 1,
plygnSeqNo : 4232,
plygnLo : 126.775901211925,
plygnLa : 37.5652331165227
},
{
setSeqNo : 1,
plygnSeqNo : 4233,
plygnLo : 126.775751419303,
plygnLa : 37.5653502369699
},
{
setSeqNo : 1,
plygnSeqNo : 4234,
plygnLo : 126.775570149655,
plygnLa : 37.5653504582974
},
{
setSeqNo : 1,
plygnSeqNo : 4235,
plygnLo : 126.775517446964,
plygnLa : 37.5653472582377
},
{
setSeqNo : 1,
plygnSeqNo : 4236,
plygnLo : 126.775342900529,
plygnLa : 37.5653435457638
},
{
setSeqNo : 1,
plygnSeqNo : 4237,
plygnLo : 126.775429633093,
plygnLa : 37.5654380353433
},
{
setSeqNo : 1,
plygnSeqNo : 4238,
plygnLo : 126.775531948828,
plygnLa : 37.5655226988392
},
{
setSeqNo : 1,
plygnSeqNo : 4239,
plygnLo : 126.775573761884,
plygnLa : 37.5655560074182
},
{
setSeqNo : 1,
plygnSeqNo : 4240,
plygnLo : 126.775575428209,
plygnLa : 37.5655920403544
},
{
setSeqNo : 1,
plygnSeqNo : 4241,
plygnLo : 126.775437988684,
plygnLa : 37.5657745166274
},
{
setSeqNo : 1,
plygnSeqNo : 4242,
plygnLo : 126.775222887331,
plygnLa : 37.5658489930229
},
{
setSeqNo : 1,
plygnSeqNo : 4243,
plygnLo : 126.775132062581,
plygnLa : 37.5658795173497
},
{
setSeqNo : 1,
plygnSeqNo : 4244,
plygnLo : 126.775102546411,
plygnLa : 37.5661663619437
},
{
setSeqNo : 1,
plygnSeqNo : 4245,
plygnLo : 126.775093575163,
plygnLa : 37.5662097079464
},
{
setSeqNo : 1,
plygnSeqNo : 4246,
plygnLo : 126.77509321109,
plygnLa : 37.5662108340335
},
{
setSeqNo : 1,
plygnSeqNo : 4247,
plygnLo : 126.775088186639,
plygnLa : 37.5662364393769
},
{
setSeqNo : 1,
plygnSeqNo : 4248,
plygnLo : 126.775064347509,
plygnLa : 37.5663982917407
},
{
setSeqNo : 1,
plygnSeqNo : 4249,
plygnLo : 126.775046466091,
plygnLa : 37.5665204577821
},
{
setSeqNo : 1,
plygnSeqNo : 4250,
plygnLo : 126.775024463242,
plygnLa : 37.566662041856
},
{
setSeqNo : 1,
plygnSeqNo : 4251,
plygnLo : 126.775020667754,
plygnLa : 37.566689622567
},
{
setSeqNo : 1,
plygnSeqNo : 4252,
plygnLo : 126.775013994359,
plygnLa : 37.5667332549864
},
{
setSeqNo : 1,
plygnSeqNo : 4253,
plygnLo : 126.775000069562,
plygnLa : 37.5668345881228
},
{
setSeqNo : 1,
plygnSeqNo : 4254,
plygnLo : 126.77498921922,
plygnLa : 37.5669117100841
},
{
setSeqNo : 1,
plygnSeqNo : 4255,
plygnLo : 126.774940889448,
plygnLa : 37.5669856691005
},
{
setSeqNo : 1,
plygnSeqNo : 4256,
plygnLo : 126.774880634698,
plygnLa : 37.5670841039793
},
{
setSeqNo : 1,
plygnSeqNo : 4257,
plygnLo : 126.774839763717,
plygnLa : 37.5671507518383
},
{
setSeqNo : 1,
plygnSeqNo : 4258,
plygnLo : 126.774752441118,
plygnLa : 37.5673096637212
},
{
setSeqNo : 1,
plygnSeqNo : 4259,
plygnLo : 126.774761673339,
plygnLa : 37.5675321165891
},
{
setSeqNo : 1,
plygnSeqNo : 4260,
plygnLo : 126.774763007699,
plygnLa : 37.5676143250831
},
{
setSeqNo : 1,
plygnSeqNo : 4261,
plygnLo : 126.774765109474,
plygnLa : 37.5676827497615
},
{
setSeqNo : 1,
plygnSeqNo : 4262,
plygnLo : 126.774758901143,
plygnLa : 37.5676886563569
},
{
setSeqNo : 1,
plygnSeqNo : 4263,
plygnLo : 126.77477443259,
plygnLa : 37.5676993825375
},
{
setSeqNo : 1,
plygnSeqNo : 4264,
plygnLo : 126.774762190559,
plygnLa : 37.5677083674686
},
{
setSeqNo : 1,
plygnSeqNo : 4265,
plygnLo : 126.774891718007,
plygnLa : 37.5678046254735
},
{
setSeqNo : 1,
plygnSeqNo : 4266,
plygnLo : 126.774942016833,
plygnLa : 37.5678427345854
},
{
setSeqNo : 1,
plygnSeqNo : 4267,
plygnLo : 126.775155819002,
plygnLa : 37.5680241890613
},
{
setSeqNo : 1,
plygnSeqNo : 4268,
plygnLo : 126.775235733624,
plygnLa : 37.5680910702868
},
{
setSeqNo : 1,
plygnSeqNo : 4269,
plygnLo : 126.775382161556,
plygnLa : 37.5682129829768
},
{
setSeqNo : 1,
plygnSeqNo : 4270,
plygnLo : 126.775402712442,
plygnLa : 37.5681997871029
},
{
setSeqNo : 1,
plygnSeqNo : 4271,
plygnLo : 126.775464012598,
plygnLa : 37.5682235549892
},
{
setSeqNo : 1,
plygnSeqNo : 4272,
plygnLo : 126.775530579616,
plygnLa : 37.56826112774
},
{
setSeqNo : 1,
plygnSeqNo : 4273,
plygnLo : 126.775532331756,
plygnLa : 37.5680339198945
},
{
setSeqNo : 1,
plygnSeqNo : 4274,
plygnLo : 126.775534061577,
plygnLa : 37.5679294635901
},
{
setSeqNo : 1,
plygnSeqNo : 4275,
plygnLo : 126.775542380454,
plygnLa : 37.5678658428187
},
{
setSeqNo : 1,
plygnSeqNo : 4276,
plygnLo : 126.775559569713,
plygnLa : 37.5677400256494
},
{
setSeqNo : 1,
plygnSeqNo : 4277,
plygnLo : 126.775542363856,
plygnLa : 37.567694943403
},
{
setSeqNo : 1,
plygnSeqNo : 4278,
plygnLo : 126.775511318835,
plygnLa : 37.5676115430916
},
{
setSeqNo : 1,
plygnSeqNo : 4279,
plygnLo : 126.775505371881,
plygnLa : 37.5675909706862
},
{
setSeqNo : 1,
plygnSeqNo : 4280,
plygnLo : 126.775488322032,
plygnLa : 37.5675546194467
},
{
setSeqNo : 1,
plygnSeqNo : 4281,
plygnLo : 126.775401663694,
plygnLa : 37.5673185124366
},
{
setSeqNo : 1,
plygnSeqNo : 4282,
plygnLo : 126.775491652407,
plygnLa : 37.5672725086484
},
{
setSeqNo : 1,
plygnSeqNo : 4283,
plygnLo : 126.775617400551,
plygnLa : 37.5672108066731
},
{
setSeqNo : 1,
plygnSeqNo : 4284,
plygnLo : 126.775816385035,
plygnLa : 37.5672047090673
},
{
setSeqNo : 1,
plygnSeqNo : 4285,
plygnLo : 126.775902176875,
plygnLa : 37.5672031800184
},
{
setSeqNo : 1,
plygnSeqNo : 4286,
plygnLo : 126.776244842922,
plygnLa : 37.5671143019819
},
{
setSeqNo : 1,
plygnSeqNo : 4287,
plygnLo : 126.77633351562,
plygnLa : 37.567091947945
},
{
setSeqNo : 1,
plygnSeqNo : 4288,
plygnLo : 126.776340985661,
plygnLa : 37.566960751825
},
{
setSeqNo : 1,
plygnSeqNo : 4289,
plygnLo : 126.776342093561,
plygnLa : 37.5669421751259
},
{
setSeqNo : 1,
plygnSeqNo : 4290,
plygnLo : 126.7763821015,
plygnLa : 37.5668721447321
},
{
setSeqNo : 1,
plygnSeqNo : 4291,
plygnLo : 126.776387415785,
plygnLa : 37.566926773049
},
{
setSeqNo : 1,
plygnSeqNo : 4292,
plygnLo : 126.776394786703,
plygnLa : 37.5670050652862
},
{
setSeqNo : 1,
plygnSeqNo : 4293,
plygnLo : 126.776407891999,
plygnLa : 37.5669411739561
},
{
setSeqNo : 1,
plygnSeqNo : 4294,
plygnLo : 126.776495508346,
plygnLa : 37.5667997144897
},
{
setSeqNo : 1,
plygnSeqNo : 4295,
plygnLo : 126.776599786947,
plygnLa : 37.5662325805312
},
{
setSeqNo : 1,
plygnSeqNo : 4296,
plygnLo : 126.776582107118,
plygnLa : 37.5662325464615
},
{
setSeqNo : 1,
plygnSeqNo : 4297,
plygnLo : 126.776549372887,
plygnLa : 37.5662364218027
},
{
setSeqNo : 1,
plygnSeqNo : 4298,
plygnLo : 126.776571165703,
plygnLa : 37.5661066667451
},
{
setSeqNo : 1,
plygnSeqNo : 4299,
plygnLo : 126.776638689155,
plygnLa : 37.5660594934471
},
{
setSeqNo : 1,
plygnSeqNo : 4300,
plygnLo : 126.77672255256,
plygnLa : 37.5660512029479
},
{
setSeqNo : 1,
plygnSeqNo : 4301,
plygnLo : 126.776749386422,
plygnLa : 37.5660633624464
},
{
setSeqNo : 1,
plygnSeqNo : 4302,
plygnLo : 126.776878058076,
plygnLa : 37.5661506073763
},
{
setSeqNo : 1,
plygnSeqNo : 4303,
plygnLo : 126.776915298616,
plygnLa : 37.5661763016882
},
{
setSeqNo : 1,
plygnSeqNo : 4304,
plygnLo : 126.776964007694,
plygnLa : 37.5662087762015
},
{
setSeqNo : 1,
plygnSeqNo : 4305,
plygnLo : 126.776946678957,
plygnLa : 37.5662087421362
},
{
setSeqNo : 1,
plygnSeqNo : 4306,
plygnLo : 126.776992347854,
plygnLa : 37.5663715652376
},
{
setSeqNo : 1,
plygnSeqNo : 4307,
plygnLo : 126.77703236014,
plygnLa : 37.5664172595186
},
{
setSeqNo : 1,
plygnSeqNo : 4308,
plygnLo : 126.77713118583,
plygnLa : 37.566548937176
},
{
setSeqNo : 1,
plygnSeqNo : 4309,
plygnLo : 126.777196729829,
plygnLa : 37.5666293030774
},
{
setSeqNo : 1,
plygnSeqNo : 4310,
plygnLo : 126.777284467041,
plygnLa : 37.5666846560295
},
{
setSeqNo : 1,
plygnSeqNo : 4311,
plygnLo : 126.777310932328,
plygnLa : 37.5667063838076
},
{
setSeqNo : 1,
plygnSeqNo : 4312,
plygnLo : 126.777585005915,
plygnLa : 37.5668434567101
},
{
setSeqNo : 1,
plygnSeqNo : 4313,
plygnLo : 126.777808457424,
plygnLa : 37.5669939484272
},
{
setSeqNo : 1,
plygnSeqNo : 4314,
plygnLo : 126.778183518623,
plygnLa : 37.5670712424406
},
{
setSeqNo : 1,
plygnSeqNo : 4315,
plygnLo : 126.77846155073,
plygnLa : 37.5671263952085
},
{
setSeqNo : 1,
plygnSeqNo : 4316,
plygnLo : 126.778668343444,
plygnLa : 37.5671740868585
},
{
setSeqNo : 1,
plygnSeqNo : 4317,
plygnLo : 126.778763728875,
plygnLa : 37.5671508956476
},
{
setSeqNo : 1,
plygnSeqNo : 4318,
plygnLo : 126.778940080786,
plygnLa : 37.5671467235507
},
{
setSeqNo : 1,
plygnSeqNo : 4319,
plygnLo : 126.779003362589,
plygnLa : 37.5671547266442
},
{
setSeqNo : 1,
plygnSeqNo : 4320,
plygnLo : 126.779040257167,
plygnLa : 37.5672406780913
},
{
setSeqNo : 1,
plygnSeqNo : 4321,
plygnLo : 126.779079957917,
plygnLa : 37.567330561959
},
{
setSeqNo : 1,
plygnSeqNo : 4322,
plygnLo : 126.779057885565,
plygnLa : 37.5674366677473
},
{
setSeqNo : 1,
plygnSeqNo : 4323,
plygnLo : 126.779021334389,
plygnLa : 37.5675937121371
},
{
setSeqNo : 1,
plygnSeqNo : 4324,
plygnLo : 126.779009205767,
plygnLa : 37.5678656705527
},
{
setSeqNo : 1,
plygnSeqNo : 4325,
plygnLo : 126.779013337841,
plygnLa : 37.5679076368229
},
{
setSeqNo : 1,
plygnSeqNo : 4326,
plygnLo : 126.77901785291,
plygnLa : 37.5679918242826
},
{
setSeqNo : 1,
plygnSeqNo : 4327,
plygnLo : 126.779060374569,
plygnLa : 37.5682058975241
},
{
setSeqNo : 1,
plygnSeqNo : 4328,
plygnLo : 126.779170589387,
plygnLa : 37.5683167555666
},
{
setSeqNo : 1,
plygnSeqNo : 4329,
plygnLo : 126.779210727029,
plygnLa : 37.5683165517323
},
{
setSeqNo : 1,
plygnSeqNo : 4330,
plygnLo : 126.779428569724,
plygnLa : 37.5681581538185
},
{
setSeqNo : 1,
plygnSeqNo : 4331,
plygnLo : 126.779706108199,
plygnLa : 37.5679624312335
},
{
setSeqNo : 1,
plygnSeqNo : 4332,
plygnLo : 126.779787138875,
plygnLa : 37.5678947300304
},
{
setSeqNo : 1,
plygnSeqNo : 4333,
plygnLo : 126.780004101551,
plygnLa : 37.5676696121381
},
{
setSeqNo : 1,
plygnSeqNo : 4334,
plygnLo : 126.780119551615,
plygnLa : 37.5675636734724
},
{
setSeqNo : 1,
plygnSeqNo : 4335,
plygnLo : 126.780239817898,
plygnLa : 37.5674450862395
},
{
setSeqNo : 1,
plygnSeqNo : 4336,
plygnLo : 126.780318345124,
plygnLa : 37.5675040776836
},
{
setSeqNo : 1,
plygnSeqNo : 4337,
plygnLo : 126.780430673469,
plygnLa : 37.5676149474505
},
{
setSeqNo : 1,
plygnSeqNo : 4338,
plygnLo : 126.780517052695,
plygnLa : 37.5678288044978
},
{
setSeqNo : 1,
plygnSeqNo : 4339,
plygnLo : 126.780542515013,
plygnLa : 37.567891642379
},
{
setSeqNo : 1,
plygnSeqNo : 4340,
plygnLo : 126.780462043159,
plygnLa : 37.5679545608028
},
{
setSeqNo : 1,
plygnSeqNo : 4341,
plygnLo : 126.78046858979,
plygnLa : 37.5681299847429
},
{
setSeqNo : 1,
plygnSeqNo : 4342,
plygnLo : 126.780474316629,
plygnLa : 37.5682871013083
},
{
setSeqNo : 1,
plygnSeqNo : 4343,
plygnLo : 126.780653368181,
plygnLa : 37.5684456762913
},
{
setSeqNo : 1,
plygnSeqNo : 4344,
plygnLo : 126.780933612181,
plygnLa : 37.5687136765574
},
{
setSeqNo : 1,
plygnSeqNo : 4345,
plygnLo : 126.781116743041,
plygnLa : 37.5688072169644
},
{
setSeqNo : 1,
plygnSeqNo : 4346,
plygnLo : 126.781239667624,
plygnLa : 37.5688654416927
},
{
setSeqNo : 1,
plygnSeqNo : 4347,
plygnLo : 126.781360642939,
plygnLa : 37.5689250787212
},
{
setSeqNo : 1,
plygnSeqNo : 4348,
plygnLo : 126.78148672869,
plygnLa : 37.5688709764937
},
{
setSeqNo : 1,
plygnSeqNo : 4349,
plygnLo : 126.781625830519,
plygnLa : 37.5689016429994
},
{
setSeqNo : 1,
plygnSeqNo : 4350,
plygnLo : 126.781815282408,
plygnLa : 37.569132313911
},
{
setSeqNo : 1,
plygnSeqNo : 4351,
plygnLo : 126.781898276801,
plygnLa : 37.5692360743355
},
{
setSeqNo : 1,
plygnSeqNo : 4352,
plygnLo : 126.781829847577,
plygnLa : 37.5693530756764
},
{
setSeqNo : 1,
plygnSeqNo : 4353,
plygnLo : 126.781803743502,
plygnLa : 37.5693885066147
},
{
setSeqNo : 1,
plygnSeqNo : 4354,
plygnLo : 126.781428855678,
plygnLa : 37.5694855116175
},
{
setSeqNo : 1,
plygnSeqNo : 4355,
plygnLo : 126.78117920915,
plygnLa : 37.5695765499686
},
{
setSeqNo : 1,
plygnSeqNo : 4356,
plygnLo : 126.781124126002,
plygnLa : 37.5696015041573
},
{
setSeqNo : 1,
plygnSeqNo : 4357,
plygnLo : 126.781077780319,
plygnLa : 37.5696642077327
},
{
setSeqNo : 1,
plygnSeqNo : 4358,
plygnLo : 126.780996089706,
plygnLa : 37.5698974627483
},
{
setSeqNo : 1,
plygnSeqNo : 4359,
plygnLo : 126.780911581082,
plygnLa : 37.569946580988
},
{
setSeqNo : 1,
plygnSeqNo : 4360,
plygnLo : 126.780755457595,
plygnLa : 37.5700487753778
},
{
setSeqNo : 1,
plygnSeqNo : 4361,
plygnLo : 126.780615743209,
plygnLa : 37.5701670487101
},
{
setSeqNo : 1,
plygnSeqNo : 4362,
plygnLo : 126.780484718784,
plygnLa : 37.5702749228663
},
{
setSeqNo : 1,
plygnSeqNo : 4363,
plygnLo : 126.780458112429,
plygnLa : 37.5703613125333
},
{
setSeqNo : 1,
plygnSeqNo : 4364,
plygnLo : 126.780484491288,
plygnLa : 37.5704134476566
},
{
setSeqNo : 1,
plygnSeqNo : 4365,
plygnLo : 126.780507031843,
plygnLa : 37.5704427723319
},
{
setSeqNo : 1,
plygnSeqNo : 4366,
plygnLo : 126.780520949437,
plygnLa : 37.5704639178878
},
{
setSeqNo : 1,
plygnSeqNo : 4367,
plygnLo : 126.78056261107,
plygnLa : 37.5704927187334
},
{
setSeqNo : 1,
plygnSeqNo : 4368,
plygnLo : 126.780937796469,
plygnLa : 37.5703540463306
},
{
setSeqNo : 1,
plygnSeqNo : 4369,
plygnLo : 126.781084997314,
plygnLa : 37.5702766111076
},
{
setSeqNo : 1,
plygnSeqNo : 4370,
plygnLo : 126.78118754131,
plygnLa : 37.5702297805426
},
{
setSeqNo : 1,
plygnSeqNo : 4371,
plygnLo : 126.781315747676,
plygnLa : 37.5701751143426
},
{
setSeqNo : 1,
plygnSeqNo : 4372,
plygnLo : 126.781487298526,
plygnLa : 37.5701816329817
},
{
setSeqNo : 1,
plygnSeqNo : 4373,
plygnLo : 126.781671145467,
plygnLa : 37.5702135091964
},
{
setSeqNo : 1,
plygnSeqNo : 4374,
plygnLo : 126.781821386392,
plygnLa : 37.5702450436991
},
{
setSeqNo : 1,
plygnSeqNo : 4375,
plygnLo : 126.781952766374,
plygnLa : 37.5702582362897
},
{
setSeqNo : 1,
plygnSeqNo : 4376,
plygnLo : 126.782393737664,
plygnLa : 37.5703012941455
},
{
setSeqNo : 1,
plygnSeqNo : 4377,
plygnLo : 126.782584597948,
plygnLa : 37.5704745192358
},
{
setSeqNo : 1,
plygnSeqNo : 4378,
plygnLo : 126.782592553337,
plygnLa : 37.5704790401618
},
{
setSeqNo : 1,
plygnSeqNo : 4379,
plygnLo : 126.782630194078,
plygnLa : 37.5705475304822
},
{
setSeqNo : 1,
plygnSeqNo : 4380,
plygnLo : 126.782617393579,
plygnLa : 37.5705694635082
},
{
setSeqNo : 1,
plygnSeqNo : 4381,
plygnLo : 126.782561751765,
plygnLa : 37.5706070933279
},
{
setSeqNo : 1,
plygnSeqNo : 4382,
plygnLo : 126.782504725752,
plygnLa : 37.5706331701713
},
{
setSeqNo : 1,
plygnSeqNo : 4383,
plygnLo : 126.782289354305,
plygnLa : 37.5707938228077
},
{
setSeqNo : 1,
plygnSeqNo : 4384,
plygnLo : 126.782231831151,
plygnLa : 37.5708700196407
},
{
setSeqNo : 1,
plygnSeqNo : 4385,
plygnLo : 126.78220858269,
plygnLa : 37.570896439242
},
{
setSeqNo : 1,
plygnSeqNo : 4386,
plygnLo : 126.782087889864,
plygnLa : 37.5709792754321
},
{
setSeqNo : 1,
plygnSeqNo : 4387,
plygnLo : 126.78192035863,
plygnLa : 37.5711143906754
},
{
setSeqNo : 1,
plygnSeqNo : 4388,
plygnLo : 126.781757494852,
plygnLa : 37.5711633645866
},
{
setSeqNo : 1,
plygnSeqNo : 4389,
plygnLo : 126.781693247955,
plygnLa : 37.5711778855716
},
{
setSeqNo : 1,
plygnSeqNo : 4390,
plygnLo : 126.781601197983,
plygnLa : 37.5712047440438
},
{
setSeqNo : 1,
plygnSeqNo : 4391,
plygnLo : 126.781487682255,
plygnLa : 37.5712515538374
},
{
setSeqNo : 1,
plygnSeqNo : 4392,
plygnLo : 126.781486265565,
plygnLa : 37.5712521091007
},
{
setSeqNo : 1,
plygnSeqNo : 4393,
plygnLo : 126.781374910511,
plygnLa : 37.5713496052079
},
{
setSeqNo : 1,
plygnSeqNo : 4394,
plygnLo : 126.781379378379,
plygnLa : 37.5713935362948
},
{
setSeqNo : 1,
plygnSeqNo : 4395,
plygnLo : 126.781423552655,
plygnLa : 37.5714687965325
},
{
setSeqNo : 1,
plygnSeqNo : 4396,
plygnLo : 126.781450523873,
plygnLa : 37.5714964354321
},
{
setSeqNo : 1,
plygnSeqNo : 4397,
plygnLo : 126.781487771303,
plygnLa : 37.5715218510714
},
{
setSeqNo : 1,
plygnSeqNo : 4398,
plygnLo : 126.781721131549,
plygnLa : 37.5716816411959
},
{
setSeqNo : 1,
plygnSeqNo : 4399,
plygnLo : 126.781735607405,
plygnLa : 37.5716895532615
},
{
setSeqNo : 1,
plygnSeqNo : 4400,
plygnLo : 126.781741852878,
plygnLa : 37.5716712652424
},
{
setSeqNo : 1,
plygnSeqNo : 4401,
plygnLo : 126.781858472866,
plygnLa : 37.5717703104136
},
{
setSeqNo : 1,
plygnSeqNo : 4402,
plygnLo : 126.781899575943,
plygnLa : 37.571808391427
},
{
setSeqNo : 1,
plygnSeqNo : 4403,
plygnLo : 126.781934355504,
plygnLa : 37.5718875816837
},
{
setSeqNo : 1,
plygnSeqNo : 4404,
plygnLo : 126.781986350873,
plygnLa : 37.5720093116751
},
{
setSeqNo : 1,
plygnSeqNo : 4405,
plygnLo : 126.782018749229,
plygnLa : 37.5721211465956
},
{
setSeqNo : 1,
plygnSeqNo : 4406,
plygnLo : 126.782072694128,
plygnLa : 37.5723003183975
},
{
setSeqNo : 1,
plygnSeqNo : 4407,
plygnLo : 126.782143101598,
plygnLa : 37.5725397681867
},
{
setSeqNo : 1,
plygnSeqNo : 4408,
plygnLo : 126.78218146828,
plygnLa : 37.5726662662736
},
{
setSeqNo : 1,
plygnSeqNo : 4409,
plygnLo : 126.782154601692,
plygnLa : 37.5727180238648
},
{
setSeqNo : 1,
plygnSeqNo : 4410,
plygnLo : 126.782121578426,
plygnLa : 37.572761606448
},
{
setSeqNo : 1,
plygnSeqNo : 4411,
plygnLo : 126.782113535064,
plygnLa : 37.5728480224207
},
{
setSeqNo : 1,
plygnSeqNo : 4412,
plygnLo : 126.782108425648,
plygnLa : 37.5729034870715
},
{
setSeqNo : 1,
plygnSeqNo : 4413,
plygnLo : 126.782100795999,
plygnLa : 37.5729730109863
},
{
setSeqNo : 1,
plygnSeqNo : 4414,
plygnLo : 126.782113857225,
plygnLa : 37.5730431404454
},
{
setSeqNo : 1,
plygnSeqNo : 4415,
plygnLo : 126.782139840346,
plygnLa : 37.5731690477524
},
{
setSeqNo : 1,
plygnSeqNo : 4416,
plygnLo : 126.782173247121,
plygnLa : 37.573234152785
},
{
setSeqNo : 1,
plygnSeqNo : 4417,
plygnLo : 126.782189992244,
plygnLa : 37.5732567066174
},
{
setSeqNo : 1,
plygnSeqNo : 4418,
plygnLo : 126.782306201412,
plygnLa : 37.5734340211405
},
{
setSeqNo : 1,
plygnSeqNo : 4419,
plygnLo : 126.782345767544,
plygnLa : 37.5735149045113
},
{
setSeqNo : 1,
plygnSeqNo : 4420,
plygnLo : 126.782355959596,
plygnLa : 37.5735366004336
},
{
setSeqNo : 1,
plygnSeqNo : 4421,
plygnLo : 126.782408291354,
plygnLa : 37.5736062457126
},
{
setSeqNo : 1,
plygnSeqNo : 4422,
plygnLo : 126.782443450485,
plygnLa : 37.5736181409493
},
{
setSeqNo : 1,
plygnSeqNo : 4423,
plygnLo : 126.782569962071,
plygnLa : 37.5736606038856
},
{
setSeqNo : 1,
plygnSeqNo : 4424,
plygnLo : 126.782674743541,
plygnLa : 37.5736982442131
},
{
setSeqNo : 1,
plygnSeqNo : 4425,
plygnLo : 126.782721224876,
plygnLa : 37.5737132597525
},
{
setSeqNo : 1,
plygnSeqNo : 4426,
plygnLo : 126.782752317504,
plygnLa : 37.5737256962746
},
{
setSeqNo : 1,
plygnSeqNo : 4427,
plygnLo : 126.782777231995,
plygnLa : 37.5737339142447
},
{
setSeqNo : 1,
plygnSeqNo : 4428,
plygnLo : 126.782880743211,
plygnLa : 37.5737799939566
},
{
setSeqNo : 1,
plygnSeqNo : 4429,
plygnLo : 126.783293920069,
plygnLa : 37.5739634951827
},
{
setSeqNo : 1,
plygnSeqNo : 4430,
plygnLo : 126.783629832987,
plygnLa : 37.5740750451933
},
{
setSeqNo : 1,
plygnSeqNo : 4431,
plygnLo : 126.783812721598,
plygnLa : 37.5741361980339
},
{
setSeqNo : 1,
plygnSeqNo : 4432,
plygnLo : 126.783883402478,
plygnLa : 37.5741602599768
},
{
setSeqNo : 1,
plygnSeqNo : 4433,
plygnLo : 126.783952673469,
plygnLa : 37.574182074286
},
{
setSeqNo : 1,
plygnSeqNo : 4434,
plygnLo : 126.783994365859,
plygnLa : 37.5741981979502
},
{
setSeqNo : 1,
plygnSeqNo : 4435,
plygnLo : 126.784142959603,
plygnLa : 37.5743158785256
},
{
setSeqNo : 1,
plygnSeqNo : 4436,
plygnLo : 126.784251532869,
plygnLa : 37.5743856258282
},
{
setSeqNo : 1,
plygnSeqNo : 4437,
plygnLo : 126.784401450159,
plygnLa : 37.5744695211144
},
{
setSeqNo : 1,
plygnSeqNo : 4438,
plygnLo : 126.784539090271,
plygnLa : 37.5745204554304
},
{
setSeqNo : 1,
plygnSeqNo : 4439,
plygnLo : 126.784665606144,
plygnLa : 37.574566584435
},
{
setSeqNo : 1,
plygnSeqNo : 4440,
plygnLo : 126.784714009866,
plygnLa : 37.5745863771887
},
{
setSeqNo : 1,
plygnSeqNo : 4441,
plygnLo : 126.784956534904,
plygnLa : 37.5747028247371
},
{
setSeqNo : 1,
plygnSeqNo : 4442,
plygnLo : 126.785005622554,
plygnLa : 37.5747291059257
},
{
setSeqNo : 1,
plygnSeqNo : 4443,
plygnLo : 126.785249151592,
plygnLa : 37.5748618802857
},
{
setSeqNo : 1,
plygnSeqNo : 4444,
plygnLo : 126.785670472879,
plygnLa : 37.5749856891375
},
{
setSeqNo : 1,
plygnSeqNo : 4445,
plygnLo : 126.785882882006,
plygnLa : 37.5750528136078
},
{
setSeqNo : 1,
plygnSeqNo : 4446,
plygnLo : 126.786224847634,
plygnLa : 37.5751573313648
},
{
setSeqNo : 1,
plygnSeqNo : 4447,
plygnLo : 126.786285802389,
plygnLa : 37.5751785603938
},
{
setSeqNo : 1,
plygnSeqNo : 4448,
plygnLo : 126.78645475733,
plygnLa : 37.5752292615085
},
{
setSeqNo : 1,
plygnSeqNo : 4449,
plygnLo : 126.786868985458,
plygnLa : 37.5753600990194
},
{
setSeqNo : 1,
plygnSeqNo : 4450,
plygnLo : 126.787084046175,
plygnLa : 37.5754272169967
},
{
setSeqNo : 1,
plygnSeqNo : 4451,
plygnLo : 126.787286579033,
plygnLa : 37.5754858699744
},
{
setSeqNo : 1,
plygnSeqNo : 4452,
plygnLo : 126.787521294347,
plygnLa : 37.5755524621678
},
{
setSeqNo : 1,
plygnSeqNo : 4453,
plygnLo : 126.787558938529,
plygnLa : 37.5755635055245
},
{
setSeqNo : 1,
plygnSeqNo : 4454,
plygnLo : 126.787568119838,
plygnLa : 37.5755669101432
},
{
setSeqNo : 1,
plygnSeqNo : 4455,
plygnLo : 126.787614235567,
plygnLa : 37.5755835983573
},
{
setSeqNo : 1,
plygnSeqNo : 4456,
plygnLo : 126.787764615976,
plygnLa : 37.5757615373235
},
{
setSeqNo : 1,
plygnSeqNo : 4457,
plygnLo : 126.787837909197,
plygnLa : 37.5758588050404
},
{
setSeqNo : 1,
plygnSeqNo : 4458,
plygnLo : 126.787902584967,
plygnLa : 37.5760081518289
},
{
setSeqNo : 1,
plygnSeqNo : 4459,
plygnLo : 126.787906035475,
plygnLa : 37.5760363141197
},
{
setSeqNo : 1,
plygnSeqNo : 4460,
plygnLo : 126.787915185332,
plygnLa : 37.5761148869696
},
{
setSeqNo : 1,
plygnSeqNo : 4461,
plygnLo : 126.788045746443,
plygnLa : 37.5761688943029
},
{
setSeqNo : 1,
plygnSeqNo : 4462,
plygnLo : 126.788142671578,
plygnLa : 37.5761687906282
},
{
setSeqNo : 1,
plygnSeqNo : 4463,
plygnLo : 126.788337402716,
plygnLa : 37.5760503192233
},
{
setSeqNo : 1,
plygnSeqNo : 4464,
plygnLo : 126.788349296562,
plygnLa : 37.5760359879099
},
{
setSeqNo : 1,
plygnSeqNo : 4465,
plygnLo : 126.788443191741,
plygnLa : 37.575923246451
},
{
setSeqNo : 1,
plygnSeqNo : 4466,
plygnLo : 126.788550561421,
plygnLa : 37.5757973119782
},
{
setSeqNo : 1,
plygnSeqNo : 4467,
plygnLo : 126.788595276985,
plygnLa : 37.575745575793
},
{
setSeqNo : 1,
plygnSeqNo : 4468,
plygnLo : 126.788633348056,
plygnLa : 37.5757326983183
},
{
setSeqNo : 1,
plygnSeqNo : 4469,
plygnLo : 126.788998209869,
plygnLa : 37.57562270523
},
{
setSeqNo : 1,
plygnSeqNo : 4470,
plygnLo : 126.789173122795,
plygnLa : 37.5755692404948
},
{
setSeqNo : 1,
plygnSeqNo : 4471,
plygnLo : 126.789202091643,
plygnLa : 37.5755811140509
},
{
setSeqNo : 1,
plygnSeqNo : 4472,
plygnLo : 126.789107902237,
plygnLa : 37.5757380575029
},
{
setSeqNo : 1,
plygnSeqNo : 4473,
plygnLo : 126.789060814489,
plygnLa : 37.5758125831399
},
{
setSeqNo : 1,
plygnSeqNo : 4474,
plygnLo : 126.789051606659,
plygnLa : 37.5758179189827
},
{
setSeqNo : 1,
plygnSeqNo : 4475,
plygnLo : 126.788923802019,
plygnLa : 37.5760358983671
},
{
setSeqNo : 1,
plygnSeqNo : 4476,
plygnLo : 126.788879557268,
plygnLa : 37.5761098700147
},
{
setSeqNo : 1,
plygnSeqNo : 4477,
plygnLo : 126.788837603154,
plygnLa : 37.5761818733173
},
{
setSeqNo : 1,
plygnSeqNo : 4478,
plygnLo : 126.788709094403,
plygnLa : 37.5764001315269
},
{
setSeqNo : 1,
plygnSeqNo : 4479,
plygnLo : 126.788670708152,
plygnLa : 37.5764636897257
},
{
setSeqNo : 1,
plygnSeqNo : 4480,
plygnLo : 126.788533336162,
plygnLa : 37.5766898145758
},
{
setSeqNo : 1,
plygnSeqNo : 4481,
plygnLo : 126.788487831233,
plygnLa : 37.5767682901058
},
{
setSeqNo : 1,
plygnSeqNo : 4482,
plygnLo : 126.788470233366,
plygnLa : 37.5767983863015
},
{
setSeqNo : 1,
plygnSeqNo : 4483,
plygnLo : 126.788686759405,
plygnLa : 37.5770406272423
},
{
setSeqNo : 1,
plygnSeqNo : 4484,
plygnLo : 126.788877238661,
plygnLa : 37.5772360888035
},
{
setSeqNo : 1,
plygnSeqNo : 4485,
plygnLo : 126.788898935156,
plygnLa : 37.5772569682998
},
{
setSeqNo : 1,
plygnSeqNo : 4486,
plygnLo : 126.788923449368,
plygnLa : 37.5772831955485
},
{
setSeqNo : 1,
plygnSeqNo : 4487,
plygnLo : 126.789155528931,
plygnLa : 37.5775274459747
},
{
setSeqNo : 1,
plygnSeqNo : 4488,
plygnLo : 126.789342826461,
plygnLa : 37.5777234586561
},
{
setSeqNo : 1,
plygnSeqNo : 4489,
plygnLo : 126.789368691131,
plygnLa : 37.5777088647694
},
{
setSeqNo : 1,
plygnSeqNo : 4490,
plygnLo : 126.789401601555,
plygnLa : 37.5777038586381
},
{
setSeqNo : 1,
plygnSeqNo : 4491,
plygnLo : 126.789503887506,
plygnLa : 37.5776902495685
},
{
setSeqNo : 1,
plygnSeqNo : 4492,
plygnLo : 126.789909626549,
plygnLa : 37.5776388831139
},
{
setSeqNo : 1,
plygnSeqNo : 4493,
plygnLo : 126.78995509962,
plygnLa : 37.5776316484441
},
{
setSeqNo : 1,
plygnSeqNo : 4494,
plygnLo : 126.789985521365,
plygnLa : 37.5774467201373
},
{
setSeqNo : 1,
plygnSeqNo : 4495,
plygnLo : 126.789997773549,
plygnLa : 37.5773650876189
},
{
setSeqNo : 1,
plygnSeqNo : 4496,
plygnLo : 126.790016395938,
plygnLa : 37.5773496319805
},
{
setSeqNo : 1,
plygnSeqNo : 4497,
plygnLo : 126.790222505825,
plygnLa : 37.5775226030055
},
{
setSeqNo : 1,
plygnSeqNo : 4498,
plygnLo : 126.790302656763,
plygnLa : 37.5775782109335
},
{
setSeqNo : 1,
plygnSeqNo : 4499,
plygnLo : 126.790344494209,
plygnLa : 37.5776072888489
},
{
setSeqNo : 1,
plygnSeqNo : 4500,
plygnLo : 126.790443161118,
plygnLa : 37.577680670546
},
{
setSeqNo : 1,
plygnSeqNo : 4501,
plygnLo : 126.790568144365,
plygnLa : 37.5777715515968
},
{
setSeqNo : 1,
plygnSeqNo : 4502,
plygnLo : 126.790594815348,
plygnLa : 37.5777837086227
},
{
setSeqNo : 1,
plygnSeqNo : 4503,
plygnLo : 126.790586253357,
plygnLa : 37.5778087487046
},
{
setSeqNo : 1,
plygnSeqNo : 4504,
plygnLo : 126.790608385997,
plygnLa : 37.577925357942
},
{
setSeqNo : 1,
plygnSeqNo : 4505,
plygnLo : 126.790634918605,
plygnLa : 37.5780552017425
},
{
setSeqNo : 1,
plygnSeqNo : 4506,
plygnLo : 126.790720214838,
plygnLa : 37.5784785366559
},
{
setSeqNo : 1,
plygnSeqNo : 4507,
plygnLo : 126.790721609196,
plygnLa : 37.5784852979084
},
{
setSeqNo : 1,
plygnSeqNo : 4508,
plygnLo : 126.790724570291,
plygnLa : 37.5785036020989
},
{
setSeqNo : 1,
plygnSeqNo : 4509,
plygnLo : 126.790732619162,
plygnLa : 37.5785357182247
},
{
setSeqNo : 1,
plygnSeqNo : 4510,
plygnLo : 126.790738162141,
plygnLa : 37.5785731731805
},
{
setSeqNo : 1,
plygnSeqNo : 4511,
plygnLo : 126.790801662682,
plygnLa : 37.5788897564528
},
{
setSeqNo : 1,
plygnSeqNo : 4512,
plygnLo : 126.79081770874,
plygnLa : 37.5789722797271
},
{
setSeqNo : 1,
plygnSeqNo : 4513,
plygnLo : 126.790818538284,
plygnLa : 37.5789911481965
},
{
setSeqNo : 1,
plygnSeqNo : 4514,
plygnLo : 126.790685804793,
plygnLa : 37.5790142830733
},
{
setSeqNo : 1,
plygnSeqNo : 4515,
plygnLo : 126.790700322752,
plygnLa : 37.5790728724769
},
{
setSeqNo : 1,
plygnSeqNo : 4516,
plygnLo : 126.790761527061,
plygnLa : 37.5792604942509
},
{
setSeqNo : 1,
plygnSeqNo : 4517,
plygnLo : 126.790778544954,
plygnLa : 37.5793117637504
},
{
setSeqNo : 1,
plygnSeqNo : 4518,
plygnLo : 126.790780298057,
plygnLa : 37.579316560434
},
{
setSeqNo : 1,
plygnSeqNo : 4519,
plygnLo : 126.790794561453,
plygnLa : 37.579401052921
},
{
setSeqNo : 1,
plygnSeqNo : 4520,
plygnLo : 126.790821403242,
plygnLa : 37.5795416007809
},
{
setSeqNo : 1,
plygnSeqNo : 4521,
plygnLo : 126.790819458815,
plygnLa : 37.5796694200215
},
{
setSeqNo : 1,
plygnSeqNo : 4522,
plygnLo : 126.790816489183,
plygnLa : 37.5797186890749
},
{
setSeqNo : 1,
plygnSeqNo : 4523,
plygnLo : 126.79081347276,
plygnLa : 37.5797809068584
},
{
setSeqNo : 1,
plygnSeqNo : 4524,
plygnLo : 126.790807586757,
plygnLa : 37.5798650829812
},
{
setSeqNo : 1,
plygnSeqNo : 4525,
plygnLo : 126.790787440422,
plygnLa : 37.5800438396194
},
{
setSeqNo : 1,
plygnSeqNo : 4526,
plygnLo : 126.790758799911,
plygnLa : 37.5802881803787
},
{
setSeqNo : 1,
plygnSeqNo : 4527,
plygnLo : 126.790747933255,
plygnLa : 37.5803799447946
},
{
setSeqNo : 1,
plygnSeqNo : 4528,
plygnLo : 126.7907234323,
plygnLa : 37.5805372938046
},
{
setSeqNo : 1,
plygnSeqNo : 4529,
plygnLo : 126.790727817774,
plygnLa : 37.5806124698548
},
{
setSeqNo : 1,
plygnSeqNo : 4530,
plygnLo : 126.790749093192,
plygnLa : 37.5806595300137
},
{
setSeqNo : 1,
plygnSeqNo : 4531,
plygnLo : 126.79081813574,
plygnLa : 37.5807655184966
},
{
setSeqNo : 1,
plygnSeqNo : 4532,
plygnLo : 126.7909403436,
plygnLa : 37.5807741883169
},
{
setSeqNo : 1,
plygnSeqNo : 4533,
plygnLo : 126.791009131463,
plygnLa : 37.5807819166116
},
{
setSeqNo : 1,
plygnSeqNo : 4534,
plygnLo : 126.791048026107,
plygnLa : 37.5807876069828
},
{
setSeqNo : 1,
plygnSeqNo : 4535,
plygnLo : 126.791182178586,
plygnLa : 37.5808286790071
},
{
setSeqNo : 1,
plygnSeqNo : 4536,
plygnLo : 126.791219017543,
plygnLa : 37.5808732260122
},
{
setSeqNo : 1,
plygnSeqNo : 4537,
plygnLo : 126.791260284865,
plygnLa : 37.5809206008676
},
{
setSeqNo : 1,
plygnSeqNo : 4538,
plygnLo : 126.791297868905,
plygnLa : 37.5810135870522
},
{
setSeqNo : 1,
plygnSeqNo : 4539,
plygnLo : 126.7913270081,
plygnLa : 37.5812197386074
},
{
setSeqNo : 1,
plygnSeqNo : 4540,
plygnLo : 126.791342434294,
plygnLa : 37.5813340738495
},
{
setSeqNo : 1,
plygnSeqNo : 4541,
plygnLo : 126.791348934306,
plygnLa : 37.5814137697963
},
{
setSeqNo : 1,
plygnSeqNo : 4542,
plygnLo : 126.791550985832,
plygnLa : 37.5813364182905
},
{
setSeqNo : 1,
plygnSeqNo : 4543,
plygnLo : 126.791600919771,
plygnLa : 37.5813176404954
},
{
setSeqNo : 1,
plygnSeqNo : 4544,
plygnLo : 126.791630036112,
plygnLa : 37.5812168995509
},
{
setSeqNo : 1,
plygnSeqNo : 4545,
plygnLo : 126.791672867062,
plygnLa : 37.5810832340704
},
{
setSeqNo : 1,
plygnSeqNo : 4546,
plygnLo : 126.791673771253,
plygnLa : 37.581075351152
},
{
setSeqNo : 1,
plygnSeqNo : 4547,
plygnLo : 126.79178352179,
plygnLa : 37.5808601576512
},
{
setSeqNo : 1,
plygnSeqNo : 4548,
plygnLo : 126.791806824875,
plygnLa : 37.5808143025665
},
{
setSeqNo : 1,
plygnSeqNo : 4549,
plygnLo : 126.791829044904,
plygnLa : 37.5807749248365
},
{
setSeqNo : 1,
plygnSeqNo : 4550,
plygnLo : 126.791841655765,
plygnLa : 37.5807546731115
},
{
setSeqNo : 1,
plygnSeqNo : 4551,
plygnLo : 126.79187738982,
plygnLa : 37.5806925151548
},
{
setSeqNo : 1,
plygnSeqNo : 4552,
plygnLo : 126.791903342869,
plygnLa : 37.5806463871272
},
{
setSeqNo : 1,
plygnSeqNo : 4553,
plygnLo : 126.792009655627,
plygnLa : 37.5804576467834
},
{
setSeqNo : 1,
plygnSeqNo : 4554,
plygnLo : 126.792099249067,
plygnLa : 37.5803006917307
},
{
setSeqNo : 1,
plygnSeqNo : 4555,
plygnLo : 126.792133733203,
plygnLa : 37.5802393788988
},
{
setSeqNo : 1,
plygnSeqNo : 4556,
plygnLo : 126.792153813115,
plygnLa : 37.5802087276686
},
{
setSeqNo : 1,
plygnSeqNo : 4557,
plygnLo : 126.792175662609,
plygnLa : 37.5801761043696
},
{
setSeqNo : 1,
plygnSeqNo : 4558,
plygnLo : 126.792202003904,
plygnLa : 37.5801772767658
},
{
setSeqNo : 1,
plygnSeqNo : 4559,
plygnLo : 126.792240593658,
plygnLa : 37.5801055475598
},
{
setSeqNo : 1,
plygnSeqNo : 4560,
plygnLo : 126.792270643331,
plygnLa : 37.5800518202758
},
{
setSeqNo : 1,
plygnSeqNo : 4561,
plygnLo : 126.792274392098,
plygnLa : 37.5800388799866
},
{
setSeqNo : 1,
plygnSeqNo : 4562,
plygnLo : 126.792288130524,
plygnLa : 37.5799963870736
},
{
setSeqNo : 1,
plygnSeqNo : 4563,
plygnLo : 126.792302946106,
plygnLa : 37.5799488327984
},
{
setSeqNo : 1,
plygnSeqNo : 4564,
plygnLo : 126.792334590929,
plygnLa : 37.5798306335097
},
{
setSeqNo : 1,
plygnSeqNo : 4565,
plygnLo : 126.792373970429,
plygnLa : 37.5797276488243
},
{
setSeqNo : 1,
plygnSeqNo : 4566,
plygnLo : 126.792385401559,
plygnLa : 37.5796876924786
},
{
setSeqNo : 1,
plygnSeqNo : 4567,
plygnLo : 126.792406312997,
plygnLa : 37.5796108581817
},
{
setSeqNo : 1,
plygnSeqNo : 4568,
plygnLo : 126.792418788251,
plygnLa : 37.5795137438464
},
{
setSeqNo : 1,
plygnSeqNo : 4569,
plygnLo : 126.792425318956,
plygnLa : 37.5794574439472
},
{
setSeqNo : 1,
plygnSeqNo : 4570,
plygnLo : 126.792436207614,
plygnLa : 37.5794219926768
},
{
setSeqNo : 1,
plygnSeqNo : 4571,
plygnLo : 126.792469327377,
plygnLa : 37.5792776131329
},
{
setSeqNo : 1,
plygnSeqNo : 4572,
plygnLo : 126.792488628661,
plygnLa : 37.5791444647727
},
{
setSeqNo : 1,
plygnSeqNo : 4573,
plygnLo : 126.792492928957,
plygnLa : 37.5790636618071
},
{
setSeqNo : 1,
plygnSeqNo : 4574,
plygnLo : 126.792502008015,
plygnLa : 37.5789144570722
},
{
setSeqNo : 1,
plygnSeqNo : 4575,
plygnLo : 126.792510340463,
plygnLa : 37.5787804507652
},
{
setSeqNo : 1,
plygnSeqNo : 4576,
plygnLo : 126.79251825319,
plygnLa : 37.5786712204505
},
{
setSeqNo : 1,
plygnSeqNo : 4577,
plygnLo : 126.792520329687,
plygnLa : 37.5786250481842
},
{
setSeqNo : 1,
plygnSeqNo : 4578,
plygnLo : 126.792523073365,
plygnLa : 37.5785909872293
},
{
setSeqNo : 1,
plygnSeqNo : 4579,
plygnLo : 126.792537034561,
plygnLa : 37.5784074356182
},
{
setSeqNo : 1,
plygnSeqNo : 4580,
plygnLo : 126.792572236768,
plygnLa : 37.5782796659934
},
{
setSeqNo : 1,
plygnSeqNo : 4581,
plygnLo : 126.792625840465,
plygnLa : 37.578088869582
},
{
setSeqNo : 1,
plygnSeqNo : 4582,
plygnLo : 126.792643524657,
plygnLa : 37.5780238591309
},
{
setSeqNo : 1,
plygnSeqNo : 4583,
plygnLo : 126.792662678438,
plygnLa : 37.577882265845
},
{
setSeqNo : 1,
plygnSeqNo : 4584,
plygnLo : 126.792700744569,
plygnLa : 37.5776128861311
},
{
setSeqNo : 1,
plygnSeqNo : 4585,
plygnLo : 126.792702749129,
plygnLa : 37.5775920591246
},
{
setSeqNo : 1,
plygnSeqNo : 4586,
plygnLo : 126.79272425722,
plygnLa : 37.5774301981903
},
{
setSeqNo : 1,
plygnSeqNo : 4587,
plygnLo : 126.792726921478,
plygnLa : 37.5773640343167
},
{
setSeqNo : 1,
plygnSeqNo : 4588,
plygnLo : 126.792726322084,
plygnLa : 37.5773234887119
},
{
setSeqNo : 1,
plygnSeqNo : 4589,
plygnLo : 126.792728196796,
plygnLa : 37.5772837957826
},
{
setSeqNo : 1,
plygnSeqNo : 4590,
plygnLo : 126.792734095695,
plygnLa : 37.5770734791631
},
{
setSeqNo : 1,
plygnSeqNo : 4591,
plygnLo : 126.792735456028,
plygnLa : 37.5770275853571
},
{
setSeqNo : 1,
plygnSeqNo : 4592,
plygnLo : 126.792737048135,
plygnLa : 37.576838948953
},
{
setSeqNo : 1,
plygnSeqNo : 4593,
plygnLo : 126.792750498112,
plygnLa : 37.5768384056882
},
{
setSeqNo : 1,
plygnSeqNo : 4594,
plygnLo : 126.792799663913,
plygnLa : 37.5768379339172
},
{
setSeqNo : 1,
plygnSeqNo : 4595,
plygnLo : 126.792976496946,
plygnLa : 37.5768556985198
},
{
setSeqNo : 1,
plygnSeqNo : 4596,
plygnLo : 126.793103812755,
plygnLa : 37.5768694386388
},
{
setSeqNo : 1,
plygnSeqNo : 4597,
plygnLo : 126.793169762218,
plygnLa : 37.5768833481113
},
{
setSeqNo : 1,
plygnSeqNo : 4598,
plygnLo : 126.793219258998,
plygnLa : 37.5768938604433
},
{
setSeqNo : 1,
plygnSeqNo : 4599,
plygnLo : 126.793215619504,
plygnLa : 37.576928767117
},
{
setSeqNo : 1,
plygnSeqNo : 4600,
plygnLo : 126.793207474578,
plygnLa : 37.576995199115
},
{
setSeqNo : 1,
plygnSeqNo : 4601,
plygnLo : 126.793203465104,
plygnLa : 37.5770371436183
},
{
setSeqNo : 1,
plygnSeqNo : 4602,
plygnLo : 126.793198750775,
plygnLa : 37.5770796527378
},
{
setSeqNo : 1,
plygnSeqNo : 4603,
plygnLo : 126.793188989071,
plygnLa : 37.5771536877858
},
{
setSeqNo : 1,
plygnSeqNo : 4604,
plygnLo : 126.79317770814,
plygnLa : 37.577265444023
},
{
setSeqNo : 1,
plygnSeqNo : 4605,
plygnLo : 126.793174969124,
plygnLa : 37.5772980988914
},
{
setSeqNo : 1,
plygnSeqNo : 4606,
plygnLo : 126.793172030215,
plygnLa : 37.577401987569
},
{
setSeqNo : 1,
plygnSeqNo : 4607,
plygnLo : 126.793166542946,
plygnLa : 37.5775269882731
},
{
setSeqNo : 1,
plygnSeqNo : 4608,
plygnLo : 126.793163404407,
plygnLa : 37.5776370751939
},
{
setSeqNo : 1,
plygnSeqNo : 4609,
plygnLo : 126.793160345642,
plygnLa : 37.5777232208255
},
{
setSeqNo : 1,
plygnSeqNo : 4610,
plygnLo : 126.793154055312,
plygnLa : 37.5778845408589
},
{
setSeqNo : 1,
plygnSeqNo : 4611,
plygnLo : 126.793153849927,
plygnLa : 37.5779580345729
},
{
setSeqNo : 1,
plygnSeqNo : 4612,
plygnLo : 126.793157253429,
plygnLa : 37.5780692581738
},
{
setSeqNo : 1,
plygnSeqNo : 4613,
plygnLo : 126.793162156223,
plygnLa : 37.5781503555966
},
{
setSeqNo : 1,
plygnSeqNo : 4614,
plygnLo : 126.793169179381,
plygnLa : 37.578234266989
},
{
setSeqNo : 1,
plygnSeqNo : 4615,
plygnLo : 126.793171892618,
plygnLa : 37.5782762203798
},
{
setSeqNo : 1,
plygnSeqNo : 4616,
plygnLo : 126.793188457602,
plygnLa : 37.578425202452
},
{
setSeqNo : 1,
plygnSeqNo : 4617,
plygnLo : 126.79325448333,
plygnLa : 37.5785337153032
},
{
setSeqNo : 1,
plygnSeqNo : 4618,
plygnLo : 126.793234477775,
plygnLa : 37.5785424102943
},
{
setSeqNo : 1,
plygnSeqNo : 4619,
plygnLo : 126.793102360837,
plygnLa : 37.5785970747241
},
{
setSeqNo : 1,
plygnSeqNo : 4620,
plygnLo : 126.793066865454,
plygnLa : 37.5786392504026
},
{
setSeqNo : 1,
plygnSeqNo : 4621,
plygnLo : 126.793076763898,
plygnLa : 37.5787721633491
},
{
setSeqNo : 1,
plygnSeqNo : 4622,
plygnLo : 126.793074150631,
plygnLa : 37.5788200191166
},
{
setSeqNo : 1,
plygnSeqNo : 4623,
plygnLo : 126.793072471415,
plygnLa : 37.578849577024
},
{
setSeqNo : 1,
plygnSeqNo : 4624,
plygnLo : 126.793067566415,
plygnLa : 37.57902554764
},
{
setSeqNo : 1,
plygnSeqNo : 4625,
plygnLo : 126.793048668603,
plygnLa : 37.5791398234782
},
{
setSeqNo : 1,
plygnSeqNo : 4626,
plygnLo : 126.793043378583,
plygnLa : 37.5791983786881
},
{
setSeqNo : 1,
plygnSeqNo : 4627,
plygnLo : 126.793023933396,
plygnLa : 37.5793188501314
},
{
setSeqNo : 1,
plygnSeqNo : 4628,
plygnLo : 126.792960492335,
plygnLa : 37.5795501842236
},
{
setSeqNo : 1,
plygnSeqNo : 4629,
plygnLo : 126.792947987056,
plygnLa : 37.5795968958691
},
{
setSeqNo : 1,
plygnSeqNo : 4630,
plygnLo : 126.792937254552,
plygnLa : 37.5796374203416
},
{
setSeqNo : 1,
plygnSeqNo : 4631,
plygnLo : 126.792913832707,
plygnLa : 37.5797263519588
},
{
setSeqNo : 1,
plygnSeqNo : 4632,
plygnLo : 126.792891152323,
plygnLa : 37.5798054362431
},
{
setSeqNo : 1,
plygnSeqNo : 4633,
plygnLo : 126.792872372349,
plygnLa : 37.5798780402238
},
{
setSeqNo : 1,
plygnSeqNo : 4634,
plygnLo : 126.792857738046,
plygnLa : 37.5800511748963
},
{
setSeqNo : 1,
plygnSeqNo : 4635,
plygnLo : 126.792850285688,
plygnLa : 37.5801252127085
},
{
setSeqNo : 1,
plygnSeqNo : 4636,
plygnLo : 126.792846451118,
plygnLa : 37.5801682826943
},
{
setSeqNo : 1,
plygnSeqNo : 4637,
plygnLo : 126.792860307774,
plygnLa : 37.5802088521371
},
{
setSeqNo : 1,
plygnSeqNo : 4638,
plygnLo : 126.792864520351,
plygnLa : 37.5802206793599
},
{
setSeqNo : 1,
plygnSeqNo : 4639,
plygnLo : 126.792940401175,
plygnLa : 37.5802222281245
},
{
setSeqNo : 1,
plygnSeqNo : 4640,
plygnLo : 126.793105078858,
plygnLa : 37.580225610257
},
{
setSeqNo : 1,
plygnSeqNo : 4641,
plygnLo : 126.793226030842,
plygnLa : 37.5802379329683
},
{
setSeqNo : 1,
plygnSeqNo : 4642,
plygnLo : 126.793310210075,
plygnLa : 37.5802470916498
},
{
setSeqNo : 1,
plygnSeqNo : 4643,
plygnLo : 126.793291619972,
plygnLa : 37.5803166050868
},
{
setSeqNo : 1,
plygnSeqNo : 4644,
plygnLo : 126.79332807066,
plygnLa : 37.5804397079982
},
{
setSeqNo : 1,
plygnSeqNo : 4645,
plygnLo : 126.793351898902,
plygnLa : 37.5805219639338
},
{
setSeqNo : 1,
plygnSeqNo : 4646,
plygnLo : 126.793364338581,
plygnLa : 37.5805636570058
},
{
setSeqNo : 1,
plygnSeqNo : 4647,
plygnLo : 126.793380757331,
plygnLa : 37.5806397015955
},
{
setSeqNo : 1,
plygnSeqNo : 4648,
plygnLo : 126.793417129585,
plygnLa : 37.5807912485894
},
{
setSeqNo : 1,
plygnSeqNo : 4649,
plygnLo : 126.79343483085,
plygnLa : 37.5808492851176
},
{
setSeqNo : 1,
plygnSeqNo : 4650,
plygnLo : 126.793526551431,
plygnLa : 37.581135788411
},
{
setSeqNo : 1,
plygnSeqNo : 4651,
plygnLo : 126.793528472396,
plygnLa : 37.5811450822881
},
{
setSeqNo : 1,
plygnSeqNo : 4652,
plygnLo : 126.793543377549,
plygnLa : 37.5811912835732
},
{
setSeqNo : 1,
plygnSeqNo : 4653,
plygnLo : 126.793568162166,
plygnLa : 37.5812473599906
},
{
setSeqNo : 1,
plygnSeqNo : 4654,
plygnLo : 126.793665623302,
plygnLa : 37.5815045914281
},
{
setSeqNo : 1,
plygnSeqNo : 4655,
plygnLo : 126.79369544523,
plygnLa : 37.5815938956826
},
{
setSeqNo : 1,
plygnSeqNo : 4656,
plygnLo : 126.793715622374,
plygnLa : 37.5816538993964
},
{
setSeqNo : 1,
plygnSeqNo : 4657,
plygnLo : 126.793722625975,
plygnLa : 37.581679535649
},
{
setSeqNo : 1,
plygnSeqNo : 4658,
plygnLo : 126.793740142704,
plygnLa : 37.5817437616571
},
{
setSeqNo : 1,
plygnSeqNo : 4659,
plygnLo : 126.793822338094,
plygnLa : 37.5818278162968
},
{
setSeqNo : 1,
plygnSeqNo : 4660,
plygnLo : 126.793823161508,
plygnLa : 37.5819111568841
},
{
setSeqNo : 1,
plygnSeqNo : 4661,
plygnLo : 126.793825049817,
plygnLa : 37.581997314466
},
{
setSeqNo : 1,
plygnSeqNo : 4662,
plygnLo : 126.793860757818,
plygnLa : 37.5821356238941
},
{
setSeqNo : 1,
plygnSeqNo : 4663,
plygnLo : 126.793890850707,
plygnLa : 37.5822530838217
},
{
setSeqNo : 1,
plygnSeqNo : 4664,
plygnLo : 126.79389418671,
plygnLa : 37.582389364338
},
{
setSeqNo : 1,
plygnSeqNo : 4665,
plygnLo : 126.793895019656,
plygnLa : 37.5824076645124
},
{
setSeqNo : 1,
plygnSeqNo : 4666,
plygnLo : 126.793895618686,
plygnLa : 37.5825138182752
},
{
setSeqNo : 1,
plygnSeqNo : 4667,
plygnLo : 126.793897341133,
plygnLa : 37.582590685876
},
{
setSeqNo : 1,
plygnSeqNo : 4668,
plygnLo : 126.793892098824,
plygnLa : 37.5826317878885
},
{
setSeqNo : 1,
plygnSeqNo : 4669,
plygnLo : 126.793890278028,
plygnLa : 37.5827125853401
},
{
setSeqNo : 1,
plygnSeqNo : 4670,
plygnLo : 126.793895770844,
plygnLa : 37.5827773577351
},
{
setSeqNo : 1,
plygnSeqNo : 4671,
plygnLo : 126.793912240878,
plygnLa : 37.5829615199775
},
{
setSeqNo : 1,
plygnSeqNo : 4672,
plygnLo : 126.793887752314,
plygnLa : 37.5829856964723
},
{
setSeqNo : 1,
plygnSeqNo : 4673,
plygnLo : 126.793884030025,
plygnLa : 37.5829896258031
},
{
setSeqNo : 1,
plygnSeqNo : 4674,
plygnLo : 126.793731767004,
plygnLa : 37.5830386327184
},
{
setSeqNo : 1,
plygnSeqNo : 4675,
plygnLo : 126.793735586771,
plygnLa : 37.5831270441799
},
{
setSeqNo : 1,
plygnSeqNo : 4676,
plygnLo : 126.793737404049,
plygnLa : 37.5831732232296
},
{
setSeqNo : 1,
plygnSeqNo : 4677,
plygnLo : 126.79374199802,
plygnLa : 37.5833007845118
},
{
setSeqNo : 1,
plygnSeqNo : 4678,
plygnLo : 126.793746188081,
plygnLa : 37.583451417559
},
{
setSeqNo : 1,
plygnSeqNo : 4679,
plygnLo : 126.793749530796,
plygnLa : 37.5834581810771
},
{
setSeqNo : 1,
plygnSeqNo : 4680,
plygnLo : 126.793731046288,
plygnLa : 37.5835507875147
},
{
setSeqNo : 1,
plygnSeqNo : 4681,
plygnLo : 126.793704692279,
plygnLa : 37.5836763118648
},
{
setSeqNo : 1,
plygnSeqNo : 4682,
plygnLo : 126.79367385472,
plygnLa : 37.5838263260055
},
{
setSeqNo : 1,
plygnSeqNo : 4683,
plygnLo : 126.793644072026,
plygnLa : 37.583913559342
},
{
setSeqNo : 1,
plygnSeqNo : 4684,
plygnLo : 126.793617320406,
plygnLa : 37.5839912225599
},
{
setSeqNo : 1,
plygnSeqNo : 4685,
plygnLo : 126.793612868904,
plygnLa : 37.5839993785818
},
{
setSeqNo : 1,
plygnSeqNo : 4686,
plygnLo : 126.793582910877,
plygnLa : 37.5840857652977
},
{
setSeqNo : 1,
plygnSeqNo : 4687,
plygnLo : 126.793556678436,
plygnLa : 37.5841676549688
},
{
setSeqNo : 1,
plygnSeqNo : 4688,
plygnLo : 126.79350494165,
plygnLa : 37.5843246681746
},
{
setSeqNo : 1,
plygnSeqNo : 4689,
plygnLo : 126.793451778427,
plygnLa : 37.5844870299981
},
{
setSeqNo : 1,
plygnSeqNo : 4690,
plygnLo : 126.793441065242,
plygnLa : 37.5845196827605
},
{
setSeqNo : 1,
plygnSeqNo : 4691,
plygnLo : 126.793477344997,
plygnLa : 37.5845146742234
},
{
setSeqNo : 1,
plygnSeqNo : 4692,
plygnLo : 126.793733066931,
plygnLa : 37.5844813372638
},
{
setSeqNo : 1,
plygnSeqNo : 4693,
plygnLo : 126.793783334019,
plygnLa : 37.5844693167245
},
{
setSeqNo : 1,
plygnSeqNo : 4694,
plygnLo : 126.793905276158,
plygnLa : 37.5843845040492
},
{
setSeqNo : 1,
plygnSeqNo : 4695,
plygnLo : 126.793954024683,
plygnLa : 37.5843493985208
},
{
setSeqNo : 1,
plygnSeqNo : 4696,
plygnLo : 126.794016413137,
plygnLa : 37.5843061434814
},
{
setSeqNo : 1,
plygnSeqNo : 4697,
plygnLo : 126.794093331061,
plygnLa : 37.5842530657766
},
{
setSeqNo : 1,
plygnSeqNo : 4698,
plygnLo : 126.794143591801,
plygnLa : 37.5841827607707
},
{
setSeqNo : 1,
plygnSeqNo : 4699,
plygnLo : 126.794218002906,
plygnLa : 37.5840784309064
},
{
setSeqNo : 1,
plygnSeqNo : 4700,
plygnLo : 126.794224565348,
plygnLa : 37.5840716848187
},
{
setSeqNo : 1,
plygnSeqNo : 4701,
plygnLo : 126.794270774254,
plygnLa : 37.5839923713237
},
{
setSeqNo : 1,
plygnSeqNo : 4702,
plygnLo : 126.794337271793,
plygnLa : 37.5838711358214
},
{
setSeqNo : 1,
plygnSeqNo : 4703,
plygnLo : 126.794408575972,
plygnLa : 37.583740338011
},
{
setSeqNo : 1,
plygnSeqNo : 4704,
plygnLo : 126.794465281559,
plygnLa : 37.5836396353345
},
{
setSeqNo : 1,
plygnSeqNo : 4705,
plygnLo : 126.794503856909,
plygnLa : 37.5836377390937
},
{
setSeqNo : 1,
plygnSeqNo : 4706,
plygnLo : 126.794508488489,
plygnLa : 37.58362535855
},
{
setSeqNo : 1,
plygnSeqNo : 4707,
plygnLo : 126.794540902024,
plygnLa : 37.5835479853217
},
{
setSeqNo : 1,
plygnSeqNo : 4708,
plygnLo : 126.7945422378,
plygnLa : 37.5835108219881
},
{
setSeqNo : 1,
plygnSeqNo : 4709,
plygnLo : 126.794544511744,
plygnLa : 37.5834542352503
},
{
setSeqNo : 1,
plygnSeqNo : 4710,
plygnLo : 126.794545984503,
plygnLa : 37.5833723018937
},
{
setSeqNo : 1,
plygnSeqNo : 4711,
plygnLo : 126.794548230527,
plygnLa : 37.5833258517197
},
{
setSeqNo : 1,
plygnSeqNo : 4712,
plygnLo : 126.79455024777,
plygnLa : 37.5833007882096
},
{
setSeqNo : 1,
plygnSeqNo : 4713,
plygnLo : 126.794540053452,
plygnLa : 37.5832120867144
},
{
setSeqNo : 1,
plygnSeqNo : 4714,
plygnLo : 126.794522079886,
plygnLa : 37.5830588891071
},
{
setSeqNo : 1,
plygnSeqNo : 4715,
plygnLo : 126.794514624328,
plygnLa : 37.5830039694283
},
{
setSeqNo : 1,
plygnSeqNo : 4716,
plygnLo : 126.794507979409,
plygnLa : 37.5829791803733
},
{
setSeqNo : 1,
plygnSeqNo : 4717,
plygnLo : 126.794483593252,
plygnLa : 37.5829056536072
},
{
setSeqNo : 1,
plygnSeqNo : 4718,
plygnLo : 126.79443850064,
plygnLa : 37.5827709857207
},
{
setSeqNo : 1,
plygnSeqNo : 4719,
plygnLo : 126.794409368665,
plygnLa : 37.5826853414177
},
{
setSeqNo : 1,
plygnSeqNo : 4720,
plygnLo : 126.79442655631,
plygnLa : 37.582676928115
},
{
setSeqNo : 1,
plygnSeqNo : 4721,
plygnLo : 126.794429093457,
plygnLa : 37.5826558143594
},
{
setSeqNo : 1,
plygnSeqNo : 4722,
plygnLo : 126.794472350473,
plygnLa : 37.582620129494
},
{
setSeqNo : 1,
plygnSeqNo : 4723,
plygnLo : 126.79450071273,
plygnLa : 37.5825985027845
},
{
setSeqNo : 1,
plygnSeqNo : 4724,
plygnLo : 126.794589718411,
plygnLa : 37.5825916222518
},
{
setSeqNo : 1,
plygnSeqNo : 4725,
plygnLo : 126.794628065396,
plygnLa : 37.5826026620587
},
{
setSeqNo : 1,
plygnSeqNo : 4726,
plygnLo : 126.794697887778,
plygnLa : 37.5826222200306
},
{
setSeqNo : 1,
plygnSeqNo : 4727,
plygnLo : 126.794707936553,
plygnLa : 37.582636310092
},
{
setSeqNo : 1,
plygnSeqNo : 4728,
plygnLo : 126.79470934042,
plygnLa : 37.58263969134
},
{
setSeqNo : 1,
plygnSeqNo : 4729,
plygnLo : 126.794748613022,
plygnLa : 37.5827670235519
},
{
setSeqNo : 1,
plygnSeqNo : 4730,
plygnLo : 126.794809081077,
plygnLa : 37.5829673193102
},
{
setSeqNo : 1,
plygnSeqNo : 4731,
plygnLo : 126.794869546234,
plygnLa : 37.5831735256332
},
{
setSeqNo : 1,
plygnSeqNo : 4732,
plygnLo : 126.794881263033,
plygnLa : 37.5832231009063
},
{
setSeqNo : 1,
plygnSeqNo : 4733,
plygnLo : 126.794906769708,
plygnLa : 37.5833380201621
},
{
setSeqNo : 1,
plygnSeqNo : 4734,
plygnLo : 126.794928286439,
plygnLa : 37.5834261841136
},
{
setSeqNo : 1,
plygnSeqNo : 4735,
plygnLo : 126.794938486353,
plygnLa : 37.5835779631904
},
{
setSeqNo : 1,
plygnSeqNo : 4736,
plygnLo : 126.794946296063,
plygnLa : 37.5837584520257
},
{
setSeqNo : 1,
plygnSeqNo : 4737,
plygnLo : 126.794939733059,
plygnLa : 37.5838274208261
},
{
setSeqNo : 1,
plygnSeqNo : 4738,
plygnLo : 126.794928274941,
plygnLa : 37.5839422854
},
{
setSeqNo : 1,
plygnSeqNo : 4739,
plygnLo : 126.794916669609,
plygnLa : 37.5840444635987
},
{
setSeqNo : 1,
plygnSeqNo : 4740,
plygnLo : 126.794911384913,
plygnLa : 37.5841016132937
},
{
setSeqNo : 1,
plygnSeqNo : 4741,
plygnLo : 126.79490063995,
plygnLa : 37.584212243903
},
{
setSeqNo : 1,
plygnSeqNo : 4742,
plygnLo : 126.794889164103,
plygnLa : 37.5843332984435
},
{
setSeqNo : 1,
plygnSeqNo : 4743,
plygnLo : 126.794887205394,
plygnLa : 37.584337800575
},
{
setSeqNo : 1,
plygnSeqNo : 4744,
plygnLo : 126.794882770982,
plygnLa : 37.5844056449581
},
{
setSeqNo : 1,
plygnSeqNo : 4745,
plygnLo : 126.794881912098,
plygnLa : 37.5844582973524
},
{
setSeqNo : 1,
plygnSeqNo : 4746,
plygnLo : 126.794876167912,
plygnLa : 37.5846193372534
},
{
setSeqNo : 1,
plygnSeqNo : 4747,
plygnLo : 126.794870994732,
plygnLa : 37.5847626388083
},
{
setSeqNo : 1,
plygnSeqNo : 4748,
plygnLo : 126.79487269862,
plygnLa : 37.5847854453514
},
{
setSeqNo : 1,
plygnSeqNo : 4749,
plygnLo : 126.794885606552,
plygnLa : 37.5849772170071
},
{
setSeqNo : 1,
plygnSeqNo : 4750,
plygnLo : 126.79488771275,
plygnLa : 37.5849856625601
},
{
setSeqNo : 1,
plygnSeqNo : 4751,
plygnLo : 126.794887477117,
plygnLa : 37.5850053663251
},
{
setSeqNo : 1,
plygnSeqNo : 4752,
plygnLo : 126.794886551954,
plygnLa : 37.5850208525112
},
{
setSeqNo : 1,
plygnSeqNo : 4753,
plygnLo : 126.794923134471,
plygnLa : 37.5851631018793
},
{
setSeqNo : 1,
plygnSeqNo : 4754,
plygnLo : 126.794933100295,
plygnLa : 37.585203103181
},
{
setSeqNo : 1,
plygnSeqNo : 4755,
plygnLo : 126.794962664355,
plygnLa : 37.5851978032129
},
{
setSeqNo : 1,
plygnSeqNo : 4756,
plygnLo : 126.795053624457,
plygnLa : 37.5851852951687
},
{
setSeqNo : 1,
plygnSeqNo : 4757,
plygnLo : 126.795086158925,
plygnLa : 37.5851907047222
},
{
setSeqNo : 1,
plygnSeqNo : 4758,
plygnLo : 126.795244244615,
plygnLa : 37.5852154782314
},
{
setSeqNo : 1,
plygnSeqNo : 4759,
plygnLo : 126.795247347732,
plygnLa : 37.5852433515846
},
{
setSeqNo : 1,
plygnSeqNo : 4760,
plygnLo : 126.795237166503,
plygnLa : 37.5852819039979
},
{
setSeqNo : 1,
plygnSeqNo : 4761,
plygnLo : 126.795223570952,
plygnLa : 37.5853345348017
},
{
setSeqNo : 1,
plygnSeqNo : 4762,
plygnLo : 126.795217514471,
plygnLa : 37.5853500107057
},
{
setSeqNo : 1,
plygnSeqNo : 4763,
plygnLo : 126.795231513289,
plygnLa : 37.5853404680851
},
{
setSeqNo : 1,
plygnSeqNo : 4764,
plygnLo : 126.795449103063,
plygnLa : 37.5852099158895
},
{
setSeqNo : 1,
plygnSeqNo : 4765,
plygnLo : 126.795540362735,
plygnLa : 37.5851546101004
},
{
setSeqNo : 1,
plygnSeqNo : 4766,
plygnLo : 126.795545489339,
plygnLa : 37.585027635606
},
{
setSeqNo : 1,
plygnSeqNo : 4767,
plygnLo : 126.795545707267,
plygnLa : 37.5850141201667
},
{
setSeqNo : 1,
plygnSeqNo : 4768,
plygnLo : 126.7955467809,
plygnLa : 37.5850110331829
},
{
setSeqNo : 1,
plygnSeqNo : 4769,
plygnLo : 126.795550993179,
plygnLa : 37.5848916582514
},
{
setSeqNo : 1,
plygnSeqNo : 4770,
plygnLo : 126.795553246078,
plygnLa : 37.5848463259767
},
{
setSeqNo : 1,
plygnSeqNo : 4771,
plygnLo : 126.795555504829,
plygnLa : 37.5847950908213
},
{
setSeqNo : 1,
plygnSeqNo : 4772,
plygnLo : 126.795571172278,
plygnLa : 37.5846968576022
},
{
setSeqNo : 1,
plygnSeqNo : 4773,
plygnLo : 126.795585382081,
plygnLa : 37.5846095941124
},
{
setSeqNo : 1,
plygnSeqNo : 4774,
plygnLo : 126.795594041835,
plygnLa : 37.5845490724183
},
{
setSeqNo : 1,
plygnSeqNo : 4775,
plygnLo : 126.795597538698,
plygnLa : 37.5844998119199
},
{
setSeqNo : 1,
plygnSeqNo : 4776,
plygnLo : 126.795607535303,
plygnLa : 37.5843401853339
},
{
setSeqNo : 1,
plygnSeqNo : 4777,
plygnLo : 126.795608607514,
plygnLa : 37.5843331395912
},
{
setSeqNo : 1,
plygnSeqNo : 4778,
plygnLo : 126.795616019264,
plygnLa : 37.5842148999542
},
{
setSeqNo : 1,
plygnSeqNo : 4779,
plygnLo : 126.795624167844,
plygnLa : 37.5840808924282
},
{
setSeqNo : 1,
plygnSeqNo : 4780,
plygnLo : 126.79562861166,
plygnLa : 37.584008821403
},
{
setSeqNo : 1,
plygnSeqNo : 4781,
plygnLo : 126.795630592749,
plygnLa : 37.5839964360013
},
{
setSeqNo : 1,
plygnSeqNo : 4782,
plygnLo : 126.795643328455,
plygnLa : 37.5838691949588
},
{
setSeqNo : 1,
plygnSeqNo : 4783,
plygnLo : 126.795659960099,
plygnLa : 37.5836101902906
},
{
setSeqNo : 1,
plygnSeqNo : 4784,
plygnLo : 126.795679916889,
plygnLa : 37.5833641473051
},
{
setSeqNo : 1,
plygnSeqNo : 4785,
plygnLo : 126.795721797253,
plygnLa : 37.583120676053
},
{
setSeqNo : 1,
plygnSeqNo : 4786,
plygnLo : 126.795811307213,
plygnLa : 37.5831855854413
},
{
setSeqNo : 1,
plygnSeqNo : 4787,
plygnLo : 126.795848197248,
plygnLa : 37.5832169050304
},
{
setSeqNo : 1,
plygnSeqNo : 4788,
plygnLo : 126.796080843724,
plygnLa : 37.5834676130515
},
{
setSeqNo : 1,
plygnSeqNo : 4789,
plygnLo : 126.796165126615,
plygnLa : 37.5835640575737
},
{
setSeqNo : 1,
plygnSeqNo : 4790,
plygnLo : 126.796269821137,
plygnLa : 37.5837069828052
},
{
setSeqNo : 1,
plygnSeqNo : 4791,
plygnLo : 126.796299805173,
plygnLa : 37.5837382885852
},
{
setSeqNo : 1,
plygnSeqNo : 4792,
plygnLo : 126.796326108817,
plygnLa : 37.5837574816155
},
{
setSeqNo : 1,
plygnSeqNo : 4793,
plygnLo : 126.796540555473,
plygnLa : 37.5838704768057
},
{
setSeqNo : 1,
plygnSeqNo : 4794,
plygnLo : 126.79664139226,
plygnLa : 37.5839342884376
},
{
setSeqNo : 1,
plygnSeqNo : 4795,
plygnLo : 126.79670890304,
plygnLa : 37.583954397534
},
{
setSeqNo : 1,
plygnSeqNo : 4796,
plygnLo : 126.796871597754,
plygnLa : 37.5840397064404
},
{
setSeqNo : 1,
plygnSeqNo : 4797,
plygnLo : 126.796931426846,
plygnLa : 37.5840918951582
},
{
setSeqNo : 1,
plygnSeqNo : 4798,
plygnLo : 126.79696303294,
plygnLa : 37.5841130703982
},
{
setSeqNo : 1,
plygnSeqNo : 4799,
plygnLo : 126.797022849904,
plygnLa : 37.5841658267335
},
{
setSeqNo : 1,
plygnSeqNo : 4800,
plygnLo : 126.797035022686,
plygnLa : 37.5841810471139
},
{
setSeqNo : 1,
plygnSeqNo : 4801,
plygnLo : 126.797022628204,
plygnLa : 37.5841844033704
},
{
setSeqNo : 1,
plygnSeqNo : 4802,
plygnLo : 126.797037077201,
plygnLa : 37.5842044218047
},
{
setSeqNo : 1,
plygnSeqNo : 4803,
plygnLo : 126.797052783137,
plygnLa : 37.5842199371906
},
{
setSeqNo : 1,
plygnSeqNo : 4804,
plygnLo : 126.797097391119,
plygnLa : 37.584273226761
},
{
setSeqNo : 1,
plygnSeqNo : 4805,
plygnLo : 126.796931620234,
plygnLa : 37.5844058351746
},
{
setSeqNo : 1,
plygnSeqNo : 4806,
plygnLo : 126.796894392332,
plygnLa : 37.5844356099188
},
{
setSeqNo : 1,
plygnSeqNo : 4807,
plygnLo : 126.796772594779,
plygnLa : 37.5845347960034
},
{
setSeqNo : 1,
plygnSeqNo : 4808,
plygnLo : 126.796684199538,
plygnLa : 37.5845788454219
},
{
setSeqNo : 1,
plygnSeqNo : 4809,
plygnLo : 126.796557057822,
plygnLa : 37.5846895637593
},
{
setSeqNo : 1,
plygnSeqNo : 4810,
plygnLo : 126.796416990444,
plygnLa : 37.5848039067471
},
{
setSeqNo : 1,
plygnSeqNo : 4811,
plygnLo : 126.796366645853,
plygnLa : 37.5848440836973
},
{
setSeqNo : 1,
plygnSeqNo : 4812,
plygnLo : 126.79629430765,
plygnLa : 37.5849033698179
},
{
setSeqNo : 1,
plygnSeqNo : 4813,
plygnLo : 126.796364169571,
plygnLa : 37.5849707769651
},
{
setSeqNo : 1,
plygnSeqNo : 4814,
plygnLo : 126.796428923397,
plygnLa : 37.5850308676761
},
{
setSeqNo : 1,
plygnSeqNo : 4815,
plygnLo : 126.796577750454,
plygnLa : 37.5849517215099
},
{
setSeqNo : 1,
plygnSeqNo : 4816,
plygnLo : 126.796628754266,
plygnLa : 37.5849312585245
},
{
setSeqNo : 1,
plygnSeqNo : 4817,
plygnLo : 126.796685243107,
plygnLa : 37.5849085534042
},
{
setSeqNo : 1,
plygnSeqNo : 4818,
plygnLo : 126.796932075564,
plygnLa : 37.5851454891652
},
{
setSeqNo : 1,
plygnSeqNo : 4819,
plygnLo : 126.797036356329,
plygnLa : 37.5852456159199
},
{
setSeqNo : 1,
plygnSeqNo : 4820,
plygnLo : 126.79709454766,
plygnLa : 37.5853132920104
},
{
setSeqNo : 1,
plygnSeqNo : 4821,
plygnLo : 126.797156063208,
plygnLa : 37.5853936486013
},
{
setSeqNo : 1,
plygnSeqNo : 4822,
plygnLo : 126.79718669598,
plygnLa : 37.5853835644414
},
{
setSeqNo : 1,
plygnSeqNo : 4823,
plygnLo : 126.797196223339,
plygnLa : 37.5853937182905
},
{
setSeqNo : 1,
plygnSeqNo : 4824,
plygnLo : 126.797227562105,
plygnLa : 37.5853855995437
},
{
setSeqNo : 1,
plygnSeqNo : 4825,
plygnLo : 126.79724940539,
plygnLa : 37.5854171718335
},
{
setSeqNo : 1,
plygnSeqNo : 4826,
plygnLo : 126.79727336146,
plygnLa : 37.5854543883979
},
{
setSeqNo : 1,
plygnSeqNo : 4827,
plygnLo : 126.797291510069,
plygnLa : 37.5854797557509
},
{
setSeqNo : 1,
plygnSeqNo : 4828,
plygnLo : 126.797356293214,
plygnLa : 37.5855998061001
},
{
setSeqNo : 1,
plygnSeqNo : 4829,
plygnLo : 126.797391668349,
plygnLa : 37.5856637824636
},
{
setSeqNo : 1,
plygnSeqNo : 4830,
plygnLo : 126.797430703645,
plygnLa : 37.5857516970346
},
{
setSeqNo : 1,
plygnSeqNo : 4831,
plygnLo : 126.79747869023,
plygnLa : 37.5858618714912
},
{
setSeqNo : 1,
plygnSeqNo : 4832,
plygnLo : 126.797503838026,
plygnLa : 37.5859193515046
},
{
setSeqNo : 1,
plygnSeqNo : 4833,
plygnLo : 126.797525962141,
plygnLa : 37.5859768283705
},
{
setSeqNo : 1,
plygnSeqNo : 4834,
plygnLo : 126.797556352661,
plygnLa : 37.5861874852713
},
{
setSeqNo : 1,
plygnSeqNo : 4835,
plygnLo : 126.797575874596,
plygnLa : 37.5862947902321
},
{
setSeqNo : 1,
plygnSeqNo : 4836,
plygnLo : 126.797598567593,
plygnLa : 37.586405479765
},
{
setSeqNo : 1,
plygnSeqNo : 4837,
plygnLo : 126.797607215342,
plygnLa : 37.5864145049763
},
{
setSeqNo : 1,
plygnSeqNo : 4838,
plygnLo : 126.797632925695,
plygnLa : 37.5864565086973
},
{
setSeqNo : 1,
plygnSeqNo : 4839,
plygnLo : 126.797637328238,
plygnLa : 37.5864655245986
},
{
setSeqNo : 1,
plygnSeqNo : 4840,
plygnLo : 126.7976706261,
plygnLa : 37.5865151377731
},
{
setSeqNo : 1,
plygnSeqNo : 4841,
plygnLo : 126.797719239226,
plygnLa : 37.5865912362855
},
{
setSeqNo : 1,
plygnSeqNo : 4842,
plygnLo : 126.797772260858,
plygnLa : 37.5866741105724
},
{
setSeqNo : 1,
plygnSeqNo : 4843,
plygnLo : 126.797804342657,
plygnLa : 37.5867166841388
},
{
setSeqNo : 1,
plygnSeqNo : 4844,
plygnLo : 126.7978818891,
plygnLa : 37.5868240888656
},
{
setSeqNo : 1,
plygnSeqNo : 4845,
plygnLo : 126.797930139557,
plygnLa : 37.5869046923613
},
{
setSeqNo : 1,
plygnSeqNo : 4846,
plygnLo : 126.797975634182,
plygnLa : 37.5869619291031
},
{
setSeqNo : 1,
plygnSeqNo : 4847,
plygnLo : 126.798029034436,
plygnLa : 37.5870349466125
},
{
setSeqNo : 1,
plygnSeqNo : 4848,
plygnLo : 126.798086325213,
plygnLa : 37.5871090979494
},
{
setSeqNo : 1,
plygnSeqNo : 4849,
plygnLo : 126.798155915796,
plygnLa : 37.5872153626188
},
{
setSeqNo : 1,
plygnSeqNo : 4850,
plygnLo : 126.798259166403,
plygnLa : 37.5873673018102
},
{
setSeqNo : 1,
plygnSeqNo : 4851,
plygnLo : 126.79838765835,
plygnLa : 37.5875432149571
},
{
setSeqNo : 1,
plygnSeqNo : 4852,
plygnLo : 126.798500295429,
plygnLa : 37.5876912240241
},
{
setSeqNo : 1,
plygnSeqNo : 4853,
plygnLo : 126.798521095404,
plygnLa : 37.5877196948297
},
{
setSeqNo : 1,
plygnSeqNo : 4854,
plygnLo : 126.798564946418,
plygnLa : 37.5877943805519
},
{
setSeqNo : 1,
plygnSeqNo : 4855,
plygnLo : 126.798603552793,
plygnLa : 37.5878459752211
},
{
setSeqNo : 1,
plygnSeqNo : 4856,
plygnLo : 126.798638433839,
plygnLa : 37.5878961559078
},
{
setSeqNo : 1,
plygnSeqNo : 4857,
plygnLo : 126.798698892511,
plygnLa : 37.5879807271058
},
{
setSeqNo : 1,
plygnSeqNo : 4858,
plygnLo : 126.798708940021,
plygnLa : 37.5879917184709
},
{
setSeqNo : 1,
plygnSeqNo : 4859,
plygnLo : 126.798768159223,
plygnLa : 37.5880729094111
},
{
setSeqNo : 1,
plygnSeqNo : 4860,
plygnLo : 126.798811419501,
plygnLa : 37.58810339175
},
{
setSeqNo : 1,
plygnSeqNo : 4861,
plygnLo : 126.79885557595,
plygnLa : 37.5881327488761
},
{
setSeqNo : 1,
plygnSeqNo : 4862,
plygnLo : 126.798962673139,
plygnLa : 37.5881695396738
},
{
setSeqNo : 1,
plygnSeqNo : 4863,
plygnLo : 126.799021943963,
plygnLa : 37.5881696408332
},
{
setSeqNo : 1,
plygnSeqNo : 4864,
plygnLo : 126.799054723984,
plygnLa : 37.5881482989514
},
{
setSeqNo : 1,
plygnSeqNo : 4865,
plygnLo : 126.79906479679,
plygnLa : 37.5881539470074
},
{
setSeqNo : 1,
plygnSeqNo : 4866,
plygnLo : 126.799070819693,
plygnLa : 37.5881497324572
},
{
setSeqNo : 1,
plygnSeqNo : 4867,
plygnLo : 126.799127159266,
plygnLa : 37.5881869946057
},
{
setSeqNo : 1,
plygnSeqNo : 4868,
plygnLo : 126.799140044785,
plygnLa : 37.5881951795105
},
{
setSeqNo : 1,
plygnSeqNo : 4869,
plygnLo : 126.799241192942,
plygnLa : 37.5881469256323
},
{
setSeqNo : 1,
plygnSeqNo : 4870,
plygnLo : 126.799320724652,
plygnLa : 37.5881115897181
},
{
setSeqNo : 1,
plygnSeqNo : 4871,
plygnLo : 126.799379352673,
plygnLa : 37.5880857861314
},
{
setSeqNo : 1,
plygnSeqNo : 4872,
plygnLo : 126.799389441618,
plygnLa : 37.5880810114605
},
{
setSeqNo : 1,
plygnSeqNo : 4873,
plygnLo : 126.799448931104,
plygnLa : 37.5880633813079
},
{
setSeqNo : 1,
plygnSeqNo : 4874,
plygnLo : 126.799508932482,
plygnLa : 37.5880525009784
},
{
setSeqNo : 1,
plygnSeqNo : 4875,
plygnLo : 126.7995751242,
plygnLa : 37.5880441725556
},
{
setSeqNo : 1,
plygnSeqNo : 4876,
plygnLo : 126.799697051545,
plygnLa : 37.5880317044285
},
{
setSeqNo : 1,
plygnSeqNo : 4877,
plygnLo : 126.799807111585,
plygnLa : 37.5880203513098
},
{
setSeqNo : 1,
plygnSeqNo : 4878,
plygnLo : 126.799977535267,
plygnLa : 37.587998396385
},
{
setSeqNo : 1,
plygnSeqNo : 4879,
plygnLo : 126.800038944572,
plygnLa : 37.5879903386095
},
{
setSeqNo : 1,
plygnSeqNo : 4880,
plygnLo : 126.800087441435,
plygnLa : 37.5879802842736
},
{
setSeqNo : 1,
plygnSeqNo : 4881,
plygnLo : 126.800151158277,
plygnLa : 37.5879691318787
},
{
setSeqNo : 1,
plygnSeqNo : 4882,
plygnLo : 126.800228346834,
plygnLa : 37.5879509642705
},
{
setSeqNo : 1,
plygnSeqNo : 4883,
plygnLo : 126.800272244672,
plygnLa : 37.5879414613309
},
{
setSeqNo : 1,
plygnSeqNo : 4884,
plygnLo : 126.800309957269,
plygnLa : 37.587928856925
},
{
setSeqNo : 1,
plygnSeqNo : 4885,
plygnLo : 126.800327670662,
plygnLa : 37.5879229770453
},
{
setSeqNo : 1,
plygnSeqNo : 4886,
plygnLo : 126.800377104091,
plygnLa : 37.5878932125203
},
{
setSeqNo : 1,
plygnSeqNo : 4887,
plygnLo : 126.800399428515,
plygnLa : 37.5878814289907
},
{
setSeqNo : 1,
plygnSeqNo : 4888,
plygnLo : 126.800441963372,
plygnLa : 37.5878488420824
},
{
setSeqNo : 1,
plygnSeqNo : 4889,
plygnLo : 126.800485443995,
plygnLa : 37.5878013252363
},
{
setSeqNo : 1,
plygnSeqNo : 4890,
plygnLo : 126.800498019576,
plygnLa : 37.5877940307499
},
{
setSeqNo : 1,
plygnSeqNo : 4891,
plygnLo : 126.800519210535,
plygnLa : 37.587808139583
},
{
setSeqNo : 1,
plygnSeqNo : 4892,
plygnLo : 126.800539332302,
plygnLa : 37.5878245097193
},
{
setSeqNo : 1,
plygnSeqNo : 4893,
plygnLo : 126.800569888432,
plygnLa : 37.5878417349744
},
{
setSeqNo : 1,
plygnSeqNo : 4894,
plygnLo : 126.800593046741,
plygnLa : 37.5878482520813
},
{
setSeqNo : 1,
plygnSeqNo : 4895,
plygnLo : 126.800617628645,
plygnLa : 37.587852239311
},
{
setSeqNo : 1,
plygnSeqNo : 4896,
plygnLo : 126.800661338872,
plygnLa : 37.5878497723998
},
{
setSeqNo : 1,
plygnSeqNo : 4897,
plygnLo : 126.800701688845,
plygnLa : 37.5878419591884
},
{
setSeqNo : 1,
plygnSeqNo : 4898,
plygnLo : 126.800738153363,
plygnLa : 37.5878349844506
},
{
setSeqNo : 1,
plygnSeqNo : 4899,
plygnLo : 126.800739023204,
plygnLa : 37.5878397702489
},
{
setSeqNo : 1,
plygnSeqNo : 4900,
plygnLo : 126.8007987307,
plygnLa : 37.5879392670573
},
{
setSeqNo : 1,
plygnSeqNo : 4901,
plygnLo : 126.800824448089,
plygnLa : 37.5879792874487
},
{
setSeqNo : 1,
plygnSeqNo : 4902,
plygnLo : 126.800940349694,
plygnLa : 37.588166159439
},
{
setSeqNo : 1,
plygnSeqNo : 4903,
plygnLo : 126.80093680947,
plygnLa : 37.5881689650482
},
{
setSeqNo : 1,
plygnSeqNo : 4904,
plygnLo : 126.800933426831,
plygnLa : 37.5881762832211
},
{
setSeqNo : 1,
plygnSeqNo : 4905,
plygnLo : 126.800940819112,
plygnLa : 37.5881898112823
},
{
setSeqNo : 1,
plygnSeqNo : 4906,
plygnLo : 126.80090501715,
plygnLa : 37.5882153663042
},
{
setSeqNo : 1,
plygnSeqNo : 4907,
plygnLo : 126.800821702792,
plygnLa : 37.588276607489
},
{
setSeqNo : 1,
plygnSeqNo : 4908,
plygnLo : 126.80086459681,
plygnLa : 37.5883127202575
},
{
setSeqNo : 1,
plygnSeqNo : 4909,
plygnLo : 126.800917602426,
plygnLa : 37.5884029081333
},
{
setSeqNo : 1,
plygnSeqNo : 4910,
plygnLo : 126.800956882588,
plygnLa : 37.5884688551116
},
{
setSeqNo : 1,
plygnSeqNo : 4911,
plygnLo : 126.800999177287,
plygnLa : 37.5885297438638
},
{
setSeqNo : 1,
plygnSeqNo : 4912,
plygnLo : 126.800955278196,
plygnLa : 37.5885400926169
},
{
setSeqNo : 1,
plygnSeqNo : 4913,
plygnLo : 126.800932788722,
plygnLa : 37.5885451191048
},
{
setSeqNo : 1,
plygnSeqNo : 4914,
plygnLo : 126.800900217586,
plygnLa : 37.5885526665428
},
{
setSeqNo : 1,
plygnSeqNo : 4915,
plygnLo : 126.800881757057,
plygnLa : 37.5885754404774
},
{
setSeqNo : 1,
plygnSeqNo : 4916,
plygnLo : 126.800873342695,
plygnLa : 37.5886145644152
},
{
setSeqNo : 1,
plygnSeqNo : 4917,
plygnLo : 126.800841115641,
plygnLa : 37.5887550091864
},
{
setSeqNo : 1,
plygnSeqNo : 4918,
plygnLo : 126.80083982906,
plygnLa : 37.5887741527494
},
{
setSeqNo : 1,
plygnSeqNo : 4919,
plygnLo : 126.800834183632,
plygnLa : 37.5888315816622
},
{
setSeqNo : 1,
plygnSeqNo : 4920,
plygnLo : 126.800825976175,
plygnLa : 37.5888608495611
},
{
setSeqNo : 1,
plygnSeqNo : 4921,
plygnLo : 126.800793283479,
plygnLa : 37.5889770742086
},
{
setSeqNo : 1,
plygnSeqNo : 4922,
plygnLo : 126.800787213314,
plygnLa : 37.5889984631265
},
{
setSeqNo : 1,
plygnSeqNo : 4923,
plygnLo : 126.800781358114,
plygnLa : 37.5890035243097
},
{
setSeqNo : 1,
plygnSeqNo : 4924,
plygnLo : 126.800773646959,
plygnLa : 37.5890415152809
},
{
setSeqNo : 1,
plygnSeqNo : 4925,
plygnLo : 126.800782667795,
plygnLa : 37.5890426574316
},
{
setSeqNo : 1,
plygnSeqNo : 4926,
plygnLo : 126.800862336704,
plygnLa : 37.5890236464545
},
{
setSeqNo : 1,
plygnSeqNo : 4927,
plygnLo : 126.800940047826,
plygnLa : 37.589004920899
},
{
setSeqNo : 1,
plygnSeqNo : 4928,
plygnLo : 126.801098660393,
plygnLa : 37.5889671782508
},
{
setSeqNo : 1,
plygnSeqNo : 4929,
plygnLo : 126.801117792147,
plygnLa : 37.5890235221435
},
{
setSeqNo : 1,
plygnSeqNo : 4930,
plygnLo : 126.801125927041,
plygnLa : 37.5890252196063
},
{
setSeqNo : 1,
plygnSeqNo : 4931,
plygnLo : 126.801142728387,
plygnLa : 37.5890933901796
},
{
setSeqNo : 1,
plygnSeqNo : 4932,
plygnLo : 126.801147390904,
plygnLa : 37.5891364743906
},
{
setSeqNo : 1,
plygnSeqNo : 4933,
plygnLo : 126.801159876265,
plygnLa : 37.5891632456544
},
{
setSeqNo : 1,
plygnSeqNo : 4934,
plygnLo : 126.801165663105,
plygnLa : 37.5891832392438
},
{
setSeqNo : 1,
plygnSeqNo : 4935,
plygnLo : 126.8011850978,
plygnLa : 37.5892573250128
},
{
setSeqNo : 1,
plygnSeqNo : 4936,
plygnLo : 126.801196512082,
plygnLa : 37.5892908504986
},
{
setSeqNo : 1,
plygnSeqNo : 4937,
plygnLo : 126.80121025318,
plygnLa : 37.5893136775956
},
{
setSeqNo : 1,
plygnSeqNo : 4938,
plygnLo : 126.801227310858,
plygnLa : 37.5893489000874
},
{
setSeqNo : 1,
plygnSeqNo : 4939,
plygnLo : 126.801207632009,
plygnLa : 37.5893657683454
},
{
setSeqNo : 1,
plygnSeqNo : 4940,
plygnLo : 126.80116437417,
plygnLa : 37.5893983550895
},
{
setSeqNo : 1,
plygnSeqNo : 4941,
plygnLo : 126.801107655427,
plygnLa : 37.5894379577098
},
{
setSeqNo : 1,
plygnSeqNo : 4942,
plygnLo : 126.801090263156,
plygnLa : 37.5894598852944
},
{
setSeqNo : 1,
plygnSeqNo : 4943,
plygnLo : 126.801028480105,
plygnLa : 37.5895386151558
},
{
setSeqNo : 1,
plygnSeqNo : 4944,
plygnLo : 126.801004879314,
plygnLa : 37.5895701101581
},
{
setSeqNo : 1,
plygnSeqNo : 4945,
plygnLo : 126.800970356634,
plygnLa : 37.5896421297311
},
{
setSeqNo : 1,
plygnSeqNo : 4946,
plygnLo : 126.800964130843,
plygnLa : 37.5896545082288
},
{
setSeqNo : 1,
plygnSeqNo : 4947,
plygnLo : 126.80096175259,
plygnLa : 37.5896837853504
},
{
setSeqNo : 1,
plygnSeqNo : 4948,
plygnLo : 126.800959378024,
plygnLa : 37.5897122246433
},
{
setSeqNo : 1,
plygnSeqNo : 4949,
plygnLo : 126.80091618072,
plygnLa : 37.5897256676225
},
{
setSeqNo : 1,
plygnSeqNo : 4950,
plygnLo : 126.800880401107,
plygnLa : 37.5897385537792
},
{
setSeqNo : 1,
plygnSeqNo : 4951,
plygnLo : 126.800863735643,
plygnLa : 37.5897554183718
},
{
setSeqNo : 1,
plygnSeqNo : 4952,
plygnLo : 126.800820989386,
plygnLa : 37.5897947641828
},
{
setSeqNo : 1,
plygnSeqNo : 4953,
plygnLo : 126.800798056691,
plygnLa : 37.5898347109198
},
{
setSeqNo : 1,
plygnSeqNo : 4954,
plygnLo : 126.800753887458,
plygnLa : 37.5898810899601
},
{
setSeqNo : 1,
plygnSeqNo : 4955,
plygnLo : 126.800705771513,
plygnLa : 37.589947177169
},
{
setSeqNo : 1,
plygnSeqNo : 4956,
plygnLo : 126.800687124763,
plygnLa : 37.5899716333655
},
{
setSeqNo : 1,
plygnSeqNo : 4957,
plygnLo : 126.800663521436,
plygnLa : 37.5899997488228
},
{
setSeqNo : 1,
plygnSeqNo : 4958,
plygnLo : 126.800647504896,
plygnLa : 37.5900312562295
},
{
setSeqNo : 1,
plygnSeqNo : 4959,
plygnLo : 126.800627776629,
plygnLa : 37.5900672615211
},
{
setSeqNo : 1,
plygnSeqNo : 4960,
plygnLo : 126.800602848412,
plygnLa : 37.5901246570185
},
{
setSeqNo : 1,
plygnSeqNo : 4961,
plygnLo : 126.800594510003,
plygnLa : 37.5901345006235
},
{
setSeqNo : 1,
plygnSeqNo : 4962,
plygnLo : 126.800520276439,
plygnLa : 37.5903089392779
},
{
setSeqNo : 1,
plygnSeqNo : 4963,
plygnLo : 126.800380286152,
plygnLa : 37.5903247466426
},
{
setSeqNo : 1,
plygnSeqNo : 4964,
plygnLo : 126.800322787057,
plygnLa : 37.5903266228313
},
{
setSeqNo : 1,
plygnSeqNo : 4965,
plygnLo : 126.800226355165,
plygnLa : 37.5903301166143
},
{
setSeqNo : 1,
plygnSeqNo : 4966,
plygnLo : 126.800170620349,
plygnLa : 37.5903319943868
},
{
setSeqNo : 1,
plygnSeqNo : 4967,
plygnLo : 126.800141076885,
plygnLa : 37.59033307021
},
{
setSeqNo : 1,
plygnSeqNo : 4968,
plygnLo : 126.800087075887,
plygnLa : 37.5903515644937
},
{
setSeqNo : 1,
plygnSeqNo : 4969,
plygnLo : 126.800041846772,
plygnLa : 37.5903917424944
},
{
setSeqNo : 1,
plygnSeqNo : 4970,
plygnLo : 126.800024447144,
plygnLa : 37.5904156530968
},
{
setSeqNo : 1,
plygnSeqNo : 4971,
plygnLo : 126.800000463437,
plygnLa : 37.5904502373588
},
{
setSeqNo : 1,
plygnSeqNo : 4972,
plygnLo : 126.799984136578,
plygnLa : 37.5904707704583
},
{
setSeqNo : 1,
plygnSeqNo : 4973,
plygnLo : 126.79995661152,
plygnLa : 37.5905092941042
},
{
setSeqNo : 1,
plygnSeqNo : 4974,
plygnLo : 126.799941173595,
plygnLa : 37.590527845945
},
{
setSeqNo : 1,
plygnSeqNo : 4975,
plygnLo : 126.799896626493,
plygnLa : 37.5905801440292
},
{
setSeqNo : 1,
plygnSeqNo : 4976,
plygnLo : 126.799753028974,
plygnLa : 37.5907536172844
},
{
setSeqNo : 1,
plygnSeqNo : 4977,
plygnLo : 126.79966821316,
plygnLa : 37.5908494811308
},
{
setSeqNo : 1,
plygnSeqNo : 4978,
plygnLo : 126.799539328441,
plygnLa : 37.5910125630593
},
{
setSeqNo : 1,
plygnSeqNo : 4979,
plygnLo : 126.799466165422,
plygnLa : 37.5911121141236
},
{
setSeqNo : 1,
plygnSeqNo : 4980,
plygnLo : 126.799449652013,
plygnLa : 37.5911348900245
},
{
setSeqNo : 1,
plygnSeqNo : 4981,
plygnLo : 126.799382582528,
plygnLa : 37.5911406858472
},
{
setSeqNo : 1,
plygnSeqNo : 4982,
plygnLo : 126.799382550991,
plygnLa : 37.5911522356691
},
{
setSeqNo : 1,
plygnSeqNo : 4983,
plygnLo : 126.799333874499,
plygnLa : 37.5911611619655
},
{
setSeqNo : 1,
plygnSeqNo : 4984,
plygnLo : 126.799267494413,
plygnLa : 37.5911765263999
},
{
setSeqNo : 1,
plygnSeqNo : 4985,
plygnLo : 126.799145924735,
plygnLa : 37.5911887084603
},
{
setSeqNo : 1,
plygnSeqNo : 4986,
plygnLo : 126.79909371229,
plygnLa : 37.5911936906737
},
{
setSeqNo : 1,
plygnSeqNo : 4987,
plygnLo : 126.799014732548,
plygnLa : 37.5912203051471
},
{
setSeqNo : 1,
plygnSeqNo : 4988,
plygnLo : 126.79892280031,
plygnLa : 37.5912635028103
},
{
setSeqNo : 1,
plygnSeqNo : 4989,
plygnLo : 126.798905265617,
plygnLa : 37.5912707984715
},
{
setSeqNo : 1,
plygnSeqNo : 4990,
plygnLo : 126.798873383888,
plygnLa : 37.5912865106352
},
{
setSeqNo : 1,
plygnSeqNo : 4991,
plygnLo : 126.798801273905,
plygnLa : 37.5913227050513
},
{
setSeqNo : 1,
plygnSeqNo : 4992,
plygnLo : 126.798803520333,
plygnLa : 37.591408302336
},
{
setSeqNo : 1,
plygnSeqNo : 4993,
plygnLo : 126.798832969303,
plygnLa : 37.5915088658099
},
{
setSeqNo : 1,
plygnSeqNo : 4994,
plygnLo : 126.798853133618,
plygnLa : 37.5915764757141
},
{
setSeqNo : 1,
plygnSeqNo : 4995,
plygnLo : 126.79888751196,
plygnLa : 37.5916880309226
},
{
setSeqNo : 1,
plygnSeqNo : 4996,
plygnLo : 126.798922237696,
plygnLa : 37.5917970553782
},
{
setSeqNo : 1,
plygnSeqNo : 4997,
plygnLo : 126.798935217964,
plygnLa : 37.5918415594366
},
{
setSeqNo : 1,
plygnSeqNo : 4998,
plygnLo : 126.798977469975,
plygnLa : 37.591980724063
},
{
setSeqNo : 1,
plygnSeqNo : 4999,
plygnLo : 126.79898088386,
plygnLa : 37.5920246541718
},
{
setSeqNo : 1,
plygnSeqNo : 5000,
plygnLo : 126.79898616534,
plygnLa : 37.5921020939689
},
{
setSeqNo : 1,
plygnSeqNo : 5001,
plygnLo : 126.798978549126,
plygnLa : 37.5921716188887
},
{
setSeqNo : 1,
plygnSeqNo : 5002,
plygnLo : 126.798977750713,
plygnLa : 37.5922031520743
},
{
setSeqNo : 1,
plygnSeqNo : 5003,
plygnLo : 126.798990094144,
plygnLa : 37.592219227607
},
{
setSeqNo : 1,
plygnSeqNo : 5004,
plygnLo : 126.799052150226,
plygnLa : 37.5923007020253
},
{
setSeqNo : 1,
plygnSeqNo : 5005,
plygnLo : 126.798997708913,
plygnLa : 37.5924137899087
},
{
setSeqNo : 1,
plygnSeqNo : 5006,
plygnLo : 126.798996817511,
plygnLa : 37.5924163212697
},
{
setSeqNo : 1,
plygnSeqNo : 5007,
plygnLo : 126.798992715237,
plygnLa : 37.592426170111
},
{
setSeqNo : 1,
plygnSeqNo : 5008,
plygnLo : 126.798996608573,
plygnLa : 37.5924270239332
},
{
setSeqNo : 1,
plygnSeqNo : 5009,
plygnLo : 126.799014115573,
plygnLa : 37.5924301530843
},
{
setSeqNo : 1,
plygnSeqNo : 5010,
plygnLo : 126.799028088035,
plygnLa : 37.592430735038
},
{
setSeqNo : 1,
plygnSeqNo : 5011,
plygnLo : 126.799075313999,
plygnLa : 37.592435322486
},
{
setSeqNo : 1,
plygnSeqNo : 5012,
plygnLo : 126.79934836353,
plygnLa : 37.5924771808818
},
{
setSeqNo : 1,
plygnSeqNo : 5013,
plygnLo : 126.799363578565,
plygnLa : 37.5924783329566
},
{
setSeqNo : 1,
plygnSeqNo : 5014,
plygnLo : 126.799440011939,
plygnLa : 37.5924764898618
},
{
setSeqNo : 1,
plygnSeqNo : 5015,
plygnLo : 126.799476647666,
plygnLa : 37.5924697960119
},
{
setSeqNo : 1,
plygnSeqNo : 5016,
plygnLo : 126.799549218084,
plygnLa : 37.5924564057681
},
{
setSeqNo : 1,
plygnSeqNo : 5017,
plygnLo : 126.79961153024,
plygnLa : 37.592442997516
},
{
setSeqNo : 1,
plygnSeqNo : 5018,
plygnLo : 126.799616317013,
plygnLa : 37.5924396261099
},
{
setSeqNo : 1,
plygnSeqNo : 5019,
plygnLo : 126.799636173274,
plygnLa : 37.5924244612898
},
{
setSeqNo : 1,
plygnSeqNo : 5020,
plygnLo : 126.799651952533,
plygnLa : 37.5924135060848
},
{
setSeqNo : 1,
plygnSeqNo : 5021,
plygnLo : 126.799860758119,
plygnLa : 37.5922663255336
},
{
setSeqNo : 1,
plygnSeqNo : 5022,
plygnLo : 126.799910391578,
plygnLa : 37.592230371797
},
{
setSeqNo : 1,
plygnSeqNo : 5023,
plygnLo : 126.799974472161,
plygnLa : 37.5921536174155
},
{
setSeqNo : 1,
plygnSeqNo : 5024,
plygnLo : 126.800013166145,
plygnLa : 37.5921049677355
},
{
setSeqNo : 1,
plygnSeqNo : 5025,
plygnLo : 126.800049822356,
plygnLa : 37.5920284473056
},
{
setSeqNo : 1,
plygnSeqNo : 5026,
plygnLo : 126.800085898842,
plygnLa : 37.5920316088525
},
{
setSeqNo : 1,
plygnSeqNo : 5027,
plygnLo : 126.800153463896,
plygnLa : 37.5920390484323
},
{
setSeqNo : 1,
plygnSeqNo : 5028,
plygnLo : 126.800224211989,
plygnLa : 37.5920464859405
},
{
setSeqNo : 1,
plygnSeqNo : 5029,
plygnLo : 126.800287212112,
plygnLa : 37.5920418081416
},
{
setSeqNo : 1,
plygnSeqNo : 5030,
plygnLo : 126.80033855483,
plygnLa : 37.5921576186411
},
{
setSeqNo : 1,
plygnSeqNo : 5031,
plygnLo : 126.800340633525,
plygnLa : 37.5921722633572
},
{
setSeqNo : 1,
plygnSeqNo : 5032,
plygnLo : 126.80034783407,
plygnLa : 37.5921936731433
},
{
setSeqNo : 1,
plygnSeqNo : 5033,
plygnLo : 126.800400232635,
plygnLa : 37.5923798698252
},
{
setSeqNo : 1,
plygnSeqNo : 5034,
plygnLo : 126.800406869094,
plygnLa : 37.592413388505
},
{
setSeqNo : 1,
plygnSeqNo : 5035,
plygnLo : 126.800424385741,
plygnLa : 37.5924131297955
},
{
setSeqNo : 1,
plygnSeqNo : 5036,
plygnLo : 126.800427358286,
plygnLa : 37.5924232802835
},
{
setSeqNo : 1,
plygnSeqNo : 5037,
plygnLo : 126.800450213846,
plygnLa : 37.5924131745069
},
{
setSeqNo : 1,
plygnSeqNo : 5038,
plygnLo : 126.800501516784,
plygnLa : 37.5924132623689
},
{
setSeqNo : 1,
plygnSeqNo : 5039,
plygnLo : 126.800436166945,
plygnLa : 37.5924401890684
},
{
setSeqNo : 1,
plygnSeqNo : 5040,
plygnLo : 126.800414923626,
plygnLa : 37.5924454946004
},
{
setSeqNo : 1,
plygnSeqNo : 5041,
plygnLo : 126.800386068048,
plygnLa : 37.5924513574002
},
{
setSeqNo : 1,
plygnSeqNo : 5042,
plygnLo : 126.800344251857,
plygnLa : 37.5924726928258
},
{
setSeqNo : 1,
plygnSeqNo : 5043,
plygnLo : 126.800277810301,
plygnLa : 37.5925100253007
},
{
setSeqNo : 1,
plygnSeqNo : 5044,
plygnLo : 126.800200544669,
plygnLa : 37.5925557804361
},
{
setSeqNo : 1,
plygnSeqNo : 5045,
plygnLo : 126.800093323597,
plygnLa : 37.5926248644463
},
{
setSeqNo : 1,
plygnSeqNo : 5046,
plygnLo : 126.799985705865,
plygnLa : 37.5927114000204
},
{
setSeqNo : 1,
plygnSeqNo : 5047,
plygnLo : 126.799903259015,
plygnLa : 37.5927760212377
},
{
setSeqNo : 1,
plygnSeqNo : 5048,
plygnLo : 126.799789257901,
plygnLa : 37.5928647990583
},
{
setSeqNo : 1,
plygnSeqNo : 5049,
plygnLo : 126.799675429495,
plygnLa : 37.592956955597
},
{
setSeqNo : 1,
plygnSeqNo : 5050,
plygnLo : 126.799596183925,
plygnLa : 37.5930187624142
},
{
setSeqNo : 1,
plygnSeqNo : 5051,
plygnLo : 126.799534461727,
plygnLa : 37.5930738427472
},
{
setSeqNo : 1,
plygnSeqNo : 5052,
plygnLo : 126.799463744297,
plygnLa : 37.5931213020514
},
{
setSeqNo : 1,
plygnSeqNo : 5053,
plygnLo : 126.799348008714,
plygnLa : 37.5931988145567
},
{
setSeqNo : 1,
plygnSeqNo : 5054,
plygnLo : 126.799192932451,
plygnLa : 37.5932976557511
},
{
setSeqNo : 1,
plygnSeqNo : 5055,
plygnLo : 126.799133180401,
plygnLa : 37.5933440081833
},
{
setSeqNo : 1,
plygnSeqNo : 5056,
plygnLo : 126.798975241802,
plygnLa : 37.5934549542304
},
{
setSeqNo : 1,
plygnSeqNo : 5057,
plygnLo : 126.798834859048,
plygnLa : 37.593551569467
},
{
setSeqNo : 1,
plygnSeqNo : 5058,
plygnLo : 126.798682974362,
plygnLa : 37.5936509746702
},
{
setSeqNo : 1,
plygnSeqNo : 5059,
plygnLo : 126.798659749814,
plygnLa : 37.5936675491003
},
{
setSeqNo : 1,
plygnSeqNo : 5060,
plygnLo : 126.798568755317,
plygnLa : 37.593752139496
},
{
setSeqNo : 1,
plygnSeqNo : 5061,
plygnLo : 126.798459498222,
plygnLa : 37.5938524650451
},
{
setSeqNo : 1,
plygnSeqNo : 5062,
plygnLo : 126.798349351387,
plygnLa : 37.5939553301073
},
{
setSeqNo : 1,
plygnSeqNo : 5063,
plygnLo : 126.798313526761,
plygnLa : 37.5939882086143
},
{
setSeqNo : 1,
plygnSeqNo : 5064,
plygnLo : 126.798221447295,
plygnLa : 37.5940837795027
},
{
setSeqNo : 1,
plygnSeqNo : 5065,
plygnLo : 126.798191453439,
plygnLa : 37.5941166766874
},
{
setSeqNo : 1,
plygnSeqNo : 5066,
plygnLo : 126.798168213377,
plygnLa : 37.5941394399011
},
{
setSeqNo : 1,
plygnSeqNo : 5067,
plygnLo : 126.79807947178,
plygnLa : 37.594240649012
},
{
setSeqNo : 1,
plygnSeqNo : 5068,
plygnLo : 126.797998324681,
plygnLa : 37.5943500319622
},
{
setSeqNo : 1,
plygnSeqNo : 5069,
plygnLo : 126.797922499785,
plygnLa : 37.5944521077648
},
{
setSeqNo : 1,
plygnSeqNo : 5070,
plygnLo : 126.797815266753,
plygnLa : 37.5945904483415
},
{
setSeqNo : 1,
plygnSeqNo : 5071,
plygnLo : 126.79771688165,
plygnLa : 37.5947226062792
},
{
setSeqNo : 1,
plygnSeqNo : 5072,
plygnLo : 126.797657569706,
plygnLa : 37.5948058451987
},
{
setSeqNo : 1,
plygnSeqNo : 5073,
plygnLo : 126.797608173875,
plygnLa : 37.5948823445814
},
{
setSeqNo : 1,
plygnSeqNo : 5074,
plygnLo : 126.797554492517,
plygnLa : 37.594972916093
},
{
setSeqNo : 1,
plygnSeqNo : 5075,
plygnLo : 126.797515375534,
plygnLa : 37.5950421076055
},
{
setSeqNo : 1,
plygnSeqNo : 5076,
plygnLo : 126.79749150326,
plygnLa : 37.5951048548393
},
{
setSeqNo : 1,
plygnSeqNo : 5077,
plygnLo : 126.797475599778,
plygnLa : 37.5951611387009
},
{
setSeqNo : 1,
plygnSeqNo : 5078,
plygnLo : 126.797453239897,
plygnLa : 37.5952511984785
},
{
setSeqNo : 1,
plygnSeqNo : 5079,
plygnLo : 126.7974452743,
plygnLa : 37.5953148215712
},
{
setSeqNo : 1,
plygnSeqNo : 5080,
plygnLo : 126.797442540517,
plygnLa : 37.5953457842733
},
{
setSeqNo : 1,
plygnSeqNo : 5081,
plygnLo : 126.797442070762,
plygnLa : 37.5954519281468
},
{
setSeqNo : 1,
plygnSeqNo : 5082,
plygnLo : 126.797444585324,
plygnLa : 37.5955670866247
},
{
setSeqNo : 1,
plygnSeqNo : 5083,
plygnLo : 126.797426028769,
plygnLa : 37.5956906610021
},
{
setSeqNo : 1,
plygnSeqNo : 5084,
plygnLo : 126.797413277728,
plygnLa : 37.5957615904963
},
{
setSeqNo : 1,
plygnSeqNo : 5085,
plygnLo : 126.797368756996,
plygnLa : 37.5959974642041
},
{
setSeqNo : 1,
plygnSeqNo : 5086,
plygnLo : 126.79736479791,
plygnLa : 37.5960199811479
},
{
setSeqNo : 1,
plygnSeqNo : 5087,
plygnLo : 126.797360161272,
plygnLa : 37.5960343350663
},
{
setSeqNo : 1,
plygnSeqNo : 5088,
plygnLo : 126.797339740296,
plygnLa : 37.5961274870837
},
{
setSeqNo : 1,
plygnSeqNo : 5089,
plygnLo : 126.797323560701,
plygnLa : 37.5962186833269
},
{
setSeqNo : 1,
plygnSeqNo : 5090,
plygnLo : 126.797314767956,
plygnLa : 37.5962656919234
},
{
setSeqNo : 1,
plygnSeqNo : 5091,
plygnLo : 126.797304183074,
plygnLa : 37.596319173141
},
{
setSeqNo : 1,
plygnSeqNo : 5092,
plygnLo : 126.797298259355,
plygnLa : 37.5963490044768
},
{
setSeqNo : 1,
plygnSeqNo : 5093,
plygnLo : 126.797292536315,
plygnLa : 37.5963709503308
},
{
setSeqNo : 1,
plygnSeqNo : 5094,
plygnLo : 126.797279805971,
plygnLa : 37.5964342853681
},
{
setSeqNo : 1,
plygnSeqNo : 5095,
plygnLo : 126.797269040519,
plygnLa : 37.5964874794376
},
{
setSeqNo : 1,
plygnSeqNo : 5096,
plygnLo : 126.797262028601,
plygnLa : 37.5965291370559
},
{
setSeqNo : 1,
plygnSeqNo : 5097,
plygnLo : 126.797249617762,
plygnLa : 37.5966042935519
},
{
setSeqNo : 1,
plygnSeqNo : 5098,
plygnLo : 126.797235562854,
plygnLa : 37.5966960525568
},
{
setSeqNo : 1,
plygnSeqNo : 5099,
plygnLo : 126.7972312725,
plygnLa : 37.5967121012828
},
{
setSeqNo : 1,
plygnSeqNo : 5100,
plygnLo : 126.797219498496,
plygnLa : 37.5968106212204
},
{
setSeqNo : 1,
plygnSeqNo : 5101,
plygnLo : 126.797204223321,
plygnLa : 37.5968978816838
},
{
setSeqNo : 1,
plygnSeqNo : 5102,
plygnLo : 126.797189659081,
plygnLa : 37.596985413741
},
{
setSeqNo : 1,
plygnSeqNo : 5103,
plygnLo : 126.797183504661,
plygnLa : 37.5970327042953
},
{
setSeqNo : 1,
plygnSeqNo : 5104,
plygnLo : 126.797180634057,
plygnLa : 37.5970479093203
},
{
setSeqNo : 1,
plygnSeqNo : 5105,
plygnLo : 126.797175330945,
plygnLa : 37.5971106878245
},
{
setSeqNo : 1,
plygnSeqNo : 5106,
plygnLo : 126.797168976948,
plygnLa : 37.5971700789656
},
{
setSeqNo : 1,
plygnSeqNo : 5107,
plygnLo : 126.797164455128,
plygnLa : 37.5972080842298
},
{
setSeqNo : 1,
plygnSeqNo : 5108,
plygnLo : 126.797147821615,
plygnLa : 37.5973361661968
},
{
setSeqNo : 1,
plygnSeqNo : 5109,
plygnLo : 126.797142043457,
plygnLa : 37.5973789523153
},
{
setSeqNo : 1,
plygnSeqNo : 5110,
plygnLo : 126.79714008029,
plygnLa : 37.5973848605812
},
{
setSeqNo : 1,
plygnSeqNo : 5111,
plygnLo : 126.797132004975,
plygnLa : 37.5974267962695
},
{
setSeqNo : 1,
plygnSeqNo : 5112,
plygnLo : 126.797116740281,
plygnLa : 37.5975098301195
},
{
setSeqNo : 1,
plygnSeqNo : 5113,
plygnLo : 126.797102545436,
plygnLa : 37.5975903358855
},
{
setSeqNo : 1,
plygnSeqNo : 5114,
plygnLo : 126.797091907385,
plygnLa : 37.5976629541525
},
{
setSeqNo : 1,
plygnSeqNo : 5115,
plygnLo : 126.797082492318,
plygnLa : 37.5977389635557
},
{
setSeqNo : 1,
plygnSeqNo : 5116,
plygnLo : 126.797114866088,
plygnLa : 37.5977432355847
},
{
setSeqNo : 1,
plygnSeqNo : 5117,
plygnLo : 126.79715183262,
plygnLa : 37.597745552285
},
{
setSeqNo : 1,
plygnSeqNo : 5118,
plygnLo : 126.797224201313,
plygnLa : 37.5977459656348
},
{
setSeqNo : 1,
plygnSeqNo : 5119,
plygnLo : 126.797312022431,
plygnLa : 37.5977221793704
},
{
setSeqNo : 1,
plygnSeqNo : 5120,
plygnLo : 126.797353813751,
plygnLa : 37.5977118354179
},
{
setSeqNo : 1,
plygnSeqNo : 5121,
plygnLo : 126.797411359443,
plygnLa : 37.5976953214498
},
{
setSeqNo : 1,
plygnSeqNo : 5122,
plygnLo : 126.797468036123,
plygnLa : 37.5976743099128
},
{
setSeqNo : 1,
plygnSeqNo : 5123,
plygnLo : 126.797476884469,
plygnLa : 37.5976720624864
},
{
setSeqNo : 1,
plygnSeqNo : 5124,
plygnLo : 126.797483969517,
plygnLa : 37.5976695427012
},
{
setSeqNo : 1,
plygnSeqNo : 5125,
plygnLo : 126.797507875639,
plygnLa : 37.5977264639946
},
{
setSeqNo : 1,
plygnSeqNo : 5126,
plygnLo : 126.797530043931,
plygnLa : 37.5977740832307
},
{
setSeqNo : 1,
plygnSeqNo : 5127,
plygnLo : 126.797536194649,
plygnLa : 37.5977856357271
},
{
setSeqNo : 1,
plygnSeqNo : 5128,
plygnLo : 126.797540154753,
plygnLa : 37.5978278796321
},
{
setSeqNo : 1,
plygnSeqNo : 5129,
plygnLo : 126.797543740204,
plygnLa : 37.5978751885611
},
{
setSeqNo : 1,
plygnSeqNo : 5130,
plygnLo : 126.797554906942,
plygnLa : 37.5979323563949
},
{
setSeqNo : 1,
plygnSeqNo : 5131,
plygnLo : 126.797555580822,
plygnLa : 37.5979433404651
},
{
setSeqNo : 1,
plygnSeqNo : 5132,
plygnLo : 126.797556932787,
plygnLa : 37.5980325945701
},
{
setSeqNo : 1,
plygnSeqNo : 5133,
plygnLo : 126.797555976079,
plygnLa : 37.5980593422833
},
{
setSeqNo : 1,
plygnSeqNo : 5134,
plygnLo : 126.797556789901,
plygnLa : 37.598151414804
},
{
setSeqNo : 1,
plygnSeqNo : 5135,
plygnLo : 126.797554678608,
plygnLa : 37.5982111013227
},
{
setSeqNo : 1,
plygnSeqNo : 5136,
plygnLo : 126.797548828537,
plygnLa : 37.5982797915823
},
{
setSeqNo : 1,
plygnSeqNo : 5137,
plygnLo : 126.797541471093,
plygnLa : 37.598382833482
},
{
setSeqNo : 1,
plygnSeqNo : 5138,
plygnLo : 126.797539836495,
plygnLa : 37.5983971838143
},
{
setSeqNo : 1,
plygnSeqNo : 5139,
plygnLo : 126.797540980286,
plygnLa : 37.5986244039467
},
{
setSeqNo : 1,
plygnSeqNo : 5140,
plygnLo : 126.797548661214,
plygnLa : 37.5987314093689
},
{
setSeqNo : 1,
plygnSeqNo : 5141,
plygnLo : 126.797549458548,
plygnLa : 37.5987629448535
},
{
setSeqNo : 1,
plygnSeqNo : 5142,
plygnLo : 126.797551217893,
plygnLa : 37.5987654787745
},
{
setSeqNo : 1,
plygnSeqNo : 5143,
plygnLo : 126.797553220114,
plygnLa : 37.5988079992876
},
{
setSeqNo : 1,
plygnSeqNo : 5144,
plygnLo : 126.797564597518,
plygnLa : 37.5988547615445
},
{
setSeqNo : 1,
plygnSeqNo : 5145,
plygnLo : 126.797577903979,
plygnLa : 37.598907997666
},
{
setSeqNo : 1,
plygnSeqNo : 5146,
plygnLo : 126.797597197683,
plygnLa : 37.5989668741502
},
{
setSeqNo : 1,
plygnSeqNo : 5147,
plygnLo : 126.79762291905,
plygnLa : 37.5991395102386
},
{
setSeqNo : 1,
plygnSeqNo : 5148,
plygnLo : 126.797642345206,
plygnLa : 37.5992828639094
},
{
setSeqNo : 1,
plygnSeqNo : 5149,
plygnLo : 126.797652878814,
plygnLa : 37.5993104699861
},
{
setSeqNo : 1,
plygnSeqNo : 5150,
plygnLo : 126.797737058937,
plygnLa : 37.5995229142397
},
{
setSeqNo : 1,
plygnSeqNo : 5151,
plygnLo : 126.797798313732,
plygnLa : 37.5997046215627
},
{
setSeqNo : 1,
plygnSeqNo : 5152,
plygnLo : 126.797865201813,
plygnLa : 37.5998961959481
},
{
setSeqNo : 1,
plygnSeqNo : 5153,
plygnLo : 126.797923449583,
plygnLa : 37.6000131442935
},
{
setSeqNo : 1,
plygnSeqNo : 5154,
plygnLo : 126.797952166904,
plygnLa : 37.6000599265872
},
{
setSeqNo : 1,
plygnSeqNo : 5155,
plygnLo : 126.798052965236,
plygnLa : 37.6002081954989
},
{
setSeqNo : 1,
plygnSeqNo : 5156,
plygnLo : 126.798121916996,
plygnLa : 37.6002950343975
},
{
setSeqNo : 1,
plygnSeqNo : 5157,
plygnLo : 126.798173998099,
plygnLa : 37.600336515342
},
{
setSeqNo : 1,
plygnSeqNo : 5158,
plygnLo : 126.798258391132,
plygnLa : 37.6002710592761
},
{
setSeqNo : 1,
plygnSeqNo : 5159,
plygnLo : 126.798361601746,
plygnLa : 37.6001864918117
},
{
setSeqNo : 1,
plygnSeqNo : 5160,
plygnLo : 126.798535096588,
plygnLa : 37.6000865554767
},
{
setSeqNo : 1,
plygnSeqNo : 5161,
plygnLo : 126.798639455396,
plygnLa : 37.6002297651484
},
{
setSeqNo : 1,
plygnSeqNo : 5162,
plygnLo : 126.798704180586,
plygnLa : 37.6003056128392
},
{
setSeqNo : 1,
plygnSeqNo : 5163,
plygnLo : 126.798770670795,
plygnLa : 37.6003870955161
},
{
setSeqNo : 1,
plygnSeqNo : 5164,
plygnLo : 126.798758265528,
plygnLa : 37.6003924262895
},
{
setSeqNo : 1,
plygnSeqNo : 5165,
plygnLo : 126.798767262209,
plygnLa : 37.6004031352243
},
{
setSeqNo : 1,
plygnSeqNo : 5166,
plygnLo : 126.798666288661,
plygnLa : 37.6004485789484
},
{
setSeqNo : 1,
plygnSeqNo : 5167,
plygnLo : 126.798672623607,
plygnLa : 37.6004584463267
},
{
setSeqNo : 1,
plygnSeqNo : 5168,
plygnLo : 126.798692289179,
plygnLa : 37.600452281248
},
{
setSeqNo : 1,
plygnSeqNo : 5169,
plygnLo : 126.798729313617,
plygnLa : 37.600500214077
},
{
setSeqNo : 1,
plygnSeqNo : 5170,
plygnLo : 126.798799927654,
plygnLa : 37.6005594585572
},
{
setSeqNo : 1,
plygnSeqNo : 5171,
plygnLo : 126.798829991366,
plygnLa : 37.600564015665
},
{
setSeqNo : 1,
plygnSeqNo : 5172,
plygnLo : 126.799035773039,
plygnLa : 37.6007606202377
},
{
setSeqNo : 1,
plygnSeqNo : 5173,
plygnLo : 126.799084024416,
plygnLa : 37.6008440348383
},
{
setSeqNo : 1,
plygnSeqNo : 5174,
plygnLo : 126.799124837007,
plygnLa : 37.6008686028916
},
{
setSeqNo : 1,
plygnSeqNo : 5175,
plygnLo : 126.79913203222,
plygnLa : 37.6008880492752
},
{
setSeqNo : 1,
plygnSeqNo : 5176,
plygnLo : 126.79917254898,
plygnLa : 37.6010221399375
},
{
setSeqNo : 1,
plygnSeqNo : 5177,
plygnLo : 126.799172526085,
plygnLa : 37.6010311404866
},
{
setSeqNo : 1,
plygnSeqNo : 5178,
plygnLo : 126.79918621654,
plygnLa : 37.6010722758231
},
{
setSeqNo : 1,
plygnSeqNo : 5179,
plygnLo : 126.799221155091,
plygnLa : 37.6011049960032
},
{
setSeqNo : 1,
plygnSeqNo : 5180,
plygnLo : 126.799231767414,
plygnLa : 37.601108671725
},
{
setSeqNo : 1,
plygnSeqNo : 5181,
plygnLo : 126.799218466931,
plygnLa : 37.6011193527504
},
{
setSeqNo : 1,
plygnSeqNo : 5182,
plygnLo : 126.799455317369,
plygnLa : 37.6012092897703
},
{
setSeqNo : 1,
plygnSeqNo : 5183,
plygnLo : 126.79968951594,
plygnLa : 37.6013037332025
},
{
setSeqNo : 1,
plygnSeqNo : 5184,
plygnLo : 126.79972078298,
plygnLa : 37.6013204022961
},
{
setSeqNo : 1,
plygnSeqNo : 5185,
plygnLo : 126.799823449865,
plygnLa : 37.6013704098642
},
{
setSeqNo : 1,
plygnSeqNo : 5186,
plygnLo : 126.79983988075,
plygnLa : 37.601378880881
},
{
setSeqNo : 1,
plygnSeqNo : 5187,
plygnLo : 126.799928881544,
plygnLa : 37.6014440745011
},
{
setSeqNo : 1,
plygnSeqNo : 5188,
plygnLo : 126.799956042259,
plygnLa : 37.6014804402514
},
{
setSeqNo : 1,
plygnSeqNo : 5189,
plygnLo : 126.799966257182,
plygnLa : 37.6014965030386
},
{
setSeqNo : 1,
plygnSeqNo : 5190,
plygnLo : 126.800006733115,
plygnLa : 37.6015793556642
},
{
setSeqNo : 1,
plygnSeqNo : 5191,
plygnLo : 126.8000158096,
plygnLa : 37.601623571223
},
{
setSeqNo : 1,
plygnSeqNo : 5192,
plygnLo : 126.799970459802,
plygnLa : 37.6017104935123
},
{
setSeqNo : 1,
plygnSeqNo : 5193,
plygnLo : 126.799901954976,
plygnLa : 37.601783591179
},
{
setSeqNo : 1,
plygnSeqNo : 5194,
plygnLo : 126.799785895985,
plygnLa : 37.6019120617125
},
{
setSeqNo : 1,
plygnSeqNo : 5195,
plygnLo : 126.799796549802,
plygnLa : 37.6019630394951
},
{
setSeqNo : 1,
plygnSeqNo : 5196,
plygnLo : 126.799846194535,
plygnLa : 37.602123048998
},
{
setSeqNo : 1,
plygnSeqNo : 5197,
plygnLo : 126.799886572478,
plygnLa : 37.602242496851
},
{
setSeqNo : 1,
plygnSeqNo : 5198,
plygnLo : 126.799896404479,
plygnLa : 37.6022709490583
},
{
setSeqNo : 1,
plygnSeqNo : 5199,
plygnLo : 126.799917299161,
plygnLa : 37.6023920587881
},
{
setSeqNo : 1,
plygnSeqNo : 5200,
plygnLo : 126.799919663931,
plygnLa : 37.6025021440055
},
{
setSeqNo : 1,
plygnSeqNo : 5201,
plygnLo : 126.799940962272,
plygnLa : 37.602544698053
},
{
setSeqNo : 1,
plygnSeqNo : 5202,
plygnLo : 126.800379360796,
plygnLa : 37.6029613126987
},
{
setSeqNo : 1,
plygnSeqNo : 5203,
plygnLo : 126.801049523813,
plygnLa : 37.6035925720001
},
{
setSeqNo : 1,
plygnSeqNo : 5204,
plygnLo : 126.801482120549,
plygnLa : 37.6040024046673
},
{
setSeqNo : 1,
plygnSeqNo : 5205,
plygnLo : 126.801697818199,
plygnLa : 37.6042018337
},
{
setSeqNo : 1,
plygnSeqNo : 5206,
plygnLo : 126.802091414484,
plygnLa : 37.6045713437009
},
{
setSeqNo : 1,
plygnSeqNo : 5207,
plygnLo : 126.802310111948,
plygnLa : 37.6047772445773
},
{
setSeqNo : 1,
plygnSeqNo : 5208,
plygnLo : 126.802581394434,
plygnLa : 37.6050327881967
},
{
setSeqNo : 1,
plygnSeqNo : 5209,
plygnLo : 126.802877669024,
plygnLa : 37.6048122662813
},
{
setSeqNo : 1,
plygnSeqNo : 5210,
plygnLo : 126.803367724669,
plygnLa : 37.6044445351119
},
{
setSeqNo : 1,
plygnSeqNo : 5211,
plygnLo : 126.803884379051,
plygnLa : 37.6040585469995
},
{
setSeqNo : 1,
plygnSeqNo : 5212,
plygnLo : 126.80442158251,
plygnLa : 37.6036554091024
},
{
setSeqNo : 1,
plygnSeqNo : 5213,
plygnLo : 126.804843192885,
plygnLa : 37.6033421745581
},
{
setSeqNo : 1,
plygnSeqNo : 5214,
plygnLo : 126.805253794275,
plygnLa : 37.6030362459669
},
{
setSeqNo : 1,
plygnSeqNo : 5215,
plygnLo : 126.805623976992,
plygnLa : 37.6027609343825
},
{
setSeqNo : 1,
plygnSeqNo : 5216,
plygnLo : 126.805863857992,
plygnLa : 37.6025802891873
},
{
setSeqNo : 1,
plygnSeqNo : 5217,
plygnLo : 126.806135343604,
plygnLa : 37.6024216623473
},
{
setSeqNo : 1,
plygnSeqNo : 5218,
plygnLo : 126.806449367377,
plygnLa : 37.6022394433069
},
{
setSeqNo : 1,
plygnSeqNo : 5219,
plygnLo : 126.8072370395,
plygnLa : 37.6017922253106
},
{
setSeqNo : 1,
plygnSeqNo : 5220,
plygnLo : 126.808239680562,
plygnLa : 37.6012082338693
},
{
setSeqNo : 1,
plygnSeqNo : 5221,
plygnLo : 126.808442663637,
plygnLa : 37.6010601917088
},
{
setSeqNo : 1,
plygnSeqNo : 5222,
plygnLo : 126.809021437002,
plygnLa : 37.6006432983385
},
{
setSeqNo : 1,
plygnSeqNo : 5223,
plygnLo : 126.809364807188,
plygnLa : 37.6003960967446
},
{
setSeqNo : 1,
plygnSeqNo : 5224,
plygnLo : 126.810076878072,
plygnLa : 37.5998865042331
},
{
setSeqNo : 1,
plygnSeqNo : 5225,
plygnLo : 126.810539354364,
plygnLa : 37.5995519166596
},
{
setSeqNo : 1,
plygnSeqNo : 5226,
plygnLo : 126.811368917631,
plygnLa : 37.5989608608176
},
{
setSeqNo : 1,
plygnSeqNo : 5227,
plygnLo : 126.812381600063,
plygnLa : 37.5984399190853
},
{
setSeqNo : 1,
plygnSeqNo : 5228,
plygnLo : 126.81395323163,
plygnLa : 37.5976194421771
},
{
setSeqNo : 1,
plygnSeqNo : 5229,
plygnLo : 126.814519582075,
plygnLa : 37.5971982852102
},
{
setSeqNo : 1,
plygnSeqNo : 5230,
plygnLo : 126.81515044914,
plygnLa : 37.5967271045244
},
{
setSeqNo : 1,
plygnSeqNo : 5231,
plygnLo : 126.815885714409,
plygnLa : 37.5961814838026
},
{
setSeqNo : 1,
plygnSeqNo : 5232,
plygnLo : 126.816556264678,
plygnLa : 37.5956816446619
},
{
setSeqNo : 1,
plygnSeqNo : 5233,
plygnLo : 126.817525985738,
plygnLa : 37.5953303703388
},
{
setSeqNo : 1,
plygnSeqNo : 5234,
plygnLo : 126.81836518038,
plygnLa : 37.5941601184386
},
{
setSeqNo : 1,
plygnSeqNo : 5235,
plygnLo : 126.818682962808,
plygnLa : 37.593715750261
},
{
setSeqNo : 1,
plygnSeqNo : 5236,
plygnLo : 126.818844312114,
plygnLa : 37.5934902319174
},
{
setSeqNo : 1,
plygnSeqNo : 5237,
plygnLo : 126.819302529029,
plygnLa : 37.592849792308
},
{
setSeqNo : 1,
plygnSeqNo : 5238,
plygnLo : 126.820053933825,
plygnLa : 37.5924035577845
},
{
setSeqNo : 1,
plygnSeqNo : 5239,
plygnLo : 126.820243513587,
plygnLa : 37.5922870002245
},
{
setSeqNo : 1,
plygnSeqNo : 5240,
plygnLo : 126.820466959316,
plygnLa : 37.5921459969307
},
{
setSeqNo : 1,
plygnSeqNo : 5241,
plygnLo : 126.820688616302,
plygnLa : 37.5920049988657
},
{
setSeqNo : 1,
plygnSeqNo : 5242,
plygnLo : 126.82099816746,
plygnLa : 37.591807824307
},
{
setSeqNo : 1,
plygnSeqNo : 5243,
plygnLo : 126.821239686009,
plygnLa : 37.591651647431
},
{
setSeqNo : 1,
plygnSeqNo : 5244,
plygnLo : 126.821527625268,
plygnLa : 37.5914668181151
},
{
setSeqNo : 1,
plygnSeqNo : 5245,
plygnLo : 126.821720413697,
plygnLa : 37.5913409727567
},
{
setSeqNo : 1,
plygnSeqNo : 5246,
plygnLo : 126.821887671676,
plygnLa : 37.5912373355673
},
{
setSeqNo : 1,
plygnSeqNo : 5247,
plygnLo : 126.822239907839,
plygnLa : 37.5910160040231
},
{
setSeqNo : 1,
plygnSeqNo : 5248,
plygnLo : 126.822539176164,
plygnLa : 37.5908269726301
},
{
setSeqNo : 1,
plygnSeqNo : 5249,
plygnLo : 126.822668356011,
plygnLa : 37.5907407276803
},
{
setSeqNo : 1,
plygnSeqNo : 5250,
plygnLo : 126.82365189398,
plygnLa : 37.5901168779278
},
{
setSeqNo : 1,
plygnSeqNo : 5251,
plygnLo : 126.824756957575,
plygnLa : 37.5894168869699
},
{
setSeqNo : 1,
plygnSeqNo : 5252,
plygnLo : 126.825218866358,
plygnLa : 37.5891239210408
},
{
setSeqNo : 1,
plygnSeqNo : 5253,
plygnLo : 126.825332572546,
plygnLa : 37.5890680586955
},
{
setSeqNo : 1,
plygnSeqNo : 5254,
plygnLo : 126.825509564807,
plygnLa : 37.5889568250939
},
{
setSeqNo : 1,
plygnSeqNo : 5255,
plygnLo : 126.825702860535,
plygnLa : 37.5888352015905
},
{
setSeqNo : 1,
plygnSeqNo : 5256,
plygnLo : 126.825917069625,
plygnLa : 37.5886992468763
},
{
setSeqNo : 1,
plygnSeqNo : 5257,
plygnLo : 126.826146853887,
plygnLa : 37.5885545840706
},
{
setSeqNo : 1,
plygnSeqNo : 5258,
plygnLo : 126.826349532023,
plygnLa : 37.5884293051635
},
{
setSeqNo : 1,
plygnSeqNo : 5259,
plygnLo : 126.826562138343,
plygnLa : 37.5882950400216
},
{
setSeqNo : 1,
plygnSeqNo : 5260,
plygnLo : 126.82674622538,
plygnLa : 37.5881795908414
},
{
setSeqNo : 1,
plygnSeqNo : 5261,
plygnLo : 126.82695846411,
plygnLa : 37.5880464511994
},
{
setSeqNo : 1,
plygnSeqNo : 5262,
plygnLo : 126.827196760145,
plygnLa : 37.5878961673877
},
{
setSeqNo : 1,
plygnSeqNo : 5263,
plygnLo : 126.827449227201,
plygnLa : 37.5877385887577
},
{
setSeqNo : 1,
plygnSeqNo : 5264,
plygnLo : 126.82765846462,
plygnLa : 37.5876054345865
},
{
setSeqNo : 1,
plygnSeqNo : 5265,
plygnLo : 126.827811761549,
plygnLa : 37.5874848741862
},
{
setSeqNo : 1,
plygnSeqNo : 5266,
plygnLo : 126.828373810129,
plygnLa : 37.5872514434855
},
{
setSeqNo : 1,
plygnSeqNo : 5267,
plygnLo : 126.828808182124,
plygnLa : 37.5870696308982
},
{
setSeqNo : 1,
plygnSeqNo : 5268,
plygnLo : 126.830055151709,
plygnLa : 37.5865525366123
},
{
setSeqNo : 1,
plygnSeqNo : 5269,
plygnLo : 126.831301213684,
plygnLa : 37.5860337404898
},
{
setSeqNo : 1,
plygnSeqNo : 5270,
plygnLo : 126.831759649214,
plygnLa : 37.5858432219881
},
{
setSeqNo : 1,
plygnSeqNo : 5271,
plygnLo : 126.831930099361,
plygnLa : 37.5857235262091
},
{
setSeqNo : 1,
plygnSeqNo : 5272,
plygnLo : 126.832955607707,
plygnLa : 37.5850951537394
},
{
setSeqNo : 1,
plygnSeqNo : 5273,
plygnLo : 126.834180193218,
plygnLa : 37.5843546999729
},
{
setSeqNo : 1,
plygnSeqNo : 5274,
plygnLo : 126.83458690822,
plygnLa : 37.5841066686171
},
{
setSeqNo : 1,
plygnSeqNo : 5275,
plygnLo : 126.835815346245,
plygnLa : 37.5833653666462
},
{
setSeqNo : 1,
plygnSeqNo : 5276,
plygnLo : 126.836217613917,
plygnLa : 37.583122384493
},
{
setSeqNo : 1,
plygnSeqNo : 5277,
plygnLo : 126.836655478626,
plygnLa : 37.5828614317494
},
{
setSeqNo : 1,
plygnSeqNo : 5278,
plygnLo : 126.837149145767,
plygnLa : 37.5825633794676
},
{
setSeqNo : 1,
plygnSeqNo : 5279,
plygnLo : 126.838097938309,
plygnLa : 37.5817929506802
},
{
setSeqNo : 1,
plygnSeqNo : 5280,
plygnLo : 126.839137121306,
plygnLa : 37.5811743888757
},
{
setSeqNo : 1,
plygnSeqNo : 5281,
plygnLo : 126.841830340943,
plygnLa : 37.5795819130152
},
{
setSeqNo : 1,
plygnSeqNo : 5282,
plygnLo : 126.841974166792,
plygnLa : 37.5794945405305
},
{
setSeqNo : 1,
plygnSeqNo : 5283,
plygnLo : 126.84233370376,
plygnLa : 37.5792830147661
},
{
setSeqNo : 1,
plygnSeqNo : 5284,
plygnLo : 126.842411047496,
plygnLa : 37.5792620102474
},
{
setSeqNo : 1,
plygnSeqNo : 5285,
plygnLo : 126.843240225277,
plygnLa : 37.5788790776185
},
{
setSeqNo : 1,
plygnSeqNo : 5286,
plygnLo : 126.844071415964,
plygnLa : 37.5782897565548
},
{
setSeqNo : 1,
plygnSeqNo : 5287,
plygnLo : 126.847296517449,
plygnLa : 37.5760026985981
},
{
setSeqNo : 1,
plygnSeqNo : 5288,
plygnLo : 126.848381278005,
plygnLa : 37.5751571826945
},
{
setSeqNo : 1,
plygnSeqNo : 5289,
plygnLo : 126.851287257723,
plygnLa : 37.5733752704054
},
{
setSeqNo : 1,
plygnSeqNo : 5290,
plygnLo : 126.852347156678,
plygnLa : 37.5727222714584
},
{
setSeqNo : 1,
plygnSeqNo : 5291,
plygnLo : 126.85264010423,
plygnLa : 37.5725227402563
},
{
setSeqNo : 1,
plygnSeqNo : 5292,
plygnLo : 126.852924916837,
plygnLa : 37.5723198095525
},
{
setSeqNo : 1,
plygnSeqNo : 5293,
plygnLo : 126.853060229452,
plygnLa : 37.572224527362
},
{
setSeqNo : 1,
plygnSeqNo : 5294,
plygnLo : 126.853522341784,
plygnLa : 37.5718959696972
},
{
setSeqNo : 1,
plygnSeqNo : 5295,
plygnLo : 126.853631853536,
plygnLa : 37.5717905281381
},
{
setSeqNo : 1,
plygnSeqNo : 5296,
plygnLo : 126.853628585427,
plygnLa : 37.5737991570796
},
{
setSeqNo : 1,
plygnSeqNo : 5297,
plygnLo : 126.854133558958,
plygnLa : 37.5738972125549
},
{
setSeqNo : 1,
plygnSeqNo : 5298,
plygnLo : 126.854834230195,
plygnLa : 37.5740377376144
},
{
setSeqNo : 1,
plygnSeqNo : 5299,
plygnLo : 126.855766359282,
plygnLa : 37.5742219015318
},
{
setSeqNo : 1,
plygnSeqNo : 5300,
plygnLo : 126.85734031584,
plygnLa : 37.5745324205369
},
{
setSeqNo : 1,
plygnSeqNo : 5301,
plygnLo : 126.858350788302,
plygnLa : 37.5747307428262
},
{
setSeqNo : 1,
plygnSeqNo : 5302,
plygnLo : 126.859285763795,
plygnLa : 37.5749157273701
},
{
setSeqNo : 1,
plygnSeqNo : 5303,
plygnLo : 126.859294167919,
plygnLa : 37.5752409405155
},
{
setSeqNo : 1,
plygnSeqNo : 5304,
plygnLo : 126.860362599906,
plygnLa : 37.575663713084
},
{
setSeqNo : 1,
plygnSeqNo : 5305,
plygnLo : 126.861115906784,
plygnLa : 37.5759599728642
},
{
setSeqNo : 1,
plygnSeqNo : 5306,
plygnLo : 126.861855065757,
plygnLa : 37.5762528213978
},
{
setSeqNo : 1,
plygnSeqNo : 5307,
plygnLo : 126.862025991564,
plygnLa : 37.5763197504386
},
{
setSeqNo : 1,
plygnSeqNo : 5308,
plygnLo : 126.862611394876,
plygnLa : 37.5765490665316
},
{
setSeqNo : 1,
plygnSeqNo : 5309,
plygnLo : 126.863253708819,
plygnLa : 37.576804628869
},
{
setSeqNo : 1,
plygnSeqNo : 5310,
plygnLo : 126.863387509344,
plygnLa : 37.5768577183909
},
{
setSeqNo : 1,
plygnSeqNo : 5311,
plygnLo : 126.864248842596,
plygnLa : 37.5771943402303
},
{
setSeqNo : 1,
plygnSeqNo : 5312,
plygnLo : 126.864818345439,
plygnLa : 37.5774165906537
},
{
setSeqNo : 1,
plygnSeqNo : 5313,
plygnLo : 126.864941184416,
plygnLa : 37.5774724768327
},
{
setSeqNo : 1,
plygnSeqNo : 5314,
plygnLo : 126.867332777045,
plygnLa : 37.577505068859
},
{
setSeqNo : 1,
plygnSeqNo : 5315,
plygnLo : 126.868379370133,
plygnLa : 37.5775211745042
},
{
setSeqNo : 1,
plygnSeqNo : 5316,
plygnLo : 126.868799300394,
plygnLa : 37.5776128714874
},
{
setSeqNo : 1,
plygnSeqNo : 5317,
plygnLo : 126.86979141563,
plygnLa : 37.5778310651026
},
{
setSeqNo : 1,
plygnSeqNo : 5318,
plygnLo : 126.870600529649,
plygnLa : 37.5780085060973
},
{
setSeqNo : 1,
plygnSeqNo : 5319,
plygnLo : 126.871443070339,
plygnLa : 37.5780924904761
},
{
setSeqNo : 1,
plygnSeqNo : 5320,
plygnLo : 126.873084863878,
plygnLa : 37.5782218405217
},
{
setSeqNo : 1,
plygnSeqNo : 5321,
plygnLo : 126.873915248947,
plygnLa : 37.5782807374369
},
{
setSeqNo : 1,
plygnSeqNo : 5322,
plygnLo : 126.875195381851,
plygnLa : 37.5782745188118
},
{
setSeqNo : 1,
plygnSeqNo : 5323,
plygnLo : 126.876260558799,
plygnLa : 37.5781852664051
},
{
setSeqNo : 1,
plygnSeqNo : 5324,
plygnLo : 126.876259256356,
plygnLa : 37.5789629328016
},
{
setSeqNo : 1,
plygnSeqNo : 5325,
plygnLo : 126.876387994682,
plygnLa : 37.5789839003088
},
{
setSeqNo : 1,
plygnSeqNo : 5326,
plygnLo : 126.876754223024,
plygnLa : 37.5789434642274
},
{
setSeqNo : 1,
plygnSeqNo : 5327,
plygnLo : 126.877076568822,
plygnLa : 37.5789029808385
},
{
setSeqNo : 1,
plygnSeqNo : 5328,
plygnLo : 126.877127740031,
plygnLa : 37.5789846818125
},
{
setSeqNo : 1,
plygnSeqNo : 5329,
plygnLo : 126.87725923407,
plygnLa : 37.5791596659863
},
{
setSeqNo : 1,
plygnSeqNo : 5330,
plygnLo : 126.877427281017,
plygnLa : 37.579363691318
},
{
setSeqNo : 1,
plygnSeqNo : 5331,
plygnLo : 126.877522204686,
plygnLa : 37.5795152726746
},
{
setSeqNo : 1,
plygnSeqNo : 5332,
plygnLo : 126.87758799803,
plygnLa : 37.5796262808591
},
{
setSeqNo : 1,
plygnSeqNo : 5333,
plygnLo : 126.87763166602,
plygnLa : 37.5797485183312
},
{
setSeqNo : 1,
plygnSeqNo : 5334,
plygnLo : 126.877543514058,
plygnLa : 37.5798883582255
},
{
setSeqNo : 1,
plygnSeqNo : 5335,
plygnLo : 126.877426189414,
plygnLa : 37.5800222556733
},
{
setSeqNo : 1,
plygnSeqNo : 5336,
plygnLo : 126.877367492712,
plygnLa : 37.5801153930563
},
{
setSeqNo : 1,
plygnSeqNo : 5337,
plygnLo : 126.877389314313,
plygnLa : 37.5801796114987
},
{
setSeqNo : 1,
plygnSeqNo : 5338,
plygnLo : 126.877455159699,
plygnLa : 37.5802613358029
},
{
setSeqNo : 1,
plygnSeqNo : 5339,
plygnLo : 126.877469583943,
plygnLa : 37.5803080847491
},
{
setSeqNo : 1,
plygnSeqNo : 5340,
plygnLo : 126.877476895036,
plygnLa : 37.5803838306367
},
{
setSeqNo : 1,
plygnSeqNo : 5341,
plygnLo : 126.877462019324,
plygnLa : 37.5805003840292
},
{
setSeqNo : 1,
plygnSeqNo : 5342,
plygnLo : 126.877417916859,
plygnLa : 37.5806399906996
},
{
setSeqNo : 1,
plygnSeqNo : 5343,
plygnLo : 126.877161239808,
plygnLa : 37.5808553891124
},
{
setSeqNo : 1,
plygnSeqNo : 5344,
plygnLo : 126.876919306093,
plygnLa : 37.5810339259924
},
{
setSeqNo : 1,
plygnSeqNo : 5345,
plygnLo : 126.876662788628,
plygnLa : 37.5812600270068
},
{
setSeqNo : 1,
plygnSeqNo : 5346,
plygnLo : 126.876625450395,
plygnLa : 37.5813759907355
},
{
setSeqNo : 1,
plygnSeqNo : 5347,
plygnLo : 126.876671370626,
plygnLa : 37.5816325403577
},
{
setSeqNo : 1,
plygnSeqNo : 5348,
plygnLo : 126.87695832293,
plygnLa : 37.5820371597642
},
{
setSeqNo : 1,
plygnSeqNo : 5349,
plygnLo : 126.877049674178,
plygnLa : 37.5822061910053
},
{
setSeqNo : 1,
plygnSeqNo : 5350,
plygnLo : 126.877084307917,
plygnLa : 37.5825457825315
},
{
setSeqNo : 1,
plygnSeqNo : 5351,
plygnLo : 126.877091058843,
plygnLa : 37.582740916731
},
{
setSeqNo : 1,
plygnSeqNo : 5352,
plygnLo : 126.877098412893,
plygnLa : 37.5828929560273
},
{
setSeqNo : 1,
plygnSeqNo : 5353,
plygnLo : 126.877075271329,
plygnLa : 37.5829821927852
},
{
setSeqNo : 1,
plygnSeqNo : 5354,
plygnLo : 126.877062109539,
plygnLa : 37.5830272277442
},
{
setSeqNo : 1,
plygnSeqNo : 5355,
plygnLo : 126.876995812614,
plygnLa : 37.5832163650343
},
{
setSeqNo : 1,
plygnSeqNo : 5356,
plygnLo : 126.87698773752,
plygnLa : 37.5833881018692
},
{
setSeqNo : 1,
plygnSeqNo : 5357,
plygnLo : 126.877146751994,
plygnLa : 37.5836098590548
},
{
setSeqNo : 1,
plygnSeqNo : 5358,
plygnLo : 126.877250850579,
plygnLa : 37.5837746756726
},
{
setSeqNo : 1,
plygnSeqNo : 5359,
plygnLo : 126.877331245501,
plygnLa : 37.5840478778485
},
{
setSeqNo : 1,
plygnSeqNo : 5360,
plygnLo : 126.87729370724,
plygnLa : 37.5841736963338
},
{
setSeqNo : 1,
plygnSeqNo : 5361,
plygnLo : 126.877164987728,
plygnLa : 37.5842383137392
},
{
setSeqNo : 1,
plygnSeqNo : 5362,
plygnLo : 126.876973764687,
plygnLa : 37.584238959377
},
{
setSeqNo : 1,
plygnSeqNo : 5363,
plygnLo : 126.876778790371,
plygnLa : 37.5841461143343
},
{
setSeqNo : 1,
plygnSeqNo : 5364,
plygnLo : 126.876696352713,
plygnLa : 37.5841499728421
},
{
setSeqNo : 1,
plygnSeqNo : 5365,
plygnLo : 126.87662344087,
plygnLa : 37.5841645377013
},
{
setSeqNo : 1,
plygnSeqNo : 5366,
plygnLo : 126.876561749586,
plygnLa : 37.5842447141289
},
{
setSeqNo : 1,
plygnSeqNo : 5367,
plygnLo : 126.8765378984,
plygnLa : 37.5844403737813
},
{
setSeqNo : 1,
plygnSeqNo : 5368,
plygnLo : 126.87674578376,
plygnLa : 37.5846376841667
},
{
setSeqNo : 1,
plygnSeqNo : 5369,
plygnLo : 126.876924967574,
plygnLa : 37.5847490910583
},
{
setSeqNo : 1,
plygnSeqNo : 5370,
plygnLo : 126.877086884381,
plygnLa : 37.5848275310844
},
{
setSeqNo : 1,
plygnSeqNo : 5371,
plygnLo : 126.87719337741,
plygnLa : 37.584936050273
},
{
setSeqNo : 1,
plygnSeqNo : 5372,
plygnLo : 126.877247200262,
plygnLa : 37.5851196719801
},
{
setSeqNo : 1,
plygnSeqNo : 5373,
plygnLo : 126.877265730111,
plygnLa : 37.5855718782659
},
{
setSeqNo : 1,
plygnSeqNo : 5374,
plygnLo : 126.877542343809,
plygnLa : 37.5862479090396
},
{
setSeqNo : 1,
plygnSeqNo : 5375,
plygnLo : 126.878465229517,
plygnLa : 37.5863693803669
},
{
setSeqNo : 1,
plygnSeqNo : 5376,
plygnLo : 126.87887161945,
plygnLa : 37.5865621097132
},
{
setSeqNo : 1,
plygnSeqNo : 5377,
plygnLo : 126.879133093964,
plygnLa : 37.5867724180572
},
{
setSeqNo : 1,
plygnSeqNo : 5378,
plygnLo : 126.879205081654,
plygnLa : 37.5869991444171
},
{
setSeqNo : 1,
plygnSeqNo : 5379,
plygnLo : 126.879263862427,
plygnLa : 37.5871881330422
},
{
setSeqNo : 1,
plygnSeqNo : 5380,
plygnLo : 126.879322827087,
plygnLa : 37.5875837903554
},
{
setSeqNo : 1,
plygnSeqNo : 5381,
plygnLo : 126.879437349257,
plygnLa : 37.5878747554519
},
{
setSeqNo : 1,
plygnSeqNo : 5382,
plygnLo : 126.879539580681,
plygnLa : 37.5881020806843
},
{
setSeqNo : 1,
plygnSeqNo : 5383,
plygnLo : 126.87959228786,
plygnLa : 37.5882178484658
},
{
setSeqNo : 1,
plygnSeqNo : 5384,
plygnLo : 126.879606749431,
plygnLa : 37.5882446131282
},
{
setSeqNo : 1,
plygnSeqNo : 5385,
plygnLo : 126.879627224732,
plygnLa : 37.5882758891379
},
{
setSeqNo : 1,
plygnSeqNo : 5386,
plygnLo : 126.879656148505,
plygnLa : 37.5883266006692
},
{
setSeqNo : 1,
plygnSeqNo : 5387,
plygnLo : 126.879794804942,
plygnLa : 37.5885739466804
},
{
setSeqNo : 1,
plygnSeqNo : 5388,
plygnLo : 126.879900813141,
plygnLa : 37.5887632623172
},
{
setSeqNo : 1,
plygnSeqNo : 5389,
plygnLo : 126.880002893916,
plygnLa : 37.5889798911789
},
{
setSeqNo : 1,
plygnSeqNo : 5390,
plygnLo : 126.880034453516,
plygnLa : 37.5890477778864
},
{
setSeqNo : 1,
plygnSeqNo : 5391,
plygnLo : 126.880044511689,
plygnLa : 37.5890663658288
},
{
setSeqNo : 1,
plygnSeqNo : 5392,
plygnLo : 126.880222413652,
plygnLa : 37.5893207985207
},
{
setSeqNo : 1,
plygnSeqNo : 5393,
plygnLo : 126.880349139151,
plygnLa : 37.5895061966432
},
{
setSeqNo : 1,
plygnSeqNo : 5394,
plygnLo : 126.880597192446,
plygnLa : 37.5897145167656
},
{
setSeqNo : 1,
plygnSeqNo : 5395,
plygnLo : 126.880665918879,
plygnLa : 37.5897711858104
},
{
setSeqNo : 1,
plygnSeqNo : 5396,
plygnLo : 126.880754990487,
plygnLa : 37.5898281469522
},
{
setSeqNo : 1,
plygnSeqNo : 5397,
plygnLo : 126.88085183663,
plygnLa : 37.5898884952738
},
{
setSeqNo : 1,
plygnSeqNo : 5398,
plygnLo : 126.881004365624,
plygnLa : 37.5899829748339
},
{
setSeqNo : 1,
plygnSeqNo : 5399,
plygnLo : 126.881152314243,
plygnLa : 37.5900622503379
},
{
setSeqNo : 1,
plygnSeqNo : 5400,
plygnLo : 126.881278344304,
plygnLa : 37.5901257269946
},
{
setSeqNo : 1,
plygnSeqNo : 5401,
plygnLo : 126.881723638469,
plygnLa : 37.5903491735075
},
{
setSeqNo : 1,
plygnSeqNo : 5402,
plygnLo : 126.881731232026,
plygnLa : 37.5903584698366
},
{
setSeqNo : 1,
plygnSeqNo : 5403,
plygnLo : 126.881986402344,
plygnLa : 37.5905400526013
},
{
setSeqNo : 1,
plygnSeqNo : 5404,
plygnLo : 126.881907730486,
plygnLa : 37.5906196559582
},
{
setSeqNo : 1,
plygnSeqNo : 5405,
plygnLo : 126.881900993799,
plygnLa : 37.5906261177601
},
{
setSeqNo : 1,
plygnSeqNo : 5406,
plygnLo : 126.881886818765,
plygnLa : 37.5906396191798
},
{
setSeqNo : 1,
plygnSeqNo : 5407,
plygnLo : 126.881900952088,
plygnLa : 37.5906523105131
},
{
setSeqNo : 1,
plygnSeqNo : 5408,
plygnLo : 126.882056061452,
plygnLa : 37.5907926767835
},
{
setSeqNo : 1,
plygnSeqNo : 5409,
plygnLo : 126.882030896044,
plygnLa : 37.5908177175001
},
{
setSeqNo : 1,
plygnSeqNo : 5410,
plygnLo : 126.882072021368,
plygnLa : 37.5908805402407
},
{
setSeqNo : 1,
plygnSeqNo : 5411,
plygnLo : 126.882249543016,
plygnLa : 37.5910544469672
},
{
setSeqNo : 1,
plygnSeqNo : 5412,
plygnLo : 126.882323025657,
plygnLa : 37.591126590994
},
{
setSeqNo : 1,
plygnSeqNo : 5413,
plygnLo : 126.882377450415,
plygnLa : 37.5911643784199
},
{
setSeqNo : 1,
plygnSeqNo : 5414,
plygnLo : 126.882681589293,
plygnLa : 37.5913766955166
},
{
setSeqNo : 1,
plygnSeqNo : 5415,
plygnLo : 126.882808854186,
plygnLa : 37.5914486248501
},
{
setSeqNo : 1,
plygnSeqNo : 5416,
plygnLo : 126.882922860678,
plygnLa : 37.5915143391856
},
{
setSeqNo : 1,
plygnSeqNo : 5417,
plygnLo : 126.883348794881,
plygnLa : 37.5917878824494
},
{
setSeqNo : 1,
plygnSeqNo : 5418,
plygnLo : 126.883575147406,
plygnLa : 37.5918525821738
},
{
setSeqNo : 1,
plygnSeqNo : 5419,
plygnLo : 126.88376731655,
plygnLa : 37.5920546490861
},
{
setSeqNo : 1,
plygnSeqNo : 5420,
plygnLo : 126.884112383705,
plygnLa : 37.592454245844
},
{
setSeqNo : 1,
plygnSeqNo : 5421,
plygnLo : 126.8843341897,
plygnLa : 37.592719687834
},
{
setSeqNo : 1,
plygnSeqNo : 5422,
plygnLo : 126.884475276858,
plygnLa : 37.5928915829435
},
{
setSeqNo : 1,
plygnSeqNo : 5423,
plygnLo : 126.884637615472,
plygnLa : 37.5931642912002
},
{
setSeqNo : 1,
plygnSeqNo : 5424,
plygnLo : 126.884856561545,
plygnLa : 37.5934443717402
},
{
setSeqNo : 1,
plygnSeqNo : 5425,
plygnLo : 126.885003989424,
plygnLa : 37.5936390758854
},
{
setSeqNo : 1,
plygnSeqNo : 5426,
plygnLo : 126.885139689771,
plygnLa : 37.593750986355
},
{
setSeqNo : 1,
plygnSeqNo : 5427,
plygnLo : 126.885188375908,
plygnLa : 37.5937310500717
},
{
setSeqNo : 1,
plygnSeqNo : 5428,
plygnLo : 126.885208692695,
plygnLa : 37.5937445764117
},
{
setSeqNo : 1,
plygnSeqNo : 5429,
plygnLo : 126.885409992502,
plygnLa : 37.5938827422986
},
{
setSeqNo : 1,
plygnSeqNo : 5430,
plygnLo : 126.885720757524,
plygnLa : 37.5939399164555
},
{
setSeqNo : 1,
plygnSeqNo : 5431,
plygnLo : 126.885796281522,
plygnLa : 37.5939537938279
},
{
setSeqNo : 1,
plygnSeqNo : 5432,
plygnLo : 126.88597637281,
plygnLa : 37.5939621345751
},
{
setSeqNo : 1,
plygnSeqNo : 5433,
plygnLo : 126.886093503549,
plygnLa : 37.5939591493078
},
{
setSeqNo : 1,
plygnSeqNo : 5434,
plygnLo : 126.886272912595,
plygnLa : 37.5939559448006
},
{
setSeqNo : 1,
plygnSeqNo : 5435,
plygnLo : 126.886365446724,
plygnLa : 37.5939540719119
},
{
setSeqNo : 1,
plygnSeqNo : 5436,
plygnLo : 126.886683039074,
plygnLa : 37.5938273974133
},
{
setSeqNo : 1,
plygnSeqNo : 5437,
plygnLo : 126.886732789655,
plygnLa : 37.5938074511696
},
{
setSeqNo : 1,
plygnSeqNo : 5438,
plygnLo : 126.88684567253,
plygnLa : 37.5938050289751
},
{
setSeqNo : 1,
plygnSeqNo : 5439,
plygnLo : 126.887036491364,
plygnLa : 37.5938542024911
},
{
setSeqNo : 1,
plygnSeqNo : 5440,
plygnLo : 126.887303191415,
plygnLa : 37.5939231601978
},
{
setSeqNo : 1,
plygnSeqNo : 5441,
plygnLo : 126.887337686067,
plygnLa : 37.5939198151045
},
{
setSeqNo : 1,
plygnSeqNo : 5442,
plygnLo : 126.887317225178,
plygnLa : 37.5938837565575
},
{
setSeqNo : 1,
plygnSeqNo : 5443,
plygnLo : 126.887251211515,
plygnLa : 37.5937792405468
},
{
setSeqNo : 1,
plygnSeqNo : 5444,
plygnLo : 126.887181660786,
plygnLa : 37.5936783711235
},
{
setSeqNo : 1,
plygnSeqNo : 5445,
plygnLo : 126.887170709025,
plygnLa : 37.5936665303959
},
{
setSeqNo : 1,
plygnSeqNo : 5446,
plygnLo : 126.887007295108,
plygnLa : 37.5935106728226
},
{
setSeqNo : 1,
plygnSeqNo : 5447,
plygnLo : 126.886986979371,
plygnLa : 37.5934898223163
},
{
setSeqNo : 1,
plygnSeqNo : 5448,
plygnLo : 126.886955037774,
plygnLa : 37.5934382634729
},
{
setSeqNo : 1,
plygnSeqNo : 5449,
plygnLo : 126.886919041755,
plygnLa : 37.5933779716431
},
{
setSeqNo : 1,
plygnSeqNo : 5450,
plygnLo : 126.886882648137,
plygnLa : 37.5933433117664
},
{
setSeqNo : 1,
plygnSeqNo : 5451,
plygnLo : 126.886762171086,
plygnLa : 37.5932257785975
},
{
setSeqNo : 1,
plygnSeqNo : 5452,
plygnLo : 126.886715182166,
plygnLa : 37.5931733669168
},
{
setSeqNo : 1,
plygnSeqNo : 5453,
plygnLo : 126.886710094084,
plygnLa : 37.5931466122319
},
{
setSeqNo : 1,
plygnSeqNo : 5454,
plygnLo : 126.886719111952,
plygnLa : 37.5931502789697
},
{
setSeqNo : 1,
plygnSeqNo : 5455,
plygnLo : 126.886721431727,
plygnLa : 37.5931359292326
},
{
setSeqNo : 1,
plygnSeqNo : 5456,
plygnLo : 126.886677515111,
plygnLa : 37.5930443733316
},
{
setSeqNo : 1,
plygnSeqNo : 5457,
plygnLo : 126.886620441544,
plygnLa : 37.5928858071149
},
{
setSeqNo : 1,
plygnSeqNo : 5458,
plygnLo : 126.886563401941,
plygnLa : 37.5927069609133
},
{
setSeqNo : 1,
plygnSeqNo : 5459,
plygnLo : 126.886438883859,
plygnLa : 37.5925674659697
},
{
setSeqNo : 1,
plygnSeqNo : 5460,
plygnLo : 126.886404640941,
plygnLa : 37.5925173193052
},
{
setSeqNo : 1,
plygnSeqNo : 5461,
plygnLo : 126.886270323029,
plygnLa : 37.5923088370709
},
{
setSeqNo : 1,
plygnSeqNo : 5462,
plygnLo : 126.886215093003,
plygnLa : 37.5923279288823
},
{
setSeqNo : 1,
plygnSeqNo : 5463,
plygnLo : 126.886175349007,
plygnLa : 37.5921752801222
},
{
setSeqNo : 1,
plygnSeqNo : 5464,
plygnLo : 126.886144146103,
plygnLa : 37.5921000817935
},
{
setSeqNo : 1,
plygnSeqNo : 5465,
plygnLo : 126.885995085636,
plygnLa : 37.5919366324334
},
{
setSeqNo : 1,
plygnSeqNo : 5466,
plygnLo : 126.885899489824,
plygnLa : 37.5918548830758
},
{
setSeqNo : 1,
plygnSeqNo : 5467,
plygnLo : 126.885769443106,
plygnLa : 37.5917483298204
},
{
setSeqNo : 1,
plygnSeqNo : 5468,
plygnLo : 126.885715266601,
plygnLa : 37.5916666209119
},
{
setSeqNo : 1,
plygnSeqNo : 5469,
plygnLo : 126.885611805128,
plygnLa : 37.5915234888097
},
{
setSeqNo : 1,
plygnSeqNo : 5470,
plygnLo : 126.885595391771,
plygnLa : 37.5914984162916
},
{
setSeqNo : 1,
plygnSeqNo : 5471,
plygnLo : 126.885561182737,
plygnLa : 37.5914277099515
},
{
setSeqNo : 1,
plygnSeqNo : 5472,
plygnLo : 126.88554020167,
plygnLa : 37.5913848916349
},
{
setSeqNo : 1,
plygnSeqNo : 5473,
plygnLo : 126.885536398935,
plygnLa : 37.5913254771868
},
{
setSeqNo : 1,
plygnSeqNo : 5474,
plygnLo : 126.885533636604,
plygnLa : 37.5912807044657
},
{
setSeqNo : 1,
plygnSeqNo : 5475,
plygnLo : 126.885502579988,
plygnLa : 37.5912280286515
},
{
setSeqNo : 1,
plygnSeqNo : 5476,
plygnLo : 126.885493050358,
plygnLa : 37.5912119728922
},
{
setSeqNo : 1,
plygnSeqNo : 5477,
plygnLo : 126.885467037419,
plygnLa : 37.591104956898
},
{
setSeqNo : 1,
plygnSeqNo : 5478,
plygnLo : 126.885484533128,
plygnLa : 37.5910010710368
},
{
setSeqNo : 1,
plygnSeqNo : 5479,
plygnLo : 126.885489359377,
plygnLa : 37.5909703893414
},
{
setSeqNo : 1,
plygnSeqNo : 5480,
plygnLo : 126.885540348967,
plygnLa : 37.5909467877945
},
{
setSeqNo : 1,
plygnSeqNo : 5481,
plygnLo : 126.885629929501,
plygnLa : 37.5909052062811
},
{
setSeqNo : 1,
plygnSeqNo : 5482,
plygnLo : 126.885638627155,
plygnLa : 37.5908891683894
},
{
setSeqNo : 1,
plygnSeqNo : 5483,
plygnLo : 126.885651936459,
plygnLa : 37.5908638357829
},
{
setSeqNo : 1,
plygnSeqNo : 5484,
plygnLo : 126.885714117107,
plygnLa : 37.5908073069306
},
{
setSeqNo : 1,
plygnSeqNo : 5485,
plygnLo : 126.885735728069,
plygnLa : 37.5906707743909
},
{
setSeqNo : 1,
plygnSeqNo : 5486,
plygnLo : 126.88577595595,
plygnLa : 37.5905182049491
},
{
setSeqNo : 1,
plygnSeqNo : 5487,
plygnLo : 126.885814578198,
plygnLa : 37.5900198910424
},
{
setSeqNo : 1,
plygnSeqNo : 5488,
plygnLo : 126.885880876728,
plygnLa : 37.5899368945674
},
{
setSeqNo : 1,
plygnSeqNo : 5489,
plygnLo : 126.88587188324,
plygnLa : 37.589806801048
},
{
setSeqNo : 1,
plygnSeqNo : 5490,
plygnLo : 126.885860201829,
plygnLa : 37.5898124204013
},
{
setSeqNo : 1,
plygnSeqNo : 5491,
plygnLo : 126.885835703347,
plygnLa : 37.5897518689596
},
{
setSeqNo : 1,
plygnSeqNo : 5492,
plygnLo : 126.885826531948,
plygnLa : 37.5897293345091
},
{
setSeqNo : 1,
plygnSeqNo : 5493,
plygnLo : 126.885778419964,
plygnLa : 37.5896149709509
},
{
setSeqNo : 1,
plygnSeqNo : 5494,
plygnLo : 126.885754073788,
plygnLa : 37.5895656815267
},
{
setSeqNo : 1,
plygnSeqNo : 5495,
plygnLo : 126.885822060463,
plygnLa : 37.589531113909
},
{
setSeqNo : 1,
plygnSeqNo : 5496,
plygnLo : 126.886133821065,
plygnLa : 37.5893934517139
},
{
setSeqNo : 1,
plygnSeqNo : 5497,
plygnLo : 126.886257053571,
plygnLa : 37.5893262775415
},
{
setSeqNo : 1,
plygnSeqNo : 5498,
plygnLo : 126.886557530861,
plygnLa : 37.5891621408569
},
{
setSeqNo : 1,
plygnSeqNo : 5499,
plygnLo : 126.886739860104,
plygnLa : 37.5889745243691
},
{
setSeqNo : 1,
plygnSeqNo : 5500,
plygnLo : 126.886891710008,
plygnLa : 37.5888150283661
},
{
setSeqNo : 1,
plygnSeqNo : 5501,
plygnLo : 126.887054721714,
plygnLa : 37.5886485032973
},
{
setSeqNo : 1,
plygnSeqNo : 5502,
plygnLo : 126.887159279798,
plygnLa : 37.5885328831989
},
{
setSeqNo : 1,
plygnSeqNo : 5503,
plygnLo : 126.887305600932,
plygnLa : 37.5885237354628
},
{
setSeqNo : 1,
plygnSeqNo : 5504,
plygnLo : 126.887322932851,
plygnLa : 37.5885240306299
},
{
setSeqNo : 1,
plygnSeqNo : 5505,
plygnLo : 126.887522316528,
plygnLa : 37.5886365666054
},
{
setSeqNo : 1,
plygnSeqNo : 5506,
plygnLo : 126.887608603014,
plygnLa : 37.5886670598977
},
{
setSeqNo : 1,
plygnSeqNo : 5507,
plygnLo : 126.888343652504,
plygnLa : 37.5887953099973
},
{
setSeqNo : 1,
plygnSeqNo : 5508,
plygnLo : 126.888911366833,
plygnLa : 37.5887854374221
},
{
setSeqNo : 1,
plygnSeqNo : 5509,
plygnLo : 126.889253451518,
plygnLa : 37.588827712185
},
{
setSeqNo : 1,
plygnSeqNo : 5510,
plygnLo : 126.889578863415,
plygnLa : 37.589132103583
},
{
setSeqNo : 1,
plygnSeqNo : 5511,
plygnLo : 126.890224545772,
plygnLa : 37.5889246406559
},
{
setSeqNo : 1,
plygnSeqNo : 5512,
plygnLo : 126.890711766333,
plygnLa : 37.5886798691914
},
{
setSeqNo : 1,
plygnSeqNo : 5513,
plygnLo : 126.890936614114,
plygnLa : 37.5885666099821
},
{
setSeqNo : 1,
plygnSeqNo : 5514,
plygnLo : 126.891444136108,
plygnLa : 37.5884654454968
},
{
setSeqNo : 1,
plygnSeqNo : 5515,
plygnLo : 126.891558757111,
plygnLa : 37.5884835708381
},
{
setSeqNo : 1,
plygnSeqNo : 5516,
plygnLo : 126.891663303938,
plygnLa : 37.5884850741021
},
{
setSeqNo : 1,
plygnSeqNo : 5517,
plygnLo : 126.891766734778,
plygnLa : 37.5885307770126
},
{
setSeqNo : 1,
plygnSeqNo : 5518,
plygnLo : 126.892052062315,
plygnLa : 37.5885487829273
},
{
setSeqNo : 1,
plygnSeqNo : 5519,
plygnLo : 126.892235725611,
plygnLa : 37.5885222127104
},
{
setSeqNo : 1,
plygnSeqNo : 5520,
plygnLo : 126.893225905023,
plygnLa : 37.5890040171917
},
{
setSeqNo : 1,
plygnSeqNo : 5521,
plygnLo : 126.893327884103,
plygnLa : 37.5890674674064
},
{
setSeqNo : 1,
plygnSeqNo : 5522,
plygnLo : 126.893667932879,
plygnLa : 37.5890556693287
},
{
setSeqNo : 1,
plygnSeqNo : 5523,
plygnLo : 126.893840575486,
plygnLa : 37.5890713145238
},
{
setSeqNo : 1,
plygnSeqNo : 5524,
plygnLo : 126.893974246835,
plygnLa : 37.5890010418543
},
{
setSeqNo : 1,
plygnSeqNo : 5525,
plygnLo : 126.894267471164,
plygnLa : 37.5888202748793
},
{
setSeqNo : 1,
plygnSeqNo : 5526,
plygnLo : 126.895231217551,
plygnLa : 37.5888645024687
},
{
setSeqNo : 1,
plygnSeqNo : 5527,
plygnLo : 126.895687386277,
plygnLa : 37.5887981854237
},
{
setSeqNo : 1,
plygnSeqNo : 5528,
plygnLo : 126.895954432579,
plygnLa : 37.588733940597
},
{
setSeqNo : 1,
plygnSeqNo : 5529,
plygnLo : 126.89641421377,
plygnLa : 37.588738296833
},
{
setSeqNo : 1,
plygnSeqNo : 5530,
plygnLo : 126.896859034168,
plygnLa : 37.5885666589033
},
{
setSeqNo : 1,
plygnSeqNo : 5531,
plygnLo : 126.896940706908,
plygnLa : 37.5886112206548
},
{
setSeqNo : 1,
plygnSeqNo : 5532,
plygnLo : 126.897572667564,
plygnLa : 37.588962874897
},
{
setSeqNo : 1,
plygnSeqNo : 5533,
plygnLo : 126.897962408625,
plygnLa : 37.5890904905057
},
{
setSeqNo : 1,
plygnSeqNo : 5534,
plygnLo : 126.898082088174,
plygnLa : 37.5895388343452
},
{
setSeqNo : 1,
plygnSeqNo : 5535,
plygnLo : 126.899468743522,
plygnLa : 37.5897872459993
},
{
setSeqNo : 1,
plygnSeqNo : 5536,
plygnLo : 126.89948427935,
plygnLa : 37.5898097831782
},
{
setSeqNo : 1,
plygnSeqNo : 5537,
plygnLo : 126.899498095269,
plygnLa : 37.5897917760546
},
{
setSeqNo : 1,
plygnSeqNo : 5538,
plygnLo : 126.899643838188,
plygnLa : 37.5898169582742
},
{
setSeqNo : 1,
plygnSeqNo : 5539,
plygnLo : 126.899750353174,
plygnLa : 37.5899381246671
},
{
setSeqNo : 1,
plygnSeqNo : 5540,
plygnLo : 126.899575448211,
plygnLa : 37.5906731139703
},
{
setSeqNo : 1,
plygnSeqNo : 5541,
plygnLo : 126.899710356506,
plygnLa : 37.5909894204614
},
{
setSeqNo : 1,
plygnSeqNo : 5542,
plygnLo : 126.899696409222,
plygnLa : 37.5913621925541
},
{
setSeqNo : 1,
plygnSeqNo : 5543,
plygnLo : 126.899566453195,
plygnLa : 37.5916898120027
},
{
setSeqNo : 1,
plygnSeqNo : 5544,
plygnLo : 126.899282404503,
plygnLa : 37.5921493482764
},
{
setSeqNo : 1,
plygnSeqNo : 5545,
plygnLo : 126.898961629886,
plygnLa : 37.5926784075942
},
{
setSeqNo : 1,
plygnSeqNo : 5546,
plygnLo : 126.899299471139,
plygnLa : 37.5928681864471
},
{
setSeqNo : 1,
plygnSeqNo : 5547,
plygnLo : 126.899413911591,
plygnLa : 37.5931419599089
},
{
setSeqNo : 1,
plygnSeqNo : 5548,
plygnLo : 126.899778211357,
plygnLa : 37.5933866664709
},
{
setSeqNo : 1,
plygnSeqNo : 5549,
plygnLo : 126.899826585017,
plygnLa : 37.5934677964695
},
{
setSeqNo : 1,
plygnSeqNo : 5550,
plygnLo : 126.899878092043,
plygnLa : 37.5935770844855
},
{
setSeqNo : 1,
plygnSeqNo : 5551,
plygnLo : 126.900020699478,
plygnLa : 37.5938320143282
},
{
setSeqNo : 1,
plygnSeqNo : 5552,
plygnLo : 126.900355098514,
plygnLa : 37.594211274005
},
{
setSeqNo : 1,
plygnSeqNo : 5553,
plygnLo : 126.901173393396,
plygnLa : 37.5947196219844
},
{
setSeqNo : 1,
plygnSeqNo : 5554,
plygnLo : 126.901829757563,
plygnLa : 37.5951413877306
},
{
setSeqNo : 1,
plygnSeqNo : 5555,
plygnLo : 126.901791809773,
plygnLa : 37.5954733139928
},
{
setSeqNo : 1,
plygnSeqNo : 5556,
plygnLo : 126.901784260339,
plygnLa : 37.5955569290881
},
{
setSeqNo : 1,
plygnSeqNo : 5557,
plygnLo : 126.901628152256,
plygnLa : 37.5960005303767
},
{
setSeqNo : 1,
plygnSeqNo : 5558,
plygnLo : 126.901210549948,
plygnLa : 37.5963017276179
},
{
setSeqNo : 1,
plygnSeqNo : 5559,
plygnLo : 126.901224700925,
plygnLa : 37.5964394192321
},
{
setSeqNo : 1,
plygnSeqNo : 5560,
plygnLo : 126.901201108125,
plygnLa : 37.596746580608
},
{
setSeqNo : 1,
plygnSeqNo : 5561,
plygnLo : 126.901076294614,
plygnLa : 37.5969373740352
},
{
setSeqNo : 1,
plygnSeqNo : 5562,
plygnLo : 126.901011880546,
plygnLa : 37.5973371313406
},
{
setSeqNo : 1,
plygnSeqNo : 5563,
plygnLo : 126.901094607753,
plygnLa : 37.5975249938209
},
{
setSeqNo : 1,
plygnSeqNo : 5564,
plygnLo : 126.901253506897,
plygnLa : 37.5979088927824
},
{
setSeqNo : 1,
plygnSeqNo : 5565,
plygnLo : 126.901171369661,
plygnLa : 37.598207552912
},
{
setSeqNo : 1,
plygnSeqNo : 5566,
plygnLo : 126.901179254021,
plygnLa : 37.5982322102955
},
{
setSeqNo : 1,
plygnSeqNo : 5567,
plygnLo : 126.901261222364,
plygnLa : 37.5984886275358
},
{
setSeqNo : 1,
plygnSeqNo : 5568,
plygnLo : 126.901297261083,
plygnLa : 37.5991928300453
},
{
setSeqNo : 1,
plygnSeqNo : 5569,
plygnLo : 126.901322687268,
plygnLa : 37.5993665712663
},
{
setSeqNo : 1,
plygnSeqNo : 5570,
plygnLo : 126.901016793735,
plygnLa : 37.5998731147743
},
{
setSeqNo : 1,
plygnSeqNo : 5571,
plygnLo : 126.901012490759,
plygnLa : 37.6001755062474
},
{
setSeqNo : 1,
plygnSeqNo : 5572,
plygnLo : 126.900529022323,
plygnLa : 37.6008806726908
},
{
setSeqNo : 1,
plygnSeqNo : 5573,
plygnLo : 126.900293217217,
plygnLa : 37.6012327004632
},
{
setSeqNo : 1,
plygnSeqNo : 5574,
plygnLo : 126.899982302115,
plygnLa : 37.6020402187732
},
{
setSeqNo : 1,
plygnSeqNo : 5575,
plygnLo : 126.90020453949,
plygnLa : 37.6025677643268
},
{
setSeqNo : 1,
plygnSeqNo : 5576,
plygnLo : 126.900152654588,
plygnLa : 37.6031164807166
},
{
setSeqNo : 1,
plygnSeqNo : 5577,
plygnLo : 126.900770910632,
plygnLa : 37.603369843538
},
{
setSeqNo : 1,
plygnSeqNo : 5578,
plygnLo : 126.901306838103,
plygnLa : 37.6033990232483
},
{
setSeqNo : 1,
plygnSeqNo : 5579,
plygnLo : 126.902108473574,
plygnLa : 37.6037417959242
},
{
setSeqNo : 1,
plygnSeqNo : 5580,
plygnLo : 126.902029914352,
plygnLa : 37.604269082835
},
{
setSeqNo : 1,
plygnSeqNo : 5581,
plygnLo : 126.901848600632,
plygnLa : 37.6046217191215
},
{
setSeqNo : 1,
plygnSeqNo : 5582,
plygnLo : 126.90182346432,
plygnLa : 37.6047630441264
},
{
setSeqNo : 1,
plygnSeqNo : 5583,
plygnLo : 126.901505407804,
plygnLa : 37.6053565759169
},
{
setSeqNo : 1,
plygnSeqNo : 5584,
plygnLo : 126.901749647404,
plygnLa : 37.6057154810404
},
{
setSeqNo : 1,
plygnSeqNo : 5585,
plygnLo : 126.901708563353,
plygnLa : 37.6057385384376
},
{
setSeqNo : 1,
plygnSeqNo : 5586,
plygnLo : 126.901725881676,
plygnLa : 37.6057523482005
},
{
setSeqNo : 1,
plygnSeqNo : 5587,
plygnLo : 126.901743383746,
plygnLa : 37.6057653188394
},
{
setSeqNo : 1,
plygnSeqNo : 5588,
plygnLo : 126.901637560042,
plygnLa : 37.605906007508
},
{
setSeqNo : 1,
plygnSeqNo : 5589,
plygnLo : 126.901579421067,
plygnLa : 37.6059785965233
},
{
setSeqNo : 1,
plygnSeqNo : 5590,
plygnLo : 126.901413862237,
plygnLa : 37.6061907447018
},
{
setSeqNo : 1,
plygnSeqNo : 5591,
plygnLo : 126.901246744218,
plygnLa : 37.6067787822542
},
{
setSeqNo : 1,
plygnSeqNo : 5592,
plygnLo : 126.900874742653,
plygnLa : 37.6081212069494
},
{
setSeqNo : 1,
plygnSeqNo : 5593,
plygnLo : 126.900775750128,
plygnLa : 37.6084392872776
},
{
setSeqNo : 1,
plygnSeqNo : 5594,
plygnLo : 126.900675623944,
plygnLa : 37.6089420572236
},
{
setSeqNo : 1,
plygnSeqNo : 5595,
plygnLo : 126.900601148218,
plygnLa : 37.6093195590039
},
{
setSeqNo : 1,
plygnSeqNo : 5596,
plygnLo : 126.900705260771,
plygnLa : 37.6103188902579
},
{
setSeqNo : 1,
plygnSeqNo : 5597,
plygnLo : 126.900304321623,
plygnLa : 37.6111913825005
},
{
setSeqNo : 1,
plygnSeqNo : 5598,
plygnLo : 126.900790524984,
plygnLa : 37.6120449092855
},
{
setSeqNo : 1,
plygnSeqNo : 5599,
plygnLo : 126.90088992049,
plygnLa : 37.6122220922475
},
{
setSeqNo : 1,
plygnSeqNo : 5600,
plygnLo : 126.900961950157,
plygnLa : 37.6123502635537
},
{
setSeqNo : 1,
plygnSeqNo : 5601,
plygnLo : 126.900913491589,
plygnLa : 37.6127246978073
},
{
setSeqNo : 1,
plygnSeqNo : 5602,
plygnLo : 126.901000720688,
plygnLa : 37.612870892108
},
{
setSeqNo : 1,
plygnSeqNo : 5603,
plygnLo : 126.901734240791,
plygnLa : 37.6140692610707
},
{
setSeqNo : 1,
plygnSeqNo : 5604,
plygnLo : 126.901799182151,
plygnLa : 37.6144702526466
},
{
setSeqNo : 1,
plygnSeqNo : 5605,
plygnLo : 126.901728866386,
plygnLa : 37.6147762366975
},
{
setSeqNo : 1,
plygnSeqNo : 5606,
plygnLo : 126.901893087415,
plygnLa : 37.6150551224375
},
{
setSeqNo : 1,
plygnSeqNo : 5607,
plygnLo : 126.901917094072,
plygnLa : 37.6150925865295
},
{
setSeqNo : 1,
plygnSeqNo : 5608,
plygnLo : 126.901822600974,
plygnLa : 37.6157536023043
},
{
setSeqNo : 1,
plygnSeqNo : 5609,
plygnLo : 126.901899027975,
plygnLa : 37.6158997966904
},
{
setSeqNo : 1,
plygnSeqNo : 5610,
plygnLo : 126.902149012005,
plygnLa : 37.6163696433535
},
{
setSeqNo : 1,
plygnSeqNo : 5611,
plygnLo : 126.902473189969,
plygnLa : 37.6166655459699
},
{
setSeqNo : 1,
plygnSeqNo : 5612,
plygnLo : 126.902478360846,
plygnLa : 37.6168992456481
},
{
setSeqNo : 1,
plygnSeqNo : 5613,
plygnLo : 126.902798620986,
plygnLa : 37.6170864682119
},
{
setSeqNo : 1,
plygnSeqNo : 5614,
plygnLo : 126.903125569921,
plygnLa : 37.617304382041
},
{
setSeqNo : 1,
plygnSeqNo : 5615,
plygnLo : 126.903007771793,
plygnLa : 37.6177860295492
},
{
setSeqNo : 1,
plygnSeqNo : 5616,
plygnLo : 126.903051607396,
plygnLa : 37.6180938036269
},
{
setSeqNo : 1,
plygnSeqNo : 5617,
plygnLo : 126.903340160457,
plygnLa : 37.6183060548366
},
{
setSeqNo : 1,
plygnSeqNo : 5618,
plygnLo : 126.903361230893,
plygnLa : 37.6188393447169
},
{
setSeqNo : 1,
plygnSeqNo : 5619,
plygnLo : 126.903729056214,
plygnLa : 37.6187982590274
},
{
setSeqNo : 1,
plygnSeqNo : 5620,
plygnLo : 126.90427428542,
plygnLa : 37.6188313697124
},
{
setSeqNo : 1,
plygnSeqNo : 5621,
plygnLo : 126.904509409093,
plygnLa : 37.6189002628772
},
{
setSeqNo : 1,
plygnSeqNo : 5622,
plygnLo : 126.904700325704,
plygnLa : 37.6189429366334
},
{
setSeqNo : 1,
plygnSeqNo : 5623,
plygnLo : 126.904917583697,
plygnLa : 37.6189971735643
},
{
setSeqNo : 1,
plygnSeqNo : 5624,
plygnLo : 126.905097691186,
plygnLa : 37.6190418106002
},
{
setSeqNo : 1,
plygnSeqNo : 5625,
plygnLo : 126.905231090058,
plygnLa : 37.6190745799527
},
{
setSeqNo : 1,
plygnSeqNo : 5626,
plygnLo : 126.905223866449,
plygnLa : 37.619211802526
},
{
setSeqNo : 1,
plygnSeqNo : 5627,
plygnLo : 126.90522347413,
plygnLa : 37.6192192905928
},
{
setSeqNo : 1,
plygnSeqNo : 5628,
plygnLo : 126.905189256874,
plygnLa : 37.6198139079234
},
{
setSeqNo : 1,
plygnSeqNo : 5629,
plygnLo : 126.905213970474,
plygnLa : 37.6198679883175
},
{
setSeqNo : 1,
plygnSeqNo : 5630,
plygnLo : 126.90555757916,
plygnLa : 37.62062311748
},
{
setSeqNo : 1,
plygnSeqNo : 5631,
plygnLo : 126.905612693551,
plygnLa : 37.6207039707032
},
{
setSeqNo : 1,
plygnSeqNo : 5632,
plygnLo : 126.906278220445,
plygnLa : 37.6213520898596
},
{
setSeqNo : 1,
plygnSeqNo : 5633,
plygnLo : 126.907117467229,
plygnLa : 37.6219415000772
},
{
setSeqNo : 1,
plygnSeqNo : 5634,
plygnLo : 126.907140422718,
plygnLa : 37.6225468586052
},
{
setSeqNo : 1,
plygnSeqNo : 5635,
plygnLo : 126.907113111154,
plygnLa : 37.6228695060934
},
{
setSeqNo : 1,
plygnSeqNo : 5636,
plygnLo : 126.907100194055,
plygnLa : 37.6230071743102
},
{
setSeqNo : 1,
plygnSeqNo : 5637,
plygnLo : 126.907142807724,
plygnLa : 37.6233126937904
},
{
setSeqNo : 1,
plygnSeqNo : 5638,
plygnLo : 126.907109014845,
plygnLa : 37.623448661726
},
{
setSeqNo : 1,
plygnSeqNo : 5639,
plygnLo : 126.906999538674,
plygnLa : 37.6239367867295
},
{
setSeqNo : 1,
plygnSeqNo : 5640,
plygnLo : 126.906748878046,
plygnLa : 37.6242417914682
},
{
setSeqNo : 1,
plygnSeqNo : 5641,
plygnLo : 126.906627147731,
plygnLa : 37.6244956624304
},
{
setSeqNo : 1,
plygnSeqNo : 5642,
plygnLo : 126.90702183251,
plygnLa : 37.624786266931
},
{
setSeqNo : 1,
plygnSeqNo : 5643,
plygnLo : 126.907439856983,
plygnLa : 37.6250940600963
},
{
setSeqNo : 1,
plygnSeqNo : 5644,
plygnLo : 126.907789973817,
plygnLa : 37.62550231097
},
{
setSeqNo : 1,
plygnSeqNo : 5645,
plygnLo : 126.908395753124,
plygnLa : 37.6259924168102
},
{
setSeqNo : 1,
plygnSeqNo : 5646,
plygnLo : 126.908610825033,
plygnLa : 37.6262656927523
},
{
setSeqNo : 1,
plygnSeqNo : 5647,
plygnLo : 126.9089031701,
plygnLa : 37.6274585926998
},
{
setSeqNo : 1,
plygnSeqNo : 5648,
plygnLo : 126.908801843176,
plygnLa : 37.6290878785158
},
{
setSeqNo : 1,
plygnSeqNo : 5649,
plygnLo : 126.908770042088,
plygnLa : 37.6293277391044
},
{
setSeqNo : 1,
plygnSeqNo : 5650,
plygnLo : 126.908382095241,
plygnLa : 37.6299941573427
},
{
setSeqNo : 1,
plygnSeqNo : 5651,
plygnLo : 126.908118272392,
plygnLa : 37.6300606757705
},
{
setSeqNo : 1,
plygnSeqNo : 5652,
plygnLo : 126.907294155275,
plygnLa : 37.6308672439534
},
{
setSeqNo : 1,
plygnSeqNo : 5653,
plygnLo : 126.906929397302,
plygnLa : 37.6318045276233
},
{
setSeqNo : 1,
plygnSeqNo : 5654,
plygnLo : 126.906757399117,
plygnLa : 37.6327363433841
},
{
setSeqNo : 1,
plygnSeqNo : 5655,
plygnLo : 126.906202193722,
plygnLa : 37.6332201717141
},
{
setSeqNo : 1,
plygnSeqNo : 5656,
plygnLo : 126.907096247567,
plygnLa : 37.6333979871335
},
{
setSeqNo : 1,
plygnSeqNo : 5657,
plygnLo : 126.908112671169,
plygnLa : 37.633829859272
},
{
setSeqNo : 1,
plygnSeqNo : 5658,
plygnLo : 126.909122457271,
plygnLa : 37.6343329494746
},
{
setSeqNo : 1,
plygnSeqNo : 5659,
plygnLo : 126.909806593988,
plygnLa : 37.6349419238188
},
{
setSeqNo : 1,
plygnSeqNo : 5660,
plygnLo : 126.910854458508,
plygnLa : 37.63531663739
},
{
setSeqNo : 1,
plygnSeqNo : 5661,
plygnLo : 126.911210371459,
plygnLa : 37.6359056189219
},
{
setSeqNo : 1,
plygnSeqNo : 5662,
plygnLo : 126.910796907693,
plygnLa : 37.6368337146402
},
{
setSeqNo : 1,
plygnSeqNo : 5663,
plygnLo : 126.910315962795,
plygnLa : 37.6379130108802
},
{
setSeqNo : 1,
plygnSeqNo : 5664,
plygnLo : 126.910258465635,
plygnLa : 37.6380981278083
},
{
setSeqNo : 1,
plygnSeqNo : 5665,
plygnLo : 126.910218175587,
plygnLa : 37.6382276933083
},
{
setSeqNo : 1,
plygnSeqNo : 5666,
plygnLo : 126.910170312522,
plygnLa : 37.6383346639441
},
{
setSeqNo : 1,
plygnSeqNo : 5667,
plygnLo : 126.91009200283,
plygnLa : 37.6385094553047
},
{
setSeqNo : 1,
plygnSeqNo : 5668,
plygnLo : 126.91055653495,
plygnLa : 37.6395234140846
},
{
setSeqNo : 1,
plygnSeqNo : 5669,
plygnLo : 126.910794206049,
plygnLa : 37.6400261713552
},
{
setSeqNo : 1,
plygnSeqNo : 5670,
plygnLo : 126.910841470294,
plygnLa : 37.6401508126927
},
{
setSeqNo : 1,
plygnSeqNo : 5671,
plygnLo : 126.910892067598,
plygnLa : 37.6402843310462
},
{
setSeqNo : 1,
plygnSeqNo : 5672,
plygnLo : 126.911151476794,
plygnLa : 37.6409791837408
},
{
setSeqNo : 1,
plygnSeqNo : 5673,
plygnLo : 126.911202817123,
plygnLa : 37.6411361549426
},
{
setSeqNo : 1,
plygnSeqNo : 5674,
plygnLo : 126.911215212343,
plygnLa : 37.6411741141537
},
{
setSeqNo : 1,
plygnSeqNo : 5675,
plygnLo : 126.91133440696,
plygnLa : 37.641538793178
},
{
setSeqNo : 1,
plygnSeqNo : 5676,
plygnLo : 126.912066737636,
plygnLa : 37.64377970243
},
{
setSeqNo : 1,
plygnSeqNo : 5677,
plygnLo : 126.912085054349,
plygnLa : 37.6438407651357
},
{
setSeqNo : 1,
plygnSeqNo : 5678,
plygnLo : 126.912107197127,
plygnLa : 37.6439148877284
},
{
setSeqNo : 1,
plygnSeqNo : 5679,
plygnLo : 126.912175260167,
plygnLa : 37.6441418687578
},
{
setSeqNo : 1,
plygnSeqNo : 5680,
plygnLo : 126.91220848157,
plygnLa : 37.6441990524742
},
{
setSeqNo : 1,
plygnSeqNo : 5681,
plygnLo : 126.912260633285,
plygnLa : 37.6442587802204
},
{
setSeqNo : 1,
plygnSeqNo : 5682,
plygnLo : 126.912279860497,
plygnLa : 37.6443153952286
},
{
setSeqNo : 1,
plygnSeqNo : 5683,
plygnLo : 126.912029603939,
plygnLa : 37.6443974186011
},
{
setSeqNo : 1,
plygnSeqNo : 5684,
plygnLo : 126.911906382204,
plygnLa : 37.6444447894624
},
{
setSeqNo : 1,
plygnSeqNo : 5685,
plygnLo : 126.911775167835,
plygnLa : 37.6444950893918
},
{
setSeqNo : 1,
plygnSeqNo : 5686,
plygnLo : 126.911484034072,
plygnLa : 37.6446273122992
},
{
setSeqNo : 1,
plygnSeqNo : 5687,
plygnLo : 126.911185190389,
plygnLa : 37.6447644823752
},
{
setSeqNo : 1,
plygnSeqNo : 5688,
plygnLo : 126.910965300123,
plygnLa : 37.6448239577868
},
{
setSeqNo : 1,
plygnSeqNo : 5689,
plygnLo : 126.910884530237,
plygnLa : 37.6448465471408
},
{
setSeqNo : 1,
plygnSeqNo : 5690,
plygnLo : 126.910663628493,
plygnLa : 37.6449082378095
},
{
setSeqNo : 1,
plygnSeqNo : 5691,
plygnLo : 126.910589634078,
plygnLa : 37.6449303436859
},
{
setSeqNo : 1,
plygnSeqNo : 5692,
plygnLo : 126.910495360657,
plygnLa : 37.644958418313
},
{
setSeqNo : 1,
plygnSeqNo : 5693,
plygnLo : 126.91024149458,
plygnLa : 37.6450431759811
},
{
setSeqNo : 1,
plygnSeqNo : 5694,
plygnLo : 126.910140789115,
plygnLa : 37.6450768025332
},
{
setSeqNo : 1,
plygnSeqNo : 5695,
plygnLo : 126.910140739545,
plygnLa : 37.6451179783798
},
{
setSeqNo : 1,
plygnSeqNo : 5696,
plygnLo : 126.910140722779,
plygnLa : 37.6451307721081
},
{
setSeqNo : 1,
plygnSeqNo : 5697,
plygnLo : 126.910116219538,
plygnLa : 37.6451451950138
},
{
setSeqNo : 1,
plygnSeqNo : 5698,
plygnLo : 126.91007357323,
plygnLa : 37.6451701920009
},
{
setSeqNo : 1,
plygnSeqNo : 5699,
plygnLo : 126.909915018507,
plygnLa : 37.6452553809716
},
{
setSeqNo : 1,
plygnSeqNo : 5700,
plygnLo : 126.909725324891,
plygnLa : 37.6453146354087
},
{
setSeqNo : 1,
plygnSeqNo : 5701,
plygnLo : 126.909652185118,
plygnLa : 37.6453314725284
},
{
setSeqNo : 1,
plygnSeqNo : 5702,
plygnLo : 126.90944139546,
plygnLa : 37.6454256306267
},
{
setSeqNo : 1,
plygnSeqNo : 5703,
plygnLo : 126.909386643066,
plygnLa : 37.645461762995
},
{
setSeqNo : 1,
plygnSeqNo : 5704,
plygnLo : 126.909340319518,
plygnLa : 37.6454922139923
},
{
setSeqNo : 1,
plygnSeqNo : 5705,
plygnLo : 126.90928406561,
plygnLa : 37.6455175248996
},
{
setSeqNo : 1,
plygnSeqNo : 5706,
plygnLo : 126.90921621176,
plygnLa : 37.6455479329527
},
{
setSeqNo : 1,
plygnSeqNo : 5707,
plygnLo : 126.908777164928,
plygnLa : 37.6458102780451
},
{
setSeqNo : 1,
plygnSeqNo : 5708,
plygnLo : 126.908745633711,
plygnLa : 37.6458251726607
},
{
setSeqNo : 1,
plygnSeqNo : 5709,
plygnLo : 126.908484889131,
plygnLa : 37.6459336532339
},
{
setSeqNo : 1,
plygnSeqNo : 5710,
plygnLo : 126.908420820714,
plygnLa : 37.6459628920759
},
{
setSeqNo : 1,
plygnSeqNo : 5711,
plygnLo : 126.908250963604,
plygnLa : 37.646040324148
},
{
setSeqNo : 1,
plygnSeqNo : 5712,
plygnLo : 126.908166895021,
plygnLa : 37.6460800712222
},
{
setSeqNo : 1,
plygnSeqNo : 5713,
plygnLo : 126.908128118465,
plygnLa : 37.646098357729
},
{
setSeqNo : 1,
plygnSeqNo : 5714,
plygnLo : 126.90795114168,
plygnLa : 37.6461784668831
},
{
setSeqNo : 1,
plygnSeqNo : 5715,
plygnLo : 126.907705175685,
plygnLa : 37.6462898211438
},
{
setSeqNo : 1,
plygnSeqNo : 5716,
plygnLo : 126.907560306144,
plygnLa : 37.6465172928586
},
{
setSeqNo : 1,
plygnSeqNo : 5717,
plygnLo : 126.907473404338,
plygnLa : 37.6466556039761
},
{
setSeqNo : 1,
plygnSeqNo : 5718,
plygnLo : 126.907291561602,
plygnLa : 37.6469445910313
},
{
setSeqNo : 1,
plygnSeqNo : 5719,
plygnLo : 126.907237309634,
plygnLa : 37.6469959216706
},
{
setSeqNo : 1,
plygnSeqNo : 5720,
plygnLo : 126.906973909998,
plygnLa : 37.6472450563196
},
{
setSeqNo : 1,
plygnSeqNo : 5721,
plygnLo : 126.906796186963,
plygnLa : 37.6474098815118
},
{
setSeqNo : 1,
plygnSeqNo : 5722,
plygnLo : 126.906622002087,
plygnLa : 37.6475713139747
},
{
setSeqNo : 1,
plygnSeqNo : 5723,
plygnLo : 126.906479399801,
plygnLa : 37.6477034616104
},
{
setSeqNo : 1,
plygnSeqNo : 5724,
plygnLo : 126.906444426839,
plygnLa : 37.647734760192
},
{
setSeqNo : 1,
plygnSeqNo : 5725,
plygnLo : 126.906385062392,
plygnLa : 37.6477877084911
},
{
setSeqNo : 1,
plygnSeqNo : 5726,
plygnLo : 126.90634871424,
plygnLa : 37.6478217458184
},
{
setSeqNo : 1,
plygnSeqNo : 5727,
plygnLo : 126.906323300181,
plygnLa : 37.6478470426952
},
{
setSeqNo : 1,
plygnSeqNo : 5728,
plygnLo : 126.906236096017,
plygnLa : 37.6479260325586
},
{
setSeqNo : 1,
plygnSeqNo : 5729,
plygnLo : 126.906222335011,
plygnLa : 37.6479384902867
},
{
setSeqNo : 1,
plygnSeqNo : 5730,
plygnLo : 126.90620493059,
plygnLa : 37.6479543344234
},
{
setSeqNo : 1,
plygnSeqNo : 5731,
plygnLo : 126.906096637387,
plygnLa : 37.6480529126515
},
{
setSeqNo : 1,
plygnSeqNo : 5732,
plygnLo : 126.905949102112,
plygnLa : 37.6481879389258
},
{
setSeqNo : 1,
plygnSeqNo : 5733,
plygnLo : 126.905880761738,
plygnLa : 37.6482504574714
},
{
setSeqNo : 1,
plygnSeqNo : 5734,
plygnLo : 126.905648345938,
plygnLa : 37.6484604466437
},
{
setSeqNo : 1,
plygnSeqNo : 5735,
plygnLo : 126.905625158661,
plygnLa : 37.6484813942616
},
{
setSeqNo : 1,
plygnSeqNo : 5736,
plygnLo : 126.905414509485,
plygnLa : 37.6486574533915
},
{
setSeqNo : 1,
plygnSeqNo : 5737,
plygnLo : 126.905353503573,
plygnLa : 37.6487081736642
},
{
setSeqNo : 1,
plygnSeqNo : 5738,
plygnLo : 126.905341037675,
plygnLa : 37.6487185247694
},
{
setSeqNo : 1,
plygnSeqNo : 5739,
plygnLo : 126.905228494017,
plygnLa : 37.6488059995044
},
{
setSeqNo : 1,
plygnSeqNo : 5740,
plygnLo : 126.905015637541,
plygnLa : 37.6489688387292
},
{
setSeqNo : 1,
plygnSeqNo : 5741,
plygnLo : 126.904822392229,
plygnLa : 37.64911861137
},
{
setSeqNo : 1,
plygnSeqNo : 5742,
plygnLo : 126.904810164316,
plygnLa : 37.6491280806614
},
{
setSeqNo : 1,
plygnSeqNo : 5743,
plygnLo : 126.904805681473,
plygnLa : 37.6491682323151
},
{
setSeqNo : 1,
plygnSeqNo : 5744,
plygnLo : 126.904802023747,
plygnLa : 37.6492010527112
},
{
setSeqNo : 1,
plygnSeqNo : 5745,
plygnLo : 126.904986721395,
plygnLa : 37.6490828881171
},
{
setSeqNo : 1,
plygnSeqNo : 5746,
plygnLo : 126.905164545127,
plygnLa : 37.6489692491385
},
{
setSeqNo : 1,
plygnSeqNo : 5747,
plygnLo : 126.905540531799,
plygnLa : 37.6488898727334
},
{
setSeqNo : 1,
plygnSeqNo : 5748,
plygnLo : 126.90592691946,
plygnLa : 37.6487054871544
},
{
setSeqNo : 1,
plygnSeqNo : 5749,
plygnLo : 126.906029313646,
plygnLa : 37.6486588363375
},
{
setSeqNo : 1,
plygnSeqNo : 5750,
plygnLo : 126.90609415364,
plygnLa : 37.6486301649353
},
{
setSeqNo : 1,
plygnSeqNo : 5751,
plygnLo : 126.906172066855,
plygnLa : 37.6485863592388
},
{
setSeqNo : 1,
plygnSeqNo : 5752,
plygnLo : 126.906437785696,
plygnLa : 37.6484370931688
},
{
setSeqNo : 1,
plygnSeqNo : 5753,
plygnLo : 126.906486796614,
plygnLa : 37.6484089228392
},
{
setSeqNo : 1,
plygnSeqNo : 5754,
plygnLo : 126.906522210021,
plygnLa : 37.6483886532536
},
{
setSeqNo : 1,
plygnSeqNo : 5755,
plygnLo : 126.906642870128,
plygnLa : 37.6483223039946
},
{
setSeqNo : 1,
plygnSeqNo : 5756,
plygnLo : 126.906922929123,
plygnLa : 37.6481670283681
},
{
setSeqNo : 1,
plygnSeqNo : 5757,
plygnLo : 126.907109298803,
plygnLa : 37.6480637278043
},
{
setSeqNo : 1,
plygnSeqNo : 5758,
plygnLo : 126.907225662543,
plygnLa : 37.6479812909265
},
{
setSeqNo : 1,
plygnSeqNo : 5759,
plygnLo : 126.907300630416,
plygnLa : 37.6479276542704
},
{
setSeqNo : 1,
plygnSeqNo : 5760,
plygnLo : 126.907500579982,
plygnLa : 37.6477851431825
},
{
setSeqNo : 1,
plygnSeqNo : 5761,
plygnLo : 126.907552227264,
plygnLa : 37.6477483799742
},
{
setSeqNo : 1,
plygnSeqNo : 5762,
plygnLo : 126.907620979803,
plygnLa : 37.6477002858059
},
{
setSeqNo : 1,
plygnSeqNo : 5763,
plygnLo : 126.907659436481,
plygnLa : 37.6476741348709
},
{
setSeqNo : 1,
plygnSeqNo : 5764,
plygnLo : 126.907776274222,
plygnLa : 37.6476103569033
},
{
setSeqNo : 1,
plygnSeqNo : 5765,
plygnLo : 126.908047263611,
plygnLa : 37.6474625324022
},
{
setSeqNo : 1,
plygnSeqNo : 5766,
plygnLo : 126.90812323487,
plygnLa : 37.6474200678734
},
{
setSeqNo : 1,
plygnSeqNo : 5767,
plygnLo : 126.908263603044,
plygnLa : 37.6473410368604
},
{
setSeqNo : 1,
plygnSeqNo : 5768,
plygnLo : 126.908413665205,
plygnLa : 37.6472566261659
},
{
setSeqNo : 1,
plygnSeqNo : 5769,
plygnLo : 126.908513286767,
plygnLa : 37.6473312688228
},
{
setSeqNo : 1,
plygnSeqNo : 5770,
plygnLo : 126.908538269584,
plygnLa : 37.6473500286102
},
{
setSeqNo : 1,
plygnSeqNo : 5771,
plygnLo : 126.908577326694,
plygnLa : 37.6473787101174
},
{
setSeqNo : 1,
plygnSeqNo : 5772,
plygnLo : 126.90859089696,
plygnLa : 37.6473905063551
},
{
setSeqNo : 1,
plygnSeqNo : 5773,
plygnLo : 126.908612829079,
plygnLa : 37.6474057223037
},
{
setSeqNo : 1,
plygnSeqNo : 5774,
plygnLo : 126.908623563022,
plygnLa : 37.6474106684126
},
{
setSeqNo : 1,
plygnSeqNo : 5775,
plygnLo : 126.9086354101,
plygnLa : 37.6474162367955
},
{
setSeqNo : 1,
plygnSeqNo : 5776,
plygnLo : 126.908947320894,
plygnLa : 37.6472633153939
},
{
setSeqNo : 1,
plygnSeqNo : 5777,
plygnLo : 126.909237456959,
plygnLa : 37.6471235317829
},
{
setSeqNo : 1,
plygnSeqNo : 5778,
plygnLo : 126.909491500929,
plygnLa : 37.6469950622973
},
{
setSeqNo : 1,
plygnSeqNo : 5779,
plygnLo : 126.909582102191,
plygnLa : 37.6469500200789
},
{
setSeqNo : 1,
plygnSeqNo : 5780,
plygnLo : 126.909727264938,
plygnLa : 37.6468779478863
},
{
setSeqNo : 1,
plygnSeqNo : 5781,
plygnLo : 126.909857536445,
plygnLa : 37.6467592545761
},
{
setSeqNo : 1,
plygnSeqNo : 5782,
plygnLo : 126.909966582508,
plygnLa : 37.6466620700934
},
{
setSeqNo : 1,
plygnSeqNo : 5783,
plygnLo : 126.910139037766,
plygnLa : 37.6465056593207
},
{
setSeqNo : 1,
plygnSeqNo : 5784,
plygnLo : 126.910304554138,
plygnLa : 37.6463833089748
},
{
setSeqNo : 1,
plygnSeqNo : 5785,
plygnLo : 126.910438515375,
plygnLa : 37.6462862683903
},
{
setSeqNo : 1,
plygnSeqNo : 5786,
plygnLo : 126.910435895266,
plygnLa : 37.6462787438292
},
{
setSeqNo : 1,
plygnSeqNo : 5787,
plygnLo : 126.910496339808,
plygnLa : 37.6462559052441
},
{
setSeqNo : 1,
plygnSeqNo : 5788,
plygnLo : 126.910558609941,
plygnLa : 37.6462143564953
},
{
setSeqNo : 1,
plygnSeqNo : 5789,
plygnLo : 126.910602587335,
plygnLa : 37.6461850447224
},
{
setSeqNo : 1,
plygnSeqNo : 5790,
plygnLo : 126.910726092344,
plygnLa : 37.6461026383702
},
{
setSeqNo : 1,
plygnSeqNo : 5791,
plygnLo : 126.910863229265,
plygnLa : 37.646011239882
},
{
setSeqNo : 1,
plygnSeqNo : 5792,
plygnLo : 126.910905208129,
plygnLa : 37.6459932534313
},
{
setSeqNo : 1,
plygnSeqNo : 5793,
plygnLo : 126.911005472254,
plygnLa : 37.645950533142
},
{
setSeqNo : 1,
plygnSeqNo : 5794,
plygnLo : 126.911033418669,
plygnLa : 37.6459384273351
},
{
setSeqNo : 1,
plygnSeqNo : 5795,
plygnLo : 126.911041626288,
plygnLa : 37.645934911724
},
{
setSeqNo : 1,
plygnSeqNo : 5796,
plygnLo : 126.911057733577,
plygnLa : 37.6459283273184
},
{
setSeqNo : 1,
plygnSeqNo : 5797,
plygnLo : 126.911210586047,
plygnLa : 37.6458650618292
},
{
setSeqNo : 1,
plygnSeqNo : 5798,
plygnLo : 126.911313761969,
plygnLa : 37.6458224152223
},
{
setSeqNo : 1,
plygnSeqNo : 5799,
plygnLo : 126.911673708195,
plygnLa : 37.6455713190524
},
{
setSeqNo : 1,
plygnSeqNo : 5800,
plygnLo : 126.911709519361,
plygnLa : 37.6455464964519
},
{
setSeqNo : 1,
plygnSeqNo : 5801,
plygnLo : 126.911786441364,
plygnLa : 37.6454933260061
},
{
setSeqNo : 1,
plygnSeqNo : 5802,
plygnLo : 126.911854310002,
plygnLa : 37.6454393198381
},
{
setSeqNo : 1,
plygnSeqNo : 5803,
plygnLo : 126.911945589834,
plygnLa : 37.645365616865
},
{
setSeqNo : 1,
plygnSeqNo : 5804,
plygnLo : 126.912019272597,
plygnLa : 37.6453290742874
},
{
setSeqNo : 1,
plygnSeqNo : 5805,
plygnLo : 126.912141684027,
plygnLa : 37.6452688190988
},
{
setSeqNo : 1,
plygnSeqNo : 5806,
plygnLo : 126.912327745933,
plygnLa : 37.6451773666992
},
{
setSeqNo : 1,
plygnSeqNo : 5807,
plygnLo : 126.91250419555,
plygnLa : 37.6451345691064
},
{
setSeqNo : 1,
plygnSeqNo : 5808,
plygnLo : 126.912563233091,
plygnLa : 37.6451202885134
},
{
setSeqNo : 1,
plygnSeqNo : 5809,
plygnLo : 126.912679755297,
plygnLa : 37.6450961579529
},
{
setSeqNo : 1,
plygnSeqNo : 5810,
plygnLo : 126.912881221486,
plygnLa : 37.645063694191
},
{
setSeqNo : 1,
plygnSeqNo : 5811,
plygnLo : 126.912900543104,
plygnLa : 37.645060583093
},
{
setSeqNo : 1,
plygnSeqNo : 5812,
plygnLo : 126.91293170739,
plygnLa : 37.6450570017008
},
{
setSeqNo : 1,
plygnSeqNo : 5813,
plygnLo : 126.913045657388,
plygnLa : 37.6450418872548
},
{
setSeqNo : 1,
plygnSeqNo : 5814,
plygnLo : 126.913285705312,
plygnLa : 37.6450101824865
},
{
setSeqNo : 1,
plygnSeqNo : 5815,
plygnLo : 126.913363230706,
plygnLa : 37.6450007707623
},
{
setSeqNo : 1,
plygnSeqNo : 5816,
plygnLo : 126.913398610004,
plygnLa : 37.6449965351973
},
{
setSeqNo : 1,
plygnSeqNo : 5817,
plygnLo : 126.913457479795,
plygnLa : 37.6449525221162
},
{
setSeqNo : 1,
plygnSeqNo : 5818,
plygnLo : 126.913720824587,
plygnLa : 37.6447556931489
},
{
setSeqNo : 1,
plygnSeqNo : 5819,
plygnLo : 126.914606745963,
plygnLa : 37.6449086770448
},
{
setSeqNo : 1,
plygnSeqNo : 5820,
plygnLo : 126.915189328879,
plygnLa : 37.645116329667
},
{
setSeqNo : 1,
plygnSeqNo : 5821,
plygnLo : 126.915806124232,
plygnLa : 37.645143808088
},
{
setSeqNo : 1,
plygnSeqNo : 5822,
plygnLo : 126.917296309585,
plygnLa : 37.6452544577293
},
{
setSeqNo : 1,
plygnSeqNo : 5823,
plygnLo : 126.917341504307,
plygnLa : 37.6452578144916
},
{
setSeqNo : 1,
plygnSeqNo : 5824,
plygnLo : 126.91764727203,
plygnLa : 37.6452944775576
},
{
setSeqNo : 1,
plygnSeqNo : 5825,
plygnLo : 126.918116250108,
plygnLa : 37.6453507148382
},
{
setSeqNo : 1,
plygnSeqNo : 5826,
plygnLo : 126.918190751832,
plygnLa : 37.6453595784899
},
{
setSeqNo : 1,
plygnSeqNo : 5827,
plygnLo : 126.919153307097,
plygnLa : 37.6454742012697
},
{
setSeqNo : 1,
plygnSeqNo : 5828,
plygnLo : 126.919525352513,
plygnLa : 37.6455297719119
},
{
setSeqNo : 1,
plygnSeqNo : 5829,
plygnLo : 126.919871034646,
plygnLa : 37.6455815104699
},
{
setSeqNo : 1,
plygnSeqNo : 5830,
plygnLo : 126.920630816214,
plygnLa : 37.645676601568
},
{
setSeqNo : 1,
plygnSeqNo : 5831,
plygnLo : 126.921470857512,
plygnLa : 37.6457818500505
},
{
setSeqNo : 1,
plygnSeqNo : 5832,
plygnLo : 126.921662011545,
plygnLa : 37.6457914381012
},
{
setSeqNo : 1,
plygnSeqNo : 5833,
plygnLo : 126.921846230049,
plygnLa : 37.6458008081096
},
{
setSeqNo : 1,
plygnSeqNo : 5834,
plygnLo : 126.922141751763,
plygnLa : 37.6458223687755
},
{
setSeqNo : 1,
plygnSeqNo : 5835,
plygnLo : 126.922280081033,
plygnLa : 37.6458325085036
},
{
setSeqNo : 1,
plygnSeqNo : 5836,
plygnLo : 126.922862329689,
plygnLa : 37.6458776666891
},
{
setSeqNo : 1,
plygnSeqNo : 5837,
plygnLo : 126.923078788631,
plygnLa : 37.6459063458137
},
{
setSeqNo : 1,
plygnSeqNo : 5838,
plygnLo : 126.923122994612,
plygnLa : 37.6459122134714
},
{
setSeqNo : 1,
plygnSeqNo : 5839,
plygnLo : 126.92335565892,
plygnLa : 37.6459397654468
},
{
setSeqNo : 1,
plygnSeqNo : 5840,
plygnLo : 126.923395347111,
plygnLa : 37.6459444677498
},
{
setSeqNo : 1,
plygnSeqNo : 5841,
plygnLo : 126.923680154431,
plygnLa : 37.6460060397978
},
{
setSeqNo : 1,
plygnSeqNo : 5842,
plygnLo : 126.923975223426,
plygnLa : 37.6460729606649
},
{
setSeqNo : 1,
plygnSeqNo : 5843,
plygnLo : 126.924081901031,
plygnLa : 37.6460970424562
},
{
setSeqNo : 1,
plygnSeqNo : 5844,
plygnLo : 126.924122909237,
plygnLa : 37.6461063390412
},
{
setSeqNo : 1,
plygnSeqNo : 5845,
plygnLo : 126.924243584933,
plygnLa : 37.6461829119843
},
{
setSeqNo : 1,
plygnSeqNo : 5846,
plygnLo : 126.924397268995,
plygnLa : 37.6462804616728
},
{
setSeqNo : 1,
plygnSeqNo : 5847,
plygnLo : 126.924791995737,
plygnLa : 37.6465335503562
},
{
setSeqNo : 1,
plygnSeqNo : 5848,
plygnLo : 126.924844895677,
plygnLa : 37.646571877256
},
{
setSeqNo : 1,
plygnSeqNo : 5849,
plygnLo : 126.92517415857,
plygnLa : 37.6467878296939
},
{
setSeqNo : 1,
plygnSeqNo : 5850,
plygnLo : 126.925236867115,
plygnLa : 37.646828990618
},
{
setSeqNo : 1,
plygnSeqNo : 5851,
plygnLo : 126.925281525327,
plygnLa : 37.6468585988702
},
{
setSeqNo : 1,
plygnSeqNo : 5852,
plygnLo : 126.925480592225,
plygnLa : 37.6469906836717
},
{
setSeqNo : 1,
plygnSeqNo : 5853,
plygnLo : 126.925707250559,
plygnLa : 37.6471454643787
},
{
setSeqNo : 1,
plygnSeqNo : 5854,
plygnLo : 126.925809488771,
plygnLa : 37.6472153378019
},
{
setSeqNo : 1,
plygnSeqNo : 5855,
plygnLo : 126.925899575322,
plygnLa : 37.6472777246995
},
{
setSeqNo : 1,
plygnSeqNo : 5856,
plygnLo : 126.926141236783,
plygnLa : 37.6474452520211
},
{
setSeqNo : 1,
plygnSeqNo : 5857,
plygnLo : 126.926489617874,
plygnLa : 37.6477000372129
},
{
setSeqNo : 1,
plygnSeqNo : 5858,
plygnLo : 126.92658088076,
plygnLa : 37.6477667846844
},
{
setSeqNo : 1,
plygnSeqNo : 5859,
plygnLo : 126.926599836538,
plygnLa : 37.647756381448
},
{
setSeqNo : 1,
plygnSeqNo : 5860,
plygnLo : 126.926898864563,
plygnLa : 37.647940145298
},
{
setSeqNo : 1,
plygnSeqNo : 5861,
plygnLo : 126.927096821209,
plygnLa : 37.6480772727141
},
{
setSeqNo : 1,
plygnSeqNo : 5862,
plygnLo : 126.927134006226,
plygnLa : 37.6481030458754
},
{
setSeqNo : 1,
plygnSeqNo : 5863,
plygnLo : 126.927146472315,
plygnLa : 37.6481146937922
},
{
setSeqNo : 1,
plygnSeqNo : 5864,
plygnLo : 126.927173447888,
plygnLa : 37.6481399376508
},
{
setSeqNo : 1,
plygnSeqNo : 5865,
plygnLo : 126.927219795829,
plygnLa : 37.6481833313701
},
{
setSeqNo : 1,
plygnSeqNo : 5866,
plygnLo : 126.927376048011,
plygnLa : 37.648327720528
},
{
setSeqNo : 1,
plygnSeqNo : 5867,
plygnLo : 126.927421647915,
plygnLa : 37.6483698975005
},
{
setSeqNo : 1,
plygnSeqNo : 5868,
plygnLo : 126.927553438567,
plygnLa : 37.6484882417315
},
{
setSeqNo : 1,
plygnSeqNo : 5869,
plygnLo : 126.927574496301,
plygnLa : 37.6485071407426
},
{
setSeqNo : 1,
plygnSeqNo : 5870,
plygnLo : 126.927587549166,
plygnLa : 37.6485188888327
},
{
setSeqNo : 1,
plygnSeqNo : 5871,
plygnLo : 126.927591783359,
plygnLa : 37.6485227833909
},
{
setSeqNo : 1,
plygnSeqNo : 5872,
plygnLo : 126.92785842823,
plygnLa : 37.6487694209711
},
{
setSeqNo : 1,
plygnSeqNo : 5873,
plygnLo : 126.927936533776,
plygnLa : 37.6488401596826
},
{
setSeqNo : 1,
plygnSeqNo : 5874,
plygnLo : 126.927972828375,
plygnLa : 37.6488730507887
},
{
setSeqNo : 1,
plygnSeqNo : 5875,
plygnLo : 126.927992076955,
plygnLa : 37.648887810579
},
{
setSeqNo : 1,
plygnSeqNo : 5876,
plygnLo : 126.928166744089,
plygnLa : 37.6490094427397
},
{
setSeqNo : 1,
plygnSeqNo : 5877,
plygnLo : 126.928201905102,
plygnLa : 37.6490334590905
},
{
setSeqNo : 1,
plygnSeqNo : 5878,
plygnLo : 126.928453917281,
plygnLa : 37.6492060974245
},
{
setSeqNo : 1,
plygnSeqNo : 5879,
plygnLo : 126.928645821056,
plygnLa : 37.6493383710207
},
{
setSeqNo : 1,
plygnSeqNo : 5880,
plygnLo : 126.928863693639,
plygnLa : 37.6494890761461
},
{
setSeqNo : 1,
plygnSeqNo : 5881,
plygnLo : 126.928954635065,
plygnLa : 37.649551922551
},
{
setSeqNo : 1,
plygnSeqNo : 5882,
plygnLo : 126.928978018859,
plygnLa : 37.6495682073517
},
{
setSeqNo : 1,
plygnSeqNo : 5883,
plygnLo : 126.929118060591,
plygnLa : 37.6496657877157
},
{
setSeqNo : 1,
plygnSeqNo : 5884,
plygnLo : 126.929188618309,
plygnLa : 37.6497629211432
},
{
setSeqNo : 1,
plygnSeqNo : 5885,
plygnLo : 126.929259161347,
plygnLa : 37.6498181483372
},
{
setSeqNo : 1,
plygnSeqNo : 5886,
plygnLo : 126.929281093217,
plygnLa : 37.6498348568044
},
{
setSeqNo : 1,
plygnSeqNo : 5887,
plygnLo : 126.929285939854,
plygnLa : 37.6498373107245
},
{
setSeqNo : 1,
plygnSeqNo : 5888,
plygnLo : 126.929488255917,
plygnLa : 37.6499405144122
},
{
setSeqNo : 1,
plygnSeqNo : 5889,
plygnLo : 126.929699373165,
plygnLa : 37.6500481937959
},
{
setSeqNo : 1,
plygnSeqNo : 5890,
plygnLo : 126.929709851368,
plygnLa : 37.6500521630242
},
{
setSeqNo : 1,
plygnSeqNo : 5891,
plygnLo : 126.929876172682,
plygnLa : 37.6501155232894
},
{
setSeqNo : 1,
plygnSeqNo : 5892,
plygnLo : 126.930003096384,
plygnLa : 37.6501635500981
},
{
setSeqNo : 1,
plygnSeqNo : 5893,
plygnLo : 126.930042486999,
plygnLa : 37.6501721408988
},
{
setSeqNo : 1,
plygnSeqNo : 5894,
plygnLo : 126.930284729014,
plygnLa : 37.6502250853867
},
{
setSeqNo : 1,
plygnSeqNo : 5895,
plygnLo : 126.930448666915,
plygnLa : 37.6502468616955
},
{
setSeqNo : 1,
plygnSeqNo : 5896,
plygnLo : 126.930862931114,
plygnLa : 37.6503014578503
},
{
setSeqNo : 1,
plygnSeqNo : 5897,
plygnLo : 126.931431070752,
plygnLa : 37.6503313579516
},
{
setSeqNo : 1,
plygnSeqNo : 5898,
plygnLo : 126.931544754769,
plygnLa : 37.6503136844328
},
{
setSeqNo : 1,
plygnSeqNo : 5899,
plygnLo : 126.931536862296,
plygnLa : 37.6503077787184
},
{
setSeqNo : 1,
plygnSeqNo : 5900,
plygnLo : 126.931593215801,
plygnLa : 37.6502935857069
},
{
setSeqNo : 1,
plygnSeqNo : 5901,
plygnLo : 126.931853101487,
plygnLa : 37.6502282741658
},
{
setSeqNo : 1,
plygnSeqNo : 5902,
plygnLo : 126.931875014977,
plygnLa : 37.6502293226248
},
{
setSeqNo : 1,
plygnSeqNo : 5903,
plygnLo : 126.931900565439,
plygnLa : 37.6502306895153
},
{
setSeqNo : 1,
plygnSeqNo : 5904,
plygnLo : 126.932157611534,
plygnLa : 37.6503057121382
},
{
setSeqNo : 1,
plygnSeqNo : 5905,
plygnLo : 126.932185714069,
plygnLa : 37.6503413885307
},
{
setSeqNo : 1,
plygnSeqNo : 5906,
plygnLo : 126.932196115064,
plygnLa : 37.650354612547
},
{
setSeqNo : 1,
plygnSeqNo : 5907,
plygnLo : 126.932199249621,
plygnLa : 37.6503585792152
},
{
setSeqNo : 1,
plygnSeqNo : 5908,
plygnLo : 126.93220637041,
plygnLa : 37.6503676103082
},
{
setSeqNo : 1,
plygnSeqNo : 5909,
plygnLo : 126.932215074103,
plygnLa : 37.6503786630439
},
{
setSeqNo : 1,
plygnSeqNo : 5910,
plygnLo : 126.932221399633,
plygnLa : 37.650386729782
},
{
setSeqNo : 1,
plygnSeqNo : 5911,
plygnLo : 126.93279744949,
plygnLa : 37.6504904266038
},
{
setSeqNo : 1,
plygnSeqNo : 5912,
plygnLo : 126.932823201874,
plygnLa : 37.650496189251
},
{
setSeqNo : 1,
plygnSeqNo : 5913,
plygnLo : 126.933349177691,
plygnLa : 37.6506144411038
},
{
setSeqNo : 1,
plygnSeqNo : 5914,
plygnLo : 126.933889722528,
plygnLa : 37.6507251313335
},
{
setSeqNo : 1,
plygnSeqNo : 5915,
plygnLo : 126.934241773279,
plygnLa : 37.6508146281054
},
{
setSeqNo : 1,
plygnSeqNo : 5916,
plygnLo : 126.934537032521,
plygnLa : 37.6508897941538
},
{
setSeqNo : 1,
plygnSeqNo : 5917,
plygnLo : 126.934590495166,
plygnLa : 37.6509033376914
},
{
setSeqNo : 1,
plygnSeqNo : 5918,
plygnLo : 126.934621117406,
plygnLa : 37.6509101129708
},
{
setSeqNo : 1,
plygnSeqNo : 5919,
plygnLo : 126.934716760722,
plygnLa : 37.6509310603506
},
{
setSeqNo : 1,
plygnSeqNo : 5920,
plygnLo : 126.934735896025,
plygnLa : 37.6509352692137
},
{
setSeqNo : 1,
plygnSeqNo : 5921,
plygnLo : 126.934947471261,
plygnLa : 37.6509851585537
},
{
setSeqNo : 1,
plygnSeqNo : 5922,
plygnLo : 126.935267061874,
plygnLa : 37.6510605443957
},
{
setSeqNo : 1,
plygnSeqNo : 5923,
plygnLo : 126.935705689051,
plygnLa : 37.6512026920922
},
{
setSeqNo : 1,
plygnSeqNo : 5924,
plygnLo : 126.936136762565,
plygnLa : 37.6514859025902
},
{
setSeqNo : 1,
plygnSeqNo : 5925,
plygnLo : 126.936281690255,
plygnLa : 37.6515839626744
},
{
setSeqNo : 1,
plygnSeqNo : 5926,
plygnLo : 126.936454733827,
plygnLa : 37.6517175120756
},
{
setSeqNo : 1,
plygnSeqNo : 5927,
plygnLo : 126.936659457469,
plygnLa : 37.6518831057247
},
{
setSeqNo : 1,
plygnSeqNo : 5928,
plygnLo : 126.936766096482,
plygnLa : 37.6519694598952
},
{
setSeqNo : 1,
plygnSeqNo : 5929,
plygnLo : 126.937060733811,
plygnLa : 37.6522213534815
},
{
setSeqNo : 1,
plygnSeqNo : 5930,
plygnLo : 126.937163318678,
plygnLa : 37.6523157418404
},
{
setSeqNo : 1,
plygnSeqNo : 5931,
plygnLo : 126.937306162142,
plygnLa : 37.6525206742802
},
{
setSeqNo : 1,
plygnSeqNo : 5932,
plygnLo : 126.937425070144,
plygnLa : 37.6526913750153
},
{
setSeqNo : 1,
plygnSeqNo : 5933,
plygnLo : 126.937537096046,
plygnLa : 37.6529563856174
},
{
setSeqNo : 1,
plygnSeqNo : 5934,
plygnLo : 126.937569801622,
plygnLa : 37.6530342291894
},
{
setSeqNo : 1,
plygnSeqNo : 5935,
plygnLo : 126.937622897324,
plygnLa : 37.6531608360629
},
{
setSeqNo : 1,
plygnSeqNo : 5936,
plygnLo : 126.93773993898,
plygnLa : 37.6534469595798
},
{
setSeqNo : 1,
plygnSeqNo : 5937,
plygnLo : 126.937747239094,
plygnLa : 37.6534578467781
},
{
setSeqNo : 1,
plygnSeqNo : 5938,
plygnLo : 126.937837033802,
plygnLa : 37.6535920139498
},
{
setSeqNo : 1,
plygnSeqNo : 5939,
plygnLo : 126.937923330668,
plygnLa : 37.6537210074714
},
{
setSeqNo : 1,
plygnSeqNo : 5940,
plygnLo : 126.938121573442,
plygnLa : 37.654070153005
},
{
setSeqNo : 1,
plygnSeqNo : 5941,
plygnLo : 126.9381510612,
plygnLa : 37.6541221018915
},
{
setSeqNo : 1,
plygnSeqNo : 5942,
plygnLo : 126.938261612861,
plygnLa : 37.6543546294991
},
{
setSeqNo : 1,
plygnSeqNo : 5943,
plygnLo : 126.938459654779,
plygnLa : 37.6547712105352
},
{
setSeqNo : 1,
plygnSeqNo : 5944,
plygnLo : 126.938809817927,
plygnLa : 37.6552756653985
},
{
setSeqNo : 1,
plygnSeqNo : 5945,
plygnLo : 126.939036245879,
plygnLa : 37.6555365095861
},
{
setSeqNo : 1,
plygnSeqNo : 5946,
plygnLo : 126.939285109944,
plygnLa : 37.6558164840022
},
{
setSeqNo : 1,
plygnSeqNo : 5947,
plygnLo : 126.939398465247,
plygnLa : 37.6559440850222
},
{
setSeqNo : 1,
plygnSeqNo : 5948,
plygnLo : 126.939666232083,
plygnLa : 37.6562410968379
},
{
setSeqNo : 1,
plygnSeqNo : 5949,
plygnLo : 126.939904726317,
plygnLa : 37.6564455357913
},
{
setSeqNo : 1,
plygnSeqNo : 5950,
plygnLo : 126.940067675526,
plygnLa : 37.6565843967707
},
{
setSeqNo : 1,
plygnSeqNo : 5951,
plygnLo : 126.940128159294,
plygnLa : 37.6566359641522
},
{
setSeqNo : 1,
plygnSeqNo : 5952,
plygnLo : 126.940186062241,
plygnLa : 37.6566728638129
},
{
setSeqNo : 1,
plygnSeqNo : 5953,
plygnLo : 126.940335211685,
plygnLa : 37.6567678851497
},
{
setSeqNo : 1,
plygnSeqNo : 5954,
plygnLo : 126.940769191984,
plygnLa : 37.6569787564714
},
{
setSeqNo : 1,
plygnSeqNo : 5955,
plygnLo : 126.940848914974,
plygnLa : 37.6570228834232
},
{
setSeqNo : 1,
plygnSeqNo : 5956,
plygnLo : 126.941021502056,
plygnLa : 37.6571184655439
},
{
setSeqNo : 1,
plygnSeqNo : 5957,
plygnLo : 126.941443451882,
plygnLa : 37.6573540606941
},
{
setSeqNo : 1,
plygnSeqNo : 5958,
plygnLo : 126.941573095861,
plygnLa : 37.6574265109241
},
{
setSeqNo : 1,
plygnSeqNo : 5959,
plygnLo : 126.941801473126,
plygnLa : 37.6575541963796
},
{
setSeqNo : 1,
plygnSeqNo : 5960,
plygnLo : 126.942069825827,
plygnLa : 37.6577053354395
},
{
setSeqNo : 1,
plygnSeqNo : 5961,
plygnLo : 126.942099956035,
plygnLa : 37.6577221980226
},
{
setSeqNo : 1,
plygnSeqNo : 5962,
plygnLo : 126.94243796865,
plygnLa : 37.657833826987
},
{
setSeqNo : 1,
plygnSeqNo : 5963,
plygnLo : 126.94269721676,
plygnLa : 37.6579194958266
},
{
setSeqNo : 1,
plygnSeqNo : 5964,
plygnLo : 126.94333829625,
plygnLa : 37.6580586171504
},
{
setSeqNo : 1,
plygnSeqNo : 5965,
plygnLo : 126.944123228607,
plygnLa : 37.6581158809603
},
{
setSeqNo : 1,
plygnSeqNo : 5966,
plygnLo : 126.944293900476,
plygnLa : 37.6581456862826
},
{
setSeqNo : 1,
plygnSeqNo : 5967,
plygnLo : 126.94439644887,
plygnLa : 37.6581636210939
},
{
setSeqNo : 1,
plygnSeqNo : 5968,
plygnLo : 126.944728198041,
plygnLa : 37.6582489046258
},
{
setSeqNo : 1,
plygnSeqNo : 5969,
plygnLo : 126.944882383603,
plygnLa : 37.6582888198816
},
{
setSeqNo : 1,
plygnSeqNo : 5970,
plygnLo : 126.945022611332,
plygnLa : 37.6583252232583
},
{
setSeqNo : 1,
plygnSeqNo : 5971,
plygnLo : 126.945205497118,
plygnLa : 37.6583762713014
},
{
setSeqNo : 1,
plygnSeqNo : 5972,
plygnLo : 126.945689156653,
plygnLa : 37.6585175666009
},
{
setSeqNo : 1,
plygnSeqNo : 5973,
plygnLo : 126.946043348052,
plygnLa : 37.6586322286705
},
{
setSeqNo : 1,
plygnSeqNo : 5974,
plygnLo : 126.946425923319,
plygnLa : 37.6587561385262
},
{
setSeqNo : 1,
plygnSeqNo : 5975,
plygnLo : 126.946584449627,
plygnLa : 37.6588151553609
},
{
setSeqNo : 1,
plygnSeqNo : 5976,
plygnLo : 126.947084084848,
plygnLa : 37.6590147714233
},
{
setSeqNo : 1,
plygnSeqNo : 5977,
plygnLo : 126.947510962883,
plygnLa : 37.6591854142428
},
{
setSeqNo : 1,
plygnSeqNo : 5978,
plygnLo : 126.947537415208,
plygnLa : 37.6592000945541
},
{
setSeqNo : 1,
plygnSeqNo : 5979,
plygnLo : 126.947564851584,
plygnLa : 37.6592154231192
},
{
setSeqNo : 1,
plygnSeqNo : 5980,
plygnLo : 126.947677606195,
plygnLa : 37.6590420734658
},
{
setSeqNo : 1,
plygnSeqNo : 5981,
plygnLo : 126.947693296247,
plygnLa : 37.6590179693055
},
{
setSeqNo : 1,
plygnSeqNo : 5982,
plygnLo : 126.947755343081,
plygnLa : 37.6589225582387
},
{
setSeqNo : 1,
plygnSeqNo : 5983,
plygnLo : 126.947807581246,
plygnLa : 37.6588696135528
},
{
setSeqNo : 1,
plygnSeqNo : 5984,
plygnLo : 126.947902303907,
plygnLa : 37.6587737210663
},
{
setSeqNo : 1,
plygnSeqNo : 5985,
plygnLo : 126.94796703819,
plygnLa : 37.6587081779724
},
{
setSeqNo : 1,
plygnSeqNo : 5986,
plygnLo : 126.947983441333,
plygnLa : 37.6586411070675
},
{
setSeqNo : 1,
plygnSeqNo : 5987,
plygnLo : 126.948001906145,
plygnLa : 37.6585724075225
},
{
setSeqNo : 1,
plygnSeqNo : 5988,
plygnLo : 126.947942535295,
plygnLa : 37.6583955734069
},
{
setSeqNo : 1,
plygnSeqNo : 5989,
plygnLo : 126.947939463589,
plygnLa : 37.6583801570632
},
{
setSeqNo : 1,
plygnSeqNo : 5990,
plygnLo : 126.947915446953,
plygnLa : 37.658259172467
},
{
setSeqNo : 1,
plygnSeqNo : 5991,
plygnLo : 126.9480391339,
plygnLa : 37.6580054331497
},
{
setSeqNo : 1,
plygnSeqNo : 5992,
plygnLo : 126.948038341944,
plygnLa : 37.6578924763538
},
{
setSeqNo : 1,
plygnSeqNo : 5993,
plygnLo : 126.947992142908,
plygnLa : 37.6577110998461
},
{
setSeqNo : 1,
plygnSeqNo : 5994,
plygnLo : 126.947813352042,
plygnLa : 37.6574215969879
},
{
setSeqNo : 1,
plygnSeqNo : 5995,
plygnLo : 126.947757843932,
plygnLa : 37.6572808847184
},
{
setSeqNo : 1,
plygnSeqNo : 5996,
plygnLo : 126.947882433251,
plygnLa : 37.6571258489995
},
{
setSeqNo : 1,
plygnSeqNo : 5997,
plygnLo : 126.948011558809,
plygnLa : 37.6570924712698
},
{
setSeqNo : 1,
plygnSeqNo : 5998,
plygnLo : 126.94812801135,
plygnLa : 37.6570624955223
},
{
setSeqNo : 1,
plygnSeqNo : 5999,
plygnLo : 126.948184677593,
plygnLa : 37.6570583942438
},
{
setSeqNo : 1,
plygnSeqNo : 6000,
plygnLo : 126.948236333943,
plygnLa : 37.6570547695718
},
{
setSeqNo : 1,
plygnSeqNo : 6001,
plygnLo : 126.948286373665,
plygnLa : 37.6570474305443
},
{
setSeqNo : 1,
plygnSeqNo : 6002,
plygnLo : 126.948349003896,
plygnLa : 37.6570383767601
},
{
setSeqNo : 1,
plygnSeqNo : 6003,
plygnLo : 126.948832817177,
plygnLa : 37.6569743994944
},
{
setSeqNo : 1,
plygnSeqNo : 6004,
plygnLo : 126.949126242201,
plygnLa : 37.6568127514172
},
{
setSeqNo : 1,
plygnSeqNo : 6005,
plygnLo : 126.949203084384,
plygnLa : 37.656770439459
},
{
setSeqNo : 1,
plygnSeqNo : 6006,
plygnLo : 126.949213837951,
plygnLa : 37.6567530450674
},
{
setSeqNo : 1,
plygnSeqNo : 6007,
plygnLo : 126.949228214843,
plygnLa : 37.6567299066376
},
{
setSeqNo : 1,
plygnSeqNo : 6008,
plygnLo : 126.949344874183,
plygnLa : 37.6565145716936
},
{
setSeqNo : 1,
plygnSeqNo : 6009,
plygnLo : 126.949379404686,
plygnLa : 37.6564509959863
},
{
setSeqNo : 1,
plygnSeqNo : 6010,
plygnLo : 126.949490276935,
plygnLa : 37.6562470099992
},
{
setSeqNo : 1,
plygnSeqNo : 6011,
plygnLo : 126.949552484174,
plygnLa : 37.6561783558733
},
{
setSeqNo : 1,
plygnSeqNo : 6012,
plygnLo : 126.949571775803,
plygnLa : 37.6561570931685
},
{
setSeqNo : 1,
plygnSeqNo : 6013,
plygnLo : 126.949633573947,
plygnLa : 37.6560879700294
},
{
setSeqNo : 1,
plygnSeqNo : 6014,
plygnLo : 126.949791161745,
plygnLa : 37.6559117989389
},
{
setSeqNo : 1,
plygnSeqNo : 6015,
plygnLo : 126.950104037027,
plygnLa : 37.6557998470298
},
{
setSeqNo : 1,
plygnSeqNo : 6016,
plygnLo : 126.950404853268,
plygnLa : 37.655692328259
},
{
setSeqNo : 1,
plygnSeqNo : 6017,
plygnLo : 126.950690335386,
plygnLa : 37.6555325377188
},
{
setSeqNo : 1,
plygnSeqNo : 6018,
plygnLo : 126.950772706856,
plygnLa : 37.6554864611775
},
{
setSeqNo : 1,
plygnSeqNo : 6019,
plygnLo : 126.950781098478,
plygnLa : 37.6554777713429
},
{
setSeqNo : 1,
plygnSeqNo : 6020,
plygnLo : 126.950900525528,
plygnLa : 37.655354118522
},
{
setSeqNo : 1,
plygnSeqNo : 6021,
plygnLo : 126.951053096666,
plygnLa : 37.655197071818
},
{
setSeqNo : 1,
plygnSeqNo : 6022,
plygnLo : 126.951309796315,
plygnLa : 37.6549947489705
},
{
setSeqNo : 1,
plygnSeqNo : 6023,
plygnLo : 126.951376054082,
plygnLa : 37.6549497204126
},
{
setSeqNo : 1,
plygnSeqNo : 6024,
plygnLo : 126.951718363676,
plygnLa : 37.6548897254857
},
{
setSeqNo : 1,
plygnSeqNo : 6025,
plygnLo : 126.951860001938,
plygnLa : 37.6548649627876
},
{
setSeqNo : 1,
plygnSeqNo : 6026,
plygnLo : 126.952314574506,
plygnLa : 37.6549164004697
},
{
setSeqNo : 1,
plygnSeqNo : 6027,
plygnLo : 126.952625017967,
plygnLa : 37.6549247202388
},
{
setSeqNo : 1,
plygnSeqNo : 6028,
plygnLo : 126.953210496478,
plygnLa : 37.6549331156491
},
{
setSeqNo : 1,
plygnSeqNo : 6029,
plygnLo : 126.953275669886,
plygnLa : 37.6549485204391
},
{
setSeqNo : 1,
plygnSeqNo : 6030,
plygnLo : 126.953358848276,
plygnLa : 37.6549682864386
},
{
setSeqNo : 1,
plygnSeqNo : 6031,
plygnLo : 126.95373621477,
plygnLa : 37.6551815825285
},
{
setSeqNo : 1,
plygnSeqNo : 6032,
plygnLo : 126.953890619983,
plygnLa : 37.6552664188808
},
{
setSeqNo : 1,
plygnSeqNo : 6033,
plygnLo : 126.95394550556,
plygnLa : 37.65529661542
},
{
setSeqNo : 1,
plygnSeqNo : 6034,
plygnLo : 126.954177927872,
plygnLa : 37.6552168720958
},
{
setSeqNo : 1,
plygnSeqNo : 6035,
plygnLo : 126.954194124156,
plygnLa : 37.6552113120586
},
{
setSeqNo : 1,
plygnSeqNo : 6036,
plygnLo : 126.954032191571,
plygnLa : 37.6550761269539
},
{
setSeqNo : 1,
plygnSeqNo : 6037,
plygnLo : 126.954037238552,
plygnLa : 37.6549820137736
},
{
setSeqNo : 1,
plygnSeqNo : 6038,
plygnLo : 126.954219348098,
plygnLa : 37.6547664822295
},
{
setSeqNo : 1,
plygnSeqNo : 6039,
plygnLo : 126.954262600875,
plygnLa : 37.6546809083175
},
{
setSeqNo : 1,
plygnSeqNo : 6040,
plygnLo : 126.954351545102,
plygnLa : 37.6545953504518
},
{
setSeqNo : 1,
plygnSeqNo : 6041,
plygnLo : 126.954552020525,
plygnLa : 37.654532082965
},
{
setSeqNo : 1,
plygnSeqNo : 6042,
plygnLo : 126.954583545454,
plygnLa : 37.6545349073109
},
{
setSeqNo : 1,
plygnSeqNo : 6043,
plygnLo : 126.954600433848,
plygnLa : 37.6545294890495
},
{
setSeqNo : 1,
plygnSeqNo : 6044,
plygnLo : 126.954778035592,
plygnLa : 37.6544885299042
},
{
setSeqNo : 1,
plygnSeqNo : 6045,
plygnLo : 126.954801031599,
plygnLa : 37.6544832229127
},
{
setSeqNo : 1,
plygnSeqNo : 6046,
plygnLo : 126.954897699136,
plygnLa : 37.6544609811998
},
{
setSeqNo : 1,
plygnSeqNo : 6047,
plygnLo : 126.955044348426,
plygnLa : 37.6544061418776
},
{
setSeqNo : 1,
plygnSeqNo : 6048,
plygnLo : 126.955182439626,
plygnLa : 37.6543396501568
},
{
setSeqNo : 1,
plygnSeqNo : 6049,
plygnLo : 126.955235921115,
plygnLa : 37.6543139662354
},
{
setSeqNo : 1,
plygnSeqNo : 6050,
plygnLo : 126.955256169237,
plygnLa : 37.6542992975593
},
{
setSeqNo : 1,
plygnSeqNo : 6051,
plygnLo : 126.955290544828,
plygnLa : 37.6542744710546
},
{
setSeqNo : 1,
plygnSeqNo : 6052,
plygnLo : 126.955317282785,
plygnLa : 37.6542307937352
},
{
setSeqNo : 1,
plygnSeqNo : 6053,
plygnLo : 126.955321364651,
plygnLa : 37.6542241461101
},
{
setSeqNo : 1,
plygnSeqNo : 6054,
plygnLo : 126.955335236204,
plygnLa : 37.6541711561935
},
{
setSeqNo : 1,
plygnSeqNo : 6055,
plygnLo : 126.955353355874,
plygnLa : 37.6540790909152
},
{
setSeqNo : 1,
plygnSeqNo : 6056,
plygnLo : 126.955368248865,
plygnLa : 37.6540360217989
},
{
setSeqNo : 1,
plygnSeqNo : 6057,
plygnLo : 126.955398905219,
plygnLa : 37.6539988683849
},
{
setSeqNo : 1,
plygnSeqNo : 6058,
plygnLo : 126.955402472482,
plygnLa : 37.6539633899289
},
{
setSeqNo : 1,
plygnSeqNo : 6059,
plygnLo : 126.95540661594,
plygnLa : 37.6539507692754
},
{
setSeqNo : 1,
plygnSeqNo : 6060,
plygnLo : 126.9554239767,
plygnLa : 37.6538980782206
},
{
setSeqNo : 1,
plygnSeqNo : 6061,
plygnLo : 126.955444195619,
plygnLa : 37.6538755441701
},
{
setSeqNo : 1,
plygnSeqNo : 6062,
plygnLo : 126.955458665512,
plygnLa : 37.6538600791518
},
{
setSeqNo : 1,
plygnSeqNo : 6063,
plygnLo : 126.955462781488,
plygnLa : 37.6538568100259
},
{
setSeqNo : 1,
plygnSeqNo : 6064,
plygnLo : 126.955467213906,
plygnLa : 37.6538534147306
},
{
setSeqNo : 1,
plygnSeqNo : 6065,
plygnLo : 126.955524537995,
plygnLa : 37.6537896304674
},
{
setSeqNo : 1,
plygnSeqNo : 6066,
plygnLo : 126.955534855981,
plygnLa : 37.6537781825782
},
{
setSeqNo : 1,
plygnSeqNo : 6067,
plygnLo : 126.955591389479,
plygnLa : 37.6537477979655
},
{
setSeqNo : 1,
plygnSeqNo : 6068,
plygnLo : 126.955713974259,
plygnLa : 37.6536820471374
},
{
setSeqNo : 1,
plygnSeqNo : 6069,
plygnLo : 126.955802360475,
plygnLa : 37.6536908554031
},
{
setSeqNo : 1,
plygnSeqNo : 6070,
plygnLo : 126.955851003114,
plygnLa : 37.6536623509144
},
{
setSeqNo : 1,
plygnSeqNo : 6071,
plygnLo : 126.955931944595,
plygnLa : 37.6535951331048
},
{
setSeqNo : 1,
plygnSeqNo : 6072,
plygnLo : 126.955950516627,
plygnLa : 37.6535805451472
},
{
setSeqNo : 1,
plygnSeqNo : 6073,
plygnLo : 126.955963655904,
plygnLa : 37.6535702781573
},
{
setSeqNo : 1,
plygnSeqNo : 6074,
plygnLo : 126.956029195904,
plygnLa : 37.6535213085727
},
{
setSeqNo : 1,
plygnSeqNo : 6075,
plygnLo : 126.956020277797,
plygnLa : 37.6535046826829
},
{
setSeqNo : 1,
plygnSeqNo : 6076,
plygnLo : 126.956009569915,
plygnLa : 37.6534847031992
},
{
setSeqNo : 1,
plygnSeqNo : 6077,
plygnLo : 126.956087118364,
plygnLa : 37.6534222502617
},
{
setSeqNo : 1,
plygnSeqNo : 6078,
plygnLo : 126.956163262521,
plygnLa : 37.653360968076
},
{
setSeqNo : 1,
plygnSeqNo : 6079,
plygnLo : 126.956249303517,
plygnLa : 37.6533085648952
},
{
setSeqNo : 1,
plygnSeqNo : 6080,
plygnLo : 126.956261874916,
plygnLa : 37.653305280803
},
{
setSeqNo : 1,
plygnSeqNo : 6081,
plygnLo : 126.956298290457,
plygnLa : 37.6532958890428
},
{
setSeqNo : 1,
plygnSeqNo : 6082,
plygnLo : 126.956348233883,
plygnLa : 37.6532888723631
},
{
setSeqNo : 1,
plygnSeqNo : 6083,
plygnLo : 126.956365789792,
plygnLa : 37.6532674800505
},
{
setSeqNo : 1,
plygnSeqNo : 6084,
plygnLo : 126.956392328699,
plygnLa : 37.6532677701412
},
{
setSeqNo : 1,
plygnSeqNo : 6085,
plygnLo : 126.956468674662,
plygnLa : 37.653227823273
},
{
setSeqNo : 1,
plygnSeqNo : 6086,
plygnLo : 126.956508482354,
plygnLa : 37.6531919874794
},
{
setSeqNo : 1,
plygnSeqNo : 6087,
plygnLo : 126.956532463703,
plygnLa : 37.653170464107
},
{
setSeqNo : 1,
plygnSeqNo : 6088,
plygnLo : 126.956412356013,
plygnLa : 37.653170083993
},
{
setSeqNo : 1,
plygnSeqNo : 6089,
plygnLo : 126.956504695806,
plygnLa : 37.6531216843368
},
{
setSeqNo : 1,
plygnSeqNo : 6090,
plygnLo : 126.956642297718,
plygnLa : 37.6530496669727
},
{
setSeqNo : 1,
plygnSeqNo : 6091,
plygnLo : 126.957108104416,
plygnLa : 37.6528372675436
},
{
setSeqNo : 1,
plygnSeqNo : 6092,
plygnLo : 126.957460147224,
plygnLa : 37.6518719407296
},
{
setSeqNo : 1,
plygnSeqNo : 6093,
plygnLo : 126.957684985309,
plygnLa : 37.6507103340151
},
{
setSeqNo : 1,
plygnSeqNo : 6094,
plygnLo : 126.95776467751,
plygnLa : 37.6500223339909
},
{
setSeqNo : 1,
plygnSeqNo : 6095,
plygnLo : 126.957789460713,
plygnLa : 37.6498086766468
},
{
setSeqNo : 1,
plygnSeqNo : 6096,
plygnLo : 126.957648434426,
plygnLa : 37.6493331069626
},
{
setSeqNo : 1,
plygnSeqNo : 6097,
plygnLo : 126.957562261245,
plygnLa : 37.6490424922671
},
{
setSeqNo : 1,
plygnSeqNo : 6098,
plygnLo : 126.957842471599,
plygnLa : 37.648470512111
},
{
setSeqNo : 1,
plygnSeqNo : 6099,
plygnLo : 126.957854689632,
plygnLa : 37.6484455692372
},
{
setSeqNo : 1,
plygnSeqNo : 6100,
plygnLo : 126.957839160933,
plygnLa : 37.6480477282929
},
{
setSeqNo : 1,
plygnSeqNo : 6101,
plygnLo : 126.958332122589,
plygnLa : 37.647683718158
},
{
setSeqNo : 1,
plygnSeqNo : 6102,
plygnLo : 126.958377342591,
plygnLa : 37.6476503348149
},
{
setSeqNo : 1,
plygnSeqNo : 6103,
plygnLo : 126.958544627811,
plygnLa : 37.6474270797043
},
{
setSeqNo : 1,
plygnSeqNo : 6104,
plygnLo : 126.959027014015,
plygnLa : 37.6467834169674
},
{
setSeqNo : 1,
plygnSeqNo : 6105,
plygnLo : 126.959013936323,
plygnLa : 37.6467044325166
},
{
setSeqNo : 1,
plygnSeqNo : 6106,
plygnLo : 126.9589199186,
plygnLa : 37.6461366401111
},
{
setSeqNo : 1,
plygnSeqNo : 6107,
plygnLo : 126.959096661284,
plygnLa : 37.6458341102358
},
{
setSeqNo : 1,
plygnSeqNo : 6108,
plygnLo : 126.959145884685,
plygnLa : 37.6457499134167
},
{
setSeqNo : 1,
plygnSeqNo : 6109,
plygnLo : 126.959137769636,
plygnLa : 37.6457163595021
},
{
setSeqNo : 1,
plygnSeqNo : 6110,
plygnLo : 126.958906540138,
plygnLa : 37.6447604021101
},
{
setSeqNo : 1,
plygnSeqNo : 6111,
plygnLo : 126.95912223143,
plygnLa : 37.6443463109378
},
{
setSeqNo : 1,
plygnSeqNo : 6112,
plygnLo : 126.959121090481,
plygnLa : 37.6443410761636
},
{
setSeqNo : 1,
plygnSeqNo : 6113,
plygnLo : 126.959019705874,
plygnLa : 37.6438790812612
},
{
setSeqNo : 1,
plygnSeqNo : 6114,
plygnLo : 126.959365334492,
plygnLa : 37.6431996894794
},
{
setSeqNo : 1,
plygnSeqNo : 6115,
plygnLo : 126.959316562103,
plygnLa : 37.642666699378
},
{
setSeqNo : 1,
plygnSeqNo : 6116,
plygnLo : 126.959267781935,
plygnLa : 37.6421327723019
},
{
setSeqNo : 1,
plygnSeqNo : 6117,
plygnLo : 126.959912597058,
plygnLa : 37.6415176609312
},
{
setSeqNo : 1,
plygnSeqNo : 6118,
plygnLo : 126.959971239996,
plygnLa : 37.6414617400928
},
{
setSeqNo : 1,
plygnSeqNo : 6119,
plygnLo : 126.960131620945,
plygnLa : 37.6405384744439
},
{
setSeqNo : 1,
plygnSeqNo : 6120,
plygnLo : 126.960449535777,
plygnLa : 37.6398973056998
},
{
setSeqNo : 1,
plygnSeqNo : 6121,
plygnLo : 126.96051025675,
plygnLa : 37.6398309349814
},
{
setSeqNo : 1,
plygnSeqNo : 6122,
plygnLo : 126.960562291588,
plygnLa : 37.6396716244018
},
{
setSeqNo : 1,
plygnSeqNo : 6123,
plygnLo : 126.960861869749,
plygnLa : 37.6387555139731
},
{
setSeqNo : 1,
plygnSeqNo : 6124,
plygnLo : 126.961133076637,
plygnLa : 37.6384748998123
},
{
setSeqNo : 1,
plygnSeqNo : 6125,
plygnLo : 126.961305452553,
plygnLa : 37.6382966907566
},
{
setSeqNo : 1,
plygnSeqNo : 6126,
plygnLo : 126.961602957308,
plygnLa : 37.6379892154602
},
{
setSeqNo : 1,
plygnSeqNo : 6127,
plygnLo : 126.961602892217,
plygnLa : 37.6378775395823
},
{
setSeqNo : 1,
plygnSeqNo : 6128,
plygnLo : 126.961602752098,
plygnLa : 37.637610219068
},
{
setSeqNo : 1,
plygnSeqNo : 6129,
plygnLo : 126.961604100053,
plygnLa : 37.6371887337312
},
{
setSeqNo : 1,
plygnSeqNo : 6130,
plygnLo : 126.961604340196,
plygnLa : 37.6371173943235
},
{
setSeqNo : 1,
plygnSeqNo : 6131,
plygnLo : 126.962540779316,
plygnLa : 37.635818893484
},
{
setSeqNo : 1,
plygnSeqNo : 6132,
plygnLo : 126.962727978507,
plygnLa : 37.6352429434882
},
{
setSeqNo : 1,
plygnSeqNo : 6133,
plygnLo : 126.96292222427,
plygnLa : 37.6346455860224
},
{
setSeqNo : 1,
plygnSeqNo : 6134,
plygnLo : 126.963290905329,
plygnLa : 37.6333756246383
},
{
setSeqNo : 1,
plygnSeqNo : 6135,
plygnLo : 126.963328788903,
plygnLa : 37.6332451752943
},
{
setSeqNo : 1,
plygnSeqNo : 6136,
plygnLo : 126.962260271564,
plygnLa : 37.6323969854381
},
{
setSeqNo : 1,
plygnSeqNo : 6137,
plygnLo : 126.961619136649,
plygnLa : 37.6318879798248
},
{
setSeqNo : 1,
plygnSeqNo : 6138,
plygnLo : 126.961081466786,
plygnLa : 37.6312666618753
},
{
setSeqNo : 1,
plygnSeqNo : 6139,
plygnLo : 126.960604373225,
plygnLa : 37.6307188811252
},
{
setSeqNo : 1,
plygnSeqNo : 6140,
plygnLo : 126.959822438887,
plygnLa : 37.6297611926672
},
{
setSeqNo : 1,
plygnSeqNo : 6141,
plygnLo : 126.958759439324,
plygnLa : 37.6295884181742
},
{
setSeqNo : 1,
plygnSeqNo : 6142,
plygnLo : 126.958418418489,
plygnLa : 37.6294697896309
},
{
setSeqNo : 1,
plygnSeqNo : 6143,
plygnLo : 126.95881396032,
plygnLa : 37.6295893119151
},
{
setSeqNo : 1,
plygnSeqNo : 6144,
plygnLo : 126.960115737163,
plygnLa : 37.6297756023705
},
{
setSeqNo : 1,
plygnSeqNo : 6145,
plygnLo : 126.96048973242,
plygnLa : 37.6298261263007
},
{
setSeqNo : 1,
plygnSeqNo : 6146,
plygnLo : 126.96143966956,
plygnLa : 37.6299593549273
},
{
setSeqNo : 1,
plygnSeqNo : 6147,
plygnLo : 126.963767222045,
plygnLa : 37.6297931534919
},
{
setSeqNo : 1,
plygnSeqNo : 6148,
plygnLo : 126.964331416812,
plygnLa : 37.6303601029782
},
{
setSeqNo : 1,
plygnSeqNo : 6149,
plygnLo : 126.965228476757,
plygnLa : 37.6307680825906
},
{
setSeqNo : 1,
plygnSeqNo : 6150,
plygnLo : 126.966047313255,
plygnLa : 37.6308156250455
},
{
setSeqNo : 1,
plygnSeqNo : 6151,
plygnLo : 126.966511999582,
plygnLa : 37.6307256750885
},
{
setSeqNo : 1,
plygnSeqNo : 6152,
plygnLo : 126.966801610484,
plygnLa : 37.6306883060746
},
{
setSeqNo : 1,
plygnSeqNo : 6153,
plygnLo : 126.967084332401,
plygnLa : 37.6307066171246
},
{
setSeqNo : 1,
plygnSeqNo : 6154,
plygnLo : 126.967653535272,
plygnLa : 37.6307434610033
},
{
setSeqNo : 1,
plygnSeqNo : 6155,
plygnLo : 126.968235549417,
plygnLa : 37.630730111898
},
{
setSeqNo : 1,
plygnSeqNo : 6156,
plygnLo : 126.968682099849,
plygnLa : 37.6308406064066
},
{
setSeqNo : 1,
plygnSeqNo : 6157,
plygnLo : 126.969388829675,
plygnLa : 37.6310159330895
},
{
setSeqNo : 1,
plygnSeqNo : 6158,
plygnLo : 126.970582747596,
plygnLa : 37.6314850308384
},
{
setSeqNo : 1,
plygnSeqNo : 6159,
plygnLo : 126.971327558513,
plygnLa : 37.6316186946348
},
{
setSeqNo : 1,
plygnSeqNo : 6160,
plygnLo : 126.973029772221,
plygnLa : 37.6323748046494
},
{
setSeqNo : 1,
plygnSeqNo : 6161,
plygnLo : 126.973672113121,
plygnLa : 37.6320311798392
},
{
setSeqNo : 1,
plygnSeqNo : 6162,
plygnLo : 126.974453458378,
plygnLa : 37.6319801248462
},
{
setSeqNo : 1,
plygnSeqNo : 6163,
plygnLo : 126.974628909704,
plygnLa : 37.6319128697149
},
{
setSeqNo : 1,
plygnSeqNo : 6164,
plygnLo : 126.975388355539,
plygnLa : 37.6317331241802
},
{
setSeqNo : 1,
plygnSeqNo : 6165,
plygnLo : 126.97536907554,
plygnLa : 37.631698207375
},
{
setSeqNo : 1,
plygnSeqNo : 6166,
plygnLo : 126.975579873621,
plygnLa : 37.6317525920585
},
{
setSeqNo : 1,
plygnSeqNo : 6167,
plygnLo : 126.975764972508,
plygnLa : 37.6319221341589
},
{
setSeqNo : 1,
plygnSeqNo : 6168,
plygnLo : 126.975828487648,
plygnLa : 37.6320091463593
},
{
setSeqNo : 1,
plygnSeqNo : 6169,
plygnLo : 126.976100679039,
plygnLa : 37.6321905274715
},
{
setSeqNo : 1,
plygnSeqNo : 6170,
plygnLo : 126.976224219119,
plygnLa : 37.6322316559242
},
{
setSeqNo : 1,
plygnSeqNo : 6171,
plygnLo : 126.976728367247,
plygnLa : 37.6327050647019
},
{
setSeqNo : 1,
plygnSeqNo : 6172,
plygnLo : 126.977006021344,
plygnLa : 37.6329689382713
},
{
setSeqNo : 1,
plygnSeqNo : 6173,
plygnLo : 126.977194958207,
plygnLa : 37.6333361257258
},
{
setSeqNo : 1,
plygnSeqNo : 6174,
plygnLo : 126.97733171034,
plygnLa : 37.6335830758602
},
{
setSeqNo : 1,
plygnSeqNo : 6175,
plygnLo : 126.977610277337,
plygnLa : 37.6337740314582
},
{
setSeqNo : 1,
plygnSeqNo : 6176,
plygnLo : 126.977804764799,
plygnLa : 37.6339106232226
},
{
setSeqNo : 1,
plygnSeqNo : 6177,
plygnLo : 126.978457928638,
plygnLa : 37.6340456210299
},
{
setSeqNo : 1,
plygnSeqNo : 6178,
plygnLo : 126.978905775274,
plygnLa : 37.6340625997553
},
{
setSeqNo : 1,
plygnSeqNo : 6179,
plygnLo : 126.97919820956,
plygnLa : 37.634078702175
},
{
setSeqNo : 1,
plygnSeqNo : 6180,
plygnLo : 126.979652393498,
plygnLa : 37.634206618743
},
{
setSeqNo : 1,
plygnSeqNo : 6181,
plygnLo : 126.980049735979,
plygnLa : 37.6344178542113
},
{
setSeqNo : 1,
plygnSeqNo : 6182,
plygnLo : 126.980190611067,
plygnLa : 37.6345530262837
},
{
setSeqNo : 1,
plygnSeqNo : 6183,
plygnLo : 126.980380155682,
plygnLa : 37.6346859540039
},
{
setSeqNo : 1,
plygnSeqNo : 6184,
plygnLo : 126.980606885854,
plygnLa : 37.6348157894421
},
{
setSeqNo : 1,
plygnSeqNo : 6185,
plygnLo : 126.980751498233,
plygnLa : 37.6348369348984
},
{
setSeqNo : 1,
plygnSeqNo : 6186,
plygnLo : 126.981122355311,
plygnLa : 37.634860081031
},
{
setSeqNo : 1,
plygnSeqNo : 6187,
plygnLo : 126.981255298815,
plygnLa : 37.6348420948129
},
{
setSeqNo : 1,
plygnSeqNo : 6188,
plygnLo : 126.981415678504,
plygnLa : 37.6348297248608
},
{
setSeqNo : 1,
plygnSeqNo : 6189,
plygnLo : 126.981513604909,
plygnLa : 37.6347210645832
},
{
setSeqNo : 1,
plygnSeqNo : 6190,
plygnLo : 126.981679418059,
plygnLa : 37.6349353544523
},
{
setSeqNo : 1,
plygnSeqNo : 6191,
plygnLo : 126.981994632157,
plygnLa : 37.635156993029
},
{
setSeqNo : 1,
plygnSeqNo : 6192,
plygnLo : 126.982041002979,
plygnLa : 37.6351570018636
},
{
setSeqNo : 1,
plygnSeqNo : 6193,
plygnLo : 126.982160642717,
plygnLa : 37.6352814734573
},
{
setSeqNo : 1,
plygnSeqNo : 6194,
plygnLo : 126.98219690358,
plygnLa : 37.6353825515948
},
{
setSeqNo : 1,
plygnSeqNo : 6195,
plygnLo : 126.982289799154,
plygnLa : 37.6355346053799
},
{
setSeqNo : 1,
plygnSeqNo : 6196,
plygnLo : 126.982515100062,
plygnLa : 37.635741309091
},
{
setSeqNo : 1,
plygnSeqNo : 6197,
plygnLo : 126.982515970479,
plygnLa : 37.6357860700068
},
{
setSeqNo : 1,
plygnSeqNo : 6198,
plygnLo : 126.982609078245,
plygnLa : 37.6358243846523
},
{
setSeqNo : 1,
plygnSeqNo : 6199,
plygnLo : 126.982787872182,
plygnLa : 37.6358094837666
},
{
setSeqNo : 1,
plygnSeqNo : 6200,
plygnLo : 126.982977598519,
plygnLa : 37.6359759161019
},
{
setSeqNo : 1,
plygnSeqNo : 6201,
plygnLo : 126.983131930828,
plygnLa : 37.6361054563573
},
{
setSeqNo : 1,
plygnSeqNo : 6202,
plygnLo : 126.983546820442,
plygnLa : 37.6363206287406
},
{
setSeqNo : 1,
plygnSeqNo : 6203,
plygnLo : 126.983586803159,
plygnLa : 37.6364121377812
},
{
setSeqNo : 1,
plygnSeqNo : 6204,
plygnLo : 126.983674121271,
plygnLa : 37.6364447752878
},
{
setSeqNo : 1,
plygnSeqNo : 6205,
plygnLo : 126.983706647425,
plygnLa : 37.6364569253604
},
{
setSeqNo : 1,
plygnSeqNo : 6206,
plygnLo : 126.983959435686,
plygnLa : 37.6364380972624
},
{
setSeqNo : 1,
plygnSeqNo : 6207,
plygnLo : 126.984198952972,
plygnLa : 37.6363374917831
},
{
setSeqNo : 1,
plygnSeqNo : 6208,
plygnLo : 126.984214725555,
plygnLa : 37.6363308639794
},
{
setSeqNo : 1,
plygnSeqNo : 6209,
plygnLo : 126.984414070992,
plygnLa : 37.6362697970197
},
{
setSeqNo : 1,
plygnSeqNo : 6210,
plygnLo : 126.985460523084,
plygnLa : 37.6359348898572
},
{
setSeqNo : 1,
plygnSeqNo : 6211,
plygnLo : 126.985905130101,
plygnLa : 37.6357929260895
},
{
setSeqNo : 1,
plygnSeqNo : 6212,
plygnLo : 126.985378024867,
plygnLa : 37.6359700784816
},
{
setSeqNo : 1,
plygnSeqNo : 6213,
plygnLo : 126.984414354788,
plygnLa : 37.6362703731479
},
{
setSeqNo : 1,
plygnSeqNo : 6214,
plygnLo : 126.984215461012,
plygnLa : 37.6363323503507
},
{
setSeqNo : 1,
plygnSeqNo : 6215,
plygnLo : 126.984198952972,
plygnLa : 37.6363374917831
},
{
setSeqNo : 1,
plygnSeqNo : 6216,
plygnLo : 126.984461625773,
plygnLa : 37.6365476939024
},
{
setSeqNo : 1,
plygnSeqNo : 6217,
plygnLo : 126.984744658685,
plygnLa : 37.6366482561102
},
{
setSeqNo : 1,
plygnSeqNo : 6218,
plygnLo : 126.984855969024,
plygnLa : 37.6368146636599
},
{
setSeqNo : 1,
plygnSeqNo : 6219,
plygnLo : 126.984936976621,
plygnLa : 37.6371649392787
},
{
setSeqNo : 1,
plygnSeqNo : 6220,
plygnLo : 126.985084580755,
plygnLa : 37.637314459201
},
{
setSeqNo : 1,
plygnSeqNo : 6221,
plygnLo : 126.985045059464,
plygnLa : 37.6375287237658
},
{
setSeqNo : 1,
plygnSeqNo : 6222,
plygnLo : 126.984960207666,
plygnLa : 37.6378071690741
},
{
setSeqNo : 1,
plygnSeqNo : 6223,
plygnLo : 126.985233832829,
plygnLa : 37.638065958149
},
{
setSeqNo : 1,
plygnSeqNo : 6224,
plygnLo : 126.985192529233,
plygnLa : 37.6383030184786
},
{
setSeqNo : 1,
plygnSeqNo : 6225,
plygnLo : 126.985294119925,
plygnLa : 37.6384184739585
},
{
setSeqNo : 1,
plygnSeqNo : 6226,
plygnLo : 126.985394102954,
plygnLa : 37.6385902321897
},
{
setSeqNo : 1,
plygnSeqNo : 6227,
plygnLo : 126.985421156432,
plygnLa : 37.6387614219564
},
{
setSeqNo : 1,
plygnSeqNo : 6228,
plygnLo : 126.985445194379,
plygnLa : 37.6388754525109
},
{
setSeqNo : 1,
plygnSeqNo : 6229,
plygnLo : 126.985407793521,
plygnLa : 37.6390880242815
},
{
setSeqNo : 1,
plygnSeqNo : 6230,
plygnLo : 126.985428645291,
plygnLa : 37.6392811686009
},
{
setSeqNo : 1,
plygnSeqNo : 6231,
plygnLo : 126.985533720403,
plygnLa : 37.6397012729063
},
{
setSeqNo : 1,
plygnSeqNo : 6232,
plygnLo : 126.98567650857,
plygnLa : 37.640044502153
},
{
setSeqNo : 1,
plygnSeqNo : 6233,
plygnLo : 126.985897060716,
plygnLa : 37.6401929130589
},
{
setSeqNo : 1,
plygnSeqNo : 6234,
plygnLo : 126.985954769615,
plygnLa : 37.640223896529
},
{
setSeqNo : 1,
plygnSeqNo : 6235,
plygnLo : 126.986132815269,
plygnLa : 37.6404280459733
},
{
setSeqNo : 1,
plygnSeqNo : 6236,
plygnLo : 126.985657414459,
plygnLa : 37.6407402249995
},
{
setSeqNo : 1,
plygnSeqNo : 6237,
plygnLo : 126.985268159488,
plygnLa : 37.6413503034741
},
{
setSeqNo : 1,
plygnSeqNo : 6238,
plygnLo : 126.985329730539,
plygnLa : 37.6415476798592
},
{
setSeqNo : 1,
plygnSeqNo : 6239,
plygnLo : 126.985224373944,
plygnLa : 37.6416360796584
},
{
setSeqNo : 1,
plygnSeqNo : 6240,
plygnLo : 126.985134457667,
plygnLa : 37.6415206245053
},
{
setSeqNo : 1,
plygnSeqNo : 6241,
plygnLo : 126.984956371293,
plygnLa : 37.6414642888357
},
{
setSeqNo : 1,
plygnSeqNo : 6242,
plygnLo : 126.984257046985,
plygnLa : 37.641644950771
},
{
setSeqNo : 1,
plygnSeqNo : 6243,
plygnLo : 126.984002574394,
plygnLa : 37.6419571572435
},
{
setSeqNo : 1,
plygnSeqNo : 6244,
plygnLo : 126.98383097584,
plygnLa : 37.6421488772683
},
{
setSeqNo : 1,
plygnSeqNo : 6245,
plygnLo : 126.983853935843,
plygnLa : 37.6423651056975
},
{
setSeqNo : 1,
plygnSeqNo : 6246,
plygnLo : 126.983874602622,
plygnLa : 37.6425602254385
},
{
setSeqNo : 1,
plygnSeqNo : 6247,
plygnLo : 126.983690901588,
plygnLa : 37.6430394075005
},
{
setSeqNo : 1,
plygnSeqNo : 6248,
plygnLo : 126.983247436152,
plygnLa : 37.6436835396665
},
{
setSeqNo : 1,
plygnSeqNo : 6249,
plygnLo : 126.983472750838,
plygnLa : 37.6439409112577
},
{
setSeqNo : 1,
plygnSeqNo : 6250,
plygnLo : 126.983726078797,
plygnLa : 37.6440502018178
},
{
setSeqNo : 1,
plygnSeqNo : 6251,
plygnLo : 126.983811015676,
plygnLa : 37.6441861973703
},
{
setSeqNo : 1,
plygnSeqNo : 6252,
plygnLo : 126.983902355834,
plygnLa : 37.6442656063046
},
{
setSeqNo : 1,
plygnSeqNo : 6253,
plygnLo : 126.984190185271,
plygnLa : 37.644428112465
},
{
setSeqNo : 1,
plygnSeqNo : 6254,
plygnLo : 126.98419368101,
plygnLa : 37.6446035255729
},
{
setSeqNo : 1,
plygnSeqNo : 6255,
plygnLo : 126.984643209862,
plygnLa : 37.6453375977442
},
{
setSeqNo : 1,
plygnSeqNo : 6256,
plygnLo : 126.984820598919,
plygnLa : 37.6453688773036
},
{
setSeqNo : 1,
plygnSeqNo : 6257,
plygnLo : 126.984795438778,
plygnLa : 37.6454460157603
},
{
setSeqNo : 1,
plygnSeqNo : 6258,
plygnLo : 126.984858267463,
plygnLa : 37.6455958213033
},
{
setSeqNo : 1,
plygnSeqNo : 6259,
plygnLo : 126.98494836523,
plygnLa : 37.64567240622
},
{
setSeqNo : 1,
plygnSeqNo : 6260,
plygnLo : 126.985106103491,
plygnLa : 37.6457284605377
},
{
setSeqNo : 1,
plygnSeqNo : 6261,
plygnLo : 126.985257966642,
plygnLa : 37.6458489880472
},
{
setSeqNo : 1,
plygnSeqNo : 6262,
plygnLo : 126.985413406796,
plygnLa : 37.6459467109693
},
{
setSeqNo : 1,
plygnSeqNo : 6263,
plygnLo : 126.985563525472,
plygnLa : 37.6459655981313
},
{
setSeqNo : 1,
plygnSeqNo : 6264,
plygnLo : 126.985680545695,
plygnLa : 37.6459948950763
},
{
setSeqNo : 1,
plygnSeqNo : 6265,
plygnLo : 126.985723388118,
plygnLa : 37.6460562751447
},
{
setSeqNo : 1,
plygnSeqNo : 6266,
plygnLo : 126.985718245633,
plygnLa : 37.646092881014
},
{
setSeqNo : 1,
plygnSeqNo : 6267,
plygnLo : 126.985579440525,
plygnLa : 37.64610271017
},
{
setSeqNo : 1,
plygnSeqNo : 6268,
plygnLo : 126.985483316859,
plygnLa : 37.6460055630578
},
{
setSeqNo : 1,
plygnSeqNo : 6269,
plygnLo : 126.985100561791,
plygnLa : 37.6459294950134
},
{
setSeqNo : 1,
plygnSeqNo : 6270,
plygnLo : 126.984929150799,
plygnLa : 37.6460668709453
},
{
setSeqNo : 1,
plygnSeqNo : 6271,
plygnLo : 126.984763099637,
plygnLa : 37.6467600312406
},
{
setSeqNo : 1,
plygnSeqNo : 6272,
plygnLo : 126.984812837105,
plygnLa : 37.6468369092317
},
{
setSeqNo : 1,
plygnSeqNo : 6273,
plygnLo : 126.984678784369,
plygnLa : 37.6469632962031
},
{
setSeqNo : 1,
plygnSeqNo : 6274,
plygnLo : 126.984713075692,
plygnLa : 37.6472519022845
},
{
setSeqNo : 1,
plygnSeqNo : 6275,
plygnLo : 126.984603216371,
plygnLa : 37.6476125564702
},
{
setSeqNo : 1,
plygnSeqNo : 6276,
plygnLo : 126.983980930677,
plygnLa : 37.6481820538211
},
{
setSeqNo : 1,
plygnSeqNo : 6277,
plygnLo : 126.983883982411,
plygnLa : 37.6486007139848
},
{
setSeqNo : 1,
plygnSeqNo : 6278,
plygnLo : 126.984019792129,
plygnLa : 37.6493175680805
},
{
setSeqNo : 1,
plygnSeqNo : 6279,
plygnLo : 126.983937207343,
plygnLa : 37.6496100937606
},
{
setSeqNo : 1,
plygnSeqNo : 6280,
plygnLo : 126.982495565567,
plygnLa : 37.6505404068173
},
{
setSeqNo : 1,
plygnSeqNo : 6281,
plygnLo : 126.982298495358,
plygnLa : 37.6512541184564
},
{
setSeqNo : 1,
plygnSeqNo : 6282,
plygnLo : 126.981873790052,
plygnLa : 37.6516884815912
},
{
setSeqNo : 1,
plygnSeqNo : 6283,
plygnLo : 126.981676733953,
plygnLa : 37.6523163282617
},
{
setSeqNo : 1,
plygnSeqNo : 6284,
plygnLo : 126.981048066076,
plygnLa : 37.6527126515421
},
{
setSeqNo : 1,
plygnSeqNo : 6285,
plygnLo : 126.980805714772,
plygnLa : 37.6531763221642
},
{
setSeqNo : 1,
plygnSeqNo : 6286,
plygnLo : 126.980431754253,
plygnLa : 37.6537872255338
},
{
setSeqNo : 1,
plygnSeqNo : 6287,
plygnLo : 126.979944355784,
plygnLa : 37.6548150945172
},
{
setSeqNo : 1,
plygnSeqNo : 6288,
plygnLo : 126.979658389512,
plygnLa : 37.6560386846338
},
{
setSeqNo : 1,
plygnSeqNo : 6289,
plygnLo : 126.981193636592,
plygnLa : 37.6564877525742
},
{
setSeqNo : 1,
plygnSeqNo : 6290,
plygnLo : 126.9828570646,
plygnLa : 37.6564497359872
},
{
setSeqNo : 1,
plygnSeqNo : 6291,
plygnLo : 126.9830102673,
plygnLa : 37.6570035788288
},
{
setSeqNo : 1,
plygnSeqNo : 6292,
plygnLo : 126.98340631973,
plygnLa : 37.6572339480515
},
{
setSeqNo : 1,
plygnSeqNo : 6293,
plygnLo : 126.983741847101,
plygnLa : 37.6573294479767
},
{
setSeqNo : 1,
plygnSeqNo : 6294,
plygnLo : 126.984335484128,
plygnLa : 37.6577338480648
},
{
setSeqNo : 1,
plygnSeqNo : 6295,
plygnLo : 126.984617094212,
plygnLa : 37.6582285785029
},
{
setSeqNo : 1,
plygnSeqNo : 6296,
plygnLo : 126.986020798815,
plygnLa : 37.6589433598306
},
{
setSeqNo : 1,
plygnSeqNo : 6297,
plygnLo : 126.986509974543,
plygnLa : 37.6594428964159
},
{
setSeqNo : 1,
plygnSeqNo : 6298,
plygnLo : 126.986544304425,
plygnLa : 37.6594851401521
},
{
setSeqNo : 1,
plygnSeqNo : 6299,
plygnLo : 126.987277021204,
plygnLa : 37.6606001861746
},
{
setSeqNo : 1,
plygnSeqNo : 6300,
plygnLo : 126.987225261222,
plygnLa : 37.6608476599154
},
{
setSeqNo : 1,
plygnSeqNo : 6301,
plygnLo : 126.987283995483,
plygnLa : 37.6611703309441
},
{
setSeqNo : 1,
plygnSeqNo : 6302,
plygnLo : 126.987365544935,
plygnLa : 37.6616182963294
},
{
setSeqNo : 1,
plygnSeqNo : 6303,
plygnLo : 126.987751033649,
plygnLa : 37.6627324500708
},
{
setSeqNo : 1,
plygnSeqNo : 6304,
plygnLo : 126.987802227147,
plygnLa : 37.6635937331661
},
{
setSeqNo : 1,
plygnSeqNo : 6305,
plygnLo : 126.988033261693,
plygnLa : 37.6639890619486
},
{
setSeqNo : 1,
plygnSeqNo : 6306,
plygnLo : 126.988268533881,
plygnLa : 37.6643911488321
},
{
setSeqNo : 1,
plygnSeqNo : 6307,
plygnLo : 126.988818559252,
plygnLa : 37.6644683497849
},
{
setSeqNo : 1,
plygnSeqNo : 6308,
plygnLo : 126.989453420347,
plygnLa : 37.6645300788293
},
{
setSeqNo : 1,
plygnSeqNo : 6309,
plygnLo : 126.989529211918,
plygnLa : 37.6645261488593
},
{
setSeqNo : 1,
plygnSeqNo : 6310,
plygnLo : 126.989997448837,
plygnLa : 37.6644994471352
},
{
setSeqNo : 1,
plygnSeqNo : 6311,
plygnLo : 126.991238779683,
plygnLa : 37.6649936910066
},
{
setSeqNo : 1,
plygnSeqNo : 6312,
plygnLo : 126.992224795778,
plygnLa : 37.6652316838821
},
{
setSeqNo : 1,
plygnSeqNo : 6313,
plygnLo : 126.992434817546,
plygnLa : 37.6653834603171
},
{
setSeqNo : 1,
plygnSeqNo : 6314,
plygnLo : 126.992749314554,
plygnLa : 37.6655327034675
},
{
setSeqNo : 1,
plygnSeqNo : 6315,
plygnLo : 126.993123275567,
plygnLa : 37.6660564203575
},
{
setSeqNo : 1,
plygnSeqNo : 6316,
plygnLo : 126.993261389588,
plygnLa : 37.6661896038214
},
{
setSeqNo : 1,
plygnSeqNo : 6317,
plygnLo : 126.994017526081,
plygnLa : 37.6667831702327
},
{
setSeqNo : 1,
plygnSeqNo : 6318,
plygnLo : 126.994129424707,
plygnLa : 37.6670301082088
},
{
setSeqNo : 1,
plygnSeqNo : 6319,
plygnLo : 126.9939613293,
plygnLa : 37.6673389587435
},
{
setSeqNo : 1,
plygnSeqNo : 6320,
plygnLo : 126.993560867103,
plygnLa : 37.6678040599655
},
{
setSeqNo : 1,
plygnSeqNo : 6321,
plygnLo : 126.993625312454,
plygnLa : 37.6679214702051
},
{
setSeqNo : 1,
plygnSeqNo : 6322,
plygnLo : 126.993629019333,
plygnLa : 37.6680197403246
},
{
setSeqNo : 1,
plygnSeqNo : 6323,
plygnLo : 126.993830673542,
plygnLa : 37.6686228379727
},
{
setSeqNo : 1,
plygnSeqNo : 6324,
plygnLo : 126.994086721709,
plygnLa : 37.6690398326143
},
{
setSeqNo : 1,
plygnSeqNo : 6325,
plygnLo : 126.994357632867,
plygnLa : 37.669566919547
},
{
setSeqNo : 1,
plygnSeqNo : 6326,
plygnLo : 126.99435087595,
plygnLa : 37.669811028577
},
{
setSeqNo : 1,
plygnSeqNo : 6327,
plygnLo : 126.993802705429,
plygnLa : 37.6701972846462
},
{
setSeqNo : 1,
plygnSeqNo : 6328,
plygnLo : 126.994074131061,
plygnLa : 37.6727611274912
},
{
setSeqNo : 1,
plygnSeqNo : 6329,
plygnLo : 126.993543711273,
plygnLa : 37.6741029825235
},
{
setSeqNo : 1,
plygnSeqNo : 6330,
plygnLo : 126.993796089594,
plygnLa : 37.6742263244163
},
{
setSeqNo : 1,
plygnSeqNo : 6331,
plygnLo : 126.993954024106,
plygnLa : 37.6747852161717
},
{
setSeqNo : 1,
plygnSeqNo : 6332,
plygnLo : 126.99395844235,
plygnLa : 37.6748012625795
},
{
setSeqNo : 1,
plygnSeqNo : 6333,
plygnLo : 126.993981634407,
plygnLa : 37.6749071298364
},
{
setSeqNo : 1,
plygnSeqNo : 6334,
plygnLo : 126.993809971274,
plygnLa : 37.6752523080862
},
{
setSeqNo : 1,
plygnSeqNo : 6335,
plygnLo : 126.993199755493,
plygnLa : 37.6757199243021
},
{
setSeqNo : 1,
plygnSeqNo : 6336,
plygnLo : 126.993125360048,
plygnLa : 37.6758319733192
},
{
setSeqNo : 1,
plygnSeqNo : 6337,
plygnLo : 126.993142001728,
plygnLa : 37.6759164400715
},
{
setSeqNo : 1,
plygnSeqNo : 6338,
plygnLo : 126.99315684918,
plygnLa : 37.6761419625367
},
{
setSeqNo : 1,
plygnSeqNo : 6339,
plygnLo : 126.993072495372,
plygnLa : 37.6765825962691
},
{
setSeqNo : 1,
plygnSeqNo : 6340,
plygnLo : 126.993266923635,
plygnLa : 37.6770015608487
},
{
setSeqNo : 1,
plygnSeqNo : 6341,
plygnLo : 126.993120067279,
plygnLa : 37.6772253789097
},
{
setSeqNo : 1,
plygnSeqNo : 6342,
plygnLo : 126.993247546182,
plygnLa : 37.6776606745558
},
{
setSeqNo : 1,
plygnSeqNo : 6343,
plygnLo : 126.992924694157,
plygnLa : 37.6788217775212
},
{
setSeqNo : 1,
plygnSeqNo : 6344,
plygnLo : 126.992433488166,
plygnLa : 37.6791483436546
},
{
setSeqNo : 1,
plygnSeqNo : 6345,
plygnLo : 126.992197856472,
plygnLa : 37.6796269652671
},
{
setSeqNo : 1,
plygnSeqNo : 6346,
plygnLo : 126.99243341493,
plygnLa : 37.6797593103015
},
{
setSeqNo : 1,
plygnSeqNo : 6347,
plygnLo : 126.993514563198,
plygnLa : 37.6800569967974
},
{
setSeqNo : 1,
plygnSeqNo : 6348,
plygnLo : 126.993742156409,
plygnLa : 37.6801918702592
},
{
setSeqNo : 1,
plygnSeqNo : 6349,
plygnLo : 126.994076027797,
plygnLa : 37.6803242263518
},
{
setSeqNo : 1,
plygnSeqNo : 6350,
plygnLo : 126.994175737642,
plygnLa : 37.6804621971076
},
{
setSeqNo : 1,
plygnSeqNo : 6351,
plygnLo : 126.994166699435,
plygnLa : 37.6805111835687
},
{
setSeqNo : 1,
plygnSeqNo : 6352,
plygnLo : 126.994155890179,
plygnLa : 37.6805688979182
},
{
setSeqNo : 1,
plygnSeqNo : 6353,
plygnLo : 126.994172176689,
plygnLa : 37.6805880456688
},
{
setSeqNo : 1,
plygnSeqNo : 6354,
plygnLo : 126.994732557399,
plygnLa : 37.6812441029905
},
{
setSeqNo : 1,
plygnSeqNo : 6355,
plygnLo : 126.995197521186,
plygnLa : 37.6813350734994
},
{
setSeqNo : 1,
plygnSeqNo : 6356,
plygnLo : 126.995503587964,
plygnLa : 37.6815062732075
},
{
setSeqNo : 1,
plygnSeqNo : 6357,
plygnLo : 126.99585320942,
plygnLa : 37.6818694896477
},
{
setSeqNo : 1,
plygnSeqNo : 6358,
plygnLo : 126.996351455484,
plygnLa : 37.6822042776834
},
{
setSeqNo : 1,
plygnSeqNo : 6359,
plygnLo : 126.996737765864,
plygnLa : 37.6823892718769
},
{
setSeqNo : 1,
plygnSeqNo : 6360,
plygnLo : 126.996971044875,
plygnLa : 37.68264577797
},
{
setSeqNo : 1,
plygnSeqNo : 6361,
plygnLo : 126.996974932039,
plygnLa : 37.6826787186153
},
{
setSeqNo : 1,
plygnSeqNo : 6362,
plygnLo : 126.997018669584,
plygnLa : 37.6830453064038
},
{
setSeqNo : 1,
plygnSeqNo : 6363,
plygnLo : 126.997026805178,
plygnLa : 37.683114285348
},
{
setSeqNo : 1,
plygnSeqNo : 6364,
plygnLo : 126.997311446233,
plygnLa : 37.6834662424506
},
{
setSeqNo : 1,
plygnSeqNo : 6365,
plygnLo : 126.997621255669,
plygnLa : 37.6834521700306
},
{
setSeqNo : 1,
plygnSeqNo : 6366,
plygnLo : 126.997723462411,
plygnLa : 37.6835557857361
},
{
setSeqNo : 1,
plygnSeqNo : 6367,
plygnLo : 126.997753921789,
plygnLa : 37.6835864833223
},
{
setSeqNo : 1,
plygnSeqNo : 6368,
plygnLo : 126.997861621398,
plygnLa : 37.683589295939
},
{
setSeqNo : 1,
plygnSeqNo : 6369,
plygnLo : 126.9991118335,
plygnLa : 37.6838421684995
},
{
setSeqNo : 1,
plygnSeqNo : 6370,
plygnLo : 126.999432627332,
plygnLa : 37.6839069262126
},
{
setSeqNo : 1,
plygnSeqNo : 6371,
plygnLo : 127.000402097325,
plygnLa : 37.6839671975611
},
{
setSeqNo : 1,
plygnSeqNo : 6372,
plygnLo : 127.000511032417,
plygnLa : 37.6839739464091
},
{
setSeqNo : 1,
plygnSeqNo : 6373,
plygnLo : 127.000973003218,
plygnLa : 37.6842349513757
},
{
setSeqNo : 1,
plygnSeqNo : 6374,
plygnLo : 127.001038721943,
plygnLa : 37.6842721177301
},
{
setSeqNo : 1,
plygnSeqNo : 6375,
plygnLo : 127.001354733903,
plygnLa : 37.6843073191161
},
{
setSeqNo : 1,
plygnSeqNo : 6376,
plygnLo : 127.00168703741,
plygnLa : 37.6843441959702
},
{
setSeqNo : 1,
plygnSeqNo : 6377,
plygnLo : 127.001690415812,
plygnLa : 37.6843396909437
},
{
setSeqNo : 1,
plygnSeqNo : 6378,
plygnLo : 127.001884908714,
plygnLa : 37.6840803818041
},
{
setSeqNo : 1,
plygnSeqNo : 6379,
plygnLo : 127.001900845866,
plygnLa : 37.6837228053602
},
{
setSeqNo : 1,
plygnSeqNo : 6380,
plygnLo : 127.002240063124,
plygnLa : 37.6835932977551
},
{
setSeqNo : 1,
plygnSeqNo : 6381,
plygnLo : 127.002359983499,
plygnLa : 37.6836791683235
},
{
setSeqNo : 1,
plygnSeqNo : 6382,
plygnLo : 127.002743303274,
plygnLa : 37.6839539606581
},
{
setSeqNo : 1,
plygnSeqNo : 6383,
plygnLo : 127.003022300679,
plygnLa : 37.6839508589181
},
{
setSeqNo : 1,
plygnSeqNo : 6384,
plygnLo : 127.00323804953,
plygnLa : 37.6839486041237
},
{
setSeqNo : 1,
plygnSeqNo : 6385,
plygnLo : 127.003252051695,
plygnLa : 37.6839604325443
},
{
setSeqNo : 1,
plygnSeqNo : 6386,
plygnLo : 127.003553366698,
plygnLa : 37.6842132589667
},
{
setSeqNo : 1,
plygnSeqNo : 6387,
plygnLo : 127.003583828661,
plygnLa : 37.684238880681
},
{
setSeqNo : 1,
plygnSeqNo : 6388,
plygnLo : 127.003737772232,
plygnLa : 37.6847054094773
},
{
setSeqNo : 1,
plygnSeqNo : 6389,
plygnLo : 127.003777104837,
plygnLa : 37.6848245093638
},
{
setSeqNo : 1,
plygnSeqNo : 6390,
plygnLo : 127.004276997393,
plygnLa : 37.6849413453247
},
{
setSeqNo : 1,
plygnSeqNo : 6391,
plygnLo : 127.004526765511,
plygnLa : 37.6850888626969
},
{
setSeqNo : 1,
plygnSeqNo : 6392,
plygnLo : 127.004566978711,
plygnLa : 37.6850798527557
},
{
setSeqNo : 1,
plygnSeqNo : 6393,
plygnLo : 127.005529718959,
plygnLa : 37.6848652845684
},
{
setSeqNo : 1,
plygnSeqNo : 6394,
plygnLo : 127.006051046082,
plygnLa : 37.6850539021766
},
{
setSeqNo : 1,
plygnSeqNo : 6395,
plygnLo : 127.006511244134,
plygnLa : 37.6848711574137
},
{
setSeqNo : 1,
plygnSeqNo : 6396,
plygnLo : 127.007067446034,
plygnLa : 37.6847647111356
},
{
setSeqNo : 1,
plygnSeqNo : 6397,
plygnLo : 127.007662435665,
plygnLa : 37.68446819811
},
{
setSeqNo : 1,
plygnSeqNo : 6398,
plygnLo : 127.008525450048,
plygnLa : 37.6844521038116
},
{
setSeqNo : 1,
plygnSeqNo : 6399,
plygnLo : 127.0086637925,
plygnLa : 37.6844495637915
},
{
setSeqNo : 1,
plygnSeqNo : 6400,
plygnLo : 127.008665915928,
plygnLa : 37.6844856038321
},
{
setSeqNo : 1,
plygnSeqNo : 6401,
plygnLo : 127.008474859586,
plygnLa : 37.6852325726284
},
{
setSeqNo : 1,
plygnSeqNo : 6402,
plygnLo : 127.008440152093,
plygnLa : 37.6854316348416
},
{
setSeqNo : 1,
plygnSeqNo : 6403,
plygnLo : 127.008588618783,
plygnLa : 37.687440790625
},
{
setSeqNo : 1,
plygnSeqNo : 6404,
plygnLo : 127.008509644593,
plygnLa : 37.6878073714876
},
{
setSeqNo : 1,
plygnSeqNo : 6405,
plygnLo : 127.008327425378,
plygnLa : 37.688506760669
},
{
setSeqNo : 1,
plygnSeqNo : 6406,
plygnLo : 127.008319300578,
plygnLa : 37.6888004235021
},
{
setSeqNo : 1,
plygnSeqNo : 6407,
plygnLo : 127.008293027228,
plygnLa : 37.6901149942474
},
{
setSeqNo : 1,
plygnSeqNo : 6408,
plygnLo : 127.008063134486,
plygnLa : 37.6906561559401
},
{
setSeqNo : 1,
plygnSeqNo : 6409,
plygnLo : 127.007621041801,
plygnLa : 37.691618530921
},
{
setSeqNo : 1,
plygnSeqNo : 6410,
plygnLo : 127.008266635959,
plygnLa : 37.6921590783351
},
{
setSeqNo : 1,
plygnSeqNo : 6411,
plygnLo : 127.009711658554,
plygnLa : 37.6933634640909
},
{
setSeqNo : 1,
plygnSeqNo : 6412,
plygnLo : 127.009666489391,
plygnLa : 37.6966998731026
},
{
setSeqNo : 1,
plygnSeqNo : 6413,
plygnLo : 127.012124596405,
plygnLa : 37.6973776557853
},
{
setSeqNo : 1,
plygnSeqNo : 6414,
plygnLo : 127.013878625939,
plygnLa : 37.6988007276582
},
{
setSeqNo : 1,
plygnSeqNo : 6415,
plygnLo : 127.014961442485,
plygnLa : 37.7004282711577
},
{
setSeqNo : 1,
plygnSeqNo : 6416,
plygnLo : 127.015008935665,
plygnLa : 37.7005262350458
},
{
setSeqNo : 1,
plygnSeqNo : 6417,
plygnLo : 127.015194877282,
plygnLa : 37.7009522102861
},
{
setSeqNo : 1,
plygnSeqNo : 6418,
plygnLo : 127.015415384337,
plygnLa : 37.7014553219019
},
{
setSeqNo : 1,
plygnSeqNo : 6419,
plygnLo : 127.017047154203,
plygnLa : 37.7012780140903
},
{
setSeqNo : 1,
plygnSeqNo : 6420,
plygnLo : 127.017795887374,
plygnLa : 37.7011965464566
},
{
setSeqNo : 1,
plygnSeqNo : 6421,
plygnLo : 127.019827359155,
plygnLa : 37.7010174617387
},
{
setSeqNo : 1,
plygnSeqNo : 6422,
plygnLo : 127.022148377384,
plygnLa : 37.6997208099956
},
{
setSeqNo : 1,
plygnSeqNo : 6423,
plygnLo : 127.023388869213,
plygnLa : 37.7000708377766
},
{
setSeqNo : 1,
plygnSeqNo : 6424,
plygnLo : 127.025315489133,
plygnLa : 37.6995805639718
},
{
setSeqNo : 1,
plygnSeqNo : 6425,
plygnLo : 127.026898070548,
plygnLa : 37.7002511763082
},
{
setSeqNo : 1,
plygnSeqNo : 6426,
plygnLo : 127.027022201113,
plygnLa : 37.7011155195042
},
{
setSeqNo : 1,
plygnSeqNo : 6427,
plygnLo : 127.027687622708,
plygnLa : 37.7009374238408
},
{
setSeqNo : 1,
plygnSeqNo : 6428,
plygnLo : 127.028216254132,
plygnLa : 37.7002810132753
},
{
setSeqNo : 1,
plygnSeqNo : 6429,
plygnLo : 127.028313308207,
plygnLa : 37.7001604869187
},
{
setSeqNo : 1,
plygnSeqNo : 6430,
plygnLo : 127.028991343098,
plygnLa : 37.6996583197307
},
{
setSeqNo : 1,
plygnSeqNo : 6431,
plygnLo : 127.029285853559,
plygnLa : 37.6992916658823
},
{
setSeqNo : 1,
plygnSeqNo : 6432,
plygnLo : 127.02960169023,
plygnLa : 37.6981752371047
},
{
setSeqNo : 1,
plygnSeqNo : 6433,
plygnLo : 127.029654696548,
plygnLa : 37.6978066734403
},
{
setSeqNo : 1,
plygnSeqNo : 6434,
plygnLo : 127.029729586905,
plygnLa : 37.6962724780611
},
{
setSeqNo : 1,
plygnSeqNo : 6435,
plygnLo : 127.030166595272,
plygnLa : 37.6951982481499
},
{
setSeqNo : 1,
plygnSeqNo : 6436,
plygnLo : 127.030454324217,
plygnLa : 37.6947758487458
},
{
setSeqNo : 1,
plygnSeqNo : 6437,
plygnLo : 127.030502811482,
plygnLa : 37.6946375922795
},
{
setSeqNo : 1,
plygnSeqNo : 6438,
plygnLo : 127.030683841788,
plygnLa : 37.6941228680171
},
{
setSeqNo : 1,
plygnSeqNo : 6439,
plygnLo : 127.030738340562,
plygnLa : 37.6939373188755
},
{
setSeqNo : 1,
plygnSeqNo : 6440,
plygnLo : 127.030827350533,
plygnLa : 37.6936898091456
},
{
setSeqNo : 1,
plygnSeqNo : 6441,
plygnLo : 127.030972756046,
plygnLa : 37.693556880921
},
{
setSeqNo : 1,
plygnSeqNo : 6442,
plygnLo : 127.03099341707,
plygnLa : 37.6933935740464
},
{
setSeqNo : 1,
plygnSeqNo : 6443,
plygnLo : 127.031010904012,
plygnLa : 37.693256172711
},
{
setSeqNo : 1,
plygnSeqNo : 6444,
plygnLo : 127.031026409607,
plygnLa : 37.6930745695219
},
{
setSeqNo : 1,
plygnSeqNo : 6445,
plygnLo : 127.031540608218,
plygnLa : 37.6928283582617
},
{
setSeqNo : 1,
plygnSeqNo : 6446,
plygnLo : 127.032026426061,
plygnLa : 37.6929504219395
},
{
setSeqNo : 1,
plygnSeqNo : 6447,
plygnLo : 127.032169866262,
plygnLa : 37.6928152492435
},
{
setSeqNo : 1,
plygnSeqNo : 6448,
plygnLo : 127.032339658546,
plygnLa : 37.6921383516532
},
{
setSeqNo : 1,
plygnSeqNo : 6449,
plygnLo : 127.032414295184,
plygnLa : 37.6918390385918
},
{
setSeqNo : 1,
plygnSeqNo : 6450,
plygnLo : 127.033596706253,
plygnLa : 37.6920214487475
},
{
setSeqNo : 1,
plygnSeqNo : 6451,
plygnLo : 127.033961993211,
plygnLa : 37.6919979781936
},
{
setSeqNo : 1,
plygnSeqNo : 6452,
plygnLo : 127.034259363379,
plygnLa : 37.6922251109477
},
{
setSeqNo : 1,
plygnSeqNo : 6453,
plygnLo : 127.034928162497,
plygnLa : 37.6923085422794
},
{
setSeqNo : 1,
plygnSeqNo : 6454,
plygnLo : 127.035625533606,
plygnLa : 37.6924916356963
},
{
setSeqNo : 1,
plygnSeqNo : 6455,
plygnLo : 127.035650501969,
plygnLa : 37.6924722039248
},
{
setSeqNo : 1,
plygnSeqNo : 6456,
plygnLo : 127.035776590909,
plygnLa : 37.6923741872952
},
{
setSeqNo : 1,
plygnSeqNo : 6457,
plygnLo : 127.036328675722,
plygnLa : 37.6925229640773
},
{
setSeqNo : 1,
plygnSeqNo : 6458,
plygnLo : 127.036763125878,
plygnLa : 37.6926399623968
},
{
setSeqNo : 1,
plygnSeqNo : 6459,
plygnLo : 127.037002605229,
plygnLa : 37.6929459400534
},
{
setSeqNo : 1,
plygnSeqNo : 6460,
plygnLo : 127.037528022622,
plygnLa : 37.6932208559275
},
{
setSeqNo : 1,
plygnSeqNo : 6461,
plygnLo : 127.037906979885,
plygnLa : 37.6932719773695
},
{
setSeqNo : 1,
plygnSeqNo : 6462,
plygnLo : 127.038498169722,
plygnLa : 37.6932858765812
},
{
setSeqNo : 1,
plygnSeqNo : 6463,
plygnLo : 127.038807840264,
plygnLa : 37.6936292726314
},
{
setSeqNo : 1,
plygnSeqNo : 6464,
plygnLo : 127.038820795312,
plygnLa : 37.693691210488
},
{
setSeqNo : 1,
plygnSeqNo : 6465,
plygnLo : 127.038836421776,
plygnLa : 37.6937658150326
},
{
setSeqNo : 1,
plygnSeqNo : 6466,
plygnLo : 127.038950094799,
plygnLa : 37.6939820108858
},
{
setSeqNo : 1,
plygnSeqNo : 6467,
plygnLo : 127.039572496048,
plygnLa : 37.6940460053209
},
{
setSeqNo : 1,
plygnSeqNo : 6468,
plygnLo : 127.039913548402,
plygnLa : 37.694081375639
},
{
setSeqNo : 1,
plygnSeqNo : 6469,
plygnLo : 127.039940575725,
plygnLa : 37.6942756333223
},
{
setSeqNo : 1,
plygnSeqNo : 6470,
plygnLo : 127.039997477594,
plygnLa : 37.6946844297699
},
{
setSeqNo : 1,
plygnSeqNo : 6471,
plygnLo : 127.040836545057,
plygnLa : 37.6950794536782
},
{
setSeqNo : 1,
plygnSeqNo : 6472,
plygnLo : 127.041108786202,
plygnLa : 37.6952998191326
},
{
setSeqNo : 1,
plygnSeqNo : 6473,
plygnLo : 127.041313774198,
plygnLa : 37.695323121302
},
{
setSeqNo : 1,
plygnSeqNo : 6474,
plygnLo : 127.041812880723,
plygnLa : 37.6953823536329
},
{
setSeqNo : 1,
plygnSeqNo : 6475,
plygnLo : 127.041984587139,
plygnLa : 37.6951266539643
},
{
setSeqNo : 1,
plygnSeqNo : 6476,
plygnLo : 127.042021589862,
plygnLa : 37.6950714575703
},
{
setSeqNo : 1,
plygnSeqNo : 6477,
plygnLo : 127.042172702892,
plygnLa : 37.6950629540522
},
{
setSeqNo : 1,
plygnSeqNo : 6478,
plygnLo : 127.042330369375,
plygnLa : 37.6950538893394
},
{
setSeqNo : 1,
plygnSeqNo : 6479,
plygnLo : 127.043072784714,
plygnLa : 37.6952310043902
},
{
setSeqNo : 1,
plygnSeqNo : 6480,
plygnLo : 127.043220174537,
plygnLa : 37.6949119549731
},
{
setSeqNo : 1,
plygnSeqNo : 6481,
plygnLo : 127.043286719773,
plygnLa : 37.6947694710403
},
{
setSeqNo : 1,
plygnSeqNo : 6482,
plygnLo : 127.043398116687,
plygnLa : 37.6944017183197
},
{
setSeqNo : 1,
plygnSeqNo : 6483,
plygnLo : 127.043369466478,
plygnLa : 37.6941824055983
},
{
setSeqNo : 1,
plygnSeqNo : 6484,
plygnLo : 127.043355060655,
plygnLa : 37.694072600385
},
{
setSeqNo : 1,
plygnSeqNo : 6485,
plygnLo : 127.043158083802,
plygnLa : 37.6937930903425
},
{
setSeqNo : 1,
plygnSeqNo : 6486,
plygnLo : 127.043037519473,
plygnLa : 37.6936222287567
},
{
setSeqNo : 1,
plygnSeqNo : 6487,
plygnLo : 127.043273642537,
plygnLa : 37.6935706195046
},
{
setSeqNo : 1,
plygnSeqNo : 6488,
plygnLo : 127.043709416423,
plygnLa : 37.6935107741345
},
{
setSeqNo : 1,
plygnSeqNo : 6489,
plygnLo : 127.043750162746,
plygnLa : 37.6935062557039
},
{
setSeqNo : 1,
plygnSeqNo : 6490,
plygnLo : 127.04383588553,
plygnLa : 37.6934552658967
},
{
setSeqNo : 1,
plygnSeqNo : 6491,
plygnLo : 127.043890776094,
plygnLa : 37.6934228644291
},
{
setSeqNo : 1,
plygnSeqNo : 6492,
plygnLo : 127.044065816117,
plygnLa : 37.6931263296999
},
{
setSeqNo : 1,
plygnSeqNo : 6493,
plygnLo : 127.044327110727,
plygnLa : 37.6930980789142
},
{
setSeqNo : 1,
plygnSeqNo : 6494,
plygnLo : 127.044531533577,
plygnLa : 37.6930723821949
},
{
setSeqNo : 1,
plygnSeqNo : 6495,
plygnLo : 127.044583962577,
plygnLa : 37.6930565952141
},
{
setSeqNo : 1,
plygnSeqNo : 6496,
plygnLo : 127.044622216846,
plygnLa : 37.6930354623406
},
{
setSeqNo : 1,
plygnSeqNo : 6497,
plygnLo : 127.044662069889,
plygnLa : 37.6930140583635
},
{
setSeqNo : 1,
plygnSeqNo : 6498,
plygnLo : 127.044765147384,
plygnLa : 37.6929591161985
},
{
setSeqNo : 1,
plygnSeqNo : 6499,
plygnLo : 127.044817390809,
plygnLa : 37.6929362928085
},
{
setSeqNo : 1,
plygnSeqNo : 6500,
plygnLo : 127.044837513168,
plygnLa : 37.6928129618911
},
{
setSeqNo : 1,
plygnSeqNo : 6501,
plygnLo : 127.044853227145,
plygnLa : 37.6927172276338
},
{
setSeqNo : 1,
plygnSeqNo : 6502,
plygnLo : 127.044904599622,
plygnLa : 37.6924055280058
},
{
setSeqNo : 1,
plygnSeqNo : 6503,
plygnLo : 127.045052008591,
plygnLa : 37.6923897877022
},
{
setSeqNo : 1,
plygnSeqNo : 6504,
plygnLo : 127.045296089667,
plygnLa : 37.6923637128698
},
{
setSeqNo : 1,
plygnSeqNo : 6505,
plygnLo : 127.045649346061,
plygnLa : 37.6923801952945
},
{
setSeqNo : 1,
plygnSeqNo : 6506,
plygnLo : 127.04565005488,
plygnLa : 37.6923703391786
},
{
setSeqNo : 1,
plygnSeqNo : 6507,
plygnLo : 127.045973404246,
plygnLa : 37.6924290586672
},
{
setSeqNo : 1,
plygnSeqNo : 6508,
plygnLo : 127.045968824095,
plygnLa : 37.6924659469311
},
{
setSeqNo : 1,
plygnSeqNo : 6509,
plygnLo : 127.046040939861,
plygnLa : 37.6924971742316
},
{
setSeqNo : 1,
plygnSeqNo : 6510,
plygnLo : 127.046097815466,
plygnLa : 37.6925219294334
},
{
setSeqNo : 1,
plygnSeqNo : 6511,
plygnLo : 127.046139107448,
plygnLa : 37.6925396534068
},
{
setSeqNo : 1,
plygnSeqNo : 6512,
plygnLo : 127.046205030388,
plygnLa : 37.6925635582216
},
{
setSeqNo : 1,
plygnSeqNo : 6513,
plygnLo : 127.046419604642,
plygnLa : 37.6926414655144
},
{
setSeqNo : 1,
plygnSeqNo : 6514,
plygnLo : 127.046523621812,
plygnLa : 37.6926833842835
},
{
setSeqNo : 1,
plygnSeqNo : 6515,
plygnLo : 127.046755189389,
plygnLa : 37.6927173603637
},
{
setSeqNo : 1,
plygnSeqNo : 6516,
plygnLo : 127.046820592891,
plygnLa : 37.6927654745284
},
{
setSeqNo : 1,
plygnSeqNo : 6517,
plygnLo : 127.046864375809,
plygnLa : 37.6928124790394
},
{
setSeqNo : 1,
plygnSeqNo : 6518,
plygnLo : 127.046964898451,
plygnLa : 37.6929205567055
},
{
setSeqNo : 1,
plygnSeqNo : 6519,
plygnLo : 127.047078316932,
plygnLa : 37.693002447105
},
{
setSeqNo : 1,
plygnSeqNo : 6520,
plygnLo : 127.047213846303,
plygnLa : 37.6929933848909
},
{
setSeqNo : 1,
plygnSeqNo : 6521,
plygnLo : 127.047273914899,
plygnLa : 37.6930080024713
},
{
setSeqNo : 1,
plygnSeqNo : 6522,
plygnLo : 127.047328527929,
plygnLa : 37.6930955455202
},
{
setSeqNo : 1,
plygnSeqNo : 6523,
plygnLo : 127.047364697075,
plygnLa : 37.6931524014681
},
{
setSeqNo : 1,
plygnSeqNo : 6524,
plygnLo : 127.04744927157,
plygnLa : 37.6932503490565
},
{
setSeqNo : 1,
plygnSeqNo : 6525,
plygnLo : 127.047526727304,
plygnLa : 37.6933136656597
},
{
setSeqNo : 1,
plygnSeqNo : 6526,
plygnLo : 127.047750979705,
plygnLa : 37.6932690968821
},
{
setSeqNo : 1,
plygnSeqNo : 6527,
plygnLo : 127.047815121258,
plygnLa : 37.6932899022449
},
{
setSeqNo : 1,
plygnSeqNo : 6528,
plygnLo : 127.047891367811,
plygnLa : 37.6933940510831
},
{
setSeqNo : 1,
plygnSeqNo : 6529,
plygnLo : 127.047964425064,
plygnLa : 37.6934928503021
},
{
setSeqNo : 1,
plygnSeqNo : 6530,
plygnLo : 127.04806210002,
plygnLa : 37.6935967026796
},
{
setSeqNo : 1,
plygnSeqNo : 6531,
plygnLo : 127.048141190765,
plygnLa : 37.6937163291043
},
{
setSeqNo : 1,
plygnSeqNo : 6532,
plygnLo : 127.048161606779,
plygnLa : 37.6937844614793
},
{
setSeqNo : 1,
plygnSeqNo : 6533,
plygnLo : 127.048186271842,
plygnLa : 37.693860186494
},
{
setSeqNo : 1,
plygnSeqNo : 6534,
plygnLo : 127.048211313231,
plygnLa : 37.693945209559
},
{
setSeqNo : 1,
plygnSeqNo : 6535,
plygnLo : 127.048226192408,
plygnLa : 37.6939494216814
},
{
setSeqNo : 1,
plygnSeqNo : 6536,
plygnLo : 127.048237350973,
plygnLa : 37.6939525159913
},
{
setSeqNo : 1,
plygnSeqNo : 6537,
plygnLo : 127.048441655725,
plygnLa : 37.6940095920194
},
{
setSeqNo : 1,
plygnSeqNo : 6538,
plygnLo : 127.048631959538,
plygnLa : 37.6940630069134
},
{
setSeqNo : 1,
plygnSeqNo : 6539,
plygnLo : 127.048720993408,
plygnLa : 37.6936640135436
},
{
setSeqNo : 1,
plygnSeqNo : 6540,
plygnLo : 127.048753500899,
plygnLa : 37.6935226653459
},
{
setSeqNo : 1,
plygnSeqNo : 6541,
plygnLo : 127.048807739012,
plygnLa : 37.6932813451767
},
{
setSeqNo : 1,
plygnSeqNo : 6542,
plygnLo : 127.048900680671,
plygnLa : 37.6928930456538
},
{
setSeqNo : 1,
plygnSeqNo : 6543,
plygnLo : 127.048920117336,
plygnLa : 37.6928113907604
},
{
setSeqNo : 1,
plygnSeqNo : 6544,
plygnLo : 127.048966277792,
plygnLa : 37.6926911481127
},
{
setSeqNo : 1,
plygnSeqNo : 6545,
plygnLo : 127.049075928607,
plygnLa : 37.6924061719374
},
{
setSeqNo : 1,
plygnSeqNo : 6546,
plygnLo : 127.049199037382,
plygnLa : 37.6921054232029
},
{
setSeqNo : 1,
plygnSeqNo : 6547,
plygnLo : 127.049366005374,
plygnLa : 37.6916897842498
},
{
setSeqNo : 1,
plygnSeqNo : 6548,
plygnLo : 127.049515397478,
plygnLa : 37.6914872850741
},
{
setSeqNo : 1,
plygnSeqNo : 6549,
plygnLo : 127.04970797189,
plygnLa : 37.6912231145214
},
{
setSeqNo : 1,
plygnSeqNo : 6550,
plygnLo : 127.049966029588,
plygnLa : 37.6908702245955
},
{
setSeqNo : 1,
plygnSeqNo : 6551,
plygnLo : 127.05001285633,
plygnLa : 37.6904191538553
},
{
setSeqNo : 1,
plygnSeqNo : 6552,
plygnLo : 127.049862006494,
plygnLa : 37.6897204056994
},
{
setSeqNo : 1,
plygnSeqNo : 6553,
plygnLo : 127.049751302272,
plygnLa : 37.6892071763753
},
{
setSeqNo : 1,
plygnSeqNo : 6554,
plygnLo : 127.049791765051,
plygnLa : 37.6884861062389
},
{
setSeqNo : 1,
plygnSeqNo : 6555,
plygnLo : 127.049804901158,
plygnLa : 37.6882524067355
},
{
setSeqNo : 1,
plygnSeqNo : 6556,
plygnLo : 127.049820297926,
plygnLa : 37.6879770458057
},
{
setSeqNo : 1,
plygnSeqNo : 6557,
plygnLo : 127.049984986143,
plygnLa : 37.6876103914122
},
{
setSeqNo : 1,
plygnSeqNo : 6558,
plygnLo : 127.050466487541,
plygnLa : 37.6868269163076
},
{
setSeqNo : 1,
plygnSeqNo : 6559,
plygnLo : 127.050643419363,
plygnLa : 37.68650784531
},
{
setSeqNo : 1,
plygnSeqNo : 6560,
plygnLo : 127.050920946216,
plygnLa : 37.6861585947279
},
{
setSeqNo : 1,
plygnSeqNo : 6561,
plygnLo : 127.051085968819,
plygnLa : 37.6860552019055
},
{
setSeqNo : 1,
plygnSeqNo : 6562,
plygnLo : 127.051368251244,
plygnLa : 37.6859216227127
},
{
setSeqNo : 1,
plygnSeqNo : 6563,
plygnLo : 127.05180359029,
plygnLa : 37.685813600484
},
{
setSeqNo : 1,
plygnSeqNo : 6564,
plygnLo : 127.051803794028,
plygnLa : 37.6861159922529
},
{
setSeqNo : 1,
plygnSeqNo : 6565,
plygnLo : 127.051803797474,
plygnLa : 37.6861210562023
},
{
setSeqNo : 1,
plygnSeqNo : 6566,
plygnLo : 127.051803920184,
plygnLa : 37.6863026657588
},
{
setSeqNo : 1,
plygnSeqNo : 6567,
plygnLo : 127.051804121191,
plygnLa : 37.6866025175475
},
{
setSeqNo : 1,
plygnSeqNo : 6568,
plygnLo : 127.051804126076,
plygnLa : 37.6866081475845
},
{
setSeqNo : 1,
plygnSeqNo : 6569,
plygnLo : 127.051804434751,
plygnLa : 37.6870667966428
},
{
setSeqNo : 1,
plygnSeqNo : 6570,
plygnLo : 127.051967330195,
plygnLa : 37.6872035647941
},
{
setSeqNo : 1,
plygnSeqNo : 6571,
plygnLo : 127.051985219525,
plygnLa : 37.6872184779823
},
{
setSeqNo : 1,
plygnSeqNo : 6572,
plygnLo : 127.052060905759,
plygnLa : 37.6872829187585
},
{
setSeqNo : 1,
plygnSeqNo : 6573,
plygnLo : 127.052144564719,
plygnLa : 37.6873524294934
},
{
setSeqNo : 1,
plygnSeqNo : 6574,
plygnLo : 127.052227339,
plygnLa : 37.6874208123463
},
{
setSeqNo : 1,
plygnSeqNo : 6575,
plygnLo : 127.052399583015,
plygnLa : 37.6874984473947
},
{
setSeqNo : 1,
plygnSeqNo : 6576,
plygnLo : 127.05261930989,
plygnLa : 37.6875974593457
},
{
setSeqNo : 1,
plygnSeqNo : 6577,
plygnLo : 127.052773112919,
plygnLa : 37.687666370913
},
{
setSeqNo : 1,
plygnSeqNo : 6578,
plygnLo : 127.052808382929,
plygnLa : 37.687681275621
},
{
setSeqNo : 1,
plygnSeqNo : 6579,
plygnLo : 127.052874120179,
plygnLa : 37.68771869048
},
{
setSeqNo : 1,
plygnSeqNo : 6580,
plygnLo : 127.052944655566,
plygnLa : 37.687761744157
},
{
setSeqNo : 1,
plygnSeqNo : 6581,
plygnLo : 127.052968585908,
plygnLa : 37.6877746820287
},
{
setSeqNo : 1,
plygnSeqNo : 6582,
plygnLo : 127.053026714721,
plygnLa : 37.6878095676257
},
{
setSeqNo : 1,
plygnSeqNo : 6583,
plygnLo : 127.053109647311,
plygnLa : 37.6878582475969
},
{
setSeqNo : 1,
plygnSeqNo : 6584,
plygnLo : 127.053177516466,
plygnLa : 37.6878987527365
},
{
setSeqNo : 1,
plygnSeqNo : 6585,
plygnLo : 127.053267015401,
plygnLa : 37.6879505288447
},
{
setSeqNo : 1,
plygnSeqNo : 6586,
plygnLo : 127.053401883518,
plygnLa : 37.6880293042858
},
{
setSeqNo : 1,
plygnSeqNo : 6587,
plygnLo : 127.053477024625,
plygnLa : 37.6880734725924
},
{
setSeqNo : 1,
plygnSeqNo : 6588,
plygnLo : 127.053557480688,
plygnLa : 37.6881159539227
},
{
setSeqNo : 1,
plygnSeqNo : 6589,
plygnLo : 127.053623398565,
plygnLa : 37.6881502701719
},
{
setSeqNo : 1,
plygnSeqNo : 6590,
plygnLo : 127.053660077325,
plygnLa : 37.6881693983444
},
{
setSeqNo : 1,
plygnSeqNo : 6591,
plygnLo : 127.053692150619,
plygnLa : 37.6881871244018
},
{
setSeqNo : 1,
plygnSeqNo : 6592,
plygnLo : 127.053760031058,
plygnLa : 37.688222845329
},
{
setSeqNo : 1,
plygnSeqNo : 6593,
plygnLo : 127.05385962052,
plygnLa : 37.6882746069066
},
{
setSeqNo : 1,
plygnSeqNo : 6594,
plygnLo : 127.054023542127,
plygnLa : 37.6883615404793
},
{
setSeqNo : 1,
plygnSeqNo : 6595,
plygnLo : 127.054035596643,
plygnLa : 37.6883671665717
},
{
setSeqNo : 1,
plygnSeqNo : 6596,
plygnLo : 127.054086634681,
plygnLa : 37.6883938840255
},
{
setSeqNo : 1,
plygnSeqNo : 6597,
plygnLo : 127.054152914594,
plygnLa : 37.6884299034455
},
{
setSeqNo : 1,
plygnSeqNo : 6598,
plygnLo : 127.054193313909,
plygnLa : 37.6884515618068
},
{
setSeqNo : 1,
plygnSeqNo : 6599,
plygnLo : 127.054312753805,
plygnLa : 37.6885157027697
},
{
setSeqNo : 1,
plygnSeqNo : 6600,
plygnLo : 127.054463565484,
plygnLa : 37.6885964335431
},
{
setSeqNo : 1,
plygnSeqNo : 6601,
plygnLo : 127.054630674393,
plygnLa : 37.6886858962514
},
{
setSeqNo : 1,
plygnSeqNo : 6602,
plygnLo : 127.054690400953,
plygnLa : 37.6887182509677
},
{
setSeqNo : 1,
plygnSeqNo : 6603,
plygnLo : 127.05469572036,
plygnLa : 37.6887227540531
},
{
setSeqNo : 1,
plygnSeqNo : 6604,
plygnLo : 127.05476024433,
plygnLa : 37.6887877654338
},
{
setSeqNo : 1,
plygnSeqNo : 6605,
plygnLo : 127.054872815361,
plygnLa : 37.6888994885799
},
{
setSeqNo : 1,
plygnSeqNo : 6606,
plygnLo : 127.054996197225,
plygnLa : 37.6890216212382
},
{
setSeqNo : 1,
plygnSeqNo : 6607,
plygnLo : 127.055094939666,
plygnLa : 37.6891220902662
},
{
setSeqNo : 1,
plygnSeqNo : 6608,
plygnLo : 127.055178795847,
plygnLa : 37.6892048334784
},
{
setSeqNo : 1,
plygnSeqNo : 6609,
plygnLo : 127.055206969764,
plygnLa : 37.6892048187191
},
{
setSeqNo : 1,
plygnSeqNo : 6610,
plygnLo : 127.055229815278,
plygnLa : 37.6892048097126
},
{
setSeqNo : 1,
plygnSeqNo : 6611,
plygnLo : 127.055619008805,
plygnLa : 37.6892046309591
},
{
setSeqNo : 1,
plygnSeqNo : 6612,
plygnLo : 127.055626627893,
plygnLa : 37.6892046288625
},
{
setSeqNo : 1,
plygnSeqNo : 6613,
plygnLo : 127.055734153663,
plygnLa : 37.6892045795871
},
{
setSeqNo : 1,
plygnSeqNo : 6614,
plygnLo : 127.055864717417,
plygnLa : 37.6892045179584
},
{
setSeqNo : 1,
plygnSeqNo : 6615,
plygnLo : 127.056102804163,
plygnLa : 37.6892044087636
},
{
setSeqNo : 1,
plygnSeqNo : 6616,
plygnLo : 127.056114141433,
plygnLa : 37.6892044030272
},
{
setSeqNo : 1,
plygnSeqNo : 6617,
plygnLo : 127.056177734521,
plygnLa : 37.6892043733665
},
{
setSeqNo : 1,
plygnSeqNo : 6618,
plygnLo : 127.056225761609,
plygnLa : 37.6892226511412
},
{
setSeqNo : 1,
plygnSeqNo : 6619,
plygnLo : 127.056262437131,
plygnLa : 37.6892367145573
},
{
setSeqNo : 1,
plygnSeqNo : 6620,
plygnLo : 127.056368575308,
plygnLa : 37.6892769311012
},
{
setSeqNo : 1,
plygnSeqNo : 6621,
plygnLo : 127.056460900863,
plygnLa : 37.6893117907084
},
{
setSeqNo : 1,
plygnSeqNo : 6622,
plygnLo : 127.056538163661,
plygnLa : 37.6893410373016
},
{
setSeqNo : 1,
plygnSeqNo : 6623,
plygnLo : 127.056764447437,
plygnLa : 37.6894268113833
},
{
setSeqNo : 1,
plygnSeqNo : 6624,
plygnLo : 127.056846851297,
plygnLa : 37.6894754790346
},
{
setSeqNo : 1,
plygnSeqNo : 6625,
plygnLo : 127.056911718332,
plygnLa : 37.6895137394196
},
{
setSeqNo : 1,
plygnSeqNo : 6626,
plygnLo : 127.056931381307,
plygnLa : 37.6895193618957
},
{
setSeqNo : 1,
plygnSeqNo : 6627,
plygnLo : 127.056990390738,
plygnLa : 37.6895452371881
},
{
setSeqNo : 1,
plygnSeqNo : 6628,
plygnLo : 127.057028678338,
plygnLa : 37.6895618320625
},
{
setSeqNo : 1,
plygnSeqNo : 6629,
plygnLo : 127.057061104092,
plygnLa : 37.6895761697345
},
{
setSeqNo : 1,
plygnSeqNo : 6630,
plygnLo : 127.057096726249,
plygnLa : 37.6895916405647
},
{
setSeqNo : 1,
plygnSeqNo : 6631,
plygnLo : 127.057141559158,
plygnLa : 37.6896110540883
},
{
setSeqNo : 1,
plygnSeqNo : 6632,
plygnLo : 127.057190825916,
plygnLa : 37.6896327067636
},
{
setSeqNo : 1,
plygnSeqNo : 6633,
plygnLo : 127.057239361721,
plygnLa : 37.6896340899346
},
{
setSeqNo : 1,
plygnSeqNo : 6634,
plygnLo : 127.057275677133,
plygnLa : 37.6896351994546
},
{
setSeqNo : 1,
plygnSeqNo : 6635,
plygnLo : 127.057306323812,
plygnLa : 37.6896360318735
},
{
setSeqNo : 1,
plygnSeqNo : 6636,
plygnLo : 127.057327933907,
plygnLa : 37.6896365800547
},
{
setSeqNo : 1,
plygnSeqNo : 6637,
plygnLo : 127.057355574051,
plygnLa : 37.6896374138277
},
{
setSeqNo : 1,
plygnSeqNo : 6638,
plygnLo : 127.057387989484,
plygnLa : 37.6896382457128
},
{
setSeqNo : 1,
plygnSeqNo : 6639,
plygnLo : 127.057955062073,
plygnLa : 37.6896540225299
},
{
setSeqNo : 1,
plygnSeqNo : 6640,
plygnLo : 127.058172610235,
plygnLa : 37.6896699641423
},
{
setSeqNo : 1,
plygnSeqNo : 6641,
plygnLo : 127.058390339176,
plygnLa : 37.6896859054805
},
{
setSeqNo : 1,
plygnSeqNo : 6642,
plygnLo : 127.058706523061,
plygnLa : 37.6898783429791
},
{
setSeqNo : 1,
plygnSeqNo : 6643,
plygnLo : 127.058837837276,
plygnLa : 37.6899413465181
},
{
setSeqNo : 1,
plygnSeqNo : 6644,
plygnLo : 127.059553092203,
plygnLa : 37.6902844925406
},
{
setSeqNo : 1,
plygnSeqNo : 6645,
plygnLo : 127.059660134003,
plygnLa : 37.6903320196073
},
{
setSeqNo : 1,
plygnSeqNo : 6646,
plygnLo : 127.06061625223,
plygnLa : 37.691273905069
},
{
setSeqNo : 1,
plygnSeqNo : 6647,
plygnLo : 127.061209192027,
plygnLa : 37.6921697823442
},
{
setSeqNo : 1,
plygnSeqNo : 6648,
plygnLo : 127.061667874206,
plygnLa : 37.6924142164347
},
{
setSeqNo : 1,
plygnSeqNo : 6649,
plygnLo : 127.061742766116,
plygnLa : 37.6925724152185
},
{
setSeqNo : 1,
plygnSeqNo : 6650,
plygnLo : 127.062209051936,
plygnLa : 37.6928053024044
},
{
setSeqNo : 1,
plygnSeqNo : 6651,
plygnLo : 127.062367794143,
plygnLa : 37.6930242728156
},
{
setSeqNo : 1,
plygnSeqNo : 6652,
plygnLo : 127.062373541851,
plygnLa : 37.693135197836
},
{
setSeqNo : 1,
plygnSeqNo : 6653,
plygnLo : 127.06239478529,
plygnLa : 37.693546531758
},
{
setSeqNo : 1,
plygnSeqNo : 6654,
plygnLo : 127.062601747733,
plygnLa : 37.6942438297658
},
{
setSeqNo : 1,
plygnSeqNo : 6655,
plygnLo : 127.062732141716,
plygnLa : 37.6946759478717
},
{
setSeqNo : 1,
plygnSeqNo : 6656,
plygnLo : 127.063059285677,
plygnLa : 37.6947991013981
},
{
setSeqNo : 1,
plygnSeqNo : 6657,
plygnLo : 127.0633864331,
plygnLa : 37.6949219674131
},
{
setSeqNo : 1,
plygnSeqNo : 6658,
plygnLo : 127.064584976451,
plygnLa : 37.694553908268
},
{
setSeqNo : 1,
plygnSeqNo : 6659,
plygnLo : 127.065325686785,
plygnLa : 37.6947632636568
},
{
setSeqNo : 1,
plygnSeqNo : 6660,
plygnLo : 127.066308138031,
plygnLa : 37.6944417584669
},
{
setSeqNo : 1,
plygnSeqNo : 6661,
plygnLo : 127.067576995957,
plygnLa : 37.6946803696988
},
{
setSeqNo : 1,
plygnSeqNo : 6662,
plygnLo : 127.067827406408,
plygnLa : 37.6947731453859
},
{
setSeqNo : 1,
plygnSeqNo : 6663,
plygnLo : 127.068028402597,
plygnLa : 37.6944810650165
},
{
setSeqNo : 1,
plygnSeqNo : 6664,
plygnLo : 127.068298813519,
plygnLa : 37.6943573092627
},
{
setSeqNo : 1,
plygnSeqNo : 6665,
plygnLo : 127.068548296396,
plygnLa : 37.6940004375052
},
{
setSeqNo : 1,
plygnSeqNo : 6666,
plygnLo : 127.069027922412,
plygnLa : 37.6938681184728
},
{
setSeqNo : 1,
plygnSeqNo : 6667,
plygnLo : 127.069151244566,
plygnLa : 37.693689538053
},
{
setSeqNo : 1,
plygnSeqNo : 6668,
plygnLo : 127.069557379261,
plygnLa : 37.6937895382464
},
{
setSeqNo : 1,
plygnSeqNo : 6669,
plygnLo : 127.069822950374,
plygnLa : 37.6939811279634
},
{
setSeqNo : 1,
plygnSeqNo : 6670,
plygnLo : 127.070644634997,
plygnLa : 37.6938108706227
},
{
setSeqNo : 1,
plygnSeqNo : 6671,
plygnLo : 127.070879098013,
plygnLa : 37.6937000853909
},
{
setSeqNo : 1,
plygnSeqNo : 6672,
plygnLo : 127.071201720653,
plygnLa : 37.693718193035
},
{
setSeqNo : 1,
plygnSeqNo : 6673,
plygnLo : 127.072657874754,
plygnLa : 37.6937995370523
},
{
setSeqNo : 1,
plygnSeqNo : 6674,
plygnLo : 127.073138140847,
plygnLa : 37.6939757833539
},
{
setSeqNo : 1,
plygnSeqNo : 6675,
plygnLo : 127.073398508756,
plygnLa : 37.6941009126802
},
{
setSeqNo : 1,
plygnSeqNo : 6676,
plygnLo : 127.073782973732,
plygnLa : 37.6944937254124
},
{
setSeqNo : 1,
plygnSeqNo : 6677,
plygnLo : 127.073930348067,
plygnLa : 37.6946442681316
},
{
setSeqNo : 1,
plygnSeqNo : 6678,
plygnLo : 127.074486637534,
plygnLa : 37.6950096641587
},
{
setSeqNo : 1,
plygnSeqNo : 6679,
plygnLo : 127.074907081314,
plygnLa : 37.6952197161129
},
{
setSeqNo : 1,
plygnSeqNo : 6680,
plygnLo : 127.075809580056,
plygnLa : 37.6954300415874
},
{
setSeqNo : 1,
plygnSeqNo : 6681,
plygnLo : 127.078196552963,
plygnLa : 37.6959865462475
},
{
setSeqNo : 1,
plygnSeqNo : 6682,
plygnLo : 127.081105044447,
plygnLa : 37.6961375055383
},
{
setSeqNo : 1,
plygnSeqNo : 6683,
plygnLo : 127.083843563251,
plygnLa : 37.6942689275487
},
{
setSeqNo : 1,
plygnSeqNo : 6684,
plygnLo : 127.083878596929,
plygnLa : 37.6927921611707
},
{
setSeqNo : 1,
plygnSeqNo : 6685,
plygnLo : 127.083905293076,
plygnLa : 37.6917824882926
},
{
setSeqNo : 1,
plygnSeqNo : 6686,
plygnLo : 127.08503124041,
plygnLa : 37.6905499555787
},
{
setSeqNo : 1,
plygnSeqNo : 6687,
plygnLo : 127.085177476716,
plygnLa : 37.6903898835491
},
{
setSeqNo : 1,
plygnSeqNo : 6688,
plygnLo : 127.086530905189,
plygnLa : 37.6899122405407
},
{
setSeqNo : 1,
plygnSeqNo : 6689,
plygnLo : 127.088453859838,
plygnLa : 37.6899026760774
},
{
setSeqNo : 1,
plygnSeqNo : 6690,
plygnLo : 127.090552161927,
plygnLa : 37.6895702847232
},
{
setSeqNo : 1,
plygnSeqNo : 6691,
plygnLo : 127.092384521069,
plygnLa : 37.6899332208257
},
{
setSeqNo : 1,
plygnSeqNo : 6692,
plygnLo : 127.093036996476,
plygnLa : 37.6899665016079
},
{
setSeqNo : 1,
plygnSeqNo : 6693,
plygnLo : 127.094289663096,
plygnLa : 37.6891318475672
},
{
setSeqNo : 1,
plygnSeqNo : 6694,
plygnLo : 127.095097418119,
plygnLa : 37.6893848858563
},
{
setSeqNo : 1,
plygnSeqNo : 6695,
plygnLo : 127.09562967447,
plygnLa : 37.6891990619278
},
{
setSeqNo : 1,
plygnSeqNo : 6696,
plygnLo : 127.095996235068,
plygnLa : 37.6890710835405
},
{
setSeqNo : 1,
plygnSeqNo : 6697,
plygnLo : 127.095585098934,
plygnLa : 37.6883951265285
},
{
setSeqNo : 1,
plygnSeqNo : 6698,
plygnLo : 127.096081024077,
plygnLa : 37.6879070800037
},
{
setSeqNo : 1,
plygnSeqNo : 6699,
plygnLo : 127.096295496386,
plygnLa : 37.6871697980067
},
{
setSeqNo : 1,
plygnSeqNo : 6700,
plygnLo : 127.096425424023,
plygnLa : 37.6862642182753
},
{
setSeqNo : 1,
plygnSeqNo : 6701,
plygnLo : 127.096423389398,
plygnLa : 37.6856374788036
},
{
setSeqNo : 1,
plygnSeqNo : 6702,
plygnLo : 127.096045523532,
plygnLa : 37.6851965940152
},
{
setSeqNo : 1,
plygnSeqNo : 6703,
plygnLo : 127.095810111465,
plygnLa : 37.6846404330488
},
{
setSeqNo : 1,
plygnSeqNo : 6704,
plygnLo : 127.094287853275,
plygnLa : 37.6834185745743
},
{
setSeqNo : 1,
plygnSeqNo : 6705,
plygnLo : 127.094149093531,
plygnLa : 37.6830805319193
},
{
setSeqNo : 1,
plygnSeqNo : 6706,
plygnLo : 127.093883497714,
plygnLa : 37.6827417580621
},
{
setSeqNo : 1,
plygnSeqNo : 6707,
plygnLo : 127.093392524031,
plygnLa : 37.6821897306091
},
{
setSeqNo : 1,
plygnSeqNo : 6708,
plygnLo : 127.092919327848,
plygnLa : 37.6815515339588
},
{
setSeqNo : 1,
plygnSeqNo : 6709,
plygnLo : 127.092967072003,
plygnLa : 37.6811975860776
},
{
setSeqNo : 1,
plygnSeqNo : 6710,
plygnLo : 127.092795083295,
plygnLa : 37.6800453158392
},
{
setSeqNo : 1,
plygnSeqNo : 6711,
plygnLo : 127.092531053497,
plygnLa : 37.6795173351715
},
{
setSeqNo : 1,
plygnSeqNo : 6712,
plygnLo : 127.092174477324,
plygnLa : 37.6792095860622
},
{
setSeqNo : 1,
plygnSeqNo : 6713,
plygnLo : 127.091946838949,
plygnLa : 37.6791903357543
},
{
setSeqNo : 1,
plygnSeqNo : 6714,
plygnLo : 127.091941813102,
plygnLa : 37.6786925533422
},
{
setSeqNo : 1,
plygnSeqNo : 6715,
plygnLo : 127.092189865273,
plygnLa : 37.6780301488901
},
{
setSeqNo : 1,
plygnSeqNo : 6716,
plygnLo : 127.092479873779,
plygnLa : 37.6776430656965
},
{
setSeqNo : 1,
plygnSeqNo : 6717,
plygnLo : 127.092574839641,
plygnLa : 37.6775278394543
},
{
setSeqNo : 1,
plygnSeqNo : 6718,
plygnLo : 127.09261463153,
plygnLa : 37.677474597755
},
{
setSeqNo : 1,
plygnSeqNo : 6719,
plygnLo : 127.092968182137,
plygnLa : 37.677345368775
},
{
setSeqNo : 1,
plygnSeqNo : 6720,
plygnLo : 127.093340275899,
plygnLa : 37.6768836102877
},
{
setSeqNo : 1,
plygnSeqNo : 6721,
plygnLo : 127.093530320642,
plygnLa : 37.6767387481925
},
{
setSeqNo : 1,
plygnSeqNo : 6722,
plygnLo : 127.093854000816,
plygnLa : 37.676659381385
},
{
setSeqNo : 1,
plygnSeqNo : 6723,
plygnLo : 127.093886121173,
plygnLa : 37.6761429826765
},
{
setSeqNo : 1,
plygnSeqNo : 6724,
plygnLo : 127.094014645383,
plygnLa : 37.6757971344619
},
{
setSeqNo : 1,
plygnSeqNo : 6725,
plygnLo : 127.093963050457,
plygnLa : 37.6756172687867
},
{
setSeqNo : 1,
plygnSeqNo : 6726,
plygnLo : 127.094275713693,
plygnLa : 37.6746600193531
},
{
setSeqNo : 1,
plygnSeqNo : 6727,
plygnLo : 127.094614902084,
plygnLa : 37.6735363492451
},
{
setSeqNo : 1,
plygnSeqNo : 6728,
plygnLo : 127.094919671628,
plygnLa : 37.6730839372697
},
{
setSeqNo : 1,
plygnSeqNo : 6729,
plygnLo : 127.095147194628,
plygnLa : 37.6728914541988
},
{
setSeqNo : 1,
plygnSeqNo : 6730,
plygnLo : 127.095751043418,
plygnLa : 37.6726730554911
},
{
setSeqNo : 1,
plygnSeqNo : 6731,
plygnLo : 127.096019207897,
plygnLa : 37.6718504155957
},
{
setSeqNo : 1,
plygnSeqNo : 6732,
plygnLo : 127.095720681238,
plygnLa : 37.6713478036101
},
{
setSeqNo : 1,
plygnSeqNo : 6733,
plygnLo : 127.095805985613,
plygnLa : 37.6711599368491
},
{
setSeqNo : 1,
plygnSeqNo : 6734,
plygnLo : 127.095748981224,
plygnLa : 37.6706196783456
},
{
setSeqNo : 1,
plygnSeqNo : 6735,
plygnLo : 127.095773878012,
plygnLa : 37.6705610954913
},
{
setSeqNo : 1,
plygnSeqNo : 6736,
plygnLo : 127.09601324374,
plygnLa : 37.6700794511334
},
{
setSeqNo : 1,
plygnSeqNo : 6737,
plygnLo : 127.096447532184,
plygnLa : 37.6696891437477
},
{
setSeqNo : 1,
plygnSeqNo : 6738,
plygnLo : 127.096237635027,
plygnLa : 37.6688294510274
},
{
setSeqNo : 1,
plygnSeqNo : 6739,
plygnLo : 127.094979569684,
plygnLa : 37.6676000684192
},
{
setSeqNo : 1,
plygnSeqNo : 6740,
plygnLo : 127.094580907012,
plygnLa : 37.6661723411122
},
{
setSeqNo : 1,
plygnSeqNo : 6741,
plygnLo : 127.094680283086,
plygnLa : 37.6649213165202
},
{
setSeqNo : 1,
plygnSeqNo : 6742,
plygnLo : 127.095410911876,
plygnLa : 37.6638896813079
},
{
setSeqNo : 1,
plygnSeqNo : 6743,
plygnLo : 127.094142392995,
plygnLa : 37.6632988620584
},
{
setSeqNo : 1,
plygnSeqNo : 6744,
plygnLo : 127.093257094656,
plygnLa : 37.6619742755151
},
{
setSeqNo : 1,
plygnSeqNo : 6745,
plygnLo : 127.092173851113,
plygnLa : 37.6607925845409
},
{
setSeqNo : 1,
plygnSeqNo : 6746,
plygnLo : 127.091207187262,
plygnLa : 37.6593345931084
},
{
setSeqNo : 1,
plygnSeqNo : 6747,
plygnLo : 127.091132561507,
plygnLa : 37.6582430648576
},
{
setSeqNo : 1,
plygnSeqNo : 6748,
plygnLo : 127.091891596056,
plygnLa : 37.6574349882234
},
{
setSeqNo : 1,
plygnSeqNo : 6749,
plygnLo : 127.092351921511,
plygnLa : 37.6554919004837
},
{
setSeqNo : 1,
plygnSeqNo : 6750,
plygnLo : 127.092810568453,
plygnLa : 37.6545686600837
},
{
setSeqNo : 1,
plygnSeqNo : 6751,
plygnLo : 127.092867689999,
plygnLa : 37.6544536952426
},
{
setSeqNo : 1,
plygnSeqNo : 6752,
plygnLo : 127.093066597467,
plygnLa : 37.6537825953931
},
{
setSeqNo : 1,
plygnSeqNo : 6753,
plygnLo : 127.093568706515,
plygnLa : 37.6533187689386
},
{
setSeqNo : 1,
plygnSeqNo : 6754,
plygnLo : 127.093916012521,
plygnLa : 37.6529617664578
},
{
setSeqNo : 1,
plygnSeqNo : 6755,
plygnLo : 127.094008158154,
plygnLa : 37.6527285671295
},
{
setSeqNo : 1,
plygnSeqNo : 6756,
plygnLo : 127.094041037286,
plygnLa : 37.6525401833439
},
{
setSeqNo : 1,
plygnSeqNo : 6757,
plygnLo : 127.09403557103,
plygnLa : 37.652418556033
},
{
setSeqNo : 1,
plygnSeqNo : 6758,
plygnLo : 127.094000187491,
plygnLa : 37.6522952578798
},
{
setSeqNo : 1,
plygnSeqNo : 6759,
plygnLo : 127.093928527475,
plygnLa : 37.6521973329514
},
{
setSeqNo : 1,
plygnSeqNo : 6760,
plygnLo : 127.093724889949,
plygnLa : 37.6519007390218
},
{
setSeqNo : 1,
plygnSeqNo : 6761,
plygnLo : 127.093601485911,
plygnLa : 37.6516178741107
},
{
setSeqNo : 1,
plygnSeqNo : 6762,
plygnLo : 127.093367116351,
plygnLa : 37.6512272599325
},
{
setSeqNo : 1,
plygnSeqNo : 6763,
plygnLo : 127.093345940564,
plygnLa : 37.6508601278189
},
{
setSeqNo : 1,
plygnSeqNo : 6764,
plygnLo : 127.093266149046,
plygnLa : 37.6506177639959
},
{
setSeqNo : 1,
plygnSeqNo : 6765,
plygnLo : 127.092466161283,
plygnLa : 37.6497098038411
},
{
setSeqNo : 1,
plygnSeqNo : 6766,
plygnLo : 127.092715893652,
plygnLa : 37.6493464105689
},
{
setSeqNo : 1,
plygnSeqNo : 6767,
plygnLo : 127.092637703443,
plygnLa : 37.6489722872243
},
{
setSeqNo : 1,
plygnSeqNo : 6768,
plygnLo : 127.092694775015,
plygnLa : 37.6485800308887
},
{
setSeqNo : 1,
plygnSeqNo : 6769,
plygnLo : 127.092917235515,
plygnLa : 37.6483610920809
},
{
setSeqNo : 1,
plygnSeqNo : 6770,
plygnLo : 127.093069034448,
plygnLa : 37.6478375704999
},
{
setSeqNo : 1,
plygnSeqNo : 6771,
plygnLo : 127.0936734307,
plygnLa : 37.6475065503016
},
{
setSeqNo : 1,
plygnSeqNo : 6772,
plygnLo : 127.093834319999,
plygnLa : 37.6473220032083
},
{
setSeqNo : 1,
plygnSeqNo : 6773,
plygnLo : 127.093632683847,
plygnLa : 37.6466258776445
},
{
setSeqNo : 1,
plygnSeqNo : 6774,
plygnLo : 127.094049707689,
plygnLa : 37.6461114362973
},
{
setSeqNo : 1,
plygnSeqNo : 6775,
plygnLo : 127.094369755569,
plygnLa : 37.6459338015774
},
{
setSeqNo : 1,
plygnSeqNo : 6776,
plygnLo : 127.094369393175,
plygnLa : 37.6459242335118
},
{
setSeqNo : 1,
plygnSeqNo : 6777,
plygnLo : 127.094474813859,
plygnLa : 37.6458498102518
},
{
setSeqNo : 1,
plygnSeqNo : 6778,
plygnLo : 127.094538123277,
plygnLa : 37.6455057054046
},
{
setSeqNo : 1,
plygnSeqNo : 6779,
plygnLo : 127.09438163886,
plygnLa : 37.644955953303
},
{
setSeqNo : 1,
plygnSeqNo : 6780,
plygnLo : 127.094529449285,
plygnLa : 37.6446565423834
},
{
setSeqNo : 1,
plygnSeqNo : 6781,
plygnLo : 127.094570247073,
plygnLa : 37.644570637313
},
{
setSeqNo : 1,
plygnSeqNo : 6782,
plygnLo : 127.097559185243,
plygnLa : 37.6439648673359
},
{
setSeqNo : 1,
plygnSeqNo : 6783,
plygnLo : 127.098908338887,
plygnLa : 37.6440344343238
},
{
setSeqNo : 1,
plygnSeqNo : 6784,
plygnLo : 127.099772867053,
plygnLa : 37.6444642135596
},
{
setSeqNo : 1,
plygnSeqNo : 6785,
plygnLo : 127.101592918,
plygnLa : 37.6447723946155
},
{
setSeqNo : 1,
plygnSeqNo : 6786,
plygnLo : 127.102800412252,
plygnLa : 37.6452049575894
},
{
setSeqNo : 1,
plygnSeqNo : 6787,
plygnLo : 127.102882657431,
plygnLa : 37.6454090127514
},
{
setSeqNo : 1,
plygnSeqNo : 6788,
plygnLo : 127.103920963954,
plygnLa : 37.6454928717397
},
{
setSeqNo : 1,
plygnSeqNo : 6789,
plygnLo : 127.105312421354,
plygnLa : 37.6454043672591
},
{
setSeqNo : 1,
plygnSeqNo : 6790,
plygnLo : 127.106576659385,
plygnLa : 37.6453773463149
},
{
setSeqNo : 1,
plygnSeqNo : 6791,
plygnLo : 127.107692516457,
plygnLa : 37.6449666822861
},
{
setSeqNo : 1,
plygnSeqNo : 6792,
plygnLo : 127.107862970874,
plygnLa : 37.6446928582393
},
{
setSeqNo : 1,
plygnSeqNo : 6793,
plygnLo : 127.108006404865,
plygnLa : 37.6444601689768
},
{
setSeqNo : 1,
plygnSeqNo : 6794,
plygnLo : 127.108428650613,
plygnLa : 37.6439662224962
},
{
setSeqNo : 1,
plygnSeqNo : 6795,
plygnLo : 127.108670230836,
plygnLa : 37.6436655815449
},
{
setSeqNo : 1,
plygnSeqNo : 6796,
plygnLo : 127.108712111259,
plygnLa : 37.6436128916532
},
{
setSeqNo : 1,
plygnSeqNo : 6797,
plygnLo : 127.108840767258,
plygnLa : 37.6434525713807
},
{
setSeqNo : 1,
plygnSeqNo : 6798,
plygnLo : 127.109046631767,
plygnLa : 37.6431778655427
},
{
setSeqNo : 1,
plygnSeqNo : 6799,
plygnLo : 127.109288894295,
plygnLa : 37.6428589236784
},
{
setSeqNo : 1,
plygnSeqNo : 6800,
plygnLo : 127.109898603651,
plygnLa : 37.6424875593499
},
{
setSeqNo : 1,
plygnSeqNo : 6801,
plygnLo : 127.110305431506,
plygnLa : 37.6426023392846
},
{
setSeqNo : 1,
plygnSeqNo : 6802,
plygnLo : 127.110751573781,
plygnLa : 37.6427303170686
},
{
setSeqNo : 1,
plygnSeqNo : 6803,
plygnLo : 127.11115497716,
plygnLa : 37.6425635401624
},
{
setSeqNo : 1,
plygnSeqNo : 6804,
plygnLo : 127.111257558399,
plygnLa : 37.6423753665531
},
{
setSeqNo : 1,
plygnSeqNo : 6805,
plygnLo : 127.111290225252,
plygnLa : 37.6423153676463
},
{
setSeqNo : 1,
plygnSeqNo : 6806,
plygnLo : 127.111424075393,
plygnLa : 37.6420868989102
},
{
setSeqNo : 1,
plygnSeqNo : 6807,
plygnLo : 127.111429869,
plygnLa : 37.6419286647829
},
{
setSeqNo : 1,
plygnSeqNo : 6808,
plygnLo : 127.111345673274,
plygnLa : 37.6414974008641
},
{
setSeqNo : 1,
plygnSeqNo : 6809,
plygnLo : 127.111615282092,
plygnLa : 37.6412474077689
},
{
setSeqNo : 1,
plygnSeqNo : 6810,
plygnLo : 127.111712694843,
plygnLa : 37.6407985114283
},
{
setSeqNo : 1,
plygnSeqNo : 6811,
plygnLo : 127.111760608511,
plygnLa : 37.6407593383684
},
{
setSeqNo : 1,
plygnSeqNo : 6812,
plygnLo : 127.112223522938,
plygnLa : 37.6403757112995
},
{
setSeqNo : 1,
plygnSeqNo : 6813,
plygnLo : 127.111991594842,
plygnLa : 37.6400087794288
},
{
setSeqNo : 1,
plygnSeqNo : 6814,
plygnLo : 127.111701979679,
plygnLa : 37.6398967077312
},
{
setSeqNo : 1,
plygnSeqNo : 6815,
plygnLo : 127.111135717245,
plygnLa : 37.6399439691135
},
{
setSeqNo : 1,
plygnSeqNo : 6816,
plygnLo : 127.11056660057,
plygnLa : 37.6393636461123
},
{
setSeqNo : 1,
plygnSeqNo : 6817,
plygnLo : 127.110761178476,
plygnLa : 37.6387738923359
},
{
setSeqNo : 1,
plygnSeqNo : 6818,
plygnLo : 127.110849695345,
plygnLa : 37.6384089143797
},
{
setSeqNo : 1,
plygnSeqNo : 6819,
plygnLo : 127.110849752155,
plygnLa : 37.6384088986132
},
{
setSeqNo : 1,
plygnSeqNo : 6820,
plygnLo : 127.110849645444,
plygnLa : 37.6384085340722
},
{
setSeqNo : 1,
plygnSeqNo : 6821,
plygnLo : 127.110903576197,
plygnLa : 37.6382621286407
},
{
setSeqNo : 1,
plygnSeqNo : 6822,
plygnLo : 127.111042662234,
plygnLa : 37.6382091488523
},
{
setSeqNo : 1,
plygnSeqNo : 6823,
plygnLo : 127.111558414145,
plygnLa : 37.6380325918345
},
{
setSeqNo : 1,
plygnSeqNo : 6824,
plygnLo : 127.11159874445,
plygnLa : 37.637990289442
},
{
setSeqNo : 1,
plygnSeqNo : 6825,
plygnLo : 127.111599409722,
plygnLa : 37.6379896694301
},
{
setSeqNo : 1,
plygnSeqNo : 6826,
plygnLo : 127.11168727188,
plygnLa : 37.6378461518527
},
{
setSeqNo : 1,
plygnSeqNo : 6827,
plygnLo : 127.111904654972,
plygnLa : 37.6374869636605
},
{
setSeqNo : 1,
plygnSeqNo : 6828,
plygnLo : 127.11195092438,
plygnLa : 37.6374083641013
},
{
setSeqNo : 1,
plygnSeqNo : 6829,
plygnLo : 127.111978115681,
plygnLa : 37.6373630113229
},
{
setSeqNo : 1,
plygnSeqNo : 6830,
plygnLo : 127.111951197556,
plygnLa : 37.637355439862
},
{
setSeqNo : 1,
plygnSeqNo : 6831,
plygnLo : 127.11208222216,
plygnLa : 37.6371328847179
},
{
setSeqNo : 1,
plygnSeqNo : 6832,
plygnLo : 127.112198899458,
plygnLa : 37.6371431899613
},
{
setSeqNo : 1,
plygnSeqNo : 6833,
plygnLo : 127.112229453535,
plygnLa : 37.637096987215
},
{
setSeqNo : 1,
plygnSeqNo : 6834,
plygnLo : 127.112314093915,
plygnLa : 37.6368725106598
},
{
setSeqNo : 1,
plygnSeqNo : 6835,
plygnLo : 127.112483467575,
plygnLa : 37.6364891551402
},
{
setSeqNo : 1,
plygnSeqNo : 6836,
plygnLo : 127.112213723559,
plygnLa : 37.6362841480245
},
{
setSeqNo : 1,
plygnSeqNo : 6837,
plygnLo : 127.112251957487,
plygnLa : 37.6355644577392
},
{
setSeqNo : 1,
plygnSeqNo : 6838,
plygnLo : 127.112548888952,
plygnLa : 37.6352513772778
},
{
setSeqNo : 1,
plygnSeqNo : 6839,
plygnLo : 127.112347240408,
plygnLa : 37.6347565872148
},
{
setSeqNo : 1,
plygnSeqNo : 6840,
plygnLo : 127.11240755316,
plygnLa : 37.634251143854
},
{
setSeqNo : 1,
plygnSeqNo : 6841,
plygnLo : 127.111602598647,
plygnLa : 37.6338487105231
},
{
setSeqNo : 1,
plygnSeqNo : 6842,
plygnLo : 127.112203723251,
plygnLa : 37.6326428028987
},
{
setSeqNo : 1,
plygnSeqNo : 6843,
plygnLo : 127.111632594605,
plygnLa : 37.6315033200556
},
{
setSeqNo : 1,
plygnSeqNo : 6844,
plygnLo : 127.111371444089,
plygnLa : 37.6312279185868
},
{
setSeqNo : 1,
plygnSeqNo : 6845,
plygnLo : 127.11082576731,
plygnLa : 37.6307818831846
},
{
setSeqNo : 1,
plygnSeqNo : 6846,
plygnLo : 127.110153572817,
plygnLa : 37.630355096266
},
{
setSeqNo : 1,
plygnSeqNo : 6847,
plygnLo : 127.108885032392,
plygnLa : 37.6293015549532
},
{
setSeqNo : 1,
plygnSeqNo : 6848,
plygnLo : 127.107025569498,
plygnLa : 37.628048051176
},
{
setSeqNo : 1,
plygnSeqNo : 6849,
plygnLo : 127.105906625094,
plygnLa : 37.6275948994168
},
{
setSeqNo : 1,
plygnSeqNo : 6850,
plygnLo : 127.105963790293,
plygnLa : 37.6273307453682
},
{
setSeqNo : 1,
plygnSeqNo : 6851,
plygnLo : 127.105402583768,
plygnLa : 37.6257277855875
},
{
setSeqNo : 1,
plygnSeqNo : 6852,
plygnLo : 127.105015028072,
plygnLa : 37.62526552818
},
{
setSeqNo : 1,
plygnSeqNo : 6853,
plygnLo : 127.104914653604,
plygnLa : 37.6239819998656
},
{
setSeqNo : 1,
plygnSeqNo : 6854,
plygnLo : 127.104328181815,
plygnLa : 37.6232707382681
},
{
setSeqNo : 1,
plygnSeqNo : 6855,
plygnLo : 127.10406649345,
plygnLa : 37.6216531496315
},
{
setSeqNo : 1,
plygnSeqNo : 6856,
plygnLo : 127.104909371659,
plygnLa : 37.6215673798297
},
{
setSeqNo : 1,
plygnSeqNo : 6857,
plygnLo : 127.104938534429,
plygnLa : 37.621416718794
},
{
setSeqNo : 1,
plygnSeqNo : 6858,
plygnLo : 127.105383127601,
plygnLa : 37.6209019319826
},
{
setSeqNo : 1,
plygnSeqNo : 6859,
plygnLo : 127.105662263655,
plygnLa : 37.6204162825622
},
{
setSeqNo : 1,
plygnSeqNo : 6860,
plygnLo : 127.105556190499,
plygnLa : 37.620370759674
},
{
setSeqNo : 1,
plygnSeqNo : 6861,
plygnLo : 127.105557035401,
plygnLa : 37.6203434504485
},
{
setSeqNo : 1,
plygnSeqNo : 6862,
plygnLo : 127.105561802779,
plygnLa : 37.6202128041412
},
{
setSeqNo : 1,
plygnSeqNo : 6863,
plygnLo : 127.105564557544,
plygnLa : 37.6201567709977
},
{
setSeqNo : 1,
plygnSeqNo : 6864,
plygnLo : 127.105758674217,
plygnLa : 37.6202585269919
},
{
setSeqNo : 1,
plygnSeqNo : 6865,
plygnLo : 127.106040913536,
plygnLa : 37.6203413298498
},
{
setSeqNo : 1,
plygnSeqNo : 6866,
plygnLo : 127.106436069973,
plygnLa : 37.6205589074611
},
{
setSeqNo : 1,
plygnSeqNo : 6867,
plygnLo : 127.106654429515,
plygnLa : 37.62053168479
},
{
setSeqNo : 1,
plygnSeqNo : 6868,
plygnLo : 127.107085478851,
plygnLa : 37.6204654101363
},
{
setSeqNo : 1,
plygnSeqNo : 6869,
plygnLo : 127.107243579135,
plygnLa : 37.6205027224096
},
{
setSeqNo : 1,
plygnSeqNo : 6870,
plygnLo : 127.107243050758,
plygnLa : 37.6205066612749
},
{
setSeqNo : 1,
plygnSeqNo : 6871,
plygnLo : 127.107430473687,
plygnLa : 37.620501986591
},
{
setSeqNo : 1,
plygnSeqNo : 6872,
plygnLo : 127.107534882229,
plygnLa : 37.6204987937706
},
{
setSeqNo : 1,
plygnSeqNo : 6873,
plygnLo : 127.107921399753,
plygnLa : 37.6204838144585
},
{
setSeqNo : 1,
plygnSeqNo : 6874,
plygnLo : 127.108946196351,
plygnLa : 37.6205169526837
},
{
setSeqNo : 1,
plygnSeqNo : 6875,
plygnLo : 127.109037694888,
plygnLa : 37.6205157430002
},
{
setSeqNo : 1,
plygnSeqNo : 6876,
plygnLo : 127.109128139987,
plygnLa : 37.6205148136265
},
{
setSeqNo : 1,
plygnSeqNo : 6877,
plygnLo : 127.109967307957,
plygnLa : 37.620693115645
},
{
setSeqNo : 1,
plygnSeqNo : 6878,
plygnLo : 127.110018477189,
plygnLa : 37.6207040503776
},
{
setSeqNo : 1,
plygnSeqNo : 6879,
plygnLo : 127.110175263156,
plygnLa : 37.620811457112
},
{
setSeqNo : 1,
plygnSeqNo : 6880,
plygnLo : 127.110461761638,
plygnLa : 37.6210215165292
},
{
setSeqNo : 1,
plygnSeqNo : 6881,
plygnLo : 127.110519330332,
plygnLa : 37.6210546921624
},
{
setSeqNo : 1,
plygnSeqNo : 6882,
plygnLo : 127.110915329404,
plygnLa : 37.6208699035128
},
{
setSeqNo : 1,
plygnSeqNo : 6883,
plygnLo : 127.1109418674,
plygnLa : 37.6208608697592
},
{
setSeqNo : 1,
plygnSeqNo : 6884,
plygnLo : 127.111305321149,
plygnLa : 37.6206918774632
},
{
setSeqNo : 1,
plygnSeqNo : 6885,
plygnLo : 127.112143138595,
plygnLa : 37.6203070535143
},
{
setSeqNo : 1,
plygnSeqNo : 6886,
plygnLo : 127.112917584984,
plygnLa : 37.620157941583
},
{
setSeqNo : 1,
plygnSeqNo : 6887,
plygnLo : 127.113398841707,
plygnLa : 37.6200631711948
},
{
setSeqNo : 1,
plygnSeqNo : 6888,
plygnLo : 127.113505516993,
plygnLa : 37.62003744694
},
{
setSeqNo : 1,
plygnSeqNo : 6889,
plygnLo : 127.113939275119,
plygnLa : 37.6198956884195
},
{
setSeqNo : 1,
plygnSeqNo : 6890,
plygnLo : 127.114416001275,
plygnLa : 37.619735877906
},
{
setSeqNo : 1,
plygnSeqNo : 6891,
plygnLo : 127.115021343699,
plygnLa : 37.6195376405698
},
{
setSeqNo : 1,
plygnSeqNo : 6892,
plygnLo : 127.115544616413,
plygnLa : 37.6196142861314
},
{
setSeqNo : 1,
plygnSeqNo : 6893,
plygnLo : 127.1157152659,
plygnLa : 37.6196343938333
},
{
setSeqNo : 1,
plygnSeqNo : 6894,
plygnLo : 127.116061736749,
plygnLa : 37.6191340141598
},
{
setSeqNo : 1,
plygnSeqNo : 6895,
plygnLo : 127.116079231525,
plygnLa : 37.6191148509703
},
{
setSeqNo : 1,
plygnSeqNo : 6896,
plygnLo : 127.116203365397,
plygnLa : 37.6189331294153
},
{
setSeqNo : 1,
plygnSeqNo : 6897,
plygnLo : 127.115873286728,
plygnLa : 37.6185831925189
},
{
setSeqNo : 1,
plygnSeqNo : 6898,
plygnLo : 127.116510066512,
plygnLa : 37.6182359678137
},
{
setSeqNo : 1,
plygnSeqNo : 6899,
plygnLo : 127.11714702086,
plygnLa : 37.6178884772396
},
{
setSeqNo : 1,
plygnSeqNo : 6900,
plygnLo : 127.117135610876,
plygnLa : 37.6178361222501
},
{
setSeqNo : 1,
plygnSeqNo : 6901,
plygnLo : 127.117090410021,
plygnLa : 37.6176762434846
},
{
setSeqNo : 1,
plygnSeqNo : 6902,
plygnLo : 127.117023672258,
plygnLa : 37.6174423245602
},
{
setSeqNo : 1,
plygnSeqNo : 6903,
plygnLo : 127.117016009218,
plygnLa : 37.6174009497859
},
{
setSeqNo : 1,
plygnSeqNo : 6904,
plygnLo : 127.117009934282,
plygnLa : 37.6173685732453
},
{
setSeqNo : 1,
plygnSeqNo : 6905,
plygnLo : 127.117018407554,
plygnLa : 37.6173474463495
},
{
setSeqNo : 1,
plygnSeqNo : 6906,
plygnLo : 127.11712241101,
plygnLa : 37.6170863491054
},
{
setSeqNo : 1,
plygnSeqNo : 6907,
plygnLo : 127.117255303985,
plygnLa : 37.6167342687164
},
{
setSeqNo : 1,
plygnSeqNo : 6908,
plygnLo : 127.116993842155,
plygnLa : 37.6164557791448
},
{
setSeqNo : 1,
plygnSeqNo : 6909,
plygnLo : 127.116905212042,
plygnLa : 37.6163671835332
},
{
setSeqNo : 1,
plygnSeqNo : 6910,
plygnLo : 127.11687860803,
plygnLa : 37.6163249715585
},
{
setSeqNo : 1,
plygnSeqNo : 6911,
plygnLo : 127.116671943748,
plygnLa : 37.6160154603622
},
{
setSeqNo : 1,
plygnSeqNo : 6912,
plygnLo : 127.116703518033,
plygnLa : 37.6157189523944
},
{
setSeqNo : 1,
plygnSeqNo : 6913,
plygnLo : 127.11671371896,
plygnLa : 37.6156719213434
},
{
setSeqNo : 1,
plygnSeqNo : 6914,
plygnLo : 127.116736250756,
plygnLa : 37.6154840981232
},
{
setSeqNo : 1,
plygnSeqNo : 6915,
plygnLo : 127.116791113909,
plygnLa : 37.6150284919567
},
{
setSeqNo : 1,
plygnSeqNo : 6916,
plygnLo : 127.116796494022,
plygnLa : 37.6149547129977
},
{
setSeqNo : 1,
plygnSeqNo : 6917,
plygnLo : 127.116675719653,
plygnLa : 37.61467299516
},
{
setSeqNo : 1,
plygnSeqNo : 6918,
plygnLo : 127.117061045075,
plygnLa : 37.6141444199832
},
{
setSeqNo : 1,
plygnSeqNo : 6919,
plygnLo : 127.11707990878,
plygnLa : 37.6139791243955
},
{
setSeqNo : 1,
plygnSeqNo : 6920,
plygnLo : 127.117085892828,
plygnLa : 37.6139602620194
},
{
setSeqNo : 1,
plygnSeqNo : 6921,
plygnLo : 127.117104068188,
plygnLa : 37.6138115816198
},
{
setSeqNo : 1,
plygnSeqNo : 6922,
plygnLo : 127.117128008348,
plygnLa : 37.6136116488201
},
{
setSeqNo : 1,
plygnSeqNo : 6923,
plygnLo : 127.117152244891,
plygnLa : 37.6133768102399
},
{
setSeqNo : 1,
plygnSeqNo : 6924,
plygnLo : 127.117215888239,
plygnLa : 37.612881767572
},
{
setSeqNo : 1,
plygnSeqNo : 6925,
plygnLo : 127.117244171769,
plygnLa : 37.6126283402918
},
{
setSeqNo : 1,
plygnSeqNo : 6926,
plygnLo : 127.117373815029,
plygnLa : 37.612245294391
},
{
setSeqNo : 1,
plygnSeqNo : 6927,
plygnLo : 127.117416737973,
plygnLa : 37.6119589128906
},
{
setSeqNo : 1,
plygnSeqNo : 6928,
plygnLo : 127.117483335905,
plygnLa : 37.611771326329
},
{
setSeqNo : 1,
plygnSeqNo : 6929,
plygnLo : 127.1173745207,
plygnLa : 37.6114445481443
},
{
setSeqNo : 1,
plygnSeqNo : 6930,
plygnLo : 127.117287220936,
plygnLa : 37.6111805370854
},
{
setSeqNo : 1,
plygnSeqNo : 6931,
plygnLo : 127.117212467696,
plygnLa : 37.611017587211
},
{
setSeqNo : 1,
plygnSeqNo : 6932,
plygnLo : 127.117046010935,
plygnLa : 37.6108240403894
},
{
setSeqNo : 1,
plygnSeqNo : 6933,
plygnLo : 127.1170413915,
plygnLa : 37.6108172873205
},
{
setSeqNo : 1,
plygnSeqNo : 6934,
plygnLo : 127.116962300966,
plygnLa : 37.6107061472149
},
{
setSeqNo : 1,
plygnSeqNo : 6935,
plygnLo : 127.116880659307,
plygnLa : 37.6105547534962
},
{
setSeqNo : 1,
plygnSeqNo : 6936,
plygnLo : 127.116828079743,
plygnLa : 37.6104264151542
},
{
setSeqNo : 1,
plygnSeqNo : 6937,
plygnLo : 127.116808148028,
plygnLa : 37.6103543567479
},
{
setSeqNo : 1,
plygnSeqNo : 6938,
plygnLo : 127.116788218525,
plygnLa : 37.6102820095227
},
{
setSeqNo : 1,
plygnSeqNo : 6939,
plygnLo : 127.116764447757,
plygnLa : 37.6101297115984
},
{
setSeqNo : 1,
plygnSeqNo : 6940,
plygnLo : 127.116770371713,
plygnLa : 37.6098442118756
},
{
setSeqNo : 1,
plygnSeqNo : 6941,
plygnLo : 127.116784408572,
plygnLa : 37.6097583265883
},
{
setSeqNo : 1,
plygnSeqNo : 6942,
plygnLo : 127.116877843414,
plygnLa : 37.6095307378462
},
{
setSeqNo : 1,
plygnSeqNo : 6943,
plygnLo : 127.116878511989,
plygnLa : 37.6095090591113
},
{
setSeqNo : 1,
plygnSeqNo : 6944,
plygnLo : 127.116711584,
plygnLa : 37.6088985189096
},
{
setSeqNo : 1,
plygnSeqNo : 6945,
plygnLo : 127.116698055461,
plygnLa : 37.6088492580446
},
{
setSeqNo : 1,
plygnSeqNo : 6946,
plygnLo : 127.116798232905,
plygnLa : 37.6088601416078
},
{
setSeqNo : 1,
plygnSeqNo : 6947,
plygnLo : 127.117262598659,
plygnLa : 37.6086524627085
},
{
setSeqNo : 1,
plygnSeqNo : 6948,
plygnLo : 127.117538215769,
plygnLa : 37.6084790326167
},
{
setSeqNo : 1,
plygnSeqNo : 6949,
plygnLo : 127.118032867392,
plygnLa : 37.6081736255969
},
{
setSeqNo : 1,
plygnSeqNo : 6950,
plygnLo : 127.118285938467,
plygnLa : 37.6078526696539
},
{
setSeqNo : 1,
plygnSeqNo : 6951,
plygnLo : 127.118477208156,
plygnLa : 37.6076128836354
},
{
setSeqNo : 1,
plygnSeqNo : 6952,
plygnLo : 127.118369388157,
plygnLa : 37.6073494538285
},
{
setSeqNo : 1,
plygnSeqNo : 6953,
plygnLo : 127.118330303988,
plygnLa : 37.6072548880989
},
{
setSeqNo : 1,
plygnSeqNo : 6954,
plygnLo : 127.118164925305,
plygnLa : 37.6068496093424
},
{
setSeqNo : 1,
plygnSeqNo : 6955,
plygnLo : 127.118061181433,
plygnLa : 37.6065915270958
},
{
setSeqNo : 1,
plygnSeqNo : 6956,
plygnLo : 127.118032353032,
plygnLa : 37.606253677998
},
{
setSeqNo : 1,
plygnSeqNo : 6957,
plygnLo : 127.117998144756,
plygnLa : 37.60588600391
},
{
setSeqNo : 1,
plygnSeqNo : 6958,
plygnLo : 127.118083748157,
plygnLa : 37.605630544034
},
{
setSeqNo : 1,
plygnSeqNo : 6959,
plygnLo : 127.118093907902,
plygnLa : 37.6055669078437
},
{
setSeqNo : 1,
plygnSeqNo : 6960,
plygnLo : 127.118095846638,
plygnLa : 37.6054438681524
},
{
setSeqNo : 1,
plygnSeqNo : 6961,
plygnLo : 127.118070641637,
plygnLa : 37.6049384956721
},
{
setSeqNo : 1,
plygnSeqNo : 6962,
plygnLo : 127.11804728651,
plygnLa : 37.6046023355154
},
{
setSeqNo : 1,
plygnSeqNo : 6963,
plygnLo : 127.117554971476,
plygnLa : 37.604116857139
},
{
setSeqNo : 1,
plygnSeqNo : 6964,
plygnLo : 127.117377396807,
plygnLa : 37.6039371138264
},
{
setSeqNo : 1,
plygnSeqNo : 6965,
plygnLo : 127.117016107479,
plygnLa : 37.6033949057272
},
{
setSeqNo : 1,
plygnSeqNo : 6966,
plygnLo : 127.116944718624,
plygnLa : 37.6032266091639
},
{
setSeqNo : 1,
plygnSeqNo : 6967,
plygnLo : 127.116872087353,
plygnLa : 37.6030526822611
},
{
setSeqNo : 1,
plygnSeqNo : 6968,
plygnLo : 127.116739388498,
plygnLa : 37.6029514502127
},
{
setSeqNo : 1,
plygnSeqNo : 6969,
plygnLo : 127.116575003337,
plygnLa : 37.6028254744044
},
{
setSeqNo : 1,
plygnSeqNo : 6970,
plygnLo : 127.116447803825,
plygnLa : 37.6027276074808
},
{
setSeqNo : 1,
plygnSeqNo : 6971,
plygnLo : 127.11636879143,
plygnLa : 37.602667434616
},
{
setSeqNo : 1,
plygnSeqNo : 6972,
plygnLo : 127.116377997627,
plygnLa : 37.6026674265815
},
{
setSeqNo : 1,
plygnSeqNo : 6973,
plygnLo : 127.115722979742,
plygnLa : 37.6021086067939
},
{
setSeqNo : 1,
plygnSeqNo : 6974,
plygnLo : 127.115706837048,
plygnLa : 37.6019647531534
},
{
setSeqNo : 1,
plygnSeqNo : 6975,
plygnLo : 127.115632860272,
plygnLa : 37.6018409309354
},
{
setSeqNo : 1,
plygnSeqNo : 6976,
plygnLo : 127.115584725282,
plygnLa : 37.6017182271024
},
{
setSeqNo : 1,
plygnSeqNo : 6977,
plygnLo : 127.115384125122,
plygnLa : 37.6014041935533
},
{
setSeqNo : 1,
plygnSeqNo : 6978,
plygnLo : 127.115294028448,
plygnLa : 37.6012702593085
},
{
setSeqNo : 1,
plygnSeqNo : 6979,
plygnLo : 127.115102666451,
plygnLa : 37.6009759404103
},
{
setSeqNo : 1,
plygnSeqNo : 6980,
plygnLo : 127.114964512543,
plygnLa : 37.6007663146819
},
{
setSeqNo : 1,
plygnSeqNo : 6981,
plygnLo : 127.114756730617,
plygnLa : 37.6006130674239
},
{
setSeqNo : 1,
plygnSeqNo : 6982,
plygnLo : 127.114100268481,
plygnLa : 37.6001285711852
},
{
setSeqNo : 1,
plygnSeqNo : 6983,
plygnLo : 127.114082207134,
plygnLa : 37.6001209840402
},
{
setSeqNo : 1,
plygnSeqNo : 6984,
plygnLo : 127.114022524373,
plygnLa : 37.5999664674622
},
{
setSeqNo : 1,
plygnSeqNo : 6985,
plygnLo : 127.114040483752,
plygnLa : 37.5997930121172
},
{
setSeqNo : 1,
plygnSeqNo : 6986,
plygnLo : 127.114064135831,
plygnLa : 37.5995209999958
},
{
setSeqNo : 1,
plygnSeqNo : 6987,
plygnLo : 127.114458713287,
plygnLa : 37.5990599959328
},
{
setSeqNo : 1,
plygnSeqNo : 6988,
plygnLo : 127.114470923241,
plygnLa : 37.5990546406135
},
{
setSeqNo : 1,
plygnSeqNo : 6989,
plygnLo : 127.115179123018,
plygnLa : 37.5980775111999
},
{
setSeqNo : 1,
plygnSeqNo : 6990,
plygnLo : 127.115489517975,
plygnLa : 37.5976543184096
},
{
setSeqNo : 1,
plygnSeqNo : 6991,
plygnLo : 127.115726975364,
plygnLa : 37.5973145253864
},
{
setSeqNo : 1,
plygnSeqNo : 6992,
plygnLo : 127.116126747629,
plygnLa : 37.5966817649479
},
{
setSeqNo : 1,
plygnSeqNo : 6993,
plygnLo : 127.116443413673,
plygnLa : 37.5961923950687
},
{
setSeqNo : 1,
plygnSeqNo : 6994,
plygnLo : 127.11687775811,
plygnLa : 37.5954970879147
},
{
setSeqNo : 1,
plygnSeqNo : 6995,
plygnLo : 127.116751538571,
plygnLa : 37.5946454911947
},
{
setSeqNo : 1,
plygnSeqNo : 6996,
plygnLo : 127.116664762969,
plygnLa : 37.5940165831096
},
{
setSeqNo : 1,
plygnSeqNo : 6997,
plygnLo : 127.115690369044,
plygnLa : 37.5936253213757
},
{
setSeqNo : 1,
plygnSeqNo : 6998,
plygnLo : 127.11552714991,
plygnLa : 37.5935601578788
},
{
setSeqNo : 1,
plygnSeqNo : 6999,
plygnLo : 127.115485736703,
plygnLa : 37.5935486477548
},
{
setSeqNo : 1,
plygnSeqNo : 7000,
plygnLo : 127.115413525847,
plygnLa : 37.593530986295
},
{
setSeqNo : 1,
plygnSeqNo : 7001,
plygnLo : 127.115182085475,
plygnLa : 37.5935103697406
},
{
setSeqNo : 1,
plygnSeqNo : 7002,
plygnLo : 127.115028480953,
plygnLa : 37.5934902448418
},
{
setSeqNo : 1,
plygnSeqNo : 7003,
plygnLo : 127.114454284571,
plygnLa : 37.5934330783862
},
{
setSeqNo : 1,
plygnSeqNo : 7004,
plygnLo : 127.114268664484,
plygnLa : 37.5934160832805
},
{
setSeqNo : 1,
plygnSeqNo : 7005,
plygnLo : 127.113665624847,
plygnLa : 37.5933563997648
},
{
setSeqNo : 1,
plygnSeqNo : 7006,
plygnLo : 127.113337647873,
plygnLa : 37.5932598547234
},
{
setSeqNo : 1,
plygnSeqNo : 7007,
plygnLo : 127.113094835146,
plygnLa : 37.5928568944883
},
{
setSeqNo : 1,
plygnSeqNo : 7008,
plygnLo : 127.112685361338,
plygnLa : 37.592199004478
},
{
setSeqNo : 1,
plygnSeqNo : 7009,
plygnLo : 127.112413981216,
plygnLa : 37.5918594163443
},
{
setSeqNo : 1,
plygnSeqNo : 7010,
plygnLo : 127.112140739599,
plygnLa : 37.5914454999104
},
{
setSeqNo : 1,
plygnSeqNo : 7011,
plygnLo : 127.111860756271,
plygnLa : 37.5910186406429
},
{
setSeqNo : 1,
plygnSeqNo : 7012,
plygnLo : 127.110854964696,
plygnLa : 37.5894299073976
},
{
setSeqNo : 1,
plygnSeqNo : 7013,
plygnLo : 127.11067553457,
plygnLa : 37.5891558306328
},
{
setSeqNo : 1,
plygnSeqNo : 7014,
plygnLo : 127.110523794578,
plygnLa : 37.588457708151
},
{
setSeqNo : 1,
plygnSeqNo : 7015,
plygnLo : 127.11043087576,
plygnLa : 37.588071497141
},
{
setSeqNo : 1,
plygnSeqNo : 7016,
plygnLo : 127.110298081046,
plygnLa : 37.5877455800148
},
{
setSeqNo : 1,
plygnSeqNo : 7017,
plygnLo : 127.110154679411,
plygnLa : 37.587430079785
},
{
setSeqNo : 1,
plygnSeqNo : 7018,
plygnLo : 127.11002314391,
plygnLa : 37.5866370543296
},
{
setSeqNo : 1,
plygnSeqNo : 7019,
plygnLo : 127.109987213688,
plygnLa : 37.5860162548182
},
{
setSeqNo : 1,
plygnSeqNo : 7020,
plygnLo : 127.109944500304,
plygnLa : 37.5859574501329
},
{
setSeqNo : 1,
plygnSeqNo : 7021,
plygnLo : 127.109733130814,
plygnLa : 37.5852441725913
},
{
setSeqNo : 1,
plygnSeqNo : 7022,
plygnLo : 127.109380287018,
plygnLa : 37.5845605928489
},
{
setSeqNo : 1,
plygnSeqNo : 7023,
plygnLo : 127.10937676916,
plygnLa : 37.584092363087
},
{
setSeqNo : 1,
plygnSeqNo : 7024,
plygnLo : 127.109231042872,
plygnLa : 37.5838669711103
},
{
setSeqNo : 1,
plygnSeqNo : 7025,
plygnLo : 127.109061894309,
plygnLa : 37.5836052702942
},
{
setSeqNo : 1,
plygnSeqNo : 7026,
plygnLo : 127.108966934232,
plygnLa : 37.5833792638005
},
{
setSeqNo : 1,
plygnSeqNo : 7027,
plygnLo : 127.108513747662,
plygnLa : 37.5832681881829
},
{
setSeqNo : 1,
plygnSeqNo : 7028,
plygnLo : 127.108437985669,
plygnLa : 37.5832375598406
},
{
setSeqNo : 1,
plygnSeqNo : 7029,
plygnLo : 127.108341676108,
plygnLa : 37.5831830295827
},
{
setSeqNo : 1,
plygnSeqNo : 7030,
plygnLo : 127.108341643943,
plygnLa : 37.5831610635075
},
{
setSeqNo : 1,
plygnSeqNo : 7031,
plygnLo : 127.107810545245,
plygnLa : 37.5828757681507
},
{
setSeqNo : 1,
plygnSeqNo : 7032,
plygnLo : 127.10763059107,
plygnLa : 37.5827157165893
},
{
setSeqNo : 1,
plygnSeqNo : 7033,
plygnLo : 127.107597649684,
plygnLa : 37.5826861850771
},
{
setSeqNo : 1,
plygnSeqNo : 7034,
plygnLo : 127.107413577325,
plygnLa : 37.5824948908225
},
{
setSeqNo : 1,
plygnSeqNo : 7035,
plygnLo : 127.107383112362,
plygnLa : 37.5824631053122
},
{
setSeqNo : 1,
plygnSeqNo : 7036,
plygnLo : 127.107373720022,
plygnLa : 37.5824507239901
},
{
setSeqNo : 1,
plygnSeqNo : 7037,
plygnLo : 127.107241565552,
plygnLa : 37.5823148476999
},
{
setSeqNo : 1,
plygnSeqNo : 7038,
plygnLo : 127.106914941829,
plygnLa : 37.5822630541174
},
{
setSeqNo : 1,
plygnSeqNo : 7039,
plygnLo : 127.106695390923,
plygnLa : 37.5821216240628
},
{
setSeqNo : 1,
plygnSeqNo : 7040,
plygnLo : 127.106472778865,
plygnLa : 37.5820632572144
},
{
setSeqNo : 1,
plygnSeqNo : 7041,
plygnLo : 127.106286961351,
plygnLa : 37.5820135899009
},
{
setSeqNo : 1,
plygnSeqNo : 7042,
plygnLo : 127.106223254142,
plygnLa : 37.5819959055153
},
{
setSeqNo : 1,
plygnSeqNo : 7043,
plygnLo : 127.106131597414,
plygnLa : 37.5819720565001
},
{
setSeqNo : 1,
plygnSeqNo : 7044,
plygnLo : 127.10605267236,
plygnLa : 37.5819510077541
},
{
setSeqNo : 1,
plygnSeqNo : 7045,
plygnLo : 127.105994810077,
plygnLa : 37.5819369753231
},
{
setSeqNo : 1,
plygnSeqNo : 7046,
plygnLo : 127.105872661917,
plygnLa : 37.5818771145192
},
{
setSeqNo : 1,
plygnSeqNo : 7047,
plygnLo : 127.105583961104,
plygnLa : 37.5817396897678
},
{
setSeqNo : 1,
plygnSeqNo : 7048,
plygnLo : 127.105485535538,
plygnLa : 37.5816924746628
},
{
setSeqNo : 1,
plygnSeqNo : 7049,
plygnLo : 127.10542127904,
plygnLa : 37.5816621221458
},
{
setSeqNo : 1,
plygnSeqNo : 7050,
plygnLo : 127.105255935979,
plygnLa : 37.5815656915678
},
{
setSeqNo : 1,
plygnSeqNo : 7051,
plygnLo : 127.104974267673,
plygnLa : 37.5814043286118
},
{
setSeqNo : 1,
plygnSeqNo : 7052,
plygnLo : 127.104341749791,
plygnLa : 37.5810549027005
},
{
setSeqNo : 1,
plygnSeqNo : 7053,
plygnLo : 127.104001711883,
plygnLa : 37.5808924626376
},
{
setSeqNo : 1,
plygnSeqNo : 7054,
plygnLo : 127.103440743192,
plygnLa : 37.5805953338047
},
{
setSeqNo : 1,
plygnSeqNo : 7055,
plygnLo : 127.103136505989,
plygnLa : 37.5802146594369
},
{
setSeqNo : 1,
plygnSeqNo : 7056,
plygnLo : 127.103098758326,
plygnLa : 37.5801628760603
},
{
setSeqNo : 1,
plygnSeqNo : 7057,
plygnLo : 127.102901539159,
plygnLa : 37.579915273792
},
{
setSeqNo : 1,
plygnSeqNo : 7058,
plygnLo : 127.102894621008,
plygnLa : 37.5799068300814
},
{
setSeqNo : 1,
plygnSeqNo : 7059,
plygnLo : 127.102908972097,
plygnLa : 37.5797863102959
},
{
setSeqNo : 1,
plygnSeqNo : 7060,
plygnLo : 127.102977271112,
plygnLa : 37.5792774726474
},
{
setSeqNo : 1,
plygnSeqNo : 7061,
plygnLo : 127.103025583919,
plygnLa : 37.578906910253
},
{
setSeqNo : 1,
plygnSeqNo : 7062,
plygnLo : 127.102808121957,
plygnLa : 37.5785968164463
},
{
setSeqNo : 1,
plygnSeqNo : 7063,
plygnLo : 127.102794475171,
plygnLa : 37.5785768340117
},
{
setSeqNo : 1,
plygnSeqNo : 7064,
plygnLo : 127.102777823821,
plygnLa : 37.5785526400475
},
{
setSeqNo : 1,
plygnSeqNo : 7065,
plygnLo : 127.102757799322,
plygnLa : 37.578528167912
},
{
setSeqNo : 1,
plygnSeqNo : 7066,
plygnLo : 127.102592513751,
plygnLa : 37.5783427519562
},
{
setSeqNo : 1,
plygnSeqNo : 7067,
plygnLo : 127.102318466771,
plygnLa : 37.5780431289768
},
{
setSeqNo : 1,
plygnSeqNo : 7068,
plygnLo : 127.102229684352,
plygnLa : 37.5779207334613
},
{
setSeqNo : 1,
plygnSeqNo : 7069,
plygnLo : 127.101957845503,
plygnLa : 37.5775523979988
},
{
setSeqNo : 1,
plygnSeqNo : 7070,
plygnLo : 127.101892701457,
plygnLa : 37.5773804285004
},
{
setSeqNo : 1,
plygnSeqNo : 7071,
plygnLo : 127.101733477314,
plygnLa : 37.5769669470494
},
{
setSeqNo : 1,
plygnSeqNo : 7072,
plygnLo : 127.101477537715,
plygnLa : 37.5765803075547
},
{
setSeqNo : 1,
plygnSeqNo : 7073,
plygnLo : 127.101143788723,
plygnLa : 37.5760709654552
},
{
setSeqNo : 1,
plygnSeqNo : 7074,
plygnLo : 127.101202386788,
plygnLa : 37.5755731189131
},
{
setSeqNo : 1,
plygnSeqNo : 7075,
plygnLo : 127.101248720827,
plygnLa : 37.5751662317462
},
{
setSeqNo : 1,
plygnSeqNo : 7076,
plygnLo : 127.101161963577,
plygnLa : 37.5749697724581
},
{
setSeqNo : 1,
plygnSeqNo : 7077,
plygnLo : 127.100902595104,
plygnLa : 37.5743916751053
},
{
setSeqNo : 1,
plygnSeqNo : 7078,
plygnLo : 127.100919156243,
plygnLa : 37.5742041387992
},
{
setSeqNo : 1,
plygnSeqNo : 7079,
plygnLo : 127.100949421178,
plygnLa : 37.5738248594831
},
{
setSeqNo : 1,
plygnSeqNo : 7080,
plygnLo : 127.100888142778,
plygnLa : 37.5737635278977
},
{
setSeqNo : 1,
plygnSeqNo : 7081,
plygnLo : 127.100889200749,
plygnLa : 37.5737593008963
},
{
setSeqNo : 1,
plygnSeqNo : 7082,
plygnLo : 127.100892897374,
plygnLa : 37.5737460704188
},
{
setSeqNo : 1,
plygnSeqNo : 7083,
plygnLo : 127.100927686672,
plygnLa : 37.5734416799119
},
{
setSeqNo : 1,
plygnSeqNo : 7084,
plygnLo : 127.100935891409,
plygnLa : 37.5733552322027
},
{
setSeqNo : 1,
plygnSeqNo : 7085,
plygnLo : 127.101219112718,
plygnLa : 37.5729878417535
},
{
setSeqNo : 1,
plygnSeqNo : 7086,
plygnLo : 127.101494723369,
plygnLa : 37.5726269325144
},
{
setSeqNo : 1,
plygnSeqNo : 7087,
plygnLo : 127.101641983763,
plygnLa : 37.5724333763232
},
{
setSeqNo : 1,
plygnSeqNo : 7088,
plygnLo : 127.101664919912,
plygnLa : 37.5724006950599
},
{
setSeqNo : 1,
plygnSeqNo : 7089,
plygnLo : 127.102238187054,
plygnLa : 37.5721552469294
},
{
setSeqNo : 1,
plygnSeqNo : 7090,
plygnLo : 127.102607746078,
plygnLa : 37.5722070175227
},
{
setSeqNo : 1,
plygnSeqNo : 7091,
plygnLo : 127.103129967861,
plygnLa : 37.5722794959355
},
{
setSeqNo : 1,
plygnSeqNo : 7092,
plygnLo : 127.103661165516,
plygnLa : 37.5719179485423
},
{
setSeqNo : 1,
plygnSeqNo : 7093,
plygnLo : 127.103676704016,
plygnLa : 37.5719073664942
},
{
setSeqNo : 1,
plygnSeqNo : 7094,
plygnLo : 127.103683933186,
plygnLa : 37.5718963868545
},
{
setSeqNo : 1,
plygnSeqNo : 7095,
plygnLo : 127.104040363652,
plygnLa : 37.5715294822618
},
{
setSeqNo : 1,
plygnSeqNo : 7096,
plygnLo : 127.104230475466,
plygnLa : 37.5713876922381
},
{
setSeqNo : 1,
plygnSeqNo : 7097,
plygnLo : 127.103853757033,
plygnLa : 37.5704937888411
},
{
setSeqNo : 1,
plygnSeqNo : 7098,
plygnLo : 127.103455735221,
plygnLa : 37.5700501169754
},
{
setSeqNo : 1,
plygnSeqNo : 7099,
plygnLo : 127.103340420101,
plygnLa : 37.5693981270617
},
{
setSeqNo : 1,
plygnSeqNo : 7100,
plygnLo : 127.103257154087,
plygnLa : 37.569039208907
},
{
setSeqNo : 1,
plygnSeqNo : 7101,
plygnLo : 127.103206271711,
plygnLa : 37.568821051798
},
{
setSeqNo : 1,
plygnSeqNo : 7102,
plygnLo : 127.10309571745,
plygnLa : 37.5684224508985
},
{
setSeqNo : 1,
plygnSeqNo : 7103,
plygnLo : 127.102979300069,
plygnLa : 37.5679974024912
},
{
setSeqNo : 1,
plygnSeqNo : 7104,
plygnLo : 127.102829805272,
plygnLa : 37.567442855596
},
{
setSeqNo : 1,
plygnSeqNo : 7105,
plygnLo : 127.102724952939,
plygnLa : 37.5670642507134
},
{
setSeqNo : 1,
plygnSeqNo : 7106,
plygnLo : 127.102634245047,
plygnLa : 37.5666890123248
},
{
setSeqNo : 1,
plygnSeqNo : 7107,
plygnLo : 127.102530729161,
plygnLa : 37.5662577533345
},
{
setSeqNo : 1,
plygnSeqNo : 7108,
plygnLo : 127.102443552272,
plygnLa : 37.5658735026782
},
{
setSeqNo : 1,
plygnSeqNo : 7109,
plygnLo : 127.102386989708,
plygnLa : 37.5656370409461
},
{
setSeqNo : 1,
plygnSeqNo : 7110,
plygnLo : 127.102304665486,
plygnLa : 37.5651809773298
},
{
setSeqNo : 1,
plygnSeqNo : 7111,
plygnLo : 127.102254945482,
plygnLa : 37.5648963704081
},
{
setSeqNo : 1,
plygnSeqNo : 7112,
plygnLo : 127.102238560776,
plygnLa : 37.564421112143
},
{
setSeqNo : 1,
plygnSeqNo : 7113,
plygnLo : 127.102234349112,
plygnLa : 37.5643110251702
},
{
setSeqNo : 1,
plygnSeqNo : 7114,
plygnLo : 127.101843022516,
plygnLa : 37.56382285924
},
{
setSeqNo : 1,
plygnSeqNo : 7115,
plygnLo : 127.101671101326,
plygnLa : 37.563404883363
},
{
setSeqNo : 1,
plygnSeqNo : 7116,
plygnLo : 127.101624961661,
plygnLa : 37.5632906146466
},
{
setSeqNo : 1,
plygnSeqNo : 7117,
plygnLo : 127.101635590314,
plygnLa : 37.5630374826772
},
{
setSeqNo : 1,
plygnSeqNo : 7118,
plygnLo : 127.101652626425,
plygnLa : 37.5629465214937
},
{
setSeqNo : 1,
plygnSeqNo : 7119,
plygnLo : 127.10166775844,
plygnLa : 37.5626325777824
},
{
setSeqNo : 1,
plygnSeqNo : 7120,
plygnLo : 127.101656952718,
plygnLa : 37.5626103409241
},
{
setSeqNo : 1,
plygnSeqNo : 7121,
plygnLo : 127.101399745613,
plygnLa : 37.5620268897134
},
{
setSeqNo : 1,
plygnSeqNo : 7122,
plygnLo : 127.101204964672,
plygnLa : 37.5615799385917
},
{
setSeqNo : 1,
plygnSeqNo : 7123,
plygnLo : 127.101162867617,
plygnLa : 37.5613133354209
},
{
setSeqNo : 1,
plygnSeqNo : 7124,
plygnLo : 127.101122371792,
plygnLa : 37.5610506760957
},
{
setSeqNo : 1,
plygnSeqNo : 7125,
plygnLo : 127.101134340031,
plygnLa : 37.5610030764848
},
{
setSeqNo : 1,
plygnSeqNo : 7126,
plygnLo : 127.101157924641,
plygnLa : 37.5609160566721
},
{
setSeqNo : 1,
plygnSeqNo : 7127,
plygnLo : 127.10127774808,
plygnLa : 37.5604660292449
},
{
setSeqNo : 1,
plygnSeqNo : 7128,
plygnLo : 127.10139912927,
plygnLa : 37.5602502478106
},
{
setSeqNo : 1,
plygnSeqNo : 7129,
plygnLo : 127.101541863715,
plygnLa : 37.5599984088659
},
{
setSeqNo : 1,
plygnSeqNo : 7130,
plygnLo : 127.101694311575,
plygnLa : 37.5597414971918
},
{
setSeqNo : 1,
plygnSeqNo : 7131,
plygnLo : 127.101801066107,
plygnLa : 37.5595671284853
},
{
setSeqNo : 1,
plygnSeqNo : 7132,
plygnLo : 127.101859501311,
plygnLa : 37.559493863502
},
{
setSeqNo : 1,
plygnSeqNo : 7133,
plygnLo : 127.102045023143,
plygnLa : 37.5593743331003
},
{
setSeqNo : 1,
plygnSeqNo : 7134,
plygnLo : 127.102167442003,
plygnLa : 37.5592782112197
},
{
setSeqNo : 1,
plygnSeqNo : 7135,
plygnLo : 127.102341645127,
plygnLa : 37.5591505193648
},
{
setSeqNo : 1,
plygnSeqNo : 7136,
plygnLo : 127.102648313216,
plygnLa : 37.5590353894506
},
{
setSeqNo : 1,
plygnSeqNo : 7137,
plygnLo : 127.102706648232,
plygnLa : 37.5590192834152
},
{
setSeqNo : 1,
plygnSeqNo : 7138,
plygnLo : 127.10285387833,
plygnLa : 37.558708037145
},
{
setSeqNo : 1,
plygnSeqNo : 7139,
plygnLo : 127.103170580442,
plygnLa : 37.5584326844428
},
{
setSeqNo : 1,
plygnSeqNo : 7140,
plygnLo : 127.103433056061,
plygnLa : 37.5582046699892
},
{
setSeqNo : 1,
plygnSeqNo : 7141,
plygnLo : 127.103655084556,
plygnLa : 37.5580127371989
},
{
setSeqNo : 1,
plygnSeqNo : 7142,
plygnLo : 127.103838766716,
plygnLa : 37.5578532211578
},
{
setSeqNo : 1,
plygnSeqNo : 7143,
plygnLo : 127.103905712251,
plygnLa : 37.5577962838376
},
{
setSeqNo : 1,
plygnSeqNo : 7144,
plygnLo : 127.104041936574,
plygnLa : 37.5577097242922
},
{
setSeqNo : 1,
plygnSeqNo : 7145,
plygnLo : 127.104276756511,
plygnLa : 37.5575639658957
},
{
setSeqNo : 1,
plygnSeqNo : 7146,
plygnLo : 127.104352052223,
plygnLa : 37.5574081903241
},
{
setSeqNo : 1,
plygnSeqNo : 7147,
plygnLo : 127.104396294276,
plygnLa : 37.5573101690682
},
{
setSeqNo : 1,
plygnSeqNo : 7148,
plygnLo : 127.10444991136,
plygnLa : 37.5572073566589
},
{
setSeqNo : 1,
plygnSeqNo : 7149,
plygnLo : 127.104570554745,
plygnLa : 37.5569763634192
},
{
setSeqNo : 1,
plygnSeqNo : 7150,
plygnLo : 127.104657157196,
plygnLa : 37.5568138295997
},
{
setSeqNo : 1,
plygnSeqNo : 7151,
plygnLo : 127.10482887532,
plygnLa : 37.5565664747714
},
{
setSeqNo : 1,
plygnSeqNo : 7152,
plygnLo : 127.104929298529,
plygnLa : 37.5564216696557
},
{
setSeqNo : 1,
plygnSeqNo : 7153,
plygnLo : 127.105403977395,
plygnLa : 37.5563353718471
},
{
setSeqNo : 1,
plygnSeqNo : 7154,
plygnLo : 127.106040444199,
plygnLa : 37.5563680383707
},
{
setSeqNo : 1,
plygnSeqNo : 7155,
plygnLo : 127.106396189302,
plygnLa : 37.5564617598101
},
{
setSeqNo : 1,
plygnSeqNo : 7156,
plygnLo : 127.106640112353,
plygnLa : 37.5567661932814
},
{
setSeqNo : 1,
plygnSeqNo : 7157,
plygnLo : 127.10668068721,
plygnLa : 37.556817117553
},
{
setSeqNo : 1,
plygnSeqNo : 7158,
plygnLo : 127.106822624639,
plygnLa : 37.5569093429619
},
{
setSeqNo : 1,
plygnSeqNo : 7159,
plygnLo : 127.106860516411,
plygnLa : 37.5569340868867
},
{
setSeqNo : 1,
plygnSeqNo : 7160,
plygnLo : 127.107080516535,
plygnLa : 37.5570777592882
},
{
setSeqNo : 1,
plygnSeqNo : 7161,
plygnLo : 127.107109189884,
plygnLa : 37.557090410044
},
{
setSeqNo : 1,
plygnSeqNo : 7162,
plygnLo : 127.107144579229,
plygnLa : 37.5571061375271
},
{
setSeqNo : 1,
plygnSeqNo : 7163,
plygnLo : 127.107336978867,
plygnLa : 37.5573630358282
},
{
setSeqNo : 1,
plygnSeqNo : 7164,
plygnLo : 127.107357533246,
plygnLa : 37.5573900473814
},
{
setSeqNo : 1,
plygnSeqNo : 7165,
plygnLo : 127.107519297019,
plygnLa : 37.557606706244
},
{
setSeqNo : 1,
plygnSeqNo : 7166,
plygnLo : 127.107651010087,
plygnLa : 37.5577093554086
},
{
setSeqNo : 1,
plygnSeqNo : 7167,
plygnLo : 127.108044727556,
plygnLa : 37.5578945425044
},
{
setSeqNo : 1,
plygnSeqNo : 7168,
plygnLo : 127.10823975167,
plygnLa : 37.5579962942843
},
{
setSeqNo : 1,
plygnSeqNo : 7169,
plygnLo : 127.108253559413,
plygnLa : 37.5580033186476
},
{
setSeqNo : 1,
plygnSeqNo : 7170,
plygnLo : 127.108305941312,
plygnLa : 37.5580308680441
},
{
setSeqNo : 1,
plygnSeqNo : 7171,
plygnLo : 127.108307708659,
plygnLa : 37.5580319934459
},
{
setSeqNo : 1,
plygnSeqNo : 7172,
plygnLo : 127.108520020747,
plygnLa : 37.5582243774587
},
{
setSeqNo : 1,
plygnSeqNo : 7173,
plygnLo : 127.108538775964,
plygnLa : 37.5582415435525
},
{
setSeqNo : 1,
plygnSeqNo : 7174,
plygnLo : 127.108543386138,
plygnLa : 37.5582454763974
},
{
setSeqNo : 1,
plygnSeqNo : 7175,
plygnLo : 127.10869357269,
plygnLa : 37.5582780013039
},
{
setSeqNo : 1,
plygnSeqNo : 7176,
plygnLo : 127.108928308177,
plygnLa : 37.5583298839154
},
{
setSeqNo : 1,
plygnSeqNo : 7177,
plygnLo : 127.109021538602,
plygnLa : 37.5583500616037
},
{
setSeqNo : 1,
plygnSeqNo : 7178,
plygnLo : 127.109215767474,
plygnLa : 37.5583932487439
},
{
setSeqNo : 1,
plygnSeqNo : 7179,
plygnLo : 127.109321949357,
plygnLa : 37.5584480581259
},
{
setSeqNo : 1,
plygnSeqNo : 7180,
plygnLo : 127.109528820713,
plygnLa : 37.5585543031239
},
{
setSeqNo : 1,
plygnSeqNo : 7181,
plygnLo : 127.10956486462,
plygnLa : 37.5585376556516
},
{
setSeqNo : 1,
plygnSeqNo : 7182,
plygnLo : 127.109623011018,
plygnLa : 37.5585108524637
},
{
setSeqNo : 1,
plygnSeqNo : 7183,
plygnLo : 127.109749187239,
plygnLa : 37.558452461628
},
{
setSeqNo : 1,
plygnSeqNo : 7184,
plygnLo : 127.109890924944,
plygnLa : 37.5583861527205
},
{
setSeqNo : 1,
plygnSeqNo : 7185,
plygnLo : 127.109917073315,
plygnLa : 37.55837430874
},
{
setSeqNo : 1,
plygnSeqNo : 7186,
plygnLo : 127.109986879192,
plygnLa : 37.5583421519529
},
{
setSeqNo : 1,
plygnSeqNo : 7187,
plygnLo : 127.110082163274,
plygnLa : 37.5583181245424
},
{
setSeqNo : 1,
plygnSeqNo : 7188,
plygnLo : 127.110242851842,
plygnLa : 37.558279684161
},
{
setSeqNo : 1,
plygnSeqNo : 7189,
plygnLo : 127.110350151106,
plygnLa : 37.5582534015551
},
{
setSeqNo : 1,
plygnSeqNo : 7190,
plygnLo : 127.110507596601,
plygnLa : 37.5582884501567
},
{
setSeqNo : 1,
plygnSeqNo : 7191,
plygnLo : 127.110802653126,
plygnLa : 37.5583543459338
},
{
setSeqNo : 1,
plygnSeqNo : 7192,
plygnLo : 127.110826880613,
plygnLa : 37.5583599635221
},
{
setSeqNo : 1,
plygnSeqNo : 7193,
plygnLo : 127.110841225483,
plygnLa : 37.5583627615138
},
{
setSeqNo : 1,
plygnSeqNo : 7194,
plygnLo : 127.110845820689,
plygnLa : 37.5583638835451
},
{
setSeqNo : 1,
plygnSeqNo : 7195,
plygnLo : 127.110943472522,
plygnLa : 37.5583882823247
},
{
setSeqNo : 1,
plygnSeqNo : 7196,
plygnLo : 127.111022893561,
plygnLa : 37.5584079216515
},
{
setSeqNo : 1,
plygnSeqNo : 7197,
plygnLo : 127.11103758939,
plygnLa : 37.5584110073994
},
{
setSeqNo : 1,
plygnSeqNo : 7198,
plygnLo : 127.111168315698,
plygnLa : 37.5584463582444
},
{
setSeqNo : 1,
plygnSeqNo : 7199,
plygnLo : 127.111246686672,
plygnLa : 37.5584676845484
},
{
setSeqNo : 1,
plygnSeqNo : 7200,
plygnLo : 127.111265969815,
plygnLa : 37.5584730189479
},
{
setSeqNo : 1,
plygnSeqNo : 7201,
plygnLo : 127.111312842739,
plygnLa : 37.5584859222529
},
{
setSeqNo : 1,
plygnSeqNo : 7202,
plygnLo : 127.111363091322,
plygnLa : 37.5584993895433
},
{
setSeqNo : 1,
plygnSeqNo : 7203,
plygnLo : 127.111372466206,
plygnLa : 37.5585019136444
},
{
setSeqNo : 1,
plygnSeqNo : 7204,
plygnLo : 127.111422181199,
plygnLa : 37.5585156696282
},
{
setSeqNo : 1,
plygnSeqNo : 7205,
plygnLo : 127.11151844646,
plygnLa : 37.5585595037301
},
{
setSeqNo : 1,
plygnSeqNo : 7206,
plygnLo : 127.111643026416,
plygnLa : 37.5586165363699
},
{
setSeqNo : 1,
plygnSeqNo : 7207,
plygnLo : 127.111794673787,
plygnLa : 37.558686511392
},
{
setSeqNo : 1,
plygnSeqNo : 7208,
plygnLo : 127.11189097419,
plygnLa : 37.5587472368591
},
{
setSeqNo : 1,
plygnSeqNo : 7209,
plygnLo : 127.112042838613,
plygnLa : 37.5588414207149
},
{
setSeqNo : 1,
plygnSeqNo : 7210,
plygnLo : 127.112160900971,
plygnLa : 37.5589147948085
},
{
setSeqNo : 1,
plygnSeqNo : 7211,
plygnLo : 127.112281785148,
plygnLa : 37.5589907054014
},
{
setSeqNo : 1,
plygnSeqNo : 7212,
plygnLo : 127.112297542898,
plygnLa : 37.5590005381178
},
{
setSeqNo : 1,
plygnSeqNo : 7213,
plygnLo : 127.112299851224,
plygnLa : 37.5589999691491
},
{
setSeqNo : 1,
plygnSeqNo : 7214,
plygnLo : 127.112402020904,
plygnLa : 37.5589717170354
},
{
setSeqNo : 1,
plygnSeqNo : 7215,
plygnLo : 127.112423764104,
plygnLa : 37.5589655079948
},
{
setSeqNo : 1,
plygnSeqNo : 7216,
plygnLo : 127.112501530492,
plygnLa : 37.5589437559297
},
{
setSeqNo : 1,
plygnSeqNo : 7217,
plygnLo : 127.112636765765,
plygnLa : 37.5589061749972
},
{
setSeqNo : 1,
plygnSeqNo : 7218,
plygnLo : 127.112711014338,
plygnLa : 37.5588849955026
},
{
setSeqNo : 1,
plygnSeqNo : 7219,
plygnLo : 127.112743357147,
plygnLa : 37.5588759455807
},
{
setSeqNo : 1,
plygnSeqNo : 7220,
plygnLo : 127.112960920253,
plygnLa : 37.5587943819735
},
{
setSeqNo : 1,
plygnSeqNo : 7221,
plygnLo : 127.113051063589,
plygnLa : 37.5587607881547
},
{
setSeqNo : 1,
plygnSeqNo : 7222,
plygnLo : 127.113159403032,
plygnLa : 37.558719853929
},
{
setSeqNo : 1,
plygnSeqNo : 7223,
plygnLo : 127.113322355829,
plygnLa : 37.5586588829665
},
{
setSeqNo : 1,
plygnSeqNo : 7224,
plygnLo : 127.113363009309,
plygnLa : 37.5586436445894
},
{
setSeqNo : 1,
plygnSeqNo : 7225,
plygnLo : 127.113379612928,
plygnLa : 37.5586374383463
},
{
setSeqNo : 1,
plygnSeqNo : 7226,
plygnLo : 127.113500692064,
plygnLa : 37.5585925432404
},
{
setSeqNo : 1,
plygnSeqNo : 7227,
plygnLo : 127.113559894088,
plygnLa : 37.5585696844328
},
{
setSeqNo : 1,
plygnSeqNo : 7228,
plygnLo : 127.113600716197,
plygnLa : 37.5585541577008
},
{
setSeqNo : 1,
plygnSeqNo : 7229,
plygnLo : 127.113645962,
plygnLa : 37.5585375099376
},
{
setSeqNo : 1,
plygnSeqNo : 7230,
plygnLo : 127.11365532885,
plygnLa : 37.5585338430852
},
{
setSeqNo : 1,
plygnSeqNo : 7231,
plygnLo : 127.113780289688,
plygnLa : 37.5584900804815
},
{
setSeqNo : 1,
plygnSeqNo : 7232,
plygnLo : 127.113793556053,
plygnLa : 37.5584841570389
},
{
setSeqNo : 1,
plygnSeqNo : 7233,
plygnLo : 127.113844943807,
plygnLa : 37.5584432845381
},
{
setSeqNo : 1,
plygnSeqNo : 7234,
plygnLo : 127.113863665333,
plygnLa : 37.5584294634881
},
{
setSeqNo : 1,
plygnSeqNo : 7235,
plygnLo : 127.113679137541,
plygnLa : 37.5581328791242
},
{
setSeqNo : 1,
plygnSeqNo : 7236,
plygnLo : 127.113566239726,
plygnLa : 37.5579626462057
},
{
setSeqNo : 1,
plygnSeqNo : 7237,
plygnLo : 127.113563165686,
plygnLa : 37.5579204094527
},
{
setSeqNo : 1,
plygnSeqNo : 7238,
plygnLo : 127.113554266865,
plygnLa : 37.5578804323224
},
{
setSeqNo : 1,
plygnSeqNo : 7239,
plygnLo : 127.113527388012,
plygnLa : 37.5575335777874
},
{
setSeqNo : 1,
plygnSeqNo : 7240,
plygnLo : 127.113353223427,
plygnLa : 37.5571854548405
},
{
setSeqNo : 1,
plygnSeqNo : 7241,
plygnLo : 127.113333105742,
plygnLa : 37.5570970603642
},
{
setSeqNo : 1,
plygnSeqNo : 7242,
plygnLo : 127.113331659978,
plygnLa : 37.5569557230544
},
{
setSeqNo : 1,
plygnSeqNo : 7243,
plygnLo : 127.113325021359,
plygnLa : 37.5568906871832
},
{
setSeqNo : 1,
plygnSeqNo : 7244,
plygnLo : 127.113320349541,
plygnLa : 37.5568386058944
},
{
setSeqNo : 1,
plygnSeqNo : 7245,
plygnLo : 127.113314665044,
plygnLa : 37.5568304479266
},
{
setSeqNo : 1,
plygnSeqNo : 7246,
plygnLo : 127.113522806012,
plygnLa : 37.556830529215
},
{
setSeqNo : 1,
plygnSeqNo : 7247,
plygnLo : 127.113962758979,
plygnLa : 37.5568222287836
},
{
setSeqNo : 1,
plygnSeqNo : 7248,
plygnLo : 127.114365208343,
plygnLa : 37.556807771918
},
{
setSeqNo : 1,
plygnSeqNo : 7249,
plygnLo : 127.1150102499,
plygnLa : 37.5567722401074
},
{
setSeqNo : 1,
plygnSeqNo : 7250,
plygnLo : 127.115225975009,
plygnLa : 37.5567602014876
},
{
setSeqNo : 1,
plygnSeqNo : 7251,
plygnLo : 127.115252581102,
plygnLa : 37.5567598612805
},
{
setSeqNo : 1,
plygnSeqNo : 7252,
plygnLo : 127.115645632653,
plygnLa : 37.5576999164087
},
{
setSeqNo : 1,
plygnSeqNo : 7253,
plygnLo : 127.117303316947,
plygnLa : 37.5594256801284
},
{
setSeqNo : 1,
plygnSeqNo : 7254,
plygnLo : 127.117339266092,
plygnLa : 37.5594636568574
},
{
setSeqNo : 1,
plygnSeqNo : 7255,
plygnLo : 127.117367063161,
plygnLa : 37.5594793962804
},
{
setSeqNo : 1,
plygnSeqNo : 7256,
plygnLo : 127.117466013856,
plygnLa : 37.5595437655319
},
{
setSeqNo : 1,
plygnSeqNo : 7257,
plygnLo : 127.117741968741,
plygnLa : 37.5597129977442
},
{
setSeqNo : 1,
plygnSeqNo : 7258,
plygnLo : 127.117933676195,
plygnLa : 37.5598336041991
},
{
setSeqNo : 1,
plygnSeqNo : 7259,
plygnLo : 127.118320811888,
plygnLa : 37.5600776069663
},
{
setSeqNo : 1,
plygnSeqNo : 7260,
plygnLo : 127.118417811911,
plygnLa : 37.5601380477005
},
{
setSeqNo : 1,
plygnSeqNo : 7261,
plygnLo : 127.118519604619,
plygnLa : 37.5602027008721
},
{
setSeqNo : 1,
plygnSeqNo : 7262,
plygnLo : 127.118687591378,
plygnLa : 37.5603081302614
},
{
setSeqNo : 1,
plygnSeqNo : 7263,
plygnLo : 127.119042339732,
plygnLa : 37.5605296380307
},
{
setSeqNo : 1,
plygnSeqNo : 7264,
plygnLo : 127.119277943044,
plygnLa : 37.560678073659
},
{
setSeqNo : 1,
plygnSeqNo : 7265,
plygnLo : 127.119543656055,
plygnLa : 37.5608439248577
},
{
setSeqNo : 1,
plygnSeqNo : 7266,
plygnLo : 127.119706337207,
plygnLa : 37.5609473760906
},
{
setSeqNo : 1,
plygnSeqNo : 7267,
plygnLo : 127.119758020468,
plygnLa : 37.5609794177654
},
{
setSeqNo : 1,
plygnSeqNo : 7268,
plygnLo : 127.11981502744,
plygnLa : 37.5610137156375
},
{
setSeqNo : 1,
plygnSeqNo : 7269,
plygnLo : 127.120096495491,
plygnLa : 37.5611995413526
},
{
setSeqNo : 1,
plygnSeqNo : 7270,
plygnLo : 127.122955569247,
plygnLa : 37.563489938748
},
{
setSeqNo : 1,
plygnSeqNo : 7271,
plygnLo : 127.125783297161,
plygnLa : 37.5648086305135
},
{
setSeqNo : 1,
plygnSeqNo : 7272,
plygnLo : 127.126059408467,
plygnLa : 37.5649401095127
},
{
setSeqNo : 1,
plygnSeqNo : 7273,
plygnLo : 127.126460842677,
plygnLa : 37.5651328377952
},
{
setSeqNo : 1,
plygnSeqNo : 7274,
plygnLo : 127.1274031856,
plygnLa : 37.5655865475564
},
{
setSeqNo : 1,
plygnSeqNo : 7275,
plygnLo : 127.128076123033,
plygnLa : 37.5659093468571
},
{
setSeqNo : 1,
plygnSeqNo : 7276,
plygnLo : 127.128610493025,
plygnLa : 37.566160472538
},
{
setSeqNo : 1,
plygnSeqNo : 7277,
plygnLo : 127.129297929428,
plygnLa : 37.5663714727868
},
{
setSeqNo : 1,
plygnSeqNo : 7278,
plygnLo : 127.130539802034,
plygnLa : 37.5667705019916
},
{
setSeqNo : 1,
plygnSeqNo : 7279,
plygnLo : 127.131445656177,
plygnLa : 37.5670637364721
},
{
setSeqNo : 1,
plygnSeqNo : 7280,
plygnLo : 127.132018462879,
plygnLa : 37.5672433019954
},
{
setSeqNo : 1,
plygnSeqNo : 7281,
plygnLo : 127.132968370416,
plygnLa : 37.5675426630395
},
{
setSeqNo : 1,
plygnSeqNo : 7282,
plygnLo : 127.133458032584,
plygnLa : 37.5677014846
},
{
setSeqNo : 1,
plygnSeqNo : 7283,
plygnLo : 127.133945541087,
plygnLa : 37.5678532600443
},
{
setSeqNo : 1,
plygnSeqNo : 7284,
plygnLo : 127.134266369159,
plygnLa : 37.5679539812486
},
{
setSeqNo : 1,
plygnSeqNo : 7285,
plygnLo : 127.134741026237,
plygnLa : 37.5680246783311
},
{
setSeqNo : 1,
plygnSeqNo : 7286,
plygnLo : 127.135280578253,
plygnLa : 37.5680953016869
},
{
setSeqNo : 1,
plygnSeqNo : 7287,
plygnLo : 127.135782621762,
plygnLa : 37.5681614585499
},
{
setSeqNo : 1,
plygnSeqNo : 7288,
plygnLo : 127.136404459344,
plygnLa : 37.5682486054322
},
{
setSeqNo : 1,
plygnSeqNo : 7289,
plygnLo : 127.137062188724,
plygnLa : 37.5683385094178
},
{
setSeqNo : 1,
plygnSeqNo : 7290,
plygnLo : 127.13766579119,
plygnLa : 37.568424246853
},
{
setSeqNo : 1,
plygnSeqNo : 7291,
plygnLo : 127.139926115582,
plygnLa : 37.5684261308931
},
{
setSeqNo : 1,
plygnSeqNo : 7292,
plygnLo : 127.145585712599,
plygnLa : 37.5684311918624
},
{
setSeqNo : 1,
plygnSeqNo : 7293,
plygnLo : 127.148949819323,
plygnLa : 37.5684343548639
},
{
setSeqNo : 1,
plygnSeqNo : 7294,
plygnLo : 127.151243628567,
plygnLa : 37.5697953370303
},
{
setSeqNo : 1,
plygnSeqNo : 7295,
plygnLo : 127.152369577236,
plygnLa : 37.5704726185111
},
{
setSeqNo : 1,
plygnSeqNo : 7296,
plygnLo : 127.15498133541,
plygnLa : 37.5720435734623
},
{
setSeqNo : 1,
plygnSeqNo : 7297,
plygnLo : 127.156899443327,
plygnLa : 37.5729541509617
},
{
setSeqNo : 1,
plygnSeqNo : 7298,
plygnLo : 127.160845587296,
plygnLa : 37.5756526983706
},
{
setSeqNo : 1,
plygnSeqNo : 7299,
plygnLo : 127.16200695914,
plygnLa : 37.5763865653238
},
{
setSeqNo : 1,
plygnSeqNo : 7300,
plygnLo : 127.162555313156,
plygnLa : 37.5767301572518
},
{
setSeqNo : 1,
plygnSeqNo : 7301,
plygnLo : 127.166747437702,
plygnLa : 37.5789757035737
},
{
setSeqNo : 1,
plygnSeqNo : 7302,
plygnLo : 127.168217412849,
plygnLa : 37.578992502467
},
{
setSeqNo : 1,
plygnSeqNo : 7303,
plygnLo : 127.168647782017,
plygnLa : 37.5789975171636
},
{
setSeqNo : 1,
plygnSeqNo : 7304,
plygnLo : 127.170251486221,
plygnLa : 37.5790169216049
},
{
setSeqNo : 1,
plygnSeqNo : 7305,
plygnLo : 127.171837488831,
plygnLa : 37.5792624162963
},
{
setSeqNo : 1,
plygnSeqNo : 7306,
plygnLo : 127.173874027065,
plygnLa : 37.5798864916854
},
{
setSeqNo : 1,
plygnSeqNo : 7307,
plygnLo : 127.173908014726,
plygnLa : 37.579897416201
},
{
setSeqNo : 1,
plygnSeqNo : 7308,
plygnLo : 127.17412290271,
plygnLa : 37.5799629911508
},
{
setSeqNo : 1,
plygnSeqNo : 7309,
plygnLo : 127.174343463364,
plygnLa : 37.5800293950171
},
{
setSeqNo : 1,
plygnSeqNo : 7310,
plygnLo : 127.174564731964,
plygnLa : 37.5800977721277
},
{
setSeqNo : 1,
plygnSeqNo : 7311,
plygnLo : 127.174739628767,
plygnLa : 37.5801521426582
},
{
setSeqNo : 1,
plygnSeqNo : 7312,
plygnLo : 127.174879476181,
plygnLa : 37.5801955709258
},
{
setSeqNo : 1,
plygnSeqNo : 7313,
plygnLo : 127.17507437156,
plygnLa : 37.58025582203
},
{
setSeqNo : 1,
plygnSeqNo : 7314,
plygnLo : 127.175106413105,
plygnLa : 37.5802670362692
},
{
setSeqNo : 1,
plygnSeqNo : 7315,
plygnLo : 127.17537297669,
plygnLa : 37.5804130552062
},
{
setSeqNo : 1,
plygnSeqNo : 7316,
plygnLo : 127.17565918888,
plygnLa : 37.5805658001855
},
{
setSeqNo : 1,
plygnSeqNo : 7317,
plygnLo : 127.175850993325,
plygnLa : 37.5806696979328
},
{
setSeqNo : 1,
plygnSeqNo : 7318,
plygnLo : 127.176017662029,
plygnLa : 37.5807620823553
},
{
setSeqNo : 1,
plygnSeqNo : 7319,
plygnLo : 127.176165737505,
plygnLa : 37.5808426634295
},
{
setSeqNo : 1,
plygnSeqNo : 7320,
plygnLo : 127.17637881362,
plygnLa : 37.5809594864621
},
{
setSeqNo : 1,
plygnSeqNo : 7321,
plygnLo : 127.176518554849,
plygnLa : 37.581034737036
},
{
setSeqNo : 1,
plygnSeqNo : 7322,
plygnLo : 127.177154874256,
plygnLa : 37.5812007521817
},
{
setSeqNo : 1,
plygnSeqNo : 7323,
plygnLo : 127.177139941141,
plygnLa : 37.5809445531641
},
{
setSeqNo : 1,
plygnSeqNo : 7324,
plygnLo : 127.177127859639,
plygnLa : 37.5806931421065
},
{
setSeqNo : 1,
plygnSeqNo : 7325,
plygnLo : 127.177120667236,
plygnLa : 37.5805720876142
},
{
setSeqNo : 1,
plygnSeqNo : 7326,
plygnLo : 127.177108798662,
plygnLa : 37.5805599949642
},
{
setSeqNo : 1,
plygnSeqNo : 7327,
plygnLo : 127.177082770044,
plygnLa : 37.5804775401828
},
{
setSeqNo : 1,
plygnSeqNo : 7328,
plygnLo : 127.177105559687,
plygnLa : 37.5803910653777
},
{
setSeqNo : 1,
plygnSeqNo : 7329,
plygnLo : 127.177117760159,
plygnLa : 37.5803122107608
},
{
setSeqNo : 1,
plygnSeqNo : 7330,
plygnLo : 127.177137455465,
plygnLa : 37.5801857564527
},
{
setSeqNo : 1,
plygnSeqNo : 7331,
plygnLo : 127.17713978643,
plygnLa : 37.5801274765094
},
{
setSeqNo : 1,
plygnSeqNo : 7332,
plygnLo : 127.177141248967,
plygnLa : 37.5799928852571
},
{
setSeqNo : 1,
plygnSeqNo : 7333,
plygnLo : 127.177142878748,
plygnLa : 37.579858301611
},
{
setSeqNo : 1,
plygnSeqNo : 7334,
plygnLo : 127.177093847784,
plygnLa : 37.5796936660341
},
{
setSeqNo : 1,
plygnSeqNo : 7335,
plygnLo : 127.17707476863,
plygnLa : 37.5796297782483
},
{
setSeqNo : 1,
plygnSeqNo : 7336,
plygnLo : 127.17706041767,
plygnLa : 37.5795447647813
},
{
setSeqNo : 1,
plygnSeqNo : 7337,
plygnLo : 127.176988648463,
plygnLa : 37.5794167607915
},
{
setSeqNo : 1,
plygnSeqNo : 7338,
plygnLo : 127.176935942639,
plygnLa : 37.5793411014711
},
{
setSeqNo : 1,
plygnSeqNo : 7339,
plygnLo : 127.176883407836,
plygnLa : 37.579265721516
},
{
setSeqNo : 1,
plygnSeqNo : 7340,
plygnLo : 127.176864437665,
plygnLa : 37.5792480194188
},
{
setSeqNo : 1,
plygnSeqNo : 7341,
plygnLo : 127.176814618897,
plygnLa : 37.5792019088612
},
{
setSeqNo : 1,
plygnSeqNo : 7342,
plygnLo : 127.176761061235,
plygnLa : 37.5791394879197
},
{
setSeqNo : 1,
plygnSeqNo : 7343,
plygnLo : 127.176741014351,
plygnLa : 37.5791161455602
},
{
setSeqNo : 1,
plygnSeqNo : 7344,
plygnLo : 127.176689077539,
plygnLa : 37.5790697678319
},
{
setSeqNo : 1,
plygnSeqNo : 7345,
plygnLo : 127.176621193708,
plygnLa : 37.5790093299056
},
{
setSeqNo : 1,
plygnSeqNo : 7346,
plygnLo : 127.176537510698,
plygnLa : 37.5789323130635
},
{
setSeqNo : 1,
plygnSeqNo : 7347,
plygnLo : 127.176511475468,
plygnLa : 37.5789146113544
},
{
setSeqNo : 1,
plygnSeqNo : 7348,
plygnLo : 127.176389401247,
plygnLa : 37.5788314513979
},
{
setSeqNo : 1,
plygnSeqNo : 7349,
plygnLo : 127.17632617349,
plygnLa : 37.5787960640783
},
{
setSeqNo : 1,
plygnSeqNo : 7350,
plygnLo : 127.176252016301,
plygnLa : 37.5787795677476
},
{
setSeqNo : 1,
plygnSeqNo : 7351,
plygnLo : 127.176179048998,
plygnLa : 37.5787430687596
},
{
setSeqNo : 1,
plygnSeqNo : 7352,
plygnLo : 127.176108704879,
plygnLa : 37.5786908082342
},
{
setSeqNo : 1,
plygnSeqNo : 7353,
plygnLo : 127.17606581241,
plygnLa : 37.5786528589978
},
{
setSeqNo : 1,
plygnSeqNo : 7354,
plygnLo : 127.176033201709,
plygnLa : 37.5786258769659
},
{
setSeqNo : 1,
plygnSeqNo : 7355,
plygnLo : 127.175993465582,
plygnLa : 37.5785772278717
},
{
setSeqNo : 1,
plygnSeqNo : 7356,
plygnLo : 127.175962112146,
plygnLa : 37.5785595350998
},
{
setSeqNo : 1,
plygnSeqNo : 7357,
plygnLo : 127.175911861566,
plygnLa : 37.5785517248853
},
{
setSeqNo : 1,
plygnSeqNo : 7358,
plygnLo : 127.175861603214,
plygnLa : 37.5785436368069
},
{
setSeqNo : 1,
plygnSeqNo : 7359,
plygnLo : 127.175715764926,
plygnLa : 37.5785080910616
},
{
setSeqNo : 1,
plygnSeqNo : 7360,
plygnLo : 127.175661408309,
plygnLa : 37.5784856478148
},
{
setSeqNo : 1,
plygnSeqNo : 7361,
plygnLo : 127.175591465162,
plygnLa : 37.5784553414564
},
{
setSeqNo : 1,
plygnSeqNo : 7362,
plygnLo : 127.17552292323,
plygnLa : 37.5784129264547
},
{
setSeqNo : 1,
plygnSeqNo : 7363,
plygnLo : 127.175442317041,
plygnLa : 37.5783632114323
},
{
setSeqNo : 1,
plygnSeqNo : 7364,
plygnLo : 127.17541546227,
plygnLa : 37.5782990555256
},
{
setSeqNo : 1,
plygnSeqNo : 7365,
plygnLo : 127.17540428012,
plygnLa : 37.5782081249868
},
{
setSeqNo : 1,
plygnSeqNo : 7366,
plygnLo : 127.175397466716,
plygnLa : 37.5780918554125
},
{
setSeqNo : 1,
plygnSeqNo : 7367,
plygnLo : 127.175386184748,
plygnLa : 37.5780307757944
},
{
setSeqNo : 1,
plygnSeqNo : 7368,
plygnLo : 127.175372038097,
plygnLa : 37.5779595558002
},
{
setSeqNo : 1,
plygnSeqNo : 7369,
plygnLo : 127.175366612966,
plygnLa : 37.5779043782436
},
{
setSeqNo : 1,
plygnSeqNo : 7370,
plygnLo : 127.175360989168,
plygnLa : 37.5778475161584
},
{
setSeqNo : 1,
plygnSeqNo : 7371,
plygnLo : 127.175340228661,
plygnLa : 37.5777408345847
},
{
setSeqNo : 1,
plygnSeqNo : 7372,
plygnLo : 127.175331473991,
plygnLa : 37.577705374824
},
{
setSeqNo : 1,
plygnSeqNo : 7373,
plygnLo : 127.175330265639,
plygnLa : 37.5776431456003
},
{
setSeqNo : 1,
plygnSeqNo : 7374,
plygnLo : 127.175340784047,
plygnLa : 37.5776003427497
},
{
setSeqNo : 1,
plygnSeqNo : 7375,
plygnLo : 127.175359886287,
plygnLa : 37.5775234432075
},
{
setSeqNo : 1,
plygnSeqNo : 7376,
plygnLo : 127.175358040662,
plygnLa : 37.5774893794507
},
{
setSeqNo : 1,
plygnSeqNo : 7377,
plygnLo : 127.17533966786,
plygnLa : 37.577426616695
},
{
setSeqNo : 1,
plygnSeqNo : 7378,
plygnLo : 127.175321307362,
plygnLa : 37.5773635744981
},
{
setSeqNo : 1,
plygnSeqNo : 7379,
plygnLo : 127.175324339595,
plygnLa : 37.5772999419713
},
{
setSeqNo : 1,
plygnSeqNo : 7380,
plygnLo : 127.175327552322,
plygnLa : 37.577235174449
},
{
setSeqNo : 1,
plygnSeqNo : 7381,
plygnLo : 127.175361752091,
plygnLa : 37.5771869848251
},
{
setSeqNo : 1,
plygnSeqNo : 7382,
plygnLo : 127.175421401832,
plygnLa : 37.5771243860068
},
{
setSeqNo : 1,
plygnSeqNo : 7383,
plygnLo : 127.175451853968,
plygnLa : 37.5770609928052
},
{
setSeqNo : 1,
plygnSeqNo : 7384,
plygnLo : 127.175498274792,
plygnLa : 37.5770203791728
},
{
setSeqNo : 1,
plygnSeqNo : 7385,
plygnLo : 127.175512482764,
plygnLa : 37.5769677059102
},
{
setSeqNo : 1,
plygnSeqNo : 7386,
plygnLo : 127.175513233157,
plygnLa : 37.5769102666416
},
{
setSeqNo : 1,
plygnSeqNo : 7387,
plygnLo : 127.17551923335,
plygnLa : 37.5768271964255
},
{
setSeqNo : 1,
plygnSeqNo : 7388,
plygnLo : 127.175524696323,
plygnLa : 37.576742720771
},
{
setSeqNo : 1,
plygnSeqNo : 7389,
plygnLo : 127.175526918952,
plygnLa : 37.5767106239461
},
{
setSeqNo : 1,
plygnSeqNo : 7390,
plygnLo : 127.175528796898,
plygnLa : 37.576681339045
},
{
setSeqNo : 1,
plygnSeqNo : 7391,
plygnLo : 127.175536523736,
plygnLa : 37.5766588028469
},
{
setSeqNo : 1,
plygnSeqNo : 7392,
plygnLo : 127.175544259722,
plygnLa : 37.5766365466952
},
{
setSeqNo : 1,
plygnSeqNo : 7393,
plygnLo : 127.175562270149,
plygnLa : 37.5766215993486
},
{
setSeqNo : 1,
plygnSeqNo : 7394,
plygnLo : 127.175573159799,
plygnLa : 37.5765925801751
},
{
setSeqNo : 1,
plygnSeqNo : 7395,
plygnLo : 127.175583882286,
plygnLa : 37.5765638515657
},
{
setSeqNo : 1,
plygnSeqNo : 7396,
plygnLo : 127.175585629417,
plygnLa : 37.5765511706629
},
{
setSeqNo : 1,
plygnSeqNo : 7397,
plygnLo : 127.175591542902,
plygnLa : 37.5765089333246
},
{
setSeqNo : 1,
plygnSeqNo : 7398,
plygnLo : 127.17559727532,
plygnLa : 37.5764666866859
},
{
setSeqNo : 1,
plygnSeqNo : 7399,
plygnLo : 127.175620607171,
plygnLa : 37.5763799324776
},
{
setSeqNo : 1,
plygnSeqNo : 7400,
plygnLo : 127.175623742511,
plygnLa : 37.5763605024058
},
{
setSeqNo : 1,
plygnSeqNo : 7401,
plygnLo : 127.175632634711,
plygnLa : 37.5763041780826
},
{
setSeqNo : 1,
plygnSeqNo : 7402,
plygnLo : 127.175639259462,
plygnLa : 37.5762619300413
},
{
setSeqNo : 1,
plygnSeqNo : 7403,
plygnLo : 127.175676194955,
plygnLa : 37.5760999868936
},
{
setSeqNo : 1,
plygnSeqNo : 7404,
plygnLo : 127.175715711179,
plygnLa : 37.5758991783929
},
{
setSeqNo : 1,
plygnSeqNo : 7405,
plygnLo : 127.175728470385,
plygnLa : 37.5758363713641
},
{
setSeqNo : 1,
plygnSeqNo : 7406,
plygnLo : 127.175763969,
plygnLa : 37.5756609056096
},
{
setSeqNo : 1,
plygnSeqNo : 7407,
plygnLo : 127.175765687111,
plygnLa : 37.5755629208258
},
{
setSeqNo : 1,
plygnSeqNo : 7408,
plygnLo : 127.175762571202,
plygnLa : 37.5755173072108
},
{
setSeqNo : 1,
plygnSeqNo : 7409,
plygnLo : 127.175757364342,
plygnLa : 37.5754838168159
},
{
setSeqNo : 1,
plygnSeqNo : 7410,
plygnLo : 127.175756385973,
plygnLa : 37.5754435542433
},
{
setSeqNo : 1,
plygnSeqNo : 7411,
plygnLo : 127.175738415982,
plygnLa : 37.5753971252277
},
{
setSeqNo : 1,
plygnSeqNo : 7412,
plygnLo : 127.17572657827,
plygnLa : 37.5753261905084
},
{
setSeqNo : 1,
plygnSeqNo : 7413,
plygnLo : 127.175710437588,
plygnLa : 37.5752344211203
},
{
setSeqNo : 1,
plygnSeqNo : 7414,
plygnLo : 127.175698692379,
plygnLa : 37.5751246351246
},
{
setSeqNo : 1,
plygnSeqNo : 7415,
plygnLo : 127.175694805063,
plygnLa : 37.5750500302416
},
{
setSeqNo : 1,
plygnSeqNo : 7416,
plygnLo : 127.17568313387,
plygnLa : 37.5748991224841
},
{
setSeqNo : 1,
plygnSeqNo : 7417,
plygnLo : 127.175702076138,
plygnLa : 37.5748320891939
},
{
setSeqNo : 1,
plygnSeqNo : 7418,
plygnLo : 127.175726919938,
plygnLa : 37.5747915080504
},
{
setSeqNo : 1,
plygnSeqNo : 7419,
plygnLo : 127.175924724952,
plygnLa : 37.5745096576521
},
{
setSeqNo : 1,
plygnSeqNo : 7420,
plygnLo : 127.175978842846,
plygnLa : 37.574429894327
},
{
setSeqNo : 1,
plygnSeqNo : 7421,
plygnLo : 127.176026607538,
plygnLa : 37.5743594389863
},
{
setSeqNo : 1,
plygnSeqNo : 7422,
plygnLo : 127.176092226841,
plygnLa : 37.5742078598105
},
{
setSeqNo : 1,
plygnSeqNo : 7423,
plygnLo : 127.176103911445,
plygnLa : 37.5741357639375
},
{
setSeqNo : 1,
plygnSeqNo : 7424,
plygnLo : 127.176131569238,
plygnLa : 37.5740889875801
},
{
setSeqNo : 1,
plygnSeqNo : 7425,
plygnLo : 127.176308528958,
plygnLa : 37.5739746969353
},
{
setSeqNo : 1,
plygnSeqNo : 7426,
plygnLo : 127.17649808779,
plygnLa : 37.5738018141812
},
{
setSeqNo : 1,
plygnSeqNo : 7427,
plygnLo : 127.176565030528,
plygnLa : 37.5736843086095
},
{
setSeqNo : 1,
plygnSeqNo : 7428,
plygnLo : 127.176636782595,
plygnLa : 37.5735859401868
},
{
setSeqNo : 1,
plygnSeqNo : 7429,
plygnLo : 127.176786983235,
plygnLa : 37.5734480371596
},
{
setSeqNo : 1,
plygnSeqNo : 7430,
plygnLo : 127.176838688323,
plygnLa : 37.5733983975131
},
{
setSeqNo : 1,
plygnSeqNo : 7431,
plygnLo : 127.176897975854,
plygnLa : 37.573337213523
},
{
setSeqNo : 1,
plygnSeqNo : 7432,
plygnLo : 127.176943684272,
plygnLa : 37.5732940699911
},
{
setSeqNo : 1,
plygnSeqNo : 7433,
plygnLo : 127.176974357935,
plygnLa : 37.5732489746611
},
{
setSeqNo : 1,
plygnSeqNo : 7434,
plygnLo : 127.177018375501,
plygnLa : 37.5731647215534
},
{
setSeqNo : 1,
plygnSeqNo : 7435,
plygnLo : 127.177049191276,
plygnLa : 37.5731030200214
},
{
setSeqNo : 1,
plygnSeqNo : 7436,
plygnLo : 127.177054105328,
plygnLa : 37.5730894895317
},
{
setSeqNo : 1,
plygnSeqNo : 7437,
plygnLo : 127.177082630108,
plygnLa : 37.5730353874286
},
{
setSeqNo : 1,
plygnSeqNo : 7438,
plygnLo : 127.177089301148,
plygnLa : 37.5730125742549
},
{
setSeqNo : 1,
plygnSeqNo : 7439,
plygnLo : 127.177113546281,
plygnLa : 37.5729449638162
},
{
setSeqNo : 1,
plygnSeqNo : 7440,
plygnLo : 127.177143673795,
plygnLa : 37.5728931117581
},
{
setSeqNo : 1,
plygnSeqNo : 7441,
plygnLo : 127.177158830798,
plygnLa : 37.5728694388103
},
{
setSeqNo : 1,
plygnSeqNo : 7442,
plygnLo : 127.177186866176,
plygnLa : 37.5728342040943
},
{
setSeqNo : 1,
plygnSeqNo : 7443,
plygnLo : 127.177195514777,
plygnLa : 37.572824334549
},
{
setSeqNo : 1,
plygnSeqNo : 7444,
plygnLo : 127.177254264342,
plygnLa : 37.5727617465909
},
{
setSeqNo : 1,
plygnSeqNo : 7445,
plygnLo : 127.177346768791,
plygnLa : 37.5726118179738
},
{
setSeqNo : 1,
plygnSeqNo : 7446,
plygnLo : 127.177387426625,
plygnLa : 37.5725233442019
},
{
setSeqNo : 1,
plygnSeqNo : 7447,
plygnLo : 127.177455337593,
plygnLa : 37.5724480652042
},
{
setSeqNo : 1,
plygnSeqNo : 7448,
plygnLo : 127.177506898762,
plygnLa : 37.5724094172393
},
{
setSeqNo : 1,
plygnSeqNo : 7449,
plygnLo : 127.17757133193,
plygnLa : 37.5723569562456
},
{
setSeqNo : 1,
plygnSeqNo : 7450,
plygnLo : 127.177617917224,
plygnLa : 37.5723104309178
},
{
setSeqNo : 1,
plygnSeqNo : 7451,
plygnLo : 127.177645238416,
plygnLa : 37.5722709723522
},
{
setSeqNo : 1,
plygnSeqNo : 7452,
plygnLo : 127.177731177619,
plygnLa : 37.5721883402633
},
{
setSeqNo : 1,
plygnSeqNo : 7453,
plygnLo : 127.1777422873,
plygnLa : 37.5721714306317
},
{
setSeqNo : 1,
plygnSeqNo : 7454,
plygnLo : 127.17781931149,
plygnLa : 37.5720581334555
},
{
setSeqNo : 1,
plygnSeqNo : 7455,
plygnLo : 127.177855505585,
plygnLa : 37.5719595307767
},
{
setSeqNo : 1,
plygnSeqNo : 7456,
plygnLo : 127.177860953359,
plygnLa : 37.5719409437051
},
{
setSeqNo : 1,
plygnSeqNo : 7457,
plygnLo : 127.177876883387,
plygnLa : 37.5718702472169
},
{
setSeqNo : 1,
plygnSeqNo : 7458,
plygnLo : 127.177873146399,
plygnLa : 37.5718648989961
},
{
setSeqNo : 1,
plygnSeqNo : 7459,
plygnLo : 127.177794806586,
plygnLa : 37.5717946323779
},
{
setSeqNo : 1,
plygnSeqNo : 7460,
plygnLo : 127.177795470231,
plygnLa : 37.5717740704464
},
{
setSeqNo : 1,
plygnSeqNo : 7461,
plygnLo : 127.17779704899,
plygnLa : 37.5717661846245
},
{
setSeqNo : 1,
plygnSeqNo : 7462,
plygnLo : 127.177835838661,
plygnLa : 37.5714913258564
},
{
setSeqNo : 1,
plygnSeqNo : 7463,
plygnLo : 127.177839656012,
plygnLa : 37.571463731267
},
{
setSeqNo : 1,
plygnSeqNo : 7464,
plygnLo : 127.177860094139,
plygnLa : 37.5714279403608
},
{
setSeqNo : 1,
plygnSeqNo : 7465,
plygnLo : 127.177930191195,
plygnLa : 37.5713011402219
},
{
setSeqNo : 1,
plygnSeqNo : 7466,
plygnLo : 127.177935121821,
plygnLa : 37.5712938076318
},
{
setSeqNo : 1,
plygnSeqNo : 7467,
plygnLo : 127.177941631308,
plygnLa : 37.5712800041816
},
{
setSeqNo : 1,
plygnSeqNo : 7468,
plygnLo : 127.177947245776,
plygnLa : 37.5712605697902
},
{
setSeqNo : 1,
plygnSeqNo : 7469,
plygnLo : 127.177972011162,
plygnLa : 37.5711833809552
},
{
setSeqNo : 1,
plygnSeqNo : 7470,
plygnLo : 127.177982366869,
plygnLa : 37.5711532372338
},
{
setSeqNo : 1,
plygnSeqNo : 7471,
plygnLo : 127.178057686343,
plygnLa : 37.5710669724925
},
{
setSeqNo : 1,
plygnSeqNo : 7472,
plygnLo : 127.17817940733,
plygnLa : 37.5709285426858
},
{
setSeqNo : 1,
plygnSeqNo : 7473,
plygnLo : 127.178212722664,
plygnLa : 37.5708817581272
},
{
setSeqNo : 1,
plygnSeqNo : 7474,
plygnLo : 127.178243036525,
plygnLa : 37.5708377898057
},
{
setSeqNo : 1,
plygnSeqNo : 7475,
plygnLo : 127.178265251774,
plygnLa : 37.5708073482949
},
{
setSeqNo : 1,
plygnSeqNo : 7476,
plygnLo : 127.178272998903,
plygnLa : 37.5707943811125
},
{
setSeqNo : 1,
plygnSeqNo : 7477,
plygnLo : 127.178314735029,
plygnLa : 37.5707185813426
},
{
setSeqNo : 1,
plygnSeqNo : 7478,
plygnLo : 127.178321433256,
plygnLa : 37.5707073090361
},
{
setSeqNo : 1,
plygnSeqNo : 7479,
plygnLo : 127.178321939759,
plygnLa : 37.5706968923826
},
{
setSeqNo : 1,
plygnSeqNo : 7480,
plygnLo : 127.17832543839,
plygnLa : 37.5706785882484
},
{
setSeqNo : 1,
plygnSeqNo : 7481,
plygnLo : 127.178326657008,
plygnLa : 37.5706718187742
},
{
setSeqNo : 1,
plygnSeqNo : 7482,
plygnLo : 127.178337111485,
plygnLa : 37.5706022664362
},
{
setSeqNo : 1,
plygnSeqNo : 7483,
plygnLo : 127.178338653071,
plygnLa : 37.5705845230647
},
{
setSeqNo : 1,
plygnSeqNo : 7484,
plygnLo : 127.178349814808,
plygnLa : 37.5705174912003
},
{
setSeqNo : 1,
plygnSeqNo : 7485,
plygnLo : 127.178362549664,
plygnLa : 37.5705174719829
},
{
setSeqNo : 1,
plygnSeqNo : 7486,
plygnLo : 127.178383175015,
plygnLa : 37.5704132686143
},
{
setSeqNo : 1,
plygnSeqNo : 7487,
plygnLo : 127.178396881463,
plygnLa : 37.5703743894775
},
{
setSeqNo : 1,
plygnSeqNo : 7488,
plygnLo : 127.178420076706,
plygnLa : 37.5703124120786
},
{
setSeqNo : 1,
plygnSeqNo : 7489,
plygnLo : 127.178442043143,
plygnLa : 37.5702529773834
},
{
setSeqNo : 1,
plygnSeqNo : 7490,
plygnLo : 127.178471746095,
plygnLa : 37.5701724020016
},
{
setSeqNo : 1,
plygnSeqNo : 7491,
plygnLo : 127.178498279075,
plygnLa : 37.5701005624816
},
{
setSeqNo : 1,
plygnSeqNo : 7492,
plygnLo : 127.178502322262,
plygnLa : 37.5700867627334
},
{
setSeqNo : 1,
plygnSeqNo : 7493,
plygnLo : 127.178514630472,
plygnLa : 37.5700605616409
},
{
setSeqNo : 1,
plygnSeqNo : 7494,
plygnLo : 127.178569410756,
plygnLa : 37.5699616484252
},
{
setSeqNo : 1,
plygnSeqNo : 7495,
plygnLo : 127.178579272352,
plygnLa : 37.5699436157708
},
{
setSeqNo : 1,
plygnSeqNo : 7496,
plygnLo : 127.17859036129,
plygnLa : 37.5699230464523
},
{
setSeqNo : 1,
plygnSeqNo : 7497,
plygnLo : 127.178652700651,
plygnLa : 37.5698094836937
},
{
setSeqNo : 1,
plygnSeqNo : 7498,
plygnLo : 127.17865401785,
plygnLa : 37.5697686579555
},
{
setSeqNo : 1,
plygnSeqNo : 7499,
plygnLo : 127.178678532632,
plygnLa : 37.569737932695
},
{
setSeqNo : 1,
plygnSeqNo : 7500,
plygnLo : 127.178741672463,
plygnLa : 37.5696620930875
},
{
setSeqNo : 1,
plygnSeqNo : 7501,
plygnLo : 127.178747500181,
plygnLa : 37.5696561729158
},
{
setSeqNo : 1,
plygnSeqNo : 7502,
plygnLo : 127.178755071004,
plygnLa : 37.5696457468744
},
{
setSeqNo : 1,
plygnSeqNo : 7503,
plygnLo : 127.178786472451,
plygnLa : 37.5696082548808
},
{
setSeqNo : 1,
plygnSeqNo : 7504,
plygnLo : 127.178836920418,
plygnLa : 37.5695507400198
},
{
setSeqNo : 1,
plygnSeqNo : 7505,
plygnLo : 127.178904292427,
plygnLa : 37.5694734880685
},
{
setSeqNo : 1,
plygnSeqNo : 7506,
plygnLo : 127.178923863631,
plygnLa : 37.5694447446737
},
{
setSeqNo : 1,
plygnSeqNo : 7507,
plygnLo : 127.179021847916,
plygnLa : 37.5692984654364
},
{
setSeqNo : 1,
plygnSeqNo : 7508,
plygnLo : 127.179033837735,
plygnLa : 37.5692809958216
},
{
setSeqNo : 1,
plygnSeqNo : 7509,
plygnLo : 127.179063445519,
plygnLa : 37.569237018204
},
{
setSeqNo : 1,
plygnSeqNo : 7510,
plygnLo : 127.179132860519,
plygnLa : 37.5691237318774
},
{
setSeqNo : 1,
plygnSeqNo : 7511,
plygnLo : 127.179149033233,
plygnLa : 37.5690851366182
},
{
setSeqNo : 1,
plygnSeqNo : 7512,
plygnLo : 127.179181031664,
plygnLa : 37.5690034312352
},
{
setSeqNo : 1,
plygnSeqNo : 7513,
plygnLo : 127.179203717492,
plygnLa : 37.5689465273405
},
{
setSeqNo : 1,
plygnSeqNo : 7514,
plygnLo : 127.179216022666,
plygnLa : 37.568918353902
},
{
setSeqNo : 1,
plygnSeqNo : 7515,
plygnLo : 127.179220172424,
plygnLa : 37.5688738564983
},
{
setSeqNo : 1,
plygnSeqNo : 7516,
plygnLo : 127.179229023883,
plygnLa : 37.5688023312947
},
{
setSeqNo : 1,
plygnSeqNo : 7517,
plygnLo : 127.17923228503,
plygnLa : 37.5687648727414
},
{
setSeqNo : 1,
plygnSeqNo : 7518,
plygnLo : 127.179245654992,
plygnLa : 37.5686606802824
},
{
setSeqNo : 1,
plygnSeqNo : 7519,
plygnLo : 127.179258528606,
plygnLa : 37.5685674629031
},
{
setSeqNo : 1,
plygnSeqNo : 7520,
plygnLo : 127.179263598174,
plygnLa : 37.5685429673035
},
{
setSeqNo : 1,
plygnSeqNo : 7521,
plygnLo : 127.179278954235,
plygnLa : 37.5684550963418
},
{
setSeqNo : 1,
plygnSeqNo : 7522,
plygnLo : 127.179319464463,
plygnLa : 37.5683122844631
},
{
setSeqNo : 1,
plygnSeqNo : 7523,
plygnLo : 127.17933120517,
plygnLa : 37.5682658117549
},
{
setSeqNo : 1,
plygnSeqNo : 7524,
plygnLo : 127.179339740309,
plygnLa : 37.5681371182246
},
{
setSeqNo : 1,
plygnSeqNo : 7525,
plygnLo : 127.17937794482,
plygnLa : 37.5679858669287
},
{
setSeqNo : 1,
plygnSeqNo : 7526,
plygnLo : 127.179436430702,
plygnLa : 37.5678143126837
},
{
setSeqNo : 1,
plygnSeqNo : 7527,
plygnLo : 127.179496540133,
plygnLa : 37.5677305924329
},
{
setSeqNo : 1,
plygnSeqNo : 7528,
plygnLo : 127.179438751833,
plygnLa : 37.5676008825942
},
{
setSeqNo : 1,
plygnSeqNo : 7529,
plygnLo : 127.179432476359,
plygnLa : 37.5673418581392
},
{
setSeqNo : 1,
plygnSeqNo : 7530,
plygnLo : 127.179429596537,
plygnLa : 37.5671726480822
},
{
setSeqNo : 1,
plygnSeqNo : 7531,
plygnLo : 127.17944222091,
plygnLa : 37.5669034593389
},
{
setSeqNo : 1,
plygnSeqNo : 7532,
plygnLo : 127.179463818055,
plygnLa : 37.5667657464464
},
{
setSeqNo : 1,
plygnSeqNo : 7533,
plygnLo : 127.179465339027,
plygnLa : 37.5664388566868
},
{
setSeqNo : 1,
plygnSeqNo : 7534,
plygnLo : 127.179468661754,
plygnLa : 37.5662701954322
},
{
setSeqNo : 1,
plygnSeqNo : 7535,
plygnLo : 127.179482728611,
plygnLa : 37.5661643087048
},
{
setSeqNo : 1,
plygnSeqNo : 7536,
plygnLo : 127.179512192877,
plygnLa : 37.5658368098432
},
{
setSeqNo : 1,
plygnSeqNo : 7537,
plygnLo : 127.179534147936,
plygnLa : 37.5657737081671
},
{
setSeqNo : 1,
plygnSeqNo : 7538,
plygnLo : 127.179545695078,
plygnLa : 37.5657224415022
},
{
setSeqNo : 1,
plygnSeqNo : 7539,
plygnLo : 127.179548677654,
plygnLa : 37.5657097693706
},
{
setSeqNo : 1,
plygnSeqNo : 7540,
plygnLo : 127.179551283138,
plygnLa : 37.565692034357
},
{
setSeqNo : 1,
plygnSeqNo : 7541,
plygnLo : 127.179584421688,
plygnLa : 37.5654960184101
},
{
setSeqNo : 1,
plygnSeqNo : 7542,
plygnLo : 127.179665084114,
plygnLa : 37.5652793717865
},
{
setSeqNo : 1,
plygnSeqNo : 7543,
plygnLo : 127.179784278418,
plygnLa : 37.5650553520815
},
{
setSeqNo : 1,
plygnSeqNo : 7544,
plygnLo : 127.179943669609,
plygnLa : 37.5648509828281
},
{
setSeqNo : 1,
plygnSeqNo : 7545,
plygnLo : 127.180102288881,
plygnLa : 37.5646950441365
},
{
setSeqNo : 1,
plygnSeqNo : 7546,
plygnLo : 127.180194177156,
plygnLa : 37.5645879108051
},
{
setSeqNo : 1,
plygnSeqNo : 7547,
plygnLo : 127.180375026538,
plygnLa : 37.5642604612655
},
{
setSeqNo : 1,
plygnSeqNo : 7548,
plygnLo : 127.180414304492,
plygnLa : 37.5641962163452
},
{
setSeqNo : 1,
plygnSeqNo : 7549,
plygnLo : 127.180457122411,
plygnLa : 37.5641288572839
},
{
setSeqNo : 1,
plygnSeqNo : 7550,
plygnLo : 127.180499952675,
plygnLa : 37.5640679750656
},
{
setSeqNo : 1,
plygnSeqNo : 7551,
plygnLo : 127.180624983915,
plygnLa : 37.5639196819471
},
{
setSeqNo : 1,
plygnSeqNo : 7552,
plygnLo : 127.180755824676,
plygnLa : 37.5636871979561
},
{
setSeqNo : 1,
plygnSeqNo : 7553,
plygnLo : 127.180846030536,
plygnLa : 37.5634691304803
},
{
setSeqNo : 1,
plygnSeqNo : 7554,
plygnLo : 127.180994585184,
plygnLa : 37.5633227825769
},
{
setSeqNo : 1,
plygnSeqNo : 7555,
plygnLo : 127.181100103175,
plygnLa : 37.5631514358506
},
{
setSeqNo : 1,
plygnSeqNo : 7556,
plygnLo : 127.181185729746,
plygnLa : 37.5630170032349
},
{
setSeqNo : 1,
plygnSeqNo : 7557,
plygnLo : 127.181278127511,
plygnLa : 37.562830466684
},
{
setSeqNo : 1,
plygnSeqNo : 7558,
plygnLo : 127.181317304836,
plygnLa : 37.5627189094691
},
{
setSeqNo : 1,
plygnSeqNo : 7559,
plygnLo : 127.181360151518,
plygnLa : 37.5625952386517
},
{
setSeqNo : 1,
plygnSeqNo : 7560,
plygnLo : 127.181393284578,
plygnLa : 37.5625447941791
},
{
setSeqNo : 1,
plygnSeqNo : 7561,
plygnLo : 127.181435266767,
plygnLa : 37.5624290078407
},
{
setSeqNo : 1,
plygnSeqNo : 7562,
plygnLo : 127.181455482732,
plygnLa : 37.5623768813681
},
{
setSeqNo : 1,
plygnSeqNo : 7563,
plygnLo : 127.181514107085,
plygnLa : 37.5622675485089
},
{
setSeqNo : 1,
plygnSeqNo : 7564,
plygnLo : 127.181518743622,
plygnLa : 37.5622092651619
},
{
setSeqNo : 1,
plygnSeqNo : 7565,
plygnLo : 127.181505675104,
plygnLa : 37.5621448104169
},
{
setSeqNo : 1,
plygnSeqNo : 7566,
plygnLo : 127.1815346997,
plygnLa : 37.5620811282897
},
{
setSeqNo : 1,
plygnSeqNo : 7567,
plygnLo : 127.18155541725,
plygnLa : 37.5620174694108
},
{
setSeqNo : 1,
plygnSeqNo : 7568,
plygnLo : 127.181584978621,
plygnLa : 37.5619557615287
},
{
setSeqNo : 1,
plygnSeqNo : 7569,
plygnLo : 127.181622306021,
plygnLa : 37.5618140772485
},
{
setSeqNo : 1,
plygnSeqNo : 7570,
plygnLo : 127.181670747147,
plygnLa : 37.561734321112
},
{
setSeqNo : 1,
plygnSeqNo : 7571,
plygnLo : 127.181722559246,
plygnLa : 37.5615869939746
},
{
setSeqNo : 1,
plygnSeqNo : 7572,
plygnLo : 127.18175506392,
plygnLa : 37.5614982495187
},
{
setSeqNo : 1,
plygnSeqNo : 7573,
plygnLo : 127.181801217537,
plygnLa : 37.5614221538583
},
{
setSeqNo : 1,
plygnSeqNo : 7574,
plygnLo : 127.181853198769,
plygnLa : 37.561345779556
},
{
setSeqNo : 1,
plygnSeqNo : 7575,
plygnLo : 127.18188703069,
plygnLa : 37.5612947586158
},
{
setSeqNo : 1,
plygnSeqNo : 7576,
plygnLo : 127.181909919019,
plygnLa : 37.5612488366114
},
{
setSeqNo : 1,
plygnSeqNo : 7577,
plygnLo : 127.181995419503,
plygnLa : 37.5609924826034
},
{
setSeqNo : 1,
plygnSeqNo : 7578,
plygnLo : 127.181974801126,
plygnLa : 37.5608762330842
},
{
setSeqNo : 1,
plygnSeqNo : 7579,
plygnLo : 127.181970366449,
plygnLa : 37.560721945727
},
{
setSeqNo : 1,
plygnSeqNo : 7580,
plygnLo : 127.182031211272,
plygnLa : 37.5605067419439
},
{
setSeqNo : 1,
plygnSeqNo : 7581,
plygnLo : 127.182040860728,
plygnLa : 37.560405924571
},
{
setSeqNo : 1,
plygnSeqNo : 7582,
plygnLo : 127.182007544771,
plygnLa : 37.5602291565078
},
{
setSeqNo : 1,
plygnSeqNo : 7583,
plygnLo : 127.182024521115,
plygnLa : 37.560153672583
},
{
setSeqNo : 1,
plygnSeqNo : 7584,
plygnLo : 127.182020844349,
plygnLa : 37.5599478658304
},
{
setSeqNo : 1,
plygnSeqNo : 7585,
plygnLo : 127.181984240712,
plygnLa : 37.5596559374069
},
{
setSeqNo : 1,
plygnSeqNo : 7586,
plygnLo : 127.181908417634,
plygnLa : 37.5593818187018
},
{
setSeqNo : 1,
plygnSeqNo : 7587,
plygnLo : 127.181870674726,
plygnLa : 37.559275443722
},
{
setSeqNo : 1,
plygnSeqNo : 7588,
plygnLo : 127.181871393234,
plygnLa : 37.5591363563477
},
{
setSeqNo : 1,
plygnSeqNo : 7589,
plygnLo : 127.181812153834,
plygnLa : 37.5589894686673
},
{
setSeqNo : 1,
plygnSeqNo : 7590,
plygnLo : 127.181782514671,
plygnLa : 37.5587977751307
},
{
setSeqNo : 1,
plygnSeqNo : 7591,
plygnLo : 127.18176077076,
plygnLa : 37.5586561823681
},
{
setSeqNo : 1,
plygnSeqNo : 7592,
plygnLo : 127.181768776855,
plygnLa : 37.5584509153783
},
{
setSeqNo : 1,
plygnSeqNo : 7593,
plygnLo : 127.181738890909,
plygnLa : 37.5583070813815
},
{
setSeqNo : 1,
plygnSeqNo : 7594,
plygnLo : 127.1816566261,
plygnLa : 37.557998338901
},
{
setSeqNo : 1,
plygnSeqNo : 7595,
plygnLo : 127.181654337519,
plygnLa : 37.5579310480481
},
{
setSeqNo : 1,
plygnSeqNo : 7596,
plygnLo : 127.181586838782,
plygnLa : 37.5577284293813
},
{
setSeqNo : 1,
plygnSeqNo : 7597,
plygnLo : 127.181571425951,
plygnLa : 37.5576445526282
},
{
setSeqNo : 1,
plygnSeqNo : 7598,
plygnLo : 127.18155369613,
plygnLa : 37.5575533543715
},
{
setSeqNo : 1,
plygnSeqNo : 7599,
plygnLo : 127.18158718611,
plygnLa : 37.5572151430617
},
{
setSeqNo : 1,
plygnSeqNo : 7600,
plygnLo : 127.181664990958,
plygnLa : 37.5569176985292
},
{
setSeqNo : 1,
plygnSeqNo : 7601,
plygnLo : 127.181674858164,
plygnLa : 37.556827584745
},
{
setSeqNo : 1,
plygnSeqNo : 7602,
plygnLo : 127.181674048818,
plygnLa : 37.5567873296963
},
{
setSeqNo : 1,
plygnSeqNo : 7603,
plygnLo : 127.181669874039,
plygnLa : 37.5566699278152
},
{
setSeqNo : 1,
plygnSeqNo : 7604,
plygnLo : 127.181661576754,
plygnLa : 37.5565285945958
},
{
setSeqNo : 1,
plygnSeqNo : 7605,
plygnLo : 127.181655451347,
plygnLa : 37.5564103473814
},
{
setSeqNo : 1,
plygnSeqNo : 7606,
plygnLo : 127.181684795371,
plygnLa : 37.5563294938458
},
{
setSeqNo : 1,
plygnSeqNo : 7607,
plygnLo : 127.181683812551,
plygnLa : 37.555995849756
},
{
setSeqNo : 1,
plygnSeqNo : 7608,
plygnLo : 127.181618145649,
plygnLa : 37.5557504304447
},
{
setSeqNo : 1,
plygnSeqNo : 7609,
plygnLo : 127.181616181207,
plygnLa : 37.5557422714759
},
{
setSeqNo : 1,
plygnSeqNo : 7610,
plygnLo : 127.181525731665,
plygnLa : 37.5554833744335
},
{
setSeqNo : 1,
plygnSeqNo : 7611,
plygnLo : 127.181516068548,
plygnLa : 37.5555123832747
},
{
setSeqNo : 1,
plygnSeqNo : 7612,
plygnLo : 127.181486729377,
plygnLa : 37.5554437359377
},
{
setSeqNo : 1,
plygnSeqNo : 7613,
plygnLo : 127.181392107465,
plygnLa : 37.5549215856512
},
{
setSeqNo : 1,
plygnSeqNo : 7614,
plygnLo : 127.181487586917,
plygnLa : 37.5546947793396
},
{
setSeqNo : 1,
plygnSeqNo : 7615,
plygnLo : 127.181495372199,
plygnLa : 37.5543318394744
},
{
setSeqNo : 1,
plygnSeqNo : 7616,
plygnLo : 127.181473441648,
plygnLa : 37.5541069048443
},
{
setSeqNo : 1,
plygnSeqNo : 7617,
plygnLo : 127.181469207225,
plygnLa : 37.5540404724198
},
{
setSeqNo : 1,
plygnSeqNo : 7618,
plygnLo : 127.181466457961,
plygnLa : 37.5539985176762
},
{
setSeqNo : 1,
plygnSeqNo : 7619,
plygnLo : 127.181450491719,
plygnLa : 37.553754427725
},
{
setSeqNo : 1,
plygnSeqNo : 7620,
plygnLo : 127.181437448373,
plygnLa : 37.5536998298691
},
{
setSeqNo : 1,
plygnSeqNo : 7621,
plygnLo : 127.181430996861,
plygnLa : 37.5535914402763
},
{
setSeqNo : 1,
plygnSeqNo : 7622,
plygnLo : 127.181419200919,
plygnLa : 37.5535379581724
},
{
setSeqNo : 1,
plygnSeqNo : 7623,
plygnLo : 127.181399987898,
plygnLa : 37.553492379218
},
{
setSeqNo : 1,
plygnSeqNo : 7624,
plygnLo : 127.181384655078,
plygnLa : 37.5534405963115
},
{
setSeqNo : 1,
plygnSeqNo : 7625,
plygnLo : 127.18135151086,
plygnLa : 37.5532584765321
},
{
setSeqNo : 1,
plygnSeqNo : 7626,
plygnLo : 127.181340373128,
plygnLa : 37.5529653905925
},
{
setSeqNo : 1,
plygnSeqNo : 7627,
plygnLo : 127.181421739151,
plygnLa : 37.5527577522214
},
{
setSeqNo : 1,
plygnSeqNo : 7628,
plygnLo : 127.181594818223,
plygnLa : 37.5525927771988
},
{
setSeqNo : 1,
plygnSeqNo : 7629,
plygnLo : 127.181703889652,
plygnLa : 37.5525084234545
},
{
setSeqNo : 1,
plygnSeqNo : 7630,
plygnLo : 127.1820081034,
plygnLa : 37.5523187504634
},
{
setSeqNo : 1,
plygnSeqNo : 7631,
plygnLo : 127.182159052366,
plygnLa : 37.5522230781865
},
{
setSeqNo : 1,
plygnSeqNo : 7632,
plygnLo : 127.182392443723,
plygnLa : 37.5520709588722
},
{
setSeqNo : 1,
plygnSeqNo : 7633,
plygnLo : 127.182624295625,
plygnLa : 37.5519379870992
},
{
setSeqNo : 1,
plygnSeqNo : 7634,
plygnLo : 127.182933110702,
plygnLa : 37.5517530888587
},
{
setSeqNo : 1,
plygnSeqNo : 7635,
plygnLo : 127.182968513558,
plygnLa : 37.551624931707
},
{
setSeqNo : 1,
plygnSeqNo : 7636,
plygnLo : 127.183039686589,
plygnLa : 37.5513685990937
},
{
setSeqNo : 1,
plygnSeqNo : 7637,
plygnLo : 127.183119089734,
plygnLa : 37.5510818529186
},
{
setSeqNo : 1,
plygnSeqNo : 7638,
plygnLo : 127.183102682597,
plygnLa : 37.5506584139535
},
{
setSeqNo : 1,
plygnSeqNo : 7639,
plygnLo : 127.183022597966,
plygnLa : 37.5506641675012
},
{
setSeqNo : 1,
plygnSeqNo : 7640,
plygnLo : 127.182958599274,
plygnLa : 37.5503776349052
},
{
setSeqNo : 1,
plygnSeqNo : 7641,
plygnLo : 127.182926784161,
plygnLa : 37.5502357774519
},
{
setSeqNo : 1,
plygnSeqNo : 7642,
plygnLo : 127.182901901934,
plygnLa : 37.5499655185623
},
{
setSeqNo : 1,
plygnSeqNo : 7643,
plygnLo : 127.182903967763,
plygnLa : 37.5496504480009
},
{
setSeqNo : 1,
plygnSeqNo : 7644,
plygnLo : 127.182899322599,
plygnLa : 37.5496293452161
},
{
setSeqNo : 1,
plygnSeqNo : 7645,
plygnLo : 127.182896702156,
plygnLa : 37.5495713436765
},
{
setSeqNo : 1,
plygnSeqNo : 7646,
plygnLo : 127.182844554084,
plygnLa : 37.5494295173981
},
{
setSeqNo : 1,
plygnSeqNo : 7647,
plygnLo : 127.182905882039,
plygnLa : 37.5492734445814
},
{
setSeqNo : 1,
plygnSeqNo : 7648,
plygnLo : 127.182925858156,
plygnLa : 37.5491993619505
},
{
setSeqNo : 1,
plygnSeqNo : 7649,
plygnLo : 127.182927604777,
plygnLa : 37.5491878169223
},
{
setSeqNo : 1,
plygnSeqNo : 7650,
plygnLo : 127.183076020727,
plygnLa : 37.548632911765
},
{
setSeqNo : 1,
plygnSeqNo : 7651,
plygnLo : 127.182884525332,
plygnLa : 37.5482683058375
},
{
setSeqNo : 1,
plygnSeqNo : 7652,
plygnLo : 127.182819507828,
plygnLa : 37.5481433926876
},
{
setSeqNo : 1,
plygnSeqNo : 7653,
plygnLo : 127.182709051922,
plygnLa : 37.547943092226
},
{
setSeqNo : 1,
plygnSeqNo : 7654,
plygnLo : 127.182704220435,
plygnLa : 37.5479200150109
},
{
setSeqNo : 1,
plygnSeqNo : 7655,
plygnLo : 127.182703649153,
plygnLa : 37.5479036808039
},
{
setSeqNo : 1,
plygnSeqNo : 7656,
plygnLo : 127.182696377167,
plygnLa : 37.5478960973344
},
{
setSeqNo : 1,
plygnSeqNo : 7657,
plygnLo : 127.182676354711,
plygnLa : 37.547875847746
},
{
setSeqNo : 1,
plygnSeqNo : 7658,
plygnLo : 127.182673737298,
plygnLa : 37.5477477490574
},
{
setSeqNo : 1,
plygnSeqNo : 7659,
plygnLo : 127.182672953819,
plygnLa : 37.5476393427446
},
{
setSeqNo : 1,
plygnSeqNo : 7660,
plygnLo : 127.182669674197,
plygnLa : 37.5476027499105
},
{
setSeqNo : 1,
plygnSeqNo : 7661,
plygnLo : 127.182669993119,
plygnLa : 37.5475847286029
},
{
setSeqNo : 1,
plygnSeqNo : 7662,
plygnLo : 127.182656754106,
plygnLa : 37.5475244918741
},
{
setSeqNo : 1,
plygnSeqNo : 7663,
plygnLo : 127.182682491427,
plygnLa : 37.5474889804825
},
{
setSeqNo : 1,
plygnSeqNo : 7664,
plygnLo : 127.182695886397,
plygnLa : 37.5474734699609
},
{
setSeqNo : 1,
plygnSeqNo : 7665,
plygnLo : 127.182723141913,
plygnLa : 37.547410360268
},
{
setSeqNo : 1,
plygnSeqNo : 7666,
plygnLo : 127.182726629826,
plygnLa : 37.547173006182
},
{
setSeqNo : 1,
plygnSeqNo : 7667,
plygnLo : 127.182730232709,
plygnLa : 37.547053611516
},
{
setSeqNo : 1,
plygnSeqNo : 7668,
plygnLo : 127.182728835277,
plygnLa : 37.5469159331305
},
{
setSeqNo : 1,
plygnSeqNo : 7669,
plygnLo : 127.182745470018,
plygnLa : 37.5468458020083
},
{
setSeqNo : 1,
plygnSeqNo : 7670,
plygnLo : 127.182748269068,
plygnLa : 37.5468334081828
},
{
setSeqNo : 1,
plygnSeqNo : 7671,
plygnLo : 127.182759463664,
plygnLa : 37.5467835572534
},
{
setSeqNo : 1,
plygnSeqNo : 7672,
plygnLo : 127.182751169418,
plygnLa : 37.5467185277539
},
{
setSeqNo : 1,
plygnSeqNo : 7673,
plygnLo : 127.182724441351,
plygnLa : 37.5467042072106
},
{
setSeqNo : 1,
plygnSeqNo : 7674,
plygnLo : 127.182744185313,
plygnLa : 37.5466793992521
},
{
setSeqNo : 1,
plygnSeqNo : 7675,
plygnLo : 127.182754599951,
plygnLa : 37.5466019609051
},
{
setSeqNo : 1,
plygnSeqNo : 7676,
plygnLo : 127.182761072507,
plygnLa : 37.5464994633579
},
{
setSeqNo : 1,
plygnSeqNo : 7677,
plygnLo : 127.182795990217,
plygnLa : 37.5463898765988
},
{
setSeqNo : 1,
plygnSeqNo : 7678,
plygnLo : 127.182825413602,
plygnLa : 37.5463445021853
},
{
setSeqNo : 1,
plygnSeqNo : 7679,
plygnLo : 127.182971907744,
plygnLa : 37.5462412302954
},
{
setSeqNo : 1,
plygnSeqNo : 7680,
plygnLo : 127.183545865006,
plygnLa : 37.5457462092798
},
{
setSeqNo : 1,
plygnSeqNo : 7681,
plygnLo : 127.183794925632,
plygnLa : 37.5455743479931
},
{
setSeqNo : 1,
plygnSeqNo : 7682,
plygnLo : 127.183539170283,
plygnLa : 37.5451704324962
},
{
setSeqNo : 1,
plygnSeqNo : 7683,
plygnLo : 127.183137202284,
plygnLa : 37.5453563116731
},
{
setSeqNo : 1,
plygnSeqNo : 7684,
plygnLo : 127.182846544872,
plygnLa : 37.5455797547026
},
{
setSeqNo : 1,
plygnSeqNo : 7685,
plygnLo : 127.182744895748,
plygnLa : 37.5455143099201
},
{
setSeqNo : 1,
plygnSeqNo : 7686,
plygnLo : 127.182439931555,
plygnLa : 37.545601208446
},
{
setSeqNo : 1,
plygnSeqNo : 7687,
plygnLo : 127.182202429199,
plygnLa : 37.5457249004023
},
{
setSeqNo : 1,
plygnSeqNo : 7688,
plygnLo : 127.18196316651,
plygnLa : 37.5461507042471
},
{
setSeqNo : 1,
plygnSeqNo : 7689,
plygnLo : 127.181692825474,
plygnLa : 37.5464447858904
},
{
setSeqNo : 1,
plygnSeqNo : 7690,
plygnLo : 127.181256435985,
plygnLa : 37.5465797528594
},
{
setSeqNo : 1,
plygnSeqNo : 7691,
plygnLo : 127.179910535046,
plygnLa : 37.5465744682798
},
{
setSeqNo : 1,
plygnSeqNo : 7692,
plygnLo : 127.179712310804,
plygnLa : 37.5465682901481
},
{
setSeqNo : 1,
plygnSeqNo : 7693,
plygnLo : 127.179331280586,
plygnLa : 37.5465674595641
},
{
setSeqNo : 1,
plygnSeqNo : 7694,
plygnLo : 127.178417555196,
plygnLa : 37.5462796760412
},
{
setSeqNo : 1,
plygnSeqNo : 7695,
plygnLo : 127.178292284552,
plygnLa : 37.5463167407523
},
{
setSeqNo : 1,
plygnSeqNo : 7696,
plygnLo : 127.178261311755,
plygnLa : 37.5463015873703
},
{
setSeqNo : 1,
plygnSeqNo : 7697,
plygnLo : 127.177836763076,
plygnLa : 37.5461422964431
},
{
setSeqNo : 1,
plygnSeqNo : 7698,
plygnLo : 127.177623870355,
plygnLa : 37.5460620837206
},
{
setSeqNo : 1,
plygnSeqNo : 7699,
plygnLo : 127.177479994236,
plygnLa : 37.5460065532028
},
{
setSeqNo : 1,
plygnSeqNo : 7700,
plygnLo : 127.176793384878,
plygnLa : 37.5457544505517
},
{
setSeqNo : 1,
plygnSeqNo : 7701,
plygnLo : 127.176784239309,
plygnLa : 37.5456229735574
},
{
setSeqNo : 1,
plygnSeqNo : 7702,
plygnLo : 127.176799130653,
plygnLa : 37.5454875242959
},
{
setSeqNo : 1,
plygnSeqNo : 7703,
plygnLo : 127.176784496031,
plygnLa : 37.5454329270048
},
{
setSeqNo : 1,
plygnSeqNo : 7704,
plygnLo : 127.176749005073,
plygnLa : 37.5453777950938
},
{
setSeqNo : 1,
plygnSeqNo : 7705,
plygnLo : 127.176637526898,
plygnLa : 37.5453360002054
},
{
setSeqNo : 1,
plygnSeqNo : 7706,
plygnLo : 127.176586075326,
plygnLa : 37.5453372038486
},
{
setSeqNo : 1,
plygnSeqNo : 7707,
plygnLo : 127.176466528034,
plygnLa : 37.5454007288296
},
{
setSeqNo : 1,
plygnSeqNo : 7708,
plygnLo : 127.176410026277,
plygnLa : 37.5454337619959
},
{
setSeqNo : 1,
plygnSeqNo : 7709,
plygnLo : 127.176347723259,
plygnLa : 37.5454831207126
},
{
setSeqNo : 1,
plygnSeqNo : 7710,
plygnLo : 127.176287898049,
plygnLa : 37.5455316367662
},
{
setSeqNo : 1,
plygnSeqNo : 7711,
plygnLo : 127.176201024475,
plygnLa : 37.5455790680066
},
{
setSeqNo : 1,
plygnSeqNo : 7712,
plygnLo : 127.176086016347,
plygnLa : 37.5456195028479
},
{
setSeqNo : 1,
plygnSeqNo : 7713,
plygnLo : 127.175981383575,
plygnLa : 37.5456365508181
},
{
setSeqNo : 1,
plygnSeqNo : 7714,
plygnLo : 127.175938014926,
plygnLa : 37.5456183161138
},
{
setSeqNo : 1,
plygnSeqNo : 7715,
plygnLo : 127.175859104199,
plygnLa : 37.5455187556205
},
{
setSeqNo : 1,
plygnSeqNo : 7716,
plygnLo : 127.175768312582,
plygnLa : 37.5454043030608
},
{
setSeqNo : 1,
plygnSeqNo : 7717,
plygnLo : 127.175750843231,
plygnLa : 37.5453426631668
},
{
setSeqNo : 1,
plygnSeqNo : 7718,
plygnLo : 127.175744900384,
plygnLa : 37.5452933968535
},
{
setSeqNo : 1,
plygnSeqNo : 7719,
plygnLo : 127.175717467184,
plygnLa : 37.545208132814
},
{
setSeqNo : 1,
plygnSeqNo : 7720,
plygnLo : 127.175642016407,
plygnLa : 37.5452293542446
},
{
setSeqNo : 1,
plygnSeqNo : 7721,
plygnLo : 127.17547072372,
plygnLa : 37.5452405884644
},
{
setSeqNo : 1,
plygnSeqNo : 7722,
plygnLo : 127.175383290426,
plygnLa : 37.5452024267078
},
{
setSeqNo : 1,
plygnSeqNo : 7723,
plygnLo : 127.175169241188,
plygnLa : 37.5452308977857
},
{
setSeqNo : 1,
plygnSeqNo : 7724,
plygnLo : 127.175025009215,
plygnLa : 37.5452496960076
},
{
setSeqNo : 1,
plygnSeqNo : 7725,
plygnLo : 127.174807070055,
plygnLa : 37.5452750732657
},
{
setSeqNo : 1,
plygnSeqNo : 7726,
plygnLo : 127.174637650465,
plygnLa : 37.5452595535299
},
{
setSeqNo : 1,
plygnSeqNo : 7727,
plygnLo : 127.174477145167,
plygnLa : 37.5452780883848
},
{
setSeqNo : 1,
plygnSeqNo : 7728,
plygnLo : 127.174314709245,
plygnLa : 37.5452977515431
},
{
setSeqNo : 1,
plygnSeqNo : 7729,
plygnLo : 127.17420694153,
plygnLa : 37.5454113802796
},
{
setSeqNo : 1,
plygnSeqNo : 7730,
plygnLo : 127.17417263749,
plygnLa : 37.545561498596
},
{
setSeqNo : 1,
plygnSeqNo : 7731,
plygnLo : 127.174137975852,
plygnLa : 37.5457124664341
},
{
setSeqNo : 1,
plygnSeqNo : 7732,
plygnLo : 127.173938664115,
plygnLa : 37.5456161796341
},
{
setSeqNo : 1,
plygnSeqNo : 7733,
plygnLo : 127.173905745128,
plygnLa : 37.5456004607897
},
{
setSeqNo : 1,
plygnSeqNo : 7734,
plygnLo : 127.173905882717,
plygnLa : 37.545581881157
},
{
setSeqNo : 1,
plygnSeqNo : 7735,
plygnLo : 127.173808964589,
plygnLa : 37.5455678334624
},
{
setSeqNo : 1,
plygnSeqNo : 7736,
plygnLo : 127.173615457115,
plygnLa : 37.545539787156
},
{
setSeqNo : 1,
plygnSeqNo : 7737,
plygnLo : 127.173406897629,
plygnLa : 37.5455690943239
},
{
setSeqNo : 1,
plygnSeqNo : 7738,
plygnLo : 127.173205162063,
plygnLa : 37.5455696661835
},
{
setSeqNo : 1,
plygnSeqNo : 7739,
plygnLo : 127.173075169323,
plygnLa : 37.5455566299362
},
{
setSeqNo : 1,
plygnSeqNo : 7740,
plygnLo : 127.172482264894,
plygnLa : 37.5455245408493
},
{
setSeqNo : 1,
plygnSeqNo : 7741,
plygnLo : 127.172107092782,
plygnLa : 37.5455346604289
},
{
setSeqNo : 1,
plygnSeqNo : 7742,
plygnLo : 127.171788078643,
plygnLa : 37.5454346068512
},
{
setSeqNo : 1,
plygnSeqNo : 7743,
plygnLo : 127.171571736339,
plygnLa : 37.5453862011146
},
{
setSeqNo : 1,
plygnSeqNo : 7744,
plygnLo : 127.171513915459,
plygnLa : 37.5453074472623
},
{
setSeqNo : 1,
plygnSeqNo : 7745,
plygnLo : 127.171065291355,
plygnLa : 37.5451217054248
},
{
setSeqNo : 1,
plygnSeqNo : 7746,
plygnLo : 127.170740321375,
plygnLa : 37.5450438923507
},
{
setSeqNo : 1,
plygnSeqNo : 7747,
plygnLo : 127.170370130955,
plygnLa : 37.5449087162766
},
{
setSeqNo : 1,
plygnSeqNo : 7748,
plygnLo : 127.169989303449,
plygnLa : 37.5448340801686
},
{
setSeqNo : 1,
plygnSeqNo : 7749,
plygnLo : 127.16976362948,
plygnLa : 37.5448051195874
},
{
setSeqNo : 1,
plygnSeqNo : 7750,
plygnLo : 127.169617286237,
plygnLa : 37.5448267269882
},
{
setSeqNo : 1,
plygnSeqNo : 7751,
plygnLo : 127.169386885712,
plygnLa : 37.544896034586
},
{
setSeqNo : 1,
plygnSeqNo : 7752,
plygnLo : 127.168822720205,
plygnLa : 37.5451482752334
},
{
setSeqNo : 1,
plygnSeqNo : 7753,
plygnLo : 127.168248405012,
plygnLa : 37.5451231846022
},
{
setSeqNo : 1,
plygnSeqNo : 7754,
plygnLo : 127.168195288135,
plygnLa : 37.5450920033892
},
{
setSeqNo : 1,
plygnSeqNo : 7755,
plygnLo : 127.168170500976,
plygnLa : 37.5450793618466
},
{
setSeqNo : 1,
plygnSeqNo : 7756,
plygnLo : 127.167949815232,
plygnLa : 37.5450599678178
},
{
setSeqNo : 1,
plygnSeqNo : 7757,
plygnLo : 127.167586881714,
plygnLa : 37.5450883562787
},
{
setSeqNo : 1,
plygnSeqNo : 7758,
plygnLo : 127.16730351653,
plygnLa : 37.5451915205882
},
{
setSeqNo : 1,
plygnSeqNo : 7759,
plygnLo : 127.167138235666,
plygnLa : 37.5452094928678
},
{
setSeqNo : 1,
plygnSeqNo : 7760,
plygnLo : 127.167076726491,
plygnLa : 37.5452160488242
},
{
setSeqNo : 1,
plygnSeqNo : 7761,
plygnLo : 127.166978215895,
plygnLa : 37.5452026798159
},
{
setSeqNo : 1,
plygnSeqNo : 7762,
plygnLo : 127.166891767467,
plygnLa : 37.5451267763346
},
{
setSeqNo : 1,
plygnSeqNo : 7763,
plygnLo : 127.166845758504,
plygnLa : 37.5450299834959
},
{
setSeqNo : 1,
plygnSeqNo : 7764,
plygnLo : 127.166823908057,
plygnLa : 37.544984118512
},
{
setSeqNo : 1,
plygnSeqNo : 7765,
plygnLo : 127.166746459229,
plygnLa : 37.5448183891547
},
{
setSeqNo : 1,
plygnSeqNo : 7766,
plygnLo : 127.166800935425,
plygnLa : 37.5445888412756
},
{
setSeqNo : 1,
plygnSeqNo : 7767,
plygnLo : 127.16692375516,
plygnLa : 37.5443225973519
},
{
setSeqNo : 1,
plygnSeqNo : 7768,
plygnLo : 127.166916829411,
plygnLa : 37.5443062704478
},
{
setSeqNo : 1,
plygnSeqNo : 7769,
plygnLo : 127.166893943819,
plygnLa : 37.544273362294
},
{
setSeqNo : 1,
plygnSeqNo : 7770,
plygnLo : 127.166637352565,
plygnLa : 37.544252603042
},
{
setSeqNo : 1,
plygnSeqNo : 7771,
plygnLo : 127.166285634552,
plygnLa : 37.5443063164474
},
{
setSeqNo : 1,
plygnSeqNo : 7772,
plygnLo : 127.166166835369,
plygnLa : 37.544312670401
},
{
setSeqNo : 1,
plygnSeqNo : 7773,
plygnLo : 127.165794521958,
plygnLa : 37.5443331834411
},
{
setSeqNo : 1,
plygnSeqNo : 7774,
plygnLo : 127.165783575109,
plygnLa : 37.5443368565777
},
{
setSeqNo : 1,
plygnSeqNo : 7775,
plygnLo : 127.165689683998,
plygnLa : 37.5443341756639
},
{
setSeqNo : 1,
plygnSeqNo : 7776,
plygnLo : 127.165298725594,
plygnLa : 37.5443989137901
},
{
setSeqNo : 1,
plygnSeqNo : 7777,
plygnLo : 127.165253547589,
plygnLa : 37.5444367021989
},
{
setSeqNo : 1,
plygnSeqNo : 7778,
plygnLo : 127.165188422868,
plygnLa : 37.5444869140508
},
{
setSeqNo : 1,
plygnSeqNo : 7779,
plygnLo : 127.165197452506,
plygnLa : 37.5445753070763
},
{
setSeqNo : 1,
plygnSeqNo : 7780,
plygnLo : 127.16516822523,
plygnLa : 37.5446322273695
},
{
setSeqNo : 1,
plygnSeqNo : 7781,
plygnLo : 127.164885120684,
plygnLa : 37.5446945626383
},
{
setSeqNo : 1,
plygnSeqNo : 7782,
plygnLo : 127.164726871089,
plygnLa : 37.5446894283997
},
{
setSeqNo : 1,
plygnSeqNo : 7783,
plygnLo : 127.164574023758,
plygnLa : 37.5447324375365
},
{
setSeqNo : 1,
plygnSeqNo : 7784,
plygnLo : 127.164467394821,
plygnLa : 37.544809167951
},
{
setSeqNo : 1,
plygnSeqNo : 7785,
plygnLo : 127.164370402615,
plygnLa : 37.5448430898034
},
{
setSeqNo : 1,
plygnSeqNo : 7786,
plygnLo : 127.164241117586,
plygnLa : 37.5448252485911
},
{
setSeqNo : 1,
plygnSeqNo : 7787,
plygnLo : 127.164045553104,
plygnLa : 37.5449006963884
},
{
setSeqNo : 1,
plygnSeqNo : 7788,
plygnLo : 127.163914530021,
plygnLa : 37.5448952435157
},
{
setSeqNo : 1,
plygnSeqNo : 7789,
plygnLo : 127.163715547451,
plygnLa : 37.5449385949934
},
{
setSeqNo : 1,
plygnSeqNo : 7790,
plygnLo : 127.16348780664,
plygnLa : 37.5450157706513
},
{
setSeqNo : 1,
plygnSeqNo : 7791,
plygnLo : 127.163431769391,
plygnLa : 37.5450203520827
},
{
setSeqNo : 1,
plygnSeqNo : 7792,
plygnLo : 127.163358554962,
plygnLa : 37.5450136951418
},
{
setSeqNo : 1,
plygnSeqNo : 7793,
plygnLo : 127.163313115957,
plygnLa : 37.5450165781788
},
{
setSeqNo : 1,
plygnSeqNo : 7794,
plygnLo : 127.163281831624,
plygnLa : 37.5450180266263
},
{
setSeqNo : 1,
plygnSeqNo : 7795,
plygnLo : 127.163260786823,
plygnLa : 37.5450141178075
},
{
setSeqNo : 1,
plygnSeqNo : 7796,
plygnLo : 127.163234610372,
plygnLa : 37.5450116131709
},
{
setSeqNo : 1,
plygnSeqNo : 7797,
plygnLo : 127.163169844059,
plygnLa : 37.5449880506286
},
{
setSeqNo : 1,
plygnSeqNo : 7798,
plygnLo : 127.163162778546,
plygnLa : 37.5449914380652
},
{
setSeqNo : 1,
plygnSeqNo : 7799,
plygnLo : 127.16297936311,
plygnLa : 37.5447974186603
},
{
setSeqNo : 1,
plygnSeqNo : 7800,
plygnLo : 127.162914636473,
plygnLa : 37.5447074064093
},
{
setSeqNo : 1,
plygnSeqNo : 7801,
plygnLo : 127.162817294917,
plygnLa : 37.5445791485146
},
{
setSeqNo : 1,
plygnSeqNo : 7802,
plygnLo : 127.162822216592,
plygnLa : 37.5445676001935
},
{
setSeqNo : 1,
plygnSeqNo : 7803,
plygnLo : 127.162820261187,
plygnLa : 37.5445588731784
},
{
setSeqNo : 1,
plygnSeqNo : 7804,
plygnLo : 127.162744581593,
plygnLa : 37.5444739403923
},
{
setSeqNo : 1,
plygnSeqNo : 7805,
plygnLo : 127.162715254215,
plygnLa : 37.5444858101543
},
{
setSeqNo : 1,
plygnSeqNo : 7806,
plygnLo : 127.162591484464,
plygnLa : 37.5443178909723
},
{
setSeqNo : 1,
plygnSeqNo : 7807,
plygnLo : 127.16248059855,
plygnLa : 37.5441417810808
},
{
setSeqNo : 1,
plygnSeqNo : 7808,
plygnLo : 127.162180593698,
plygnLa : 37.5438271216248
},
{
setSeqNo : 1,
plygnSeqNo : 7809,
plygnLo : 127.161709516456,
plygnLa : 37.5434603288583
},
{
setSeqNo : 1,
plygnSeqNo : 7810,
plygnLo : 127.161262699859,
plygnLa : 37.5429490534489
},
{
setSeqNo : 1,
plygnSeqNo : 7811,
plygnLo : 127.16091699703,
plygnLa : 37.5425094490049
},
{
setSeqNo : 1,
plygnSeqNo : 7812,
plygnLo : 127.160839807691,
plygnLa : 37.5423783430998
},
{
setSeqNo : 1,
plygnSeqNo : 7813,
plygnLo : 127.160698915449,
plygnLa : 37.5421358325839
},
{
setSeqNo : 1,
plygnSeqNo : 7814,
plygnLo : 127.160535985233,
plygnLa : 37.5419220673885
},
{
setSeqNo : 1,
plygnSeqNo : 7815,
plygnLo : 127.16031046808,
plygnLa : 37.5416261686158
},
{
setSeqNo : 1,
plygnSeqNo : 7816,
plygnLo : 127.160095945885,
plygnLa : 37.5415149602421
},
{
setSeqNo : 1,
plygnSeqNo : 7817,
plygnLo : 127.159924015091,
plygnLa : 37.5413924305952
},
{
setSeqNo : 1,
plygnSeqNo : 7818,
plygnLo : 127.15972345783,
plygnLa : 37.5413569395922
},
{
setSeqNo : 1,
plygnSeqNo : 7819,
plygnLo : 127.159647458179,
plygnLa : 37.5412835557939
},
{
setSeqNo : 1,
plygnSeqNo : 7820,
plygnLo : 127.159645690363,
plygnLa : 37.5412765220566
},
{
setSeqNo : 1,
plygnSeqNo : 7821,
plygnLo : 127.159597170302,
plygnLa : 37.5410831528566
},
{
setSeqNo : 1,
plygnSeqNo : 7822,
plygnLo : 127.159583260526,
plygnLa : 37.5410279839089
},
{
setSeqNo : 1,
plygnSeqNo : 7823,
plygnLo : 127.159572923041,
plygnLa : 37.540987175219
},
{
setSeqNo : 1,
plygnSeqNo : 7824,
plygnLo : 127.159304641179,
plygnLa : 37.5408633589942
},
{
setSeqNo : 1,
plygnSeqNo : 7825,
plygnLo : 127.15925698142,
plygnLa : 37.5408144346915
},
{
setSeqNo : 1,
plygnSeqNo : 7826,
plygnLo : 127.159101565692,
plygnLa : 37.5407259487546
},
{
setSeqNo : 1,
plygnSeqNo : 7827,
plygnLo : 127.1589594375,
plygnLa : 37.5404842759162
},
{
setSeqNo : 1,
plygnSeqNo : 7828,
plygnLo : 127.158451564085,
plygnLa : 37.5400032022065
},
{
setSeqNo : 1,
plygnSeqNo : 7829,
plygnLo : 127.158247184951,
plygnLa : 37.5397500776161
},
{
setSeqNo : 1,
plygnSeqNo : 7830,
plygnLo : 127.158170150965,
plygnLa : 37.5396896424574
},
{
setSeqNo : 1,
plygnSeqNo : 7831,
plygnLo : 127.15797146651,
plygnLa : 37.5395339182112
},
{
setSeqNo : 1,
plygnSeqNo : 7832,
plygnLo : 127.157651443166,
plygnLa : 37.5392702419402
},
{
setSeqNo : 1,
plygnSeqNo : 7833,
plygnLo : 127.15739566486,
plygnLa : 37.5389518550476
},
{
setSeqNo : 1,
plygnSeqNo : 7834,
plygnLo : 127.157315414569,
plygnLa : 37.5386982757605
},
{
setSeqNo : 1,
plygnSeqNo : 7835,
plygnLo : 127.157174678241,
plygnLa : 37.5384413921565
},
{
setSeqNo : 1,
plygnSeqNo : 7836,
plygnLo : 127.156940817217,
plygnLa : 37.5383710344642
},
{
setSeqNo : 1,
plygnSeqNo : 7837,
plygnLo : 127.156941394412,
plygnLa : 37.5379672730425
},
{
setSeqNo : 1,
plygnSeqNo : 7838,
plygnLo : 127.156893564543,
plygnLa : 37.5378352859148
},
{
setSeqNo : 1,
plygnSeqNo : 7839,
plygnLo : 127.156869611264,
plygnLa : 37.5377967463655
},
{
setSeqNo : 1,
plygnSeqNo : 7840,
plygnLo : 127.156788888769,
plygnLa : 37.5376586037713
},
{
setSeqNo : 1,
plygnSeqNo : 7841,
plygnLo : 127.156711998124,
plygnLa : 37.5375781741626
},
{
setSeqNo : 1,
plygnSeqNo : 7842,
plygnLo : 127.156540582645,
plygnLa : 37.5374466291185
},
{
setSeqNo : 1,
plygnSeqNo : 7843,
plygnLo : 127.156503832118,
plygnLa : 37.5374514707758
},
{
setSeqNo : 1,
plygnSeqNo : 7844,
plygnLo : 127.156375378742,
plygnLa : 37.5374020758923
},
{
setSeqNo : 1,
plygnSeqNo : 7845,
plygnLo : 127.156338358811,
plygnLa : 37.5373700311765
},
{
setSeqNo : 1,
plygnSeqNo : 7846,
plygnLo : 127.156032811939,
plygnLa : 37.5373428435871
},
{
setSeqNo : 1,
plygnSeqNo : 7847,
plygnLo : 127.155940297986,
plygnLa : 37.5370597084838
},
{
setSeqNo : 1,
plygnSeqNo : 7848,
plygnLo : 127.155696750376,
plygnLa : 37.5367505903829
},
{
setSeqNo : 1,
plygnSeqNo : 7849,
plygnLo : 127.155261643732,
plygnLa : 37.5362161940613
},
{
setSeqNo : 1,
plygnSeqNo : 7850,
plygnLo : 127.15522877222,
plygnLa : 37.5361368415171
},
{
setSeqNo : 1,
plygnSeqNo : 7851,
plygnLo : 127.155048724631,
plygnLa : 37.5357496482425
},
{
setSeqNo : 1,
plygnSeqNo : 7852,
plygnLo : 127.154865300864,
plygnLa : 37.5353585145714
},
{
setSeqNo : 1,
plygnSeqNo : 7853,
plygnLo : 127.154526109066,
plygnLa : 37.5348693188859
},
{
setSeqNo : 1,
plygnSeqNo : 7854,
plygnLo : 127.154021376802,
plygnLa : 37.5345149256196
},
{
setSeqNo : 1,
plygnSeqNo : 7855,
plygnLo : 127.153816981487,
plygnLa : 37.5339715043078
},
{
setSeqNo : 1,
plygnSeqNo : 7856,
plygnLo : 127.153566737908,
plygnLa : 37.5336654896353
},
{
setSeqNo : 1,
plygnSeqNo : 7857,
plygnLo : 127.153756202093,
plygnLa : 37.532858288523
},
{
setSeqNo : 1,
plygnSeqNo : 7858,
plygnLo : 127.15380211107,
plygnLa : 37.532662541828
},
{
setSeqNo : 1,
plygnSeqNo : 7859,
plygnLo : 127.153848429879,
plygnLa : 37.5324006369823
},
{
setSeqNo : 1,
plygnSeqNo : 7860,
plygnLo : 127.153933549032,
plygnLa : 37.5319199007739
},
{
setSeqNo : 1,
plygnSeqNo : 7861,
plygnLo : 127.153725103749,
plygnLa : 37.5315623050939
},
{
setSeqNo : 1,
plygnSeqNo : 7862,
plygnLo : 127.15361817775,
plygnLa : 37.5314841735157
},
{
setSeqNo : 1,
plygnSeqNo : 7863,
plygnLo : 127.153376740516,
plygnLa : 37.5313310348007
},
{
setSeqNo : 1,
plygnSeqNo : 7864,
plygnLo : 127.153325229241,
plygnLa : 37.5310346112503
},
{
setSeqNo : 1,
plygnSeqNo : 7865,
plygnLo : 127.153338294016,
plygnLa : 37.5310230525438
},
{
setSeqNo : 1,
plygnSeqNo : 7866,
plygnLo : 127.15343211318,
plygnLa : 37.5309142544948
},
{
setSeqNo : 1,
plygnSeqNo : 7867,
plygnLo : 127.153539154793,
plygnLa : 37.5304371499237
},
{
setSeqNo : 1,
plygnSeqNo : 7868,
plygnLo : 127.153128932835,
plygnLa : 37.5299483295874
},
{
setSeqNo : 1,
plygnSeqNo : 7869,
plygnLo : 127.153290242323,
plygnLa : 37.5294689022884
},
{
setSeqNo : 1,
plygnSeqNo : 7870,
plygnLo : 127.153232324235,
plygnLa : 37.5292375282229
},
{
setSeqNo : 1,
plygnSeqNo : 7871,
plygnLo : 127.153163823038,
plygnLa : 37.529109233458
},
{
setSeqNo : 1,
plygnSeqNo : 7872,
plygnLo : 127.152779084565,
plygnLa : 37.5288025429187
},
{
setSeqNo : 1,
plygnSeqNo : 7873,
plygnLo : 127.152686976579,
plygnLa : 37.5285295425247
},
{
setSeqNo : 1,
plygnSeqNo : 7874,
plygnLo : 127.152348489581,
plygnLa : 37.528277985145
},
{
setSeqNo : 1,
plygnSeqNo : 7875,
plygnLo : 127.151637610145,
plygnLa : 37.5277047867663
},
{
setSeqNo : 1,
plygnSeqNo : 7876,
plygnLo : 127.151355967746,
plygnLa : 37.5274137270524
},
{
setSeqNo : 1,
plygnSeqNo : 7877,
plygnLo : 127.150782669961,
plygnLa : 37.5268572419059
},
{
setSeqNo : 1,
plygnSeqNo : 7878,
plygnLo : 127.150726151949,
plygnLa : 37.5267894602548
},
{
setSeqNo : 1,
plygnSeqNo : 7879,
plygnLo : 127.150402023643,
plygnLa : 37.5263728795854
},
{
setSeqNo : 1,
plygnSeqNo : 7880,
plygnLo : 127.149868748938,
plygnLa : 37.5262077052791
},
{
setSeqNo : 1,
plygnSeqNo : 7881,
plygnLo : 127.149479386296,
plygnLa : 37.525778536612
},
{
setSeqNo : 1,
plygnSeqNo : 7882,
plygnLo : 127.149455291212,
plygnLa : 37.5257509699271
},
{
setSeqNo : 1,
plygnSeqNo : 7883,
plygnLo : 127.149585612585,
plygnLa : 37.5253324109706
},
{
setSeqNo : 1,
plygnSeqNo : 7884,
plygnLo : 127.149595967115,
plygnLa : 37.5252938275288
},
{
setSeqNo : 1,
plygnSeqNo : 7885,
plygnLo : 127.149476293867,
plygnLa : 37.5250205787714
},
{
setSeqNo : 1,
plygnSeqNo : 7886,
plygnLo : 127.149235873529,
plygnLa : 37.5248299866446
},
{
setSeqNo : 1,
plygnSeqNo : 7887,
plygnLo : 127.149208526419,
plygnLa : 37.5247638521958
},
{
setSeqNo : 1,
plygnSeqNo : 7888,
plygnLo : 127.149025445262,
plygnLa : 37.524333567555
},
{
setSeqNo : 1,
plygnSeqNo : 7889,
plygnLo : 127.149022396454,
plygnLa : 37.5242220731393
},
{
setSeqNo : 1,
plygnSeqNo : 7890,
plygnLo : 127.149008936728,
plygnLa : 37.5241198892548
},
{
setSeqNo : 1,
plygnSeqNo : 7891,
plygnLo : 127.148595636691,
plygnLa : 37.5235612218989
},
{
setSeqNo : 1,
plygnSeqNo : 7892,
plygnLo : 127.148598451021,
plygnLa : 37.5231918102008
},
{
setSeqNo : 1,
plygnSeqNo : 7893,
plygnLo : 127.148179186509,
plygnLa : 37.5229223126233
},
{
setSeqNo : 1,
plygnSeqNo : 7894,
plygnLo : 127.147829596411,
plygnLa : 37.5223925729791
},
{
setSeqNo : 1,
plygnSeqNo : 7895,
plygnLo : 127.147797481575,
plygnLa : 37.522149903642
},
{
setSeqNo : 1,
plygnSeqNo : 7896,
plygnLo : 127.145932541413,
plygnLa : 37.5219562321712
},
{
setSeqNo : 1,
plygnSeqNo : 7897,
plygnLo : 127.145769004327,
plygnLa : 37.5219406639543
},
{
setSeqNo : 1,
plygnSeqNo : 7898,
plygnLo : 127.145753684485,
plygnLa : 37.5219394296907
},
{
setSeqNo : 1,
plygnSeqNo : 7899,
plygnLo : 127.14566577561,
plygnLa : 37.5219323480313
},
{
setSeqNo : 1,
plygnSeqNo : 7900,
plygnLo : 127.145642645423,
plygnLa : 37.5215812680222
},
{
setSeqNo : 1,
plygnSeqNo : 7901,
plygnLo : 127.14558978183,
plygnLa : 37.5214791228253
},
{
setSeqNo : 1,
plygnSeqNo : 7902,
plygnLo : 127.145543298721,
plygnLa : 37.5213899268292
},
{
setSeqNo : 1,
plygnSeqNo : 7903,
plygnLo : 127.145509433997,
plygnLa : 37.5213336564044
},
{
setSeqNo : 1,
plygnSeqNo : 7904,
plygnLo : 127.145486579144,
plygnLa : 37.5213077815653
},
{
setSeqNo : 1,
plygnSeqNo : 7905,
plygnLo : 127.145437826228,
plygnLa : 37.521232380771
},
{
setSeqNo : 1,
plygnSeqNo : 7906,
plygnLo : 127.145414377599,
plygnLa : 37.5211679356113
},
{
setSeqNo : 1,
plygnSeqNo : 7907,
plygnLo : 127.145390038311,
plygnLa : 37.5211051745195
},
{
setSeqNo : 1,
plygnSeqNo : 7908,
plygnLo : 127.145340042044,
plygnLa : 37.5210241458086
},
{
setSeqNo : 1,
plygnSeqNo : 7909,
plygnLo : 127.145271190853,
plygnLa : 37.5208795125502
},
{
setSeqNo : 1,
plygnSeqNo : 7910,
plygnLo : 127.145249669041,
plygnLa : 37.5208116743405
},
{
setSeqNo : 1,
plygnSeqNo : 7911,
plygnLo : 127.145239127822,
plygnLa : 37.5207539703371
},
{
setSeqNo : 1,
plygnSeqNo : 7912,
plygnLo : 127.145194602573,
plygnLa : 37.5206701236422
},
{
setSeqNo : 1,
plygnSeqNo : 7913,
plygnLo : 127.145147379223,
plygnLa : 37.5205600879308
},
{
setSeqNo : 1,
plygnSeqNo : 7914,
plygnLo : 127.145131390149,
plygnLa : 37.5205164628355
},
{
setSeqNo : 1,
plygnSeqNo : 7915,
plygnLo : 127.145122295327,
plygnLa : 37.5204745242947
},
{
setSeqNo : 1,
plygnSeqNo : 7916,
plygnLo : 127.145111768701,
plygnLa : 37.5204244150849
},
{
setSeqNo : 1,
plygnSeqNo : 7917,
plygnLo : 127.145077773739,
plygnLa : 37.5203045170128
},
{
setSeqNo : 1,
plygnSeqNo : 7918,
plygnLo : 127.145056863244,
plygnLa : 37.5202718805849
},
{
setSeqNo : 1,
plygnSeqNo : 7919,
plygnLo : 127.145009002498,
plygnLa : 37.5202009857784
},
{
setSeqNo : 1,
plygnSeqNo : 7920,
plygnLo : 127.144977769418,
plygnLa : 37.5201354223346
},
{
setSeqNo : 1,
plygnSeqNo : 7921,
plygnLo : 127.144950600129,
plygnLa : 37.52007153694
},
{
setSeqNo : 1,
plygnSeqNo : 7922,
plygnLo : 127.144914538285,
plygnLa : 37.5199719043788
},
{
setSeqNo : 1,
plygnSeqNo : 7923,
plygnLo : 127.144885220334,
plygnLa : 37.519895923601
},
{
setSeqNo : 1,
plygnSeqNo : 7924,
plygnLo : 127.1448441868,
plygnLa : 37.5197870077586
},
{
setSeqNo : 1,
plygnSeqNo : 7925,
plygnLo : 127.144804561122,
plygnLa : 37.5196744294112
},
{
setSeqNo : 1,
plygnSeqNo : 7926,
plygnLo : 127.144785903199,
plygnLa : 37.5196246186482
},
{
setSeqNo : 1,
plygnSeqNo : 7927,
plygnLo : 127.144801043417,
plygnLa : 37.5195913715478
},
{
setSeqNo : 1,
plygnSeqNo : 7928,
plygnLo : 127.144792685644,
plygnLa : 37.5195688575457
},
{
setSeqNo : 1,
plygnSeqNo : 7929,
plygnLo : 127.144803045536,
plygnLa : 37.5195319673052
},
{
setSeqNo : 1,
plygnSeqNo : 7930,
plygnLo : 127.144787038753,
plygnLa : 37.5194790523383
},
{
setSeqNo : 1,
plygnSeqNo : 7931,
plygnLo : 127.144797914685,
plygnLa : 37.5194339813284
},
{
setSeqNo : 1,
plygnSeqNo : 7932,
plygnLo : 127.144800659093,
plygnLa : 37.5193897743489
},
{
setSeqNo : 1,
plygnSeqNo : 7933,
plygnLo : 127.14482673119,
plygnLa : 37.5192543149354
},
{
setSeqNo : 1,
plygnSeqNo : 7934,
plygnLo : 127.144829882577,
plygnLa : 37.5191447859407
},
{
setSeqNo : 1,
plygnSeqNo : 7935,
plygnLo : 127.144841480036,
plygnLa : 37.5191112635584
},
{
setSeqNo : 1,
plygnSeqNo : 7936,
plygnLo : 127.144837655152,
plygnLa : 37.5188677205653
},
{
setSeqNo : 1,
plygnSeqNo : 7937,
plygnLo : 127.144804956013,
plygnLa : 37.5187745606293
},
{
setSeqNo : 1,
plygnSeqNo : 7938,
plygnLo : 127.144862788134,
plygnLa : 37.5186066814182
},
{
setSeqNo : 1,
plygnSeqNo : 7939,
plygnLo : 127.14488468089,
plygnLa : 37.5185024725577
},
{
setSeqNo : 1,
plygnSeqNo : 7940,
plygnLo : 127.144902316816,
plygnLa : 37.5183901153329
},
{
setSeqNo : 1,
plygnSeqNo : 7941,
plygnLo : 127.144886366206,
plygnLa : 37.5183664826141
},
{
setSeqNo : 1,
plygnSeqNo : 7942,
plygnLo : 127.144875170331,
plygnLa : 37.5182437361155
},
{
setSeqNo : 1,
plygnSeqNo : 7943,
plygnLo : 127.144870001808,
plygnLa : 37.5181313966953
},
{
setSeqNo : 1,
plygnSeqNo : 7944,
plygnLo : 127.144827280691,
plygnLa : 37.5179737735072
},
{
setSeqNo : 1,
plygnSeqNo : 7945,
plygnLo : 127.144855660586,
plygnLa : 37.5177476448065
},
{
setSeqNo : 1,
plygnSeqNo : 7946,
plygnLo : 127.144913324525,
plygnLa : 37.5175873691542
},
{
setSeqNo : 1,
plygnSeqNo : 7947,
plygnLo : 127.144969026986,
plygnLa : 37.5174124525843
},
{
setSeqNo : 1,
plygnSeqNo : 7948,
plygnLo : 127.145011241705,
plygnLa : 37.5173118867636
},
{
setSeqNo : 1,
plygnSeqNo : 7949,
plygnLo : 127.145083029494,
plygnLa : 37.5171439811247
},
{
setSeqNo : 1,
plygnSeqNo : 7950,
plygnLo : 127.145071600621,
plygnLa : 37.5170817709078
},
{
setSeqNo : 1,
plygnSeqNo : 7951,
plygnLo : 127.1450724241,
plygnLa : 37.5169570469834
},
{
setSeqNo : 1,
plygnSeqNo : 7952,
plygnLo : 127.145090487047,
plygnLa : 37.5168857819549
},
{
setSeqNo : 1,
plygnSeqNo : 7953,
plygnLo : 127.145093821408,
plygnLa : 37.516872262778
},
{
setSeqNo : 1,
plygnSeqNo : 7954,
plygnLo : 127.145080926497,
plygnLa : 37.5168725662216
},
{
setSeqNo : 1,
plygnSeqNo : 7955,
plygnLo : 127.145091986232,
plygnLa : 37.5168353787613
},
{
setSeqNo : 1,
plygnSeqNo : 7956,
plygnLo : 127.145112306875,
plygnLa : 37.5168331110504
},
{
setSeqNo : 1,
plygnSeqNo : 7957,
plygnLo : 127.14512178201,
plygnLa : 37.5167950859044
},
{
setSeqNo : 1,
plygnSeqNo : 7958,
plygnLo : 127.145122821018,
plygnLa : 37.5167883266286
},
{
setSeqNo : 1,
plygnSeqNo : 7959,
plygnLo : 127.145265360536,
plygnLa : 37.5166437153548
},
{
setSeqNo : 1,
plygnSeqNo : 7960,
plygnLo : 127.145328907426,
plygnLa : 37.5166075888362
},
{
setSeqNo : 1,
plygnSeqNo : 7961,
plygnLo : 127.145389706319,
plygnLa : 37.5165137574433
},
{
setSeqNo : 1,
plygnSeqNo : 7962,
plygnLo : 127.145434087973,
plygnLa : 37.5164289557994
},
{
setSeqNo : 1,
plygnSeqNo : 7963,
plygnLo : 127.145444322192,
plygnLa : 37.5163332132058
},
{
setSeqNo : 1,
plygnSeqNo : 7964,
plygnLo : 127.145433976187,
plygnLa : 37.5161885068776
},
{
setSeqNo : 1,
plygnSeqNo : 7965,
plygnLo : 127.145429292641,
plygnLa : 37.516140363819
},
{
setSeqNo : 1,
plygnSeqNo : 7966,
plygnLo : 127.145439214792,
plygnLa : 37.5160651732003
},
{
setSeqNo : 1,
plygnSeqNo : 7967,
plygnLo : 127.14531785831,
plygnLa : 37.5160070352283
},
{
setSeqNo : 1,
plygnSeqNo : 7968,
plygnLo : 127.145197898871,
plygnLa : 37.5159348225337
},
{
setSeqNo : 1,
plygnSeqNo : 7969,
plygnLo : 127.145108584948,
plygnLa : 37.5159053700482
},
{
setSeqNo : 1,
plygnSeqNo : 7970,
plygnLo : 127.145024018521,
plygnLa : 37.5158621065861
},
{
setSeqNo : 1,
plygnSeqNo : 7971,
plygnLo : 127.144944507835,
plygnLa : 37.5157777348235
},
{
setSeqNo : 1,
plygnSeqNo : 7972,
plygnLo : 127.144899837345,
plygnLa : 37.5157105030369
},
{
setSeqNo : 1,
plygnSeqNo : 7973,
plygnLo : 127.144854347521,
plygnLa : 37.5156784561291
},
{
setSeqNo : 1,
plygnSeqNo : 7974,
plygnLo : 127.144754431832,
plygnLa : 37.5156459159848
},
{
setSeqNo : 1,
plygnSeqNo : 7975,
plygnLo : 127.144603599313,
plygnLa : 37.515606680222
},
{
setSeqNo : 1,
plygnSeqNo : 7976,
plygnLo : 127.144507833077,
plygnLa : 37.515614958909
},
{
setSeqNo : 1,
plygnSeqNo : 7977,
plygnLo : 127.144444733458,
plygnLa : 37.5156122251026
},
{
setSeqNo : 1,
plygnSeqNo : 7978,
plygnLo : 127.144290283064,
plygnLa : 37.5156267730082
},
{
setSeqNo : 1,
plygnSeqNo : 7979,
plygnLo : 127.144121161755,
plygnLa : 37.5156340134771
},
{
setSeqNo : 1,
plygnSeqNo : 7980,
plygnLo : 127.14398205001,
plygnLa : 37.5156248925863
},
{
setSeqNo : 1,
plygnSeqNo : 7981,
plygnLo : 127.143882754037,
plygnLa : 37.5156396441515
},
{
setSeqNo : 1,
plygnSeqNo : 7982,
plygnLo : 127.143647457146,
plygnLa : 37.5156098080945
},
{
setSeqNo : 1,
plygnSeqNo : 7983,
plygnLo : 127.143374164688,
plygnLa : 37.5155780342193
},
{
setSeqNo : 1,
plygnSeqNo : 7984,
plygnLo : 127.143053249091,
plygnLa : 37.5155995372104
},
{
setSeqNo : 1,
plygnSeqNo : 7985,
plygnLo : 127.1428742209,
plygnLa : 37.5156025730946
},
{
setSeqNo : 1,
plygnSeqNo : 7986,
plygnLo : 127.142624627366,
plygnLa : 37.5155842828058
},
{
setSeqNo : 1,
plygnSeqNo : 7987,
plygnLo : 127.142414203964,
plygnLa : 37.515620295042
},
{
setSeqNo : 1,
plygnSeqNo : 7988,
plygnLo : 127.142136259861,
plygnLa : 37.5156532866981
},
{
setSeqNo : 1,
plygnSeqNo : 7989,
plygnLo : 127.142045908312,
plygnLa : 37.5156365019248
},
{
setSeqNo : 1,
plygnSeqNo : 7990,
plygnLo : 127.141829962277,
plygnLa : 37.5156530833698
},
{
setSeqNo : 1,
plygnSeqNo : 7991,
plygnLo : 127.141745658803,
plygnLa : 37.5156461467209
},
{
setSeqNo : 1,
plygnSeqNo : 7992,
plygnLo : 127.141704918897,
plygnLa : 37.5155994604132
},
{
setSeqNo : 1,
plygnSeqNo : 7993,
plygnLo : 127.141186620772,
plygnLa : 37.515547699393
},
{
setSeqNo : 1,
plygnSeqNo : 7994,
plygnLo : 127.140808459736,
plygnLa : 37.5155754546773
},
{
setSeqNo : 1,
plygnSeqNo : 7995,
plygnLo : 127.140614430128,
plygnLa : 37.5155892001756
},
{
setSeqNo : 1,
plygnSeqNo : 7996,
plygnLo : 127.140615588733,
plygnLa : 37.5155486529688
},
{
setSeqNo : 1,
plygnSeqNo : 7997,
plygnLo : 127.140754661896,
plygnLa : 37.5154471267834
},
{
setSeqNo : 1,
plygnSeqNo : 7998,
plygnLo : 127.140946857782,
plygnLa : 37.515298804742
},
{
setSeqNo : 1,
plygnSeqNo : 7999,
plygnLo : 127.141175192957,
plygnLa : 37.515102288779
},
{
setSeqNo : 1,
plygnSeqNo : 8000,
plygnLo : 127.141209720579,
plygnLa : 37.515044799947
},
{
setSeqNo : 1,
plygnSeqNo : 8001,
plygnLo : 127.141371291809,
plygnLa : 37.514968024228
},
{
setSeqNo : 1,
plygnSeqNo : 8002,
plygnLo : 127.141545130151,
plygnLa : 37.5149306605901
},
{
setSeqNo : 1,
plygnSeqNo : 8003,
plygnLo : 127.141668417619,
plygnLa : 37.5148925018771
},
{
setSeqNo : 1,
plygnSeqNo : 8004,
plygnLo : 127.141766899404,
plygnLa : 37.5148169277196
},
{
setSeqNo : 1,
plygnSeqNo : 8005,
plygnLo : 127.142002129994,
plygnLa : 37.5147169696345
},
{
setSeqNo : 1,
plygnSeqNo : 8006,
plygnLo : 127.142105235586,
plygnLa : 37.5146605344948
},
{
setSeqNo : 1,
plygnSeqNo : 8007,
plygnLo : 127.14220774724,
plygnLa : 37.514568907901
},
{
setSeqNo : 1,
plygnSeqNo : 8008,
plygnLo : 127.142335199284,
plygnLa : 37.5144907660093
},
{
setSeqNo : 1,
plygnSeqNo : 8009,
plygnLo : 127.142571078397,
plygnLa : 37.5143634978268
},
{
setSeqNo : 1,
plygnSeqNo : 8010,
plygnLo : 127.142583271876,
plygnLa : 37.5143634841113
},
{
setSeqNo : 1,
plygnSeqNo : 8011,
plygnLo : 127.142594764348,
plygnLa : 37.5143634699238
},
{
setSeqNo : 1,
plygnSeqNo : 8012,
plygnLo : 127.142605699912,
plygnLa : 37.5143566999025
},
{
setSeqNo : 1,
plygnSeqNo : 8013,
plygnLo : 127.142642069434,
plygnLa : 37.5143346973584
},
{
setSeqNo : 1,
plygnSeqNo : 8014,
plygnLo : 127.142725493008,
plygnLa : 37.514241958475
},
{
setSeqNo : 1,
plygnSeqNo : 8015,
plygnLo : 127.142827709979,
plygnLa : 37.5141810181613
},
{
setSeqNo : 1,
plygnSeqNo : 8016,
plygnLo : 127.142845357414,
plygnLa : 37.514170581882
},
{
setSeqNo : 1,
plygnSeqNo : 8017,
plygnLo : 127.142919095034,
plygnLa : 37.5140986938284
},
{
setSeqNo : 1,
plygnSeqNo : 8018,
plygnLo : 127.14303016893,
plygnLa : 37.5140453484775
},
{
setSeqNo : 1,
plygnSeqNo : 8019,
plygnLo : 127.143112098555,
plygnLa : 37.5140058314704
},
{
setSeqNo : 1,
plygnSeqNo : 8020,
plygnLo : 127.143325561476,
plygnLa : 37.513899429306
},
{
setSeqNo : 1,
plygnSeqNo : 8021,
plygnLo : 127.143429984176,
plygnLa : 37.5138807166681
},
{
setSeqNo : 1,
plygnSeqNo : 8022,
plygnLo : 127.143394617212,
plygnLa : 37.5138700641388
},
{
setSeqNo : 1,
plygnSeqNo : 8023,
plygnLo : 127.143398911153,
plygnLa : 37.5137123842134
},
{
setSeqNo : 1,
plygnSeqNo : 8024,
plygnLo : 127.143372715116,
plygnLa : 37.5136949535024
},
{
setSeqNo : 1,
plygnSeqNo : 8025,
plygnLo : 127.143402372346,
plygnLa : 37.5136774669621
},
{
setSeqNo : 1,
plygnSeqNo : 8026,
plygnLo : 127.143433006891,
plygnLa : 37.5136135119392
},
{
setSeqNo : 1,
plygnSeqNo : 8027,
plygnLo : 127.143424278118,
plygnLa : 37.5135735378003
},
{
setSeqNo : 1,
plygnSeqNo : 8028,
plygnLo : 127.143403005513,
plygnLa : 37.5135454067551
},
{
setSeqNo : 1,
plygnSeqNo : 8029,
plygnLo : 127.143372355529,
plygnLa : 37.5135046198805
},
{
setSeqNo : 1,
plygnSeqNo : 8030,
plygnLo : 127.143363070236,
plygnLa : 37.5134514185338
},
{
setSeqNo : 1,
plygnSeqNo : 8031,
plygnLo : 127.143366754165,
plygnLa : 37.5134376193287
},
{
setSeqNo : 1,
plygnSeqNo : 8032,
plygnLo : 127.143406754222,
plygnLa : 37.5132787703045
},
{
setSeqNo : 1,
plygnSeqNo : 8033,
plygnLo : 127.143424285186,
plygnLa : 37.5132066698599
},
{
setSeqNo : 1,
plygnSeqNo : 8034,
plygnLo : 127.143414438868,
plygnLa : 37.513137693019
},
{
setSeqNo : 1,
plygnSeqNo : 8035,
plygnLo : 127.143467649117,
plygnLa : 37.5130571064342
},
{
setSeqNo : 1,
plygnSeqNo : 8036,
plygnLo : 127.143474791832,
plygnLa : 37.5129047742553
},
{
setSeqNo : 1,
plygnSeqNo : 8037,
plygnLo : 127.143528400252,
plygnLa : 37.5126572155006
},
{
setSeqNo : 1,
plygnSeqNo : 8038,
plygnLo : 127.142884713294,
plygnLa : 37.5127337253407
},
{
setSeqNo : 1,
plygnSeqNo : 8039,
plygnLo : 127.142693058495,
plygnLa : 37.5126948252774
},
{
setSeqNo : 1,
plygnSeqNo : 8040,
plygnLo : 127.142595604465,
plygnLa : 37.5126529817172
},
{
setSeqNo : 1,
plygnSeqNo : 8041,
plygnLo : 127.142211335868,
plygnLa : 37.5125281481564
},
{
setSeqNo : 1,
plygnSeqNo : 8042,
plygnLo : 127.14207521696,
plygnLa : 37.5125069105129
},
{
setSeqNo : 1,
plygnSeqNo : 8043,
plygnLo : 127.141916427488,
plygnLa : 37.5124603660122
},
{
setSeqNo : 1,
plygnSeqNo : 8044,
plygnLo : 127.141583753966,
plygnLa : 37.5124283793623
},
{
setSeqNo : 1,
plygnSeqNo : 8045,
plygnLo : 127.141510747823,
plygnLa : 37.5124188878399
},
{
setSeqNo : 1,
plygnSeqNo : 8046,
plygnLo : 127.141439670929,
plygnLa : 37.5124006724029
},
{
setSeqNo : 1,
plygnSeqNo : 8047,
plygnLo : 127.141387456271,
plygnLa : 37.5123559630169
},
{
setSeqNo : 1,
plygnSeqNo : 8048,
plygnLo : 127.141278029859,
plygnLa : 37.5121528103953
},
{
setSeqNo : 1,
plygnSeqNo : 8049,
plygnLo : 127.141237739022,
plygnLa : 37.5116775824972
},
{
setSeqNo : 1,
plygnSeqNo : 8050,
plygnLo : 127.14119111594,
plygnLa : 37.5115072860192
},
{
setSeqNo : 1,
plygnSeqNo : 8051,
plygnLo : 127.141150182837,
plygnLa : 37.5112590026068
},
{
setSeqNo : 1,
plygnSeqNo : 8052,
plygnLo : 127.141105046094,
plygnLa : 37.5111272846856
},
{
setSeqNo : 1,
plygnSeqNo : 8053,
plygnLo : 127.141123168021,
plygnLa : 37.5110858718883
},
{
setSeqNo : 1,
plygnSeqNo : 8054,
plygnLo : 127.141220467314,
plygnLa : 37.5110469062491
},
{
setSeqNo : 1,
plygnSeqNo : 8055,
plygnLo : 127.141219478412,
plygnLa : 37.5109891802018
},
{
setSeqNo : 1,
plygnSeqNo : 8056,
plygnLo : 127.141217234133,
plygnLa : 37.5108230648342
},
{
setSeqNo : 1,
plygnSeqNo : 8057,
plygnLo : 127.141172929743,
plygnLa : 37.5107614541065
},
{
setSeqNo : 1,
plygnSeqNo : 8058,
plygnLo : 127.140946938307,
plygnLa : 37.5103982311118
},
{
setSeqNo : 1,
plygnSeqNo : 8059,
plygnLo : 127.140800552095,
plygnLa : 37.5103708068486
},
{
setSeqNo : 1,
plygnSeqNo : 8060,
plygnLo : 127.140720459637,
plygnLa : 37.5103500713958
},
{
setSeqNo : 1,
plygnSeqNo : 8061,
plygnLo : 127.14065679027,
plygnLa : 37.5103245209041
},
{
setSeqNo : 1,
plygnSeqNo : 8062,
plygnLo : 127.140551510773,
plygnLa : 37.510256223342
},
{
setSeqNo : 1,
plygnSeqNo : 8063,
plygnLo : 127.140447723017,
plygnLa : 37.510230721743
},
{
setSeqNo : 1,
plygnSeqNo : 8064,
plygnLo : 127.140343092851,
plygnLa : 37.5102252131224
},
{
setSeqNo : 1,
plygnSeqNo : 8065,
plygnLo : 127.140343943863,
plygnLa : 37.5102077601066
},
{
setSeqNo : 1,
plygnSeqNo : 8066,
plygnLo : 127.140366913478,
plygnLa : 37.5101091815736
},
{
setSeqNo : 1,
plygnSeqNo : 8067,
plygnLo : 127.140355328581,
plygnLa : 37.5100531716166
},
{
setSeqNo : 1,
plygnSeqNo : 8068,
plygnLo : 127.140292218283,
plygnLa : 37.5099499105444
},
{
setSeqNo : 1,
plygnSeqNo : 8069,
plygnLo : 127.140237785107,
plygnLa : 37.5098539554081
},
{
setSeqNo : 1,
plygnSeqNo : 8070,
plygnLo : 127.140243025889,
plygnLa : 37.5097280983297
},
{
setSeqNo : 1,
plygnSeqNo : 8071,
plygnLo : 127.140244750796,
plygnLa : 37.5096087129203
},
{
setSeqNo : 1,
plygnSeqNo : 8072,
plygnLo : 127.140245420363,
plygnLa : 37.5095861880973
},
{
setSeqNo : 1,
plygnSeqNo : 8073,
plygnLo : 127.140237179173,
plygnLa : 37.5095262261503
},
{
setSeqNo : 1,
plygnSeqNo : 8074,
plygnLo : 127.140200675859,
plygnLa : 37.5093776050264
},
{
setSeqNo : 1,
plygnSeqNo : 8075,
plygnLo : 127.140178110623,
plygnLa : 37.5093089318773
},
{
setSeqNo : 1,
plygnSeqNo : 8076,
plygnLo : 127.140170028713,
plygnLa : 37.5092388245997
},
{
setSeqNo : 1,
plygnSeqNo : 8077,
plygnLo : 127.140138513658,
plygnLa : 37.5091141285787
},
{
setSeqNo : 1,
plygnSeqNo : 8078,
plygnLo : 127.140120310308,
plygnLa : 37.5091104911138
},
{
setSeqNo : 1,
plygnSeqNo : 8079,
plygnLo : 127.140117374758,
plygnLa : 37.5090530561887
},
{
setSeqNo : 1,
plygnSeqNo : 8080,
plygnLo : 127.140085276556,
plygnLa : 37.5089970612666
},
{
setSeqNo : 1,
plygnSeqNo : 8081,
plygnLo : 127.140063546065,
plygnLa : 37.508904454294
},
{
setSeqNo : 1,
plygnSeqNo : 8082,
plygnLo : 127.140010444906,
plygnLa : 37.5087637359933
},
{
setSeqNo : 1,
plygnSeqNo : 8083,
plygnLo : 127.139965862269,
plygnLa : 37.5086413162101
},
{
setSeqNo : 1,
plygnSeqNo : 8084,
plygnLo : 127.139934903121,
plygnLa : 37.508523934921
},
{
setSeqNo : 1,
plygnSeqNo : 8085,
plygnLo : 127.140013895366,
plygnLa : 37.5085249689945
},
{
setSeqNo : 1,
plygnSeqNo : 8086,
plygnLo : 127.140061900213,
plygnLa : 37.5084908455309
},
{
setSeqNo : 1,
plygnSeqNo : 8087,
plygnLo : 127.14009949092,
plygnLa : 37.5084643302081
},
{
setSeqNo : 1,
plygnSeqNo : 8088,
plygnLo : 127.140309317136,
plygnLa : 37.508305003105
},
{
setSeqNo : 1,
plygnSeqNo : 8089,
plygnLo : 127.140320569832,
plygnLa : 37.5082740233855
},
{
setSeqNo : 1,
plygnSeqNo : 8090,
plygnLo : 127.140380880132,
plygnLa : 37.5081058614929
},
{
setSeqNo : 1,
plygnSeqNo : 8091,
plygnLo : 127.140381614609,
plygnLa : 37.5080258877631
},
{
setSeqNo : 1,
plygnSeqNo : 8092,
plygnLo : 127.140325661349,
plygnLa : 37.5078730741708
},
{
setSeqNo : 1,
plygnSeqNo : 8093,
plygnLo : 127.140314966627,
plygnLa : 37.5078260623534
},
{
setSeqNo : 1,
plygnSeqNo : 8094,
plygnLo : 127.140347176883,
plygnLa : 37.5077519731068
},
{
setSeqNo : 1,
plygnSeqNo : 8095,
plygnLo : 127.14050972102,
plygnLa : 37.5076400035464
},
{
setSeqNo : 1,
plygnSeqNo : 8096,
plygnLo : 127.140545251663,
plygnLa : 37.5076436194109
},
{
setSeqNo : 1,
plygnSeqNo : 8097,
plygnLo : 127.140567345304,
plygnLa : 37.5076458465183
},
{
setSeqNo : 1,
plygnSeqNo : 8098,
plygnLo : 127.140687414531,
plygnLa : 37.507592771631
},
{
setSeqNo : 1,
plygnSeqNo : 8099,
plygnLo : 127.140751486845,
plygnLa : 37.5075501865293
},
{
setSeqNo : 1,
plygnSeqNo : 8100,
plygnLo : 127.140884882235,
plygnLa : 37.5074379632988
},
{
setSeqNo : 1,
plygnSeqNo : 8101,
plygnLo : 127.141143065267,
plygnLa : 37.5071575017599
},
{
setSeqNo : 1,
plygnSeqNo : 8102,
plygnLo : 127.141256525346,
plygnLa : 37.5070605099732
},
{
setSeqNo : 1,
plygnSeqNo : 8103,
plygnLo : 127.141353501753,
plygnLa : 37.506948340084
},
{
setSeqNo : 1,
plygnSeqNo : 8104,
plygnLo : 127.141479541732,
plygnLa : 37.5067792520843
},
{
setSeqNo : 1,
plygnSeqNo : 8105,
plygnLo : 127.141516696755,
plygnLa : 37.5067085345078
},
{
setSeqNo : 1,
plygnSeqNo : 8106,
plygnLo : 127.141513147797,
plygnLa : 37.506702628911
},
{
setSeqNo : 1,
plygnSeqNo : 8107,
plygnLo : 127.141507132224,
plygnLa : 37.5066975625046
},
{
setSeqNo : 1,
plygnSeqNo : 8108,
plygnLo : 127.141425516217,
plygnLa : 37.5066171374398
},
{
setSeqNo : 1,
plygnSeqNo : 8109,
plygnLo : 127.141336242082,
plygnLa : 37.5065043382136
},
{
setSeqNo : 1,
plygnSeqNo : 8110,
plygnLo : 127.141268573565,
plygnLa : 37.5064191041894
},
{
setSeqNo : 1,
plygnSeqNo : 8111,
plygnLo : 127.141177909248,
plygnLa : 37.506319255484
},
{
setSeqNo : 1,
plygnSeqNo : 8112,
plygnLo : 127.140997195641,
plygnLa : 37.506164326305
},
{
setSeqNo : 1,
plygnSeqNo : 8113,
plygnLo : 127.140812897247,
plygnLa : 37.5059790013184
},
{
setSeqNo : 1,
plygnSeqNo : 8114,
plygnLo : 127.140895036778,
plygnLa : 37.5058679639824
},
{
setSeqNo : 1,
plygnSeqNo : 8115,
plygnLo : 127.140962725179,
plygnLa : 37.5057755315536
},
{
setSeqNo : 1,
plygnSeqNo : 8116,
plygnLo : 127.141044292674,
plygnLa : 37.5056431059478
},
{
setSeqNo : 1,
plygnSeqNo : 8117,
plygnLo : 127.141012194979,
plygnLa : 37.5054846232227
},
{
setSeqNo : 1,
plygnSeqNo : 8118,
plygnLo : 127.141048445738,
plygnLa : 37.5054071477717
},
{
setSeqNo : 1,
plygnSeqNo : 8119,
plygnLo : 127.141087173147,
plygnLa : 37.5054206180711
},
{
setSeqNo : 1,
plygnSeqNo : 8120,
plygnLo : 127.141131961134,
plygnLa : 37.505464208626
},
{
setSeqNo : 1,
plygnSeqNo : 8121,
plygnLo : 127.141194836514,
plygnLa : 37.5054430143033
},
{
setSeqNo : 1,
plygnSeqNo : 8122,
plygnLo : 127.141202778229,
plygnLa : 37.5054385008116
},
{
setSeqNo : 1,
plygnSeqNo : 8123,
plygnLo : 127.141250790892,
plygnLa : 37.5054097198954
},
{
setSeqNo : 1,
plygnSeqNo : 8124,
plygnLo : 127.141343127757,
plygnLa : 37.5053640024778
},
{
setSeqNo : 1,
plygnSeqNo : 8125,
plygnLo : 127.141388145401,
plygnLa : 37.505341704149
},
{
setSeqNo : 1,
plygnSeqNo : 8126,
plygnLo : 127.141444841114,
plygnLa : 37.5053241840702
},
{
setSeqNo : 1,
plygnSeqNo : 8127,
plygnLo : 127.141525906762,
plygnLa : 37.5052987431819
},
{
setSeqNo : 1,
plygnSeqNo : 8128,
plygnLo : 127.142122605007,
plygnLa : 37.5050761639021
},
{
setSeqNo : 1,
plygnSeqNo : 8129,
plygnLo : 127.142233034468,
plygnLa : 37.5048848491011
},
{
setSeqNo : 1,
plygnSeqNo : 8130,
plygnLo : 127.142479548379,
plygnLa : 37.5047874194709
},
{
setSeqNo : 1,
plygnSeqNo : 8131,
plygnLo : 127.142701864914,
plygnLa : 37.5046995948773
},
{
setSeqNo : 1,
plygnSeqNo : 8132,
plygnLo : 127.142889567765,
plygnLa : 37.5046255960573
},
{
setSeqNo : 1,
plygnSeqNo : 8133,
plygnLo : 127.1434240739,
plygnLa : 37.5044140676893
},
{
setSeqNo : 1,
plygnSeqNo : 8134,
plygnLo : 127.14359600658,
plygnLa : 37.5044099158081
},
{
setSeqNo : 1,
plygnSeqNo : 8135,
plygnLo : 127.143705214994,
plygnLa : 37.5044069713277
},
{
setSeqNo : 1,
plygnSeqNo : 8136,
plygnLo : 127.143876434982,
plygnLa : 37.5044028207398
},
{
setSeqNo : 1,
plygnSeqNo : 8137,
plygnLo : 127.143924848639,
plygnLa : 37.5044013564043
},
{
setSeqNo : 1,
plygnSeqNo : 8138,
plygnLo : 127.144103315311,
plygnLa : 37.5043969153977
},
{
setSeqNo : 1,
plygnSeqNo : 8139,
plygnLo : 127.144394320894,
plygnLa : 37.5042785869591
},
{
setSeqNo : 1,
plygnSeqNo : 8140,
plygnLo : 127.144415510673,
plygnLa : 37.5042698390357
},
{
setSeqNo : 1,
plygnSeqNo : 8141,
plygnLo : 127.144510854192,
plygnLa : 37.5042311436561
},
{
setSeqNo : 1,
plygnSeqNo : 8142,
plygnLo : 127.144547229741,
plygnLa : 37.5042161785299
},
{
setSeqNo : 1,
plygnSeqNo : 8143,
plygnLo : 127.144873789092,
plygnLa : 37.504030519362
},
{
setSeqNo : 1,
plygnSeqNo : 8144,
plygnLo : 127.145126187112,
plygnLa : 37.5036912141425
},
{
setSeqNo : 1,
plygnSeqNo : 8145,
plygnLo : 127.145126112219,
plygnLa : 37.5035569113692
},
{
setSeqNo : 1,
plygnSeqNo : 8146,
plygnLo : 127.145164632756,
plygnLa : 37.5035571420657
},
{
setSeqNo : 1,
plygnSeqNo : 8147,
plygnLo : 127.145201206548,
plygnLa : 37.5035570989807
},
{
setSeqNo : 1,
plygnSeqNo : 8148,
plygnLo : 127.145197007714,
plygnLa : 37.5035793409346
},
{
setSeqNo : 1,
plygnSeqNo : 8149,
plygnLo : 127.145203313537,
plygnLa : 37.503641564498
},
{
setSeqNo : 1,
plygnSeqNo : 8150,
plygnLo : 127.145246510173,
plygnLa : 37.5035919570499
},
{
setSeqNo : 1,
plygnSeqNo : 8151,
plygnLo : 127.145277023829,
plygnLa : 37.5035570059396
},
{
setSeqNo : 1,
plygnSeqNo : 8152,
plygnLo : 127.145340628028,
plygnLa : 37.5035572090218
},
{
setSeqNo : 1,
plygnSeqNo : 8153,
plygnLo : 127.145350016659,
plygnLa : 37.5035642339849
},
{
setSeqNo : 1,
plygnSeqNo : 8154,
plygnLo : 127.145416025824,
plygnLa : 37.5036142755043
},
{
setSeqNo : 1,
plygnSeqNo : 8155,
plygnLo : 127.145447596918,
plygnLa : 37.5035767836421
},
{
setSeqNo : 1,
plygnSeqNo : 8156,
plygnLo : 127.145463981017,
plygnLa : 37.5035573377911
},
{
setSeqNo : 1,
plygnSeqNo : 8157,
plygnLo : 127.145582638665,
plygnLa : 37.5034164126849
},
{
setSeqNo : 1,
plygnSeqNo : 8158,
plygnLo : 127.145534616294,
plygnLa : 37.5033505903361
},
{
setSeqNo : 1,
plygnSeqNo : 8159,
plygnLo : 127.145502550264,
plygnLa : 37.5033061379194
},
{
setSeqNo : 1,
plygnSeqNo : 8160,
plygnLo : 127.145952114613,
plygnLa : 37.5032273192478
},
{
setSeqNo : 1,
plygnSeqNo : 8161,
plygnLo : 127.146239456777,
plygnLa : 37.5032297788377
},
{
setSeqNo : 1,
plygnSeqNo : 8162,
plygnLo : 127.146340591511,
plygnLa : 37.5033515778922
},
{
setSeqNo : 1,
plygnSeqNo : 8163,
plygnLo : 127.146499985757,
plygnLa : 37.503356724093
},
{
setSeqNo : 1,
plygnSeqNo : 8164,
plygnLo : 127.146542229858,
plygnLa : 37.5033580784313
},
{
setSeqNo : 1,
plygnSeqNo : 8165,
plygnLo : 127.146578194356,
plygnLa : 37.503317777703
},
{
setSeqNo : 1,
plygnSeqNo : 8166,
plygnLo : 127.146509481672,
plygnLa : 37.5032378991908
},
{
setSeqNo : 1,
plygnSeqNo : 8167,
plygnLo : 127.146865418152,
plygnLa : 37.503260264936
},
{
setSeqNo : 1,
plygnSeqNo : 8168,
plygnLo : 127.147162248513,
plygnLa : 37.5033722085462
},
{
setSeqNo : 1,
plygnSeqNo : 8169,
plygnLo : 127.147194332413,
plygnLa : 37.5033843157446
},
{
setSeqNo : 1,
plygnSeqNo : 8170,
plygnLo : 127.147694968935,
plygnLa : 37.5032124980327
},
{
setSeqNo : 1,
plygnSeqNo : 8171,
plygnLo : 127.147987103947,
plygnLa : 37.5035029963045
},
{
setSeqNo : 1,
plygnSeqNo : 8172,
plygnLo : 127.148053872109,
plygnLa : 37.5035778046063
},
{
setSeqNo : 1,
plygnSeqNo : 8173,
plygnLo : 127.148602483591,
plygnLa : 37.5037232552152
},
{
setSeqNo : 1,
plygnSeqNo : 8174,
plygnLo : 127.149045159583,
plygnLa : 37.5040011666882
},
{
setSeqNo : 1,
plygnSeqNo : 8175,
plygnLo : 127.149514374315,
plygnLa : 37.5042970707927
},
{
setSeqNo : 1,
plygnSeqNo : 8176,
plygnLo : 127.150204618659,
plygnLa : 37.5047424767377
},
{
setSeqNo : 1,
plygnSeqNo : 8177,
plygnLo : 127.150514006514,
plygnLa : 37.5043749301326
},
{
setSeqNo : 1,
plygnSeqNo : 8178,
plygnLo : 127.150824395151,
plygnLa : 37.5040619993398
},
{
setSeqNo : 1,
plygnSeqNo : 8179,
plygnLo : 127.150971895076,
plygnLa : 37.5039432787976
},
{
setSeqNo : 1,
plygnSeqNo : 8180,
plygnLo : 127.151330031184,
plygnLa : 37.5036547849811
},
{
setSeqNo : 1,
plygnSeqNo : 8181,
plygnLo : 127.151653778601,
plygnLa : 37.5033961838017
},
{
setSeqNo : 1,
plygnSeqNo : 8182,
plygnLo : 127.152109188216,
plygnLa : 37.5029707296166
},
{
setSeqNo : 1,
plygnSeqNo : 8183,
plygnLo : 127.152259934486,
plygnLa : 37.5029789806178
},
{
setSeqNo : 1,
plygnSeqNo : 8184,
plygnLo : 127.152397553549,
plygnLa : 37.5030441270274
},
{
setSeqNo : 1,
plygnSeqNo : 8185,
plygnLo : 127.152500667632,
plygnLa : 37.5030921452588
},
{
setSeqNo : 1,
plygnSeqNo : 8186,
plygnLo : 127.152844294604,
plygnLa : 37.5030556658028
},
{
setSeqNo : 1,
plygnSeqNo : 8187,
plygnLo : 127.153062447894,
plygnLa : 37.5028408397363
},
{
setSeqNo : 1,
plygnSeqNo : 8188,
plygnLo : 127.153230879867,
plygnLa : 37.5026798499993
},
{
setSeqNo : 1,
plygnSeqNo : 8189,
plygnLo : 127.153700889756,
plygnLa : 37.5026677028599
},
{
setSeqNo : 1,
plygnSeqNo : 8190,
plygnLo : 127.153782179889,
plygnLa : 37.5026667517184
},
{
setSeqNo : 1,
plygnSeqNo : 8191,
plygnLo : 127.153954109274,
plygnLa : 37.5026642769946
},
{
setSeqNo : 1,
plygnSeqNo : 8192,
plygnLo : 127.154416801564,
plygnLa : 37.5025293670677
},
{
setSeqNo : 1,
plygnSeqNo : 8193,
plygnLo : 127.155817159745,
plygnLa : 37.5020798685761
},
{
setSeqNo : 1,
plygnSeqNo : 8194,
plygnLo : 127.156438006968,
plygnLa : 37.5018594381545
},
{
setSeqNo : 1,
plygnSeqNo : 8195,
plygnLo : 127.156555061228,
plygnLa : 37.5018944769036
},
{
setSeqNo : 1,
plygnSeqNo : 8196,
plygnLo : 127.157729287098,
plygnLa : 37.5031793842954
},
{
setSeqNo : 1,
plygnSeqNo : 8197,
plygnLo : 127.158866165588,
plygnLa : 37.5023906279198
},
{
setSeqNo : 1,
plygnSeqNo : 8198,
plygnLo : 127.159074492948,
plygnLa : 37.5018796017838
},
{
setSeqNo : 1,
plygnSeqNo : 8199,
plygnLo : 127.159321397902,
plygnLa : 37.5014839595277
},
{
setSeqNo : 1,
plygnSeqNo : 8200,
plygnLo : 127.15939694768,
plygnLa : 37.5013630705799
},
{
setSeqNo : 1,
plygnSeqNo : 8201,
plygnLo : 127.160504316615,
plygnLa : 37.5010949445598
},
{
setSeqNo : 1,
plygnSeqNo : 8202,
plygnLo : 127.161219538032,
plygnLa : 37.5003957072008
},
{
setSeqNo : 1,
plygnSeqNo : 8203,
plygnLo : 127.161257801429,
plygnLa : 37.5002762730657
},
{
setSeqNo : 1,
plygnSeqNo : 8204,
plygnLo : 127.16139035301,
plygnLa : 37.5002014808584
},
{
setSeqNo : 1,
plygnSeqNo : 8205,
plygnLo : 127.161431136887,
plygnLa : 37.5000229118724
},
{
setSeqNo : 1,
plygnSeqNo : 8206,
plygnLo : 127.161406407352,
plygnLa : 37.4999452338097
},
{
setSeqNo : 1,
plygnSeqNo : 8207,
plygnLo : 127.161387892267,
plygnLa : 37.4997107197389
},
{
setSeqNo : 1,
plygnSeqNo : 8208,
plygnLo : 127.161420213575,
plygnLa : 37.4997058929561
},
{
setSeqNo : 1,
plygnSeqNo : 8209,
plygnLo : 127.161391259429,
plygnLa : 37.4996349789518
},
{
setSeqNo : 1,
plygnSeqNo : 8210,
plygnLo : 127.161367816787,
plygnLa : 37.4995775709201
},
{
setSeqNo : 1,
plygnSeqNo : 8211,
plygnLo : 127.161354479179,
plygnLa : 37.4995378923161
},
{
setSeqNo : 1,
plygnSeqNo : 8212,
plygnLo : 127.161250974604,
plygnLa : 37.4993913315345
},
{
setSeqNo : 1,
plygnSeqNo : 8213,
plygnLo : 127.161069372617,
plygnLa : 37.4992451649842
},
{
setSeqNo : 1,
plygnSeqNo : 8214,
plygnLo : 127.161011366372,
plygnLa : 37.4991421962183
},
{
setSeqNo : 1,
plygnSeqNo : 8215,
plygnLo : 127.161010796183,
plygnLa : 37.4991351317806
},
{
setSeqNo : 1,
plygnSeqNo : 8216,
plygnLo : 127.161005200594,
plygnLa : 37.4990661777625
},
{
setSeqNo : 1,
plygnSeqNo : 8217,
plygnLo : 127.160953250352,
plygnLa : 37.4989829045922
},
{
setSeqNo : 1,
plygnSeqNo : 8218,
plygnLo : 127.160884566345,
plygnLa : 37.4989266858608
},
{
setSeqNo : 1,
plygnSeqNo : 8219,
plygnLo : 127.160807708155,
plygnLa : 37.4988451406556
},
{
setSeqNo : 1,
plygnSeqNo : 8220,
plygnLo : 127.160754511545,
plygnLa : 37.4987590503593
},
{
setSeqNo : 1,
plygnSeqNo : 8221,
plygnLo : 127.160681449665,
plygnLa : 37.4986327289605
},
{
setSeqNo : 1,
plygnSeqNo : 8222,
plygnLo : 127.160633031449,
plygnLa : 37.4985497315114
},
{
setSeqNo : 1,
plygnSeqNo : 8223,
plygnLo : 127.160609802614,
plygnLa : 37.4984272810161
},
{
setSeqNo : 1,
plygnSeqNo : 8224,
plygnLo : 127.160608917677,
plygnLa : 37.4982549671098
},
{
setSeqNo : 1,
plygnSeqNo : 8225,
plygnLo : 127.160609825607,
plygnLa : 37.4981018046075
},
{
setSeqNo : 1,
plygnSeqNo : 8226,
plygnLo : 127.160592862351,
plygnLa : 37.4979368280379
},
{
setSeqNo : 1,
plygnSeqNo : 8227,
plygnLo : 127.160581787364,
plygnLa : 37.4977963406238
},
{
setSeqNo : 1,
plygnSeqNo : 8228,
plygnLo : 127.160583674392,
plygnLa : 37.4977687495095
},
{
setSeqNo : 1,
plygnSeqNo : 8229,
plygnLo : 127.16058500948,
plygnLa : 37.4977312932014
},
{
setSeqNo : 1,
plygnSeqNo : 8230,
plygnLo : 127.160589388144,
plygnLa : 37.4976316200194
},
{
setSeqNo : 1,
plygnSeqNo : 8231,
plygnLo : 127.160566609383,
plygnLa : 37.4975553447341
},
{
setSeqNo : 1,
plygnSeqNo : 8232,
plygnLo : 127.160487735593,
plygnLa : 37.4974397255823
},
{
setSeqNo : 1,
plygnSeqNo : 8233,
plygnLo : 127.160369171275,
plygnLa : 37.4973565528001
},
{
setSeqNo : 1,
plygnSeqNo : 8234,
plygnLo : 127.16027121748,
plygnLa : 37.4972389861351
},
{
setSeqNo : 1,
plygnSeqNo : 8235,
plygnLo : 127.160096976577,
plygnLa : 37.4971471476588
},
{
setSeqNo : 1,
plygnSeqNo : 8236,
plygnLo : 127.160008485395,
plygnLa : 37.4970819447071
},
{
setSeqNo : 1,
plygnSeqNo : 8237,
plygnLo : 127.159902397747,
plygnLa : 37.4969624249531
},
{
setSeqNo : 1,
plygnSeqNo : 8238,
plygnLo : 127.159779476892,
plygnLa : 37.4968240613578
},
{
setSeqNo : 1,
plygnSeqNo : 8239,
plygnLo : 127.159764995477,
plygnLa : 37.4966596474354
},
{
setSeqNo : 1,
plygnSeqNo : 8240,
plygnLo : 127.159762951669,
plygnLa : 37.4966129163507
},
{
setSeqNo : 1,
plygnSeqNo : 8241,
plygnLo : 127.15973736928,
plygnLa : 37.4965479070101
},
{
setSeqNo : 1,
plygnSeqNo : 8242,
plygnLo : 127.15978387231,
plygnLa : 37.4963938283087
},
{
setSeqNo : 1,
plygnSeqNo : 8243,
plygnLo : 127.159792101651,
plygnLa : 37.4963603089123
},
{
setSeqNo : 1,
plygnSeqNo : 8244,
plygnLo : 127.159810948189,
plygnLa : 37.4962451274582
},
{
setSeqNo : 1,
plygnSeqNo : 8245,
plygnLo : 127.159851218843,
plygnLa : 37.4961555417241
},
{
setSeqNo : 1,
plygnSeqNo : 8246,
plygnLo : 127.159830041282,
plygnLa : 37.4960009847745
},
{
setSeqNo : 1,
plygnSeqNo : 8247,
plygnLo : 127.159874167785,
plygnLa : 37.4958094643304
},
{
setSeqNo : 1,
plygnSeqNo : 8248,
plygnLo : 127.159864710224,
plygnLa : 37.4956841837101
},
{
setSeqNo : 1,
plygnSeqNo : 8249,
plygnLo : 127.159895054651,
plygnLa : 37.4955791234045
},
{
setSeqNo : 1,
plygnSeqNo : 8250,
plygnLo : 127.159974414671,
plygnLa : 37.4954233060944
},
{
setSeqNo : 1,
plygnSeqNo : 8251,
plygnLo : 127.159965460642,
plygnLa : 37.4952802934374
},
{
setSeqNo : 1,
plygnSeqNo : 8252,
plygnLo : 127.159974240689,
plygnLa : 37.4951701883379
},
{
setSeqNo : 1,
plygnSeqNo : 8253,
plygnLo : 127.159973273529,
plygnLa : 37.4950496804811
},
{
setSeqNo : 1,
plygnSeqNo : 8254,
plygnLo : 127.159982302864,
plygnLa : 37.4949713906315
},
{
setSeqNo : 1,
plygnSeqNo : 8255,
plygnLo : 127.160018316942,
plygnLa : 37.4947080798754
},
{
setSeqNo : 1,
plygnSeqNo : 8256,
plygnLo : 127.160021226463,
plygnLa : 37.4945813763902
},
{
setSeqNo : 1,
plygnSeqNo : 8257,
plygnLo : 127.160026264085,
plygnLa : 37.4943749878091
},
{
setSeqNo : 1,
plygnSeqNo : 8258,
plygnLo : 127.159956158489,
plygnLa : 37.4942275426304
},
{
setSeqNo : 1,
plygnSeqNo : 8259,
plygnLo : 127.159881297986,
plygnLa : 37.4940820686538
},
{
setSeqNo : 1,
plygnSeqNo : 8260,
plygnLo : 127.159810640858,
plygnLa : 37.4939242096826
},
{
setSeqNo : 1,
plygnSeqNo : 8261,
plygnLo : 127.159783393099,
plygnLa : 37.493819504508
},
{
setSeqNo : 1,
plygnSeqNo : 8262,
plygnLo : 127.15975704449,
plygnLa : 37.4936418725649
},
{
setSeqNo : 1,
plygnSeqNo : 8263,
plygnLo : 127.15974554582,
plygnLa : 37.4936371037685
},
{
setSeqNo : 1,
plygnSeqNo : 8264,
plygnLo : 127.159717490926,
plygnLa : 37.4935732244289
},
{
setSeqNo : 1,
plygnSeqNo : 8265,
plygnLo : 127.159704897736,
plygnLa : 37.4935473372217
},
{
setSeqNo : 1,
plygnSeqNo : 8266,
plygnLo : 127.159652009121,
plygnLa : 37.4934347922521
},
{
setSeqNo : 1,
plygnSeqNo : 8267,
plygnLo : 127.159517029884,
plygnLa : 37.4932750368037
},
{
setSeqNo : 1,
plygnSeqNo : 8268,
plygnLo : 127.159368052181,
plygnLa : 37.4931744406828
},
{
setSeqNo : 1,
plygnSeqNo : 8269,
plygnLo : 127.159318501654,
plygnLa : 37.4931370604408
},
{
setSeqNo : 1,
plygnSeqNo : 8270,
plygnLo : 127.159256237537,
plygnLa : 37.4931027892594
},
{
setSeqNo : 1,
plygnSeqNo : 8271,
plygnLo : 127.159183720925,
plygnLa : 37.4930648728912
},
{
setSeqNo : 1,
plygnSeqNo : 8272,
plygnLo : 127.159054827995,
plygnLa : 37.4929389047921
},
{
setSeqNo : 1,
plygnSeqNo : 8273,
plygnLo : 127.15900737255,
plygnLa : 37.4928916662994
},
{
setSeqNo : 1,
plygnSeqNo : 8274,
plygnLo : 127.158898961773,
plygnLa : 37.49275582256
},
{
setSeqNo : 1,
plygnSeqNo : 8275,
plygnLo : 127.158873447271,
plygnLa : 37.4927206642577
},
{
setSeqNo : 1,
plygnSeqNo : 8276,
plygnLo : 127.158650916945,
plygnLa : 37.4924270078969
},
{
setSeqNo : 1,
plygnSeqNo : 8277,
plygnLo : 127.15853874092,
plygnLa : 37.4921827620877
},
{
setSeqNo : 1,
plygnSeqNo : 8278,
plygnLo : 127.158509574449,
plygnLa : 37.4920949532674
},
{
setSeqNo : 1,
plygnSeqNo : 8279,
plygnLo : 127.158479444719,
plygnLa : 37.4920479698429
},
{
setSeqNo : 1,
plygnSeqNo : 8280,
plygnLo : 127.158457519906,
plygnLa : 37.4919564849424
},
{
setSeqNo : 1,
plygnSeqNo : 8281,
plygnLo : 127.158467759992,
plygnLa : 37.4919488762808
},
{
setSeqNo : 1,
plygnSeqNo : 8282,
plygnLo : 127.158360820504,
plygnLa : 37.4915908702554
},
{
setSeqNo : 1,
plygnSeqNo : 8283,
plygnLo : 127.158318559441,
plygnLa : 37.4914039692219
},
{
setSeqNo : 1,
plygnSeqNo : 8284,
plygnLo : 127.158287195736,
plygnLa : 37.4912761768682
},
{
setSeqNo : 1,
plygnSeqNo : 8285,
plygnLo : 127.158260256241,
plygnLa : 37.4911497941292
},
{
setSeqNo : 1,
plygnSeqNo : 8286,
plygnLo : 127.1582697091,
plygnLa : 37.4910250460679
},
{
setSeqNo : 1,
plygnSeqNo : 8287,
plygnLo : 127.158280188921,
plygnLa : 37.4908834053523
},
{
setSeqNo : 1,
plygnSeqNo : 8288,
plygnLo : 127.158285400936,
plygnLa : 37.4907583847971
},
{
setSeqNo : 1,
plygnSeqNo : 8289,
plygnLo : 127.158273619312,
plygnLa : 37.4906989957086
},
{
setSeqNo : 1,
plygnSeqNo : 8290,
plygnLo : 127.158235444616,
plygnLa : 37.490612325959
},
{
setSeqNo : 1,
plygnSeqNo : 8291,
plygnLo : 127.158184624157,
plygnLa : 37.4905557930744
},
{
setSeqNo : 1,
plygnSeqNo : 8292,
plygnLo : 127.158170243484,
plygnLa : 37.4905192138788
},
{
setSeqNo : 1,
plygnSeqNo : 8293,
plygnLo : 127.158160684452,
plygnLa : 37.4905113421977
},
{
setSeqNo : 1,
plygnSeqNo : 8294,
plygnLo : 127.158081927614,
plygnLa : 37.4904464035791
},
{
setSeqNo : 1,
plygnSeqNo : 8295,
plygnLo : 127.158073251217,
plygnLa : 37.4904393777551
},
{
setSeqNo : 1,
plygnSeqNo : 8296,
plygnLo : 127.157976558112,
plygnLa : 37.4903739044692
},
{
setSeqNo : 1,
plygnSeqNo : 8297,
plygnLo : 127.157827410614,
plygnLa : 37.4903020309323
},
{
setSeqNo : 1,
plygnSeqNo : 8298,
plygnLo : 127.157696471462,
plygnLa : 37.4902153837763
},
{
setSeqNo : 1,
plygnSeqNo : 8299,
plygnLo : 127.157518405438,
plygnLa : 37.4900916144566
},
{
setSeqNo : 1,
plygnSeqNo : 8300,
plygnLo : 127.157386377463,
plygnLa : 37.4899921381572
},
{
setSeqNo : 1,
plygnSeqNo : 8301,
plygnLo : 127.157345326605,
plygnLa : 37.4899755575861
},
{
setSeqNo : 1,
plygnSeqNo : 8302,
plygnLo : 127.15728231909,
plygnLa : 37.4899501086099
},
{
setSeqNo : 1,
plygnSeqNo : 8303,
plygnLo : 127.157316814826,
plygnLa : 37.4899486755879
},
{
setSeqNo : 1,
plygnSeqNo : 8304,
plygnLo : 127.157324405889,
plygnLa : 37.4899505216368
},
{
setSeqNo : 1,
plygnSeqNo : 8305,
plygnLo : 127.15735665489,
plygnLa : 37.4899616244697
},
{
setSeqNo : 1,
plygnSeqNo : 8306,
plygnLo : 127.157590629916,
plygnLa : 37.489908904484
},
{
setSeqNo : 1,
plygnSeqNo : 8307,
plygnLo : 127.157918262668,
plygnLa : 37.4898938750452
},
{
setSeqNo : 1,
plygnSeqNo : 8308,
plygnLo : 127.158165894832,
plygnLa : 37.489894583135
},
{
setSeqNo : 1,
plygnSeqNo : 8309,
plygnLo : 127.158382090617,
plygnLa : 37.4898943413474
},
{
setSeqNo : 1,
plygnSeqNo : 8310,
plygnLo : 127.158403427638,
plygnLa : 37.4898240891112
},
{
setSeqNo : 1,
plygnSeqNo : 8311,
plygnLo : 127.158406824865,
plygnLa : 37.489799460282
},
{
setSeqNo : 1,
plygnSeqNo : 8312,
plygnLo : 127.158425883607,
plygnLa : 37.4898022821315
},
{
setSeqNo : 1,
plygnSeqNo : 8313,
plygnLo : 127.158461963145,
plygnLa : 37.4897310011848
},
{
setSeqNo : 1,
plygnSeqNo : 8314,
plygnLo : 127.158513602481,
plygnLa : 37.4896656101091
},
{
setSeqNo : 1,
plygnSeqNo : 8315,
plygnLo : 127.158397248445,
plygnLa : 37.489594414502
},
{
setSeqNo : 1,
plygnSeqNo : 8316,
plygnLo : 127.158384707079,
plygnLa : 37.4895828442987
},
{
setSeqNo : 1,
plygnSeqNo : 8317,
plygnLo : 127.158167023191,
plygnLa : 37.4894656607834
},
{
setSeqNo : 1,
plygnSeqNo : 8318,
plygnLo : 127.15759688248,
plygnLa : 37.4891913221088
},
{
setSeqNo : 1,
plygnSeqNo : 8319,
plygnLo : 127.157256705113,
plygnLa : 37.4890119134386
},
{
setSeqNo : 1,
plygnSeqNo : 8320,
plygnLo : 127.157056371602,
plygnLa : 37.4888846588443
},
{
setSeqNo : 1,
plygnSeqNo : 8321,
plygnLo : 127.156627576507,
plygnLa : 37.488658494969
},
{
setSeqNo : 1,
plygnSeqNo : 8322,
plygnLo : 127.156427243738,
plygnLa : 37.4885744332271
},
{
setSeqNo : 1,
plygnSeqNo : 8323,
plygnLo : 127.155451671202,
plygnLa : 37.4880600300328
},
{
setSeqNo : 1,
plygnSeqNo : 8324,
plygnLo : 127.155504575652,
plygnLa : 37.4879932961142
},
{
setSeqNo : 1,
plygnSeqNo : 8325,
plygnLo : 127.155472359558,
plygnLa : 37.487975642459
},
{
setSeqNo : 1,
plygnSeqNo : 8326,
plygnLo : 127.155341332729,
plygnLa : 37.4879366736811
},
{
setSeqNo : 1,
plygnSeqNo : 8327,
plygnLo : 127.15495306151,
plygnLa : 37.4877239034881
},
{
setSeqNo : 1,
plygnSeqNo : 8328,
plygnLo : 127.153741246563,
plygnLa : 37.4870598205313
},
{
setSeqNo : 1,
plygnSeqNo : 8329,
plygnLo : 127.153586907771,
plygnLa : 37.4869206255548
},
{
setSeqNo : 1,
plygnSeqNo : 8330,
plygnLo : 127.153162452086,
plygnLa : 37.4866881274131
},
{
setSeqNo : 1,
plygnSeqNo : 8331,
plygnLo : 127.152963286684,
plygnLa : 37.4866009047629
},
{
setSeqNo : 1,
plygnSeqNo : 8332,
plygnLo : 127.152531260245,
plygnLa : 37.4863652094958
},
{
setSeqNo : 1,
plygnSeqNo : 8333,
plygnLo : 127.151914626206,
plygnLa : 37.4860287948655
},
{
setSeqNo : 1,
plygnSeqNo : 8334,
plygnLo : 127.151695422803,
plygnLa : 37.4859092034168
},
{
setSeqNo : 1,
plygnSeqNo : 8335,
plygnLo : 127.151564390246,
plygnLa : 37.4858702394491
},
{
setSeqNo : 1,
plygnSeqNo : 8336,
plygnLo : 127.150430199976,
plygnLa : 37.4852489299479
},
{
setSeqNo : 1,
plygnSeqNo : 8337,
plygnLo : 127.149921706183,
plygnLa : 37.4849057659851
},
{
setSeqNo : 1,
plygnSeqNo : 8338,
plygnLo : 127.149465954443,
plygnLa : 37.4844268701388
},
{
setSeqNo : 1,
plygnSeqNo : 8339,
plygnLo : 127.149094697576,
plygnLa : 37.4838827066258
},
{
setSeqNo : 1,
plygnSeqNo : 8340,
plygnLo : 127.148683051234,
plygnLa : 37.4840432287424
},
{
setSeqNo : 1,
plygnSeqNo : 8341,
plygnLo : 127.148225199475,
plygnLa : 37.4833682909223
},
{
setSeqNo : 1,
plygnSeqNo : 8342,
plygnLo : 127.148190526657,
plygnLa : 37.4832603220068
},
{
setSeqNo : 1,
plygnSeqNo : 8343,
plygnLo : 127.148091261765,
plygnLa : 37.4831064821867
},
{
setSeqNo : 1,
plygnSeqNo : 8344,
plygnLo : 127.148058631585,
plygnLa : 37.4830658785174
},
{
setSeqNo : 1,
plygnSeqNo : 8345,
plygnLo : 127.147889194159,
plygnLa : 37.4828160968702
},
{
setSeqNo : 1,
plygnSeqNo : 8346,
plygnLo : 127.147770375641,
plygnLa : 37.4826242046956
},
{
setSeqNo : 1,
plygnSeqNo : 8347,
plygnLo : 127.147669781978,
plygnLa : 37.4824258026476
},
{
setSeqNo : 1,
plygnSeqNo : 8348,
plygnLo : 127.147587946578,
plygnLa : 37.4822219893339
},
{
setSeqNo : 1,
plygnSeqNo : 8349,
plygnLo : 127.147525323762,
plygnLa : 37.4820138994928
},
{
setSeqNo : 1,
plygnSeqNo : 8350,
plygnLo : 127.147482300013,
plygnLa : 37.4818026769481
},
{
setSeqNo : 1,
plygnSeqNo : 8351,
plygnLo : 127.147459069652,
plygnLa : 37.4815894927823
},
{
setSeqNo : 1,
plygnSeqNo : 8352,
plygnLo : 127.14728211119,
plygnLa : 37.4787396643185
},
{
setSeqNo : 1,
plygnSeqNo : 8353,
plygnLo : 127.147241520283,
plygnLa : 37.4786330087888
},
{
setSeqNo : 1,
plygnSeqNo : 8354,
plygnLo : 127.147217285468,
plygnLa : 37.4782393306427
},
{
setSeqNo : 1,
plygnSeqNo : 8355,
plygnLo : 127.147159162719,
plygnLa : 37.4772951501183
},
{
setSeqNo : 1,
plygnSeqNo : 8356,
plygnLo : 127.147145329572,
plygnLa : 37.4772218346458
},
{
setSeqNo : 1,
plygnSeqNo : 8357,
plygnLo : 127.145814941234,
plygnLa : 37.4772742676237
},
{
setSeqNo : 1,
plygnSeqNo : 8358,
plygnLo : 127.144370473067,
plygnLa : 37.4773311796407
},
{
setSeqNo : 1,
plygnSeqNo : 8359,
plygnLo : 127.144332651299,
plygnLa : 37.4767225176335
},
{
setSeqNo : 1,
plygnSeqNo : 8360,
plygnLo : 127.144320989082,
plygnLa : 37.4766122040654
},
{
setSeqNo : 1,
plygnSeqNo : 8361,
plygnLo : 127.144299820827,
plygnLa : 37.4765027849626
},
{
setSeqNo : 1,
plygnSeqNo : 8362,
plygnLo : 127.144269215417,
plygnLa : 37.4763947918279
},
{
setSeqNo : 1,
plygnSeqNo : 8363,
plygnLo : 127.144222816641,
plygnLa : 37.4762749245337
},
{
setSeqNo : 1,
plygnSeqNo : 8364,
plygnLo : 127.144180398116,
plygnLa : 37.476185136864
},
{
setSeqNo : 1,
plygnSeqNo : 8365,
plygnLo : 127.144137334491,
plygnLa : 37.4761088259706
},
{
setSeqNo : 1,
plygnSeqNo : 8366,
plygnLo : 127.144123510633,
plygnLa : 37.4760843293677
},
{
setSeqNo : 1,
plygnSeqNo : 8367,
plygnLo : 127.144040504913,
plygnLa : 37.4759520272924
},
{
setSeqNo : 1,
plygnSeqNo : 8368,
plygnLo : 127.143945422867,
plygnLa : 37.4758004582721
},
{
setSeqNo : 1,
plygnSeqNo : 8369,
plygnLo : 127.143761190432,
plygnLa : 37.4755067643591
},
{
setSeqNo : 1,
plygnSeqNo : 8370,
plygnLo : 127.143714765134,
plygnLa : 37.4754258832318
},
{
setSeqNo : 1,
plygnSeqNo : 8371,
plygnLo : 127.143675435115,
plygnLa : 37.4753426509445
},
{
setSeqNo : 1,
plygnSeqNo : 8372,
plygnLo : 127.143643427192,
plygnLa : 37.475257454662
},
{
setSeqNo : 1,
plygnSeqNo : 8373,
plygnLo : 127.143618855144,
plygnLa : 37.4751706906944
},
{
setSeqNo : 1,
plygnSeqNo : 8374,
plygnLo : 127.143601855408,
plygnLa : 37.475082782353
},
{
setSeqNo : 1,
plygnSeqNo : 8375,
plygnLo : 127.143592507914,
plygnLa : 37.474994162026
},
{
setSeqNo : 1,
plygnSeqNo : 8376,
plygnLo : 127.143526587721,
plygnLa : 37.4739304551367
},
{
setSeqNo : 1,
plygnSeqNo : 8377,
plygnLo : 127.140963483016,
plygnLa : 37.4740313113568
},
{
setSeqNo : 1,
plygnSeqNo : 8378,
plygnLo : 127.140577114391,
plygnLa : 37.4740194499668
},
{
setSeqNo : 1,
plygnSeqNo : 8379,
plygnLo : 127.140099842845,
plygnLa : 37.4740382199096
},
{
setSeqNo : 1,
plygnSeqNo : 8380,
plygnLo : 127.139966029255,
plygnLa : 37.4740705515529
},
{
setSeqNo : 1,
plygnSeqNo : 8381,
plygnLo : 127.139560037085,
plygnLa : 37.4740866751044
},
{
setSeqNo : 1,
plygnSeqNo : 8382,
plygnLo : 127.139119587108,
plygnLa : 37.4741041655255
},
{
setSeqNo : 1,
plygnSeqNo : 8383,
plygnLo : 127.138334050466,
plygnLa : 37.4741350990375
},
{
setSeqNo : 1,
plygnSeqNo : 8384,
plygnLo : 127.138197720336,
plygnLa : 37.4741269405541
},
{
setSeqNo : 1,
plygnSeqNo : 8385,
plygnLo : 127.138079998866,
plygnLa : 37.4741315726606
},
{
setSeqNo : 1,
plygnSeqNo : 8386,
plygnLo : 127.137507296011,
plygnLa : 37.47415397431
},
{
setSeqNo : 1,
plygnSeqNo : 8387,
plygnLo : 127.136842517295,
plygnLa : 37.4741532237982
},
{
setSeqNo : 1,
plygnSeqNo : 8388,
plygnLo : 127.136772165696,
plygnLa : 37.474155954681
},
{
setSeqNo : 1,
plygnSeqNo : 8389,
plygnLo : 127.13639695174,
plygnLa : 37.474170518889
},
{
setSeqNo : 1,
plygnSeqNo : 8390,
plygnLo : 127.136263136322,
plygnLa : 37.474202855352
},
{
setSeqNo : 1,
plygnSeqNo : 8391,
plygnLo : 127.135878015075,
plygnLa : 37.4742184847726
},
{
setSeqNo : 1,
plygnSeqNo : 8392,
plygnLo : 127.135468282367,
plygnLa : 37.4742402496344
},
{
setSeqNo : 1,
plygnSeqNo : 8393,
plygnLo : 127.135287308313,
plygnLa : 37.4742570871427
},
{
setSeqNo : 1,
plygnSeqNo : 8394,
plygnLo : 127.135282892086,
plygnLa : 37.4742656877028
},
{
setSeqNo : 1,
plygnSeqNo : 8395,
plygnLo : 127.135060385162,
plygnLa : 37.4742962220546
},
{
setSeqNo : 1,
plygnSeqNo : 8396,
plygnLo : 127.134339186028,
plygnLa : 37.4744127506035
},
{
setSeqNo : 1,
plygnSeqNo : 8397,
plygnLo : 127.13401216652,
plygnLa : 37.4744699511489
},
{
setSeqNo : 1,
plygnSeqNo : 8398,
plygnLo : 127.133660551897,
plygnLa : 37.474531452634
},
{
setSeqNo : 1,
plygnSeqNo : 8399,
plygnLo : 127.133520770908,
plygnLa : 37.4745282391164
},
{
setSeqNo : 1,
plygnSeqNo : 8400,
plygnLo : 127.133130098634,
plygnLa : 37.4745965834199
},
{
setSeqNo : 1,
plygnSeqNo : 8401,
plygnLo : 127.133122427172,
plygnLa : 37.4745798963939
},
{
setSeqNo : 1,
plygnSeqNo : 8402,
plygnLo : 127.132856049081,
plygnLa : 37.4746264952651
},
{
setSeqNo : 1,
plygnSeqNo : 8403,
plygnLo : 127.132739245487,
plygnLa : 37.4745554098193
},
{
setSeqNo : 1,
plygnSeqNo : 8404,
plygnLo : 127.132726575655,
plygnLa : 37.4743761064333
},
{
setSeqNo : 1,
plygnSeqNo : 8405,
plygnLo : 127.132713874191,
plygnLa : 37.4743662365417
},
{
setSeqNo : 1,
plygnSeqNo : 8406,
plygnLo : 127.132687042562,
plygnLa : 37.4742858248517
},
{
setSeqNo : 1,
plygnSeqNo : 8407,
plygnLo : 127.132592563619,
plygnLa : 37.4727950231151
},
{
setSeqNo : 1,
plygnSeqNo : 8408,
plygnLo : 127.13260071132,
plygnLa : 37.4725278668468
},
{
setSeqNo : 1,
plygnSeqNo : 8409,
plygnLo : 127.132623541584,
plygnLa : 37.4723953941527
},
{
setSeqNo : 1,
plygnSeqNo : 8410,
plygnLo : 127.132658730802,
plygnLa : 37.4722646466712
},
{
setSeqNo : 1,
plygnSeqNo : 8411,
plygnLo : 127.132697390599,
plygnLa : 37.4721598712271
},
{
setSeqNo : 1,
plygnSeqNo : 8412,
plygnLo : 127.132759186468,
plygnLa : 37.4719943605229
},
{
setSeqNo : 1,
plygnSeqNo : 8413,
plygnLo : 127.132800161736,
plygnLa : 37.4718498302348
},
{
setSeqNo : 1,
plygnSeqNo : 8414,
plygnLo : 127.132828845493,
plygnLa : 37.4717034395028
},
{
setSeqNo : 1,
plygnSeqNo : 8415,
plygnLo : 127.132845116949,
plygnLa : 37.4715377991189
},
{
setSeqNo : 1,
plygnSeqNo : 8416,
plygnLo : 127.132824236053,
plygnLa : 37.4712009644584
},
{
setSeqNo : 1,
plygnSeqNo : 8417,
plygnLo : 127.132656748449,
plygnLa : 37.4712075655846
},
{
setSeqNo : 1,
plygnSeqNo : 8418,
plygnLo : 127.132640806828,
plygnLa : 37.4710833169828
},
{
setSeqNo : 1,
plygnSeqNo : 8419,
plygnLo : 127.132615529454,
plygnLa : 37.4709600428065
},
{
setSeqNo : 1,
plygnSeqNo : 8420,
plygnLo : 127.132581030236,
plygnLa : 37.4708382114448
},
{
setSeqNo : 1,
plygnSeqNo : 8421,
plygnLo : 127.132550804052,
plygnLa : 37.4707600066786
},
{
setSeqNo : 1,
plygnSeqNo : 8422,
plygnLo : 127.132533540502,
plygnLa : 37.4707153403004
},
{
setSeqNo : 1,
plygnSeqNo : 8423,
plygnLo : 127.132504256064,
plygnLa : 37.4706471668547
},
{
setSeqNo : 1,
plygnSeqNo : 8424,
plygnLo : 127.13247725158,
plygnLa : 37.470589893008
},
{
setSeqNo : 1,
plygnSeqNo : 8425,
plygnLo : 127.132458420882,
plygnLa : 37.4705524321592
},
{
setSeqNo : 1,
plygnSeqNo : 8426,
plygnLo : 127.132429272089,
plygnLa : 37.4704971428827
},
{
setSeqNo : 1,
plygnSeqNo : 8427,
plygnLo : 127.132378472117,
plygnLa : 37.4704075493695
},
{
setSeqNo : 1,
plygnSeqNo : 8428,
plygnLo : 127.132331196404,
plygnLa : 37.4703293045674
},
{
setSeqNo : 1,
plygnSeqNo : 8429,
plygnLo : 127.132267037749,
plygnLa : 37.4702283731548
},
{
setSeqNo : 1,
plygnSeqNo : 8430,
plygnLo : 127.131982776498,
plygnLa : 37.4697982782561
},
{
setSeqNo : 1,
plygnSeqNo : 8431,
plygnLo : 127.131996372477,
plygnLa : 37.4697509605921
},
{
setSeqNo : 1,
plygnSeqNo : 8432,
plygnLo : 127.132013586903,
plygnLa : 37.4697042696324
},
{
setSeqNo : 1,
plygnSeqNo : 8433,
plygnLo : 127.132034194313,
plygnLa : 37.4696585660258
},
{
setSeqNo : 1,
plygnSeqNo : 8434,
plygnLo : 127.132058307742,
plygnLa : 37.4696138496455
},
{
setSeqNo : 1,
plygnSeqNo : 8435,
plygnLo : 127.132085588528,
plygnLa : 37.4695703911645
},
{
setSeqNo : 1,
plygnSeqNo : 8436,
plygnLo : 127.132167136887,
plygnLa : 37.4694660549927
},
{
setSeqNo : 1,
plygnSeqNo : 8437,
plygnLo : 127.132243707081,
plygnLa : 37.4693593816622
},
{
setSeqNo : 1,
plygnSeqNo : 8438,
plygnLo : 127.132319245236,
plygnLa : 37.4692444201952
},
{
setSeqNo : 1,
plygnSeqNo : 8439,
plygnLo : 127.132349803317,
plygnLa : 37.4691357254058
},
{
setSeqNo : 1,
plygnSeqNo : 8440,
plygnLo : 127.132414848312,
plygnLa : 37.4690323083291
},
{
setSeqNo : 1,
plygnSeqNo : 8441,
plygnLo : 127.132498347222,
plygnLa : 37.4688803066984
},
{
setSeqNo : 1,
plygnSeqNo : 8442,
plygnLo : 127.132557180492,
plygnLa : 37.4687803202355
},
{
setSeqNo : 1,
plygnSeqNo : 8443,
plygnLo : 127.132705328089,
plygnLa : 37.4685447327712
},
{
setSeqNo : 1,
plygnSeqNo : 8444,
plygnLo : 127.132799600376,
plygnLa : 37.468393701049
},
{
setSeqNo : 1,
plygnSeqNo : 8445,
plygnLo : 127.132132302559,
plygnLa : 37.468228160354
},
{
setSeqNo : 1,
plygnSeqNo : 8446,
plygnLo : 127.132045005345,
plygnLa : 37.4682045514164
},
{
setSeqNo : 1,
plygnSeqNo : 8447,
plygnLo : 127.131959341151,
plygnLa : 37.4681774176893
},
{
setSeqNo : 1,
plygnSeqNo : 8448,
plygnLo : 127.131874642612,
plygnLa : 37.4681465076315
},
{
setSeqNo : 1,
plygnSeqNo : 8449,
plygnLo : 127.131795290938,
plygnLa : 37.4681155826083
},
{
setSeqNo : 1,
plygnSeqNo : 8450,
plygnLo : 127.131649548968,
plygnLa : 37.4680585301408
},
{
setSeqNo : 1,
plygnSeqNo : 8451,
plygnLo : 127.131011559974,
plygnLa : 37.4678087784504
},
{
setSeqNo : 1,
plygnSeqNo : 8452,
plygnLo : 127.130919596585,
plygnLa : 37.4677729471784
},
{
setSeqNo : 1,
plygnSeqNo : 8453,
plygnLo : 127.13087554104,
plygnLa : 37.4677576062763
},
{
setSeqNo : 1,
plygnSeqNo : 8454,
plygnLo : 127.130830009906,
plygnLa : 37.4677452943432
},
{
setSeqNo : 1,
plygnSeqNo : 8455,
plygnLo : 127.130783240733,
plygnLa : 37.4677361102281
},
{
setSeqNo : 1,
plygnSeqNo : 8456,
plygnLo : 127.130735844068,
plygnLa : 37.467730134352
},
{
setSeqNo : 1,
plygnSeqNo : 8457,
plygnLo : 127.130687899081,
plygnLa : 37.4677273936579
},
{
setSeqNo : 1,
plygnSeqNo : 8458,
plygnLo : 127.130639812724,
plygnLa : 37.4677278967105
},
{
setSeqNo : 1,
plygnSeqNo : 8459,
plygnLo : 127.130584634932,
plygnLa : 37.4677327503244
},
{
setSeqNo : 1,
plygnSeqNo : 8460,
plygnLo : 127.130544708048,
plygnLa : 37.467738659456
},
{
setSeqNo : 1,
plygnSeqNo : 8461,
plygnLo : 127.130189215924,
plygnLa : 37.4678039462746
},
{
setSeqNo : 1,
plygnSeqNo : 8462,
plygnLo : 127.129303023602,
plygnLa : 37.4679666920535
},
{
setSeqNo : 1,
plygnSeqNo : 8463,
plygnLo : 127.129268155121,
plygnLa : 37.4679759650358
},
{
setSeqNo : 1,
plygnSeqNo : 8464,
plygnLo : 127.129201049752,
plygnLa : 37.4679998510751
},
{
setSeqNo : 1,
plygnSeqNo : 8465,
plygnLo : 127.129169106597,
plygnLa : 37.4680143647059
},
{
setSeqNo : 1,
plygnSeqNo : 8466,
plygnLo : 127.129062213112,
plygnLa : 37.4680661616678
},
{
setSeqNo : 1,
plygnSeqNo : 8467,
plygnLo : 127.128973266854,
plygnLa : 37.4681092535063
},
{
setSeqNo : 1,
plygnSeqNo : 8468,
plygnLo : 127.128738809724,
plygnLa : 37.4682228703672
},
{
setSeqNo : 1,
plygnSeqNo : 8469,
plygnLo : 127.128628363469,
plygnLa : 37.4682730759843
},
{
setSeqNo : 1,
plygnSeqNo : 8470,
plygnLo : 127.128514063852,
plygnLa : 37.4683174741686
},
{
setSeqNo : 1,
plygnSeqNo : 8471,
plygnLo : 127.128396396631,
plygnLa : 37.4683558661667
},
{
setSeqNo : 1,
plygnSeqNo : 8472,
plygnLo : 127.128268310504,
plygnLa : 37.4683896921271
},
{
setSeqNo : 1,
plygnSeqNo : 8473,
plygnLo : 127.128229110577,
plygnLa : 37.4683979873546
},
{
setSeqNo : 1,
plygnSeqNo : 8474,
plygnLo : 127.127571779867,
plygnLa : 37.4685219932402
},
{
setSeqNo : 1,
plygnSeqNo : 8475,
plygnLo : 127.127163241002,
plygnLa : 37.4685962970849
},
{
setSeqNo : 1,
plygnSeqNo : 8476,
plygnLo : 127.126919845029,
plygnLa : 37.4686405644844
},
{
setSeqNo : 1,
plygnSeqNo : 8477,
plygnLo : 127.126832700656,
plygnLa : 37.4685859299969
},
{
setSeqNo : 1,
plygnSeqNo : 8478,
plygnLo : 127.126667235118,
plygnLa : 37.4686251456097
},
  ] };
  res.json(data);
});
module.exports = router;
