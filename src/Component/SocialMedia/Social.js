import React from 'react';
import { faFacebook,faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social.css';



 function Social() {
  return (
    <div class="social-media">
            
            <div className="social face">
            <FontAwesomeIcon icon={faFacebook} className='icon' />
                <p>
                    <span className="info1">Follow Us on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
            <FontAwesomeIcon icon={faTwitter} className='icon' />
                <p>
                    <span className="info1">Tweet Us on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
            <FontAwesomeIcon icon={faPinterest} className='icon' />
                <p>
                    <span className="info1">Pin Us on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
  )
}
export default Social;
