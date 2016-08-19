'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routesMainRoutes = require('./routes/main.routes');

var _routesMainRoutes2 = _interopRequireDefault(_routesMainRoutes);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2['default'].load();
var app = (0, _express2['default'])();

app.use((0, _morgan2['default'])('dev'));
app.set('views', _path2['default'].join(__dirname, '../src/app/views'));
app.set('view engine', 'hjs');
app.use('/', _routesMainRoutes2['default']);
app.use(_express2['default']['static'](_path2['default'].join(__dirname, '../src/app/static')));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
//# sourceMappingURL=index.js.map