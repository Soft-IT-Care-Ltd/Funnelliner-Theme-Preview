import React from "react";
import styles from "../../../styles/landing-17/landing_seventeen.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { VscDebugBreakpointData } from "react-icons/vsc";

const LandingSeventeen = () => {
  const swiperRef = useRef();
  const today = new Date();
  const year = today.getFullYear();

  return (
    <section className={styles.LandingSeventeen}>
      {/* =========================================================================================================
                    Header Section
            ===============================================================================================================*/}

      <section>
        <Container fluid className={styles.ConPad}>
          <div className={styles.ImgRelBox}>
            <img
              className={styles.ImgAbsTree}
              src="images/landing_17/img2.png"
              alt="Img"
            />
          </div>

          <Container>
            <Row className={styles.ColumnReverce}>
              <Col md={12} lg={6}>
                <div className={styles.HeaderTxtBoxRel}>
                  <div className={styles.HeaderTxtBox}>
                    <img
                      className={styles.LogoNone}
                      src="images/landing_17/logo.svg"
                      alt="img"
                    />

                    <h1>
                      ড্রাই ফ্রুটের অনন্য স্বাদ আর ন্যাচারাল হানির পুষ্টিকর গুন
                      এখন এক জায়গায়
                    </h1>
                    <h4>
                      হানি বি <span>এর সাথে !</span>
                    </h4>
                    <h5>মাত্র ১২০০ টাকা</h5>
                    <Link className={styles.Btnbg} href="#Order">
                      অর্ডার করুন
                    </Link>
                  </div>
                </div>
              </Col>

              {/* Col------ */}

              <Col md={12} lg={6}>
                <div className={styles.LogoNone2Div}>
                  <img
                    className={styles.LogoNone2}
                    src="images/landing_17/logo.svg"
                    alt="img"
                  />
                </div>

                <div className={styles.ImgDiv2}>
                  <div className={styles.ImgDiv2Abs1}>১০০% ন্যাচারাল মধু</div>

                  <div className={styles.ImgDiv2Abs2}>প্রাকৃতিক শক্তিবর্ধক</div>

                  <div className={styles.ImgDiv2Abs3}>
                    ১০ প্রকারের ড্রাই ফ্রুটস
                  </div>

                  <img src="images/landing_17/img1.png" alt="img" />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section className={styles.section_gap}></section>

      {/* =========================================================================================================
                   Slider One 
            ===============================================================================================================*/}
      <section className={styles.SecSlider}>
        <Container>
          <div className={styles.SliderTopTxt}>
            <h3 className={styles.SliderTopTxtDev}>
              আমাদের হানি নাট তৈরি হয় বিশ্বসেরা ইনগ্রিডিয়েন্টস দিয়ে
            </h3>
            <img
              className={styles.SliderTopTxtAbsImg}
              src="images/landing_17/img3.svg"
              alt="img"
            />
          </div>

          <Row className={styles.SliderTop_gap}>
            <Col>
              <Swiper
                 slidesPerView={3}
                 spaceBetween={30}
                 navigation={true} 
                 modules={[Navigation]}
                 className="mySwiper"
                 loop={true}

                 breakpoints={{
                        240: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                          spaceBetween: 0,
                        },
                      }}
              >
                <SwiperSlide className={styles.SliderImg}>
                  <Link href="#">
                    <img src="images/landing_17/img4.png" alt="img"></img>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className={styles.SliderImg}>
                  <Link href="#">
                    <img src="images/landing_17/img5.png" alt="img"></img>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className={styles.SliderImg}>
                  <Link href="#">
                    <img src="images/landing_17/img6.png" alt="img"></img>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className={styles.SliderImg}>
                  <Link href="#">
                    <img src="images/landing_17/img4.png" alt="img"></img>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className={styles.SliderImg}>
                  <Link href="#">
                    <img src="images/landing_17/img5.png" alt="img"></img>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className={styles.SliderImg}>
                  <Link href="#">
                    <img src="images/landing_17/img6.png" alt="img"></img>
                  </Link>

                </SwiperSlide>

              </Swiper>


              <img
                className={styles.SliderBottomImg}
                src="images/landing_17/img7.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* section gap */}

      <section className={styles.section_gap}></section>

      {/* =========================================================================================================
                    Pragraph Section
             ===============================================================================================================*/}
      <section>
        <Container>
          <Row className={styles.ParagraphDivRow}>
            <Col sm={12} md={6}>
              <div className={styles.ParagraphDiv}>
                <h2>আমাদের মধু সংগ্রহ করা হয় দেশের শ্রেষ্ঠ ফার্মগুলো থেকে</h2>

                <div className={styles.ParagraphDivImg}>
                  <img src="images/landing_17/img8.svg" alt="img" />
                </div>

                <p>
                  আলহামদুলিল্লাহ্‌, বাজারের অনেক অনেক মধুর ভীড়ে আসল নকল যখন চেনা
                  দায় তখন আমরা চেষ্টা করছে আসল স্বাদের, ভেজালমুক্ত সুন্দরবনের
                  মধু সরবরাহ করতে। বিশ্বস্ত মৌয়াল দ্বারা সংগ্রহ করা এ মধু আমরা
                  নিজেরা ও যারা আসল মধু চেনেন সেই সকল মানুষদের খাইয়ে, তাঁদের
                  পরামর্শে আপনাদের জন্য ঢাকায় নিয়ে এসেছি।
                </p>

                <br />
                <br />

                <p>
                  ভেজালমুক্ত খাবার কোথায় পাবেন এই নিয়ে যারা চিন্তিত বাংলাদেশের
                  একমাত্র নিরাপদ খাবারের অনলাইন শপ হানি বি তে আছে তাদের পাশে।
                  সুন্দরবনের মধু সহ বিভিন্ন প্রকারের খাঁটি মধু পেতে আজই অর্ডার
                  করুন।
                </p>
              </div>
            </Col>

            {/* col--- */}

            <Col sm={12} md={6}>
              <img
                className={styles.ParagraphCol2Img}
                src="images/landing_17/img9.png"
                alt="img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* section gap */}
      <section className={styles.section_gap}></section>

      {/* =========================================================================================================
                    Pragraph  Section --2
            ===============================================================================================================*/}
      <section>
        <Container>
          <Row className={styles.ParagraphDivRow}>
            <Col sm={12} md={6}>
              <img
                className={styles.ParagraphCol2Img}
                src="images/landing_17/img11.png"
                alt="img"
              />
            </Col>
            {/* col---2 */}
            <Col sm={12} md={6}>
              <div className={styles.Paragraph2Div}>
                <h2>
                  হানি নাট (মধু ও বাদাম) এর সব <br />
                  গুনাগুন ও কার্যকারিতা
                </h2>

                <div className={styles.ParagraphDivImg2}>
                  <img src="images/landing_17/img8.svg" alt="img" />
                </div>

                <ul>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p> শরীরে রো’গ প্রতিরো’ধ ক্ষম’তা বৃদ্ধিতে অতুলনীয়। </p>
                  </li>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p> যারা শরী’র ফি’ট রাখতে চান তাদের জন্য খুবই উ’পকারী। </p>
                  </li>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p>চেহারায় লাবণ্য ধরে রাখতে খুবই কার্যকর। </p>
                  </li>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p>
                      {" "}
                      র’ক্তে কো’লেস্টরেল কমানোর পাশাপাশি ক্যা’ন্সার সৃষ্টি হতে
                      বাধা দেয়।{" "}
                    </p>
                  </li>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p>
                      {" "}
                      কোলেস্টরেল, ব্লাড সুগার , মাইগ্রেন এবং উচ্চ রক্তচাপ
                      নিয়ন্ত্রণ করে।{" "}
                    </p>
                  </li>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p>
                      {" "}
                      শ’রীরের দু’র্বলতা দূর করে শা’রীরিক শক্তি বৃদ্ধি করে।{" "}
                    </p>
                  </li>
                  <li>
                    <img src="images/landing_17/img12.svg" alt="img" />
                    <p>
                      {" "}
                      স্মৃতিশক্তি বৃদ্ধি করে, তীক্ষ্ণ মেধা সম্পন্ন হতে সাহায্য
                      করে।{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =========================================================================================================
                    Button-2 Section
            ===============================================================================================================*/}
      <section>
        <Container fluid className={styles.ContainerPad}>
          <div className={styles.btnBgdiv}>
            <img src="images/landing_17/img13.png" alt="img" />
            <div className={styles.btnBgdivAbs}>
              <h6>
                দেশ সেরা হানি নাট এখন <br /> আপনাদের হাতের কাছেই !
              </h6>
              <h5>মাত্র ১২০০ টাকা</h5>
              <Link className={styles.Btnbg} href="#Order">
                অর্ডার করুন
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* section gap */}

      <section className={styles.section_gap}></section>

      {/* =========================================================================================================
                    LandingSeventeen end component
            ===============================================================================================================*/}

      {/* =========================================================================================================
                      silder--2
                ===============================================================================================================*/}

      <section className={styles.SecSlider}>
        <Container>
          <div className={styles.SliderTopTxt}>
            <h2 className={styles.SliderTopTxtDev}>
              কি কি আছে আমাদের এই হানি নাট এ ?
            </h2>
            <img
              className={`${styles.SliderTopTxtAbsImg} ${styles.SliderTopTxtAbsImg2}`}
              src="images/landing_17/img14.svg"
              alt="img"
            />
          </div>

          <Row className={styles.SliderTop_gap}>
            <Col>
              <Swiper
                slidesPerView={2}
                spaceBetween={100}
                navigation={true} 
                modules={[Navigation]}
                className="mySwiper"
                loop={true}

                breakpoints={{
                  240: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 0,
                  },
                }}

               
              >
                <SwiperSlide className={styles.SliderImg2}>
                  <Link href="#">
                    <img src="images/landing_17/img15.png" alt="img"></img>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className={styles.SliderImg2}>
                  <Link href="#">
                    <img src="images/landing_17/img16.png" alt="img"></img>
                  </Link>
                </SwiperSlide>
              </Swiper>

             


            </Col>
          </Row>
        </Container>
      </section>

      {/* =========================================================================================================
                        Slider Pragraph
                ===============================================================================================================*/}

      <section>
        <Container>
          <Row>
            <Col xs={6}>
              <div>
                <div className={styles.SliderTopTxt}>
                  <h6 className={styles.SliderTopTxtDev}>ইন্ডিয়ান বাদাম</h6>
                  <img
                    className={styles.SliderTopTxtAbsImg3}
                    src="images/landing_17/img18.svg"
                    alt="img"
                  />

                  <p>
                    কাঠবাদামে প্রচুর পরিমাণে প্রোটিন, পটাশিয়াম, ম্যাগনেসিয়াম
                    ইত্যাদি উপকারী উপাদান থাকে। যা হার্টের কর্মক্ষমতা বাড়াতে
                    সাহায্য করে। এতে থাকা ভিটামিন-ই হৃদরোগের ঝুঁকি কমায় এবং
                    ম্যাগনেসিয়াম হার্ট অ্যাটাক প্রতিরোধে সাহায্য করে। এটি
                    অ্যার্টারিকে ক্ষতিকর প্রদাহের হাত থেকে সুরক্ষা দেয়।
                  </p>
                </div>
              </div>
            </Col>

            {/* Col---- */}

            <Col xs={6}>
              <div>
                <div className={styles.SliderTopTxt}>
                  <h6 className={styles.SliderTopTxtDev}>
                    কাশ্মিরি পেস্তা বাদাম
                  </h6>
                  <img
                    className={styles.SliderTopTxtAbsImg3}
                    src="images/landing_17/img18.svg"
                    alt="img"
                  />
                  <p>
                    পেস্তা খাদ্যনালীতে উপকারি ব্যাকটেরিয়ার বৃদ্ধিতে সাহায্য
                    করে। ফলে পেট পরিষ্কার থাকে। রক্ত চাপ: রোজ ডায়েটে পেস্তা
                    থাকলে তা রক্তে কোলেস্টেরলের মাত্রা ও রক্তচাপ নিয়ন্ত্রণে
                    রাখতে সাহায্য করে। পেস্তা রক্তে এইচডিএল বা গুড কোলেস্টেরলের
                    মাত্রা বাড়াতে ও এলডিএল বা ব্যাড কোলেস্টেরলের মাত্রা কমাতে
                    সাহায্য করে।
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section_gap}></section>

      {/* =========================================================================================================
        Button-3 Section
        ===============================================================================================================*/}
      <section>
        <Container>
          <img
            className={styles.Button3BoxImgAbs4}
            src="images/landing_17/img25.png"
            alt="img"
          />

          <div className={styles.Button3Box}>
            <img
              className={styles.Button3BoxImgAbs1}
              src="images/landing_17/img22.png"
              alt="img"
            />
            <img
              className={styles.Button3BoxImgAbs2}
              src="images/landing_17/img23.png"
              alt="img"
            />

            <div>
              <h2>
                সুস্থ সবল জীবনযাপন করতে আর শারীরিক <br />
                শক্তি বৃদ্ধি করতে অর্ডার করুন আজই
              </h2>
              <img
                className={styles.Button3BoxImgAbs3}
                src="images/landing_17/img24.svg"
                alt="img"
              />
              <h5>মাত্র ১২০০ টাকা</h5>
              <Link className={styles.Btnbg} href="#Order">
                অর্ডার করুন
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================================================
                        OrderConfirmFrom
                ===============================================================================================================*/}

      <section className="OrderConfirmFrom BgChange" id="Order">
        <section>
          <Container className={styles.OrderBg}>
            <Row>
              {/* left */}
              <Col lg={7}>
                <div className="OrderConfirmLeft">
                  <h3 className={styles.OrderBgh3}>Billing details</h3>

                  <div className="CustomeInput">
                    <input
                      type="text"
                      name=""
                      placeholder="আপনার নাম লিখুন *"
                    />
                  </div>

                  <div className="CustomeInput">
                    <input
                      type="text"
                      name=""
                      placeholder="আপনার মোবাইল নাম্বার লিখুন *"
                    />
                  </div>

                  <div className="CustomeInput">
                    <input
                      type="text"
                      name=""
                      placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
                    />
                  </div>

                  {/* Payment */}
                  <div className="Payment">
                    <h3 className={styles.OrderBgh3}>Paymet</h3>

                    <div className="CustomeInput d_flex">
                      <input type="checkbox" name="" id="CashOn" checked />
                      <label htmlFor="CashOn">ক্যাশ অন ডেলিভারি</label>
                    </div>

                    <div className="ArrowBg">
                      <p>Pay with cash on delivery.</p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* right */}
              <Col lg={5}>
                <div className="OrderConfirmRight">
                  <h3 className={styles.OrderBgh3}>Your order</h3>

                  <ul>
                    <li>
                      <h4>Product</h4>
                      <h5>Subtotal</h5>
                    </li>

                    <li>
                      <div className="left d_flex">
                        <div className="img">
                          <img src="images/product.svg" alt="" />
                        </div>

                        <p>Honey Of Story Honey Set Boss</p>
                      </div>

                      <div className="right d_flex">
                        <input type="number" />

                        <h5>BDT 1,690.00</h5>
                      </div>
                    </li>

                    <li>
                      <h5>Subtotal</h5>
                      <h5>1,690.00</h5>
                    </li>

                    <li>
                      <h4>Total</h4>
                      <h4>1,690.00</h4>
                    </li>
                  </ul>

                  <button>
                    {" "}
                    <RiShoppingCart2Line /> Place Order BDT 49.00
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section className={styles.section_gap}></section>

      {/* =========================================================================================================
                        Footer----
                ===============================================================================================================*/}

      <section className={styles.FooterSec}>
        <Container fluid className={styles.ContainerPad}>
          <div className={styles.FooterBg}>
            <Container>
              <Row>
                <Col sm={12} md={6} lg={3}>
                  <div className={styles.FooterBgTxtBox}>
                    <img src="images/landing_17/logo2.png" alt="Img" />
                  </div>
                </Col>

                {/* Col----- */}

                <Col sm={12} md={6} lg={3}>
                  <div className={styles.FooterBgTxtBox}>
                    <h4>Important Link</h4>

                    <ul>
                      <li>
                        <Link href="#">
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Refund Policy
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Privacy Policy
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <VscDebugBreakpointData></VscDebugBreakpointData>
                          Terms and Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                {/* Col----- */}

                <Col sm={12} md={6} lg={3}>
                  <div className={styles.FooterBgTxtBox}>
                    <h4>Contact Us</h4>

                    <ul>
                      <li>
                        <Link href="#">
                          <FiPhoneCall></FiPhoneCall>
                          +8801894844452
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <IoIosMail></IoIosMail>
                          support@funnelliner.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                {/* Col----- */}

                <Col sm={12} md={6} lg={3}>
                  <div className={styles.FooterBgTxtBox}>
                    <h4>অর্ডার পেতে কল করুন এই নাম্বারে</h4>
                    <h5>+8801894844452</h5>
                  </div>
                </Col>

                {/* Col----- */}

                {/* Tiny Footer */}
                <div className={styles.tinyFooter}>
                  <p>@ {year} All Rights Reserved </p>
                  <p>
                    System developed by{" "}
                    <Link href="https://funnelliner.com/">Funnel Liner</Link>{" "}
                  </p>
                </div>

                <div className={styles.Banner2Rel}>
                  <img
                    className={styles.BannerMAbsImgAll}
                    src="images/landing_17/img30.svg"
                    alt="img"
                  />
                  <img
                    className={styles.BannerMAbsImgAll2}
                    src="images/landing_17/img31.svg"
                    alt="img"
                  />
                </div>
              </Row>
            </Container>
          </div>
        </Container>
      </section>

      {/* =========================================================================================================
                        Banner One
                ===============================================================================================================*/}

      {/* =========================================================================================================
                        Banner One
                ===============================================================================================================*/}
    </section>
  );
};

export { LandingSeventeen };
