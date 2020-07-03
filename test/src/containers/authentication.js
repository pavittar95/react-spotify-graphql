import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { login } from "../actions/user";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/user";

export default function Authentication() {
  const location = useLocation();
  const history = useHistory();

  const query = queryString.parse(location.hash);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login(query));
    dispatch(
      getUser(() => {
        history.push("/overview");
      })
    );
  }, [query, dispatch, history]);

  return (
    <>
      <Loader />
    </>
  );
}
