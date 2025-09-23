import { faInstagram, faXTwitter,faFacebook, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white  p-10">
        <div>
          <h4 className='font-bold'>ABOUT US</h4>
          <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum laudantium earum fugit fugiat eius voluptas aperiam numquam, quos, ratione non laborum sed facere ab nesciunt enim, quo necessitatibus vero!</p>
        </div>
        <div>
          <h4 className='font-bold'>NEWS LETTER</h4>
          <p className='my-5'>Stay updated with our latest trends</p>
          <div className="flex">
            <input type="text" placeholder='Email ID' className="p-2 bg-white placeholder-gray-500" />
            <button className='bg-yellow-400 py-2 px-3'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <div>
          <h4 className='font-bold'>FOLLOW US</h4>
          <p className='my-5'>Let us be social</p>
          <div className="flex">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div className="bg-black p-3 text-center text-white">
        <p>Copyright &copy; 2023 All rights reserved | This website is made with &#10084; By Luminar Technolab</p>
      </div>
    </>
  )
}

export default Footer