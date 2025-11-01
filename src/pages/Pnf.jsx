import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuthContext } from '../contextAPI/AuthContex'

const Pnf = () => {
  const {role,authorisedUser,setAuthorisedUser} = useContext(userAuthContext)
  const navigate = useNavigate()
  const handleHome = ()=>{
    if(role){
     role=="user" && navigate('/')
     role=="admin" && navigate('/admin-dashboard')
    }else{
      navigate('/')
    }
  }
  return (
    <div className='min-h-screen w-full md:flex justify-center items-center flex-col'>
      <img className='w-100' src="https://webytag.com/wp-content/uploads/2024/07/c19fc414b5c17a9e286bd53c5ab19e7c.gif" alt="page not found" />
      <p>Oh No!</p>
      <h1 className="text-3xl font-semibold">Look Like You're Lost</h1>
      <p>The page you are looking for is not available</p>
      <button onClick={handleHome} className="bg-blue-900 text-white rounded p-2 my-5">Back Home</button>
    </div>
  )
}

export default Pnf