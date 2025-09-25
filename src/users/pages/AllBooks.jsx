import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllBooks = () => {
  const [listStatus,setListStatus] = useState(false)
  return (
    <>
      <Header />
      <>
        <div className="flex justify-center items-center flex-col my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
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
              <div className="shadow  rounded p-3 mx-4">
                <img
                  width={"100%"}
                  height={"300px"}
                  src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg"
                  alt="book"
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                    <Link to={'/books/id/view'} className="bg-blue-800 p-2 text-white">View Book</Link>
              </div>
              </div>
              <div className="shadow  rounded p-3 mx-4">
                  <img
                    width={"100%"}
                    height={"300px"}
                    src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg"
                    alt="book"
                  />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <Link to={'/books/id/view'} className="bg-blue-800 p-2 text-white">View Book</Link>
                  </div>
              </div>
              <div className="shadow  rounded p-3 mx-4">
                <img
                  width={"100%"}
                  height={"300px"}
                  src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg"
                  alt="book"
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                  <Link to={'/books/id/view'} className="bg-blue-800 p-2 text-white">View Book</Link>
                </div>
              </div>
              <div className="shadow  rounded p-3 mx-4">
                <img
                  width={"100%"}
                  height={"300px"}
                  src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg"
                  alt="book"
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                  <Link to={'/books/id/view'} className="bg-blue-800 p-2 text-white">View Book</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
};

export default AllBooks;
