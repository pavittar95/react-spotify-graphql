import React from "react";
import { Card } from "@uprise/card";
import { Row, Col } from "@uprise/grid";
import { spacing } from "@uprise/spacing";
import Layout from "../components/Layout";
import styled from "styled-components";
import { backgrounds, primary } from "@uprise/colors";
import { P } from "@uprise/text";
import { KeyboardArrowRight, KeyboardArrowLeft } from "styled-icons/material";

export const StyledCard = styled(Card)`
  margin-top: ${spacing.s8};
`;

export const Image = styled.img`
  width: 20rem;
  height: 15rem;
`;

const CircleButton = styled.button`
  border: 1px solid ${primary.purple};
  background: transparent;
  border-radius: 50%;
  padding: 10px;
  outline: none;
  cursor: pointer;
  color: ${primary.purple};
`;

export default function playlist() {
  return (
    <Layout>
      <StyledCard
        backgroundColor={backgrounds.white}
        shadow
        padding={`${spacing.s8}`}
      >
        <Row>
          <Col className="col-md-2" />
          <Col className="col-md-8 d-flex justify-content-between align-items-center">
            <CircleButton>
              <KeyboardArrowLeft width="20" height="20" />
            </CircleButton>
            <div>
              <Image
                src="https://www.solidbackgrounds.com/images/2560x1600/2560x1600-dark-gray-solid-color-background.jpg"
                className="rounded-lg"
                alt="cover"
              />
            </div>
            <CircleButton>
              <KeyboardArrowRight width="20" height="20" />
            </CircleButton>
          </Col>
          <Col className="col-md-2" />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div
              style={{
                width: "20rem",
              }}
            >
              <P
                fontSize={spacing.s7}
                color={primary.charcoal}
                textAlign="center"
              >
                Lofi hip hop - beats for relax/ study to
              </P>
            </div>
          </Col>
        </Row>
      </StyledCard>
    </Layout>
  );
}
