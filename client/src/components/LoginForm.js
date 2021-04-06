import React from "react";
import '../assets/scss/coverpage.scss';
import { Link } from "react-router-dom";
import SignUp from "../pages/Register";

class LoginForm extends React.Component{

  handleChange =(e) => {
    const {name, value} = e.target
    this.setState({ [name]:value })
  }

  handleSubmit =(e) =>{
    e.preventDefault()
    this.props.isLogin(true)
  }

  render() {
    return(
      <div className="wrapper ">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>

          <form>
            <input 
              type="email" 
              className="sign-input" 
              name="login" 
              placeholder="login" 
              required onChange={this.handleChange}
            />
            <input 
              type="password" 
              className="sign-input"
              name="login" 
              placeholder="password" 
              required onChange={this.handleChange}
            />
            <input 
              type="submit" 
              className="login-btn" 
              value="Log In" 
              onSubmit={this.handleSubmit}
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
    )
  }
}

export default LoginForm;
