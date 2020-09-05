import { useState, useEffect } from 'react';
import axios from 'axios';

export function useWeatherAPI(latitude: number, longitude: number) {
  const [ weather, setWeather ] = useState<any>(null);

  async function makeAPICall(apiUrl: string) {
    const weatherResponse = await axios.get(apiUrl);
    setWeather(weatherResponse.data.data[0]);
  }

  useEffect(() => {
    if (latitude && longitude) {
      const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=4753c247db0043ffaae3452cd9c5ed3f`;
      makeAPICall(apiUrl);
    }
  }, []);

  return weather || null;
}