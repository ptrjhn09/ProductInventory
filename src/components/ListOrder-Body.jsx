import React, { useEffect, useState } from 'react'
import "./ListOrder-Body.scss";

function ListOrderBody() {

  const [listOrder, setListOrder] = useState([]);


  useEffect(() => {
    getOrderList();
  }, [])
  const getOrderList = async () => {


    try {
      const url = `${import.meta.env.VITE_API_ORDER}/Get-AllOrders`
      const response = await fetch(url);

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        alert(data);
        return;
      }
     
      setListOrder(data)
      console.log(data);
    } catch (error) {
      alert("Unable to connect to server");
    }

  }

  const cancelOrder = async (id) => {

    try {
      const confirmDltOrder = window.confirm("Are you sure you want to delete your order?");

      if(!confirmDltOrder){
        return;
      }

      const url = `${import.meta.env.VITE_API_ORDER}/${id}`;
       const text = "Succesfuly deleted your order transaction";
      const response = await fetch(url, {
        method: "DELETE",
      });

       console.log("button clicked");
      if(response.ok){
        console.log(text);
        alert(text);
        getOrderList();
      }

    } catch (error) {
      alert("Unable to connect to the server");


    }
  }
  return (
    <div className="listBody">
      <table>
        <tbody>
          {listOrder.map((items) => (

            <tr key={items.orderDetailId}>
              <td><img className="listImg" src={items.imageUrl} alt={items.productName} width="150" /></td>
              <td>{items.productName}</td>
              <td>{items.totalAmount}</td>
              <td>{items.quantity}</td>
              <td>
                <div className="actionBtn">
                  <button className="view-btn">Edit Order</button>
                  <button className="cancel-btn" onClick={() =>cancelOrder(items.orderDetailId)}>Cancel Order</button>
                </div>

              </td>
            </tr>
          ))}



        </tbody>
      </table>
    </div>
  )
}

export default ListOrderBody
