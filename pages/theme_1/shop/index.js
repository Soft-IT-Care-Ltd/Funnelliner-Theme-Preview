import React from 'react'
import Header from "../../../Components/theme_1/Common/Header";
import MenuBar from "../../../Components/theme_1/Common/Menubar";
import Delivary from "../../../Components/theme_1/Common/Delivary";
import Footer from "../../../Components/theme_1/Common/Footer";
import SocialMedia from "../../../Components/theme_1/Common/SocialMedia";
import TinyFooter from "../../../Components/theme_1/Common/TinyFooter";
import CheckOut from "../../../Components/theme_1/CheckOut/CheckOut";
import Menubar from "../../../Components/theme_1/Common/Menubar";
import AllProduct from '../../../Components/theme_1/HomePage/AllProduct';


export default function index() {
  return (
    <>
      <Header />
      <Menubar />
      <AllProduct/>
      <Footer></Footer>
      <SocialMedia></SocialMedia>
      <TinyFooter></TinyFooter>
    </>
  )
}



