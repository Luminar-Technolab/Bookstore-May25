import { faBook,  faGear,  faGraduationCap,  faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex text-center flex-col py-10'>
      <div className='flex justify-center'><img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="admin profile" /></div>
      <h1 className="text-xl fontbold my-5">Admin Name</h1>
      <div className='md:text-left mx-auto mt-10'>
        <div className="mt-3">
          <Link to={'/admin-dashboard'}><FontAwesomeIcon icon={faHome}/> Home</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin-resources'}><FontAwesomeIcon icon={faBook}/> Resources </Link>
        </div>
        <div className="mt-3">
                     <Link to={'/admin-careers'}><FontAwesomeIcon icon={faGraduationCap} /> Careers</Link>
        </div>
        <div className="mt-3">
         <Link to={'/admin-settings'}><FontAwesomeIcon icon={faGear} /> Settings</Link>
        </div>
      </div>     
    </div>
  )
}

export default AdminSideBar