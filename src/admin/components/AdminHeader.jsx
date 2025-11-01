import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuthContext } from '../../contextAPI/AuthContex'

const AdminHeader = () => {
  const {role,authorisedUser,setAuthorisedUser} = useContext(userAuthContext)
  const navigate = useNavigate()

  const logout=()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }

  return (
     <>
      <div className="flex justify-between items-center p-3 md:px-20">
        {/* logo */}
        <div className='flex items-center'>
          <img
            width={"50px"}
            height={"50px"}
            src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
            alt="logo"
          />
          <h1 className="text-2xl font-bold ms-2 ">BOOKSTORE</h1>
        </div>
       
        {/* logout block*/}
       <button onClick={logout} className="border border-black  rounded px-3 py-2 ms-3 hover:bg-black hover:text-white">
              {" "}
              <FontAwesomeIcon icon={faPowerOff} className="me-1" /> Logout{" "}
        </button>
      </div>
      <div className="w-full p-3 bg-black text-white ">
       <marquee>Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!</marquee>
      </div>
    </>
  )
}

export default AdminHeader