import { Component } from "react";


export class MovieCard extends Component {
    render() {
        let movie = this.props.movie;
        return (
        <div className="movieCard">
        <div className="movieImg">
        <img className="img" src={movie.imgUrl} alt={movie.title}/>
        </div>
            <div className="containerText">
                <div className="movieText">
                <h2 className="title">{movie.title}</h2>
                <h4 className="genre">{movie.genre}</h4>
                <h4 className="year">{movie.year}</h4>
            <div className="containerButton">
                <button onClick={() =>this.props.deleteMovie(movie.id)} className="buttonDelete">DELETE</button>
                <button onClick={() =>this.props.editMovie(movie.id)} className="buttonEdit">CHANGE</button>
             </div>
            </div>
        </div>
        </div>
        );
    }
}