import { Component } from "react";
import { Link } from 'react-router-dom';



export class MovieCard extends Component {
    render() {
        let movie = this.props.movie;
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
                <button onClick={() =>this.props.deleteMovie(movie.id)} className="buttonDelete"><i className="fa-solid fa-trash-can"></i></button>
                <button onClick={() =>this.props.editMovie(movie.id)} className="buttonEdit"><a href="#root" className="btnEdit"><i className="fa-solid fa-pen-to-square"></i></a></button>
             </div>
            </div>
        </div>
        </div>
        );
    }
}