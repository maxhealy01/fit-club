import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, YAxis, XAxis, CartesianGrid, Line, ReferenceLine, Tooltip, ResponsiveContainer } from 'recharts';

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
    <div>
        <h1 style={{margin: 50}}>
            Your Goals
        </h1>
      {goals &&
        goals.map(goal => (
          <div key={goal._id} style={{margin: 50, border:"5px solid black"}}>
            <h2>
              Health Goal: {goal.goalType}
            </h2>


            <div>
              <p>Start Date: {goal.startDate}</p>
              <p>Goal: {goal.endValue} {goal.measurement} on {goal.endDate}</p>
            </div>

              <LineChart width={400} height={250} data={goal.progressData}>
                  <ReferenceLine y={goal.endValue} stroke="red" strokeWidth="3px" label={`${goal.goalType} Goal: ${goal.endValue}`}/>

                  <XAxis dataKey="date"/>
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>

            <div className="form">
                <h4>Add Goal Progress Information</h4>

                <DatePicker selected={progressDate} onChange={date => setProgressDate(date)} />
                <input type="number" min="0" id="t-amount" placeholder="Value" style={{margin: 20}} />
                <button id="add-btn"><i className="fa fa-plus buttons"></i> Submit</button>
                <p className="error"></p>
            </div>

          </div>
        ))}
    </div>
  );
};

export default GoalList;