import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// guest user

// register api - called by Auth component when register btn clicked, content-type:"application/json"
export const registerAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login api
export const loginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/login`,reqBody)
}
//google-login
export const googleLoginAPI = async (reqBody)=>{
  return await  commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}
// home page books api - call by home in useeefct
export const getHomeBooksAPI = async ()=>{
  return await  commonAPI("GET",`${SERVERURL}/home-books`)
}
// all career api

// --------- authorised user api - user -----------------------------------------------//

// upload/add book - called by profile component
export const addBookAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}
// view all books - called allbooks when page load
export const getAllBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-books`,{},reqHeader)
}
// view single book

// profile update
// purchased  book
// approve books

// authorised user api - admin

// add career 
// update admin
// list books
// list users
// apporve books

