import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideosPage from "./VideosPage";
import BlankPage from "./BlankPage";
import Navigation from "./Navigation";
import BlankPage1 from "./BlankPage1";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/blank" element={<BlankPage />} />
          <Route path="/blank1" element={<BlankPage1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
