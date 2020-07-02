import React from "react";
import Navbar from "./Navbar";
import { Container } from "@uprise/grid";

export default function Layout({ children }) {
  return (
    <Container>
      <div className="mt-5">
        <Navbar />
        {children}
      </div>
    </Container>
  );
}
