import React from 'react'
import Header from "../components/Header";
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
      {/* landing */}
      <div  className="flex flex-col h-screen justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center text-white">
      <h1 className='text-5xl  font-bold'>Wonderful Gifts</h1>
      <p>Give your family and friends a book</p>
      <div className="mt-9">
        <input type="text" placeholder='Search Books' />
      </div>
      </div>
      {/* arrivel */}
      {/* author */}
      {/* testimony */}
    <Footer/>
    </>
  )
}

export default Home