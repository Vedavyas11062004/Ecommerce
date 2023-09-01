import React,{useEffect, useState} from "react";
import Breadcrumb from "./Breadcrumb";
import Orders from './OrderData'

function Account() {

  const [orders,setOrders] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = orders.slice(firstIndex, lastIndex);
    console.log(records)
    const npage = Math.ceil(orders.length / recordsPerPage);
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

    useEffect(()=>{
      setOrders(Orders)
      console.log(orders);
    },[Orders])

  return (
    <div>
      <Breadcrumb name={"My Account"} />
      <div class="account-page-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <ul
                class="nav myaccount-tab-trigger"
                id="account-page-tab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="account-dashboard-tab"
                    data-bs-toggle="tab"
                    href="#account-dashboard"
                    role="tab"
                    aria-controls="account-dashboard"
                    aria-selected="true"
                  >
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="account-orders-tab"
                    data-bs-toggle="tab"
                    href="#account-orders"
                    role="tab"
                    aria-controls="account-orders"
                    aria-selected="false"
                  >
                    Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="account-address-tab"
                    data-bs-toggle="tab"
                    href="#account-address"
                    role="tab"
                    aria-controls="account-address"
                    aria-selected="false"
                  >
                    Addresses
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="account-details-tab"
                    data-bs-toggle="tab"
                    href="#account-details"
                    role="tab"
                    aria-controls="account-details"
                    aria-selected="false"
                  >
                    Account Details
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="account-logout-tab"
                    href="login-register.html"
                    role="tab"
                    aria-selected="false"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-9">
              <div
                class="tab-content myaccount-tab-content"
                id="account-page-tab-content"
              >
                <div
                  class="tab-pane fade show active"
                  id="account-dashboard"
                  role="tabpanel"
                  aria-labelledby="account-dashboard-tab"
                >
                  <div class="myaccount-dashboard">
                    <p>
                      Hello <b>Edwin Adams</b> (not Edwin Adams?{" "}
                      <a href="login-register.html">Sign out</a>)
                    </p>
                    <p>
                      From your account dashboard you can view your recent
                      orders, manage your shipping and billing addresses and{" "}
                      <a href="javascript:void(0)">
                        edit your password and account details
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="account-orders"
                  role="tabpanel"
                  aria-labelledby="account-orders-tab"
                >
                  <div class="myaccount-orders">
                    <h4 class="small-title">MY ORDERS</h4>
                    <hr/>
                      {orders.length?(
                    <div class="table-responsive">
                      <table class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>ORDER</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                            <th>TOTAL</th>
                            <th></th>
                          </tr>
                          </thead>
                          <tbody>
                      {orders.length&&records.map((order,key)=>{
                        return(
                          <tr key={key}>
                            <td>
                              <a
                                class="account-order-id"
                                href="javascript:void(0)"
                              >
                                #{order.id}
                              </a>
                            </td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                            <td>₹{order.total} for {order.quantity} items</td>
                            <td>
                              <a
                                href="javascript:void(0)"
                                class="kenne-btn kenne-btn_sm"
                              >
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                        )
                          })}
                        </tbody>
                      </table>
                      { orders.length&&
                <div className="row mb-4">
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
                      ):
                      (<div className="text-center fs-4">
                        <img src="../images/empty_data.jpg" className="empty_data_img"/>
                        <p>No orders yet</p>
                        </div>)}
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="account-address"
                  role="tabpanel"
                  aria-labelledby="account-address-tab"
                >
                  <div class="myaccount-address">
                    <p>
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <div class="row">
                      <div class="col">
                        <h4 class="small-title">Billing Adress</h4>
                        <address>
                          1234 Heaven Stress, Beverly Hill OldYork UnitedState
                          of Lorem
                        </address>
                      </div>
                      <div class="col">
                        <h4 class="small-title">Shipping Address</h4>
                        <address>
                          1234 Heaven Stress, Beverly Hill OldYork UnitedState
                          of Lorem
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="account-details"
                  role="tabpanel"
                  aria-labelledby="account-details-tab"
                >
                  <div class="myaccount-details">
                    <form action="#" class="kenne-form">
                      <div class="kenne-form-inner">
                        <div class="single-input single-input-half">
                          <label for="account-details-firstname">
                            First Name*
                          </label>
                          <input type="text" id="account-details-firstname" />
                        </div>
                        <div class="single-input single-input-half">
                          <label for="account-details-lastname">
                            Last Name*
                          </label>
                          <input type="text" id="account-details-lastname" />
                        </div>
                        <div class="single-input">
                          <label for="account-details-email">Email*</label>
                          <input type="email" id="account-details-email" />
                        </div>
                        <div class="single-input">
                          <label for="account-details-oldpass">
                            Current Password(leave blank to leave unchanged)
                          </label>
                          <input type="password" id="account-details-oldpass" />
                        </div>
                        <div class="single-input">
                          <label for="account-details-newpass">
                            New Password (leave blank to leave unchanged)
                          </label>
                          <input type="password" id="account-details-newpass" />
                        </div>
                        <div class="single-input">
                          <label for="account-details-confpass">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="account-details-confpass"
                          />
                        </div>
                        <div class="single-input">
                          <button
                            class="kenne-btn kenne-btn_dark"
                            type="submit"
                          >
                            <span>SAVE CHANGES</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
