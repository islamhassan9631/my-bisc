import {  Link } from "react-router-dom"
function Product(props){
    console.log(props);
  const {products,showButton} = props;
   
    return(
        <>
         <div className="card" >
         <img src={products.image} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
          <p className="card-text">{products.description}</p>
          <p className="card-text"> price:{products.price} $</p>
          {showButton && <Link className="btn btn-primary" to={`/product/${products.id}`}>Dietalis</Link>}
           
        </div>
         </div>
        </>
    )
}
export default Product;