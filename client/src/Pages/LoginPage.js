import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setlogin] = useState(false);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const username = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Invalid email");
      }
    } else {
      setEmailError("Email field is empty, please enter email");
    }

    if (password !== "") {
      //
    } else {
      setPasswordError("Password required");
    }

    if (email === username && password === userPassword) {
      alert("Login success");
      navigate("/sidebar");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <div class="container-fluid ps-md-0">
        <div class="row g-0">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    {login ? (
                      <div>
                        <h3 class="login-heading mb-4">Login</h3>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleEmailChange}
                          />
                          <label for="floatingInput">Email address</label>
                          {emailError && (
                            <div className="error-msg">{emailError}</div>
                          )}
                        </div>

                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            autocomplete="off"
                          />
                          <label for="floatingPassword">Password</label>

                          {passwordError && (
                            <div className="error-msg">{passwordError}</div>
                          )}
                        </div>

                        <div class="d-grid">
                          <button
                            class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Sign in
                          </button>
                        </div>
                        <p id="logintxt">
                          Don't have an Account , Want to{" "}
                          <a
                            href="javascript:void(0)"
                            onClick={() => setlogin(false)}
                          >
                            Register
                          </a>
                        </p>
                      </div>
                    ) : (
                      // ----------------------------------------------
                      <div>
                        <h3 class="login-heading mb-4">Register</h3>
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleEmailChange}
                          />
                          <label for="floatingInput">Email address</label>
                          {emailError && (
                            <div className="error-msg">{emailError}</div>
                          )}
                        </div>

                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            autocomplete="off"
                          />
                          <label for="floatingPassword">Password</label>

                          {passwordError && (
                            <div className="error-msg">{passwordError}</div>
                          )}
                        </div>

                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            autocomplete="off"
                          />
                          <label for="floatingPassword">Confirm Password</label>

                          {passwordError && (
                            <div className="error-msg">{passwordError}</div>
                          )}
                        </div>

                        <div class="d-grid">
                          <button
                            class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                        <p id="logintxt">
                          Already have an Account , Want to{" "}
                          <a
                            href="javascript:void(0)"
                            onClick={() => setlogin(true)}
                          >
                            Login
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
