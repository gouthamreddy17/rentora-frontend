import { Link } from "react-router-dom";

function Navbar() {
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
                <Link className="nav-link link-clo">How it works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-clo">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-3">
            <Link to='/login' >
              <button className="btn-login">Login</button>
            </Link>
            <Link to='/signup' >
              <button className="btn-login">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbar;
