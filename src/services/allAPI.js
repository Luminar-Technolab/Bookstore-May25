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
// all job api
export const getAllJobAPI = async (searchKey)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-jobs?search=${searchKey}`)
}
// --------- authorised user api - user -----------------------------------------------//

// upload/add book - called by profile component
export const addBookAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}
// view all books - called allbooks when page load
export const getAllBooksAPI = async (search,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-books?search=${search}`,{},reqHeader)
}
// view single book - called by viewBook component when it load in browser
export const getSingleBookAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}
// ALL USER UPLOAD books called by profile
export const getAllUserUploadBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/user-books`,{},reqHeader)
}
// all user purchased  book called by profile
export const getAllUserPurchasedBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/user-bought-books`,{},reqHeader)
}
// remove user upload books called by profile
export const removeUserUploadBookAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("DELETE",`${SERVERURL}/user-books/${bookId}/remove`,{},reqHeader)
}
// user profile update
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}
// add application - called by career user component
export const addApplicationAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/application/add`,reqBody,reqHeader)
}
//make-payment - called viewBook when buy btn clicked
export const makePaymentAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/make-payment`,reqBody,reqHeader)
}


// authorised user api - admin----------------------------------------------------

// add job 
export const addJobAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("POST",`${SERVERURL}/add-job`,reqBody,reqHeader)
}
// delete job 
export const removeJobAPI = async (jobId,reqHeader)=>{
  return await  commonAPI("DELETE",`${SERVERURL}/job/${jobId}/remove`,{},reqHeader)
}
// update admin - called from admin setting component when update btn clicked
export const updateAdminProfileAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}
// list books
export const listAllBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/admin-all-books`,{},reqHeader)
}
// list users - called by admin collection compoennt 
export const getAllUsersAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-user`,{},reqHeader)
}
// apporve books - called by admin collection compoennt when approve btn click
export const updateBookStatusAPI = async (reqBody,reqHeader)=>{
  return await  commonAPI("PUT",`${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
}
// list application - called by admin career compoennt 
export const getAllApplicationAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-applications`,{},reqHeader)
}
