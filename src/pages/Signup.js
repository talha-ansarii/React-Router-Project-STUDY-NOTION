import React, { useEffect, useState } from 'react'
import signup from "../assets/signup.png"
import frame from "../assets/frame.png"
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [person, setPerson] = useState("student")

  const navigate = useNavigate();

  let loggedIn = props.loggedIn;
  let setLoggedIn = props.setLoggedIn;

  const [formData , setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
    person: "student"
  })

  const [showPassword, setShowPassword] = useState({
    pass1: true,
    pass2: true,
  })


 

  function changeHandler(event){

    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]: event.target.value


    }))
  }

  const passHandler = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };


  
  function submitHandler(event){
    event.preventDefault()

    if(formData.password === formData.confirmPass){
      setLoggedIn(true)
      toast.success("Account Created")
      navigate("/dashboard")

      console.log("Printing sign up info")
      console.log(formData)

    }
    else{
      toast.error("Passwords do not match")
    }


  }

  

  function personHandler(event){

    setPerson(event.target.name)

    setFormData((prev) => ({
      ...prev,
      ["person"] : event.target.name,
    })
    )
  }

  


  return (
    <div className='w-full bg-richblack-900 pb-10 '>

    <div className='flex w-[80%] m-auto pt-10'>
      
      
      <div className='left m-auto w-[40%] text-white'>

          
        <h1 className='text-4xl font-bold '>Join the millions learning to code with StudyNotion for free</h1>
        <br/>
        <p className='text-richblack-100'>Build skills for today, tomorrow, and beyond. <span className='text-blue-500'>Education to future-proof your career</span>.</p>
        
        <br/>
        
        <span className='flex w-[50%] gap-x-3  justify-evenly items-center bg-richblack-700 rounded-full pr-3 pl-3 pt-2 pb-2 text-richblack-100'>
        
          <button name='student' onClick={personHandler} className={`${person === "student" ? ' my-auto bg-richblack-800  rounded-full w-[30%] ' : ' '}`}>Student</button>
          <button name='instructor' onClick={personHandler} className={` ${person === "instructor" ? ' my-auto bg-richblack-800 w-[40%]  rounded-full ' : ' '}`}>Instructor</button>
        </span>

        <br/>
        <br/>

        <div>

        <form 
        onSubmit={submitHandler}
        className='w-full'>

<div className='flex gap-x-4'>

<div className='flex flex-col w-full'>


    <label className='text-white ' htmlFor='firstName'
    >First Name
    <sup className='text-red-500'>*</sup>
    </label>

    <input
    name='firstName'
    value={formData.firstName}
    onChange={changeHandler}
    required
    className=' bg-richblack-700 w-full  pr-2 pl-2 pt-1 pb-1 rounded-sm' 
    type='text'
    id='firstName'
    placeholder='Enter First Name'
    />

</div>


<div className='flex flex-col w-full'>


  <label className='text-white  ' htmlFor='lastName'
  >Last Name
  <sup className='text-red-500'>*</sup>
  </label>

  <input 
  name='lastName'
    value={formData.lastName}
    onChange={changeHandler}
  required
  className=' bg-richblack-700 pr-2 pl-2 pt-1 pb-1 rounded-sm'
  type='text'
  id='lastName'
  placeholder='Enter Last Name'
  />

</div>


</div>

<br/>

<div className='flex flex-col w-full '>


  <label className='text-white ' htmlFor='email'
  >Email
  <sup className='text-red-500'>*</sup>
  </label>

  <input
  name='email'
    value={formData.email}
    onChange={changeHandler}
  required
  className='bg-richblack-700 pr-2 pl-2 pt-1 pb-1 rounded-sm' 
  type='email'
  id='email'
  placeholder='Enter Email Address'
  />

</div>

<br/>

<div className='flex gap-x-4 '>

<div className='flex flex-col w-full relative'>


    <label className='text-white  ' htmlFor='enter-password'
    >Create Password
    <sup className='text-red-500'>*</sup>
    </label>

    <div className='flex items-center w-full'>
    <input
    name='password'
    value={formData.password}
    onChange={changeHandler}
    required 
    className='bg-richblack-700 w-full pr-2 pl-2 pt-1 pb-1 rounded-sm'
    type={showPassword.pass1? 'password' :'text'}
    id='enter-password'
    placeholder='Enter Password'
    />
    <span className='absolute top-[28px] left-[210px]'>
    <button onClick={() => passHandler("pass1")}>
    {
      showPassword.pass1? <FaRegEye /> : <FaRegEyeSlash />
    } 
    </button>
    </span>

    </div>
    <br/>

</div>


<div className='flex flex-col w-full relative'>


  <label className='text-white ' htmlFor='confirm-password'
  >Create Password
  <sup className='text-red-500'>*</sup>
  </label>
  

  
  <input 
  name='confirmPass'
  value={formData.confirmPass}
  onChange={changeHandler}
  required
  className=' bg-richblack-700 w-full pr-2 pl-2 pt-1 pb-1 rounded-sm '
  type = {showPassword.pass2? ('password') : ('text')}
  id='confirm-password'
  placeholder='Confirm Password'
  />
  <span className='absolute top-[28px] left-[210px]'>
  <button onClick={()=> passHandler("pass2")}>    
    {
      showPassword.pass2? <FaRegEye /> : <FaRegEyeSlash />
    } 
    </button>
  </span>

  
  

</div>


</div>

<button type='submit' className='bg-yellow-500 w-full rounded-md pt-2 pb-2'>Create Account</button>


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

        <img className='  rounded-md shadow-md z-20 absolute w-[70%]' src={signup} />
        <img className='z-10 w-[70%] absolute top-[10px] right-[170px] ' src={frame} />


      </div>



    </div>


    </div>
  )}


export default Signup