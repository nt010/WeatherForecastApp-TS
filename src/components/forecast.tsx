import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/weatherApi';
import { WeatherData } from '../types/weather';

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
    <div>
      <h1>天気予報</h1>
      <select value={areaCode} onChange={handleAreaChange}>
        <option value="130000">東京</option>
        <option value="270000">大阪</option>
      </select>
      {weatherData && (
        <div>
          <h2>{weatherData.reportDatetime}</h2>
          <p>{weatherData.text}</p>
        </div>
      )}
    </div>
  );
};

export default Forecast;