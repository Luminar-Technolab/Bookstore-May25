import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Careers = () => {
  return (
    <>
    <Header/>
    <div className='md:px-40 p-5'>
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold mb-5">Careers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis! Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem corporis ratione. Pariatur provident explicabo cumque. Itaque.
        Et sequi quibusdam consequuntur maxime sint, quidem, velit a veniam blanditiis quis facilis odit, harum pariatur ipsum voluptatem rerum ut magnam earum reprehenderit. Labore soluta, expedita et nulla quibusdam veniam?</p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">Current openings</h1>
        <div className="flex my-10 justify-center items-center">
          <input
              type="text"
              className="p-2  border border-gray-200 text-black w-100 placeholder-gray-600"
              placeholder="Job Title"
            />
            <button className="bg-green-900 text-white p-2">Search</button>
        </div>
        {/* duplicate job opening */}
        <div className="border border-gray-200 p-5 shadow my-5">
          <div className="flex mb-5 ">
            <div className='w-full'>
              <h1 className="text-xl">Hr Assistant</h1>
              <hr />
            </div>
            <button className="bg-blue-900 text-white p-3 ms-5 flex items-center">Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2'/></button>
          </div>
          <p className='text-lg my-2'><FontAwesomeIcon icon={faLocationDot} />   Kochi</p>
          <p className='text-lg my-2'>Job Type : full-time</p>
          <p className='text-lg my-2'>Salary :20000-30000/month</p>
          <p className='text-lg my-2'>Qualification :</p>
          <p className='text-lg my-2'>Experience :1-2yr</p>
          <p className='text-lg my-2'>Description :</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Careers