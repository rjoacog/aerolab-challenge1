import React, { useEffect } from "react";
import logo from "../assets/logo.svg"
import coin from "../assets/icons/coin.svg"
import s from "./NavBar.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { getUser} from "../actions/actions";
import axios from "axios";
const NavBar = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUser());
    }, [])

  
    async function handleClick(e){
        e.preventDefault(e)
        try {
                await axios.post("https://coding-challenge-api.aerolab.co/user/points", { amount: 1000 }, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
                    }
                })
        } catch (error) {
            console.log(error)
        }
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
                    <button onClick={handleClick} > +COINS</button>
                </div>
            </div>

        </nav>

    )
}

export default NavBar;