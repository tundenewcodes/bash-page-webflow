import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import TitleHeading from "../../utils/title-heading/TitleHeading";
import {
  socialLinks,
  brandLinks,
} from "../../assets/data/social-links/socialLinks";
import SocialLinks from "./SocialLinks";

type Props = {};

const GetInTouch = (props: Props) => {
  const { arrowUp } = useExternalMedia();
  return (
    <Container
      style={{
        marginTop: "100px",
      }}
    >
      <Row>
        <GetInTouchWrapper data-aos-once="true" data-aos="fade-up">
          <GetInTouchText data-aos-once="true" data-aos="fade-up">
            get in touch with me
          </GetInTouchText>
          <Img
            data-aos-once="true"
            data-aos="fade-up"
            src={arrowUp}
            alt="arrow-up"
          
          />
        </GetInTouchWrapper>
      </Row>

      <Row
        style={{
          marginTop: "60px",
        }}
      >
        <SocialsWrapper>
          <SocialMainWrapper>
            <TitleHeading title="Socials" />
            <SocialLinksWrapper>
              {socialLinks.map((socialLink) => (
                <SocialLinks {...socialLink} />
              ))}
            </SocialLinksWrapper>
          </SocialMainWrapper>
          <SocialMainWrapper>
            <TitleHeading title="Socials" />
            <SocialLinksWrapper>
              {brandLinks.map((socialLink) => (
                <SocialLinks {...socialLink} />
              ))}
            </SocialLinksWrapper>
          </SocialMainWrapper>
        </SocialsWrapper>
      </Row>
    </Container>
  );
};

export default GetInTouch;

const GetInTouchText = styled.h1`
  font-weight: 400;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--white-color);

  @media (max-width: 479px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 388px;
  }
  @media (max-width: 991px) {
    font-size: 50px;
  }
`;

const GetInTouchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;

  gap: 20px;
  width: 100%;
  max-width: 100%;
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0px;
  width: 100%;
  max-width: 100%;

  @media (min-width: 773px) {
    flex-direction: row;
  }
`;

const SocialMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  margin-top: 60px;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  gap: 20px;
`;

const Img = styled.img`
  width: 63px;
  height: 61px;
  margin-bottom: 30px;
`;
