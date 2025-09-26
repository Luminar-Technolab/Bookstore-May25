import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faCamera } from '@fortawesome/free-regular-svg-icons'

const ViewBook = () => {
  const [modalStatus,setModalStatus] = useState(false)
  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className="border p-5 shadow border-gray-200">
        <div className="md:grid grid-cols-4 gap-x-10">
          <div className="col-span-1">
            <img className='w-full'  src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
          </div>
          <div className="col-span-3">
              <div className='flex justify-between'>
                <h1 className="text-xl font-bold ">Title</h1>
                <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className='my-3 text-blue-700'>- Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : demo</p>
                <p className="font-bold">Language : demo</p>
                <p className="font-bold">No. of Pages : demo</p>
                <p className="font-bold">Seller Mail : demo</p>
                <p className="font-bold">Real Price : demo</p>
                <p className="font-bold">ISBN : demo</p>
              </div>
              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vitae provident quia maiores aut sapiente porro harum, possimus cumque dolorem non optio laboriosam iusto maxime corrupti repellat nulla voluptatem. Dolor!</p>
              </div>
              <div className="flex justify-end">
                <Link to={'/all-books'} className="bg-blue-900 text-white p-2 rounded"><FontAwesomeIcon icon={faBackward} className='me-3'/>Back</Link>
                <button className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ 123</button>

              </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal */}
    {
      modalStatus &&
      <div className='relative z-10' onClick={()=>setModalStatus(false)}>
        <div className="bg-gray-500/75 fixed inset-0 ">
          <div className="flex justify-center items-center min-h-screen ">
            <div style={{width:'900px'}} className='bg-white rounded-2xl'>
              <div className='bg-black text-white flex justify-between items-center p-3 '>
                <h3>Books Images</h3>
                <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
              </div>
              <div className='my-5 ml-5'>
                <p className='text-blue-600 '>
                  <FontAwesomeIcon icon={faCamera} className='me-2'/>
                  Camera click of the book in the hand of seller
                </p>
                
                <div className="md:flex flex-wrap my-4">
                {/* duplicate images */}
                <img width={'250px'} height={'250px'} className='mx-2'  src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book images" />
                
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    <Footer/>
    </>
  )
}

export default ViewBook