'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var indexModel = function () {
  function indexModel(ctx) {
    _classCallCheck(this, indexModel);

    this.ctx = ctx;
  }

  _createClass(indexModel, [{
    key: 'updateNum',
    value: function updateNum() {
      var option = {
        uri: 'http://localhost/praise.php',
        method: 'get'
      };
      return new Promise(function (resolve, reject) {
        (0, _requestPromise2.default)(option).then(function (data) {
          var result = JSON.parse(data);
          if (result.status === 0) {
            resolve(result);
          } else {
            reject(result);
          }
        }).then(function (err) {
          reject(err);
        });
      });
    }
  }]);

  return indexModel;
}();

exports.default = indexModel;