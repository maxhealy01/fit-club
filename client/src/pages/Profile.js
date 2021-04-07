import React from "react";
import "../assets/scss/Profile.scss";

import GoalList from '../components/GoalList';
import GoalForm from '../components/GoalForm'

import ChatDashboard from "../components/ChatDashboard";
import { ConversationsProvider } from "../utils/ConversationsProvider";

import { SocketProvider } from "../utils/SocketProvider";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import { ContactsProvider } from "../utils/ContactsProvider";

function Profile() {
  const {loading, data} = useQuery(QUERY_ME);
  const { _id } = data?.me || {}

  //Use this data to test goal components with a user who has multiple goals
  const user = {
    username: 'FitClubber',
    goals: [
      {
        _id: 12345677,
        goalType: 'Running',
        measurement: 'miles',
        startDate: '4/3/2021',
        endDate: '6/20/2021',
        endValue: 2,
        progressData: [
          {
            date: '6/10/2021',
            value: 1.5
        }
        ]
      },
      {
        _id: 12345678,
        goalType: 'Weight Loss',
        measurement: 'lbs',
        startDate: '4/3/2021',
        endDate: '6/20/2021',
        endValue: 175,

        progressData: [
          {
              date: '4/26/2021',
              value: 192
          },
          {
              date: '5/15/2021',
              value: 187
          },
          {
              date: '6/1/2021',
              value: 180
          },
          {
              date: '6/21/2021',
              value: 171
          }
        ]
      },
      {
        _id: 12345679,
        goalType: 'Strength Training',
        measurement: 'lbs',
        startDate: '4/3/2021',
        endDate: '6/28/2021',
        endValue: 80,

        progressData: [
            {
                date: '4/26/2021',
                value: 52
            },
            {
                date: '5/15/2021',
                value: 60
            },
            {
                date: '6/1/2021',
                value: 66
            },
            {
                date: '6/21/2021',
                value: 73
            }
        ]
      }
    ]
  }

  //Use this data to test goal components with a user who has no goals
  // const user = {
  //     username: 'FitClubber',
  //     goals: []
  // }

  return (
    <>
    <div className="profile-header">
    </div>
    <GoalForm goals={user.goals} />
    <GoalList
      goals={user.goals}
      username={user.username}
    />

     {!loading && 
      <SocketProvider id={_id}>
        <ConversationsProvider id={_id}>
          <ChatDashboard id={_id} />
        </ConversationsProvider>
      </SocketProvider> 
    } 
    </>
  );
}

export default Profile;
