import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from 'components/Layout/Layout.module.css';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      
    </div>
  )
}



