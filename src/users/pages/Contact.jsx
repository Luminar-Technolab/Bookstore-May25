import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className='md:px-40 p-5'>
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold mb-5">Contacts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis! Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem corporis ratione. Pariatur provident explicabo cumque. Itaque.
        Et sequi quibusdam consequuntur maxime sint, quidem, velit a veniam blanditiis quis facilis odit, harum pariatur ipsum voluptatem rerum ut magnam earum reprehenderit. Labore soluta, expedita et nulla quibusdam veniam?</p>
      </div>
      <div className="md:flex justify-evenly items-center my-10">
          <div className="flex items-center w-75 md:mt-0 mt-5" >
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className=" bg-gray-200 flex justify-evenly items-center me-5"> <FontAwesomeIcon icon={faLocationDot} />  </div>
            <p>123 Main Street, Apt 4B,
              Anytown, CA 91234</p>
          </div>
          <div className="flex items-center w-75 md:mt-0 mt-5">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className=" bg-gray-200 flex justify-evenly items-center me-5"> <FontAwesomeIcon icon={faPhone} />  </div>
            <p>+91 9876543210</p>
          </div>
          <div className="flex items-center w-75 md:mt-0 mt-5">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className=" bg-gray-200 flex justify-evenly items-center me-5"> <FontAwesomeIcon icon={faEnvelope} />  </div>
            <p>bookstore@gmail.com</p>
          </div>
      </div>
      <div className="md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0">
        <div className="bg-gray-200 p-5">
          <h1 className="text-xl text-center">Send me Message</h1>
          <div className="my-3">
            <input placeholder='Name' type="text" className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" />
          </div>
          <div className="my-3">
            <input placeholder='E Mail Id' type="text" className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" />
          </div>
          <div className="my-3">
            <textarea placeholder='Message' type="text" className="bg-white text-black placeholder-gray-500 w-full p-2 rounded" rows={'5'}/>
          </div>
          <div className="my-3">
            <button className="bg-black w-full text-white p-2">Send <FontAwesomeIcon icon={faPaperPlane} className='ms-2'/></button>
          </div>
        </div>
        <div className='w-full mt-5 md:mt-0'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9841084291766!2d76.3400965736244!3d10.018169672724717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1758774275898!5m2!1sen!2sin" width={'100%'} height={'400px'}  style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact