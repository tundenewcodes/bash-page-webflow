import { Col, Container, Row } from "react-bootstrap";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { whatIDo } from "../../assets/data/what-i-do/whatIDo";
import RoleCard from "./RoleCard";
import { useEffect, useState } from "react";
import TitleHeading from "../../utils/title-heading/TitleHeading";
import styled from "styled-components";

export default function WhatIDo() {
  const { rightLine, leftLine } = useExternalMedia();

  const [startIndex, setStartIndex] = useState(0);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    if (windowSize >= 992) {
      return 3; // Large screen - 3 cards
    } else if (windowSize >= 768) {
      return 2; // Medium screen - 2 cards
    } else {
      return 1; // Small screen - 1 card
    }
  };

  const getStepSize = () => {
    return getVisibleCards() === 1 ? 1 : 3;
  };

  const handlePrev = () => {
    const newStartIndex = Math.max(startIndex - getStepSize(), 0);

    if (newStartIndex < 0) {
      setStartIndex(0);
    } else {
      setStartIndex(newStartIndex);
    }
  };

  const handleNext = () => {
    const newStartIndex = Math.min(
      startIndex + getStepSize(),
      whatIDo.length - getVisibleCards()
    );

    if (newStartIndex + getVisibleCards() > whatIDo.length) {
      setStartIndex(whatIDo.length - getVisibleCards());
    } else {
      setStartIndex(newStartIndex);
    }
  };

  return (
    <Container
      style={{
        marginTop: "100px",
      }}
    >
      <Row>
        <TitleHeading title={"What I Does"} />
      </Row>

      <CardWrapper>
        {whatIDo
          .slice(startIndex, startIndex + getVisibleCards())
          .map((whatIDo, index) => (
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={whatIDo.id}
              sm={12}
              md={getVisibleCards() === 1 ? 12 : 6}
              lg={getVisibleCards() === 1 ? 12 : 4}
              className="mt-3"
            >
              <RoleCard {...whatIDo} />
            </Col>
          ))}
      </CardWrapper>

      <ImgWrapper data-aos="fade-up" data-aos-once="true">
        <Img
          src={leftLine}
          alt="left-line"
          onClick={handlePrev}
          data-aos="fade-up"
          data-aos-once="true"
        />
        <Img
          src={rightLine}
          alt="right-line"
          onClick={handleNext}
          data-aos="fade-up"
          data-aos-once="true"
        />
      </ImgWrapper>
    </Container>
  );
}

const CardWrapper = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`;
const Img = styled.img`
  width: 130px;
  height: 1rem;
  cursor: pointer;
  @media (min-width: 600px) {
    width: 151px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 40px;
  @media (min-width: 600px) {
    gap: 80px;
  }
`;
