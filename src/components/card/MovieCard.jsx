import { Component } from "react";


export class MovieCard extends Component {
    render() {
        let movie = this.props.movie;
        return (
        <div className="movieCard">
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
                <button onClick={() =>this.props.editMovie(movie.id)} className="buttonEdit"><i class="fa-solid fa-pen-to-square"></i></button>
             </div>
            </div>
        </div>
        </div>
        );
    }
}