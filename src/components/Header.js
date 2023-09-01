import React, { useEffect, useState } from "react";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";

function Header() {
  const [price, setPrice] = useState(0);
  // console.log(price);

  const total = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.price * ele.quantity + price;
    });
    setPrice(price.toFixed(2));
  };

  useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();
  // console.log(getData);

  const dlt = (id) => {
    dispatch(DLT(id));
  };
  const getData = useSelector((state) => state.cartreducer.carts);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [is_mini_cart, setis_mini_cart] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsVisible(currentPosition > 220);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [quantity, setQuantity] = useState(0);

  // const getData = useSelector((state)=>state.cartreducers)
  // //whenever products details changes total changes
  // useEffect(() => {
  //   let total1 = 0;
  //   let quantity1 = 0;
  //   products.map((Product, key) => {
  //     total1 += Product.price * Product.quantity;
  //     quantity1 += Product.quantity;
  //     console.log(total1);
  //   });
  //   total1 = total1.toFixed(2);
  //   setTotal(total1);
  //   setQuantity(quantity1);
  // }, [products]);
  // let records;
  // if (products.length > 3) {
  //   records = products.slice(0, 3);
  // } else {
  //   records = products;
  // }

  return (
    <header className="main-header_area">
      <div className="header-top_area d-none d-lg-block">
        <div className="container">
          <div className="header-top_nav">
            <div className="row">
              <div className="col-lg-6">
                <div className="ht-menu">
                  <ul>
                    <li>
                      <a href="/">
                        Currency<i className="ion-chevron-down"></i>
                      </a>
                      <ul className="ht-dropdown ht-currency">
                        <li>
                          <a href="/">€ EUR</a>
                        </li>
                        <li className="active">
                          <a href="/">£ Pound Sterling</a>
                        </li>
                        <li>
                          <a href="/">$ Us Dollar</a>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="/">
                        Language <i className="ion-chevron-down"></i>
                      </a>
                      <ul className="ht-dropdown">
                        <li className="active">
                          <a href="/">
                            <img
                              src="assets/images/menu/icon/1.jpg"
                              alt="Kenne Language Icon"
                            />
                            English
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <img
                              src="assets/images/menu/icon/2.jpg"
                              alt="Kenne Language Icon"
                            />
                            Français
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-top_right " style={{ height: "100%" }}>
                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <li>
                      <a href="my-account.html">My Account</a>
                    </li> */}
                    <li>
                      <span className="px-2">
                        <Link to={"/account"}>My Account</Link>
                      </span>
                      {/* <a href="wishlist.html">Wishlist</a> */}
                    </li>
                    <li>
                      <span className="px-4">
                        <Link to={"/wishlist"}>Wishlist</Link>
                      </span>
                      {/* <a href="wishlist.html">Wishlist</a> */}
                    </li>
                    <li>
                      <span
                        style={{ cursor: "pointer" }}
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Sign in
                      </span>
                    </li>
                    <li>
                      <span className="px-4">
                        <Link to={"/checkout"}>Checkout</Link>
                      </span>
                      {/* <a href="checkout.html">Checkout</a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-middle_nav row">
                {/* <div className="col-4"></div> */}
                <div className="header-logo_area col-4 d-flex justify-content-center">
                  <Link to={"/"}>
                    <img
                      alt="logo"
                      src="../images/logo.png"
                      style={{ maxWidth: "280px" }}
                    />
                  </Link>
                </div>
                {/* <div className="header-search_area d-none d-lg-block">
                  <form className="search-form" action="#">
                    <input type="text" placeholder="Search" />
                    <button className="search-button">
                      <i className="ion-ios-search"></i>
                    </button>
                  </form>
                </div> */}
                <div className="col-4 justify-content-end d-flex">
                  <div className="header-right_area d-none d-lg-block">
                    <ul>
                      <li className="minicart-wrap">
                        <a
                          className="minicart-btn toolbar-btn"
                          onClick={() => setis_mini_cart(!is_mini_cart)}
                        >
                          <div
                            className="minicart-count_area"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                            role="button"
                          >
                            {getData.length ? (
                              <span className="item-count">
                                {getData.length}
                              </span>
                            ) : (
                              <span></span>
                            )}
                            <i className="ion-bag"></i>
                          </div>
                          <div className="minicart-front_text">
                            <span>Cart:</span>
                            <span className="total-price">{price}</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-right_area header-right_area-2 d-block d-lg-none">
                    <ul>
                      <li className="mobile-menu_wrap d-inline-block d-lg-none">
                        <a
                          href="#mobileMenu"
                          className="mobile-menu_btn toolbar-btn color--white"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <i className="ion-android-menu"></i>
                        </a>
                      </li>
                      <li className="minicart-wrap">
                        <a
                          href="#miniCart"
                          className="minicart-btn toolbar-btn"
                          onClick={() => setis_mini_cart(!is_mini_cart)}
                        >
                          <div
                            className="minicart-count_area"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                          >
                            {getData.length ? (
                              <span className="item-count">
                                {getData.length}
                              </span>
                            ) : (
                              <span></span>
                            )}
                            <i className="ion-bag"></i>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#searchBar" className="search-btn toolbar-btn">
                          <i className="ion-android-search"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom_area d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-menu_area position-relative">
                <nav className="main-nav d-flex justify-content-center">
                  <ul>
                    <li className="dropdown-holder">
                      <span className="px-2" style={{ fontSize: "16px" }}>
                        <Link to={"/"}>Home</Link>
                      </span>
                    </li>
                    <li className="megamenu-holder position-static">
                      <span style={{ fontSize: "16px" }}>
                        <Link to={"/products"}>
                          Shop <i className="ion-chevron-down"></i>
                        </Link>
                      </span>
                      <ul className="kenne-megamenu">
                        <li>
                          <span className="megamenu-title">
                            Shop Page Layout
                          </span>
                          <ul>
                            <li>
                              <a href="shop-fullwidth.html">Grid Fullwidth</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-fullwidth.html">
                                List Fullwidth
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-left-sidebar.html">
                                List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                List Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="megamenu-title">
                            Single Product Style
                          </span>
                          <ul>
                            <li>
                              <a href="single-product-gallery-left.html">
                                Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-right.html">
                                Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-left.html">
                                Tab Style Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-right.html">
                                Tab Style Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-left.html">
                                Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-right.html">
                                Sticky Right
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="megamenu-title">
                            Single Product Type
                          </span>
                          <ul>
                            <li>
                              <a href="single-product.html">Single Product</a>
                            </li>
                            <li>
                              <a href="single-product-sale.html">
                                Single Product Sale
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Single Product Group
                              </a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">
                                Single Product Variable
                              </a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">
                                Single Product Affiliate
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider.html">
                                Single Product Slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="megamenu-title">
                            Shop Related Pages
                          </span>
                          <ul>
                            {/* <li>
                              <a href="my-account.html">My Account</a>
                            </li> */}
                            <li>
                              <a href="login-register.html">Login | Register</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="megamenu-holder position-static">
                      <span style={{ fontSize: "16px" }}>
                        <Link to={"/products"}>
                          Men <i class="ion-chevron-down"></i>
                        </Link>
                      </span>
                      <ul class="kenne-megamenu">
                        <li>
                          <span class="megamenu-title">Shop Page Layout</span>
                          <ul>
                            <li>
                              <a href="shop-fullwidth.html">Grid Fullwidth</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-fullwidth.html">
                                List Fullwidth
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-left-sidebar.html">
                                List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                List Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">
                            Single Product Style
                          </span>
                          <ul>
                            <li>
                              <a href="single-product-gallery-left.html">
                                Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-right.html">
                                Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-left.html">
                                Tab Style Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-right.html">
                                Tab Style Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-left.html">
                                Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-right.html">
                                Sticky Right
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">
                            Single Product Type
                          </span>
                          <ul>
                            <li>
                              <a href="single-product.html">Single Product</a>
                            </li>
                            <li>
                              <a href="single-product-sale.html">
                                Single Product Sale
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Single Product Group
                              </a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">
                                Single Product Variable
                              </a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">
                                Single Product Affiliate
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider.html">
                                Single Product Slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">Shop Related Pages</span>
                          <ul>
                            {/* <li>
                              <a href="my-account.html">My Account</a>
                            </li> */}
                            <li>
                              <a href="login-register.html">Login | Register</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="megamenu-holder position-static">
                      <span style={{ fontSize: "16px" }}>
                        <Link to={"/products"}>
                          Women <i class="ion-chevron-down"></i>
                        </Link>
                      </span>
                      <ul class="kenne-megamenu">
                        <li>
                          <span class="megamenu-title">Shop Page Layout</span>
                          <ul>
                            <li>
                              <a href="shop-fullwidth.html">Grid Fullwidth</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-fullwidth.html">
                                List Fullwidth
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-left-sidebar.html">
                                List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                List Right Sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">
                            Single Product Style
                          </span>
                          <ul>
                            <li>
                              <a href="single-product-gallery-left.html">
                                Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-gallery-right.html">
                                Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-left.html">
                                Tab Style Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-tab-style-right.html">
                                Tab Style Right
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-left.html">
                                Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href="single-product-sticky-right.html">
                                Sticky Right
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">
                            Single Product Type
                          </span>
                          <ul>
                            <li>
                              <a href="single-product.html">Single Product</a>
                            </li>
                            <li>
                              <a href="single-product-sale.html">
                                Single Product Sale
                              </a>
                            </li>
                            <li>
                              <a href="single-product-group.html">
                                Single Product Group
                              </a>
                            </li>
                            <li>
                              <a href="single-product-variable.html">
                                Single Product Variable
                              </a>
                            </li>
                            <li>
                              <a href="single-product-affiliate.html">
                                Single Product Affiliate
                              </a>
                            </li>
                            <li>
                              <a href="single-product-slider.html">
                                Single Product Slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span class="megamenu-title">Shop Related Pages</span>
                          <ul>
                            {/* <li>
                              <a href="my-account.html">My Account</a>
                            </li> */}
                            <li>
                              <a href="login-register.html">Login | Register</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="/">
                        Blog <i className="ion-chevron-down"></i>
                      </a>
                      <ul className="kenne-dropdown">
                        <li>
                          <a href="blog-grid_view.html">Grid View</a>
                        </li>
                        <li>
                          <a href="blog-list_view.html">List View</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <a>
                        <Link to={"/contact"}>Contact Us</Link>
                      </a>
                      {/* <a href="contact-us.html">Contact Us</a> */}
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="header-sticky sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sticky-header_nav position-relative">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3 col-sm-6">
                      <div className="header-logo_area">
                        <Link to={"/"}>
                          <img
                            src="../images/logo.png"
                            style={{ maxWidth: "200px" }}
                            alt="Header Logo"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7 d-none d-lg-block position-static">
                      <div className="main-menu_area">
                        <nav className="main-nav d-flex justify-content-center">
                          <ul>
                            <li className="dropdown-holder">
                              <a href="/">Home</a>
                              {/* <ul className="kenne-dropdown">
                                <li>
                                  <a href="index.html">Home One</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Home Two</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Home Three</a>
                                </li>
                              </ul> */}
                            </li>
                            <li className="megamenu-holder position-static">
                              <a href="shop-left-sidebar.html">
                                Shop <i className="ion-chevron-down"></i>
                              </a>
                              <ul className="kenne-megamenu">
                                <li>
                                  <span className="megamenu-title">
                                    Men's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="shop-fullwidth.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-left-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-right-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-fullwidth.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-left-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-right-sidebar.html">
                                        Long Sleeve Shirts
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="megamenu-title">
                                    Women's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="single-product-gallery-left.html">
                                        Gallery Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-gallery-right.html">
                                        Gallery Right
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-tab-style-left.html">
                                        Tab Style Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-tab-style-right.html">
                                        Tab Style Right
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-sticky-left.html">
                                        Sticky Left
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-sticky-right.html">
                                        Sticky Right
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="megamenu-title">
                                    Girl's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="single-product.html">Category</a>
                                    </li>
                                    <li>
                                      <a href="single-product-sale.html">
                                        Category Sale
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-group.html">
                                        Category Group
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-variable.html">
                                        Category Variable
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-affiliate.html">
                                        Category Affiliate
                                      </a>
                                    </li>
                                    <li>
                                      <a href="single-product-slider.html">
                                        Category Slider
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="megamenu-title">
                                    Boy's Clothing
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="my-account.html">Shirts</a>
                                    </li>
                                    <li>
                                      <a href="/">Pants</a>
                                    </li>
                                    <li>
                                      <a href="wishlist.html">T-Shirts</a>
                                    </li>
                                    <li>
                                      <a href="cart.html">Shorts</a>
                                    </li>
                                    <li>
                                      <a href="checkout.html">Pants</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            {/* <li>
                              <a href="javascript:void(0)">
                                Pages <i className="ion-chevron-down"></i>
                              </a>
                              <ul className="kenne-dropdown">
                                <li>
                                  <a href="coming-soon_page.html">
                                    Coming Soon
                                  </a>
                                </li>
                                <li>
                                  <a href="404.html">Error 404</a>
                                </li>
                                <li>
                                  <a href="faq.html">FAQ</a>
                                </li>
                              </ul>
                            </li> */}
                            <li>
                              <a href="javascript:void(0)">Sign In</a>
                              {/* <ul className="kenne-dropdown">
                                <li>
                                  <a href="blog-grid_view.html">Grid View</a>
                                </li>
                                <li>
                                  <a href="blog-list_view.html">List View</a>
                                </li>
                                <li>
                                  <a href="blog-details.html">Blog Details</a>
                                </li>
                              </ul> */}
                            </li>
                            <li>
                              <a href="/contact">Contact Us</a>
                            </li>
                            <li>
                              <a href="/about">About Us</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="header-right_area header-right_area-2">
                        <ul>
                          <li className="mobile-menu_wrap d-inline-block d-lg-none">
                            <a
                              href="."
                              className="mobile-menu_btn toolbar-btn color--white"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                            >
                              <i className="ion-android-menu"></i>
                            </a>
                          </li>
                          <li className="minicart-wrap">
                            <a
                              href="#miniCart"
                              className="minicart-btn toolbar-btn"
                              onClick={() => setis_mini_cart(true)}
                            >
                              <div
                                className="minicart-count_area"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvas"
                              >
                                {getData.length ? (
                                  <span className="item-count">
                                    {getData.length}
                                  </span>
                                ) : (
                                  <span></span>
                                )}
                                <i className="ion-bag"></i>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#searchBar"
                              className="search-btn toolbar-btn"
                            >
                              <i className="ion-android-search"></i>
                            </a>
                          </li>
                          <li className="d-none d-lg-inline-block">
                            <a
                              href="."
                              className="menu-btn toolbar-btn color--white"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRight"
                              aria-controls="offcanvasRight"
                            >
                              <i className="ion-android-menu"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Menu */}

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        {/* <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div> */}
        <div className="offcanvas-body p-4">
          {/* <div className="mobile-menu_wrapper" id="mobileMenu"> */}
          <div className="offcanvas-menu-inner">
            <div className="container">
              <a
                href="#"
                className="btn-close white-close_btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
              >
                <i className="ion-android-close"></i>
              </a>
              <div className="offcanvas-inner_logo">
                <Link to={"/"}>
                  <img
                    src="../images/logo-1.png"
                    alt="Header Logo"
                    style={{ maxWidth: "200px" }}
                  />
                </Link>
              </div>
              <nav className="offcanvas-navigation p-3">
                <ul className="mobile-menu">
                  <li className="menu-item-has-children active p-2">
                    <a href="#">
                      <span className="mm-text">Home</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children active p-2">
                    <a href="#">
                      <span className="mm-text">Products</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children active p-2">
                    <a href="#">
                      <span className="mm-text">Contact us</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children active p-2">
                    <a href="#">
                      <span className="mm-text">About Us</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children active p-2">
                    <a href="#">
                      <span className="mm-text">Home</span>
                    </a>
                  </li>
                  <li className="menu-item-has-children active p-2">
                    <a href="#">
                      <span className="mm-text">Home</span>
                    </a>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Shop</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Grid View</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop-fullwidth.html">
                              <span className="mm-text">Grid Fullwidth</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              <span className="mm-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              <span className="mm-text">Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Shop List</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop-list-fullwidth.html">
                              <span className="mm-text">Full Width</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left-sidebar.html">
                              <span className="mm-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right-sidebar.html">
                              <span className="mm-text">Right Sidebar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Single Product Style</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="single-product-gallery-left.html">
                              <span className="mm-text">Gallery Left</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-gallery-right.html">
                              <span className="mm-text">Gallery Right</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-tab-style-left.html">
                              <span className="mm-text">Tab Style Left</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-tab-style-right.html">
                              <span className="mm-text">Tab Style Right</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky-left.html">
                              <span className="mm-text">Sticky Left</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sticky-right.html">
                              <span className="mm-text">Sticky Right</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">Single Product Type</span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="single-product.html">
                              <span className="mm-text">Single Product</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-sale.html">
                              <span className="mm-text">Single Product Sale</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-group.html">
                              <span className="mm-text">Single Product Group</span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-variable.html">
                              <span className="mm-text">
                                Single Product Variable
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-affiliate.html">
                              <span className="mm-text">
                                Single Product Affiliate
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product-slider.html">
                              <span className="mm-text">Single Product Slider</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Blog</span>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children has-children">
                        <a href="blog-grid_view.html">
                          <span className="mm-text">Grid View</span>
                        </a>
                      </li>
                      <li className="menu-item-has-children has-children">
                        <a href="blog-list_view.html">
                          <span className="mm-text">List View</span>
                        </a>
                      </li>
                      <li className="menu-item-has-children has-children">
                        <a href="blog-details.html">
                          <span className="mm-text">Blog Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      <span className="mm-text">Pages</span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="my-account.html">
                          <span className="mm-text">About Us</span>
                        </a>
                      </li>
                      <li>
                        <a href="my-account.html">
                          <span className="mm-text">Contact</span>
                        </a>
                      </li>
                      <li>
                        <a href="my-account.html">
                          <span className="mm-text">My Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="login-register.html">
                          <span className="mm-text">Login | Register</span>
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html">
                          <span className="mm-text">Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <span className="mm-text">Cart</span>
                        </a>
                      </li>
                      <li>
                        <a href="checkout.html">
                          <span className="mm-text">Checkout</span>
                        </a>
                      </li>
                      <li>
                        <a href="compare.html">
                          <span className="mm-text">Compare</span>
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          <span className="mm-text">FAQ</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <span className="mm-text">Error 404</span>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="offcanvas-search_wrapper" id="searchBar">
        <div className="offcanvas-menu-inner">
          <div className="container">
            <a href="#" className="btn-close">
              <i className="ion-android-close"></i>
            </a>
            {/* <!-- Begin Offcanvas Search Area --> */}
            <div className="offcanvas-search">
              <form action="#" className="hm-searchbox">
                <input type="text" placeholder="Search for item..." />
                <button className="search_btn" type="submit">
                  <i className="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
            {/* <!-- Offcanvas Search Area End Here --> */}
          </div>
        </div>
      </div>
      {/* <div className="global-overlay"></div> */}
      {is_mini_cart && <div className="global-overlay overlay-open"></div>}
      {/* Mini cart Imp ---------- */}
      <div
        style={{ width: "400px" }}
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-body px-0 d-flex justify-content-center">
          <div
            className="offcanvas-minicart_wrapper1 d-flex justify-content-center"
            id="miniCart1"
            style={{ width: "400px" }}
          >
            <div className="offcanvas-menu-inner p-1" style={{ width: "90%" }}>
              <div className="minicart-content d-flex flex-column justify-content-between">
                <div className="minicart-heading  d-flex flex-row justify-content-between">
                  <h4 className="d-flex align-items-end">Shopping Cart</h4>
                  {/* <button
                    type="button"
                    id="btn-close"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i className="ion-android-close"></i>
                  </button> */}
                  {/* <a href="#" className="btn-close">
                    <i className="ion-android-close"></i>
                  </a> */}
                  <i
                    onClick={() => setis_mini_cart(!is_mini_cart)}
                    className="ion-android-close "
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ fontSize: "38px", height: "60px", width: "60px" }}
                  ></i>
                </div>
                <ul className="minicart-list p-3 justify-content-center">
                  {getData.length ? (
                    getData.map((Product) => (
                      <li className="minicart-product d-flex flex-row">
                        <div className="product-item_img">
                          <img
                            src={Product.image}
                            alt="Kenne's Product Image"
                            style={{ maxWidth: "120px" }}
                          />
                        </div>
                        <div
                          className="product-item_content d-flex flex-column px-3"
                          style={{ justifyContent: "center" }}
                        >
                          <a
                            className="product-item_title"
                            href="shop-left-sidebar.html"
                          >
                            {Product.title}
                          </a>
                          <span className="product-item_quantity">
                            {Product.quantity} x ₹{Product.price}
                          </span>
                        </div>
                        <Link className="product-item_remove" onClick={()=>dlt(Product.id)}>
                          <i className="ion-android-close"></i>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-center fs-4">
                        <img src="../images/empty_data.jpg" className="empty_data_img"/>
                        <p>No items in your cart</p>
                    </li>
                  )}
                </ul>
              </div>
              {getData.length ? (
                <div className="minicart-btn_area p-1">
                  <Link to="/cart" className="kenne-btn kenne-btn_fullwidth">
                    View More
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
              <div className="minicart-item_total d-flex flex-row justify-content-between p-2">
                <span>Subtotal</span>
                <span className="ammount">₹{price}</span>
              </div>
              <div className="minicart-btn_area p-1">
              <NavLink to={"/cart"}>
                <a  className="kenne-btn kenne-btn_fullwidth">
                  Minicart
                </a>
              </NavLink>
              </div>
              <div className="minicart-btn_area p-1">
              <NavLink to={"/checkout"}>
                <a className="kenne-btn kenne-btn_fullwidth">
                  Checkout
                </a>
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              id="btn-close"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ion-android-close"></i>
            </button>

            <div className="modal-body">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                id="btn-close"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ion-android-close"></i>
              </button>
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
