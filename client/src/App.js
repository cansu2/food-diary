import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// get api/entries
// create table

function App() {

  const [ entries, setEntries ] = useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/entries').then((data)=>{
      console.log('data from entries', data);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
