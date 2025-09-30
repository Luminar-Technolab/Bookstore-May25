import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from "../components/AdminSideBar"

const ResourceAdmin = () => {
  const [bookListStatus,setBookListStatus] = useState(true)
  const [usersListStatus,setUsersListStatus] = useState(false)

  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5 gap-2 ">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-3xl text-center font-bold">All Collections</h1>
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>{setBookListStatus(true); setUsersListStatus(false); }} className={bookListStatus ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>Books</p>
          <p onClick={()=>{setUsersListStatus(true); setBookListStatus(false); }} className={usersListStatus   ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>Users</p>
        </div>
        {/* contents */}
        {
          bookListStatus &&
          <div className="md:grid grid-cols-4 w-full my-5">
              <div className="shadow  rounded p-3 m-4">
                  <img width={'100%'} height={'300px'} src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p >Book Title</p>
                    <p>$ 400</p>
                  </div>
              </div>
              <div className="shadow p-3 m-4 rounded">
                <img width={'100%'} height={'300px'} src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
              <div className="shadow p-3 m-4 rounded">
                <img width={'100%'} height={'300px'} src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
              <div className="shadow p-3 m-4 rounded">
                <img width={'100%'} height={'300px'} src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p >Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
          </div>
        }
        {
          usersListStatus &&
          <div className="md:grid grid-cols-3 w-full my-5">
            {/* duplicate card */}
              <div className="shadow  rounded p-3 m-4 bg-gray-200">
                <p className="text-red-700 font-bold text-lg">ID :  5326349750346</p>
                  <div className='flex  items-center mt-3'>
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="user" />
                    <div className="flex flex-col  text-lg ml-6 ">
                      <p className='text-blue-800'>Username</p>
                      <p>email</p>
                  </div>
                  </div>
              </div>
              <div className="shadow  rounded p-3 m-4 bg-gray-200">
                <p className="text-red-700 font-bold text-lg">ID :  5326349750346</p>
                  <div className='flex  items-center mt-3'>
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="user" />
                    <div className="flex flex-col  text-lg ml-6 ">
                      <p className='text-blue-800'>Username</p>
                      <p>email</p>
                  </div>
                  </div>
              </div>
              <div className="shadow  rounded p-3 m-4 bg-gray-200">
                <p className="text-red-700 font-bold text-lg">ID :  5326349750346</p>
                  <div className='flex  items-center mt-3'>
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="user" />
                    <div className="flex flex-col  text-lg ml-6 ">
                      <p className='text-blue-800'>Username</p>
                      <p>email</p>
                  </div>
                  </div>
              </div>
          </div>
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ResourceAdmin