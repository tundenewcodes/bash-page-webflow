import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../utils/colors/colors";

type Props = {
  link: string;
  linkName: string;
};

const SocialLinks = ({ link, linkName }: Props) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { whiteColor, goldColor } = Colors();
  return (
    <LinksWrapper
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onClick={() => setMouseEnter(true)}
      style={{
        borderBottom: !mouseEnter
          ? `1px solid ${whiteColor} `
          : `1px solid ${goldColor} `,
      }}
    >
      <a
        href={link}
        hrefLang="en-us"
        rel="noreferrer noopener nofollow"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Links
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
          onClick={() => setMouseEnter(true)}
          style={{
            color: !mouseEnter ? ` ${whiteColor} ` : `${goldColor} `,
          }}
        >
          {linkName}
        </Links>
      </a>
    </LinksWrapper>
  );
};

export default SocialLinks;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  padding: 4px;
  padding-left: 0px;
  cursor: pointer;
  border-bottom: 1px solid var(--white-color);
`;

const Links = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: var(--white-color);
`;
