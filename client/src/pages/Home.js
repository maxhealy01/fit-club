import React from 'react';
import { Link } from "react-router-dom";
import '../assets/scss/Home.scss';
import Footer from "../components/Footer";
import Profile from "./Profile";
import GoalList from '../components/GoalList';


function Homepage(){

    return(
        <div className="homepage-top">
            <div className="home-header First-Section">
                <div className="header-grad">
                   <div className="welcoming-txt">
                        <h1>Welcome to FitClub</h1>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className="btn">
                            <Link 
                            to="/Classes"
                            className="linkToCourse">
                                Find a Course
                            </Link>
                        </div>
                   </div>
                </div>
            </div>

            <div className="homepage-test Second-Section">
                <div className="testimonial" id="testimonial-box">
                    <i class="fas fa-quote-left"></i>
                    <blockquote id="testimonialContent">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </blockquote>
                    <i class="fas fa-quote-right"></i>
                </div>
            </div>

            <div className="Goal-Section">
                <div className="Goal-box">
                </div>
            </div>
   
            <div className="talk-to-trainer">
                <div className="bck-grad">
                    <div className="talk-box">
                        <h1>is simply dummy text</h1>
                        <h1>is simply dummy text</h1>
                        <h1>The right trainer for you is waiting for you.</h1>
                    </div>
                    <div className="talk-btn">
                    <Link 
                        className="talkTo"
                        to="#">
                            Talk to Trainer
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage