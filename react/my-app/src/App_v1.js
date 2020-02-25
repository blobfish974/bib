import React from 'react';
import logo from './logo.svg';
import './App.css';
import Postlist from './postlist/postlist.js'

function App() {
  return (


    <div className="global" >
    <h1 class="title"> Restaurants </h1>
    <table>
      <tr>
        <th>name</th>
        <th>adress</th>
        <th>experience</th> 
        <th>tel</th>
        <th>website</th>
      </tr>
      <Postlist />

    </table>
    </div>
  );
}

export default App;
