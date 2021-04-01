import React from "react";
import '../assets/scss/coverpage.scss'
import { Link, Switch } from "react-router-dom";
import SignUp from "./Signup";
// import LoginForm from "./Login";

// import Auth from "../utils/auth";

const CoverPage = () => {
	// set modal display state
	// const [showModal, setShowModal] = useState(false);
 

	return (
        <div className="cover-page">
        <div className="coverpage-wrapper">

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
                      path="/Signup" 
                      to={"/Signup"}>Sign up</Link>
           
                  </div>
                </div>
              </div>
            
        </div>
    </div>
	);
};

export default CoverPage;
