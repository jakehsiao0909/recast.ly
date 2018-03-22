"use strict";

var VideoListEntry = function VideoListEntry(props) {
  return React.createElement(
    "div",
    { className: "video-list-entry media", onClick: function onClick() {
        return props.click();
      } },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: props.videos.snippet.thumbnails.default.url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "video-list-entry-title" },
        props.videos.snippet.title
      ),
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        props.videos.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwiY2xpY2siLCJ2aWRlb3MiLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsImRlZmF1bHQiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwidmlkZW8iLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFEO0FBQUEsU0FDbkI7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZixFQUF3QyxTQUFTO0FBQUEsZUFBTUEsTUFBTUMsS0FBTixFQUFOO0FBQUEsT0FBakQ7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQ0UsbUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtELE1BQU1FLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkMsVUFBckIsQ0FBZ0NDLE9BQWhDLENBQXdDQyxHQUEzRSxFQUFnRixLQUFJLEVBQXBGO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFBeUNOLGNBQU1FLE1BQU4sQ0FBYUMsT0FBYixDQUFxQkk7QUFBOUQsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUseUJBQWY7QUFBMENQLGNBQU1FLE1BQU4sQ0FBYUMsT0FBYixDQUFxQks7QUFBL0Q7QUFGRjtBQUpGLEdBRG1CO0FBQUEsQ0FBckI7O0FBWUE7QUFDQTtBQUNBVCxlQUFlVSxTQUFmLEdBQTJCO0FBQ3pCQyxTQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9oQixjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJWaWRlb0xpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBWaWRlb0xpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbGljaygpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17cHJvcHMudmlkZW9zLnNuaXBwZXQudGh1bWJuYWlscy5kZWZhdWx0LnVybH0gYWx0PVwiXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiPntwcm9wcy52aWRlb3Muc25pcHBldC50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj57cHJvcHMudmlkZW9zLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9MaXN0RW50cnkucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlZpZGVvTGlzdEVudHJ5ID0gVmlkZW9MaXN0RW50cnk7Il19