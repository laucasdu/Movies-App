import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from '../App';
import Movie from '../pages/movie';

export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/Movie" element = {<Movie/>}/>
            
        </Routes> 
      
      </BrowserRouter>
  )
}
