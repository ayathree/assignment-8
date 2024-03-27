import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import Front from './pages/Front';
import ListBook from './pages/ListBook';
import Pages from './pages/Pages';
import Categories from './pages/Categories';

import BookDetails from './pages/BookDetails';
import Read from './components/Read';
import Wish from './components/Wish';
import Error from './pages/Error';
import Ratings from './pages/Ratings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Front></Front>,
       
        
      },
      {
        path:'/listBooks',
        element:<ListBook></ListBook>,
        children:[
          {
            index:true,
            element:<Read></Read>
          },
          {
            path:'wishlist',
            element:<Wish></Wish>
            
          }
        ]
      },
      {
        path:'/pages',
        element:<Pages></Pages>
      },
      {
        path:'/categories',
        element:<Categories></Categories>

      },
      {
        path:'/ratings',
        element:<Ratings></Ratings>

      },
      {
        path:'/card/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/bookData.json')
      }
      
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
