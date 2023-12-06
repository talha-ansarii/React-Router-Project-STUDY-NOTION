import React from 'react'
import Logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Navbar = (props) => {
  let loggedIn = props.loggedIn;
  let setLoggedIn = props.setLoggedIn;

  function loginHandler(){
    toast.success("Logged Out")
    setLoggedIn(false);
  }
  return (
    <div className='bg-richblack-900 w-full '>

    <div className=' p-4 w-[80%] m-auto flex justify-between '>

      <div>
        <Link to="/">
        <img src={Logo} alt='logo' width="160" height="32" />
        </Link>
      </div>

      <div  className='text-white flex space-x-4'>
        <Link to="/"><p>Home</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
      </div>

      <div className='text-white flex space-x-4'>


        {!loggedIn &&
          <Link to="/login">
          <button className='border border-gray-500 pr-2 pl-2 pt-1 pb-1 rounded-md  bg-richblack-700 ' >Log in</button>
        </Link>}

        {!loggedIn &&
          <Link to="/signup">
          <button className='border border-gray-500 pr-2 pl-2 pt-1 pb-1 rounded-md  bg-richblack-700 ' >Sign up</button>
        </Link>}

        {loggedIn &&
          <Link to="/">
          <button onClick={loginHandler} className='border border-gray-500 pr-2 pl-2 pt-1 pb-1 rounded-md  bg-richblack-700 ' >Log out</button>
        </Link>}

        {loggedIn &&
          <Link to="/dashboard">
          <button className='border border-gray-500 pr-2 pl-2 pt-1 pb-1 rounded-md  bg-richblack-700 ' >Dashboard</button>
        </Link>}


      </div>

    </div>



    </div>
  )
}

export default Navbar