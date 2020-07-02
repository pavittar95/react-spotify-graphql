import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useLocation } from "@reach/router"
import queryString from 'query-string';
// import button from '@uprise/button'; 
// import card from '@uprise/card'; 
// import grid from '@uprise/grid'; 
// import text from '@uprise/text'; 
// import colors from '@uprise/colors'; 
// import image from '@uprise/image'; 
// import spacing from '@uprise/spacing'; 
// import typography from '@uprise/typography'; 

export default function Authentication() {
  const location = useLocation();
  const query = queryString.parse(location.hash);

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <>
      <Loader />
    </>
  );
}
