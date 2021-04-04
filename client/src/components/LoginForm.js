import React from "react";
import '../assets/scss/coverpage.scss';
import { Link } from "react-router-dom";
import axios from "axios";
import SignUp from "../pages/Signup";

const LoginForm = () => {
	// set modal display state
	// const [showModal, setShowModal] = useState(false);
  function constructor(props){
    this.state = {
      email:"",
      password:"",
      loginErrors:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

	return (
            <div className="wrapper ">
                <div id="formContent">
                  <h2 className="active"> Sign In </h2>

                  <form>
                    <input type="text" className="sign-input" id="login" name="login" placeholder="login" />
                    <input type="password" className="sign-input" id="password" name="login" placeholder="password" />
                    <input type="submit" className="login-btn" value="Log In" />
                  </form>
              
                  <div id="formFooter">
                    <p>Don't have an account?</p>
                    <Link 
                      className="underlineHover" 
                      to={"/SignUp"}>Sign up</Link>
           
                  </div>

                </div>
              </div>
	);
};

export default LoginForm;
