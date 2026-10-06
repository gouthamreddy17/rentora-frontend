
import { Link, useNavigate } from "react-router-dom"


function Usernavbar() {
    let navigate=useNavigate()
    let user=JSON.parse(localStorage.getItem('user'))
    function logout(){
      localStorage.removeItem('user')
      navigate('/login')
    }
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbackground ">
        <div className="container-fluid ">
          <Link>
            <div>
              <h2 className="appname">RENTORA</h2>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  d-flex justify-content-evenly"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link link-clo"  to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo" to='/user/browseitems'  >Browse Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo">My Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo">My Bookings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo">Bids</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo">Messages</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-3 align-items-center justify-content-center">
              <i className="fa-solid fa-circle-user fa-2xl"></i>
              <span></span>
                
          </div>
          <div className="dropdown">
  <button className="btn   dropdown-toggle me-5 me-5 pe-5 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {user['name']}
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button">profile</button></li>
    <li><button className="dropdown-item" type="button">Settings</button></li>
    <li><button className="dropdown-item" type="button" onClick={logout}>Logout</button></li>
  </ul>
</div>  
        </div>
      </nav>
    </div>
  )
}

export default Usernavbar
