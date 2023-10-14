import React from 'react'
import './home.css';

 function Home() {
  return (
    <div className='home'>
    <div className='conatiner'>
    <div className='home-information'>
    <h2 className='home-title margin-bottom'>Ultra <span>Tech</span></h2>
    <h4 className='home-info'> Creative Company</h4>
    <p className='home-desc'>
      We are professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
    </p>
    <button className='home-btn'> Let's Begin</button>
    
    </div>
    </div>
    
    </div>
  )
}
export default Home;