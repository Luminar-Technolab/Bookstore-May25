import React from 'react'
import Header from "../components/Header";
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function PaymentError() {
  return (
    <>
    <Header/>
        <div className="container my-10 min-h-100 flex justify-center items-center">
            <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
                    <div>
                        <h1 className="md:text-4xl text-red-600">Sorry! Your Payment is unsuccessfull...</h1>
                        <p className="text-2xl my-10">We Apologize for the Inconvience Caused and Appreciate Your Visit to BookStore...</p>
                    <Link to={'/all-books'} className='bg-red-800 px-4 py-3 text-white '><FontAwesomeIcon icon={faBackward}/>Explore More Books</Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className='img-fluid' src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="failed" />
                    </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default PaymentError