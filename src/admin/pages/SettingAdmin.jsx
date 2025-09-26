import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from "../components/AdminSideBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const SettingAdmin = () => {
  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5 gap-2 ">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 ">
        <h1 className="text-3xl font-bold text-center my-5">Settings</h1>
        <div className="md:grid grid-cols-2 gap-5 mx-5 items-center ">
          <div>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi ipsam animi molestias ducimus quo minus sunt. Exercitationem saepe consequatur doloremque sequi possimus asperiores quo, aut impedit repellendus velit? Nobis!
            Magnam architecto enim libero exercitationem ad, expedita aut numquam velit ex at ipsum eos quo sint officiis ducimus dicta fugit, nemo maxime alias aliquid cum quaerat fugiat? Odio, qui nihil.
            Debitis nisi non exercitationem molestiae .</p>
             <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi ipsam animi molestias ducimus quo minus sunt. Exercitationem saepe consequatur doloremque sequi possimus asperiores quo, aut impedit repellendus velit? Nobis!
            Magnam architecto enim libero exercitationem ad, expedita aut numquam velit ex at ipsum eos quo sint officiis ducimus dicta fugit, nemo maxime alias aliquid cum quaerat fugiat? Odio, qui nihil.
            Debitis nisi non exercitationem molestiae .</p>
          </div>
          <div className="rounded bg-blue-100 p-10 flex justify-center items-center flex-col mt-10 md:mt-0">
            <input type="file" name="" id="adminPic"  className='hidden'/>
            <label htmlFor="adminPic" className='mb-3'>
              <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="admin profile" />
              <FontAwesomeIcon icon={faPen} style={{marginLeft:'140px',marginTop:'-100px'}} className="bg-yellow-400 p-2 text-white rounded"/>
            </label>
            <div className="mb-3 w-full">
              <input   type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Username"  />
            </div>
            <div className="mb-3 w-full">
              <input   type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Password"  />
            </div>
            <div className="mb-3 w-full">
              <input   type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Confirm Password"  />
            </div>
            <div className="my-3 w-full flex justify-evenly">
              <button className="bg-orange-600 text-white px-4 py-2 rounded">RESET</button>
              <button className="bg-green-900 text-white px-4 py-2 rounded">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SettingAdmin