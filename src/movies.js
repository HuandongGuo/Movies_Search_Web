
// src/movies.js
export const fetchMovies = async (query) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=1acbf7f4&s=${query}`);
    const data = await response.json();
    return data;
}

