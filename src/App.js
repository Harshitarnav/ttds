import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ResultPage from './pages/ResultPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="App">

      <Router>
        <Routes>
        <Route path="/search/result" element={<ResultPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>

      {/* Home (the one with the search on) */}
      

      {/* SearchPage (The results page) */}
    </div>
  );
}

export default App;

