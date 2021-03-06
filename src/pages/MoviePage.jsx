import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { movieServices } from "../services/movieServices";



export function MoviePage() {

    const [moviesInfo, setMoviesInfo] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        getOneMovies(id);
    },[id] );

    const getOneMovies = (id) => {
        movieServices.getOneMovies(id).then((res) => { 
            setMoviesInfo(res);
     });

 };


 // Renderizamos los datos obtenidos
    return (
        <>       
        
        <div className="Nav">
        </div>
        <Navbar></Navbar>

        <section className='containerPage'> 
            <div className= "container">
                <div className = "container-image">
                    <img src={moviesInfo.imgUrl} className="img-movie" alt='movie' />
                </div>

                <div className = "content-title-moviesInfo">
                    <h3 className="title-moviesInfo">{moviesInfo.title}</h3>
                    <div className = "content">
                        <h5 className="sinopsis-moviesInfo">SINOPSIS:</h5>
                        <p>DIn publishing and graphic design,Lorem <br></br>ipsum is a placeholder text commonly used to <br></br>demonstrate the visualform of a document
                        <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>Morbi eget diam sagittis, cursus ante sed,<br></br>demonstrate the visualform of a document
                        <br></br>DIn publishing and graphic design,Lorem<br></br>In malesuada nisi vitae metus ornare cursus. <br></br>Praesent non dignissim ligula vitae metus.

                        </p>
                    </div>
                </div>
               
            </div>   
                

        </section>
            </>
  )
}








      

