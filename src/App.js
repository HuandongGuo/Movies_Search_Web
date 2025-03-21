import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { fetchMovies } from './movies';
//  1acbf7f4


// const API_URL = "https://www.omdbapi.com?apikey=1acbf7f4";

const App = () => {

    const[movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const data = await fetchMovies(title);
        setMovies(data.Search);
    };


    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className= "container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
                ): (
                    <div className={"empty"}>
                        <h2>No movies found</h2>
                    </div>
                    )
            }
        </div>
    );
}
export default App;