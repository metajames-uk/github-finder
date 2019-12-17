import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING
} from "../types";

export default (state: any, action: any) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
