import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/weatherApi';
import { WeatherData } from '../types/weather';
import styled from "styled-components";

const Forecast = () => {
  const [areaCode, setAreaCode] = useState('130000');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(areaCode);
      setWeatherData(data);
    };

    fetchData();
  }, [areaCode]);

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAreaCode(e.target.value);
  };

  return (
    <Wrapper>
      <select value={areaCode} onChange={handleAreaChange}>
        <option value="014100">北海道(釧路・根室地方)</option>
        <option value="040000">宮城</option>
        <option value="130000">東京</option>
        <option value="170000">石川</option>
        <option value="230000">愛知</option>
        <option value="270000">大阪</option>
        <option value="340000">広島</option>
        <option value="400000">福岡</option>
        <option value="471000">沖縄(本島)</option>
      </select>
      {weatherData && (
        <>
          <StyledTime>{weatherData.reportDatetime}</StyledTime>
          <StyledText>{weatherData.text}</StyledText>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: blue;
  text-align: center;
  line-height: 60px;
  margin: 30px;
`;
const StyledTime = styled.div`
  background-color: blue;
  text-align: center;
  line-height: 60px;
  margin: 30px;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const StyledText = styled.div`
  line-height: 60px;
  margin: 30px;
  color: white;
`;

export default Forecast;