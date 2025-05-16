import React from 'react';
import './Notification.css';
import profile from './profile.jpeg';

function Notification() {
  return (
    <div className="container">
      <h1>Position Relative & Absolute Task</h1>
      
      <div className="profile-card">
        
        
        <h3>John Doe</h3>
        <p>Web Developer</p>

        <img 
          src={profile} 
          alt="Profile" 
          className="profile-image"
        />

        <div className="notification-badge">3</div>
      </div>

    </div>
  );
}

export default Notification;