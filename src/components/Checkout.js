import React,{useState,useEffect} from "react";
import Breadcrumb from "../Pages/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form"

function Checkout() {
  

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

  // const [total,setTotal]=useState(0)
  // //whenever products details changes total changes
  // useEffect(()=>{
  //   let total1=0;
    
  //   products.map((Product,key)=>{
  //     total1+= Product.price * Product.quantity;
  //     console.log(total1)
  //   })
  //   total1=total1.toFixed(2);
  //   setTotal(total1);
    
  // },[products])


  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);        //Billing details 
  };
   
  const cartData = useSelector((state) => state.cartreducer.carts);
  const getData = cartData?.filter(item => item.inStock) ?? [];
  
  
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

  return (
    <div>
      <Breadcrumb name={"Checkout"} />
      <div className="checkout-area">
      {getData.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <form onSubmit={handleSubmit(onSubmit)} action="/">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select clearfix">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <select className="myniceselect nice-select wide"  {...register("country")}>
                          <option data-display="Bangladesh">India</option>
                          <option value="uk">London</option>
                          <option value="rou">Romania</option>
                          <option value="fr">French</option>
                          <option value="de">Germany</option>
                          <option value="aus">Australia</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input placeholder="" type="text" {...register("firstName")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input placeholder="" type="text" {...register("lastName")} />
                      </div>
                    </div>
                    {/* <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input placeholder="" type="text" />
                      </div>
                    </div> */}
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input placeholder="Street address" type="text" {...register("address")}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          placeholder="Apartment, suite, unit etc. (optional)"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" {...register("city")}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State / Country <span className="required">*</span>
                        </label>
                        <input placeholder="" type="text" {...register("state")}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input placeholder="" type="text" {...register("postCode")}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input placeholder="" type="email" {...register("email")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" {...register("phone")} />
                      </div>
                    </div>
                    {/* <div className="col-md-12">
                      <div className="checkout-form-list create-acc">
                        <input id="cbox" type="checkbox" />
                        <label>Create an account?</label>
                      </div>
                      <div
                        id="cbox-info"
                        className="checkout-form-list create-account"
                      >
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <label>
                          Account password <span className="required">*</span>
                        </label>
                        <input placeholder="password" type="password" />
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="different-address">
                    <div className="ship-different-title">
                      <h3>
                        <label>Ship to a different address?</label>
                        <input id="ship-box" type="checkbox" />
                      </h3>
                    </div>
                    <div id="ship-box-info" className="row">
                      <div className="col-md-12">
                        <div className="myniceselect country-select clearfix">
                          <label>
                            Country <span className="required">*</span>
                          </label>
                          <select className="nice-select myniceselect wide">
                            <option data-display="Bangladesh">
                              Bangladesh
                            </option>
                            <option value="uk">London</option>
                            <option value="rou">Romania</option>
                            <option value="fr">French</option>
                            <option value="de">Germany</option>
                            <option value="aus">Australia</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Company Name</label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input placeholder="Street address" type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            placeholder="Apartment, suite, unit etc. (optional)"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input placeholder="" type="email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="order-notes">
                      <div className="checkout-form-list checkout-form-list-2">
                        <label>Order Notes</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                        ></textarea>
                      </div>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12 d-flex align-items-center">
             
              <div className="your-order">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                  <table
                    className="table table-secondary"
                    style={{ backgroundColor: "red" }}
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="cart-product-name">Product</th>
                        <th className="cart-product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getData.map((product)=>{
                        return(
                        product.inStock&&(
                        <tr className="cart_item">
                        <td className="cart-product-name text-center">
                          {" "}
                          {product.title}
                          <strong className="product-quantity"> × {product.quantity}</strong>
                        </td>
                        <td className="cart-product-total text-center">
                          <span className="amount">₹{(product.quantity*product.price).toFixed(2)}</span>
                        </td>
                      </tr>))
                      })}                      
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td className="text-center">
                          <span className="amount">₹{price}</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td className="text-center">
                          <strong>
                            <span className="amount">₹{price}</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="#payment-1">
                          <h5 className="panel-title">
                            <a
                              href="javascript:void(0)"
                              className=""
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Direct Bank Transfer.
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="#payment-2">
                          <h5 className="panel-title">
                            <a
                              href="javascript:void(0)"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Cheque Payment
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="#payment-3">
                          <h5 className="panel-title">
                            <a
                              href="javascript:void(0)"
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              PayPal
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment">
                      <input onClick={handleSubmit(onSubmit)} value="Place order" type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ):(
          <div className="text-center d-flex justify-content-center align-items-center p-4 fs-3" >No items in your Checkout</div>
        )
        }
      </div>
    </div>
  );
}
export default Checkout;
