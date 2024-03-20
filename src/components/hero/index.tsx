import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";

export default function Hero() {
  const { bashHeaderImage, logo } = useExternalMedia();

  return (
    <HeroSectionContainer>
      <HeroImage src={bashHeaderImage} alt="Hero Image" /> <HeroOverlay />
      <HeroContentContainer>
        <LogoSection>
          <Img src={logo} alt="logo" />
          <P>Get in touch</P>
        </LogoSection>

        <TitleWrapper>
          <div style={{ width: "100%", maxWidth: "100%" }}>
            <H1 data-aos-once="true" data-aos="fade-up">
              BASHIRAT ARE
            </H1>
          </div>

          <MainSkillWrapper data-aos-once="true" data-aos="fade-up">
            <Skills>HRIS/HCM CONSULTANT</Skills>
            <Skills>PROJECT MANAGER</Skills>
            <Skills>OPERATIONS MANAGER</Skills>
            <Skills>DATA ANALYST</Skills>
          </MainSkillWrapper>
        </TitleWrapper>

        <BioWrapper data-aos="fade-up" data-aos-once="true">
          <Bio data-aos="fade-up" data-aos-once="true">
            I'm Bashirat Are, an HRIS and Project Management Consultant. I help
            companies optimize their business processes through digitalization
            and offer business operations consulting. Let's connect and make a
            difference!
          </Bio>
        </BioWrapper>
      </HeroContentContainer>
    </HeroSectionContainer>
  );
}

const LogoSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 64px;
  height: 64px;
`;

const P = styled.p`
  font-family: "Gilroy", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  color: var(--white-color);
`;

const HeroSectionContainer = styled.div`
  position: relative; /* For layering the image and content */
  width: 100%;
  height: 100%; 
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers the entire section */
  position: absolute; /* Layer the image on top */
  top: 0;
  left: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent gray overlay */
`;

const HeroContentContainer = styled.div`
  position: relative;
  max-width: 7xl;
  margin: 0; 
  padding: 1rem 3rem; 
 color: var(--white-color);
  @media (min-width: 1200px) {
    padding: 1rem 8rem;
  }
`;

const H1 = styled.h1`
  font-size: 12.05vw;
  font-weight: 700;
  text-align: justify;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--gold-color);
  padding: 0 !important;
  margin: 0 !important;

  display: flex;
  align-items: start;
  letter-spacing: 0.03em;

  @media (min-width: 700px) {
    text-align: center;
  }
`;

const Skills = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  align-items: stretch;
  margin-bottom: 2rem;
  white-space: nowrap;
  padding: 0;
  margin-top: 4px;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 0;
  cursor:pointer;
`;

const MainSkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  padding: 0;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BioWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    margin-top: 220px;
  }
`;
const Bio = styled.p`
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  align-items: justify;
  color: var(--white-color);
  opacity: 0.7;
`;
