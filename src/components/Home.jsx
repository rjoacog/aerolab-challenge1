import React from "react";

import header from "../assets/header.png"

import s from "./Home.module.scss"
import Products from "./Products";


const Home = () => {

    return(
        <div className={s.container}>
            <img src={header}  />
            <h1>Electronics</h1>
            <Products />
        </div>

    )
}

export default Home;