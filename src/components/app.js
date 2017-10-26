import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

// local component imports
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const _youtubeApiKey = "AIzaSyBhXTdR8uiQvCi0eUzwFxRnQeguGq7u2iQ";

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

  }

  videoSearch(term) {
    YTSearch({ key: _youtubeApiKey, term: term }, (res) => {
      // console.log(res);
      this.setState({ 
        videos: res,
        selectedVideo: res[0]
      });
    });
  }

  render() {
    
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }/>
      </div>
    );

  }

}

export default App;
