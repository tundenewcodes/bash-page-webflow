import React from "react";
import { Container, Row } from "react-bootstrap";
import TitleHeading from "../../utils/title-heading/TitleHeading";
import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import { brandLinks } from "../../constants/brand.links";



const MyBrands = () => {
  const { bacfLogo, eraconnecktLogo, eratekLogo, hrtechLogo } =
    useExternalMedia();
  const { HRTECHISH, ERACONNECKT, ERATEK, BACF } = brandLinks();
  return (
    <Container
      style={{
        marginTop: "100px"
      }}
    >
      <Row>
        <TitleHeading title={"My Brands"} />
      </Row>
      <Row>
        <BrandLogoWrapper
        data-aos-once="true" data-aos="fade-up"
        >
          <a
            target="_blank"
            href={BACF}
            rel="noreferrer noopener"
            hrefLang="en-us"
            style={{
              textDecoration: "none",
            }}
            data-aos-once="true" data-aos="fade-up"
          >
            <BrandLogo data-aos-once="true" data-aos="fade-up">
              <img src={bacfLogo} alt="bacf-logo" />
            </BrandLogo>
          </a>

          <a
            target="_blank"
            href={ERACONNECKT}
            rel="noreferrer noopener"
            hrefLang="en-us"
            style={{
              textDecoration: "none",
            }}
            data-aos-once="true" data-aos="fade-up"
          >
            <BrandLogo  data-aos-once="true" data-aos="fade-up">
              <img src={eraconnecktLogo} alt="bacf-logo" />
            </BrandLogo>
          </a>


          <a
            target="_blank"
            href={ERATEK}
            rel="noreferrer noopener"
            hrefLang="en-us"
            style={{
              textDecoration: "none",
            }}
            data-aos-once="true" data-aos="fade-up"
          >
            <BrandLogo  data-aos-once="true" data-aos="fade-up">
              <img src={eratekLogo} alt="bacf-logo" />
            </BrandLogo>
          </a>

          <a
            target="_blank"
            href={HRTECHISH}
            rel="noreferrer noopener"
            hrefLang="en-us"
            style={{
              textDecoration: "none",
            }}
            data-aos-once="true" data-aos="fade-up"
          >
            <BrandLogo  data-aos-once="true" data-aos="fade-up">
              <img src={hrtechLogo} alt="bacf-logo" />
            </BrandLogo>
          </a>
        </BrandLogoWrapper>
      </Row>
    </Container>
  );
};

export default MyBrands;

const BrandLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;

  width: 240px;
  height: 100px;
margin-bottom:1rem;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 7px 7px 0px rgba(255, 255, 255, 0.1);
`;

const BrandLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  flex-wrap: wrap;
  margin-top: 80px;

  @media (min-width: 600px) {
   justify-content: space-between;
  }
`;
