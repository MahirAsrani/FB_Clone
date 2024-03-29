import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { postLoginData } from "../services/authServices";

export default function Login({ fetchUser }) {
  const [inputs, setInputs] = useState({
    userEmail: "",
    userPassword: "",
  });

  const OnInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const LocalAuth = (e) => postLoginData(e, fetchUser, inputs);

  return (
    <>
      <div className="">
        <div className="container ">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className=" d-flex justify-content-center align-items-center row shadow-lg bg-body rounded w-100 login-panel">
              <div className="col-lg-6">
                <div className="p-3">
                  <div className="d-flex justify-content-center">
                    <img
                      className="logo"
                      alt="logo"
                      src="https://media-exp1.licdn.com/dms/image/C560BAQGjUZbDAenjbw/company-logo_200_200/0/1519888826511?e=2147483647&v=beta&t=sM05vxlPsnwreOwKwVd3W0Jd4RKx9NK7uJrUMVI2Rtw"
                    />
                  </div>
                  <div className="text-center mt-3  font-family fw-bolder">
                    <h3>Enter your details and Start</h3>
                  </div>
                  <div className="text-center font-family ">
                    <h3>your journey with us</h3>
                  </div>
                  <div className="text-center font-family my-4 text-muted">
                    Dont't stop you're proud
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-6">
                <form method="POST">
                  <div className="p-3">
                    <h3 className=" text-center font-family fw-bolder">
                      Login or Create New Account
                    </h3>
                    <input
                      type="email"
                      name="userEmail"
                      className="form-control border-0 border-bottom  mt-5"
                      onChange={(e) => OnInputChange(e)}
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      title="email-id"
                    />
                    <input
                      type="password"
                      className="form-control border-0 border-bottom   mt-5"
                      name="userPassword"
                      onChange={(e) => OnInputChange(e)}
                      id="exampleFormControlInput1"
                      placeholder="Password"
                      title="password"
                    />

                    <div className="text-center d-grid gap-1 mt-5">
                      <button
                        title="login-btn"
                        type="submit"
                        onClick={LocalAuth}
                        className="btn btn-lg px-5  mt-3 rounded-pill signup-btn-clr font-family fw-bolder font-size"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </>
  );
}
