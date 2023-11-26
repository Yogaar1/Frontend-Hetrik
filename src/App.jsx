import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/home page/home";
import About from "./pages/about page/about";
import Service from "./pages/service page/services";
import Article from "./pages/article page/Article";

import Login from "./pages/login page/Login";
import Signup from "./pages/register page/Register";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About Us" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
