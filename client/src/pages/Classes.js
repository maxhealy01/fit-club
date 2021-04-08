import React from "react";
import '../assets/scss/classes.scss'
// import { Link, Switch } from "react-router-dom";
import ClassItems from '../components/ClassItems'

function Classes () {


    return( 
        <div className="class-page">
            <div className="classes-header">
                <div className="classes-grad">
                <div className="classes-header-content">
                    <h1>
                    classes
                    </h1>
                    <p>
                    The pain you feel today, will be the strength you feel tomorrow.
                    </p>
                </div>
                </div>
            </div>



            <div className="classPage-content">
                
                <div className="class-item">
                    <div className="class-photo">
                    </div>
                    <div className="class-description">
                        <div className="class-name">
                            <ClassItems />
                        </div>
                    </div>
                </div>

                <div className="class-item">
                    <div className="class-photo">
                    </div>
                    <div className="class-description">
                        <div className="class-name">
                            
                            <ul>
                                <h1>Class 1</h1>
                                <li>Date: 00/00/00 SAT</li>
                                <li>Time: 00:00 PM</li>
                                <li>Location: Austin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Classes;