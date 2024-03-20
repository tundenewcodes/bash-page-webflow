import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitleHeading from "../../utils/title-heading/TitleHeading";
import { communities } from "../../assets/data/communities/communities";
import CommunityCard from "./CommunityCard";



const Communities = () => {
  return (
    <Container
      style={{
        marginTop: "100px",
      }}
    >
      <Row>
        <TitleHeading title={"Communities"} />
      </Row>
      <Row style={{ marginTop: "60px" }}>
        {communities.map((community) => (
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
            key={community.id}
            sm={12}
            md={6}
            lg={4}
          >
            <CommunityCard {...community} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Communities;
