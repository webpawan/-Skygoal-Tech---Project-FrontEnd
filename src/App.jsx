import React from 'react'
import Auth from './container/page/Auth/Auth'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import {  Route,Routes} from "react-router-dom";
import Home from './container/page/Home/Home';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </>
  );
}

export default App