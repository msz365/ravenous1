'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./SearchBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'

};

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = { term: '', location: '', sortBy: 'best_match' };
    _this.handleTermChange = _this.handleTermChange.bind(_this);
    _this.handleLocationChange = _this.handleLocationChange.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'getSortByClass',
    value: function getSortByClass(sortByOption) {
      if (this.state.sortBy === sortByOption) {
        return 'active';
      } else {
        return '';
      }
    }
  }, {
    key: 'handleSortByChange',
    value: function handleSortByChange(sortByOption) {

      this.setState({ sortBy: sortByOption });
    }
  }, {
    key: 'handleTermChange',
    value: function handleTermChange(event) {

      this.setState({ term: event.target.value });
    }
  }, {
    key: 'handleLocationChange',
    value: function handleLocationChange(event) {

      this.setState({ location: event.target.value });
      event.preventDefault();
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(event) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
  }, {
    key: 'renderSortByOptions',
    value: function renderSortByOptions() {
      var _this2 = this;

      return Object.keys(sortByOptions).map(function (sortByOption) {

        var sortByOptionValue = sortByOptions[sortByOption];
        return _react2.default.createElement(
          'li',
          { className: _this2.getSortByClass(sortByOptionValue), onClick: _this2.handleSortByChange.bind(_this2, sortByOptionValue), key: sortByOptionValue },
          ' ',
          sortByOption,
          ' '
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'SearchBar' },
        _react2.default.createElement(
          'div',
          { className: 'SearchBar-sort-options' },
          _react2.default.createElement(
            'ul',
            null,
            this.renderSortByOptions()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'SearchBar-fields' },
          _react2.default.createElement('input', { placeholder: 'Search Businesses', onChange: this.handleTermChange }),
          _react2.default.createElement('input', { placeholder: 'Where?', onChange: this.handleLocationChange })
        ),
        _react2.default.createElement(
          'div',
          { className: 'SearchBar-submit', onClick: this.handleSearch },
          _react2.default.createElement(
            'a',
            null,
            'Lets Go'
          )
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

;

exports.default = SearchBar;