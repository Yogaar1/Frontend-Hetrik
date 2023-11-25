import {Routes, Route} from "react-router-dom";

// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

import Homepage from "./pages/home page/Home";
import About from "./pages/about page/About";
import Service from "./pages/service page/Services";
import Article from "./pages/article page/Article";

import Login from "./pages/login page/Login";
import Signup from "./pages/register page/Register"


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" Component={Homepage}/>
                <Route path="/About Us" Component={About}/>
                <Route path="/Service" Component={Service}/>
                <Route path="/Article" Component={Article}/>
                <Route path="/Login" Component={Login}/>
                <Route path="/SignUp" Component={Signup}/>
            </Routes>
        </div>
    )
}

export default App