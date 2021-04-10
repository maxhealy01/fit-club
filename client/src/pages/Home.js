import React from 'react';
import { Link } from "react-router-dom";
import '../assets/scss/Home.scss';

import Footer from "../components/Footer";



function Homepage(){

    return(
        <div className="homepage-top">
            <div className="home-header First-Section">
                <div className="header-grad">
                   <div className="welcoming-txt">
                        <h1>Welcome to FitClub</h1>
                        <p>
                        Due to COVID-19, the fitness community had to adapt to new ways to work out at home.  Now with the growing virtual options, trainers need a means to find people who need help with their fitness goals and allow users to find people in their area that are hosting activities or classes to stay active.

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

            <div className="second-Section">
                <div className="second-title">
                    <h1>Success Stories</h1>
                </div>
                
                <div className="success-story">
                    <div className="story">
                        <div className="storyPic story-pic1"></div>
                        <div className="story-txt">
                            <h1>
                                John Doe
                            </h1>
                            <p>
                            “To be able to move well, to feel better, to be able to wake up not in pain, be able to squat all the way down, be able to open up my hips, be able to play around with my son.”
                            </p>
                        </div>
                    </div>
                    <div className="story">
                    <div className="storyPic story-pic2"></div>
                        <div className="story-txt">
                            <h1>
                                Jassim Z.
                            </h1>
                            <p>
                            “I kept imaging myself dead and people carrying me to my final resting place. And I kept imagining them complaining about this heavy person that they need to carry. … I didn’t want that to be my legacy.”
                            </p>
                        </div>
                    </div>
                    <div className="story">
                    <div className="storyPic story-pic3"></div>
                        <div className="story-txt">
                            <h1>
                            Nick D.
                            </h1>
                            <p>
                            “Having a place where people can come and not just being judged on their physical capabilities but also giving a place to heal mentally and emotionally is what I wanted to foster, and I think CrossFit does that.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
   
            <div className="talk-to-trainer">
                <div className="bck-grad">
                    <div className="talk-box">
                        <h1>Need a help?</h1>
                        <h1>Simply click below button</h1>
                        <h1>Your trainer is waiting on you.</h1>
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
            <Footer />
        </div>
    )
}

export default Homepage