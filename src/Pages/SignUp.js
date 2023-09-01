import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    first_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const [password, setPassword] = useState({
    password: "",
    cfmpassword: "",
  });

  useEffect(() => {
    console.log(password);
    if (password.password !== password.cfmpassword) {
      document.getElementById("message").innerHTML =
        "Passwords are not matching";
      document.getElementById("message").style.color = "red";
    } else {
      document.getElementById("message").innerHTML = "";
    }
  }, [password]);

  const handleChange = (e, property) => {
    console.log(userDetails);
    setUserDetails({ ...userDetails, [property]: e.target.value });
  };

  const handleChange2 = (e, property) => {
    setPassword({ ...password, [property]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.password !== password.cfmpassword) {
      toast.error("password are not matching");
    } else {
      axios
        .post(
          "https://fantom-server.onrender.com/api/auth/local/register",
          userDetails
        )
        .then((resp) => {
          console.log(resp);
          console.log("User registered successfully");
          toast.success("User registered successfully");

          setUserDetails({
            username: "",
            first_name: "",
            email: "",
            password: "",
          });
          setPassword({ password: "", cfmpassword: "" });
          navigate("?#");
        })
        .catch((error) => {
          console.log(error);
          console.log("Error log");
          setError({
            errors: error,
            isError: true,
          });
          let error1 = error.response.data.error.message;
          toast.error(`${error1}`);
        });
    }
  };
  return (
    <div>
      <div className="kenne-login-register_area">
        <div className="container">
          <div className="col-sm-12 col-md-12  col-xs-12">
            <form action="#" onSubmit={handleSubmit}>
              <div className="login-form">
                <h4 className="login-title">Register</h4>
                <div className="row">
                  <div className="col-md-6 col-12 mb--20">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={userDetails.first_name}
                      onChange={(e) => handleChange(e, "first_name")}
                    />
                  </div>
                  <div className="col-md-6 col-12 mb--20">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={userDetails.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={userDetails.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={userDetails.password}
                      onChange={(e) => {
                        handleChange2(e, "password")
                        handleChange(e, "password")
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={password.cfmpassword}
                      onChange={(e) => handleChange2(e, "cfmpassword")}
                    />
                  </div>
                  <span id="message"></span>
                  <div className="col-12">
                    <button
                      style={{ width: "100%" }}
                      className="kenne-register_btn"
                      type="submit"
                    >
                      Register
                    </button>
                    <h6 className="text-center p-3">Or</h6>
                    <Link to={"?#"} id="login-button">
                      <button
                        style={{ width: "100%" }}
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        className="kenne-register_btn"
                      >
                        Login
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
  );
}

export default SignUp;
