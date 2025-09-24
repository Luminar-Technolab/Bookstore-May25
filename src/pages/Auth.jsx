import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

const Auth = ({register}) => {
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
              <input placeholder='Username ' type="text" className="bg-white p-2 w-full rounded placeholder-gray-500 my-5 text-black" />
            }
            <input placeholder='Email ID ' type="text" className="bg-white p-2 w-full rounded placeholder-gray-500 mb-5 text-black" />
            <input placeholder='Password ' type="password" className="bg-white p-2 w-full rounded placeholder-gray-500 mb-3 text-black" />
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