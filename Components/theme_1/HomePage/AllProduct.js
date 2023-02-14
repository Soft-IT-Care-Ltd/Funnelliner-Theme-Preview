import Image from "next/image";
import Link from "next/link";
import {
  Col,
  Container,
  Dropdown,
  Nav,
  Row,
  Tab,
  Tabs,
  Form,
} from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import { baseUrl } from "../../../constant/constant";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import Context from "../../Context";
const axios = require("axios");
import { useRouter } from "next/router";
import iamgeOne from "../../../public/theme_1/images/product/headphoneProduct.jpg"

const AllProduct = ({ title, fontSize }) => {
  const product = [
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
    {
      name: "Head Phone",
      image: iamgeOne,
      price: 100,
      discount: 40,
    },
  ]


  const dispatch = useDispatch();
  const router = useRouter();
  const editActive = useContext(Context);
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  console.log("allCategories", allCategories)
  const [shopId, setShopId] = useState();
  const [shop_name, setShop_name] = useState();
  console.log("shop_name", shop_name)

  const handleFetchProduct = async (headers) => {
    axios
    .get(`${process.env.API_URL}v1/customer/products`, { headers: headers })
    .then((res) => {
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
    //   // console.log("all products", err.response.data.msg);
    // }
  };
  const handleFetchCategories = async (headers) => {
    axios
    .get(`${process.env.API_URL}v1/customer/products`, { headers: headers })
    .then((res) => {
      setAllCategories(res?.data?.data);
    });
    // try {
    //   let res = await axios({
    //     method: "get",
    //     url: `${baseUrl}/api/v1/customer/products`,
    //     headers: headers,
    //   });
    //   setAllProducts(res.data.data);
    // } catch (err) {
    //   // console.log("all products", err.response.data.msg);
    // }
  };
  useEffect(() => {
    const headers = {
     "shop-id": localStorage.getItem("shop_id"),
    };
    handleFetchProduct(headers);
    handleFetchCategories(headers)
    // axios
    //   .get(`${baseUrl}/api/v1/customer/products`, { headers: headers })
    //   .then((res) => {
    //     setAllProducts(res.data.data);
    //   });
    setShopId(localStorage.getItem("shop_id"));
    setShop_name(localStorage.getItem("shop_name"));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleBuyNow = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section className='PopularProduct AllProduct'>
      <Container>
        <Row>
          {/* item */}
          <Col xs={12}>
          {/* <h2>All Product</h2> */}
            <div className='AllProductTabs'>
              <Tabs variant='pills' defaultActiveKey='PackOne'>
                <Tab eventKey='PackOne' title='All Products'>
                  <div className='PopularProductContent'>
                    <Row>
                      <Col>
                        <div md='5' className='PopularProductGrid'>
                          {product.map((item, index) => {
                            return (
                              
                              <Link href="#">
                                <div
                                  key={item.id}
                                  className='PopularProductItem'
                                >
                                  <div className='img'>
                                    <Image
                                      src={item?.image}
                                      alt=''
                                      style={{ width: "250px" }}
                                    />
                                  </div>
                                  <div className='text'>
                                    <h3>
                                      {item?.price} <del>{item?.discount}</del>
                                    </h3>
                                    <p>{item?.name}</p>
                                    <div className='duelButton'>
                                      <Link
                                        
                                        className='addToCart'
                                        href='#'
                                      >
                                        Add To Cart
                                      </Link>
                                      <Link
                                       
                                        href="#"
                                      >
                                        Buy Now
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab>

              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
