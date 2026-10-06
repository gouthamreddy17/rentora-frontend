import { useState } from "react"
import Navbar from "./Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[phone,setphone]=useState('')
    const[city,setcity]=useState('')
    const[password,setpassword]=useState('')
    const[confirm_password,setconfirm_password]=useState('')
    const[message,setmessage]=useState('')
    const[loading,setloading]=useState(false)

    let navigate=useNavigate()
    async function signup(event){
        event.preventDefault()
        setmessage('')
        setloading(true)

        
        let obj={
            name:name,
            email:email,
            phone:phone,
            city:city,
            password:password,
            confirm_password:confirm_password
        }

        try{
            let api="http://192.168.1.35:5000/signup"
            let res=await  axios.post(api,obj)
            console.log(res.data)
            setmessage(res.data.message)
            navigate('/login')


        }
        catch(error){
            console.log(error)
            if (error.response){
                setmessage(error.response.data.message)

            }
            else{
                setmessage("unable to connect")
            }
           
        }
        finally{
            setloading(false)
        }
    }
  return (
    <div>
        <Navbar/>
      <div className="container"  >
        <div className="background-signup">
            <div  className="form-div" >
                <b className="fs-2">Create Your <span className="meron fs-2">Account</span></b>
                <p className="text-secondary">Join Rentora and rent,borrow,bid and share</p>
                {message !=="" && <p className="text-danger">
                    {message}</p>}
                <form onSubmit={signup} className="form">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text"   className="form-control" value={name}  onChange={function(event){setname(event.target.value)}} required />
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email"  className="form-control" value={email} onChange={function(event){setemail(event.target.value)}} required/>
                    <label htmlFor="" className="form-label">Phone</label>
                    <input type="number"  className="form-control" value={phone} onChange={function(event){setphone(event.target.value)}}  required/>
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" name="" id=""  className="form-control" value={city}  onChange={function(event){setcity(event.target.value)}} required />
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password"  className="form-control"  value={password} onChange={function(event){setpassword(event.target.value)}}  required/>
                    <label htmlFor="" className="form-label"> Confirm Password</label>
                    <input type="password"  className="form-control" value={confirm_password} onChange={function(event){setconfirm_password(event.target.value)}} required/>
                    <button type="submit" className="btn-login">{loading ? "creating account" : 'signup'}</button>
                </form>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Signup
