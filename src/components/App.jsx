import { Routes, Route } from 'react-router-dom'; 
import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </>
  );
};
