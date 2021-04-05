import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
    }
  }
`;

export const QUERY_GOALS = gql`
  {
    me {
      goals {
        _id
        name
        metric
      }
    }
  }
`

export const QUERY_TRAINERS = gql`
  {
    trainers {
      _id
      username
    }
  }
`;
