import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
    }
  }
`;

////////////////////////////////////////////
// query goals with mikes data structure  //
////////////////////////////////////////////
// export const QUERY_GOALS = gql`
//   {
//     me {
//       goals {
//         goalType
//         measurement
//         startDate
//         endDate
//         endValue
//         progressData {
//           date
//           value
//         }
//       }
//     }
//   }
// `;

export const QUERY_TRAINERS = gql`
  {
    trainers {
      _id
      username
    }
  }
`;

export const QUERY_WORKOUTS = gql`
  {
    workouts {
      _id
      name
      duration
      source
      description
      postedBy {
        _id
      }
    }
  }
`;
