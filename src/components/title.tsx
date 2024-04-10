import React from 'react';
import styled from "styled-components";

export const Title = () => {
  return (
    <Wrapper>
      <StyledTitle>天気予報を表示します</StyledTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: orange;
  height: 60px;
  margin: 30px;
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
`;
