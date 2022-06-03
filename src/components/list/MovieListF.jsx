import { useEffect, useState } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCardF } from "../card/MovieCardF";
import { MovieFormF } from "../form/MovieFormF";
import Loader from "../loader/Loader";
import Slider from "../slider/Slider";



export function MovieListF() {

    const [movies, setMovies] = useState([]);
    const [viewForm, setViewForm] = useState(false);
    const [editActive, setEditActive] = useState(false);
    const [editedMovie, setEditedMovie] = useState('')
    const [isLoading, setIsLoading] = useState (false)

      
        useEffect(() => {
            getAllMovies();
        }, []);
    

        const getAllMovies = () => {
            setIsLoading(true);
            movieServices.getAllMovies().then((res) => { 
                setMovies(res);
            setIsLoading(false);
         });
 
     };
  

    // // Funció per eliminar una pel·lícula
    // const deleteMovie = (id) => {
    //     movieServices.deleteMovie(id).then((res) => {
    //         getAllMovies()
    //     });
    // };


    //FUNCIÓ PER ESBORRAR UNA PEL·LÍCULA
    const deleteMovie = (movie) => {    
        let deleteConfirmed = window.confirm(`really delete ${movie.title}?`);
        if (!deleteConfirmed) return; //clàusula salvaguarda
    
    movieServices.deleteMovie(movie.id).then((res) => {
        
        if (res.status === 200) {
            let filterMovies = movies.filter(item => item.id !==movie.id);
            setMovies(filterMovies);
        } 
    })
}


    // Funció per afegir una pel·lícula
    const addMovie = (data) => {
        movieServices.addMovie(data).then((res) => {
            setMovies([...movies, res]); 

        });

        setViewForm(false);
        };


    //Funció per canviar una peli·lícula
        const updateMovie = (newMovie) => {
            movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
            let movieToUpdate = movies.map((movie) => movie.id === newMovie.id ? newMovie : movie) 
            // Map es una funció que permit transformar els elements d'una llista i que els canvia a una nova llista amb els
           //elements transformats.
            setMovies(movieToUpdate)
            // .catch((err) => console.log(err))
        })
        openForm()
        resetInputsForm()
        setEditActive(false)  
    };



    // Funció per editar una pel·lícula
    const editMovie = (id) => {
        openForm();
        let editedMovie = movies.find(movie => movie.id === id);
        setEditedMovie(editedMovie)
        setEditActive(true);
    };

    //Funció per obrir i tancar el formulari
    const openForm = () => {
        if (viewForm)setViewForm(false);
        else setViewForm(true);
        resetInputsForm()
        setEditActive(false)  
    };
    
    //Funció que serveix per buidar el formulari
    const resetInputsForm = () => {
        setEditedMovie({id:'', title:'', year:'', genre:'', imgUrl:''})   
    };



        return (
            <section>

                <Slider/>
                <button onClick={openForm} className="add-button">ADD MOVIE</button>
                
                {viewForm ? 
                <MovieFormF
                addMovie={addMovie} // Pasar paràmetres d'un component a un altre
                editedMovie={editedMovie} 
                editActive={editActive} 
                updateMovie={updateMovie}
                resetInputsForm={resetInputsForm}/>: ''}
                
                {isLoading && <Loader/>}

                (<div className="movieList">
                    {movies.map((movie, key) => (
                        <MovieCardF 
                        key={key} 
                        movie={movie} 
                        deleteMovie={deleteMovie} 
                        editMovie={editMovie} />
                    ))}    
                </div>)     
          </section>
        );
    }

