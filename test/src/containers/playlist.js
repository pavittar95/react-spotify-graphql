import React, { useState, useEffect } from "react";
import { Card } from "@uprise/card";
import { Row, Col } from "@uprise/grid";
import { spacing } from "@uprise/spacing";
import styled from "styled-components";
import { backgrounds, primary } from "@uprise/colors";
import { P } from "@uprise/text";
import { KeyboardArrowRight, KeyboardArrowLeft } from "styled-icons/material";
import { useSelector } from "react-redux";
import Bgimg from '../assets/bgimg.png';

export const StyledCard = styled(Card)`
  margin-top: ${spacing.s8};
`;

export const Image = styled.img`
  width: 20rem;
  object-fit: contain;
  height: 15rem;
  background: #edeafa;
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

export default function Playlist() {
  const { playlists } = useSelector((state) => state.profile);

  const [current, setCurrent] = useState();

  useEffect(() => {
    if (playlists) {
      setCurrent(playlists[0]);
    }
  }, [playlists]);

  const setPrev = () => {
    if (playlists) {
      let index = playlists.findIndex((x) => x.id === current.id);
      index = index - 1;
      if (playlists[index]) {
        setCurrent(playlists[index]);
      }
    }
  };

  const setNext = () => {
    if (playlists) {
      let index = playlists.findIndex((x) => x.id === current.id);
      index = index + 1;
      if (playlists[index]) {
        setCurrent(playlists[index]);
      }
    }
  };

  return (
    <StyledCard
      backgroundColor={backgrounds.white}
      shadow
      padding={`${spacing.s8}`}
    >
      <Row>
        <Col className="col-md-2" />
        <Col className="col-md-8 d-flex justify-content-between align-items-center">
          {playlists && (
            <>
              <CircleButton onClick={setPrev}>
                <KeyboardArrowLeft width="20" height="20" />
              </CircleButton>
              <div>
                {current && current.images && current.images.length && (
                  <Image
                    src={current.images[0].url || Bgimg}
                    className="rounded-lg"
                    alt="cover"
                  />
                )}
              </div>
              <CircleButton onClick={setNext}>
                <KeyboardArrowRight width="20" height="20" />
              </CircleButton>
            </>
          )}
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
            {current && (
              <P
                fontSize={spacing.s7}
                color={primary.charcoal}
                textAlign="center"
              >
                {current.name}
              </P>
            )}
          </div>
        </Col>
      </Row>
    </StyledCard>
  );
}
