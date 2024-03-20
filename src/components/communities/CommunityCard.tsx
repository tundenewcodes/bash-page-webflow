import React from "react";
import styled from "styled-components";

type Props = {
  communityTitle: string;
  description: string;
  communityImage: string;
};

const CommunityCard = ({
  communityTitle,
  description,
  communityImage,
}: Props) => {
  return (
    <CommunityCardWrapper data-aos-once="true" data-aos="fade-up">
      <Img src={communityImage} />
      <Title data-aos-once="true" data-aos="fade-up">
        {communityTitle}
      </Title>
      <Description data-aos-once="true" data-aos="fade-up">
        {description}
      </Description>
    </CommunityCardWrapper>
  );
};

export default CommunityCard;

const CommunityCardWrapper = styled.div`


display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;
marginBottom:"24px"
width: 387px;



`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  min-height: 300px;
  max-height: 300px;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: var(--white-color);
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  text-align: justify;
  color: rgba(255, 255, 255, 0.5);
`;
