"use strict";

var Search = function Search() {
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", { className: "form-control", type: "text" }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down" },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQ1g7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFLG1DQUFPLFdBQVUsY0FBakIsRUFBZ0MsTUFBSyxNQUFyQyxHQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsV0FBVSxvQkFBbEI7QUFDRSxvQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBRkYsR0FEVztBQUFBLENBQWI7O0FBU0E7QUFDQTtBQUNBQyxPQUFPRCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+IFxuKTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7XG4iXX0=