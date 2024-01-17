import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Shop from "./Pages/Shop";

import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Shopcategory from "./Pages/Shopcategory";
import LoginSignup from "./Pages/loginSignup";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Shopcategory category="men" />} />
          <Route path="/womens" element={<Shopcategory category="women" />} />
          <Route path="/kids" element={<Shopcategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
