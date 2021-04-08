import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/scss/Register.scss';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function SignupForm() {

    const [createUser] = useMutation(ADD_USER)

    const [state, setState] = useState({ username: "", email: "", password: ""})

const onChange = (e) => {
    setState({... state,
        [e.target.name]: e.target.value
    })
}

const onSubmit = async () => {
    const response = await createUser({
        variables: state,
    })
    console.log(response);

    document.location.assign("/")
}

	return (

		<div className="wrapper ">
            <div className="container">
                <div className="formContent">
                    <h2 className="active"> Register </h2>

                    <form>

                        <input 
                        type="text" 
                        className="username" 
                        name="username" 
                        placeholder="Username" 
                        onChange={onChange}/>
                        

                        <input 
                        type="email" 
                        className="email"
                        name="email" 
                        placeholder="Email Address" 
                        onChange={onChange}/>

                        <input 
                        type="password" 
                        className="password"
                        name="password" 
                        placeholder="Password"
                        onChange={onChange} />

                        <input 
                        onClick={onSubmit} 
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
