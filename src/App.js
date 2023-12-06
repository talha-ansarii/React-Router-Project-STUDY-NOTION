import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { useState } from "react";


function App() {
  const [loggedIn , setLoggedIn] = useState(false)
  return (

    <div className="">

      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Routes>

        <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />

        </Route>



      </Routes>

    </div>


  );
}

export default App;
