import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './component/Root';
import Home from './component/Home';
import LogIn from './component/LogIn';
import Register from './component/Register';
import Authprovider from './component/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<LogIn></LogIn>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  </StrictMode>,
)
