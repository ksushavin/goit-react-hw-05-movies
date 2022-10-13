import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTrends } from 'components/ApiService';

export const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
      const fetchMovies = async () => {
        try {
          const responseMovies = await getTrends();
          setTrendMovies(responseMovies); 
        }
        catch (error) {
          console.log(error)
        } 
      }
      fetchMovies();
  }, []);
    
  const movies = trendMovies.map(({ id, title  }) => {
    return (
      trendMovies && (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
      </li>
    ))
  })

  return (
    <ul>
      {movies}
    </ul>
  )
}

