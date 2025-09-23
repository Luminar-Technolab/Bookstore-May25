import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [listStatus,setListStatus] = useState(false)
  
  return (
    <>
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
            alt="logo"
          />
          <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/* login block*/}
        <div className="md:flex justify-end items-center hidden">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          {/* login link */}
          <Link to={"/login"}>
            <button className="border border-black  rounded px-3 py-2 ms-3 hover:bg-black hover:text-white">
              {" "}
              <FontAwesomeIcon icon={faUser} className="me-1" /> Login{" "}
            </button>
          </Link>
        </div>
      </div>
      <nav className="w-full p-3 bg-black text-white md:flex justify-center items-center">
        {/* menubar & login */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
          {/* login link */}
          <Link to={"/login"}>
            <button  className="border border-black  rounded px-3 py-2 ms-3 hover:bg-black hover:text-white">
              {" "}
              <FontAwesomeIcon icon={faUser} className="me-1" /> Login{" "}
            </button>
          </Link> 
        </div>
        <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/'} >HOME</Link></li>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/all-books'} >BOOKS</Link></li>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/careers'} >CAREERS</Link></li>
          <li className="md:mx-4 mt-3 md:mt-0"><Link to={'/contact'} >CONTACT</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
