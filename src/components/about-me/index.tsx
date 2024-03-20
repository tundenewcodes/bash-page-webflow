import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitleHeading from "../../utils/title-heading/TitleHeading";
import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";

import AboutMeDetails from "./AboutMeDetails";

const AboutMe = () => {
  const { bashImage } = useExternalMedia();

  return (
    <Container
      style={{
        marginTop: "100px",
      }}
    >
      <Row>
        <TitleHeading title={"About Me"} />
      </Row>

      <Row
        style={{
          marginTop: "80px",
        }}
      >
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 1 }}
          lg={{ span: 6, order: 1 }}
        >
          <AboutMeDetails />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 2 }}
          lg={{ span: 6, order: 2 }}
        >
          <Img src={bashImage} alt="image" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;

const Img = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
