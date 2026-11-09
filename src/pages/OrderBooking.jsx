import React from 'react'
import Sidebar from '../components/Sidebar'
import HeaderBooking from '../components/Order-Header';
import OrderBody from '../components/Order-Body';
import "./OrderBooking.scss"

function OrderBooking() {
  return (
    <div className="BookingPage">

            <Sidebar />

            <div className="content">
                <HeaderBooking />
                <OrderBody/>
               
            </div>

        </div>
  )
}

export default OrderBooking
