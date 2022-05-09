import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

function Layout(props){
  return(
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment> 
  )
}

export default Layout