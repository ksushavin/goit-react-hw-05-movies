import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "845faaf6890871e9e5252407c4ea30a6";
// const pageNumber = 1;


export const getTrends = async() => {
    const urlPopular = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;    
    const response = await axios.get(urlPopular);
    return response.data.results
}

export const getMovieById = async (movie_id) => {
    const urlTrends = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;    
    const response = await axios.get(urlTrends);
    return response.data
}

export const getReviewById = async (movie_id) => {
    const urlReview = `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;    
    const response = await axios.get(urlReview);
    return response.data.results
}

export const getCastById = async (movie_id) => {
    const urlCast = `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;    
    const response = await axios.get(urlCast);
    return response.data.cast
}

export const searchMovie = async (query) => {
    const urlSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;    
    const response = await axios.get(urlSearch);
    // console.log(response.data.results);
    return response.data.results
}




