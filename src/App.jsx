import React from "react";

// Pages
import Home from "./pages/home";
import Favorite from "./pages/favorite";

// Router-Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Router>
  );
}


export default App;
