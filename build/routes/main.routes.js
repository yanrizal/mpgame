'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var router = _express2['default'].Router();

var jsonParser = _bodyParser2['default'].json();
var urlencodedParser = _bodyParser2['default'].urlencoded({ extended: false });

router.get('/', function (req, res) {
  res.render('index', { title: 'index' });
});

router.get('/dashboard', function (req, res) {
  res.render('index', { title: 'index' });
});

router.get('/dashboard/products', function (req, res) {
  res.render('index', { title: 'index' });
});

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=main.routes.js.map