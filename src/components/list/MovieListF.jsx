import { useEffect, useState } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCardF } from "../card/MovieCardF";
import { MovieFormF } from "../form/MovieFormF";


export function MovieListF() {
    const [movies, setMovies] = useState([]);
    const [viewForm, setViewForm] = useState(false);
    const [editActive, setEditActive] = useState(false);
    const [editedMovie, setEditedMovie] = useState({
      id: "",
      year: "",
      title: "",
      genre: "",
      imgUrl: "",
        });

    
    // const [isLoading, setIsLoading] = useState (false)

        useEffect(() => {
            getAllMovies();
        }, []);

        const getAllMovies = () => {
            // setIsLoading(true);
            movieServices.getAllMovies().then((res) => { 
                setMovies(res);
            // setIsLoading(false);
         });
 
     };
  

    // Funció per eliminar una pel·lícula
    const deleteMovie = (id) => {
        movieServices.deleteMovie(id).then((res) => {
            getAllMovies()
        });
    };


    const addMovie = (data) => {
        movieServices.addMovie(data).then((res) => {
            setMovies([...movies, res]);

        });

        setViewForm(false);
        };


    const updateMovie = (newMovie) => {
        let newMoviesState = movies; //nou array de la nova pelicula, igual que l'original
        let movieToEditIndex = newMoviesState.findIndex(movie => movie.id === newMovie.id) //busquem l'index que sigui igual al que volem canviar
        
        movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
             newMoviesState[movieToEditIndex] = res //del la nova llista newMoviesState busquem l'index [movieToEditIndex] i li asignem a newMovie
                setMovies(newMoviesState)

         })
            setViewForm()
            resetInputsForm()
            setEditActive(false);

    }; 

    // Funció per editar una pel·lícula
    const editMovie = (id) => {
        openForm();
        let editedMovie = movies.find(movie => movie.id === id);
        setEditedMovie(editedMovie)
        setEditActive(true);
    };

    //Funció per obrir el formulari
    const openForm = () => {
        if (viewForm)setViewForm(false);
        else setViewForm(true);
        resetInputsForm()

    };
    
    //Funció que serveix per buidar el formulari
    const resetInputsForm = (e) => {
        setEditedMovie({id:'', title:'', year:'', genre:'', imgUrl:''})   
    };



        return (
            <section>

                <button onClick={openForm } className="add-button">ADD MOVIE</button>

                {viewForm ? 
                <MovieFormF 
                addMovie={addMovie} // Pasar paràmetres d'un component a un altre
                editedMovie={editedMovie} 
                editActive={editActive} 
                updateMovie={updateMovie}/>: ''}
                
                <div className="movieList">
                    {movies.map((movie, key) => (
                        <MovieCardF 
                        key={key} 
                        movie={movie} 
                        deleteMovie={deleteMovie} 
                        editMovie={editMovie} />
                    ))}           
                </div>
          </section>
        );
    }

