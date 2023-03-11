import React from 'react';

import AboutUs from '../../../Components/theme_1/AboutUs/AboutUs'
import Header from '../../../Components/theme_1/Common/Header'
import Menubar from '../../../Components/theme_1/Common/Menubar'
import Delivary from '../../../Components/theme_1/Common/Delivary'
import Footer from '../../../Components/theme_1/Common/Footer'
import SocialMedia from '../../../Components/theme_1/Common/SocialMedia'
import TinyFooter from '../../../Components/theme_1/Common/TinyFooter'

const index = () => {


    return (


        <>

            <Header></Header>

            <Menubar></Menubar>

            <AboutUs></AboutUs>

            {/* <Delivary></Delivary> */}

            <Footer></Footer>

            <SocialMedia></SocialMedia>
            
            <TinyFooter></TinyFooter>

        
        </>


    )


}

export default index
