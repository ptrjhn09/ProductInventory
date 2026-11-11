import React, { use, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineX } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import "./Book-Order.scss";

function BookOrder() {

    const location = useLocation();
    const item = location.state;
    const navigate = useNavigate();


    const productId = item?.productDetailId || null;
    const [quantity, setQuantity] = useState(0);

    const [name, setName] = useState("");
    const [contact, setContact] = useState();
    const [address, setAddress] = useState("");

    const order = {
        productDetailId: item.productDetailId,
        CustomerName: name,
        quantity,
        contact,
        address
    };

    const addOrder = async () => {
         if (!quantity || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    if (!name.trim()) {
        alert("Customer Name is required.");
        return;
    }

    if (!contact.trim()) {
        alert("Contact Number is required.");
        return;
    }

    if (!address.trim()) {
        alert("Address is required.");
        return;
    }
        try {

            console.log("Button Clicked");
            const url = `${import.meta.env.VITE_API_ORDER}/Add-Order`
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });
            console.log("Button Clicked again");
            const data = await result.text();

            if (!result.ok) {
                alert(data);
                console.log(data);
                return;
            }

            alert(data);
            console.log(data);
            navigate("/list-order");
        } catch {
            alert("Unable to connect so server")
        }
    }

    const canelBtn = ()=> {
        setQuantity(""),
        setName("")
        setContact(""),
        setAddress("")

    };

    const calculateTotal = () => {
        return item.price * quantity;
    };

    return (
        <div className="parent">
            <div className="order-container">
                <div className="order-header">
                    <FaCartShopping className='iconBook' />
                    <div className="bookTitle">

                        <h1>Book Order</h1>
                        <span>Fill in the details below to place your order</span>
                    </div>
                    <div className="x">
                        <HiOutlineX className="view-icon" onClick={() => navigate("/order-booking")} />

                    </div>

                </div>
                <div className="content-order">
                    <div className="image-order">

                        <img className="orderImage" src={item.imageUrl} alt={item.porductName} />
                        <div className="imageDetails">
                            
                            <h3>{item.productName}</h3>
                            <span>{item.description}</span> <br/>
                            <p>{item.price.toLocaleString()}</p>
                          <div className="totalOrder">  <h5>Total: ₱{calculateTotal().toLocaleString()}</h5></div>
                        </div>

                    </div>

                    <div className="order-detailsContainer">


                        <div className="personDetails">
                            <MdOutlinePerson className="personIcon" />
                            <div className="personInfo">
                                <h1> Customer Details</h1>

                                <span>Please provide your information</span>
                            </div>



                        </div>
                        <div className="order-details">
                            <div className="order-input">
                                <p>Quantity</p>
                                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            </div>

                            <div className="order-input">


                            </div>

                            <div className="order-input">
                                <p>Customer Name</p>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            </div>

                            <div className="order-input">

                                <p>Contact Number</p>
                                <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} />


                            </div>

                            <div className="order-input">
                                <p>Address</p>
                                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />

                            </div>

                            <div className="buttons">
                                <button className="order-cancel" onClick={canelBtn} >Cancel</button>

                                <button className="order-save" onClick={addOrder}>
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
