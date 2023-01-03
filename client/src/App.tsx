import './App.css';


import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Entry from './components/Entry';
// get api/entries
// create table

function App() {

  const [ entries, setEntries ] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:9090/api/entry').then((response)=>{
      const { data } = response;
      setEntries(data);
      
    })
  }, []);


  const buildEntries = () => {
    console.log(entries);
    return entries.map((entry)=> {
      return <Entry entry={entry} />
    })
  }



  return (
    <div className="App">
      { /*application level things such as navigation and app header will go here */}
      { buildEntries() }
      { /* TODO: remove the above and replace it with a clientside router, and different views */}
    </div>
  );
}

export default App;
