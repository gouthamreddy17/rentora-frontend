import { Navigate} from "react-router-dom"
import Usernavbar from "./Usernavbar"


function Userdashboard() {
    
    let user=JSON.parse(localStorage.getItem('user'))
    
    if (user==null){
       return <Navigate to='/login' />
    }
    
  return (
    <div>
      <Usernavbar/>
      <div className="container">
        <div className="user-hero">
            <div className="lh-0 fs-5"> Welcome Back !</div>
            <b className="meron fs-1 text-uppercase" >{user.name}</b>
            <p className="text-secondary">Manage Your rentals,borrowings,bids and more-all in one place</p>
            <button className="btn-list me-1">+ List a New Item</button> <button className="btn-list2">Browse Items</button>
        </div>
      </div>
    </div>
  )
}

export default Userdashboard
