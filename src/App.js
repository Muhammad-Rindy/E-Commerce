import Product from "./Pages/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Detail/Index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "./Redux/action";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:id" element={<Index />} />
    </Routes>
  );
}

export default App;
