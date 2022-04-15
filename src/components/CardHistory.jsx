import React from "react";

import s from "./CardHistory.module.scss"

export default function CardHistory({img, category, name, createDate}){

    return(
        <div className={s.container}>
             <img src={img} alt=""  className={s.prod} />
             <h4>{category}</h4>
             <h3>{name}</h3>
             <h6> Date: {createDate}</h6>
        </div>
    )
}