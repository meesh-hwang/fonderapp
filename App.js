import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Support from './pages/Support';
import Submission from "./pages/Submission";
import "./css/reset.css";
import "./css/main.css";


const App = () => {
  return (
      <Router forceRefresh={true}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="submission" element={<Submission/>} />
        </Routes>
      </Router>
  );
}


export default App;