import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";
import Footer from "./components/footer";
import Shop from "./pages/shop/shop";
import Singleproduct from "./pages/shop/singleproduct";
import { ShopContextProvider } from "./context/shop-context";
import Cart from "./pages/shop/cart";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:productId" element={<Singleproduct />}></Route>
              <Route path="shoppingcart" element={<Cart />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
