import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD, LIKE } from "../redux/actions/action";
import { NavLink } from "react-router-dom";
import '../styles/productsStyles.css';

function Products() {
  const [view, setview] = useState("grid gridview-3");
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

  const [sortBy, setSortBy] = useState("1");

  const dispatch = useDispatch();

  const send = (p) => {
    // console.log(p);
    dispatch(ADD(p));
  };

  const like = (p) => {
    // console.log(p);
    dispatch(LIKE(p));
  };

  useEffect(() => {
    getData();
  }, []);

  //Function for Rating 
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="ion-ios-star" key={i}></i>);
    }

    if (hasHalfStar) {
      stars.push(<i className="ion-ios-star-half" key={fullStars}></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i className="ion-ios-star-outline" key={fullStars + i + 1}></i>
      );
    }

    return <ul className="rating-box">{stars}</ul>;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <div className="kenne-content_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-toolbar">
                <div className="product-view-mode">
                  <a
                    className="active grid-3"
                    data-target="gridview-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Grid View"
                    onClick={() => setview("grid gridview-3")}
                  >
                    <i className="fa fa-th"></i>
                  </a>
                  <a
                    className="list"
                    data-target="listview"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="List View"
                    onClick={() => setview("listview")}
                  >
                    <i className="fa fa-th-list"></i>
                  </a>
                </div>
                <div className="product-page_count">
                  <p>
                    Showing {products.length === 0 ? 0 : firstIndex + 1}–
                    {lastIndex <= products.length ? lastIndex : products.length}{" "}
                    of {products.length} results
                  </p>
                </div>
                <div className="product-item-selection_area">
                  <div className="product-short">
                    <label className="select-label">Sort By:</label>
                    <select className="nice-select myniceselect" value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}>
                      <option value="1">Default sorting</option>
                      <option value="2">Name, A to Z</option>
                      <option value="3">Name, Z to A</option>
                      <option value="4">Price, low to high</option>
                      <option value="5">Price, high to low</option>
                      <option value="5">Rating (Highest)</option>
                      <option value="5">Rating (Lowest)</option>
                      <option value="5">Model (A - Z)</option>
                      <option value="5">Model (Z - A)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`shop-product-wrap row ${view}`}>
                {records.length > 0 ? (
                  records
                    .sort((a, b) => {
                      switch (sortBy) {
                        case "1":
                          return a.id - b.id; // Default sorting by ID
                        case "2":
                          return a.title.localeCompare(b.title); // Sort by name, A to Z
                        case "3":
                          return b.title.localeCompare(a.title); // Sort by name, Z to A
                        case "4":
                          return a.price - b.price; // Sort by price, low to high
                        case "5":
                          return b.price - a.price; // Sort by price, high to low
                        case "6":
                          return b.rating - a.rating; // Sort by rating, highest first
                        case "7":
                          return a.rating - b.rating; // Sort by rating, lowest first
                        case "8":
                          return a.model.localeCompare(b.model); // Sort by model, A to Z
                        case "9":
                          return b.model.localeCompare(a.model); // Sort by model, Z to A
                        default:
                          return a.id - b.id; // Default sorting by ID
                      }
                    })
                    .map((product, i) => (
                    <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                      <div className="product-item">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html">
                              <NavLink to={`/product/${product.id}`}>
                                <img
                                  className="primary-img"
                                  src={product.image}
                                  alt="product "
                                />
                                <img
                                  className="secondary-img"
                                  src={product.image2}
                                  alt="product "
                                />
                              </NavLink>
                            </a>
                            <span className="sticker">-15%</span>
                            <div className="add-actions">
                              <ul>
                                <li
                                  className="quick-view-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                >
                                  <a
                                    href="/"
                                    data-bs-toggle="tooltip"
                                    data-placement="right"
                                    title="Quick View"
                                  >
                                    <i className="ion-ios-search"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    onClick={() => like(product)}
                                    data-bs-toggle="tooltip"
                                    data-placement="right"
                                    title="Add To Wishlist"
                                  >
                                    <i className="ion-ios-heart-outline"></i>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    onClick={() => send(product)}
                                    data-bs-toggle="tooltip"
                                    data-placement="right"
                                    href="/cart"
                                    title="Add To cart"
                                  >
                                    <i className="ion-bag"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <div className="product-desc_info">
                              <h3 className="product-name">
                                <a href="single-product.html">
                                  {product.title}
                                </a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">
                                  ₹{product.price}
                                </span>
                                <span className="old-price">
                                  ₹{product.actualprice}
                                </span>
                              </div>
                              <div className="pt-1">
                                {product.quantity > 0 ? (
                                  <h6 className="text-success text-center">
                                    In Stock
                                  </h6>
                                ) : (
                                  <h6 className="text-danger text-center">
                                    Out of Stock
                                  </h6>
                                )}
                              {/* <div className="rating-box">
                                {renderStarRating(product.rating)}
                              </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-product_item">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="single-product.html">
                              <img src={product.image} alt="product " />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="product-desc_info">
                              <div className="price-box">
                                <span className="new-price">
                                  ₹{product.price}
                                </span>
                                <span className="old-price">
                                 <s>₹{product.actualprice}</s> 
                                </span>
                              </div>
                              <h6 className="product-name">
                                <a href="single-product.html">
                                  {product.title}
                                </a>
                              </h6>
                              <div className="product-short_desc">
                                <p>{product.description}</p>
                              </div>
                            </div>
                            <div className="add-actions">
                              <ul>
                                <li
                                  className="quick-view-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalCenter"
                                >
                                  <a
                                    href="/"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Quick View"
                                  >
                                    <i className="ion-ios-search"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Add To Wishlist"
                                  >
                                    <i className="ion-ios-heart-outline"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="compare.html"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Add To Compare"
                                  >
                                    <i className="ion-ios-reload"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/cart"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title="Add To cart"
                                  >
                                    <i className="ion-bag"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center">Loading...</div>
                )}
              </div>
              {products.length&&
              <div className="row">
                <div className="col-lg-12">
                  <div className="kenne-paginatoin-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="kenne-pagination-box primary-color">
                          <li>
                            <a className="Prev" href="#" onClick={prePage}>
                              Prev
                            </a>
                          </li>
                          {/* <li className="active">
                            <a href="#">1</a>
                          </li> */}
                          {numbers.map((n, i) => (
                            <li
                              className={`${
                                currentPage === n ? "active " : ""
                              }`}
                              key={i}
                            >
                              <a href="#" onClick={() => changeCPage(n)}>
                                {n}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a className="Next" href="#" onClick={nextPage}>
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
