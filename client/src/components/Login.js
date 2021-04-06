import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import '../assets/scss/coverpage.scss';


function LoginForm(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    console.log(formState)
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <div id="formContent">
      <h2 className="active"> Sign In </h2>

      <form onSubmit={handleFormSubmit}>
          <input
            name="email"
            id="email"
            type="email" 
            className="sign-input" 
            placeholder="login" 
            onChange={handleChange}
            required
          />
          <input
            className="sign-input"
            placeholder="password" 
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            required
          />
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <input 
              type="submit" 
              className="login-btn" 
              value="Log In" 
              // onSubmit={this.handleSubmit}
            />
      </form>
        <div id="formFooter">
              <p>Don't have an account?</p>
              <Link 
                className="underlineHover" 
                to={"/Register"}>Sign up</Link>
      
            </div>
      </div>
    </div>
  );
}

export default LoginForm;
