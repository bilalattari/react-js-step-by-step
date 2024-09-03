import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SmartWatches from "./pages/SmartWatches";
import Motorcycle from "./pages/SmartWatches";
import Sports from "./pages/Sports";
import MotorCycles from "./pages/motorcycle";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/smartwatches" element={<SmartWatches />} />
        <Route path="/motorcycle" element={<MotorCycles />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
