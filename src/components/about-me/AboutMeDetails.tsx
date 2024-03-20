import React from "react";
import styled from "styled-components";

type Props = {};

const AboutMeDetails = (props: Props) => {
  return (
    <AboutMeWrapper data-aos-once="true" data-aos="fade-up">
      <MySaying data-aos-once="true" data-aos="fade-up">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna”
      </MySaying>

      <MySummary data-aos-once="true" data-aos="fade-up">
        aliqua. Lorem ipsum dolor sit amet, conse. Lorem ipsum dolor sit amet,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, conse. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, conse. Lorem ipsum
        dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt
      </MySummary>
    </AboutMeWrapper>
  );
};
const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 0px;
  margin-bottom: 2rem;

  gap: 60px;
`;
export default AboutMeDetails;

const MySaying = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: var(--gold-color);
  opacity: 0.8;
  padding-right: 5px;
`;

const MySummary = styled.p`
font-weight: 500;
font-size: 21px;
line-height: 160%;

padding-right:5px
color: var(--white-color);
opacity: 0.5;
`;
