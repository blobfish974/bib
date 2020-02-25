import React from 'react';
import PostDatas from '../datas/MaitresBibRestaurants.json'

class Postdetail extends React.Component {
  render() {
    const {post}=this.props
  return (
    <div>
        <h1>{post.name}</h1>
        <p>{post.street}</p>

    </div>
  )
}
}

export default Postdetail;
