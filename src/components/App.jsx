class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  searchTool(something) {
    let obj = {
      key: window.YOUTUBE_API_KEY, 
      max: 5, 
      query: something
    };
    this.props.searchYouTube(obj, this.initializeVideo.bind(this));
  }

  componentDidMount() {
    let obj = {
      key: window.YOUTUBE_API_KEY, 
      max: 5, 
      query: 'Harlem Shake'
    };
    this.props.searchYouTube(obj, this.initializeVideo.bind(this));
  }

  initializeVideo(videoList) {
    this.setState({
      videos: videoList,
      currentVideo: videoList[0]
    });
  }
 
  handleVideoEntryClick(target) {
    this.setState({
      currentVideo: target
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchTool={this.searchTool.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer videos={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} click={this.handleVideoEntryClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;