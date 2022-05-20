import axios from "axios";

const baseURL = "https://62866d7696bccbf32d75019d.mockapi.io";
export const movieServices = {
    
    getAllMovies() {
        const movies = axios.get(baseURL + "/movies").then((res) => {
        return res.data;
    });

    return movies;
    },


    deleteMovie(id) {
        const deletedMovie = axios.delete(baseURL + "/movies/" + id);
        return deletedMovie;

    },

    addMovie(data) {
        const addedMovie = axios.post(baseURL + "/movies/", data);
        return addedMovie;
    
    },

    updateMovie(data){

        const updateMovie = axios.put(baseURL + "/movies/", data);
        return updateMovie;
    }, 
    

};