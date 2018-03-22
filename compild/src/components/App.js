"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div id="list"><h5><em>videoList</em> view goes here</h5></div>
      </div>
    </div>
  </div>
);*/

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleVideoEntryClick",
    value: function handleVideoEntryClick(target) {
      console.log(target);
      this.setState({
        currentVideo: target
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(
            "div",
            { className: "col-md-6 offset-md-3" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "h5",
                null,
                React.createElement(
                  "em",
                  null,
                  "search"
                ),
                " view goes here"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(VideoPlayer, { videos: this.state.currentVideo })
          ),
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(VideoList, { videos: this.state.videos, click: this.handleVideoEntryClick })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;

//            <VideoList videos={props} />
//
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsIndpbmRvdyIsImV4YW1wbGVWaWRlb0RhdGEiLCJjdXJyZW50VmlkZW8iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJoYW5kbGVWaWRlb0VudHJ5Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQk1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFHbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFDLE9BQU9DLGdCQURKO0FBRVhDLG9CQUFjRixPQUFPQyxnQkFBUCxDQUF3QixDQUF4QjtBQUZILEtBQWI7QUFIa0I7QUFPbkI7Ozs7MENBRXFCRSxNLEVBQVE7QUFDNUJDLGNBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFdBQUtHLFFBQUwsQ0FBYztBQUNaSixzQkFBY0M7QUFERixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUFBO0FBQUw7QUFERjtBQURGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxXQUFELElBQWEsUUFBUSxLQUFLTCxLQUFMLENBQVdJLFlBQWhDO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtKLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0MsT0FBTyxLQUFLUSxxQkFBbEQ7QUFERjtBQUpGO0FBTkYsT0FERjtBQWlCRDs7OztFQW5DZUMsTUFBTUMsUzs7QUF1Q3hCO0FBQ0E7OztBQUNBVCxPQUFPSixHQUFQLEdBQWFBLEdBQWI7O0FBRUE7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKnZhciBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgPGRpdj48aDU+PGVtPnNlYXJjaDwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgIDxkaXY+PGg1PjxlbT52aWRlb1BsYXllcjwvZW0+IHZpZXcgZ29lcyBoZXJlPC9oNT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICA8ZGl2IGlkPVwibGlzdFwiPjxoNT48ZW0+dmlkZW9MaXN0PC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTsqL1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZGVvczogd2luZG93LmV4YW1wbGVWaWRlb0RhdGEsXG4gICAgICBjdXJyZW50VmlkZW86IHdpbmRvdy5leGFtcGxlVmlkZW9EYXRhWzBdXG4gICAgfTtcbiAgfVxuICBcbiAgaGFuZGxlVmlkZW9FbnRyeUNsaWNrKHRhcmdldCkge1xuICAgIGNvbnNvbGUubG9nKHRhcmdldClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRWaWRlbzogdGFyZ2V0XG4gICAgfSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8ZGl2PjxoNT48ZW0+c2VhcmNoPC9lbT4gdmlldyBnb2VzIGhlcmU8L2g1PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgdmlkZW9zPXt0aGlzLnN0YXRlLmN1cnJlbnRWaWRlb30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgIDxWaWRlb0xpc3QgdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc30gY2xpY2s9e3RoaXMuaGFuZGxlVmlkZW9FbnRyeUNsaWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LkFwcCA9IEFwcDtcblxuLy8gICAgICAgICAgICA8VmlkZW9MaXN0IHZpZGVvcz17cHJvcHN9IC8+XG4vLyJdfQ==