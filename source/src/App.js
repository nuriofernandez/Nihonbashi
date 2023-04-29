import React, { Component } from 'react'
import './App.css';

import { Routes, Route } from "react-router-dom"

import RomanjiToHiragana from './pages/romanji-to-hiragana';
import RomanjiToKatakana from "./pages/romanji-to-katakana";
import RomanjiToHiraganaFull from "./pages/romanji-to-hiragana-full";

class App extends Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Routes>
              <Route path="/" element={ <RomanjiToHiraganaFull /> } />
              <Route path="hiragana" element={ <RomanjiToHiragana /> } />
              <Route path="katakana" element={ <RomanjiToKatakana /> } />
          </Routes>
        </header>
      </div>
    );
  }

}

export default App;
