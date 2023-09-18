import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/header/about/About.jsx';
import Contact from './components/home/contact/Contact.jsx';
import Career from './components/home/career/Career.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/userDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children : [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/career",
        element: <Career></Career>
      }, 
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/details/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
       element: <UserDetails></UserDetails>
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
