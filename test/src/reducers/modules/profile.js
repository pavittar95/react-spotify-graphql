import { PROFILE, LOGOUT } from "../../actions/actionTypes";

const initialState = {
  images: [],
  playlists: [],
  top_artists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return { ...state, ...action.data.me };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
