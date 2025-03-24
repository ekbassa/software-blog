import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home-page/Home.jsx";
import About from "./components/pages/About-Page/About.jsx";
import Projects from "./components/pages/Projects-Page/Projects.jsx";
import SignIn from "./components/pages/signIn-Page/SignIn.jsx";
import SignUp from "./components/pages/signUp-Page/SignUp.jsx";
import Dashboard from "./components/pages/Dashboard-Page/Dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
