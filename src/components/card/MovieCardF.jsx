import { Link } from "react-router-dom";



export function MovieCardF ({movie, deleteMovie, editMovie}) {
    
        return (
            
        <div className="movieCard">
                        <Link to = {`/movies/${movie.id}`}><button className="button_info"><i className="fa-solid fa-info"></i></button></Link>
         <div className="movieImg">
        <img className="movieImg_img" src={movie.imgUrl} alt={movie.title}/>
        </div>
            <div className="containerText">
                <div className="movieText">
                <h2 className="title-movie">{movie.title}</h2>
                <h4 className="genre">{movie.genre}</h4>
                <h4 className="year">{movie.year}</h4>
            <div className="containerButton">
                <button onClick={() => deleteMovie(movie.id)} className="buttonDelete">
                    <i className="fa-solid fa-trash-can"></i></button>
                <button onClick={() => editMovie(movie.id)} className="buttonEdit">
                    <a href="#root" className="btnEdit"><i className="fa-solid fa-pen-to-square"></i></a></button>
             </div>
            </div>
        </div>
        </div>
        
        );
} 

// També es podria fer d'aquesta altra manera

 /* export function MovieCardF (props) {
    
    let movie =  props.movie;

        return (
        <div className="movieCard">
            <Link to="/Movie"><button className="button_info"><i className="fa-solid fa-x"></i></button></Link>         
        <div className="movieImg">
        <img className="movieImg_img" src={movie.imgUrl} alt={movie.title}/>
        </div>
            <div className="containerText">
                <div className="movieText">
                <h2 className="title">{movie.title}</h2>
                <h4 className="genre">{movie.genre}</h4>
                <h4 className="year">{movie.year}</h4>
            <div className="containerButton">
                <button onClick={() => props.deleteMovie(movie.id)} className="buttonDelete"><i className="fa-solid fa-trash-can"></i></button>
                <button onClick={() => props.editMovie(movie.id)} className="buttonEdit"><a href="#root" className="btnEdit"><i className="fa-solid fa-pen-to-square"></i></a></button>
             </div>
            </div>
        </div>
        </div>
        );
} */
 
// També es podría fer d'aquesta manera (components funcionals


