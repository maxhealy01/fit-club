import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/scss/Register.scss';


function SignupForm() {


	return (

		<div className="wrapper ">
            <div className="container">
                <div className="formContent">
                    <h2 className="active"> Register </h2>

                    <form>
                        <input 
                        type="text" 
                        className="firstname" 
                        name="firstname" 
                        placeholder="First Name" 
                        />
                        
                        <input 
                        type="text" 
                        className="lastname" 
                        name="lastname" 
                        placeholder="Last Name" 
                        />

                        <input 
                        type="email" 
                        className="email"
                        name="email" 
                        placeholder="Email Address" />

                        <input 
                        type="password" 
                        className="password"
                        name="password" 
                        placeholder="Password" />

                        <input 
                        type="submit" 
                        className="submit-btn" 
                        value="submit" 
                        />
                    </form>
                
                    <div id="formFooter">
                        <p>Already have an account?</p>
                        <Link 
                        className="underlineHover" 
                        to={"/SignUp"}>Log In</Link>
        
                    </div>
                </div>
            </div>
      </div>
	);
}

export default SignupForm;
