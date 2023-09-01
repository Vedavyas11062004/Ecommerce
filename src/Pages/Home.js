import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ADD, LIKE } from "../redux/actions/action";
import HeroVideo from "../components/Hero/HeroVideo";
import HeroImg from "../components/Hero/HeroImg";
import "../styles/HomePageCards.css";
import Video from "../components/VideoAboveFooter/Video";

function Home() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("./Products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setProducts(myJson.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  };

  const like = (p) => {
    // console.log(p);
    dispatch(LIKE(p));
  };

  return (
    <div>
      <HeroVideo/>
      <HeroImg />
      <div className="main-wrapper">
        <div className="banner-area-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img"></div>
                  <div className="banner-content">
                    <span>In-Store & Online</span>
                    <h3>
                      Men's Shirt's
                      <br />
                      T-shirt's & More!
                    </h3>
                    <div className="kenne-btn-ps_center">
                      <Link
                        className="kenne-btn transparent-btn black-color square-btn"
                        to="/products"
                      >
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area">
          <div className="container">
            <div className="service-nav">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="service-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
                    <div className="content">
                      <h4>Free Shipping</h4>
                      <p>Free shipping on all order</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="service-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
</svg>
                    <div className="content">
                      <h4>Money Return</h4>
                      <p>30 days for free return</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="service-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>
                    <div className="content">
                      <h4>Online Support</h4>
                      <p>Support 24 hours a day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="banner-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-6 custom-xxs-col">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img src="../images/banner-1.webp" alt="Banner" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 custom-xxs-col">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img src="../images/bannner-2.webp" alt="Banner" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 custom-xxs-col">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img src="../images/banner-1.webp" alt="Banner" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="product-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h3>New Product</h3>
                  <div className="product-arrow"></div>
                </div>
              </div>
              <div className="col-lg-12 container">
                <div className="row">
                  {products.slice(0, 8).map((product) => (
                    <div
                      className="product-item col-lg-3 col-md-4 product-item_home"
                      key={product.id}
                    >
                      <div className="single-product">
                        <div className="product-img">
                          <NavLink to={`/product/${product.id}`}>
                            <img
                              className="primary-img"
                              src={product.image}
                              alt="Product"
                              style={{ maxWidth: "100%" }}
                            />
                            <img
                              className="secondary-img"
                              src={product.image2}
                              alt="Product"
                              style={{ maxWidth: "100%" }}
                            />
                          </NavLink>
                          <span className="sticker-2">Hot</span>
                          <div className="homecard_manageActions">
                            <ul>
                              {/* <li
                                className="quick-view-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter"
                              >
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Quick View"
                                >
                                  <i className="ion-ios-search"></i>
                                </a>
                              </li> */}
                              <li>
                                <Link
                                  onClick={() => like(product)}
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To Wishlist"
                                >
                                  <i className="heart-outline"></i>
                                </Link>
                              </li>
                              {/* <li>
                                <a
                                  href="compare.html"
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To Compare"
                                >
                                  <i className="ion-ios-reload"></i>
                                </a>
                              </li> */}
                              {/* <li>
                                <Link
                                  onClick={() => send(product)}
                                  data-bs-toggle="tooltip"
                                  data-placement="right"
                                  title="Add To cart"
                                >
                                  <i className="ion-bag"></i>
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                          <div className="product-content">
                            <div className="homecard_desc_info">
                              <h3 className="homecard-name">
                                <a href="single-product.html">
                                  {product.title}
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">
                                  ₹{product.price}
                                </span>
                                <span className="old-price">
                                  <s>₹{product.actualprice}</s>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="veiwAllbtn">
            <NavLink to={'/products'}>view all</NavLink>
          </button>
        </div>

        {/* <div className="banner-area banner-area-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img
                        className="img-full"
                        src="../images/banner_area-1.webp"
                        alt="Banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="javascrip:void(0)">
                      <img
                        className="img-full"
                        src="../images/bannner_area-2.webp"
                        alt="Banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="kenne-banner_area kenne-banner_area-4 my-4">
          <div className="banner-img"></div>
          <div className="banner-content">
            <h3>Get exclusive Products.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text{" "}
            </p>
            <div className="contact-us">
              <a href="callto://+123123321345">(+123) 123 321 345</a>
            </div>
            <div className="kenne-btn-ps_center" id="banner-5">
              <a
                className="kenne-btn transparent-btn"
                href="shop-left-sidebar.html"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <a className="scroll-to-top" href="/">
          <i className="ion-chevron-up"></i>
        </a> */}

        {/* footer video */}
        <Video/>
      </div>
    </div>
  );
}

export default Home;
