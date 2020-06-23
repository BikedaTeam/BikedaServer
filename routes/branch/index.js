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
    plygnLo : 126.975559811895,
    plygnLa : 37.589680687615
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 2,
    plygnLo : 126.975491039014,
    plygnLa : 37.5895519937998
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 3,
    plygnLo : 126.975456382445,
    plygnLa : 37.5894832860493
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 4,
    plygnLo : 126.975444013916,
    plygnLa : 37.5894311973763
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 5,
    plygnLo : 126.975424226182,
    plygnLa : 37.5893554562057
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 6,
    plygnLo : 126.975361993816,
    plygnLa : 37.5892391613077
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 7,
    plygnLo : 126.975369452304,
    plygnLa : 37.5891828513969
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 8,
    plygnLo : 126.975406169993,
    plygnLa : 37.588893129766
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 9,
    plygnLo : 126.975375398826,
    plygnLa : 37.5888525876368
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 10,
    plygnLo : 126.975197436715,
    plygnLa : 37.5888153734438
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 11,
    plygnLo : 126.975156579923,
    plygnLa : 37.588800164708
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 12,
    plygnLo : 126.975126682428,
    plygnLa : 37.5887869225564
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 13,
    plygnLo : 126.97510740266,
    plygnLa : 37.588781007782
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 14,
    plygnLo : 126.975036290267,
    plygnLa : 37.5887728289245
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 15,
    plygnLo : 126.974954921002,
    plygnLa : 37.5887615483277
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 16,
    plygnLo : 126.974779252802,
    plygnLa : 37.5887381371115
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 17,
    plygnLo : 126.97469628293,
    plygnLa : 37.588738676898
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 18,
    plygnLo : 126.974664966916,
    plygnLa : 37.5887347324731
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 19,
    plygnLo : 126.974588729074,
    plygnLa : 37.5887169747082
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 20,
    plygnLo : 126.974555296216,
    plygnLa : 37.5887119035399
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 21,
    plygnLo : 126.97454096435,
    plygnLa : 37.5887059807932
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 22,
    plygnLo : 126.974489499168,
    plygnLa : 37.588658387997
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 23,
    plygnLo : 126.974481730954,
    plygnLa : 37.5886302304336
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 24,
    plygnLo : 126.97447289784,
    plygnLa : 37.5886037664777
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 25,
    plygnLo : 126.974494316154,
    plygnLa : 37.5885505501928
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 26,
    plygnLo : 126.974518912153,
    plygnLa : 37.5885392935073
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 27,
    plygnLo : 126.974530954514,
    plygnLa : 37.5885204386427
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 28,
    plygnLo : 126.974544225972,
    plygnLa : 37.588484122966
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 29,
    plygnLo : 126.974542310497,
    plygnLa : 37.5884269640318
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 30,
    plygnLo : 126.974533814922,
    plygnLa : 37.5884064016092
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 31,
    plygnLo : 126.974531354297,
    plygnLa : 37.5883852909649
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 32,
    plygnLo : 126.974507653798,
    plygnLa : 37.5883624726002
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 33,
    plygnLo : 126.974472998593,
    plygnLa : 37.5883253080377
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 34,
    plygnLo : 126.974339708433,
    plygnLa : 37.5880276640013
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 35,
    plygnLo : 126.974342739274,
    plygnLa : 37.5879750111242
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 36,
    plygnLo : 126.974342405278,
    plygnLa : 37.5879282769447
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 37,
    plygnLo : 126.974332329625,
    plygnLa : 37.5878942083738
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 38,
    plygnLo : 126.974328092729,
    plygnLa : 37.5878697096099
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 39,
    plygnLo : 126.974324564417,
    plygnLa : 37.5878581671765
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 40,
    plygnLo : 126.974307056025,
    plygnLa : 37.5878390172057
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 41,
    plygnLo : 126.974255767378,
    plygnLa : 37.5877750894792
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 42,
    plygnLo : 126.974222180556,
    plygnLa : 37.5877277799923
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 43,
    plygnLo : 126.974209089495,
    plygnLa : 37.5877041261017
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 44,
    plygnLo : 126.974153237522,
    plygnLa : 37.5875802276947
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 45,
    plygnLo : 126.974151464075,
    plygnLa : 37.5875689649678
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 46,
    plygnLo : 126.974131338298,
    plygnLa : 37.5874628152252
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 47,
    plygnLo : 126.974112956631,
    plygnLa : 37.5874171940741
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 48,
    plygnLo : 126.974067890821,
    plygnLa : 37.5873045604407
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 49,
    plygnLo : 126.974031659587,
    plygnLa : 37.5872138948676
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 50,
    plygnLo : 126.974011864444,
    plygnLa : 37.587163768443
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 51,
    plygnLo : 126.973989781631,
    plygnLa : 37.5870846477732
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 52,
    plygnLo : 126.973970701379,
    plygnLa : 37.586999617335
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 53,
    plygnLo : 126.973972852225,
    plygnLa : 37.5869390806309
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 54,
    plygnLo : 126.9739751563,
    plygnLa : 37.5869235932302
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 55,
    plygnLo : 126.973982777548,
    plygnLa : 37.5868886818254
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 56,
    plygnLo : 126.973999599918,
    plygnLa : 37.5868329417834
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 57,
    plygnLo : 126.974026171597,
    plygnLa : 37.5867434080477
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 58,
    plygnLo : 126.974036470091,
    plygnLa : 37.5866324811235
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 59,
    plygnLo : 126.973956353701,
    plygnLa : 37.5865769887722
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 60,
    plygnLo : 126.973998473415,
    plygnLa : 37.5865406798772
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 61,
    plygnLo : 126.973982728526,
    plygnLa : 37.5865299815084
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 62,
    plygnLo : 126.973845251792,
    plygnLa : 37.5865758365465
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 63,
    plygnLo : 126.973807934946,
    plygnLa : 37.5865749898758
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 64,
    plygnLo : 126.973766715689,
    plygnLa : 37.5865642764856
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 65,
    plygnLo : 126.973686952961,
    plygnLa : 37.5865023149586
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 66,
    plygnLo : 126.97365617836,
    plygnLa : 37.5864761250621
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 67,
    plygnLo : 126.973583325248,
    plygnLa : 37.586405993157
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 68,
    plygnLo : 126.973545307325,
    plygnLa : 37.5863727648205
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 69,
    plygnLo : 126.973488526381,
    plygnLa : 37.586346568714
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 70,
    plygnLo : 126.9734439431,
    plygnLa : 37.5863400800336
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 71,
    plygnLo : 126.973431388364,
    plygnLa : 37.5863366983516
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 72,
    plygnLo : 126.973369839798,
    plygnLa : 37.5863135914335
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 73,
    plygnLo : 126.973270269013,
    plygnLa : 37.586239245357
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 74,
    plygnLo : 126.973211555083,
    plygnLa : 37.586175594688
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 75,
    plygnLo : 126.97319493005,
    plygnLa : 37.5861575709906
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 76,
    plygnLo : 126.973115176361,
    plygnLa : 37.58607421067
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 77,
    plygnLo : 126.973010997771,
    plygnLa : 37.5860305418193
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 78,
    plygnLo : 126.972985710624,
    plygnLa : 37.5860150477691
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 79,
    plygnLo : 126.972967672599,
    plygnLa : 37.5859913925382
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 80,
    plygnLo : 126.972898191168,
    plygnLa : 37.5859004392449
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 81,
    plygnLo : 126.972884215909,
    plygnLa : 37.5858815692189
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 82,
    plygnLo : 126.972870953395,
    plygnLa : 37.5858641049016
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 83,
    plygnLo : 126.972810621629,
    plygnLa : 37.5858874618088
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 84,
    plygnLo : 126.972722331942,
    plygnLa : 37.5859217948816
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 85,
    plygnLo : 126.972663947881,
    plygnLa : 37.585944016947
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 86,
    plygnLo : 126.972606676601,
    plygnLa : 37.5858406779145
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 87,
    plygnLo : 126.972567247682,
    plygnLa : 37.5857691480193
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 88,
    plygnLo : 126.972548511059,
    plygnLa : 37.5857373296231
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 89,
    plygnLo : 126.972496888589,
    plygnLa : 37.5856368029949
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 90,
    plygnLo : 126.972483459006,
    plygnLa : 37.5856125812006
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 91,
    plygnLo : 126.972450931471,
    plygnLa : 37.585554297449
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 92,
    plygnLo : 126.972446690397,
    plygnLa : 37.5855424664641
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 93,
    plygnLo : 126.972386182877,
    plygnLa : 37.5855523083289
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 94,
    plygnLo : 126.972343768329,
    plygnLa : 37.5854441795843
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 95,
    plygnLo : 126.97230171356,
    plygnLa : 37.5853428083036
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 96,
    plygnLo : 126.972259467317,
    plygnLa : 37.5852391844947
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 97,
    plygnLo : 126.972258235232,
    plygnLa : 37.5852341116403
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 98,
    plygnLo : 126.972130346153,
    plygnLa : 37.585201707457
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 99,
    plygnLo : 126.972014479767,
    plygnLa : 37.585172108206
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 100,
    plygnLo : 126.97198529488,
    plygnLa : 37.5851656228212
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 101,
    plygnLo : 126.971972045942,
    plygnLa : 37.5851146597584
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 102,
    plygnLo : 126.97195067326,
    plygnLa : 37.58505045918
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 103,
    plygnLo : 126.971925580561,
    plygnLa : 37.5849741574271
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 104,
    plygnLo : 126.971908969823,
    plygnLa : 37.5849214996597
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 105,
    plygnLo : 126.971891838536,
    plygnLa : 37.5848682741379
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 106,
    plygnLo : 126.97188794934,
    plygnLa : 37.584854479071
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 107,
    plygnLo : 126.971883358201,
    plygnLa : 37.5848406838278
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 108,
    plygnLo : 126.971875919179,
    plygnLa : 37.5848423758131
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 109,
    plygnLo : 126.971833477488,
    plygnLa : 37.584805478794
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 110,
    plygnLo : 126.97164308613,
    plygnLa : 37.584933541915
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 111,
    plygnLo : 126.971463665323,
    plygnLa : 37.5850323164763
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 112,
    plygnLo : 126.971137049712,
    plygnLa : 37.5851600647082
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 113,
    plygnLo : 126.971129808609,
    plygnLa : 37.585148232903
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 114,
    plygnLo : 126.97112662949,
    plygnLa : 37.5851426009243
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 115,
    plygnLo : 126.971066334956,
    plygnLa : 37.5850468556615
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 116,
    plygnLo : 126.970958128565,
    plygnLa : 37.5849198517895
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 117,
    plygnLo : 126.970899613319,
    plygnLa : 37.5848207191924
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 118,
    plygnLo : 126.970873805861,
    plygnLa : 37.5847784832967
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 119,
    plygnLo : 126.970822358551,
    plygnLa : 37.5846996336817
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 120,
    plygnLo : 126.970809449088,
    plygnLa : 37.5846787905248
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 121,
    plygnLo : 126.970767202015,
    plygnLa : 37.5846106469878
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 122,
    plygnLo : 126.970721764754,
    plygnLa : 37.5845365831264
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 123,
    plygnLo : 126.97068447277,
    plygnLa : 37.5844780093192
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 124,
    plygnLo : 126.970651046677,
    plygnLa : 37.5844343658443
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 125,
    plygnLo : 126.970564234477,
    plygnLa : 37.5843200260405
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 126,
    plygnLo : 126.970534531354,
    plygnLa : 37.5842811587322
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 127,
    plygnLo : 126.970432143976,
    plygnLa : 37.5842141255023
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 128,
    plygnLo : 126.970314166064,
    plygnLa : 37.5841763610906
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 129,
    plygnLo : 126.970230073948,
    plygnLa : 37.5843275422625
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 130,
    plygnLo : 126.970181545817,
    plygnLa : 37.584471407803
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 131,
    plygnLo : 126.970105379932,
    plygnLa : 37.5846994450626
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 132,
    plygnLo : 126.9700779193,
    plygnLa : 37.5847934826379
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 133,
    plygnLo : 126.970039531624,
    plygnLa : 37.5847836156239
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 134,
    plygnLo : 126.969992132259,
    plygnLa : 37.5847728992646
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 135,
    plygnLo : 126.969964191392,
    plygnLa : 37.5847436097642
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 136,
    plygnLo : 126.969887609909,
    plygnLa : 37.5847207853208
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 137,
    plygnLo : 126.969746256565,
    plygnLa : 37.5847260992146
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 138,
    plygnLo : 126.969715125319,
    plygnLa : 37.5847182072066
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 139,
    plygnLo : 126.969715308264,
    plygnLa : 37.584713981633
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 140,
    plygnLo : 126.969653388969,
    plygnLa : 37.5847164967045
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 141,
    plygnLo : 126.969623487955,
    plygnLa : 37.5847176148613
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 142,
    plygnLo : 126.969640799139,
    plygnLa : 37.5847964557849
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 143,
    plygnLo : 126.969645906973,
    plygnLa : 37.5848454527652
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 144,
    plygnLo : 126.9696444854,
    plygnLa : 37.584860372704
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 145,
    plygnLo : 126.969619105127,
    plygnLa : 37.5850391574417
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 146,
    plygnLo : 126.969598701934,
    plygnLa : 37.5851751376876
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 147,
    plygnLo : 126.969167100048,
    plygnLa : 37.5851099870489
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 148,
    plygnLo : 126.969106418991,
    plygnLa : 37.5851020867787
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 149,
    plygnLo : 126.969125403189,
    plygnLa : 37.5853949123124
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 150,
    plygnLo : 126.969148736234,
    plygnLa : 37.5858420327929
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 151,
    plygnLo : 126.969148905086,
    plygnLa : 37.585844285303
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 152,
    plygnLo : 126.969136699899,
    plygnLa : 37.5858448405665
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 153,
    plygnLo : 126.9688881461,
    plygnLa : 37.5858571606723
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 154,
    plygnLo : 126.968748918305,
    plygnLa : 37.5858641588008
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 155,
    plygnLo : 126.968697617912,
    plygnLa : 37.5858666853275
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 156,
    plygnLo : 126.968680102772,
    plygnLa : 37.5858672390673
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 157,
    plygnLo : 126.968626503917,
    plygnLa : 37.5858700442292
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 158,
    plygnLo : 126.968558571231,
    plygnLa : 37.5858736832819
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 159,
    plygnLo : 126.968512920553,
    plygnLa : 37.5858759229903
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 160,
    plygnLo : 126.968488340451,
    plygnLa : 37.5858767630414
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 161,
    plygnLo : 126.968454895716,
    plygnLa : 37.5858767536784
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 162,
    plygnLo : 126.968397767551,
    plygnLa : 37.5858725120412
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 163,
    plygnLo : 126.968343627984,
    plygnLa : 37.5858691181426
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 164,
    plygnLo : 126.968334084044,
    plygnLa : 37.5858682685336
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 165,
    plygnLo : 126.968322050299,
    plygnLa : 37.5858651657599
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 166,
    plygnLo : 126.96829551527,
    plygnLa : 37.5858575629868
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 167,
    plygnLo : 126.968229720491,
    plygnLa : 37.5858400833516
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 168,
    plygnLo : 126.968149764005,
    plygnLa : 37.5858183830649
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 169,
    plygnLo : 126.968048592844,
    plygnLa : 37.5857913248568
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 170,
    plygnLo : 126.967892211957,
    plygnLa : 37.5857743869347
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 171,
    plygnLo : 126.967848874017,
    plygnLa : 37.5857698696538
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 172,
    plygnLo : 126.967763432233,
    plygnLa : 37.5857608353971
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 173,
    plygnLo : 126.967633599752,
    plygnLa : 37.5857470041112
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 174,
    plygnLo : 126.967543029491,
    plygnLa : 37.5857374006018
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 175,
    plygnLo : 126.967514896034,
    plygnLa : 37.5857345814262
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 176,
    plygnLo : 126.967440606072,
    plygnLa : 37.5857261087587
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 177,
    plygnLo : 126.967322418187,
    plygnLa : 37.5857494461447
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 178,
    plygnLo : 126.967266336145,
    plygnLa : 37.5857604128985
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 179,
    plygnLo : 126.967154343786,
    plygnLa : 37.5857781117443
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 180,
    plygnLo : 126.967091368387,
    plygnLa : 37.5857854184068
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 181,
    plygnLo : 126.967072972223,
    plygnLa : 37.5857814757335
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 182,
    plygnLo : 126.967054756824,
    plygnLa : 37.5857783710266
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 183,
    plygnLo : 126.967038126741,
    plygnLa : 37.5857747081689
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 184,
    plygnLo : 126.967014953295,
    plygnLa : 37.5857696288492
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 185,
    plygnLo : 126.967005751376,
    plygnLa : 37.5857637156942
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 186,
    plygnLo : 126.966937319656,
    plygnLa : 37.5857203312334
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 187,
    plygnLo : 126.966858801354,
    plygnLa : 37.5856502025208
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 188,
    plygnLo : 126.966839187618,
    plygnLa : 37.5856107786427
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 189,
    plygnLo : 126.96682255706,
    plygnLa : 37.5856082419864
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 190,
    plygnLo : 126.96670934687,
    plygnLa : 37.585591315178
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 191,
    plygnLo : 126.966688648385,
    plygnLa : 37.5855960933058
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 192,
    plygnLo : 126.966655914424,
    plygnLa : 37.5856017148025
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 193,
    plygnLo : 126.966620882002,
    plygnLa : 37.5856076149162
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 194,
    plygnLo : 126.96646342909,
    plygnLa : 37.5856329129864
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 195,
    plygnLo : 126.966461130632,
    plygnLa : 37.5856331916094
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 196,
    plygnLo : 126.966418500847,
    plygnLa : 37.5856399363328
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 197,
    plygnLo : 126.966387895614,
    plygnLa : 37.5856449907672
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 198,
    plygnLo : 126.966307923428,
    plygnLa : 37.5856582024175
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 199,
    plygnLo : 126.966161288759,
    plygnLa : 37.5856226867871
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 200,
    plygnLo : 126.966152259554,
    plygnLa : 37.5856347843181
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 201,
    plygnLo : 126.966086821249,
    plygnLa : 37.5856071765172
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 202,
    plygnLo : 126.966026680127,
    plygnLa : 37.5855826606532
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 203,
    plygnLo : 126.965936112546,
    plygnLa : 37.5855682806881
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 204,
    plygnLo : 126.965849094237,
    plygnLa : 37.5855423420814
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 205,
    plygnLo : 126.965743318199,
    plygnLa : 37.5855113431982
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 206,
    plygnLo : 126.965652746574,
    plygnLa : 37.5855056845545
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 207,
    plygnLo : 126.965617179696,
    plygnLa : 37.5855163684414
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 208,
    plygnLo : 126.965476170691,
    plygnLa : 37.5855551849784
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 209,
    plygnLo : 126.965416191106,
    plygnLa : 37.5855717808233
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 210,
    plygnLo : 126.965345260984,
    plygnLa : 37.5855697859506
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 211,
    plygnLo : 126.965256272868,
    plygnLa : 37.5855672268783
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 212,
    plygnLo : 126.965179682403,
    plygnLa : 37.5855641039352
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 213,
    plygnLo : 126.965140058847,
    plygnLa : 37.5855584605712
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 214,
    plygnLo : 126.965044161353,
    plygnLa : 37.5855854605453
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 215,
    plygnLo : 126.965021158662,
    plygnLa : 37.585602067609
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 216,
    plygnLo : 126.964757045073,
    plygnLa : 37.5859443601499
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 217,
    plygnLo : 126.964680539158,
    plygnLa : 37.5861135503818
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 218,
    plygnLo : 126.964318000315,
    plygnLa : 37.5862516838951
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 219,
    plygnLo : 126.964113316991,
    plygnLa : 37.5862409155064
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 220,
    plygnLo : 126.964037246407,
    plygnLa : 37.5862383596078
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 221,
    plygnLo : 126.964001531178,
    plygnLa : 37.5862276535649
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 222,
    plygnLo : 126.963984902986,
    plygnLa : 37.5862203232673
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 223,
    plygnLo : 126.963215148241,
    plygnLa : 37.5859579432932
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 224,
    plygnLo : 126.962778624627,
    plygnLa : 37.5861506748002
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 225,
    plygnLo : 126.962390299149,
    plygnLa : 37.5861862978227
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 226,
    plygnLo : 126.962315469807,
    plygnLa : 37.5861919041542
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 227,
    plygnLo : 126.962286279157,
    plygnLa : 37.5861972463097
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 228,
    plygnLo : 126.96223549203,
    plygnLa : 37.5862132759703
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 229,
    plygnLo : 126.962082092166,
    plygnLa : 37.5862551747036
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 230,
    plygnLo : 126.961521674463,
    plygnLa : 37.5865627357334
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 231,
    plygnLo : 126.96143497173,
    plygnLa : 37.5865824108742
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 232,
    plygnLo : 126.961633785983,
    plygnLa : 37.5866447002675
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 233,
    plygnLo : 126.961666683849,
    plygnLa : 37.5866517570841
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 234,
    plygnLo : 126.961681715065,
    plygnLa : 37.5866599250852
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 235,
    plygnLo : 126.961988377076,
    plygnLa : 37.5868402252493
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 236,
    plygnLo : 126.962216561747,
    plygnLa : 37.5869025234904
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 237,
    plygnLo : 126.962247512695,
    plygnLa : 37.5869090118759
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 238,
    plygnLo : 126.962391972175,
    plygnLa : 37.5870349184868
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 239,
    plygnLo : 126.962323075883,
    plygnLa : 37.5871894686688
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 240,
    plygnLo : 126.962399507117,
    plygnLa : 37.5875214530337
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 241,
    plygnLo : 126.962603775546,
    plygnLa : 37.5876394955573
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 242,
    plygnLo : 126.962948650504,
    plygnLa : 37.5878305004839
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 243,
    plygnLo : 126.963041701949,
    plygnLa : 37.5878187099258
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 244,
    plygnLo : 126.963173128889,
    plygnLa : 37.5878637929422
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 245,
    plygnLo : 126.963335766959,
    plygnLa : 37.5880944438074
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 246,
    plygnLo : 126.963422243599,
    plygnLa : 37.5881431880153
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 247,
    plygnLo : 126.963507100603,
    plygnLa : 37.588260055124
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 248,
    plygnLo : 126.963517348802,
    plygnLa : 37.5883014496803
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 249,
    plygnLo : 126.963565904972,
    plygnLa : 37.5884670213161
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 250,
    plygnLo : 126.963658031825,
    plygnLa : 37.5885608074094
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 251,
    plygnLo : 126.963797344722,
    plygnLa : 37.5887326067944
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 252,
    plygnLo : 126.963886472797,
    plygnLa : 37.5888018939636
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 253,
    plygnLo : 126.964001784003,
    plygnLa : 37.5888821723969
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 254,
    plygnLo : 126.964119204695,
    plygnLa : 37.588978506938
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 255,
    plygnLo : 126.964195409805,
    plygnLa : 37.5890573672467
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 256,
    plygnLo : 126.964239074388,
    plygnLa : 37.5891367848532
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 257,
    plygnLo : 126.964243219315,
    plygnLa : 37.5893392194677
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 258,
    plygnLo : 126.964216480896,
    plygnLa : 37.5893972164329
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 259,
    plygnLo : 126.964171311695,
    plygnLa : 37.5894963104946
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 260,
    plygnLo : 126.964143497036,
    plygnLa : 37.5895779489457
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 261,
    plygnLo : 126.964140426844,
    plygnLa : 37.5896947967078
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 262,
    plygnLo : 126.964111515921,
    plygnLa : 37.5898400713644
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 263,
    plygnLo : 126.964112691222,
    plygnLa : 37.5899802830035
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 264,
    plygnLo : 126.964207620804,
    plygnLa : 37.5901123703983
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 265,
    plygnLo : 126.964271256479,
    plygnLa : 37.5902193824452
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 266,
    plygnLo : 126.964303266116,
    plygnLa : 37.5902630272367
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 267,
    plygnLo : 126.964328352685,
    plygnLa : 37.5903168149272
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 268,
    plygnLo : 126.964358213318,
    plygnLa : 37.5904015799725
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 269,
    plygnLo : 126.964410691713,
    plygnLa : 37.590518724505
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 270,
    plygnLo : 126.964437514186,
    plygnLa : 37.590656971028
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 271,
    plygnLo : 126.964489661852,
    plygnLa : 37.5907566633419
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 272,
    plygnLo : 126.964503620117,
    plygnLa : 37.5907845441878
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 273,
    plygnLo : 126.96453931869,
    plygnLa : 37.5908563458409
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 274,
    plygnLo : 126.964564586281,
    plygnLa : 37.5909340636868
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 275,
    plygnLo : 126.964576061057,
    plygnLa : 37.5909698273621
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 276,
    plygnLo : 126.964690108191,
    plygnLa : 37.5911190840872
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 277,
    plygnLo : 126.964790198461,
    plygnLa : 37.5911920409741
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 278,
    plygnLo : 126.964819209289,
    plygnLa : 37.5912106373114
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 279,
    plygnLo : 126.9648888765,
    plygnLa : 37.5912821701047
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 280,
    plygnLo : 126.964983512366,
    plygnLa : 37.5913264107519
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 281,
    plygnLo : 126.965005790846,
    plygnLa : 37.5913357067973
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 282,
    plygnLo : 126.965059034098,
    plygnLa : 37.591350643561
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 283,
    plygnLo : 126.965068938693,
    plygnLa : 37.5913562777741
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 284,
    plygnLo : 126.965160386698,
    plygnLa : 37.5913903722073
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 285,
    plygnLo : 126.965276812785,
    plygnLa : 37.5913774608622
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 286,
    plygnLo : 126.965346510838,
    plygnLa : 37.5913864920879
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 287,
    plygnLo : 126.965539708788,
    plygnLa : 37.5913885242908
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 288,
    plygnLo : 126.965732172124,
    plygnLa : 37.5914113867199
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 289,
    plygnLo : 126.96579921645,
    plygnLa : 37.5914294267202
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 290,
    plygnLo : 126.96580329356,
    plygnLa : 37.5914274547975
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 291,
    plygnLo : 126.96593119121,
    plygnLa : 37.5914584602692
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 292,
    plygnLo : 126.965961953422,
    plygnLa : 37.5914855080889
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 293,
    plygnLo : 126.96601041567,
    plygnLa : 37.5915308512144
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 294,
    plygnLo : 126.966035519535,
    plygnLa : 37.5915516895282
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 295,
    plygnLo : 126.966039939763,
    plygnLa : 37.5915663318571
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 296,
    plygnLo : 126.96611173861,
    plygnLa : 37.5916347741882
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 297,
    plygnLo : 126.966184420761,
    plygnLa : 37.5917032167392
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 298,
    plygnLo : 126.966318263781,
    plygnLa : 37.5918778224941
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 299,
    plygnLo : 126.966327976639,
    plygnLa : 37.5919062604635
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 300,
    plygnLo : 126.966369145341,
    plygnLa : 37.5920284642571
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 301,
    plygnLo : 126.9663841575,
    plygnLa : 37.5920805636534
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 302,
    plygnLo : 126.966384322782,
    plygnLa : 37.5921143506231
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 303,
    plygnLo : 126.966383740314,
    plygnLa : 37.5922213423635
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 304,
    plygnLo : 126.966384941942,
    plygnLa : 37.5922906014014
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 305,
    plygnLo : 126.966387920592,
    plygnLa : 37.5923612755131
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 306,
    plygnLo : 126.966393042689,
    plygnLa : 37.5923764766461
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 307,
    plygnLo : 126.966406991384,
    plygnLa : 37.5924268818691
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 308,
    plygnLo : 126.966418646583,
    plygnLa : 37.5924665917222
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 309,
    plygnLo : 126.966449746754,
    plygnLa : 37.5925468426444
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 310,
    plygnLo : 126.96645629516,
    plygnLa : 37.5925628911233
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 311,
    plygnLo : 126.96650388883,
    plygnLa : 37.5925550216371
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 312,
    plygnLo : 126.966518189696,
    plygnLa : 37.5926031744888
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 313,
    plygnLo : 126.966480851874,
    plygnLa : 37.5926166781784
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 314,
    plygnLo : 126.966478195987,
    plygnLa : 37.592630192157
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 315,
    plygnLo : 126.966415378379,
    plygnLa : 37.5926507249477
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 316,
    plygnLo : 126.966330251147,
    plygnLa : 37.5927027855122
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 317,
    plygnLo : 126.966316970038,
    plygnLa : 37.5927495246255
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 318,
    plygnLo : 126.966337632493,
    plygnLa : 37.5928255468431
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 319,
    plygnLo : 126.966396025134,
    plygnLa : 37.5928005078555
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 320,
    plygnLo : 126.966480905533,
    plygnLa : 37.5928886583693
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 321,
    plygnLo : 126.966588434211,
    plygnLa : 37.5929720312978
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 322,
    plygnLo : 126.966708180267,
    plygnLa : 37.5930317568905
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 323,
    plygnLo : 126.966817675646,
    plygnLa : 37.5930748651957
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 324,
    plygnLo : 126.966820687677,
    plygnLa : 37.593074586776
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 325,
    plygnLo : 126.967322534412,
    plygnLa : 37.5932417036593
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 326,
    plygnLo : 126.967411502171,
    plygnLa : 37.5932842378433
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 327,
    plygnLo : 126.967849636587,
    plygnLa : 37.5935028523374
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 328,
    plygnLo : 126.968044567751,
    plygnLa : 37.593591321372
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 329,
    plygnLo : 126.968137973949,
    plygnLa : 37.5936107730464
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 330,
    plygnLo : 126.968242007541,
    plygnLa : 37.5935905302744
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 331,
    plygnLo : 126.968318629443,
    plygnLa : 37.5935671803175
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 332,
    plygnLo : 126.968386578244,
    plygnLa : 37.5935429899612
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 333,
    plygnLo : 126.968473992245,
    plygnLa : 37.593516543546
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 334,
    plygnLo : 126.968640316487,
    plygnLa : 37.5934636571624
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 335,
    plygnLo : 126.968785604257,
    plygnLa : 37.5933806357953
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 336,
    plygnLo : 126.968922552149,
    plygnLa : 37.5933629423215
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 337,
    plygnLo : 126.969204550617,
    plygnLa : 37.5934162319962
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 338,
    plygnLo : 126.969386757067,
    plygnLa : 37.5934497893457
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 339,
    plygnLo : 126.969614260029,
    plygnLa : 37.5934996845021
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 340,
    plygnLo : 126.969842497664,
    plygnLa : 37.5934732750533
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 341,
    plygnLo : 126.970112818369,
    plygnLa : 37.593511080512
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 342,
    plygnLo : 126.970305281436,
    plygnLa : 37.5935781377692
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 343,
    plygnLo : 126.970475816243,
    plygnLa : 37.5936353411882
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 344,
    plygnLo : 126.970526746023,
    plygnLa : 37.5936927923219
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 345,
    plygnLo : 126.970790633035,
    plygnLa : 37.5938764368657
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 346,
    plygnLo : 126.970927940446,
    plygnLa : 37.5938390276242
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 347,
    plygnLo : 126.970983495599,
    plygnLa : 37.5938286266309
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 348,
    plygnLo : 126.971141550102,
    plygnLa : 37.5936991509197
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 349,
    plygnLo : 126.971195505836,
    plygnLa : 37.5936954977872
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 350,
    plygnLo : 126.971492208536,
    plygnLa : 37.5936823471877
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 351,
    plygnLo : 126.971547057629,
    plygnLa : 37.5936815142026
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 352,
    plygnLo : 126.971750111468,
    plygnLa : 37.5938288224629
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 353,
    plygnLo : 126.971894812974,
    plygnLa : 37.5938753136183
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 354,
    plygnLo : 126.972613370473,
    plygnLa : 37.5936803746115
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 355,
    plygnLo : 126.972847498458,
    plygnLa : 37.5935283906087
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 356,
    plygnLo : 126.973314333972,
    plygnLa : 37.5932303313157
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 357,
    plygnLo : 126.973392183566,
    plygnLa : 37.5932190875872
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 358,
    plygnLo : 126.973413415491,
    plygnLa : 37.593215434648
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 359,
    plygnLo : 126.973435176947,
    plygnLa : 37.5932188185191
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 360,
    plygnLo : 126.97358712302,
    plygnLa : 37.5932706611755
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 361,
    plygnLo : 126.973619525205,
    plygnLa : 37.5932211146973
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 362,
    plygnLo : 126.973660618056,
    plygnLa : 37.5930947072815
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 363,
    plygnLo : 126.973675135542,
    plygnLa : 37.5930603561713
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 364,
    plygnLo : 126.973684874422,
    plygnLa : 37.5930268508576
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 365,
    plygnLo : 126.973766104224,
    plygnLa : 37.5929683059967
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 366,
    plygnLo : 126.973756919423,
    plygnLa : 37.5929429681545
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 367,
    plygnLo : 126.973754624744,
    plygnLa : 37.5929325432248
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 368,
    plygnLo : 126.973642929198,
    plygnLa : 37.5926154874967
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 369,
    plygnLo : 126.973644517235,
    plygnLa : 37.5926078835627
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 370,
    plygnLo : 126.973679741838,
    plygnLa : 37.5925797361105
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 371,
    plygnLo : 126.973932638211,
    plygnLa : 37.5923644061291
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 372,
    plygnLo : 126.974081115392,
    plygnLa : 37.5922385822065
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 373,
    plygnLo : 126.974287642717,
    plygnLa : 37.5920542075039
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 374,
    plygnLo : 126.974410661036,
    plygnLa : 37.5919083934455
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 375,
    plygnLo : 126.974657907619,
    plygnLa : 37.591144586168
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 376,
    plygnLo : 126.974682525376,
    plygnLa : 37.591075044757
    },
    {
    setSeqNo : 1,
    plygnSeqNo : 377,
    plygnLo : 126.975559811895,
    plygnLa : 37.589680687615
    },


  ] };
  res.json(data);
});
module.exports = router;
