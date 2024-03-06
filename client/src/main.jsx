import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Services from './pages/Services'; 
import AboutUs from './pages/AboutUs'; 
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Services />,
      },
      {
        path: '/about-us', 
        element: <AboutUs />,
      },
      {
        path: '/contact-us', 
        element: <ContactUs />,
      },
      {
        path: '/projects', 
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
