import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg"
import coin from "../assets/icons/coin.svg"
import s from "./NavBar.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { getUser, postCoins } from "../actions/actions";
import { Link } from "react-router-dom";

const NavBar = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUser());
    }, [])

  
    function handleClick(e){
        e.preventDefault(e)
        dispatch(postCoins())
        dispatch(getUser())
    }

   


    return (

        <nav className={s.container}>
            <div className={s.logo}>
                <img src={logo} width={"35px"} alt="" />
            </div>
            <div className={s.coin}>
                <a href="/history">
                <h3>{users.name} </h3>
                </a>
                <div className={s.coin2}>
                    <h5> {users.points} </h5>
                    <img src={coin} width={"18px"} alt=""/>
                    <button onClick={handleClick}>ADD COINS</button>
                </div>
            </div>

        </nav>

    )
}

export default NavBar;