import React from 'react'
import Menubar from "../../Components/ThemePage/ThemeTwo/Common/Menubar"
import Hero from "../../Components/ThemePage/ThemeTwo/Common/Hero"
import Service from "../../Components/ThemePage/ThemeTwo/Common/Service"
import ProductCarousel from "../../Components/ThemePage/ThemeTwo/HomePage/ProductCarousel"
import CategoryImage from "../../Components/ThemePage/ThemeTwo/HomePage/CategoryImage"
import ProductBanner from "../../Components/ThemePage/ThemeTwo/HomePage/ProductBanner"
import Footer from "../../Components/ThemePage/ThemeTwo/Common/Footer"
import ProductListCarousel from "../../Components/ThemePage/ThemeTwo/HomePage/ProductListCarousel"
function index() {
    return (
        <div className='ThemeTwo'>
            <Menubar></Menubar>
            <Hero></Hero>
            <Service></Service>
            <CategoryImage/>
           
            <ProductCarousel />
            <ProductBanner/>
           
            <ProductListCarousel/>
            <Footer/>
        </div>
    )
}

export default index