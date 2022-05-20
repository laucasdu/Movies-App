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

    }

    




};