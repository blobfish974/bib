import React from 'react';
import PostDatas from '../datas/MaitresBibRestaurants.json'
// import Postdetail from '../postlist/Postdetail'
// import Postdetail from './Postdetail'
// import Postdetail from './postdetail.js'

// class Postlist extends React.Component {
//   render() {
//   return (
//     <div className="global" >
//       {PostDatas.map((item, index)=> { 
//       	return <div>
//       	<h1>{item.name}</h1>
//         <p>{item.street}, {item.postal_code} {item.city} </p>
//         <p>experience: {item.experience}</p>
//         <p>tel: {item.tel}</p>
//         <p>website: {item.web_link}</p>
//         </div>
//       })}         
//     </div>
//   )
// }
// }


class Postlist extends React.Component {
  render() {
  return (
    <div>
      {PostDatas.map((item, index)=> { 
      	return <tr>
			    <td>{item.name}</td>
			    <td>{item.street}, {item.postal_code} {item.city} </td>
			    <td>{item.experience}</td>
			    <td>{item.tel}</td>
			    <td>{item.web_link}</td>
		  	</tr>
      })}     
    </div>    
  )
}
}



// class Postlist extends React.Component {
//   render() {
//   return (
//     <div>
//       {PostDatas.map((item, index)=> { 
//       	return <div>
// 			<p>{item.name}</p>
// 			    <p>{item.street}, {item.postal_code} {item.city} </p>
// 			    <p>{item.experience}</p>
// 			    <p>{item.tel}</p>
// 			    <p>{item.web_link}</p>
// 		  </div>
//       })}     
//     </div>    
//   )
// }
// }



export default Postlist;
