import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactPlayer from "react-player";

import "../assets/scss/Workout.scss";
import WorkHeader from "../components/WorkoutHeader"

import { QUERY_WORKOUTS } from "../utils/queries";
import Auth from "../utils/auth.js";
import CreateWorkout from "../components/CreateWorkout.js";

function Workout() {
  const { loading, data } = useQuery(QUERY_WORKOUTS);
  const workouts = data?.workouts || [];

  return (
    <div className="workout-page">
      
      {Auth.loggedIn() ? (
        <>
          <CreateWorkout title="Create a new workout..." />
        </>
      ) : (
        <>{""}</>
      )}
      {/* {workouts &&
        workouts.map((workout) => (
          <div className="workout-item">
            <div className="workout-description">
              <div className="workout-name">
                <h1>{workout.name}</h1>
                <h4>{workout.duration}</h4>
                <p>{workout.description}</p>
              </div>
              <div className="workout-detail">
                <ReactPlayer
                  url={`${workout.source}`}
                  controls
                  width="100%"
                  height="393px"
                />
              </div>
            </div>
            <span>Posted By: usernamehere</span>
          </div>
        ))} */}
        <WorkHeader />
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>Deadlift</h1>
            <h4>15 minutes</h4>
            <p>
              It’s an exercise that’s great for the thighs, the back, the traps,
              something that you can use whether you’re a bodybuilder, a
              powerlifter, into strength sports, even you Cross Fitters out
              there. The deadlift is something that really, everybody that
              anybody that’s a beginner, and pretty much everybody unless you
              have some physical restrictions due to an injury should be doing.
            </p>
          </div>
          <div className="workout-detail">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=vadTBs2JfNI"
              controls
              width="100%"
              height="393px"
            />
          </div>
        </div>
        <span>Posted By: aldrinburgos18</span>
      </div>
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>Plank</h1>
            <h4>3 minutes</h4>
            <p>
              There are few forms of exercise as effective at building your core
              as a plank workout. However, planks benefit far more than just
              your core strength. By holding yourself in the position for a
              plank exercise, you’ll notice that your biceps, neck, and shoulder
              muscles are also being tested and strained. This is encouraging
              their buildup and development, which is great news if you like to
              do press ups.
            </p>
          </div>
          <div className="workout-detail">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Iv75ErM4wCI"
              controls
              width="100%"
              height="393px"
            />
          </div>
        </div>
        <span>Posted By: test</span>
      </div>
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>Running</h1>
            <h4>30 minutes</h4>
            <p>
              Short bursts of speed help build strength, increase aerobic
              capacity, and get your legs used to the faster turnover. This is a
              fun workout to do outside, whether on a track or road, but can
              also be done on a treadmill. Set an easy pace for your recovery
              intervals. This can mean a slow jog but walking is fine if you
              need a slower pace.
            </p>
          </div>
          <div className="workout-detail">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eqCnXG11o2M"
              controls
              width="100%"
              height="393px"
            />
          </div>
        </div>
        <span>Posted By: tester</span>
      </div>
      <div className="workout-item">
        <div className="workout-description">
          <div className="workout-name">
            <h1>HIIT</h1>
            <h4>30 minutes</h4>
            <p>
              The most obvious benefit of squats is building your leg muscles –
              quadriceps, hamstrings, and calves. These drills also create an
              anabolic environment, which promotes body-wide muscle building,
              improving muscle mass. Squats, and all of their variations, are a
              great exercise for the whole body
            </p>
          </div>
          <div className="workout-detail">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ml6cT4AZdqI"
              controls
              width="100%"
              height="393px"
            />
          </div>
        </div>
        <span>Posted By: aldrinburgos18</span>
      </div>
    </div>
  );
}

export default Workout;