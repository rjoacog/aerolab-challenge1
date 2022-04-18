import axios from "axios";

import {
    GET_PRODUCTS,
    GET_USER,
    ORDER_BY_PRICE,
    GET_HISTORY,
    GET_ALL_PRODUCTS
} from "./types"


export function getProducts() {
    return async function (dispatch) {
        const res = await axios.get("https://coding-challenge-api.aerolab.co/products", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
            }
        })
        return dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }
}

export function getAllProducts() {
    return async function (dispatch) {
        const res = await axios.get("https://coding-challenge-api.aerolab.co/products", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
            }
        })
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        })
    }
}

export function getUser() {
    return async function (dispatch) {
        const res = await axios.get("https://coding-challenge-api.aerolab.co/user/me", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
            }
        })
        return dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
}

export function sortByPrice(payload) {
    return {
        type: ORDER_BY_PRICE,
        payload
    }
}

export function postHistory(_id) {
    try {
        return async function (dispatch) {
            await axios.post("https://coding-challenge-api.aerolab.co/redeem", { productId: _id }, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function getHistory() {
    return async function (dispatch) {
        const res = await axios.get("https://coding-challenge-api.aerolab.co/user/history", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
            }
        })
        return dispatch({
            type: GET_HISTORY,
            payload: res.data
        })
    }
}

export function postCoins(){
    try {
        return async function (dispatch) {
            await axios.post("https://coding-challenge-api.aerolab.co/user/points", { amount: 1000 }, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY4ZmMxNzAyZDAwMjE4ZGQwNzQiLCJpYXQiOjE2NDkzNTQzODN9.vohtMMHnp9AX7WLiJIYy1feWFpYV3XUYa7ssy8R5ZyQ"
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}
