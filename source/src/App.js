import React, { Component } from 'react'
import './App.css';

import RomanjiToHiragana from './pages/romanji-to-hiragana';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <RomanjiToHiragana />
        </header>
      </div>
    );
  }

}

export default App;
