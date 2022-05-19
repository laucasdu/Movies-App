import { Component } from "react";


export class MovieCard extends Component {
    render() {
        let movie = this.props.movie;
        return (
        <div className="movieCard">
        <div className="movieImg">
        <img src={movie.imgUrl} alt={movie.title}/>
        </div>
            <div className="containerText">
                <div className="movieText">
                <h1 className="title">{movie.title}</h1>
                <h3 className="genre">{movie.genre}</h3>
                <h3 className="yearProduction">{movie.year}</h3>
            <div className="containerButton">
                <button onClick={() =>this.props.deleteMovie(movie.id)} className="buttonDelete">Delete</button>
                <button onClick={() =>this.props.editMovie(movie.id)} className="buttonEdit">Edit</button>
             </div>
            </div>
        </div>
        </div>
        );
    }
}