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
                        <Link to={"/Activity"}>Activity</Link>
                    </li>
                    {/* <li>
                        <Link to={"/Trainers"}>Trainers</Link>
                    </li> */}
                    <li>
                        <Link to={"/MyProfile"}>My Profile</Link>
                    </li>
                    <li>
                        <Link to={"/Info"}>Info</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/class">
                        <class />
                    </Route>
                    {/* <Route path="/Activity">
                        <Activity />
                    </Route>
                    <Route path="/Trainers">
                        <Trainers />
                    </Route>
                    <Route path="/MyProfile">
                        <MyProfile />
                    </Route>
                    <Route path="/Info">
                        <Info />
                    </Route> */}
                </Switch>
            </div>
        </div>
        </header>
    <div className="subheader">
    </div>
		</>
	);
};

export default AppNavbar;


