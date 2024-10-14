import React from 'react';
import { FaGithub, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import dcxLogo from '../assets/dcx-logo.png'; // Adjust the path to your logo

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={dcxLogo} alt="DCX Logo" className="logo" style={{ width: '300px', height: '300px' }} />
      <div className="dcx-name">DCX</div> {/* Add the large bold DCX name */}
      <div className="profile-info">
        <p><FaGithub /> <a href="https://github.com/devcodexcel" target="_blank" rel="noopener noreferrer">devcodexcel</a></p>
        <p><FaMapMarkerAlt /> Kansas, USA</p>
        <p><FaEnvelope /> <a href="mailto:contact@dcxi.dev">contact@dcxi.dev</a></p>
      </div>
    </aside>
  );
}

export default Sidebar;
