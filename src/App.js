import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from './Components/TopBar/Topbar';
import Footer from './Components/Footer/Footer';
import CustomNavbar from './Components/Navbar/Navbar';
import CustomCarousel from './Components/Carousel/Carousel';
import ProductSlider from './Components/TopProducts/ProductsSlider';
import CategoriesType from './Components/CategoriesType/CategoriesType';
import TodayFeaturedProductsSlider from './Components/TodayFeaturedProducts/TodayFeaturedProductsSlider';
import CardShuffle from './Components/CardShuffle/CardShuffle';
import OurLatestdealsrow from './Components/OurLatestDeals/OurLatestdealsrow';
import TopdogsCategories from './Components/TopDogCategories/Topdogcategories';
import TopcatCategories from './Components/TopCatCategories/TopCatCategories';
import LatestNews from './Components/LatestNews/LatestNews';
import Shoppage from './pages/Shop/SHOP';
import ProductDetail from './pages/ProductDetailPage/Productdetail';
import ViewCart from './pages/ViewCart/ViewCart'; // Import the new ViewCart component
import Checkout from './pages/Checkout/Checkout'; // Import the new Checkout component

import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add('body-home');
    } else {
      document.body.classList.add('body-other');
    }
  }, [location]);

  const calculateTotal = () => {
    // Your calculation logic here
    return 23.98;
  };

  return (
    <div className="App">
      <TopBar />
      <CustomNavbar />

      <Routes>
        <Route path="/" element={
          <>
            <CustomCarousel />
            <ProductSlider />
            <CategoriesType />
            <TodayFeaturedProductsSlider />
            <CardShuffle />
            <OurLatestdealsrow />
            <TopdogsCategories />
            <TopcatCategories />
            <LatestNews />
          </>
        } />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/shop/:title" element={<ProductDetail />} />
        <Route path="/viewcart" element={<ViewCart />} /> 
        <Route path="/checkout" element={<Checkout calculateTotal={calculateTotal} />} /> 
      </Routes>

      <Footer />
    </div>
  );
}


export default App;

//admin  aryan  dev is added 
// ayesha   is  addded 