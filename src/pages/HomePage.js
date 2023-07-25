import React from "react";
import Navbar from "../components/layout/navbar/Navbar";
import Banner from "../components/layout/banner/Banner";
import HomeProduct from "../components/layout/HomeProduct/HomeProduct";
import Features from "../components/layout/features/Features";
import Footer from "../components/layout/footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <HomeProduct />
      <Footer />
    </>
  );
}

export default HomePage;
