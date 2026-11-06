
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

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

     <p>
      <MdOutlineProductionQuantityLimits/>
      <span>Products</span>
     </p>

     <button onClick={logout}><CiLogout/><span>Log out</span></button>
    </div>
  )
}

export default Sidebar
