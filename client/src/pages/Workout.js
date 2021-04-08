import React, { useState } from "react";
import Auth from "../utils/auth.js";
import { Link } from "react-router-dom";

import "../assets/scss/Workout.scss";
import CreateWorkout from "../components/CreateWorkout.js";

function Workout() {
  return (
    <div className="workout-page">
      <div className="workout-header">
        <div className="workout-grad">
          <div className="workout-header-content">
            <h1>
              Workout
            </h1>
            <p>
              Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.
              </p>
          </div>
        </div>
      </div>
      <CreateWorkout></CreateWorkout>
      <div className="viewAll-workout">
        <Link className="viewAll-link" to="#">View all workouts / View my workouts</Link>
      </div>
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>Squats</h1>
            <h4>30 minutes</h4>
            <p>
            The most obvious benefit of squats is building your leg muscles – quadriceps, hamstrings, and calves. These drills also create an anabolic environment, which promotes body-wide muscle building, improving muscle mass. Squats, and all of their variations, are a great exercise for the whole body
            </p>
          </div>
          <div className="workout-detail">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/qLPrPVz4NzQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>HIIT</h1>
            <h4>15 minutes</h4>
            <p>
            HIIT, or high-intensity interval training, is a training technique in which you give all-out, one hundred percent effort through quick, intense bursts of exercise, followed by short, sometimes active, recovery periods. This type of training gets and keeps your heart rate up and burns more fat in less time
            </p>
          </div>
          <div className="workout-detail">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/1skBf6h2ksI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;