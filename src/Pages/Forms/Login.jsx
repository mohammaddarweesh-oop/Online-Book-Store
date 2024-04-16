import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const notify = () => toast("Wrong data entered!");
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return toast.warning("Email Is Required");
    }
    if (password.trim() === "") {
      return toast.warning("Password Is Required");
    }
    console.log(email, " ", password);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />;
      <h1 className="form-title">Login To Your Account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="passw"
        />
        {showPassword ? (
          <i
            className="bi bi-eye-slash-fill show-password"
            onClick={showPasswordHandler}
          ></i>
        ) : (
          <i
            className="bi bi-eye-fill show-password"
            onClick={showPasswordHandler}
          ></i>
        )}

        <input type="submit" value="login" className="form-btn" />
        <div className="form-footer">
          Dont Have An Account
          <Link to={"/Register"} className="forms-link">
            register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
