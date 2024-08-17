import axios from 'axios';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTNhOTQwMWZjODFiNDRlMGUwNGMwZDVhNTk4NDNkOSIsIm5iZiI6MTcyMzQ5MjczMi44OTk4MDMsInN1YiI6IjY2YmE2NjI2MDdmNDdkOWUzMjUzOWZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78TRvsN1PeclKmqSUc0myeM0I0YUWEZiwtA4IPYM5tI';

const headers = {
    accept: 'application/json',
    Authorization: API_KEY,
}


export async function getTopMovies() {
    axios.defaults.baseURL = `${API_BASE_URL}/trending/movie/day`
    const option = {
        params: {
            language: 'en-US',
        },
        headers,
    }
    const response = await axios.get('', option);
    return response.data;
}



export async function getMovies(request) {
    axios.defaults.baseURL = `${API_BASE_URL}/search/movie`
    const option = {
        params: {
            query: request,
            include_adult: 'false',
            language: 'en-US',
            page: 1,
        },
        headers,
    }
    const response = await axios.get('', option);
    return response.data;
}



export async function getMovie(idMovie) {

    axios.defaults.baseURL = `${API_BASE_URL}/movie/${idMovie}`;
    const option = {
        params: {
            language: 'en-US',
        },
        headers,
    }
    const response = await axios.get('', option);
    return response.data;
}



export async function getMovieCredits(idMovie) {
    axios.defaults.baseURL = `${API_BASE_URL}/movie/${idMovie}/credits`;
    const option = {
        params: {
            language: 'en-US',
        },
        headers,
    }
    const response = await axios.get('', option);
    return response.data;
}



export async function getMovieReviews(idMovie) {
    axios.defaults.baseURL = `${API_BASE_URL}/movie/${idMovie}/reviews`;
    const option = {
        params: {
            language: 'en-US',
            page: 1,
        },
        headers,
    }
    const response = await axios.get('', option);
    return response.data;
}