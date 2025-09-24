import React from 'react'
import Header from '../components/Header'
import Footer from "../../components/Footer";

const AllBooks = () => {
  return (
    <>
    <Header/>
      <>
        <div className="flex justify-center items-center flex-col my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex my-5">
            <input type="text" className="p-2  border border-gray-200 text-black w-100 placeholder-gray-600" placeholder='Search By Title'/>
            <button className="bg-blue-900 text-white p-2">Search</button>
          </div>
        </div>
        {/* grid */}
        <div className="grid grid-cols-3 md:px-40 p-5">
           <div className="col-span-1">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id='Literary' name='filter'/>
              <label className='ms-3' htmlFor="Literary">Literary Fiction</label>
            </div>
           </div>
        </div>
      </>

    <Footer/>
    </>
  )
}

export default AllBooks