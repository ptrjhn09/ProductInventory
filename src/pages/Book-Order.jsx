import React, { use, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineX } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import "./Book-Order.scss";

function BookOrder() {

    const location = useLocation();
    const item = location.state;
    const navigate = useNavigate();

    // const [productName, setProductName] = useState(item?.productName || "");
    // const [categoryId, setCategoryId] = useState(item?.categoryId || "");
    // const [price, setPrice] = useState(item?.price || "");
    // const [stock, setStock] = useState(item?.stock || "");
    // const [image, setImage] = useState(item?.image || "");
    // const productId = item?.productDetailId || null;
    // const [quantity, setQuantity] = useState();

    // const [name, setName] = useState("");
    // const [contact, setContant] = useState();
    // const [address, setAddress]= useState("");



    return (
        <div className="parent">
            <div className="order-container">
                <div className="order-header">
                    <h1>Book Order</h1>
                    <HiOutlineX className="view-icon" onClick={() => navigate("/order-booking")} />
                </div>
                <div className="content-order">
                    <div className="image-order">
                        {/* <img src=''/> */}
                          <img className="orderImage"  src ="https://th.bing.com/th/id/OIP.EFaZSllH2jI8Kk1d1ABo2QHaE7?w=277&h=184&c=7&r=0&o=7&pid=1.7&rm=3"/>
                    </div>

                    <div className="order-detailsContainer">
                        <div className="order-details">
                            <div className="order-input">
                                <p>Quantity</p>
                                <input type="number" />
                            </div>

                            <div className="order-input">


                            </div>

                            <div className="order-input">
                                <p>Customer Name</p>
                                <input type="text" />

                            </div>

                            <div className="order-input">

                                <p>Contact Number</p>
                                <input type="tel" />


                            </div>

                            <div className="order-input">
                                <p>Address</p>
                                <input type='text' />

                            </div>

                            <div className="buttons">
                                <button className="order-cancel" >Cancel</button>

                                <button className="order-save">
                                <BsCart3 /> Place Order
                                </button>
                                {/* ternary operator */}
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookOrder
