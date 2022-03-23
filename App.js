import * as React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Support from './pages/Support';
import Submission from "./pages/Submission";
import "./css/reset.css";
import "./css/main.css";
import Header from './components/Header';


const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fonderapp/support" element={<Support />} />
          <Route path="/fonderapp/submission" element={<Submission />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}


export default App;