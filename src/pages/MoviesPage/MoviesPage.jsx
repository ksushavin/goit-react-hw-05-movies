import { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { searchMovie } from 'components/ApiService';
import { SearchBox } from 'components/SearchBox/SearchBox';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();
  
  
  const getQuery = (value) => {
    setSearchParams(value !=="" ? { query: value} : {});
  }

  const fetches = useCallback((query) => {
    const fetchMovies = async (query) => {
      try {
        const responseMovies = await searchMovie(query);
        setMovies(responseMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies(query);
  }, []);


  useEffect(() => {
    if (query) {
      fetches(query);
      return
    }
    setMovies([]);
  }, [fetches, query])


  return (
    <div>
      <SearchBox onChange={getQuery} value={query} />
      {!movies.length > 0 ? <div>Please, enter your search query</div> : (
        <ul>
          {movies.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>{item.title} </Link>
            </li>
            
          ))}
        </ul>
      )}
    </div>
  ) 
}

export default MoviesPage;
