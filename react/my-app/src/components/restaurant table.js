import React from 'react';
import '../App.css';

// import data from './files/MaitresBibRestaurants.json';


export default function RestaurantTable(props){

	return (
	<table>
      <thead>
      <tr>
        <th>
	        <button class="sort_button" onClick={() => props.sortByString('name')}>
				Name
			</button>
        </th>
        <th>
        	<button class="sort_button" onClick={() => props.sortByString('street')}>
				Adress
			</button>
        </th>
        <th>
	        <button class="sort_button" onClick={() => props.sortBy('postal_code')}>
				Postal code
			</button>
			
		</th>
        <th>
	        <button class="sort_button" onClick={() => props.sortByString('city')}>
				City
			</button>
		</th>
        <th>
        	<button class="sort_button" onClick={() => props.sortByString('experience')}>
				Experience
			</button>
		</th> 
        <th>
        	<button class="sort_button" onClick={() => props.sortByString('tel')}>
				Tel
			</button>
        </th>
        <th>
            <button class="sort_button">
				Website
			</button></th>
      </tr>
      </thead>
      <tbody>
        {props.datas.map((item, index)=> { 
        return  <tr>
          <th>{item.name}</th>
          <th>{item.street} </th>
          <th>{item.postal_code}</th>
          <th>{item.city}</th>
          <th>{item.experience}</th>
          <th>{item.tel}</th>
          <th>{item.web_link}</th>
        </tr>
      })}   
      </tbody>
      </table>
    )
}
