import { Navigate, useNavigate } from "react-router-dom"
import Usernavbar from "./Usernavbar"
import {  useEffect, useState } from "react"
import axios from "axios"
import Loading from "../HomePages/Loading"

function BrowseItems() {
  let navigate=useNavigate()
  let user=JSON.parse(localStorage.getItem('user'))
    
    
  const[items,setitems]=useState([])
  const[category,setcategory]=useState('All')
  const[loading,setloading]=useState(true)
  
  async function getitems(){
    try{
      let api="http://192.168.1.39:5000/items"
    let res=await axios.get(api)
    setitems(res.data)
    setloading(false)
    }
    catch(error){
      console.log(error)
    }

  }
  useEffect(function(){
    getitems();
  },[])
  if (user==null){
       return <Navigate to='/login' />
    }
  function selectcategory(category){
    setcategory(category)

  }
  const filitems=
    category==="All"?items : 
      items.filter(function(item){
        return item.category===category
      })
    
  const arr=filitems.map(function(item){
    return(
      <div key={item.item_id} className="card1">
        <div className="image-item"></div>
        <div className="d-flex flex-column">
          <b>{item.title}</b>
          <p><i className="fa-solid fa-location-dot fa-sm"></i>{item.location}</p>
          <h5 className="meron fw-bold">{Math.round(item.min_price)}/Day</h5>
          <button className="btn-list2" onClick={function(){
            navigate(`/user/browseitems/item/${item.item_id}`)
          }}>View Details</button>
          </div>
      </div>
    )
  })
  return (
    <div>
      
      <Usernavbar/>
      <div className="container">
        <div className="user-hero pb-5">
            <span className="lh-0 fs-1"> Browse </span>
            <b className="meron fs-1 " >Items</b>
            <p className="text-secondary">Find items to rent,borrow,or buy from people around you</p>
            <div className="d-flex gap-5">
                <input type="text"  placeholder="Search for items to rent or purchase"  className="form-control  w-50"/>
                <button className="btn-login">Search</button>
            </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-2 col-sm-3">
            <div className="cat-section"> 
              <p>Categories</p>
              <button onClick={function(){selectcategory("All")}}  className="btn-list2">All</button>
              <button onClick={function(){selectcategory("Electronics")}} className="btn-list2">Electronics</button>
              <button onClick={function(){selectcategory("Furniture")}} className="btn-list2">Furniture</button>
              <button onClick={function(){selectcategory("Books")}} className="btn-list2">Books</button>
              <button onClick={function(){selectcategory("Sports")}} className="btn-list2">Sports</button>

            </div>
          </div>
          <div className="col-12 col-md-10 col-sm-10" >
            <div className="item-cat">
              <h3>{category ==="All" ? "All Items": category}</h3>
            </div>
            <div className="items-show">
              {loading ?<Loading/>:arr}
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BrowseItems
