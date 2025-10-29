import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from "../components/AdminSideBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AddJob from '../components/AddJob'

const CareerAdmin = () => {
  const [jobListStatus,setJobListStatus] = useState(true)
  const [lisApplicationSatus,setListApplicationStatus] = useState(false)
  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5 gap-2 ">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-3xl text-center font-bold">Careers</h1>
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>{setJobListStatus(true); setListApplicationStatus(false); }} className={jobListStatus ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>Job Post</p>
          <p onClick={()=>{setListApplicationStatus(true); setJobListStatus(false); }} className={lisApplicationSatus   ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>View Applications</p>
        </div>
        {/* contents */}
        {
          jobListStatus &&
          <>
            <div className="flex justify-between items-center my-10">
              <div>
                <input
                  type="text"
                  className="p-2  border border-gray-200 text-black w-75 placeholder-gray-400"
                  placeholder="Search By Job Title"
                />
                <button className="bg-blue-900 text-white p-2">Search</button>
              </div>
              <AddJob/>
            </div>
            {/* duplicate job opening */}
            <div className="border border-gray-200 p-5 shadow my-5">
              <div className="flex mb-5 ">
                <div className='w-full'>
                  <h1 className="text-xl font-bold">Hr Assistant</h1>
                  <hr />
                </div>
                <button  className="bg-red-900 text-white p-3 ms-5 flex items-center">Delete <FontAwesomeIcon icon={faTrash} className='ms-2'/></button>
              </div>
              <p className='text-lg text-blue-700 my-2'><FontAwesomeIcon icon={faLocationDot} />   Kochi</p>
              <p className='text-lg my-2'>Job Type : full-time</p>
              <p className='text-lg my-2'>Salary :20000-30000/month</p>
              <p className='text-lg my-2'>Qualification : MBA</p>
              <p className='text-lg my-2'>Experience :1-2yr</p>
              <p className='text-lg my-2'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor voluptate deleniti ut nobis quia, aliquam molestias error! Quia incidunt magnam voluptatem aliquam et adipisci excepturi est reprehenderit, dolorum assumenda?
              Illo tempore, dolorum maxime consequatur quam temporibus expedita debitis voluptas, cumque nulla modi saepe earum? Nemo dolorem fuga, cum ea blanditiis nisi, soluta hic impedit quidem beatae eos laborum ratione.</p>
            </div>
          </>
        }
        {
          lisApplicationSatus &&
          <div className='p-10 overflow-x-hidden'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No.</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>E Mail</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-3 text-center">1</td>
                    <td className="border border-gray-500 p-3 text-center">Front ENd Developer</td>
                    <td className="border border-gray-500 p-3 text-center">Max Miller</td>
                    <td className="border border-gray-500 p-3 text-center">BCA</td>
                    <td className="border border-gray-500 p-3 text-center">max@gmail.com</td>
                    <td className="border border-gray-500 p-3 text-center">9087654321</td>
                    <td className="border border-gray-500 p-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe eligendi enim debitis qui deleniti voluptate quisquam inventore iure! Omnis vitae eum harum ex perspiciatis inventore sed, eos magnam odit?</td>
                    <td className="border border-gray-500 p-3 text-center"><Link  className="text-blue-600 underline">Resume</Link></td>
                  </tr>
                </tbody>
              </table>
          </div>
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CareerAdmin