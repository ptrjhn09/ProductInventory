import React from 'react'
import "./ViewProduct.scss";
import { HiOutlineX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ViewProduct() {

  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  return (
    <div className="view-Container">


      <div className="view-box">

        <div className="view-header">
          <h1>View Product Details</h1>
          <HiOutlineX className="view-icon" onClick={() => navigate("/HomePage")} />
        </div>
        <div className="view-content">

          <div className="viewImageContainer">
            <img className="viewImage" src={product.imageUrl} alt={product.productName} />
          </div>
          <div className="view-productDetails">

            <div className="detail-row">
              <h1><span className="label">Product Name: </span>
              <span className="value">{product.productName}</span></h1>
            </div>


            <div className="detail-row">

              <p><span className="label">Category: </span>
              <span className="value">{product.productCategory}</span></p>

            </div>


            <div className="detail-row"><p><span className="label">Price: </span> 
            <span className="value">₱{product.price}</span></p>
            
            </div>


            
            <div className="detail-row">  <p><span className="label">Stock: </span>
            <span className="value">{product.stock}</span></p>
            
            </div>


            <div className="detail-row"><p><span className="label">Description: </span>
            <span className="value">{product.description}</span></p>
            
            </div>






          </div>
        </div>
      </div>
    </div>




  )
}

export default ViewProduct
