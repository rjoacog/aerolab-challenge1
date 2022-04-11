import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/actions";
import Card from "./Card";

const Products = () => {
const dipsatch = useDispatch();
const products = useSelector((state) => state.products)
console.log(products)

useEffect(()=>{
    dipsatch(getProducts())
}, [dipsatch])

    return(
        <div>
           {
               products ? products.map((p) => 
               <Card 
               img= {p.img.url}
               category = {p.category}
               name = {p.name}
               />
               ): <h1>"Product not found"</h1>
           } 
        </div>
    )

}

export default Products;