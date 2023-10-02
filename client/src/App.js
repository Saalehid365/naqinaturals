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
import Navbar from "./components/navbar";
import ScrollToTop from "./components/scrollRestoration";
import About from "./pages/about/about";
import Termsandconditions from "./pages/termsandconditions";
import DeliveryAndReturns from "./pages/deliveryAndReturns";
import Success from "./pages/shop/success";
import Privacy from "./pages/privacy";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop:catergoryId" element={<Shop />} />

              <Route path="shop/:productId" element={<Singleproduct />}></Route>
              <Route
                path="shop/:productId/:variateId"
                element={<Singleproduct />}
              ></Route>

              <Route path="shoppingcart" element={<Cart />} />
              <Route path="about" element={<About />} />
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
              <Route path="privacy" element={<Privacy />} />
              <Route path="checkout" element={<Cart />} />
              <Route path="terms" element={<Termsandconditions />} />
              <Route path="delivery" element={<DeliveryAndReturns />} />
              <Route path="success" element={<Success />} />
              <Route
                path="success?session_id=:{CHECKOUT_SESSION_ID}"
                element={<Success />}
              />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
