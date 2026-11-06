import "./Body.scss";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GrView } from "react-icons/gr";


function Body() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    getProduct();

  }, []);

  const getProduct = async () => {
    try {

      const url = `${import.meta.env.VITE_API_PRODUCT}/Total-Product`
      const response = await fetch(url);
      if (!response.ok) {

        console.log(data);
        alert(data);
      }

      const data = await response.json();
      setProducts(data);
      console.log(data);

    } catch (error) {
      alert("Unable to connect to server");
    }
  }

  const deleteProduct = async (productDetailId) => {
    try {

      const confirmDlt = window.confirm("Are you sure you want to delete this product?");


      if (!confirmDlt) {
        return;
      }

      const url = `${import.meta.env.VITE_API_PRODUCT}/${productDetailId}`;
      const text = "Succesfuly deleted the product";
      const response = await fetch(url, {
        method: "DELETE",
      });


      if (response.ok) {
        console.log(text);
        alert(text);
        getProduct();

      }

    } catch (error) {
      alert("Unable to connect to server");
    }
  }

  const editProduct = (product) => {
    navigate("/add-product", { state: product, });
  }

  const viewProduct = (product) => {
    navigate("/view-product", { state: product, });
  }

  const filteredProduct = products.filter((item) => {
    return (item.productName?.toLowerCase().includes(search.toLowerCase()) ||
      item.productCategory?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="body">

      <div className="stats-container">

        <div className="box">
          <MdOutlineProductionQuantityLimits className="icon blue" />
          <div className="content">
            <h1>Total Products</h1>
            <span>{products.length}</span>
          </div>
        </div>

        <div className="box">
          {/* <FaCheckCircle className="icon green" /> */}
          <IoWarning className="icon red" />
          <div className="content">
            <h1>Soon</h1>
            <span></span>
          </div>
        </div>

        <div className="box">
          <IoWarning className="icon red" />
          <div className="content">
            <h1>Soon</h1>
            <span></span>
          </div>
        </div>

      </div>
      <div className="searchBarContainer">
        <IoSearchSharp className="search-icon" />
        <input type="text" placeholder="Search Product..."
          value={search}
          className="searchBar"
          onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="product-box">
        {filteredProduct.map((product) => (
          
          <div className="product-card" key={product.productDetailId}>
            {/* <img src={product.imageUrl}/> */}
            <img
            
              src={product.imageUrl}
              alt={product.productName}
              className="prodImage"
            />
            {/* <img src ="https://th.bing.com/th/id/OIP.EFaZSllH2jI8Kk1d1ABo2QHaE7?w=277&h=184&c=7&r=0&o=7&pid=1.7&rm=3"/> */}
            <h2>{product.productName}</h2>
            <p className="categorys">{product.productCategory}</p>
            <p className="prices">₱{product.price}</p>
            <p>{product.stock} Stocks Available</p>
            {/* <p>Created:{product.createDate}</p> */}
            <div className="actions">
              <button className="edit-btn" onClick={() => editProduct(product)}>
                <FaEdit />
                Edit
              </button>
              <button className = "view-btn" onClick = {()=> viewProduct(product)}>
                <GrView />
                View</button>

              <button className="delete-btn" onClick={() => deleteProduct(product.productDetailId)}>
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Body;