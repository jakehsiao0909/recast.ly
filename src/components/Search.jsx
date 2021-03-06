var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" 
      onKeyUp={(input) => {
        if (input.keyCode === 13) {
          props.searchTool($('.form-control').val());
        }
      }}

      onChange={() => props.searchTool($('.form-control').val())}
    />
    <button className="btn hidden-sm-down"  onClick={() => props.searchTool($('.form-control').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;