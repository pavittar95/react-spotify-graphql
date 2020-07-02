import React from "react";
import { extended } from '@uprise/colors';
import styled from 'styled-components';
import "../styles/loader.scss";

export default function Loader() {

  return (
    <div className="kabobloader">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}
