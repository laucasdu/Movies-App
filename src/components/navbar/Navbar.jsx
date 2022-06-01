import React from 'react'
import { Link } from 'react-router-dom';
import App from '../../App';

export default function Navbar() {
  
return (
    <nav>
      <div className="navBar">
        <div className="title">
        <Link to="/"><h1>MOVIETIME</h1></Link>
        </div>
        </div>
    </nav>
  );
};

