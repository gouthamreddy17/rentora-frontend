import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Usernavbar from "../userPages/Usernavbar";

function ItemDetails() {
  const { id } = useParams();
  const [item, setitem] = useState(null);
  const [loading, setloading] = useState(true);

  async function get_item() {
    try {
      let api = `http://192.168.1.39:5000/items/${id}`;
      let res = await axios.get(api);
      setitem(res.data);
      setloading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  useEffect(
    function () {
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
                {item.transaction_type=='RENT'?(
                  <>
                   <div><p>Rental duration</p></div>
                <div className="d-flex justify-content-between">
                  <input placeholder="from Date" type="date" className="form-date"/>
                <input placeholder="To date " type="date" className="form-date"/> <button className="btn-list">Request for bid</button>
                </div>
                  </>
                ):(
                  <button className="btn-list">Request for Buy an item</button>
                )
              }
                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
