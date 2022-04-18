import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, sortByPrice, postHistory, addHist, getAllProducts } from "../actions/actions";
import Card from "./Card";
import s from "./Products.module.scss"
import arrowRight from "../assets/icons/arrow-right.svg"
import arrowLeft from "../assets/icons/arrow-left.svg"


const Products = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users)
    const products = useSelector((state) => state.products)
    const [cost, setCost] = useState("");
    console.log(products)

    const totalProducts = products.length
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(16);
    const [number, setNumber] = useState(16)

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)


    useEffect(() => {
        dispatch(getProducts())
    }, [])


    function handleProducts() {
        // e.preventDefault(e)
        dispatch(getAllProducts())
    }

    function handlePrice(e) {
        e.preventDefault(e);
        dispatch(sortByPrice(e.target.value));
        setCost(`Ordenado ${e.target.value}`);
    }

    function changePage(e) {
        e.preventDefault(e);
        setCurrentPage(2)
        setNumber(32)

    }

    function changePageBack(e) {
        e.preventDefault(e);
        setCurrentPage(1)
        setNumber(16)
    }


    return (
        <div className={s.container}>
            <div className={s.filter}>
                <h5>{number}  of {totalProducts} products </h5>
                <h6>Sort by:</h6>
                <button onClick={handleProducts}>Most recent</button>
                <button value="-P" onClick={handlePrice} >Lowest price</button>
                <button value="+P" onClick={handlePrice} >Highest price</button>
                <div className={s.paginado}>
                <button onClick={changePageBack} > <img src={arrowLeft} /> </button>
                <button onClick={changePage}> <img src={arrowRight} /> </button>
            </div>
            </div>
           
            <div className={s.productsContainer}>
                {
                    products ? currentProducts.map((p) =>
                        <Card
                            key={p._id}
                            _id={p._id}
                            img={p.img.url}
                            category={p.category}
                            name={p.name}
                            cost={p.cost < user.points ? p.cost : `You need ${p.cost - user.points}`}
                            buttonDisabled={p.cost > user.points}
                        />
                    ) : <h1>"Product not found"</h1>
                }
            </div>
        </div>
    )

}

export default Products;