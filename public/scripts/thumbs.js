'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton() {
    _classCallCheck(this, PraiseButton);
  }

  _createClass(PraiseButton, [{
    key: 'addNum',
    value: function addNum(num) {
      return num + 1;
    }
  }]);

  return PraiseButton;
}();

var ThumbsUp = function (_PraiseButton) {
  _inherits(ThumbsUp, _PraiseButton);

  function ThumbsUp($ele) {
    var limitNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, ThumbsUp);

    var _this = _possibleConstructorReturn(this, (ThumbsUp.__proto__ || Object.getPrototypeOf(ThumbsUp)).call(this));

    _this.num = 0;
    _this.limited = false;
    _this.limitNum = limitNum;
    _this.$ele = $ele;
    return _this;
  }

  _createClass(ThumbsUp, [{
    key: 'clickEvent',
    value: function clickEvent() {
      var self = this;
      if (!self.limited) {
        axios.get('/update').then(function (res) {
          console.log('res==========', res);
          self.$ele.css('-webkit-filter', 'grayscale(0)');
          self.$ele.append('<p class=\'praise_1\' data-num=' + self.thumbs + '></p>');
          $(".praise_1:last-of-type").text("+1").addClass("text-show");
          self.$ele.find(".praise_1:last-of-type")[0].addEventListener("webkitAnimationEnd", function () {
            self.$ele.find(".praise_1:nth-of-type(1)").remove();
          });
        }).catch(function (err) {
          console.log('err=========', err);
        });
      } else {
        self.$ele.css('-webkit-filter', 'grayscale(1)');
        self.num = 0;
        self.limited = false;
      }
    }
  }, {
    key: 'thumbs',
    get: function get() {
      this.num = this.addNum(this.num);
      if (this.num === this.limitNum) {
        this.limited = true;
      }
      return this.num;
    }
  }]);

  return ThumbsUp;
}(PraiseButton);

exports.default = {
  ThumbsUp: ThumbsUp
};
