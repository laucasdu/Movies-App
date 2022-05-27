import { Component, useEffect, useState } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCardF } from "../card/MovieCardF";
import { MovieForm } from "../form/MovieForm";


export function MovieListF() {
    const [movies, setMovies] = useState([]);
    const [viewForm, setviewForm] = useState(false);
    const [editedMovie, seteditedMovie] = useState({
      id: "",
      title: "",
      imgUrl: "",
      year: "",
      imgUrl: "",
        });

    
    const [editActive, seteditActive] = useState(false);
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
        

    // constructor() {
    //     super();
    //        state = {
    //         viewform: false,
    //         editActive:false,
    //         editedMovie: {},

    //         movies: []
   
    //     };
    // }
  

    // // Funció que crida totes les pel·lícules de l'array de services
    // componentDidMount() {
    //     movieServices.getAllMovies().then((res) => { 
    //            setState({movies : res });
    //     });

    // }

    // Funció per eliminar una pel·lícula
    const deleteMovie = (id) => {
        movieServices.deleteMovie(id).then((res) => {
            getAllMovies()
        });

        // let deleteConfirmed = window.confirm("really delete?");
        // if (!deleteConfirmed) return;// És dir, clàusula de salvaguarda
        // let filterMovies = state.movies.filter((movie) => movie.id !== id);
        //    setState({ movies: filterMovies });

        // movieServices.deleteMovie(id).then((res) => { 
        //     if (res.status === 200){ //Codi 200 significa que la pàgina ha carregat correctament
        //        setState({ movies: filterMovies });
        //     }
        //     // if (res.status == 404) {
        //     //     alert("not found")
        //     // }
        //     // console.log(res)
           
        // });


    };


    // Funció per afegir una pel·lícula
    const addMovie = (data) => {
    //     data.id = createUuid();

    //     movieServices.addMovie(data).then((res) => {
    //            setState({ movies: [...state.movies, res] }) 
    //            setState({ viewform:false});

    //     })
    //        openForm()
     }
    


    // Funció que afegir una pel·lícules
    const updateMovie = (newMovie) => {
        // let newMoviesState = state.movies; //nou array de la nova pelicula, igual que l'original
        // let movieToEditIndex = newMoviesState.findIndex(movie => movie.id === newMovie.id) //busquem l'index que sigui igual al que volem canviar
        
        // movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
        //     newMoviesState[movieToEditIndex] = res //del la nova llista newMoviesState busquem l'index [movieToEditIndex] i li asignem a newMovie
        //        setState({movies:newMoviesState})

        // })
        //    openForm()
        //    resetInputsForm()
        //    setState({editActive: false});

    };


    // Funció per editar una pel·lícula
    const editMovie = (id) => {
        //    openForm();
        // // Creem una variable que es diu editedMovie que busqui l'identificador de la pelicula que volem editar
        // let editedMovie = state.movies.find(movie => movie.id === id);
        // // Establir un nou estat
        //    setState({editedMovie})
        //    setState({editActive:true});
    };


    //Funció per obrir el formulari
    const openForm = () => {
        // if (state.viewform)setState({viewform:false});
        // else setState({viewform:true});
        //    resetInputsForm()
        //    setState({editActive: false});

    };
    
    //Funció que serveix per buidar el formulari
    const resetInputsForm = () => {
        //    setState({editedMovie:{id:'', title:'', year:'', genre:'', imgUrl:''}})   
    };



        return (
            <section>

                <button onClick={openForm } className="add-button">ADD MOVIE</button>

                {viewForm ? 
                <MovieForm 
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

