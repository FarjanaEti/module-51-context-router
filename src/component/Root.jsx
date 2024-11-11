import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Authprovider from './Authprovider';

const Root = () => {
  return (
 <div>
  <Authprovider>

  <Header></Header>
     <Outlet></Outlet>                                                                                
  </Authprovider>
 </div>
 );
};

export default Root;