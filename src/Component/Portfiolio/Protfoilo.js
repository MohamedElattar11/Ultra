import React, { useEffect, useState } from 'react';
import './protfoilo.css';
import axios from 'axios';
import Footer from '../Footer/Footer';

 function Protfoilo() {
  const [images,setImages]=useState([]);
  
  useEffect(()=>{
    axios.get('db/data.json').then(res=>{setImages(res.data.portfolio)})
  },[]);

 const portfoiloImages= images.map((imageItem)=>{
  return(
    <div key={imageItem.id}>
    <img src={imageItem.image}/>
    <p className='overlay'>
    <span>
      Show Image
      </span>
    </p>
    </div>
  )
 })


  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>Our</span> Portfolio
      </h2>
      <ul className="portfoilo-list">
        <li className="portfoilo-item active">ALL</li>
        <li className="portfoilo-item ">HTML</li>
        <li className="portfoilo-item">Photoshop</li>
        <li className="portfoilo-item">Wordpress</li>
        <li className="portfoilo-item">Mobile</li>
      </ul>

      <div className="box">
      {portfoiloImages}
       </div>
       </div>
  );
}
export default Protfoilo;

