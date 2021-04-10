import React from 'react';
import { Link } from "react-router-dom";
import './Home.scss';

import Footer from "../../components/Footer";
import Workout from "../Workout/Workout";



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
{/* 
            <div className="homepage-test Second-Section">
                <div className="testimonial" id="testimonial-box">
                    <i class="fas fa-quote-left"></i>
                    <blockquote id="testimonialContent">
                    Your body can stand almost anything. It’s your mind that you have to convince 
                    </blockquote>
                    <i class="fas fa-quote-right"></i>
                </div>
            </div> */}

            <div className="workout-Section">
                <div className="workout-box">
                    <Workout />
                </div>
            </div>
   
            <div className="talk-to-trainer">
                <div className="bck-grad">
                    <div className="talk-box">
                        <h1>Set your target</h1>
                        <h1>achieve it</h1>
                        <h1>Repeat.</h1>
                    </div>
                    <div className="talk-btn">
                    <Link 
                        className="talkTo"
                        to="/Profile">
                            target Progress
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage