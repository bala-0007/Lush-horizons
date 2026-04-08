import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/Aboutus.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Plants from "./pages/plants.tsx";
import Seeds from "./pages/seeds.tsx";
import Tools from "./pages/tools.tsx";

import Blog from "./pages/Blog.tsx";
import Header from "./components/Header.tsx";
import Cookies from './components/CookiesPage.tsx';
import PrivacyPolicy from "./components/PrivacyPolicyPage.tsx";

import Footer from "./components/Footer.tsx";
import AllProducts from "./pages/Products.tsx";

import ProductDetails from "./components/ProductDetails.tsx";
import { CartProvider } from "./components/CartContext.tsx";
import Checkout from "./pages/Checkout.tsx";







function App() {
  

  return (
    <CartProvider>
    <Router>
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contactus" element={<ContactUs />} />
       
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<AllProducts></AllProducts>} />
        <Route path="/plants" element={<Plants></Plants>} />
        <Route path="/seeds" element={<Seeds></Seeds>} />
        <Route path="/tools" element={<Tools></Tools>} />
    
        <Route path="/cookies" element={<Cookies></Cookies>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/product/:category/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
     
      </Routes>
      <Footer />
    </Router>
    </CartProvider>

  )
};

export default App;
