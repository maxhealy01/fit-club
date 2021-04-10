import React, { useState } from 'react';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { LineChart, YAxis, XAxis, CartesianGrid, Line, ReferenceLine, Tooltip, ResponsiveContainer } from 'recharts';
import './GoalList.scss';


const GoalList = ({ goals, username }) => {
    const [progressDate, setProgressDate] = useState(new Date());

    if (!goals.length) {
        return <h3>No Goals Yet</h3>;
    }

    //This function will loop through each goal and then add each startDate to the beggining of goal data array and add endDate to the end of the array. This ensures these values will always cap the ends of the graph. Currently this isn't working properly, as each iteration is adding two start dates and two end dates to each progress data array.
    const combineData = () => {
      goals.map(goal => {
          const startData = {
            date: `${goal.startDate}`
          };
          const endData = {
            date: `${goal.endDate}`
          };

          goal.progressData.unshift(startData);
          goal.progressData.push(endData);

          return goal;
      })
    }

    combineData();
    console.log(goals)


  return (
    <div className="list-container">
 
      <div className="goal-title">
        <div className="title-bg">
          <h1>
                Your Goals
          </h1>
        </div>
      </div>
      <div className="goal-wrapper">
        <div className="graph-wrapper">
        {goals &&
        goals.map(goal => (
          <div className="graph" key={goal._id}>

            <div className="target-goal">
                <h1>
                    {goal.goalType}
                </h1>
                <div className="goal-date">
                    <p>Start Date: {goal.startDate}</p>
                    <p>Goal: {goal.endValue} {goal.measurement} on {goal.endDate}</p>
                </div>
            </div>

          
            <div className="form-txt">
                <p>Add Goal Progress Information</p>
            </div>  
            <div className="form">
                <div className="dv-txt">
                  <p>Date</p>
                  <DatePicker clasName="DatePicker" 
                  selected={progressDate} 
                  onChange={date => setProgressDate(date)} />
                </div>
                
                <div className="dv-txt">
                  <p>Value</p>
                  <input 
                  type="number" 
                  min="0" 
                  id="t-amount" 
                  placeholder="Value"/>
                </div>

                <button id="add-btn">Submit</button>
            </div>
          
          <div className="LineChart-wrapper">
            <LineChart 
            className="LineChart" 
            width={1000} height={350} 
            data={goal.progressData}>
                <ReferenceLine 
                y={goal.endValue} 
                stroke="red" 
                strokeWidth="3px" 
                label={`${goal.goalType} 
                Goal: ${goal.endValue}`}/>

                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip />
                <CartesianGrid 
                stroke="#eee" 
                strokeDasharray="5 5"/>
                <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#8884d8" />
            </LineChart>
          </div>
          
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default GoalList;