import React from 'react'
import styled from "styled-components";

export const Title = () => {
  return (
    <Wrapper>
      <StyledTitle>天気予報</StyledTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: red;
`;

const StyledTitle = styled.div`
  text-align: center;
`;
