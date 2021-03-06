import gql from "graphql-tag";

export const GET_USER_INFO = gql`
  query getUserInfo($name: String!) {
    User(name: $name) {
      name
      github
      taskList {
        weekNo
        total
        completed
        tasks {
          _id
          title
        }
      }
    }
  }
`;

export const GET_ALL_TASKS = gql`
  query getAllTasks($_id: String!) {
    Task(_id: $_id) {
      _id
      title
    }
  }
`;

export const GET_TASKS_BY_WEEKNO = gql`
  query getTasksByWeekNo($weekNo: String!) {
    TaskList(weekNo: $weekNo) {
      weekNo
      total
      completed
      tasks {
        _id
        title
        primary
        status
      }
    }
  }
`;
