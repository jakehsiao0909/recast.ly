class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    let obj = {
      key: window.YOUTUBE_API_KEY, 
      max: 5, 
      query: 'corgi'
    };
    this.props.searchYouTube(obj, this.initializeVideo.bind(this));
  }

  initializeVideo(videoList) {
    this.setState({
      videos: videoList,
      currentVideo: videoList[0]
    })
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
            <div><h5><em>search</em> view goes here</h5></div>
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

  // initializeVideo(data) {
  //   this.setState({
  //     videos: data,
  //     currentVideo: data[0]
  //   })
  // }