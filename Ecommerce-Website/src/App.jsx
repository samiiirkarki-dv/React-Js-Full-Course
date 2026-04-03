import axios from "axios";
import { Routes, Route } from "react-router";
import { useState, useEffect  } from "react";
import { HomePage } from "./Pages/HomePage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { OrderPages } from "./Pages/OrderPages";
import { TrackingPage } from "./Pages/TrackingPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage  cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrderPages />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
