import Navbar from "./Conb/nav";
import Productlist from "./Conb/Productlist";
import Slider from "./Conb/Slider";
import About from "./Conb/About";
import ProductDetils from"./Conb/ProductDetils"
import { Routes, Route, } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <div className='container'>
       <Navbar/>
       <Routes>
        <Route
        path="/" element={<>
            <Slider/>
       <Productlist/>

        </>}
        />
        <Route path="About" element={<About/>
        }/>
<Route path="product/:productId" element={<ProductDetils/>
        }/>
       
       </Routes>
       
      </div>
    </div>
  );
}

export default App;
