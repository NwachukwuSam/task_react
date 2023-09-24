  
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    const isValidEmail = (email) => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/;
      return passwordRegex.test(password);
    };

    if (!email) {
      formErrors.email = "* Email is required";
    } else if (!isValidEmail(email)) {
      formErrors.email = "* Invalid email address, e.g., example@gmail.com";
    }

    if (!password) {
      formErrors.password = "* Password is required";
    } else if (!isValidPassword(password)) {
      formErrors.password =
        "* Password must be 8 to 20 characters and contain at least one letter and one number";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
       navigate("/welcome");
    }
  };

  return (
    <div className="h-[500px] pt-8 w-full bg-white">
      <div className="bg-white h-[400px] w-[800px] flex shadow-blue-500 shadow-lg ml-[300px] rounded-xl">
        <img src={logo} alt="logo" className="h-[200px] mr-[400px] mt-[55px]" />
        <div className="">
          <div className="form-container">
            <div className="mb-[10px] mt-[80px] ml-[-250px]">
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-[10px] border-[2px] px-3 py-3 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="error-container ml-[-250px]">
              <p className="error text-red-600">{errors.email}</p>
            </div>
          </div>

          <div>
            <div className="mb-[10px] ml-[-250px]">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-[10px] border-[2px] px-3 py-3 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="error-container ml-[-250px]">
              <p className="error text-red-600">{errors.password}</p>
            </div>
          </div>

          <div>
            <button
              className="bg-lime-400 text-white px-11 py-3 ml-[-210px] mt-5 rounded-lg hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

