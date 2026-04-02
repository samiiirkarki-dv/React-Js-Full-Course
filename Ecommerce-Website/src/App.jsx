import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrderPages } from './Pages/OrderPages'
import { TrackingPage } from './Pages/TrackingPage';
import { Header } from './components/Header';
import './App.css'

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrderPages />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
   
  )
}

export default App
