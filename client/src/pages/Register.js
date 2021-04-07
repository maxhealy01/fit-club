import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/scss/Register.scss';
import Auth from "../utils/auth";

function SignupForm() {

    React.state = {
        username: '',
        email: '',
        passworld: ''
      }

onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit = async () => {
    const response = await this.props.mutate({
        variables: this.state,
    })
    console.log(response);
}

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
                        onChange={e => this.onChange(e)}
                        />
                        
                        <input 
                        type="text" 
                        className="lastname" 
                        name="lastname" 
                        placeholder="Last Name" 
                        onChange={e => this.onChange(e)}/>
                        

                        <input 
                        type="email" 
                        className="email"
                        name="email" 
                        placeholder="Email Address" 
                        onChange={e => this.onChange(e)}/>

                        <input 
                        type="password" 
                        className="password"
                        name="password" 
                        placeholder="Password"
                        onChange={e => this.onChange(e)} />

                        <input 
                        onClick={() => this.onSubmit()} 
                        type="primary"
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
