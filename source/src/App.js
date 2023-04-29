import React, { Component } from 'react'
import './App.css';

import RomanjiToHiragana from './pages/romanji-to-hiragana';

class App extends Component {

  state = { bgColor: "#787c85" };

  changeBackground(newColor) {
    this.setState({ bgColor: newColor });
  }

  render() {
    const { bgColor } = this.state;
    return (
      <div className="App" >
        <header className="App-header" style={{ backgroundColor: bgColor }}>
          <RomanjiToHiragana changeBackground={(newColor) => this.changeBackground(newColor)} />
        </header>
      </div>
    );
  }

}

export default App;
