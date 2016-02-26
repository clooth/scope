"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spider = require("./lib/spider");

var _spider2 = _interopRequireDefault(_spider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scope = function Scope() {
  _classCallCheck(this, Scope);

  console.log("scope!");
};

exports.default = Scope;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enum = function Enum() {
  var _this = this;

  _classCallCheck(this, Enum);

  for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  props.forEach(function (p) {
    return _this[p] = Symbol(p);
  });
  Object.freeze(this);
};

exports.default = Enum;
'use strict';

var _enum = require('./enum');

var _enum2 = _interopRequireDefault(_enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Region = new _enum2.default('US', 'Europe', 'Korea', 'Taiwan', 'China', 'SouthEastAsia');
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _enum = require('./enum');

var _enum2 = _interopRequireDefault(_enum);

var _region = require('./region');

var _region2 = _interopRequireDefault(_region);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spider = function () {
  function Spider() {
    _classCallCheck(this, Spider);

    this.region = _region2.default.Europe;
  }

  _createClass(Spider, [{
    key: 'hostBaseName',
    value: function hostBaseName() {
      switch (this.region) {
        case _region2.default.US:
          return "https://us.api.battle.net/";
        case _region2.default.Europe:
          return "https://eu.api.battle.net/";
        case _region2.default.Korea:
          return "https://kr.api.battle.net/";
        case _region2.default.Taiwan:
          return "https://tw.api.battle.net/";
        case _region2.default.China:
          return "https://api.battlenet.com.cn/";
        case _region2.default.SouthEastAsia:
          return "https://sea.api.battle.net/";
      }
    }
  }, {
    key: 'regionLocales',
    value: function regionLocales() {
      switch (this.region) {
        case _region2.default.US:
          return ["en_US", "es_MX", "pt_BR"];
        case _region2.default.Europe:
          return ["en_GB", "es_ES", "fr_FR", "ru_RU", "de_DE", "pt_PT", "it_IT"];
        case _region2.default.Korea:
          return ["ko_KR"];
        case _region2.default.Taiwan:
          return ["zh_TW"];
        case _region2.default.China:
          return ["zh_CN"];
        case _region2.default.SouthEastAsia:
          return ["en_US"];
      }
    }
  }]);

  return Spider;
}();

exports.default = Spider;
//# sourceMappingURL=app.js.map
