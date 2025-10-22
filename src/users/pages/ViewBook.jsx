import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { faCamera } from '@fortawesome/free-regular-svg-icons'
import { getSingleBookAPI } from '../../services/allAPI'
import { ToastContainer,toast } from 'react-toastify';
import { useEffect } from 'react'
import SERVERURL from '../../services/serverURL'

const ViewBook = () => {
  const [modalStatus,setModalStatus] = useState(false)
  const {id} = useParams()
  const [book,setBook] = useState({})

  console.log(book);
  
  useEffect(()=>{
    viewBookDetails()
  },[])

  const viewBookDetails = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      try{
        const result = await getSingleBookAPI(id,reqHeader)
        if(result.status==200){
          setBook(result.data)
        }else if(result.response.status==401){
          toast.warning(result.response.data)
        }else{
          console.log(result);          
        }
      }catch(err){
        console.log(err);        
      }
    }
  }


  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className="border p-5 shadow border-gray-200">
        <div className="md:grid grid-cols-4 gap-x-10">
          <div className="col-span-1">
            <img className='w-full'  src={book?.imageUrl} alt="book" />
          </div>
          <div className="col-span-3">
              <div className='flex justify-between mt-5 md:mt-0'>
                <h1 className="text-xl font-bold ">{book?.title}</h1>
                <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className='my-3 text-blue-700'>-  {book?.author}</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : {book?.publisher}</p>
                <p className="font-bold">Language : {book?.language}</p>
                <p className="font-bold">No. of Pages : {book?.noOfPages}</p>
                <p className="font-bold">Seller Mail : {book?.userMail}</p>
                <p className="font-bold">Real Price : ${book?.price}</p>
                <p className="font-bold">ISBN : {book?.isbn}</p>
                <p className="font-bold">Category : {book?.category}</p>
              </div>
              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">{book?.abstract}</p>
              </div>
              <div className="flex justify-end">
                <Link to={'/all-books'} className="bg-blue-900 text-white p-2 rounded"><FontAwesomeIcon icon={faBackward} className='me-3'/>Back</Link>
                <button className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ {book?.discountPrice}</button>

              </div>
          </div>
        </div>
      </div>
    </div>
    {/* modal */}
    {
      modalStatus &&
      <div className='relative z-10 overflow-y-auto' onClick={()=>setModalStatus(false)}>
        <div className="bg-gray-500/75 fixed inset-0 ">
          <div className="flex justify-center items-center min-h-screen scroll-auto">
            <div   className='bg-white rounded-2xl  md:w-250 w-100  '>
              <div className='bg-black text-white flex justify-between items-center p-3 '>
                <h3>Books Images</h3>
                <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
              </div>
              <div className=' relative  p-5'>
                <p className='text-blue-600 '>
                  <FontAwesomeIcon icon={faCamera} className='me-2'/>
                  Camera click of the book in the hand of seller
                </p>
                
                <div className="md:flex flex-wrap my-4  overflow-y-auto ">
                {/* duplicate images */}
                {
                  book?.uploadImg?.length>0?
                    book?.uploadImg?.map(img=>(
                      <img width={'250px'} height={'250px'} className='mx-2 md:mb-0 mb-2'  src={`${SERVERURL}/uploads/${img}`} alt="book images" />
                    ))
                  :
                  <p>User uploaded book images are unavailable</p>
                }
                
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    <Footer/>
     <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
    </>
  )
}

export default ViewBook