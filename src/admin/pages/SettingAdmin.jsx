import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from "../components/AdminSideBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import SERVERURL from '../../services/serverURL'
import { ToastContainer,toast } from 'react-toastify';
import { updateAdminProfileAPI } from '../../services/allAPI'
import { adminUpdateContext } from '../../contextAPI/ContextShare'

const SettingAdmin = () => {
  const {adminEditResponse,setAdminEditResponse} = useContext(adminUpdateContext)
  const [adminDetails,setAdminDetails] = useState({
    username:"",password:"",cPassword:"",profile:""
  })
  const [existingProfilePic,setExisitngProfilePic] = useState("")
  const [preview,setPreview] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({...adminDetails,username:user.username,password:user.password,cPassword:user.password})
      setExisitngProfilePic(user.profile)
    }
  },[])

  const handleUploadProfilePic = (e)=>{
    setAdminDetails({...adminDetails,profile:e.target.files[0]})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleReset = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    setAdminDetails({profile:"",username:user.username,password:user.password,cPassword:user.password})
    setExisitngProfilePic(user.profile)
    setPreview("")
  }

  const handleUpdateAdminProfile = async ()=>{
    const {username,password,profile,cPassword} = adminDetails
    if(!username || !password || !cPassword  ){
          toast.info("Please fill the form completely!!!")
    }else if(password!=cPassword){
      toast.warning("Password & confirm password must be be same")
      handleReset()
    }else{
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("password",password)
      reqBody.append("bio","")
      preview?reqBody.append("profile",profile):reqBody.append("profile",existingProfilePic)
      try{
        const result  = await updateAdminProfileAPI(reqBody,reqHeader)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data))
          toast.success("Profle updation completed successfully!!!")
          setAdminEditResponse(result.data)
          handleReset()         
        }else{
          console.log(result);
          handleReset()          
        }
      }catch(err){
        console.log(err);        
        toast.error('Something went wrong!!!!')
      }
    }
    
  }
  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5 gap-2 ">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 ">
        <h1 className="text-3xl font-bold text-center my-5">Settings</h1>
        <div className="md:grid grid-cols-2 gap-5 mx-5 items-center ">
          <div>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi ipsam animi molestias ducimus quo minus sunt. Exercitationem saepe consequatur doloremque sequi possimus asperiores quo, aut impedit repellendus velit? Nobis!
            Magnam architecto enim libero exercitationem ad, expedita aut numquam velit ex at ipsum eos quo sint officiis ducimus dicta fugit, nemo maxime alias aliquid cum quaerat fugiat? Odio, qui nihil.
            Debitis nisi non exercitationem molestiae .</p>
             <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi ipsam animi molestias ducimus quo minus sunt. Exercitationem saepe consequatur doloremque sequi possimus asperiores quo, aut impedit repellendus velit? Nobis!
            Magnam architecto enim libero exercitationem ad, expedita aut numquam velit ex at ipsum eos quo sint officiis ducimus dicta fugit, nemo maxime alias aliquid cum quaerat fugiat? Odio, qui nihil.
            Debitis nisi non exercitationem molestiae .</p>
          </div>
          <div className="rounded bg-blue-100 p-10 flex justify-center items-center flex-col mt-10 md:mt-0">
            <input onChange={e=>handleUploadProfilePic(e)} type="file" name="" id="adminPic"  className='hidden'/>
            <label htmlFor="adminPic" className='mb-3'>
              {
                existingProfilePic?
                 <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={preview?preview:`${SERVERURL}/uploads/${existingProfilePic}`} alt="admin profile" />
                 :
                  <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={preview?preview:"https://img.freepik.com/premium-vector/man-character_665280-46970.jpg"} alt="admin profile" />
              }
              <FontAwesomeIcon icon={faPen} style={{marginLeft:'140px',marginTop:'-100px'}} className="bg-yellow-400 p-2 text-white rounded"/>
            </label>
            <div className="mb-3 w-full">
              <input value={adminDetails.username} onChange={e=>setAdminDetails({...adminDetails,username:e.target.value})}  type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Username"  />
            </div>
            <div className="mb-3 w-full">
              <input value={adminDetails.password} onChange={e=>setAdminDetails({...adminDetails,password:e.target.value})}  type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Password"  />
            </div>
            <div className="mb-3 w-full">
              <input value={adminDetails.cPassword} onChange={e=>setAdminDetails({...adminDetails,cPassword:e.target.value})}  type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Confirm Password"  />
            </div>
            <div className="my-3 w-full flex justify-evenly">
              <button onClick={handleReset} className="bg-orange-600 text-white px-4 py-2 rounded">RESET</button>
              <button onClick={handleUpdateAdminProfile} className="bg-green-900 text-white px-4 py-2 rounded">UPDATE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default SettingAdmin