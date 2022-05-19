import { Component } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCard } from "../card/MovieCard";
import { MovieForm } from "../form/MovieForm";
import { createUuid } from "../utils/createUuid";



export class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            viewform: false,
            editActive:false,
            editedMovie: {},

            movies: []
   
        };
    }

// Si es carregar la pàgina també carrega les movies de l'API
    componentDidMount() {
        this.setState({
            movies: movieServices.getAllMovies(),
        });

    }



    updateMovie = (newMovie) => {

        let newMoviesState= this.state.movies;
        let movieToEditIndex= newMoviesState.findIndex(movie => movie.id === newMovie.id)

        newMoviesState[movieToEditIndex]=newMovie

        this.setState({movies:newMoviesState})
        this.openForm()

    };


    addNewMovie = (data) => {
        data.id = createUuid();
        this.setState({ movies: [...this.state.movies, data] });
        this.setState({ viewform:false});

    };


    deleteMovie = (id) => {
        let deleteConfirmed = window.confirm("really delete?");
        if (!deleteConfirmed) return;
        // Es diu: CLÀUSULA DE SALVAGUARDA

        let filterMovies = this.state.movies.filter((movie) => movie.id !== id);
        this.setState({ movies: filterMovies });
    };


    openForm = () => {
        if (this.state.viewform) this.setState({viewform:false});
        else this.setState({viewform:true});
    };

    editMovie = (id) => {
        this.openForm();
        let editedMovie = this.state.movies.find(movie => movie.id === id);
        this.setState({editedMovie})

        this.setState({editActive:true});

    };


    render() {
        return (
            <section className="list">

                {this.state.viewform ? 
                <button onClick={this.openForm} type="button" >close</button> :
                <button onClick={this.openForm} type="button" >open</button> 
                }

                {this.state.viewform ? <MovieForm addNewMovie={this.addNewMovie} editedMovie={this.state.editedMovie} editActive={this.state.editActive} updateMovie={this.state.updateMovie}/>: ''}
                <div className="movieList">
                    {this.state.movies.map((movie, key) => (
                        <MovieCard key={key} movie={movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} />
                    ))}           
                </div>
          </section>
        );
    }
}