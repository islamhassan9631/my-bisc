import { useEffect, useState } from "react";
import Product from "./Product";

function Productlist(){
    const api_Url="https://fakestoreapi.com/products"
const[products,setProducts]=useState([])
const[categories,setCategories]=useState([])
const getProducts=()=>{
    fetch(api_Url).then((res)=>res.json()).then((data)=>setProducts(data))
}
const getcategory=()=>{
    fetch(`${api_Url}/categories`)
    .then((res)=>res.json()).then((data)=>setCategories(data))
}
const getProductCatgrey=(catName)=>{
    fetch(`${api_Url}/category/${catName}`)
            .then(res=>res.json())
            .then((data)=> setProducts(data))
}
useEffect(()=>{
    getProducts()
    getcategory()
},[])

    return(
        <>
        <h1 className="text-center p-5">Our Product</h1>
       <div className="container">
       <button className="btn btn-info" onClick={()=>{  getProducts()}}>ALL</button>
        {
                        
            categories.map((cat)=>{
                return <button className="btn btn-info" key={cat} onClick={()=>{getProductCatgrey(cat)}}>{cat}</button>

            })
        } 
        <div className="row g-0">
          {products.map((product)=>{
            return(
                <div className=" col-3 mb-3" key={product.id}> 
                <Product products={product} showButton={true}/>
            </div>
           
               
          )})}
    
             
       </div>
         
        </div>
        </>
    )
}
export default Productlist;