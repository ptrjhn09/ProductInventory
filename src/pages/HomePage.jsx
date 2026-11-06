import React, { useState } from 'react'
import Header from '../components/Header';
import Body from "../components/Body";
import Sidebar from '../components/Sidebar';
import "./Homepage.scss";


function HomePage() {

    const [products, setProducts] = useState([]);
    return (
        <div className="homepage">

            <Sidebar />

            <div className="content">
                <Header />
                <Body products={products}/>
            </div>

        </div>
    )
}

export default HomePage
