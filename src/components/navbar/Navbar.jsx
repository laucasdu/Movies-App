import React from 'react'
import { Link } from 'react-router-dom';
import App from '../../App';

export default function Navbar() {
  
return (
    <nav>
      <div className="navBar">
        <div className="title-logo">
        <Link to="/"><h1>MOVIETIME</h1></Link>
		{/* <ul>
			  <li><a href="#">sign</a></li>
			  <li><a href="#">Contacto</a></li>
		</ul> */}

        </div>
        </div>
    </nav>
  );
};

