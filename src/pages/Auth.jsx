import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import {loginAPI, registerAPI} from '../services/allAPI'
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';

const Auth = ({register}) => {
  const navigate = useNavigate()
  const [viewPasswordStatus,setViewPasswordStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({username:"",email:"",password:""})

  // console.log(userDetails);

  const handleRegister  = async ()=>{
    // console.log("Inside handleRegister");
    const {username,email,password} = userDetails
    if(!username || !email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      // toast.success("Proceed to API Call")
      try{
        const result = await registerAPI(userDetails)
        console.log(result);
        if(result.status==200){
          toast.success("Register successfully!!! Please Login....")
          setUserDetails({username:"",email:"",password:""})
          navigate('/login')
        }else if(result.status==409){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})
          navigate('/login')
        }else{
          console.log(result);   
          toast.error("Something went wrong!!!")
          setUserDetails({username:"",email:"",password:""})       
        }
      }catch(err){
        console.log(err);        
      }
    }
  }

  const handleLogin = async()=>{
    const {email,password} = userDetails
    if(!email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      // toast.success("Proceed to API Call")
      try{
        const result = await loginAPI(userDetails)
        console.log(result);
        if(result.status==200){
          toast.success("Login successfully!!!")
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setTimeout(() => {
            if(result.data.user.role=="admin"){
              navigate('/admin-dashboard')
            }else{
              navigate('/')
            }
          }, 2500);
        }else if(result.status==401){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})
        }else if(result.status==404){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})       
        }else{
          toast.error("Something went wrong!!!")
          setUserDetails({username:"",email:"",password:""})       
        }
      }catch(err){
        console.log(err);        
      }
    }
  }
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("/backgroundImg.jpg")] bg-cover bg-center'>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center">BOOK STORE</h1>
        <div style={{width:'400px'}} className="bg-black text-white p-5 flex flex-col justify-center items-center my-5 ">
          <div style={{width:'100px',height:'100px', borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'>
          <FontAwesomeIcon icon={faUser}  className='text-3xl'/>
          </div>
          <h1 className='text-2xl'>{ register?"Register":"Login"}</h1>
          <form className='my-5 w-full '>
            {
              register &&
              <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} placeholder='Username ' type="text" className="bg-white p-2 w-full rounded placeholder-gray-500 my-5 text-black" />
            }
            <input  value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} placeholder='Email ID ' type="text" className="bg-white p-2 w-full rounded placeholder-gray-500 mb-5 text-black" />
            <div className='flex items-center'>
              <input  value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} placeholder='Password ' type={viewPasswordStatus?"text":"password"} className="bg-white p-2 w-full rounded placeholder-gray-500 mb-3 text-black" />
              { !viewPasswordStatus ?
              <FontAwesomeIcon icon={faEye} onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} style={{marginLeft:'-30px'}} className='text-gray-500 cursor-pointer'/>
              :
              <FontAwesomeIcon icon={faEyeSlash} onClick={()=>setViewPasswordStatus(!viewPasswordStatus)} style={{marginLeft:'-30px'}} className='text-gray-500 cursor-pointer'/>}
            </div>
            <div className="flex justify-between mb-5">
              <p className='text-xs text-orange-300'>*Never share your password with orthers</p>
              <button className='text-xs underline'>Forget Password</button>
            </div>
            <div className='text-center'>
              {
              register?              
                <button type='button'  onClick={handleRegister} className='bg-green-700 p-2 w-full rounded'>Register</button>
              :
              <button type='button' onClick={handleLogin} className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            {/* google Authentication */}
              <div className="my-5 text-center">
                {!register && <p>----------------or----------------</p>}
                {!register && <div className='my-5 flex justify-center w-full'>
                    <GoogleOAuthProvider clientId="304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com" >
                      <GoogleLogin 
                        onSuccess={credentialResponse => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                    </GoogleOAuthProvider>
                  </div>}
              </div>
            <div className='my-5 text-center'>
              {
                register?
                <p className='text-blue-600'>Are you a Already a user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                :
                <p className='text-blue-600'>Are you a New User? <Link to={'/register'} className='underline ms-5 '>Register</Link></p>
              }
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default Auth