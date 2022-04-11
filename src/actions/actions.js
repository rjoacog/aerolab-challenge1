import axios from "axios";

import {
    GET_PRODUCTS, 
    GET_USER
} from "./types"


export function getProducts() {
    return async function(dispatch){
        const res = await axios.get("https://coding-challenge-api.aerolab.co/products", {
            headers: {
                "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
            }
        })
        return dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
}

export function getUser(){
    return async function(dispatch){
        const res = await axios.get("https://coding-challenge-api.aerolab.co/user/me", {
            headers: {
                "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
            }
        })
        return dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
}