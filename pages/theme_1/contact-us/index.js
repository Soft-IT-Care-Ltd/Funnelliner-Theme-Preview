import React from 'react';

import ContactUs from '../../../Components/theme_1/ContactUs/ContactUs'
import Header from '../../../Components/theme_1/Common/Header'
import Menubar from '../../../Components/theme_1/Common/Menubar'
import Delivary from '../../../Components/theme_1/Common/Delivary'
import Footer from '../../../Components/theme_1/Common/Footer'
import SocialMedia from '../../../Components/theme_1/Common/SocialMedia'
import TinyFooter from '../../../Components/theme_1/Common/TinyFooter'

const index = () => {


    return (


        <div className='ThemeOne'>

          <Header></Header>

          <Menubar></Menubar>

          <ContactUs></ContactUs>

          {/* <Delivary></Delivary> */}

          <Footer></Footer>

          <SocialMedia></SocialMedia>
          
          <TinyFooter></TinyFooter>

        
        </div>


    )


}

export default index
