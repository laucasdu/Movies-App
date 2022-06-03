import { useState } from "react";

export function MovieFormF ({addMovie,updateMovie,resetInputsForm,editActive, editedMovie}) {

    const [newMovies, setNewMovies] = useState(editedMovie);
    

   const onInputChange = (e) => { 
        let name = e.target.name; 
        let value = e.target.value;
    
        //Els ...(spread operator) serveix per mantenir tota la info dels altres camps o no es sobreescriguin
        setNewMovies({...newMovies,[name]:value}); // name: es diu aixi ja que agafara el name del formulari
        // establim el nou estat de la newMovie
        };

    // Es una funció que crida a la funció addMovie
    const onSubmitHandler = (e) => {
        e.preventDefault();
    
            !editActive ? 
            addMovie(newMovies) 
            : updateMovie(newMovies); 
    
        // seteditActive() //ATENCIÓ: el botó add i update no canvia però el tipus de dades del form sí.
         resetInputsForm(e);

        };


        return (
         
            <section className="form">
                
                <form onSubmit={onSubmitHandler} className="containerForm">
                    <input type="text" onChange={onInputChange} value={newMovies.title} name="title" placeholder="Title"/>
                    <input type="text" onChange={onInputChange} value={newMovies.year} name="year" placeholder="Year"/>
                    <input type="text" onChange={onInputChange} value={newMovies.genre} name="genre" placeholder="Genres"/>
                    <input type="url" onChange={onInputChange} value={newMovies.imgUrl} name="imgUrl" placeholder="Cover image URL"/>
            
                {editActive? // if else
                <button type="sudmit" className="button_update">
                    <i className="fa-solid fa-pen-to-square"></i></button>
                : <button type="sudmit" className="button_create">
                    <i className="fa-solid fa-circle-plus"></i></button>
                }
                
                </form>
            </section>
            );
}
    
     
        





// export function MovieFormF(props) {
//     const [editActive, setEditActive] = useState(props.editActive);
//     const [newMovies, setNewMovies] = useState(props.editedMovie);
    

//    const onInputChange = (e) => { 
//         let name = e.target.name; 
//         let value = e.target.value;
    
//         //Els ...(spread operator) serveix per mantenir tota la info dels altres camps o no es sobreescriguin
//         setNewMovies({...newMovies,[name]:value}); // name: es diu aixi ja que agafara el name del formulari
//         // establim el nou estat de la newMovie
//         };

//     // Es una funció que crida a la funció addMovie
//     const onSubmitHandler = (e) => {
//         e.preventDefault();
    
//         if (newMovies.title.length > 0){
//             !editActive ? 
//             props.addMovie(newMovies) 
//             : props.updateMovie(newMovies) 
//         }
//          props.resetInputsForm(e);
//         };


//         return (
         
//             <section className="form">
                
//                 <form onSubmit={onSubmitHandler} className="containerForm">
//                     <input type="text" onChange={onInputChange} value={newMovies.title} name="title" placeholder="Title"/>
//                     <input type="text" onChange={onInputChange} value={newMovies.year} name="year" placeholder="Year"/>
//                     <input type="text" onChange={onInputChange} value={newMovies.genre} name="genre" placeholder="Genres"/>
//                     <input type="url" onChange={onInputChange} value={newMovies.imgUrl} name="imgUrl" placeholder="Cover image URL"/>
            
//                 {setEditActive?
//                 <button type="sudmit" className="button_update">
//                     <i className="fa-solid fa-pen-to-square"></i></button>
//                 : <button type="sudmit" className="button_create">
//                     <i className="fa-solid fa-circle-plus"></i></button>
//                 }
                
//                 </form>
//             </section>
//             );
// }
    
    
    
