'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

var _BusinessList = require('./components/BusinessList/BusinessList.js');

var _BusinessList2 = _interopRequireDefault(_BusinessList);

var _SearchBar = require('./components/SearchBar/SearchBar.js');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Yelp = require('./util/Yelp.js');

var _Yelp2 = _interopRequireDefault(_Yelp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import logo from './logo.svg';


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      businesses: []

    };
    _this.searchYelp.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'searchYelp',
    value: function searchYelp(term, location, sortBy) {
      var _this2 = this;

      _Yelp2.default.search(term, location, sortBy).then(function (businesses) {

        _this2.setState({ businesses: businesses });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'h1',
          null,
          'ravenous'
        ),
        _react2.default.createElement(_SearchBar2.default, { searchYelp: this.searchYelp }),
        _react2.default.createElement(_BusinessList2.default, { businesses: businesses })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;