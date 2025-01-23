"use client"
import Image from "next/image";
import Navbar from "../app/components/navbar"
import Sidebar from "../app/components/sidebar"
import Slide from "../app/components/slideShow"
import Stock from "./components/stock"
import Categories from "./components/category";
import Product from "./components/product"
import Categories1 from "./components/category2";
import Product1 from "./components/product2"
import Feature from "./components/feature"
import Last from "./components/last"
import Footer from "./components/footer"
export default function Home() {
  return (
    <header>
            <div className="text-white bg-black flex  justify-center ">
                <p className=" text-center ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!   ShopNow</p>
                <p className=" ml-[7rem] items-center flex">English</p>
            </div>
            <div> <Navbar/></div>
            <div className="flex ">
              <div className="flex me-8"><Sidebar/></div>
              <div className=" flex me-8"><Slide/></div>
             
            </div>
            <Stock/>
            <Categories/>
            <Product/>
            <Categories1/>
            <Product1/>
            <Feature/>
            <Last/>
            <Footer/>
          

           
     
        </header>
  );
}
