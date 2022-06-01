import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieServices } from "../services/movieServices";
import Navbar from '../components/navbar/Navbar'



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
        <Navbar></Navbar>
        </div>

        <section className='containerPage'> 
            <div className= "container">
                <div className = "card">
                    <div className = "image">
                        <img src={moviesInfo.imgUrl} alt='movie' />
                                </div>

                <div className = "content">
                <h2 className="title-moviesInfo">{moviesInfo.title}</h2>
                <h5 className="sinopsis-moviesInfo">SINOPSIS</h5>
                    <p>DIn publishing and graphic design,Lorem <br></br>ipsum is a placeholder text commonly used to <br></br>demonstrate the visualform of a document</p>
                </div>
                </div>    

            </div>

            </section>
            </>
  )
}











      



// return (

//     <section className='page'> 
  
//   <div className="page-container">
  
//     <div className="movie-container">
//       <img className='page-image' src={moviesInfo.imgUrl} alt='' />
//     </div>
//     <div className='info-container'>
//       <div className='title'>
//         <h2 className="title">{moviesInfo.title}</h2>
//       </div>
//       <div className="details">
//       <p className="genre">{moviesInfo.genre}</p>
//       </div>
//       <div>
//         <h6 className="sipnosis-title">Sipnosis:</h6>
//         <p className="sipnosis-info">{moviesInfo.sipnosis}</p>
//         <br></br>
//         <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh ut lacus dapibus sollicitudin quis eu mauris. Phasellus mi velit, varius sit amet ornare dictum, varius eu neque. Aliquam ac rutrum magna. Cras lacinia massa a suscipit accumsan. Donec ultricies dolor et mattis bibendum. Nunc eu tortor augue. Vivamus a scelerisque ipsum, in elementum dui.</p>
//         <br></br>
//         <p className='paragraph'>Donec a tortor volutpat, fermentum magna et, sagittis lectus. Vivamus ut ultricies augue. Mauris ut est nisl. Duis gravida condimentum feugiat. Etiam sit amet lectus sed velit ullamcorper lobortis posuere a mauris. Sed porttitor a lectus ac lobortis. In lobortis fermentum lectus, ac euismod nisi vestibulum ut. Nunc dolor sem, vehicula id elementum in, vehicula id nisl. Nulla lacinia pellentesque purus ac porta. Sed accumsan nisi eget mattis laoreet.</p>
//       </div>
//     </div>
//   </div>
// </section>
// )
// }