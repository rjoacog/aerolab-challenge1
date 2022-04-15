import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHistory } from "../actions/actions";
import CardHistory from "./CardHistory";

import s from "./History.module.scss"

export default function History(){
const dispatch = useDispatch();
const history = useSelector((state) => state.history)
console.log(history)


useEffect(() => {
    dispatch(getHistory())
}, [])

return(
    <div className={s.container}>
        <h1>History</h1>
        <Link to="/">
        <button>GO BACK</button>
        </Link>
        <div>
        {
            history? history.map((p) => <CardHistory
              img = {p.img.url}
              category = {p.category}
            name = {p.name}
            createDate={p.createDate}
            />
                ) : []
        }
        </div>
      
    </div>
)

}