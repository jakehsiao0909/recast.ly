var VideoListEntry = (props) => (
  <div className="video-list-entry media" onClick={() => props.click(props.videos)}>
    <div className="media-left media-middle">
      <img className="media-object" src={props.videos.snippet.thumbnails.default.url} onClick={() => props.click(props.videos)} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.videos.snippet.title}</div>
      <div className="video-list-entry-detail">{props.videos.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;