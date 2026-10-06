import Navbar from "./Navbar"

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="hero">
            <h1 className="rent">Rent.Borrow</h1>
            <h1 className="rent2">Bid.Share.</h1>
            <text className="lh-0">Discover useful items from people around you. Rent, borrow, buy,</text>
            <p className="lh-0" >or make an offer at a price that works</p>
            <div className="d-flex gap-5">
                <input type="text"  placeholder="Search for items to rent or purchase"  className="form-control  w-50"/>
                <button className="btn-login">Search</button>
            </div>
             <div className="row mt-5">
            <div className="col-6 col-md-3">
                <div>
                    <div className="cart">
                    <i className="fa-solid fa-cart-plus fa-2xl"></i>
                    <p>Find great items for sale</p>
                    </div>
                    
                </div>
                
            </div>
            <div className="col-6 col-md-3">
                <div>
                    <div className="cart">
                    <i className="fa-regular fa-calendar-days"></i>
                    <p>Rent what you need</p>
                    </div>
                    
                </div>
                
            </div>
            <div className="col-6 col-md-3">
                <div>
                    <div className="cart">
                    <i className="fa-solid fa-user-group fa-2xl"></i>
                    <p>Borrow items for short-term use</p>
                    </div>
                    
                </div>
                
            </div>
            <div className="col-6 col-md-3">
                <div>
                    <div className="cart">
                    <i className="fa-solid fa-right-left fa-2xl"></i>
                    <p>Make an offer and get the right deal</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Home
