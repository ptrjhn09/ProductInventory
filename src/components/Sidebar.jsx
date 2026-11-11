
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { FaBorderAll } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


import "./Sidebar.scss";

function Sidebar() {
const navigate = useNavigate();

    const logout = () => {

        navigate("/");
        localStorage.removeItem("token");
        console.log("logout Succesfully");
    };

  return (
    <div className="sidebar">

     <p>
      <MdDashboard/>
      <span>Dashboard</span>
     </p>

     <p onClick={() => navigate("/HomePage")}>
      <MdOutlineProductionQuantityLimits/>
      <span>Products</span>
     </p>

     <p onClick={() => navigate("/order-booking")}>
    <BsCart4 />

      <span>Order Booking</span>
     </p>

     <p onClick={() =>navigate("/list-order")}>
      <FaBorderAll />
      <span>My Order</span>
     </p>

     <p>
      <FaLocationDot />
      <span>Track Order</span>
     </p>

     <button onClick={logout}><CiLogout/><span>Log out</span></button>
    </div>
  )
}

export default Sidebar
