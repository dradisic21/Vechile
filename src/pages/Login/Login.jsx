import React from "react";
import { login } from "../../common/Services/LoginApi";
import { Input, Button } from "../../components/UI";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import loginFormStore from "../../stores/LoginFormStore";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    loginFormStore.validateForm();

    if (loginFormStore.validation.passes()) {
      try {
        const response = await login(loginFormStore.username, loginFormStore.password);
        navigate("/vehiclelist");
      } catch (err) {
        loginFormStore.setError(err);
      }
    }
  };

  return (
    <div className="login-container">
      {loginFormStore.error && (
        <div className="error-message">{loginFormStore.error}</div>
      )}
      <form className="login-form" onSubmit={submitForm}>
        <p className="text-form">LOGIN</p>
        <div className="input-form">
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
            input="true"
            value={loginFormStore.username}
            onChange={(e) => loginFormStore.setUsername(e.target.value)}
          />
          {loginFormStore.validation.errors.has('username') && (
            <div className="error-message">{loginFormStore.validation.errors.first('username')}</div>
          )}
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            input="true"
            value={loginFormStore.password}
            onChange={(e) => loginFormStore.setPassword(e.target.value)}
          />
          {loginFormStore.validation.errors.has('password') && (
            <div className="error-message">{loginFormStore.validation.errors.first('password')}</div>
          )}
        </div>
        <div className="button-form">
          <Button className="button" type="submit" name="Login" />
        </div>
      </form>
    </div>
  );
};

export default observer(Login);
