import axios from "axios";
import { Routes, Route } from "react-router";
import { useState, useEffect  } from "react";
import { HomePage } from "./Pages/Home/HomePage";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage";
import { OrderPages } from "./Pages/orders/OrderPages";
import { TrackingPage } from "./Pages/TrackingPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=products").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage  cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrderPages cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
