import React from 'react';
import './profile.css';

 function Profile() {
  return (
    <div className="profile-skills">
    <div className="container">
        <div className="profile">
            <h2 className="profile-title"><span>Our </span>Profile</h2>
            <ul className="profile-list">
                <li className="profile-item">
                    <span>Company Name</span>
                    Ultar Tech
                </li>
                <li className="profile-item">
                    <span>Founded</span>
                    21/1/2018
                </li>
                <li className="profile-item">
                    <span>Address</span>
                    New York
                </li>
                <li className="profile-item">
                    <span>Phone</span>
                   +13028580567
                </li>
                <li className="profile-item">
                    <span>Email</span>
                    UltraTech@gmail.com
                </li>
                <li className="profile-item">
                    <span>Website</span>
                    <span className="web">www.UltraTech.com</span>
                </li>
            </ul>
        </div>
        
        <div className="skills">
            <h2 className="skills-title">Some <span>skills</span></h2>
            <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </p>
            <div className="bar">
                <span className="title">Bootstrap</span>
                <span className="perc">100%</span>
                <div className="parent">
                    <span className="sp1"></span>
                </div>
            </div>
            
            <div className="bar">
                <span className="title">CSS3</span>
                <span className="perc">90%</span>
                <div className="parent">
                    <span className="sp2"></span>
                </div>
            </div>
            
            <div className="bar">
                <span className="title">Photoshop</span>
                <span className="perc">80%</span>
                <div className="parent">
                    <span className="sp3"></span>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}
export default Profile;
