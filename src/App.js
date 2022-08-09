import Product from "./Pages/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Detail/Index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "./Redux/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/detail/:index" element={<Index />} />
    </Routes>
  );
}

export default App;
