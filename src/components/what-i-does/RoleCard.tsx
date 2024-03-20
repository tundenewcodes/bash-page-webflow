import React, { useState } from "react";
import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import { Colors } from "../../utils/colors/colors";

type Props = {
  roleTitle: string;
  description: string;

  id: number;
};

const RoleCard = ({ roleTitle, description, id }: Props) => {
  const { cardIcon } = useExternalMedia();
  const { blackColor, lightDarkColor, whiteColor, goldColor } = Colors();
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <RoleCardWrapper
      data-aos-once="true"
      data-aos="fade-up"
      key={id}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onClick={() => setMouseEnter(true)}
      style={{
        border: !mouseEnter
          ? "1px solid rgba(255, 255, 255, 0.5)"
          : " 1px solid #e3d195",
        backgroundColor: !mouseEnter ? lightDarkColor : blackColor,
        boxShadow: !mouseEnter ? "none" : "8px 8px 0px rgba(209, 179, 79, 0.2)",
      }}
    >
      <RoleCardMainWrapper>
        <img
          src={cardIcon}
          alt="logo"
          style={{
            width: "64px",
            height: "64px",
          }}
        />

        <div>
          <Title
            data-aos-once="true"
            data-aos="fade-up"
            style={{
              color: !mouseEnter ? whiteColor : goldColor,
            }}
          >
            {roleTitle}
          </Title>
          <Description data-aos-once="true" data-aos="fade-up">
            {description}
          </Description>
        </div>
      </RoleCardMainWrapper>
    </RoleCardWrapper>
  );
};

export default RoleCard;

const RoleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 30px;
  gap: 8px;
  width: 320px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 450px;
  min-height: 450px;
  max-height: 450px;
`;

const RoleCardMainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px;
  gap: 60px;
`;

const Title = styled.p`
  font-family: "Gilroy", sans-serif;

  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: var(--white-color);
`;
const Description = styled.p`
  font-family: "Gilroy", sans-serif;

  font-weight: 400;
  font-size: 18px;
  line-height: 160%;

  color: rgba(255, 255, 255, 0.5);
`;
