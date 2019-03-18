import React, { Component } from 'react';
import StList from './components/StationsList';
import Player from './components/Player';
import Search from './components/Search';
import TrackInfo from './components/TrackInfo';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Search/>
          <Player/>
          <TrackInfo/>
          <StList/>
        {/*<audio src={'http://ice1.somafm.com/groovesalad-128-mp3'}  controls> </audio>*/}
        {/*"https://www.last.fm/music/Ariana+Grande/_/7+rings" <-- is it link to song page or streame/file?  */}
        {/*'http://ice1.somafm.com/groovesalad-128-mp3'        <-- works for sure*/}
      </div>
    );
  }
}

export default App;
