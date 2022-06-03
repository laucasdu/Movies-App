import React from 'react'
import image from "../../image/img_starwars.jpg";


export default function Slider() {
  
  return (

    
      <div className="Slider-container">
        <div className='arrow-left'></div>
        <img className="image" src={image} alt="banner"/>      
      <div className='arrow-right'></div>

        </div>

  )
}


