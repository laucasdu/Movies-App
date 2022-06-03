import React from 'react'
import { Link } from 'react-router-dom';
import image from "../../image/logo_movie.png";


export default function Navbar() {
  
return (


    <nav>
      <div className="navBar"><Link to="/"><img className="logo" src={image} alt="logo"/>
        </Link>

        </div>
    </nav>
  );
};

