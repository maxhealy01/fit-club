import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import '../assets/scss/navbar.scss';

const AppNavbar = () => {
	return (
		<>
			<header className="header">
            <div className="header-top">
            <div className="fit-title">
                <img src= {require ("../assets/images/logo2.png").default} />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/Classes"}>Class</Link>
                    </li>
                    <li>
                        <Link to={"/Workout"}>Workout</Link>
                    </li>
                    <li>
                        <Link to={"/Profile"}>Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    <div className="subheader">
    </div>
		</>
	);
};

export default AppNavbar;


