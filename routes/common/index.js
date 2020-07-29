var express = require('express');
var router = express.Router();
var request = require('request');
var crypto  = require('crypto');
var restUrl = 'http://127.0.0.1:8080';
// var restUrl = 'http://deliverylabapi.gabia.io';



// 시도
router.post('/sido', function(req, res, next) {
  var body = {};
  var options = {
    uri : restUrl + '/api/common/sido',
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

// 시군구
router.post('/sigungu', function(req, res, next) {
  var body = {};
  if( req.body.sdCd ) body.sdCd = req.body.sdCd;
  var options = {
    uri : restUrl + '/api/common/sigungu',
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

// 읍면동
router.post('/emd', function(req, res, next) {
  var body = {};
  if( req.body.sdCd ) body.sdCd = req.body.sdCd;
  if( req.body.sggCd ) body.sggCd = req.body.sggCd;
  var options = {
    uri : restUrl + '/api/common/emd',
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

// 리
router.post('/ri', function(req, res, next) {
  var body = {};
  if( req.body.sdCd ) body.sdCd = req.body.sdCd;
  if( req.body.sggCd ) body.sggCd = req.body.sggCd;
  if( req.body.emdCd ) body.emdCd = req.body.emdCd;
  var options = {
    uri : restUrl + '/api/common/ri',
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

// 리
router.post('/bank', function(req, res, next) {
  var body = {};
  var options = {
    uri : restUrl + '/api/common/bank',
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
