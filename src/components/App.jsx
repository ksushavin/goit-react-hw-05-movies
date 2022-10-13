import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          
        </Route>
        
      </Routes>
    </>
  );
};
