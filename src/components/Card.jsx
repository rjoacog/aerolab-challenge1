import React from "react";

import s from "./Card.module.scss"

export default function Card({img, name, category})  {

    return (
        <div className={s.container}>
            <img src={img} />
            <h4>{category}</h4>
            <h3>{name}</h3>
        </div>
    )

}