import { useState, useEffect } from 'react';
import axios from 'axios';

export type Weather = {
  app_temp: number,
  wind_spd: number,
  weather: {
    description: string
  }
};

type WeatherHookReturnType = {
  weather: Weather | null,
  weatherError: string
};

export function useWeatherAPI(latitude: number, longitude: number): WeatherHookReturnType {
  const [ weather, setWeather ] = useState<Weather | null>(null);
  const [ weatherError, setError ] = useState<string>('');

  async function makeAPICall(apiUrl: string) {
    try {
      const weatherResponse = await axios.get(apiUrl);
      setWeather(weatherResponse.data.data[0]);
    } catch (err) {
      setError("Couldn't request the weather data.");
      return;
    }
  }

  useEffect(() => {
    if (latitude && longitude) {
      const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=4753c247db0043ffaae3452cd9c5ed3f`;
      makeAPICall(apiUrl);
    }
  }, []);

  return {
    weather,
    weatherError
  };
}