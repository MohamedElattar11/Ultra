import React from 'react';
import './work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink,faBolt, faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';


 function Work() {
  return (
    <div className='work'>
    <div className='container'>
      <h2 className='work-title'> <span>Our</span> Work</h2>
      <div className='part first'>
      <FontAwesomeIcon icon={faLink} className='icon' />
        <h4 className='part-title'>Mobile Ux</h4>
        <hr className='line'/>
        <p className='part-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
      </div>
      <div className='part'>
      <FontAwesomeIcon icon={faBolt} className='icon' />
        <h4 className='part-title'>Mobile Ux</h4>
        <hr className='line'/>
        <p className='part-desc'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
      </div>
      <div className='part last'>
      <FontAwesomeIcon icon={faGaugeSimpleHigh}  className='icon'/>
      <h4 className='part-title'>Mobile Ux</h4>
      <hr className='line'/>
      <p className='part-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
      </div>
    </div>
    
    </div>
  )
}
export default Work;
