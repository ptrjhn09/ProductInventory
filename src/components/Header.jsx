import React from 'react'
import "../components/Header.scss";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container">
        <h5>Product Inventory</h5>
        <button onClick={()=>navigate("/add-product")}><CiCirclePlus />Add Products</button>
      </div>

    </div>
  )
}

export default Header
