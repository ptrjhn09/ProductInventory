import React from 'react'
import ListOrderHeader from '../components/ListOrder-Header'
import ListOrderBody from '../components/ListOrder-Body'
import Sidebar from '../components/Sidebar';
import "./ListOrder.scss";

function ListOrders() {
  return (
      <div className="listOrderPage">

            <Sidebar />

            <div className="listOrderContent">
                <ListOrderHeader />
                <ListOrderBody/>
               
            </div>

        </div>
  )
}

export default ListOrders
