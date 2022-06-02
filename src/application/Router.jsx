import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Home from "../pages/Home";
import { MoviePage } from "../pages/MoviePage";

export default function Router () {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

