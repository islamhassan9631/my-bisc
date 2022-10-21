import "./slider.css"



function Slider(){
    return(
        <>
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://www.redmention.com/wp-content/uploads/2021/06/eCommerce-Website-Components-photo.jpg" className="d-block w-100 height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.hubspot.com/hubfs/ecommerce%20busines.jpg" className="d-block w-100 height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000" className="d-block w-100 height" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}
export default Slider;