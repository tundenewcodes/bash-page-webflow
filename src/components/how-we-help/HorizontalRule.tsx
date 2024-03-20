import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Colors } from "../../utils/colors/colors";
import { useTheme } from "../../context/ThemeContext";

const HrContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 1rem  0;
	justify-content: center;
	align-items: center;

`;

const Line = styled.div`
	width: 500px;
	max-width: 500px;
	height: 3px;
`;

const TextContainer = styled.div`
	background-color: transparent;
	margin: auto 1rem;
	font-size: 16px;

		@media (min-width: 768px) {
			font-size: 18px;
		}

		@media (min-width: 1024px) {
			font-size: 20px;
		}

		@media (min-width: 1440px) {
			font-size: 24px;
		}
`;

type Props = {
    text :string;
    textColor:string;
    style :{}
}

export const HorizontalRule = ({ text, textColor, style }:Props) => {
  const { isDarkMode } = useTheme();
  const { whiteColor, lightBlackColor } = Colors();

  return (
    <Row>
      <Col>
        <HrContainer
          data-aos="fade-up"
          data-aos-once="true"
          style={style}
        >

          <Line style={{
            backgroundColor: isDarkMode ? whiteColor : lightBlackColor
          }} ></Line>

          <TextContainer
            style={{ color: textColor }}
          >
            {text}
          </TextContainer>

          <Line   style={{
            backgroundColor: isDarkMode ? whiteColor : lightBlackColor
          }}></Line>

        </HrContainer>
      </Col>
    </Row>

  );
}