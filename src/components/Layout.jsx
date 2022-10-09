import React from 'react';
import { Outlet } from 'react-router-dom';
import css from 'components/Layout.module.css';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <NavBar />
      <Outlet />
      
    </div>
  )
}



