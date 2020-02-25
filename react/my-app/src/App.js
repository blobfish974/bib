import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostDatas from './datas/MaitresBibRestaurants.json'

function App() {
  return (


    <div className="global" >
    <h1 class="title"> Restaurants </h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Adress</th>
        <th>Experience</th> 
        <th>Tel</th>
        <th>Website</th>
      </tr>
      {PostDatas.map((item, index)=> { 
        return <tr>
          <td>{item.name}</td>
          <td>{item.street}, {item.postal_code} {item.city} </td>
          <td>{item.experience}</td>
          <td>{item.tel}</td>
          <td>{item.web_link}</td>
        </tr>
      })}     

    </table>
    </div>
  );
}

export default App;
