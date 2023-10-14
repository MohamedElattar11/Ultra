import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faLinkedin,faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';


 function Footer() {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Ultra <span>Tech</span></h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Technical</a></li>
  	 				<li><a href="#">Desgins</a></li>
  	 				<li><a href="#">Conatct</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<FontAwesomeIcon icon={faFacebook} className='icon'/>
  	 				<FontAwesomeIcon icon={faLinkedin} className='icon2' />
  	 				<FontAwesomeIcon icon={faPinterest} className='icon3'/>
  	 				<FontAwesomeIcon icon={faTwitter} className='icon4'/>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}
export default Footer;
