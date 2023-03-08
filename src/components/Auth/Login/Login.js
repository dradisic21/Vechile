import React, { useState } from "react";
import "./Login.css";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../../VehicleApi";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //submit forms and response api, errors
  const submitForm = (e, data) => {
    e.preventDefault();

    login(username, password)
      .then((response) => {
        setUserName(username);
        navigate("/vehiclelist");
      })
      .catch(() => {
        console.log("Invalid credentials");
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitForm}>
        <p className="text-form">LOGIN</p>
        <div className="input-form">
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
            input="true"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            input="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-form">
          <Button className="button" type="submit" name="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
