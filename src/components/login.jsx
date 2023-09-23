import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png"



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate;
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formErrors ={};

        const isValidEmail = (email) => {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailRegex.test(email);
        };
    
        const isValidPassword = (password) => {
          const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/;
          return passwordRegex.test(password);
        };

        if (!email) {
            formErrors.email = "*Email is required";
          } else if (!isValidEmail(email)) {
            formErrors.email = "*Invalid email address i.e example@gmail.com";
          }
          if (!password) {
            formErrors.password = "*Password is required";
          } else if (!isValidPassword(password)) {
            formErrors.password =
              "* password must be minimum of 8 characters, must contain a number and must not be greater than 20 characters";
          }
          if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
          } else {
            navigate("/welcome")
          }

    }
    
    return (
      <div className="h-[500px] pt-8 w-full bg-white"> 

        <div className="bg-white h-[400px] w-[800px] flex shadow-blue-500 shadow-lg ml-[300px] rounded-xl">
            <img src={logo} alt="logo" className="h-[200px] mr-[400px] mt-[55px]" />
            <div className=" ">
                <div className="form-container">
                    <label htmlFor="email"></label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="example@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className={`email mb-[10px] mt-[80px] rounded-[10px] border-[2px] px-3 py-3 ml-[-250px] ${errors.email ? "input-error" : ""}`}
                        />
                        <div className="error-container ">
                            <p className="error  text-red-600 ml-[-950] mt-[10px]">{errors.email}</p>
                        </div>
                    
                </div>

                <div>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={` password rounded-[10px] border-[2px] px-3 py-3 ml-[-250px] ${
                        errors.password ? "input-error" : ""
                        }`}
                    />
                    <div className="error-container">
                        <p className="error text-red-600 ml-[-950] mt-[10px]">{errors.password}</p>
                    </div>
                    
                </div>
                    <div>
                        <button
                        className=" bg-lime-400 text-white px-11 py-3 ml-[-210px] mt-5 rounded-lg"
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
  

    {/* <div className="text-center">
            <form onSubmit={handleSubmit}>
                <div className="email">
                <input className="rounded-[10px] border-[2px] px-3 py-3 ml-[-250px] max-w-xs"
                    type="text"
                    id="email" 
                    value={email}
                    onChange={handChangeEmail}
                    placeholder="example@gmail.com"
                />
                </div>
                <div className="password">
                <input className="rounded-[10px] border-[2px] px-3 py-3 ml-[-250px] max-w-xs mt-10"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="Enter your password"
                ></input>
                </div>
            </form> */}