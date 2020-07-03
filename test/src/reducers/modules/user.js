import { LOGIN, LOGOUT } from "../../actions/actionTypes";

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.data, isLogin: true };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
