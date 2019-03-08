import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({routes }) => {
  return (
    <div style={{padding: "10px", width: "40%", background: "#f0f0f0"}}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/panel/page1">Page 1</Link></li>
        <li><Link to="/panel/page2">Page 2</Link></li>
        <li><Link to="/panel/page3">Page 3</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;