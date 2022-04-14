import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyBlue from "../assets/icons/buy-blue.svg"
import { getUser, postHistory } from "../actions/actions";

import s from "./Card.module.scss"


export default function Card({img, name, category, cost, _id,})  {



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
            {/* <img src={buyBlue} className={s.buy} alt=""/> */}
            <img src={img} alt="" className={s.imgProd} />
            <h4>{category}</h4>
            <h3>{name}</h3>
            <h5>{cost} </h5>
            <button onClick={handleCick} disabled={true}>Reedem now</button>
        </div>
    )

}