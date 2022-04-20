import { userActionTypes } from "./userActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case userActionTypes.FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case userActionTypes.FETCH_USERS_FAILURE:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
