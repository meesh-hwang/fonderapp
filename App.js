import * as React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import {View} from "react";
import Home from './pages/Home';
import Support from './pages/Support';
import Header from './components/Header.js';
import Submission from "./pages/Submission";
import Footer from "./components/Footer";
import "./css/reset.css";
import "./css/main.css";


const App = () => {
  return (
      <BrowserRouter forceRefresh={true}>
      <Header/>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
        </Helmet>
        <Routes>
          <Route path="/fonder/" element={<Home />} />
          <Route path="/fonder/support" element={<Support />} />
          <Route path="/fonder/submission" element={<Submission/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}


export default App;
