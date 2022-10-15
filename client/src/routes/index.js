import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesContainer from "containers/movies";
import MovieDetailsContainer from "containers/details";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/:id" element={<MovieDetailsContainer />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
