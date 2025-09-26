import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from "../components/AdminSideBar"

const CareerAdmin = () => {
  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5 gap-2 ">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 ">
        <p>Career Admin Page</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CareerAdmin