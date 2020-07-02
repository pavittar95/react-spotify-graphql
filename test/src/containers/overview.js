import React from "react";
import { Card } from "@uprise/card";
import { Row, Col } from "@uprise/grid";
import { spacing } from "@uprise/spacing";
import Layout from "../components/Layout";
import styled from "styled-components";
import { backgrounds, primary } from "@uprise/colors";
import { Button } from "@uprise/button";
import { Bold, Small } from "@uprise/text";
import { StyledCard, Image } from './playlist'

export default function overview() {
  return (
    <Layout>
      <StyledCard
        backgroundColor={backgrounds.white}
        shadow
        padding={`${spacing.s8}`}
      >
        <Row>
          <Col className="col-md-4">
            <Image
              src="https://www.solidbackgrounds.com/images/2560x1600/2560x1600-dark-gray-solid-color-background.jpg"
              className="w-100 rounded-lg"
              alt="cover"
            />
          </Col>
          <Col className="col-md-8 flex-column">
            <div>
              <Bold className="fs-6" color={primary.charcoal}>
                ChilledCow
              </Bold>
              <Small className="fs-3">Followers (123,3434)</Small>
            </div>
            <div>
              <Button
                size="tiny"
                fullWidth={false}
                variant="primary"
                title="Follow"
                className="px-5 py-3"
              />
            </div>
          </Col>
        </Row>
      </StyledCard>
    </Layout>
  );
}
