import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../utils/colors/colors";

import { useExport } from "../../hooks/useExport";
type Props = {
  linkTitle: string;
  linkSubtitle: string;
  id: number;
  link: string;
};

const LinkCard = ({ linkSubtitle, linkTitle, link }: Props) => {
  const { isDarkMode } = useTheme();
  const {
    lightBorderColor,
    whiteColor,
    lightGreenColor,
    titleBlackColor,

    darkOrangeColor,
  } = Colors();
  const { lightArrow, greenArrow } = useExport();
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <a target="_blank" href={link} rel="noreferrer noopener" hrefLang="en-us" style={{
      textDecoration:"none"
    }}>
      <Card
        style={{
          border: `0.5px solid ${isDarkMode ? whiteColor : lightBorderColor}`,
          backgroundColor:
            isDarkMode && isMouseEnter
              ? darkOrangeColor
              : !isDarkMode && isMouseEnter
              ? lightGreenColor
              : "",
        }}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        <MainCard>
          <LinkTitle
            style={{
              color: isDarkMode
                ? whiteColor
                : isMouseEnter && !isDarkMode
                ? whiteColor
                : titleBlackColor,
            }}
          >
            {linkTitle}
          </LinkTitle>
          <LinkSubtitle
            style={{
              color: isDarkMode
                ? whiteColor
                : isMouseEnter && !isDarkMode
                ? whiteColor
                : titleBlackColor,
            }}
          >
            {linkSubtitle}
          </LinkSubtitle>
          <div
            className="d-flex gap-3"
            style={{
              gap: "1rem",
            }}
          >
            <LinkVisit
              style={{
                color: isDarkMode
                  ? whiteColor
                  : isMouseEnter && !isDarkMode
                  ? whiteColor
                  : lightGreenColor,
              }}
            >
              Visit Website
            </LinkVisit>

            {isDarkMode ? (
              <img src={lightArrow} alt="arrow" />
            ) : isMouseEnter && !isDarkMode ? (
              <img src={lightArrow} alt="arrow" />
            ) : (
              <img src={greenArrow} alt="arrow" />
            )}
          </div>
        </MainCard>
      </Card>
    </a>
  );
};

export default LinkCard;

const Card = styled.div`
  display: flex;
  height: 244px;
  max-width: 300px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem auto;
  @media (min-width:520px) {
    max-width: 450px;
  }
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const LinkTitle = styled.p`
  color: var(--white-color);
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const LinkSubtitle = styled.p`
  color: var(--WHITE, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
`;

const LinkVisit = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
`;
