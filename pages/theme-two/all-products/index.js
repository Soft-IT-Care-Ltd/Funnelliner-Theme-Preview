import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../../Components/ThemePage/ThemeTwo/Common/Footer'
import Hero from '../../../Components/ThemePage/ThemeTwo/Common/Hero'
import Menubar from '../../../Components/ThemePage/ThemeTwo/Common/Menubar'
import Service from '../../../Components/ThemePage/ThemeTwo/Common/Service'
import ProductBanner from '../../../Components/ThemePage/ThemeTwo/HomePage/ProductBanner'
import ProductListCarousel from '../../../Components/ThemePage/ThemeTwo/HomePage/ProductListCarousel'
// import ShopPage from '../../../Components/ThemePage/ThemeTwo/'



const index = () => {
  return (
    <div className='ThemeTwo'>
      <Menubar></Menubar>
      <Hero></Hero>
      <Service></Service>
      {/* <ShopPage></ShopPage> */}
      <ProductBanner></ProductBanner>
      <ProductListCarousel/>
      <Footer></Footer>

    </div>
  );
};

export default index;
