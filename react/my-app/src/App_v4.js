import React from 'react';
// import logo from './logo.svg';
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


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      datas:datas,
      direction: {
        postal_code: 'asc',
      }
    }
    this.sortBy=this.sortBy.bind(this)
  }


  sortBy(key){
    this.setState({
        datas: datas.sort( (a,b)=> 
          // console.log(a.localCompare(b))
          // var test=parseInt(b[key])
          // console.log(test)
          // console.log(typeof test)
          this.state.direction[key] === 'asc'
            ?  (parseFloat(a[key])-parseFloat(b[key]))
            :  (parseFloat(b[key])-parseFloat(a[key]))
          

        ),
        direction : {
          [key]: this.state.direction[key] === 'asc'
            ? 'desc'
            : 'asc'
        }
    })
    console.log(key);

  }

  render () {
    return (
      <div className="global" >
      <h1 class="title"> Restaurants </h1>
      < RestaurantTable 
          datas={this.state.datas}
          sortBy={this.sortBy}
       />
      </div>
    );
  }

}

export default App;
