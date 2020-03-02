import React from 'react';
import logo from './logo.svg';
import './App.css';
import datas from './datas/MaitresBibRestaurants.json'
import RestaurantTable from './components/restaurant table.js'

// class Table extends React.Component {
//   render() {
//     return (
//       <tbody>
//         {datas.map((item, index)=> { 
//         return <tr>
//           <td>{item.name}</td>
//           <td>{item.street}, {item.postal_code} {item.city} </td>
//           <td>{item.experience}</td>
//           <td>{item.tel}</td>
//           <td>{item.web_link}</td>
//         </tr>
//       })}   
//       </tbody>
//     )
//   }
// }


function App() {
  return (
    <div className="global" >
    <h1 class="title"> Restaurants </h1>
    < RestaurantTable 
        datas={datas}
        sortBy={sortBy}
     />
    </div>
  );
}

export default App;
