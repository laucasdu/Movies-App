// import { Component } from "react";
// import { movieServices } from "../../services/movieServices";
// import { MovieCardF } from "../card/MovieCardF";
// import { MovieForm } from "../form/MovieForm";
// import { createUuid } from "../utils/createUuid";



// export class MovieList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             viewform: false,
//             editActive:false,
//             editedMovie: {},

//             movies: []
   
//         };
//     }
  

//     // Funció que crida totes les pel·lícules de l'array de services
//     componentDidMount() {
//         movieServices.getAllMovies().then((res) => { 
//             this.setState({movies : res });
//         });

//     }

//     // Funció per eliminar una pel·lícula
//     deleteMovie = (id) => {
//         let deleteConfirmed = window.confirm("really delete?");
//         if (!deleteConfirmed) return;// És dir, clàusula de salvaguarda
//         let filterMovies = this.state.movies.filter((movie) => movie.id !== id);
//         this.setState({ movies: filterMovies });

//         movieServices.deleteMovie(id).then((res) => { 
//             if (res.status === 200){ //Codi 200 significa que la pàgina ha carregat correctament
//             this.setState({ movies: filterMovies });
//             }
//             // if (res.status == 404) {
//             //     alert("not found")
//             // }
//             // console.log(res)
           
//         });


//     };


//     // Funció per afegir una pel·lícula
//     addMovie = (data) => {
//         data.id = createUuid();

//         movieServices.addMovie(data).then((res) => {
//             this.setState({ movies: [...this.state.movies, res] }) 
//             this.setState({ viewform:false});

//         })
//         this.openForm()
//     }
    


//     // Funció que afegir una pel·lícules
//     updateMovie = (newMovie) => {
//         let newMoviesState = this.state.movies; //nou array de la nova pelicula, igual que l'original
//         let movieToEditIndex = newMoviesState.findIndex(movie => movie.id === newMovie.id) //busquem l'index que sigui igual al que volem canviar
        
//         movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
//             newMoviesState[movieToEditIndex] = res //del la nova llista newMoviesState busquem l'index [movieToEditIndex] i li asignem a newMovie
//             this.setState({movies:newMoviesState})

//         })
//         this.openForm()
//         this.resetInputsForm()
//         this.setState({editActive: false});

//     }  


//     // Funció per editar una pel·lícula
//     editMovie = (id) => {
//         this.openForm();
//         // Creem una variable que es diu editedMovie que busqui l'identificador de la pelicula que volem editar
//         let editedMovie = this.state.movies.find(movie => movie.id === id);
//         // Establir un nou estat
//         this.setState({editedMovie})
//         this.setState({editActive:true});
//     };


//     //Funció per obrir el formulari
//     openForm = () => {
//         if (this.state.viewform) this.setState({viewform:false});
//         else this.setState({viewform:true});
//         this.resetInputsForm()
//         this.setState({editActive: false});

//     };
    
//     //Funció que serveix per buidar el formulari
//     resetInputsForm = () => {
//         this.setState({editedMovie:{id:'', title:'', year:'', genre:'', imgUrl:''}})   
//     };



//     render() {
//         return (
//             <section>

//                 <button onClick={ this.openForm } className="add-button">ADD MOVIE</button>

//                 {this.state.viewform ? <MovieForm 
//                 addMovie={this.addMovie} // Pasar paràmetres d'un component a un altre
//                 editedMovie={this.state.editedMovie} 
//                 editActive={this.state.editActive} 
//                 updateMovie={this.updateMovie}/>: ''}
                
//                 <div className="movieList">
//                     {this.state.movies.map((movie, key) => (
//                         <MovieCardF key={key} movie={movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} />
//                     ))}           
//                 </div>
//           </section>
//         );
//     }
// }
