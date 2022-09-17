import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";


// const Register = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//    const [login, setlogin] = useState(false);
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     birthday: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: "Username",
//       pattern: "^[A-Za-z0-9]{3,16}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "birthday",
//       type: "date",
//       placeholder: "Birthday",
//       label: "Birthday",
//     },
//     {
//       id: 4,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
//       required: true,
//     },
//     {
//       id: 5,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       errorMessage: "Passwords don't match!",
//       label: "Confirm Password",
//       pattern: values.password,
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

 
 

//   // const username = localStorage.getItem("email")
//   //   ? localStorage.getItem("email")
//   //   : "admin@admin.com";
//   // const userPassword = localStorage.getItem("password")
//   //   ? localStorage.getItem("password")
//   //   : "admin";



//   return (
//     <>
//       <div class="container-fluid ps-md-0">
//         <div class="row g-0">
//           <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
//           <div class="col-md-8 col-lg-6">
//             <div class="login d-flex align-items-center py-5">
//               <div class="container">
//                 <div class="row">
//                   <div class="col-md-9 col-lg-8 mx-auto">
//                     {login ? (
//                       <div>
//                         <h3 class="login-heading mb-4">Login</h3>
//                         <div class="form-floating mb-3">
//                           <input
//                             type="email"
//                             class="form-control"
//                             id="floatingInput"
//                             placeholder="name@example.com"
//                             value={email}
//                             onChange={handleEmailChange}
//                           />
//                           <label for="floatingInput">Email address</label>
//                           {emailError && (
//                             <div className="error-msg">{emailError}</div>
//                           )}
//                         </div>

//                         <div class="form-floating mb-3">
//                           <input
//                             type="password"
//                             class="form-control"
//                             id="floatingPassword"
//                             placeholder="Password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                             autocomplete="off"
//                           />
//                           <label for="floatingPassword">Password</label>

//                           {passwordError && (
//                             <div className="error-msg">{passwordError}</div>
//                           )}
//                         </div>

//                         <div class="d-grid">
//                           <button
//                             class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
//                             type="submit"
//                             onClick={handleSubmit}
//                           >
//                             Sign in
//                           </button>
//                         </div>
//                         <p id="logintxt">
//                           Don't have an Account , Want to{" "}
//                           <button href="" onClick={() => setlogin(false)}>
//                             Register
//                           </button>
//                         </p>
//                       </div>
//                     ) : (
//                       // ----------------------------------------------
//                       <div>
//                         <h3 class="login-heading mb-4">Register</h3>
//                         <div class="form-floating mb-3">
//                           {inputs.map((input) => (
//           <FormInput
//             key={input.id}
//             {...input}
//             value={values[input.name]}
//             onChange={onChange}
//           />
//         ))}
                            
//                         </div>

//                         <div class="d-grid">
//                           <button
//                             class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
//                             type="submit"
//                             onClick={handleSubmit}
//                           >
//                             Register
//                           </button>
//                         </div>
//                         <p id="logintxt">
//                           Already have an Account , Want to{" "}
//                           <button href="" onClick={() => setlogin(true)}>
//                             Login
//                           </button>
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
