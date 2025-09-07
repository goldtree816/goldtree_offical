import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "../layout/home.layout";
import About from "../pages/about";
import Services from "../pages/services";
import ContactPage from "../pages/contact";

const RoutingConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingConfig;
