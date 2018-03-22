var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      type: 'video',    
      q: options.query,
      maxResults: options.max || 5,
      key: options.key,
      videoEmbeddable: true
    },
    success: function(response) {
      console.log('Fetch suceess!');
      console.log('fetch response: ', response);
      callback(response.items);
    },
    error: function(err) {
      console.log('Error: ', err);
      callback();
    }
  });
};

window.searchYouTube = searchYouTube;
