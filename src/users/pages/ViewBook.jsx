import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faBackward } from '@fortawesome/free-solid-svg-icons'

const ViewBook = () => {
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
                <button className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
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
                <button className="bg-blue-900 text-white p-2 rounded"><FontAwesomeIcon icon={faBackward} className='me-3'/>Back</button>
                <button className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ 123</button>

              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ViewBook