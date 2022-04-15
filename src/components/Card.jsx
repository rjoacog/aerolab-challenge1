import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyBlue from "../assets/icons/buy-blue.svg"
import { getUser, postHistory } from "../actions/actions";

import s from "./Card.module.scss"


export default function Card({img, name, category, cost, _id, buttonDisabled})  {

    const products = useSelector((state)=> state.products)
    const users = useSelector((state)=> state.users)
 

    const dispatch = useDispatch();


    const[loading, setLoading] = useState(false)
    

    
    function handleCick(e){
        e.preventDefault(e)
        setLoading(true)
        dispatch(postHistory(_id))
        dispatch(getUser())
        setLoading(false)
    }



    return (
        <div className={s.container}>
            <div className={s.buy}>
            <img src={buyBlue}  alt=""/>
            </div>
            <img src={img} alt="" className={s.imgProd} />
            <h4>{category}</h4>
            <h3>{name}</h3>
            <h5>{cost} </h5>
            <button onClick={handleCick} disabled={buttonDisabled}>Reedem now</button>
        </div>
    )

}