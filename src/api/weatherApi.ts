import axios from 'axios';
import { WeatherData } from '../types/weather';

const BASE_URL = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/';

export const fetchWeatherData = async (areaCode: string): Promise<WeatherData | null> => {
  try {
    const response = await axios.get<WeatherData>(`${BASE_URL}${areaCode}.json`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};