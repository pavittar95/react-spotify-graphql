import React from "react";
import { Route, Redirect } from "react-router-dom";
const AppRoute = ({
  component: Component,
  layout: Layout,
  requireAuth,
  to = "/",
  store,
  type = "private",
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      const { isLogin } = store.getState().user;
      if (isLogin && props.location.pathname === "/") {
        return (
          <Redirect
            to={{
              pathname: "/overview",
              state: { from: props.location },
            }}
          />
        );
      }
      if (type === "public") {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }
      return isLogin || props.location.pathname === "/" ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect
          to={{
            pathname: to,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default AppRoute;
