import React from 'react';
import PostDatas from '../datas/MaitresBibRestaurants.json'
// import Postdetail from '../postlist/Postdetail'
import Postdetail from './Postdetail'
// import Postdetail from './postdetail.js'

class Postlist extends React.Component {
  render() {
  return (
    <div>
      {PostDatas.map((item, index)=> { 
      	return < Postdetail post={item} key={`post-list-key ${index}`}/ >
      })}         
    </div>
  )
}
}

export default Postlist;
