import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHistory } from "../actions/actions";
import Card from "./Card";

export default function History(){
const dispatch = useDispatch();
const products = useSelector((state) => state.products)


useEffect(() => {
    dispatch(getHistory())
}, [])

return(
    <div>
        {
            products? products.map((p) => <Card
              img = {p.img.url}
              category = {p.category}
            name = {p.name}
            cost = {p.cost}
            />
                ) : []
        }
        <Link to="/">
        <button>GO BACK</button>
        </Link>
    </div>
)

}