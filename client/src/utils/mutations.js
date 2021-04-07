import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CONVERSATION = gql`
  mutation createConversation($recipients: [ID], $text: String) {
    createConversation(recipients: $recipients, text: $text) {
      _id
      messages {
        recipients {
          _id
        }
        message
      }
    }
  }
`;

////////////////////////////////////////////
// create goal with mike's data structure //
////////////////////////////////////////////
// export const ADD_GOAL = gql`
//   mutation addGoal($goalType: String!, measurement: String!, startDate: String!, endDate: String!, endValue: Int!, progressData: [Object]!) {
//     addGoal(goalType: $goalType, measurement: $measurement, startDate: $startDate, endDate: $endDate, endValue: $endValue, progressData: $progressData) {
//       user {
//         goals {
//           goalType
//           measurement
//           startDate
//           endDate
//           endValue
//         }
//       }
//     }
//   }
// `
