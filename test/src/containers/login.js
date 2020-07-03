import React from "react";
import querystring from "query-string";
import { StyledCard } from "./playlist";
import { Container, Row, Col } from "@uprise/grid";
import { backgrounds } from "@uprise/colors";
import { Button } from "@uprise/button";

export default function Login() {
  const login = () => {
    window.location.href = `https://accounts.spotify.com/authorize?${querystring.stringify(
      {
        response_type: "token",
        scope: 'user-read-private user-read-email user-top-read user-follow-read user-follow-modify user-library-read',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      }
    )}`;
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" height="100vh">
        <Col className="col-md-4">
          <StyledCard
            backgroundColor={backgrounds.white}
            shadow
            className="p-5 text-center"
          >
            <Button title="Login with spotify" onClick={login} />
          </StyledCard>
        </Col>
      </Row>
    </Container>
  );
}
