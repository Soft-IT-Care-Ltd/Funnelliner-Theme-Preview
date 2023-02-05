import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Autoplay, Pagination, Grid, Navigation } from "swiper";
import { BsCart3, BsChevronRight } from "react-icons/bs";
import { baseUrl } from "../../../../constant/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/stateSlices/CartSlice";
import Link from "next/link";
// ../../../redux/stateSlices/CartSlice
const ProductListCarousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [shopId, setShopId] = useState();
  const dispatch = useDispatch();
  const handleFetchProduct = (headers) => {
    axios
      .get(`${process.env.API_URL}v1/customer/products`, { headers: headers })
      .then((res) => {
        console.log("res", res);
        setAllProducts(res?.data?.data);
      });
    // try {
    //   let res = await axios({
    //     method: "get",
    //     url: `${baseUrl}/api/v1/customer/products`,
    //     headers: headers,
    //   });
    //   setAllProducts(res.data.data);
    // } catch (err) {

    // }
  };

  useEffect(() => {
    const headers = {
      "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    // axios
    //   .get(`${baseUrl}/api/v1/customer/products`, { headers: headers })
    //   .then((res) => {
    //     setAllProducts(res.data.data);
    //   });
    setShopId(localStorage.getItem("shop_id"));
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  // const handleBuyNow = (product) => {
  //   dispatch(addToCart(product));
  //   router.push("/theme_1/check_out");
  // };
  return (
    <>
      <section id='product-list-carousel'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='heading d_flex align-items-center'>
                <div className='circle'>
                  <FiCircle />
                </div>
                <h2 className='my-auto mx-lg-3 mx-2'>All Products</h2>
                <div className='circle'>
                  <FiCircle />
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className='more-btn'>
                <button className='btn pt-0 pe-0'>See All Products</button>
              </div>
            </Col>

            <Col lg={12}>
              <div className='productlist-slider'>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={20}
                  grid={{
                    rows: 2,
                    fill: "row",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      grid: {
                        rows: 3,
                        fill: "row",
                      },
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                      grid: {
                        rows: 2,
                        fill: "row",
                      },
                    },
                  }}
                  modules={[Autoplay, Pagination, Grid, Navigation]}
                  className='mySwiperProductList'
                >
                  {allProducts.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <Link href={`${localStorage.getItem('shop_name')}/details/${item.id}`}>
                          <div className='imageproduct'>
                            <div className='image-layer'>
                              <button className='wishlist' type='button'>
                                <img
                                  className='add-heart'
                                  src='../images/theme_2/heart-add-sm.png'
                                  alt=''
                                />
                                <img
                                  className='remove-heart d-none'
                                  src='../images/theme_2/heart.png'
                                  alt=''
                                />
                              </button>
                              <img src={item?.main_image?.name} alt='' />
                              <div className='overlay' />
                              <button
                                onClick={() => handleAddToCart(item)}
                                className='cart'
                              >
                                <BsCart3 />
                                Add to Cart
                              </button>
                            </div>
                            <p className='category'>Accessories</p>
                            <h3 className='title'>{item.product_name}</h3>
                            <h3 className='price-discount'>
                              BDT {item.price}
                              <span>
                                {parseInt(item.price) + parseInt(item.discount)}
                              </span>
                            </h3>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductListCarousel;
