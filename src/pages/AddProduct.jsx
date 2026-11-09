import React, { useState } from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import "./AddProduct.scss";
import { useLocation, useNavigate } from 'react-router-dom';

function AddProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const prod = location.state;

  const [productName, setProductName] = useState(prod?.productName || "");
  const [categoryId, setCategoryId] = useState(prod?.categoryId || "");
  const [price, setPrice] = useState(prod?.price || "");
  const [stock, setStock] = useState(prod?.stock || "");
  const [image, setImage] = useState(prod?.image || "");
  const [description, setDescription] = useState(prod?.description || "");
  const [loading, setLoading] = useState(false);
  const productId = prod?.productDetailId || null;



  const saveButton = async () => {

    try {
      console.log("button clicked");
      setLoading(true);

      const url = `${import.meta.env.VITE_API_PRODUCT}/Add-Product`;

      const formData = new FormData();
      formData.append("ProductName", productName);

      formData.append("CategoryId", categoryId);

      formData.append("Price", price);

      formData.append("Stock", stock);

      formData.append("Description", description);

      formData.append("Image", image);


      const response = await fetch(url, {
        method: "POST",
        body: formData,
      }
      );

      const message = await response.text();

      if (!response.ok) {
        alert(message);
        return;
      }
      alert(message);
      navigate("/HomePage")

    } catch (error) {
      alert("Unable to connect to server");

    }
    finally {
      setLoading(false);
    }
  };

  const deleteBtn = () => {

    console.log("button clicked")
    setProductName(""),
      setCategoryId(""),
      setPrice(""),
      setStock(""),
      setImage(""),
      setDescription("")
  };

  const updateProduct = async () => {
    try {

      setLoading(true);
      console.log("button clicked");
      const url = `${import.meta.env.VITE_API_PRODUCT}/${productId}`;
      
      const formData = new FormData();
      formData.set("ProductName", productName);

      formData.set("CategoryId", categoryId);

      formData.set("Price", price);

      formData.set("Stock", stock);

      formData.set("Description", description);

      if (image) {
        formData.set("Image", image);
      }





      const response = await fetch(url, {
        method: "PUT",
        body: formData,
      });


      if (response.ok) {
        console.log("Product updated");
        alert("Product updated");
        return navigate("/HomePage")
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Unable to connect to server");
    }
    finally {
      setLoading(false);
    }
  }

  const validateForm = () => {

    if (!productName.trim()) {
      alert("Product Name is required");
      return false;
    }

    if (!categoryId) {
      alert("Please select a category");
      return false;
    }

    if (!price || Number(price) <= 0) {
      alert("Price must be greater than 0");
      return false;
    }

    if (!stock || Number(stock) < 0) {
      alert("Stock cannot be negative");
      return false;
    }

    return true;
  };


  const handleSubmit = () => {

    if (!validateForm()) {
      return;
    }
    if (productId) {
      updateProduct();
    } else {
      saveButton();
    }
  }



  return (

    <div className="form">
      <MdOutlineKeyboardBackspace className="icon" onClick={() => navigate("/HomePage")} />
      <div className="content">
        <div className="header-form">
          <h1>{productId ? "Update Product" : "Add Product"}</h1>
          <span>Fill in the product details below to add a new product</span>
        </div>


        <p>Product Name</p>
        <input type="text" className="product" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name (e.g Sunglasses)" />
        <p>Category</p>
        <select value={categoryId} onChange={(e) => {
          setCategoryId(e.target.value)
        }}>
          <option>Select Category</option>
          <option value="1">Gadgets</option>
          <option value="2">Clothes</option>
          <option value="3">Accesorries</option>
        </select>

        <p>Price</p>
        <input type="number" className="Price" value={price} placeholder='0.00' onChange={(e) => setPrice(e.target.value)} />

        <p>Stock</p>
        <input type="number" className="Stock" placeholder="Enter stock quantity" value={stock} onChange={(e) => setStock(e.target.value)} />

        <p>Insert Image Link</p>
        <input className="file-upload" type="File" accept="image/*" placeholder="Upload Image" onChange={(e) => setImage(e.target.files[0])} />


        <p>Details</p>
        <textarea placeholder="Enter product description" className="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <div className="buttons">
          <button className="cancel-button" onClick={deleteBtn}>Cancel</button>
          
          <button className="save-button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Processing..." : productId ? "Update Product" : "Add Product"}
          </button>
          {/* ternary operator */}
        </div>





      </div>
    </div>
  )
}

export default AddProduct
