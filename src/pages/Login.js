import React, { useState } from 'react'
import login from "../assets/login.png"
import frame from "../assets/frame.png"
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = (props) => {

  const navigate = useNavigate();

  let loggedIn = props.loggedIn
  let setLoggedIn = props.setLoggedIn

  const [showPassword , setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function changeHandler(event){
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    })
    
    )
  }

 
  function submitHandler(event){
    console.log("printing login info")
    console.log(formData)
    toast.success("Logged In")
    event.preventDefault();
    setLoggedIn(true)
    navigate("/dashboard")
  }

 

  return (
    <div className='w-full bg-richblack-900 h-screen '>

    <div className='flex w-[80%] m-auto pt-10'>
      
      
      <div className='left m-auto w-[40%] text-white'>

          
        <h1 className='text-4xl font-bold '>Welcome Back</h1>
        <br/>
        <p className='text-richblack-100'>Build skills for today, tomorrow, and beyond. <span className='text-blue-500'>Education to future-proof your career</span>.</p>
        

        <br/>
        <br/>

        <div>

        <form    
        onSubmit={submitHandler}
        className='w-full'>



<br/>

<div className='flex flex-col w-full '>


  <label className='text-white ' htmlFor='email'
  >Email
  <sup className='text-red-500'>*</sup>
  </label>

  <input
  name = "email"
  value = {formData.email}
  onChange={changeHandler}
  required
  className='bg-richblack-700 pr-2 pl-2 pt-1 pb-1 rounded-sm' 
  type='email'
  id='email'
  placeholder='Enter Email Address'
  />


</div>



<br/>

<div className='flex flex-col w-full relative '>


  <label className='text-white ' htmlFor='pass'
  >Password
  <sup className='text-red-500'>*</sup>
  </label>

  <div>

    
  </div>

  <input
  name = "password"
  value = {formData.password}
  onChange={changeHandler}
  required
  className='bg-richblack-700 pr-2 pl-2 pt-1 pb-1 rounded-sm' 
  type={showPassword? "text" : 'password'}
  id='pass'
  placeholder='Enter Password'
  />

  <span className='absolute top-[27px] left-[460px]'>
  <button onClick={()=> setShowPassword( (prev)=> !prev)}>
  {
    showPassword? <FaRegEyeSlash /> : <FaRegEye />
  } </button>
  </span>
<div className='flex w-full justify-end'>
<button className='text-blue-400 text-xs'>Forget Password</button>
</div>



</div>

<br/>

<button  type='submit' className='bg-yellow-500 w-full rounded-md pt-2 pb-2'>Sign in</button>





<div className='flex justify-center items-center gap-x-4 mt-3 mb-3'>
  <div className='w-[30%] bg-richblack-700 h-[1px]'></div>
  <p>OR</p>
  <div className='w-[30%] bg-richblack-700 h-[1px]'></div>
</div>

<button className='flex justify-center items-center w-full border border-richblack-700 rounded-md pt-2 pb-2'> <FcGoogle /> <p>Sign in with Google</p></button>









</form>


        </div>

        
      </div>

      <div className='relative right w-[50%] mt-10 pl-10  '>

        <img className='  rounded-md shadow-md z-20 absolute w-[70%]' src={login} />
        <img className='z-10 w-[70%] absolute top-[10px] right-[170px] ' src={frame} />


      </div>



    </div>


    </div>
  )
}

export default Login