import React from 'react';
import PostDatas from '../datas/MaitresBibRestaurants.json'
// import Postdetail from '../postlist/Postdetail'
// import Postdetail from './Postdetail'
// import Postdetail from './postdetail.js'

class Postlist extends React.Component {
  render() {
  return (
    <div className="global" >
      {PostDatas.map((item, index)=> { 
      	return <div>
      	<h1>{item.name}</h1>
        <p>{item.street}, {item.postal_code} {item.city} </p>
        <p>experience: {item.experience}</p>
        <p>tel: {item.tel}</p>
        <p>website: {item.web_link}</p>
        </div>
      })}         
    </div>
  )
}
}

export default Postlist;
