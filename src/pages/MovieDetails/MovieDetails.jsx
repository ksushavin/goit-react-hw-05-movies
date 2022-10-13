import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { getMovieById } from 'components/ApiService';
import { Genres } from 'components/Genres/Genres';
import css from 'pages/MovieDetails/MovieDetails.module.css';
import { GetClassName } from 'components/GetClassName/GetClassName';


export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const goBack = location.state?.from ?? "/";

  const fetches = useCallback(() => {
    const fetchMovie = async () => {
      try {
        const responseMovie = await getMovieById(id);
        setMovie(responseMovie);

      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie();
  }, [id]);


  useEffect(() => {
    if (movie) {
      return
    }
    fetches();
  }, [fetches, movie])
 

  return (
    <main>
      <Link to={goBack}>Go back</Link>
      {movie && (
        <>
          <div className={css.container}>
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title} />
            <div>
              <h1>{movie.title}</h1>
              <p>User score: {movie.vote_count}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <Genres genres={movie.genres} />
            </div>
          </div>

          <div>
            <p>Additional information</p>
            <ul className={css.addInfo}>
              <li className={css.addInfo__item}>
                <NavLink
                  to="cast"
                  className={GetClassName}>Cast
                </NavLink>
              </li>
              <li className={css.addInfo__item}>
                <NavLink
                  to="reviews"
                  className={GetClassName}>Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={Loader}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main> 
  )
}

export default MovieDetails;
