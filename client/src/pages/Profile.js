import React from "react";
import "../assets/scss/Profile.scss";

import GoalList from '../components/GoalList'

// import ChatDashboard from "../components/ChatDashboard";
// import { ConversationsProvider } from "../utils/ConversationsProvider";

// import { SocketProvider } from "../utils/SocketProvider";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";

function Profile() {
  // const {loading, data} = useQuery(QUERY_ME);
  // const { id } = data
  // hardcoded _id from database
  // const id = "60677866568ec9a131f045ed";

  const user = {
    username: 'FitClubber',
    goals: [
      {
        _id: 12345678,
        goalType: 'Weight Loss',
        startData:
            {
                date: '4/3/2021',
                value: 200
            },

        endData:
            {
                date: '7/3/2021',
                value: 170
            },

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
        goalType: 'Weight Training',
        startData:
            {
                date: '4/3/2021',
                value: 50
            },

        endData:
            {
                date: '7/3/2021',
                value: 75
            },

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

  // const user = {
  //     username: 'FitClubber',
  //     goals: []
  // }

  return (
    <>
    <GoalList goals={user.goals} username={user.username} />
     {/* {!loading &&  */}
      {/* <SocketProvider id={id}>
        <ConversationsProvider id={id}>
          <ChatDashboard id={id} />
        </ConversationsProvider>
      </SocketProvider> */}
     {/* } */}
    </>
  );
}

export default Profile;
