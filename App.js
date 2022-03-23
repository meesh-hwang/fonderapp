import * as React from "react";
import {BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Support from './pages/Support';
import Submission from "./pages/Submission";
import "./css/reset.css";
import "./css/main.css";
import Header from './components/Header';


const App = () => {
  return (
    <HashRouter>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/fonderapp" element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="submission" element={<Submission />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HashRouter>
  );
}


export default App;