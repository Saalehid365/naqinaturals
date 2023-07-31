import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";
import Footer from "./components/footer";
import Shop from "./pages/shop/shop";
import Singleproduct from "./pages/shop/singleproduct";
import { CartProvider } from "./context/shop-context";
import Cart from "./pages/shop/cart";
import Contact from "./pages/contact/contact";
import Dashboard from "./pages/dashboard/dashboard";
import ProductPage from "./pages/dashboard/productPage";
import Orders from "./pages/dashboard/orders";
import Customers from "./pages/dashboard/customers";
import Reports from "./pages/dashboard/reports";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:productId" element={<Singleproduct />}></Route>
              <Route path="shoppingcart" element={<Cart />} />
              <Route path="about" element={<Cart />} />
              <Route path="contact" element={<Contact />} />

              <Route path="dashboard" element={<Dashboard />}>
                <Route index path="orders" element={<Orders />} />
                <Route path="addproductpage" element={<ProductPage />} />
                <Route path="customers" element={<Customers />} />
                <Route path="reports" element={<Reports />} />
              </Route>

              <Route path="sale" element={<Cart />} />
              <Route path="payments" element={<Cart />} />
              <Route path="shipping" element={<Cart />} />
              <Route path="faqs" element={<Cart />} />
              <Route path="checkout" element={<Cart />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
