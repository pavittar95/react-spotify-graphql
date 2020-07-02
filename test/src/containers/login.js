import React from "react";
import { navigate } from "@reach/router";
import querystring from "query-string";

export default function login() {
  const login = () => {
    navigate(
      `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: "token",
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      })}`
    );
  };

  return (
    <div>
      <button onClick={login}>Login via spotify</button>
    </div>
  );
}
