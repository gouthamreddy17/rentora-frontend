import { Route, Routes } from "react-router-dom"
import Home from "./HomePages/Home"
import './App.css';
import Login from "./HomePages/Login";
import Signup from "./HomePages/Signup";
import Userdashboard from "./userPages/Userdashboard";
import BrowseItems from "./userPages/BrowseItems";
import Notfound from "./HomePages/Notfound";
import ItemDetails from "./components/ItemDetails";


function App() {
  return (
    <div>
     

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>} />
        <Route path="/user"  >
        <Route  path="dashboard" element={<Userdashboard/>} />
        <Route  path="browseitems" element={<BrowseItems/>}/>
        <Route path="browseitems/item/:id" element={<ItemDetails/>}/>
        
        
        
        
        </Route>

        <Route path="*" element={<Notfound/>} />
        
      </Routes>
    </div>
  )
}

export default App
