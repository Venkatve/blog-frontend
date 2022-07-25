import Home from "./pages/Home.jsx";
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import Single from "./pages/Single";
import Write from "./pages/Write";
import { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

 
loadProgressBar()

function App() {
  const {user} = useContext(Context);
  return (
    <>
    <div className="bg-blue-100">


    
      <Router>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route
            path="/write"
            element={user  ? <Write /> : <Login />}
          ></Route>
          
        </Routes>
        <Footer/>
      </Router>
      </div>
    </>
  );
}

export default App;