import React, { useState, useEffect } from 'react'
import "./Order-Body.scss";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function OrderBody() {

  const [product, setProduct] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    console.log("component load");
    getProduct();
  }, []);

 
    const btnOrder = (selectedProduct) => {
    navigate("/book-order", {state: selectedProduct, }

    );

  };


  const getProduct = async () => {
    try {
      const urlProduct = `${import.meta.env.VITE_API_PRODUCT}/Total-Product`
      const response = await fetch(urlProduct);

      const data = await response.json();
      if (!response.ok) {
        console.log(data);
        alert(data);
      }
      setProduct(data);
      console.log(product);

    } catch (error) {
      alert("Unable to connect to server");
    }


  }
  return (
    <div className="orderBooking-body">
      <div className="product-box">
        {product.map((product) => (
          <div className="product-card" key={product.productDetailId}>
            <img src={product.imageUrl} alt={product.productName} className="prodImage" />
            <h2>{product.productName}</h2>
            <p className="categorys">{product.productCategory}</p>
            <p className="prices">₱{product.price}</p>
            <p>{product.stock} Stocks Available</p>
            <div className="actions-order">
              <button onClick={()=> btnOrder(product)}><span><BsCart3 /> Select Product</span></button>
            </div>




          </div>
        ))}
      </div>



    </div>
  )
}

export default OrderBody
