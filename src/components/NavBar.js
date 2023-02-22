import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-bar">
      <h1 className="header">Math Magicians</h1>
      <div className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </div>
    </nav>
  );
}
export default Nav;
