import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, YAxis, XAxis, CartesianGrid, Line, ReferenceLine, Tooltip, ResponsiveContainer } from 'recharts';

const GoalList = ({ goals, username }) => {
    const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    if (!goals.length) {
        return <h3>No Goals Yet</h3>;
    }

    //adds start and end dates to the progressData array. Attempts to remove duplicates from the final array, but this is not working yet, as the startData object is duplicated every time this runs. Come back to this later.
    const allData = goals.map(goal => {
        let startData = {...goal.startData};
        let endData = {...goal.endData};
        delete endData.value;

        goal.progressData.unshift(startData);
        goal.progressData.push(endData);
        const uniqueData = new Set(goal.progressData);

        return uniqueData
    });

    console.log(allData);

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
              <p>Starting at: {goal.startData.value} lbs on {goal.startData.date}</p>
              <p>Goal: {goal.endData.value} lbs on {goal.endData.date}</p>
            </div>

                    {/* {goal.progressData.unshift(goal.startData)}
                    {goal.progressData.push(goal.endData)} */}

                <LineChart width={400} height={250} data={goal.progressData}>
                    <ReferenceLine y={goal.endData.value} stroke="red" strokeWidth="3px" label={`${goal.goalType} Goal: ${goal.endData.value}`}/>

                    <XAxis dataKey="date"/>
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />

                </LineChart>

            <div className="form">
                <h4>Add Goal Progress Information</h4>

                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

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