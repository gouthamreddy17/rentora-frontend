import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Usernavbar from "../userPages/Usernavbar";
import { toast } from "react-toastify";
import Bidloading from "./Bidloading";

function ItemDetails() {
  const { id } = useParams();
  const [item, setitem] = useState(null);
  const [loading, setloading] = useState(true);
  const [bidloading,setbidloading]=useState(false)

  const[amount,setamount]=useState("")
  const[start_date,setstart_date]=useState("")
  const[end_date,setend_date]=useState("")
  const[message,setmessage]=useState("")
  const[responsemsg,setresponsemsg]=useState('')
  async function get_item() {
    try {
      let api = `http://192.168.1.39:5000/items/${id}`;
      let res = await axios.get(api);
      setitem(res.data);
      
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }


  async function requestitem(){

    let user=JSON.parse(localStorage.getItem('user'))
    if (user==null){
      alert("please login")
      
    }
    if (amount==""){
      setresponsemsg("please enter your offer amount")
    }
    if (item.transaction_type=="RENT"){
      if (start_date=='' || end_date==""){
        setresponsemsg("please select rental duration")
      }
    }
    setbidloading(true)
    let obj={
      item_id:item.item_id,
      bidder_id:user.user_id,
      amount:amount,
      start_date: start_date ==""?null :start_date,
      end_date: end_date ==""?null :end_date,
      message:message
    }
    try{
      let api='http://192.168.1.39:5000/request_bid'
      let res= await axios.post(api,obj)
      console.log(res.data)
      setresponsemsg(res.data.message)

    }
    catch(error){
      console.log(error)
      if (error.response){
        setresponsemsg(error.response.data.message)
        toast.error(error.response.data.message)
      }
      else{
          setresponsemsg("Unable to connect server")
      }
    }
    finally{
      setbidloading(false)
    }
  }
  useEffect(function () {
      get_item();
    },
    [id],
  );

  if (loading) {
    return <h1>loading......</h1>;
  }
  if (!item) {
    return <h1>item not found</h1>;
  }
  return (
    <div>
      <Usernavbar />
      <div className="container">
        <div className="row">
          <div className="col-12  col-md-6">
            <div className="item-frame"></div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="item-right">
              <div className="d-flex  justify-content-between">
                <div>
                  <b className="fs-2">{item.title}</b>
                  <p>
                    <i className="fa-solid fa-location-dot fa-sm"></i>
                    {item.location}
                  </p>
                </div>
                <div>
                  {" "}
                  <b className="meron fs-2">{Math.round(item.min_price)}</b>
                </div>
              </div>
              <div className="">
                <p className="tex-secondary lh-0">{item.description}</p>
                <div className="d-flex justify-content-evenly">
                  <span className="bg-danger text-white p-1 rounded-5 ps-2 pe-2">
                    {item.category}
                  </span>
                  <span className="bg-body-secondary p-1 rounded-5 ps-2 pe-2">
                    {item.status}
                  </span>
                  <span className="bg-warning p-1 rounded-5 ps-2 pe-2">
                    {item.item_condition}
                  </span>
                  <span className="bg-success p-1 rounded-5 text-white ps-2 pe-2">
                    Availble for {item.transaction_type}
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="deposit">
                  <p>Security Deposit: </p>
                  <b>
                    {item.transaction_type == "RENT"
                      ? item.security_deposit
                      : "No Deposit"}
                  </b>
                </div>
                <div className="d-flex align-items-center justify-content-center deposit1">
                  <div className="">
                    <i className="fa-solid fa-circle-user fa-2xl"></i>
                  </div>
                  <div>
                    <div>
                      <b>Owner Name</b>
                    </div>
                    <p>{item.owner_name}</p>
                    <button className="btn-list3">Send Message</button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-center-center justify-content-center flex-column">
                <input type="number" className="form-date"  placeholder="Enter Your offer amount" value={amount} onChange={function(event){setamount(event.target.value)}}  />
                {item.transaction_type == 'RENT' ?(
                  <>
                   <div><p>Rental duration</p></div>
                <div className="d-flex justify-content-between">
                  <input placeholder="from Date" type="date" className="form-date" value={start_date} onChange={function(event){setstart_date(event.target.value)}}/>
                
                <input placeholder="To date " type="date" className="form-date" value={end_date} onChange={function(event){setend_date(event.target.value)}}   />
                <textarea  className=""  placeholder="Message to owner " value={message}   onChange={function(event){setmessage(event.target.value)}}> </textarea>
                 <button className="btn-list"  type='submit'  onClick={requestitem}>Request for bid</button>
                </div>
                  </>
                ):(
                  <button className="btn-list" type="submit"  onClick={requestitem}>{bidloading ?(<> <div className="d-flex align-items-center justify-content-center"><Bidloading/> Requesting</div> </>):("Request for Buy an item")}</button>
                )
              }
                
                </div>
                 {responsemsg !='' &&( <p>{responsemsg}</p>)}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
