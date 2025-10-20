import React,{useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllBooksAPI } from "../../services/allAPI";
import { ToastContainer,toast } from 'react-toastify';

const AllBooks = () => {

  const [listStatus,setListStatus] = useState(false)
  const [token,setToken] = useState("")
  const [books,setBooks] = useState([])

  console.log(books);
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  },[])

  const getAllBooks = async (userToken)=>{
    const reqHeader = {
      "Authorization" :`Bearer ${userToken}`
    }
    try{
      const result = await getAllBooksAPI(reqHeader)
      if(result.status==200){
        setBooks(result.data)
      }else{
        console.log(result);
        toast.warning(result.response.data)
      }
    }catch(err){
      console.log(err);      
    }
  }

  return (
    <>
      <Header />
      {
        token?
        <>
          <div className="flex justify-center items-center flex-col my-5">
            <h1 className="text-3xl font-bold my-5">Collections</h1>
            <div className="flex my-5">
              <input
                type="text"
                className="p-2  border border-gray-200 text-black w-100 placeholder-gray-600"
                placeholder="Search By Title"
              />
              <button className="bg-blue-900 text-white p-2">Search</button>
            </div>
          </div>
          {/* grid */}
          <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
            {/* filter */}
            <div className="col-span-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Filter</h1>
                <button onClick={()=>setListStatus(!listStatus)} className="text-2xl md:hidden"><FontAwesomeIcon icon={faBars} /></button>
              </div>
              <div className={listStatus?'block':'md:block hidden'}>
                <div className="mt-3">
                  <input type="radio" id="Literary" name="filter" />
                  <label className="ms-3" htmlFor="Literary">
                    Literary Fiction
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Philosophy" name="filter" />
                  <label className="ms-3" htmlFor="Philosophy">
                    Philosophy
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Romance" name="filter" />
                  <label className="ms-3" htmlFor="Romance">
                    Romance
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Mystery" name="filter" />
                  <label className="ms-3" htmlFor="Mystery">
                    Mystery/Thriller
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Politics" name="filter" />
                  <label className="ms-3" htmlFor="Politics">
                    Politics
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Self" name="filter" />
                  <label className="ms-3" htmlFor="Self">
                    Self-Help
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Biography" name="filter" />
                  <label className="ms-3" htmlFor="Biography">
                    Auto/Biography
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="Horror" name="filter" />
                  <label className="ms-3" htmlFor="Horror">
                    Horror
                  </label>
                </div>
                <div className="mt-3">
                  <input type="radio" id="noFilter" name="filter" />
                  <label className="ms-3" htmlFor="noFilter">
                    No-Filter
                  </label>
                </div>
              </div>
            </div>
            {/* books */}
            <div className="col-span-3">
              <div className="md:grid grid-cols-4 mt-5 md:mt-0">
                {
                  books.length>0?
                    books?.map(book=>(
                      <div key={book?._id} className="shadow  rounded p-3 mx-4 my-3">
                        <img
                          width={"100%"}
                          height={"300px"}
                          src={book?.imageUrl}
                          alt="book"
                        />
                        <div className="flex flex-col justify-center items-center mt-4">
                          <p className="text-blue-700 font-bold text-lg">{book?.author.slice(0,20)}</p>
                          <p>{book?.title.slice(0,20)}</p>
                            <Link to={`/books/${book?._id}/view`} className="bg-blue-800 p-2 text-white">View Book</Link>
                        </div>
                      </div>
                    ))
                  :
                  <p>No Books</p>
                }
              </div>
            </div>
          </div>
        </>
      :
      <div className="my-10 flex justify-center items-center flex-col ">
          <img  className="w-75" src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="lock" />
          <p className="font-semibold text-xl mt-6">Please <Link to={'/login'} className="text-blue-700 font-bold underline">Login</Link> To Explore More....</p>
      </div>  
      }

      <Footer />
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
  );
};

export default AllBooks;
