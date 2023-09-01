import React,{useState,useEffect} from "react";
import Breadcrumb from "./Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DISLIKE } from "../redux/actions/action";
import { Link } from "react-router-dom";

function WishList() {
  // const [products,setProducts]=useState([]);
  // const getData=()=>{
  //   fetch('./Products.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setProducts(myJson.products)
  //     }).catch(
  //       (err)=>{
  //         console.log(err)
  //       }
  //     )
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  const dispatch = useDispatch();
  const getData = useSelector((state)=> state.cartreducer.wishlist);

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };
 
  const dlt = (id) => {
    dispatch( DISLIKE(id));
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = getData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(getData.length / recordsPerPage);
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
      <Breadcrumb name={"Wishlist"} />
      <div className="kenne-wishlist_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
                { getData.length ? (
              <form action="j/">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="kenne-product_remove">remove</th>
                        <th className="kenne-product-thumbnail">images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="kenne-product-price">Unit Price</th>
                        <th className="kenne-product-stock-status">Stock Status</th>
                        <th className="kenne-cart_btn">add to cart</th>
                      </tr>
                    </thead>
                    <tbody>
                  { records.map((product)=>{
                    return(<>
                      <tr >
                        <td className="kenne-product_remove">
                          <a onClick={()=>dlt(product.id)}>
                            <i className="fa fa-trash" title="Remove"></i>
                          </a>
                        </td>
                        <td className="kenne-product-thumbnail">
                          <a href="j/">
                            <img
                              src={product.image}
                              alt="Kenne's Wishlist Thumbnail"
                              style={{ maxWidth: "12vw" }}
                            />
                          </a>
                        </td>
                        <td className="kenne-product-name">
                          <a href="j/">{product.title}</a>
                        </td>
                        <td className="kenne-product-price">
                          <span className="amount">₹{product.price}</span>
                        </td>
                        <td className="kenne-product-stock-status">
                          {
                            product.inStock?(
                          <span className="in-stock">In Stock</span>
                            ):(
                              <span className="in-stock">Out of Stock</span>
                            )
                          }
                        </td>
                        <td className="kenne-cart_btn">
                          {
                            product.inStock?(
                              <a onClick={()=>send(product)}>Add to Cart</a>
                            ):(
                              <a href="j/">Notify Me</a>
                            )
                          }                          
                        </td>
                      </tr>
                      </>)})
                
                  }
                    </tbody>
                  </table>
                </div>
              </form>):(
                    <div className="text-center fs-4">
                    <img src="../images/empty_data.jpg" className="empty_data_img"/>
                    <p>Add Items to your wishlist</p>
                    </div>
                  )
                }
            </div>
          </div>
        </div>
        { getData.length&&
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
              </div>}
      </div>
    </div>
  );
}

export default WishList;
