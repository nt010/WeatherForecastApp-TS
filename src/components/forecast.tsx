import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/weatherApi';
import { WeatherData } from '../types/weather';
import { Box, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';


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

  const handleAreaChange = (e: SelectChangeEvent<string>) => {
    setAreaCode(e.target.value as string);
  };

  // 日付を O月*日（O曜日）形式に変換する関数
  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
    return `${date.getMonth() + 1}月${date.getDate()}日(${daysOfWeek[date.getDay()]}) ${date.getHours()}時${date.getMinutes()}分`;
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Card sx={{ maxWidth: 500, padding: 2 }}>
        <CardContent>
          <FormControl fullWidth>
            <InputLabel id="area-select-label">地域</InputLabel>
            <Select
              labelId="area-select-label"
              value={areaCode}
              onChange={handleAreaChange}
              label="地域"
            >
              <MenuItem value="014100">北海道(釧路・根室地方)</MenuItem>
              <MenuItem value="040000">宮城</MenuItem>
              <MenuItem value="130000">東京</MenuItem>
              <MenuItem value="170000">石川</MenuItem>
              <MenuItem value="230000">愛知</MenuItem>
              <MenuItem value="270000">大阪</MenuItem>
              <MenuItem value="340000">広島</MenuItem>
              <MenuItem value="400000">福岡</MenuItem>
              <MenuItem value="471000">沖縄(本島)</MenuItem>
            </Select>
          </FormControl>

          {weatherData && (
            <>
              <Typography variant="h5" component="div" sx={{ marginTop: 3, fontWeight: 'bold' }}>
                {formatDate(weatherData.reportDatetime)}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {weatherData.text}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Forecast;
