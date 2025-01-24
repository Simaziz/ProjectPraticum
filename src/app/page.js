"use client";
import Image from "next/image";
import Navbar from "../app/components/navbar";
import Sidebar from "../app/components/sidebar";
import Slide from "../app/components/slideShow";
import Stock from "./components/stock";
import Categories from "./components/category";
import Product from "./components/product";
import Categories1 from "./components/category2";
import Product1 from "./components/product2";
import Feature from "./components/feature";
import Last from "./components/last";
import Footer from "./components/footer";

export default function Home() {
  return (
    <header>
      {/* Top Banner */}
      {/* <div className="text-white bg-black flex justify-center items-center p-2 text-sm sm:text-base">
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Shop Now
        </p>
        <p className="ml-4 sm:ml-8">English</p>
      </div> */}

      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-4 sm:p-6 lg:p-8">
        {/* Sidebar (Hidden on Mobile, Visible on Desktop) */}
        <div className="hidden lg:block lg:w-1/4 lg:me-8">
          <Sidebar />
        </div>

        {/* SlideShow (Full Width on Mobile, Adjusted on Desktop) */}
        <div className="w-full lg:w-3/4">
          <Slide />
        </div>
      </div>

      {/* Stock Section */}
      <Stock />

      {/* Categories Section */}
      <Categories />

      {/* Product Section */}
      <Product />

      {/* Categories1 Section */}
      <Categories1 />

      {/* Product1 Section */}
      <Product1 />

      {/* Feature Section */}
      <Feature />

      {/* Last Section */}
      <Last />

      {/* Footer */}
      <Footer />
    </header>
  );
}