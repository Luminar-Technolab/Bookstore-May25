import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

const Auth = ({register}) => {

  const [viewPasswordStatus,setViewPasswordStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({username:"",email:"",password:""})

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
                <button className='bg-green-700 p-2 w-full rounded'>Register</button>
              :
              <button className='bg-green-700 p-2 w-full rounded'>Login</button>
              }
            </div>
            {/* google Authentication */}

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
    </div>
  )
}

export default Auth