import React from "react";
import { useDispatch} from "react-redux";
import { getUser} from "../actions/actions";
import coin from "../assets/icons/coin.svg"
import axios from "axios";
import s from "./Card.module.scss"


export default function Card({ img, name, category, cost, _id, buttonDisabled }) {

    const dispatch = useDispatch();

    async function handleCick(e) {
        e.preventDefault(e);
        try {
            await axios.post("https://coding-challenge-api.aerolab.co/redeem", { productId: _id }, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
                }
            })
        } catch (error) {
            console.log(error)
        }
        dispatch(getUser());

        alert("Product change");

    }



    return (
        <div className={s.container}>

            <div className={s.icon}>
                <img src={img} alt="" />
            </div>

            <div className={s.info}>
                <h4>{category}</h4>
                <h3>{name}</h3>
                <h5 className={s.hover}>{cost} <img src={coin} alt="" /> </h5>
                <button onClick={handleCick} disabled={buttonDisabled} className={s.but}>
                    Redem Now
                </button>
            </div>

        </div>
    )

}