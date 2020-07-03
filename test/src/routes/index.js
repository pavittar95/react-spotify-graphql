import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import Overview from "../containers/overview";
import Playlist from "../containers/playlist";
import Login from "../containers/login";
import Authentication from "../containers/authentication";
import AppRoute from "./appRoute";
import Layout from "../components/Layout";

const NotFound = () => <p>Sorry, nothing here</p>;

export default function Routes({ store }) {
  return (
    <Switch>
      <AppRoute
        exact={true}
        path="/"
        component={Login}
        store={store}
        layout={Fragment}
        type="public"
      />
      <AppRoute
        exact={true}
        path="/overview"
        component={Overview}
        store={store}
        layout={Layout}
      />
      <AppRoute
        exact={true}
        path="/callback"
        component={Authentication}
        store={store}
        layout={Fragment}
        type="public"
      />
      <AppRoute
        exact={true}
        path="/playlist"
        component={Playlist}
        store={store}
        layout={Layout}
      />
      <AppRoute
        exact
        path="*"
        component={NotFound}
        store={store}
        layout={Layout}
      />
    </Switch>
  );
}
