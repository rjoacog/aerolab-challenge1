import React, { useEffect } from "react";
import logo from "../assets/logo.svg"
import coin from "../assets/icons/coin.svg"
import s from "./NavBar.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/actions";

const NavBar = () => {
const dipsatch = useDispatch();
const users = useSelector((state) => state.users)
console.log(users)

useEffect(()=>{
    dipsatch(getUser())
},[])

    return (

        <nav className={s.container}>
            <div className={s.logo}>
                <img src={logo}  width={"35px"} />
            </div>
            <div className={s.coin}>
                <h3>{users.name} </h3>
                <div className={s.coin2}>
                <h5> {users.points} </h5>
                <img src={coin} width={"18px"} />
                </div>
            </div>

        </nav>

    )
}

export default NavBar;