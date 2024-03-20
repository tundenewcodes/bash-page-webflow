import React from 'react';
import styled from 'styled-components';
import './Title.css';
import { ITitle } from '../../types/title';


const TitleComponent = styled.h1`

`;

const HeaderTwoTitleComponent = styled.h2`

`;


function Title({
  textColor,
  text,
  style,
  cName,
  children,
  type
}: ITitle) {

  return (
    <>
      {type === "h1" &&
        <TitleComponent
          data-aos="fade-up"
          data-aos-once="true"
          className={`title ${cName}`}
          style={{
            color: textColor,
            ...style
          }}
        >
          {children ? children : null}
          {text ? text : null}
        </TitleComponent>
      }

      {type === "h2" &&
        <HeaderTwoTitleComponent
          data-aos="fade-up"
          data-aos-once="true"
          className={`title ${cName}`}
          style={{
            color: textColor,
            ...style
          }}
        >
          {children ? children : null}
          {text ? text : null}
        </HeaderTwoTitleComponent>
      }
    </>
  );
}

export default Title;