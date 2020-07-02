import React from "react";
import { Router } from "@reach/router";
import Overview from "../containers/overview";
import Featured from "../containers/featured";
import Playlist from "../containers/playlist";
import Login from "../containers/login";
import Authentication from "../containers/authentication";

const NotFound = () => <p>Sorry, nothing here</p>

export default function Routes() {
  return (
    <Router>
      <Overview path="/" />
      <Login path="/login" />
      <Authentication path="/callback" />
      <Featured path="/featured" />
      <Playlist path="/playlist" />
      <NotFound default />
    </Router>
  );
}
