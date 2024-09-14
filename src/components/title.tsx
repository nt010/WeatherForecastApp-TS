import React from 'react';
import styled from "styled-components";
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // 天気アイコンとして使用

export const Title = () => {
  return (
    <Wrapper>
      <StyledTitle>
        <WbSunnyIcon style={{ fontSize: 40, marginRight: 10 }} />
        Weather Forecast
      </StyledTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(45deg, #2196F3, #21CBF3); /* グラデーションを追加 */
  height: 80px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const StyledTitle = styled.div`
  color: white;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif; /* フォントスタイルを変更 */
  display: flex;
  align-items: center;
`;

export default Title;
