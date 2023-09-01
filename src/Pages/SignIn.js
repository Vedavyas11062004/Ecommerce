import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();

  const [data,setData]= useState({
    identifier: '',
    password:''
  })

  const handleChange=(e,property)=>{
    console.log(data)
    setData({...data,[property]:e.target.value})
  }

  

  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post('https://fantom-server.onrender.com/api/auth/local',data).then((resp)=>{
      console.log(resp)
      let jwt = resp.data.jwt;
      localStorage.setItem('jwt',`Bearer ${jwt}`);
      let userId = resp.data.user.id;
      localStorage.setItem('user_id',userId);
      const response = resp.data;
      toast.success("Login successful")
      navigate('/')
    }).catch((error)=>{
      console.log('error log')
      console.log(error)
      let error1= error.response.data.error.message;
      toast.error(`${error1}`)
    })
  }
  return (
    <div>
      <div className="kenne-login-register_area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xs-12 ">
              <form action="#" onSubmit={handleSubmit}>
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-md-12 col-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" value={data.identifier} onChange={(e)=>handleChange(e,'identifier')}/>
                    </div>
                    <div className="col-12 mb--20">
                      <label>Password</label>
                      <input type="password" placeholder="Password" value={data.password} onChange={(e)=>handleChange(e,'password')}/>
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label for="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="forgotton-password_info">
                        <a href="#"> Forgot password?</a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        style={{ width: "100%" }}
                        className="kenne-login_btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <h6 className="text-center p-3">Or</h6>
                      <Link to={"?#"} id="login-button">
                        <button
                          style={{ width: "100%" }}
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                          className="kenne-register_btn"
                        >
                          Register
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
