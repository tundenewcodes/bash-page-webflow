import React from "react";
import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";

type Props = {
  title: string;
};

const TitleHeading = ({ title }: Props) => {
  const { line } = useExternalMedia();
  return (
    
      <TitleHeadingWrapper   data-aos-once="true" data-aos="fade-up">
        <Title>{title}</Title>
        <img src={line} alt="line" />
      </TitleHeadingWrapper>
 
  );
};

export default TitleHeading;

const Title = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: var(--white-color);
`;

const TitleHeadingWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 27px;

  height: 38px;
`;
