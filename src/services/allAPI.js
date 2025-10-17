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
// home page books api
// all career api

// --------- authorised user api - user -----------------------------------------------//

// upload/add book - called by profile component
export const addBookAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}
// view all books
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

