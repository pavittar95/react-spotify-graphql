import { LOGIN, PROFILE, LOGOUT } from "./actionTypes";
import { SpotifyGraphQLClient } from "spotify-graphql";

const config = {
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  accessToken: "",
};

export const login = (data) => ({
  type: LOGIN,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const profile = (data) => ({
  type: PROFILE,
  data,
});

export const getUser = (callback) => (dispatch, getState) => {
  const token = getState().user.access_token;
  SpotifyGraphQLClient({ ...config, accessToken: token })
    .query(
      `
  {
    me {
      id
      display_name
      images {
        url
      }
      playlists {
        id
        description
        href
        name
        uri
        images {
          url
        }   
      }
      top_artists {
        id
        genres
        href
        name
        popularity
        type
        uri
        images{
          url
        }
      }
    }
  }
`
    )
    .then((executionResult) => {
      if (executionResult.errors) {
        console.error(executionResult.errors);
      } else {
        dispatch(profile(executionResult.data));
      }
      callback();
    });
};
