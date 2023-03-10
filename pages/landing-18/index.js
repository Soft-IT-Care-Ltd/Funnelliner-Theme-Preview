import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ShippingAddress from '../../Components/LandingPage/Common/ShippingAddress';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


// ShippingAddress Img
import DelivaryImgUrl1 from '../../public/images/landing_18/delivary1.png'
import DelivaryImgUrl2 from '../../public/images/landing_18/delivary2.png'
import DelivaryImgUrl3 from '../../public/images/landing_18/delivary3.png'
import DelivaryImgUrl4 from '../../public/images/landing_18/delivary4.png'
import Order from '../../Components/LandingPage/Common/Order';

const index = () => {
    

    return (


        <div className='Landing__18'>

            {/* =========================================================================================================
                Banner
            ===============================================================================================================*/}
            <section className='Landing__18__Banner'>

                <img className='banner_bg' src="/images/Landing_18/banner.png" alt="" />

                <div className="Landing__18__Banner__Content">

                    <Container>

                        <Row>

                            <Col lg={8}>

                                <div className="Landing__18__Banner__Left">

                                    
                                    <div className="Landing__18__Banner__Img d_flex d_justify">
                                        
                                        <div className="">
                                            <img src="/images/Landing_18/banner1.png" alt="" />
                                        </div>

                                        <div className="">
                                            <img src="/images/Landing_18/banner2.png" alt="" />
                                        </div>
                                        
                                    </div>

                                    <div className="Landing__18__Banner__Text">

                                        <h1>আমরা  দিচ্ছি সকল ধরনের খাঁটি গুঁড়া মশলা যা রান্নার জন্য ব্যবহার করা যায় কোনো চিন্তা ছাড়াই।</h1>

                                        <h3>মূল্যঃ  ১,৫৮৭ টাকা</h3>

                                        <Link href='' className='bg'>অর্ডার করুন</Link>


                                    </div>



                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="Landing__18__Banner__Right">

                                    <img src="/images/Landing_18/banner3.png" alt="" />

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </div>

            </section>
            
            {/* Section_gaps */}
            <div className="Section_gaps"></div>

            {/* =========================================================================================================
                Delivay
            ===============================================================================================================*/}
            <section className='Landing__18__Delivay'>

                <ShippingAddress
                    DelivaryImage1={DelivaryImgUrl1}
                    DelivaryImage2={DelivaryImgUrl2}
                    DelivaryImage3={DelivaryImgUrl3}
                    DelivaryImage4={DelivaryImgUrl4}
                    DelivaryTitle1="Free 2 Days Shipping" 
                    DelivaryTitle2="Sourced From Best Farms" 
                    DelivaryTitle3="Packed Hygienically" 
                    DelivaryTitle4="24/7 Customer Support" 
                />

            </section>

            {/* Section_gaps */}
            <div className="Section_gaps"></div>


            {/* =========================================================================================================
                Landing__18__Welcome
            ===============================================================================================================*/}
            <section className='Landing__18__Welcome'>

                <div className="Landing__18__Welcome__bg">
                    <img src="/images/landing_18/welcome_bg.png" alt="" />
                </div>

                <Container>

                    <Row>

                        <Col lg={6}>

                            <div className="Landing__18__Welcome__Img">
                                <img src="/images/landing_18/welcome.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className="Landing__18__Welcome__Text">

                                <h2>আপনাকে  স্বাগত আমাদের খাঁটি গুঁড়া মশলার  মার্কেটে...</h2>
                                <p>আমাদের খাঁটি গুঁড়া মশলা কাঁচামাল সংগ্রহ থেকে শুরু করে প্যাকেজিং পর্যন্ত প্রত্যেকটি ধাপ নিজস্ব টিম দ্বারা মনিটরিং করা হয়। ফলে মান নিয়ে নিঃসঙ্কোচ থাকা যায়। আর প্যাকেজিং এর তারিখ হতে এক বছর পর্যন্ত এর মেয়াদ থাকে। ফলে সঠিক ভাবে সংরক্ষণ করলে অনেকদিন পর্যন্ত ব্যবহার করা যায়। তাছাড়া অন্য কোন অপদ্রব্যের সংমিশ্রণ করা হয় না বলে এর স্বাস্থ্য ঝুঁকিও নেই বললেই চলে।</p>

                                <h4>AVAILABLE SIZES</h4>

                                <ul>
                                    <li>500g</li>
                                    <li>200g</li>
                                    <li>100g</li>
                                    <li>50g</li>
                                </ul>
                                
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* =========================================================================================================
                Landing__18__WhyBuy
            ===============================================================================================================*/}
            <div className="Landing__18__WhyBuy">

                <div className="Landing__18__whybuy__bg">
                    <img src="/images/Landing_18/whybuy_bg.png" alt="" />
                </div>

                <Container>

                    <Row className='d_flex'>

                        <Col lg={6}>

                            <div className="Landing__18__WhyBuy__Content">

                                <h2>কেনো নিবেন আমাদের খাঁটি গুঁড়া মশলা এবং অন্য মশলা থেকে আলাদা?</h2>

                                <ul>

                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  গুঁড়া করার জন্য ব্যবহৃত  বিভিন্ন আইটেম খাঁটি গুঁড়া মশলা আমাদের দেশের বিভিন্ন জায়গা থেকে সংগ্রহ করা হয়। নিজেরা সংগ্রহ করা হয় বলে এর গুণগত মান নিয়ে কোন প্রকার সন্দেহের অবকাশ থাকে না। </li>

                                    <li> <img src="/images/Landing_18/tik.png" alt="" />   রঙ সহ বিভিন্ন প্রকার কমদামি উপকরণের মিশ্রণ থেকে সম্পূর্ণ নিরাপদ।  </li>
                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  এই গুঁড়া BSTI (Bangladesh Standard and Testing Institution) অনুমোদিত।   </li>
                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  সম্পূর্ণ নিজস্ব তত্ত্বাবধানে পরিষ্কার করে শুকানো হয়। এরপর ভাঙানো হয়।  </li>
                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  বাজারের খোলা পণ্যে অনেক ক্ষেত্রেই কাঠের গুঁড়া ও আটার ভুষির মতন উপাদানের মিশ্রণ যোগ করে গুঁড়ার পরিমাণ বৃদ্ধি করা হয়। কিন্তু আমাদের খাঁটি গুঁড়া মশলা কিছু মেশানো হয় না।  </li>
                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  রান্নায় আনবে পারফেক্ট স্বাদ, সুগন্ধ ও তৃপ্তি  </li>
                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  অনেকদিন সংরক্ষণ করতে পারবেন  </li>
                                    <li> <img src="/images/Landing_18/tik.png" alt="" />  শতভাগ নিরাপদ ও বিশুদ্ধ  </li>

                                </ul>

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className="Landing__18__WhyBuy__Img">

                                <img src="/images/Landing_18/whybuy.png" alt="" />
                                
                                <div className="Order">
                                    <Link href='tel:01894844452'>01894844452</Link>
                                    <p>ফোন অর্ডার করতে কল করুন </p>
                                </div>

                            </div>

                        </Col>            

                    </Row>

                </Container>

            </div>


            {/* =========================================================================================================
                Landing__18__StartingPrice
            ===============================================================================================================*/}
            <div className="Landing__18__StartingPrice">

                <div className="Landing__18__StartingPrice__bg">
                    <img src="/images/Landing_18/startprice_bg.png" alt="" />
                </div>

                <Container>

                    <Row>

                        <Col lg={12}>

                            <div className="Landing__18__StartingPrice__Img">

                                <img src="/images/Landing_18/startprice.png" alt="" />

                                <div className="Landing__18__StartingPrice__Text">

                                    <div className="">

                                        <h2>৳120 টাকা থেকে শুরু </h2>
                                        <p>সারা দেশে ফ্রি হোম ডেলিভারি</p>

                                        <Link href='' className='bg'>অর্ডার করুন</Link>

                                    </div>

                                </div>

                            </div>

                            {/* Landing__18__StartingPrice__Slider */}
                            <div className="Landing__18__StartingPrice__Slider">

                                <Swiper 
                                    navigation={true} 
                                    modules={[Navigation]}
                                    breakpoints={{
                                        320: {
                                          slidesPerView: 1.5,
                                          spaceBetween: 5,
                                        },
                                        768: {
                                          slidesPerView: 3,
                                          spaceBetween: 10,
                                        },
                                        1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 20,
                                        },
                                        1440: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                          },
                                      }} 
                                    className="mySwiper"
                                >
                                    
                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider3.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>এলাচ</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider2.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>হলুদ গুঁড়া</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider1.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>মরিচ গুঁড়া</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider4.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>ধনিয়া গুঁড়া</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider3.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>এলাচ</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider2.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>হলুদ গুঁড়া</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider1.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>মরিচ গুঁড়া</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                    {/* item */}
                                    <SwiperSlide>

                                        <div className="Landing__18__Slider__Item">

                                            <div className="Landing__18__Slider__Img">
                                                <img src="/images/Landing_18/slider4.png" alt="" />    
                                            </div> 
                                            
                                            <div className="Landing__18__Slider__Text">
                                                <h4>ধনিয়া গুঁড়া</h4>
                                                <p>­Cardamom 50 gram</p>
                                            </div> 

                                        </div>

                                    </SwiperSlide>

                                </Swiper>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </div>


            {/* Section_gaps */}
            <div className="Section_gaps"></div>


            {/* =========================================================================================================
                Landing__18__Feature
            ===============================================================================================================*/}
            <section className='Landing__18__Feature'>

                <img src="/images/Landing_18/feature_bg.png" alt="" />

                <div className="Landing__18__Feature__Content">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <h2>আমাদের সেরা খাঁটি গুঁড়া মশলা এর উপকারিতা</h2>

                                <ul>

                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> এতে আছে নাইজেরিসিন নামক যৌগ যা ইনসুলিন রেজিস্ট্যান্স কমিয়ে ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করে।</li>
                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> আমাদের সেরা খাঁটি গুঁড়া মশলা দাঁতের ব্যথা উপশমে বেশ কার্যকরী। </li>
                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> এতে অ্যান্টিমাইক্রোবিয়াল উপাদান – ক্যারিওফিলিন বিদ্যমান। </li>
                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> এতে বিদ্যমান ইউজেনল খাদ্যে বিষক্রিয়া সারাতে সহায়তা করে। </li>
                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> সর্দি – কাশি কমাতে দারুণভাবে কাজ করে। খাঁটি গুঁড়ো যা কোনো চিন্তা ছাড়াই ব্যবহার করা যেতে পারে। </li>
                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> সাইনাসের ব্যথা উপশমে কাজ করে।  আপনি গুণমান সম্পর্কে আত্মবিশ্বাসী হতে পারেন </li>
                                    <li> <img src="/images/Landing_18/featureli.png" alt="" /> এতে আছে নাইজেরিসিন নামক যৌগ যা ইনসুলিন রেজিস্ট্যান্স কমিয়ে ডায়াবেটিস নিয়ন্ত্রণে সাহায্য করে। </li>

                                </ul>

                            </Col>

                        </Row>

                    </Container>

                </div>


            </section>


            {/* =========================================================================================================
                Landing__18__Order
            ===============================================================================================================*/}
            <section className='Landing__18__Order'>

                <img className='Order_bg' src="/images/Landing_18/order_bg.png" alt="" />

                <div className="Landing__18__Order__Content">

                    <Container>

                        <Row>

                            <Col lg={12}>

                                <h2>তাই আর দেরি না করে আজই অর্ডার করুন </h2>

                                <Order></Order>

                            </Col>

                        </Row>

                    </Container>

                </div>

            </section> 


            {/* =========================================================================================================
                Landing__18__Footer
            ===============================================================================================================*/}
            <footer className='Landing__18__Footer'>

                <img className='footer_bg' src="/images/Landing_18/footer_bg.png" alt="" />

                <div className="Landing__18__Footer__Content">

                    <Container>

                        <Row>

                            <Col lg={12}>
                                
                                <div className="Landing__18__Footer__Content">
                                
                                    <img src="/images/Landing_18/banner2.png" alt="" />

                                    <ul>
                                        <li><Link href=''>Privacy Policy</Link></li>
                                        <li><Link href=''>Terms and Conditions</Link></li>
                                        <li><Link href=''>Refund Policy </Link></li>
                                    </ul>

                                </div>    

                            </Col>

                        </Row>

                    </Container>

                </div>

            </footer>


            {/* =========================================================================================================
                Delivay
            ===============================================================================================================*/}


        
        </div>

        
    )

}

export default index
