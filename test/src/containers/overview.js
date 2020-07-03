import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import querystring from 'query-string';
import { Row, Col } from "@uprise/grid";
import { spacing } from "@uprise/spacing";
import { backgrounds, primary } from "@uprise/colors";
// import { Button } from "@uprise/button";
import { Bold } from "@uprise/text";
import { StyledCard, Image } from "./playlist";
import { useSelector } from "react-redux";
import Bgimg from '../assets/bgimg.png';

export default function Overview() {
  const location = useLocation();

  const profile = useSelector((state) => state.profile);
  const [currentProfile, setCurrentProfile] = useState({});

  useEffect(() => {
    const search = querystring.parse(location.search);
    if (search.id) {
      const data = profile.top_artists.find((x) => x.id === search.id);
      setCurrentProfile({ name: data.name, image: data.images[0].url });
    } else {
      setCurrentProfile({
        name: profile.display_name,
        image: profile.images[0].url,
      });
    }
  }, [location.search, profile]);

  return (
    <StyledCard
      backgroundColor={backgrounds.white}
      shadow
      padding={`${spacing.s8}`}
    >
      <Row>
        <Col className="col-md-4">
          <Image
            src={
              currentProfile.image ||
              Bgimg
            }
            className="rounded-lg"
            alt="cover"
          />
        </Col>
        <Col className="col-md-8 flex-column">
          <div>
            <Bold className="fs-6" color={primary.charcoal}>
              {currentProfile.name}
            </Bold>
            {/* <Small className="fs-3">Followers (123,3434)</Small> */}
          </div>
          {/* <div>
            <Button
              size="tiny"
              fullWidth={false}
              variant="primary"
              title="Follow"
              className="px-5 py-3"
            />
          </div> */}
        </Col>
      </Row>
    </StyledCard>
  );
}
