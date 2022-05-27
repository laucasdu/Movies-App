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
        const deletedMovie = axios.delete(baseURL + "/movies/" + id).then((res) => res.data);
            return deletedMovie;
    },


    addMovie(data) {
        const addNewMovie = axios.post(baseURL + "/movies/", data).then((res) => res.data);
            return addNewMovie;
        },
    
    

    updateMovie(id, newMovie) {
        const updateMovie = axios.put (baseURL + "/movies/"+ id, newMovie).then((res) => res.data);
            return updateMovie;

        }
    
};