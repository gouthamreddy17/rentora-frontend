import { useState } from "react"
import Navbar from "./Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"
import { toast } from "react-toastify"


function Login() {
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[message,setmessage]=useState('')
  const[loading,setloading]=useState(false)

  let navigate=useNavigate()
  async function login(event){
    event.preventDefault()
    setmessage('')
    setloading(true)

    let obj={
      email:email,
      password:password
    }
    try{
      let api='http://192.168.1.39:5000/login'
      let res=await axios.post(api,obj)
      console.log(res.data)
      setmessage(res.data.message)
      toast.success("Login sucessfull")
      localStorage.setItem('user',JSON.stringify(res.data.user))
      let user=JSON.parse(localStorage.getItem('user'))
      console.log(user)

      if (user['role']=="USER"){
        navigate('/user/dashboard')

      }
    }
    catch(error){
      console.log(error)
      if (error.response){
        setmessage(error.response.data.message)
      }
      else{
        setmessage("Unable to connect to Server")
      }
    }
    finally{
      setloading(false)
    }
  }
  if (loading){
    return <Loading/>
  }
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="background-signup">
            <div  className="form-div">
                <b className="fs-2">Login to Your <span className="meron fs-2">Account</span></b>
                <p className="text-secondary">Login Rentora to rent,borrow,bid and share</p>
                {message!="" && <p  className="text-danger">{message}</p>}
                <form onSubmit={login}>
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" placeholder="Enter your Email" className="form-control"  onChange={function(event){setemail(event.target.value)}} required  />
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" placeholder="Enter your password" className="form-control"  onChange={function(event){setpassword(event.target.value)}}  />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
