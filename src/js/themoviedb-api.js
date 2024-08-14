import axios from 'axios';

export async function getTopMovies() {

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day'
    const option = {
        params: {
            language: 'en-US',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTNhOTQwMWZjODFiNDRlMGUwNGMwZDVhNTk4NDNkOSIsIm5iZiI6MTcyMzQ5MjczMi44OTk4MDMsInN1YiI6IjY2YmE2NjI2MDdmNDdkOWUzMjUzOWZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78TRvsN1PeclKmqSUc0myeM0I0YUWEZiwtA4IPYM5tI'
        }
    }

    const response = await axios.get('', option);
    return response.data;
}



export async function getMovies(request) {

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day'
    const option = {
        params: {
            language: 'en-US',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTNhOTQwMWZjODFiNDRlMGUwNGMwZDVhNTk4NDNkOSIsIm5iZiI6MTcyMzQ5MjczMi44OTk4MDMsInN1YiI6IjY2YmE2NjI2MDdmNDdkOWUzMjUzOWZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78TRvsN1PeclKmqSUc0myeM0I0YUWEZiwtA4IPYM5tI'
        }
    }

    const response = await axios.get('', option);
    return response.data;
}