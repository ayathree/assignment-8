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
import ListCate from './pages/ListCate';
import BookDetails from './pages/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Front></Front>,
        loader:()=>fetch('./bookData.json'),
        
      },
      {
        path:'/listBooks',
        element:<ListBook></ListBook>
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
        path:'/listCates',
        element:<ListCate></ListCate>

      },
      {
        path:'/bookDe',
        element:<BookDetails></BookDetails>,
        
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
