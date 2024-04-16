import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  // const notify = () => toast("Wrong data entered!");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      return toast.warning("Email Is Required");
    }
    if (userName.trim() === "") {
      return toast.warning("User Name Is Required");
    }
    if (password.trim() === "") {
      return toast.warning("Password Is Required");
    }
    console.log(email, " ", password);
    // setEmail("");
    // setPassword("");
    // setUserName("");
    toast.success("Success Registeration");
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">Create New Account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type={"password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Register" className="form-btn" />
        <div className="form-footer">
          Already Have An Account
          <Link to={"/Login"} className="forms-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
