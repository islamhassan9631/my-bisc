import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "./Product";

function ProductDetils(){
    const api_url="https://fakestoreapi.com/products/"
    const prams =useParams()
    console.log(prams);
    const [product,setProduct] =useState({})
    useEffect(()=>{
        fetch(`${api_url}/${prams.productId}`)
        .then((res)=> res.json())
        .then((product)=> setProduct(product))
    },[])
    return(
        <Product products={product} showButton={false}/>
    )
}
export default ProductDetils