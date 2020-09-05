import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { generateId } from '../modules/generateId';
import { setClient, addActiveUser, postActiveUserToServer, addLocationResponse } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State, LocationResponse, User } from '../types/types';
import axios from 'axios';
import LocationResponses from './LocationResponses';

type Props = {
	latitude: number,
	longitude: number
};

const height = Dimensions.get('window').height;

export function GeodataAndWeather({latitude, longitude}: Props) {
  const dispatch = useDispatch();
  const [ reverseGeocodingData, setReverseGeocodingData ] = useState<any>({});
  const client = useSelector((state: State) => state.client);
  const [ weather, setWeather ] = useState<any>(null);

  function initClient(
    id: string,
    latitude: number,
    longitude: number,
  ) {
    const payload = {
      id,
      latitude,
      longitude
    };
    dispatch(setClient(payload));
  };

  function startAddingLocationResponse(
    id: string,
    latitude: number,
    longitude: number,
    location: string,
    temperature: number,
    weatherDesc: string,
    wind: number,
  ) {
    const payload = {
      id,
      latitude,
      longitude,
      date: new Date().toISOString().slice(0,10),
      location,
      temperature,
      weatherDesc,
      wind,
    };
    dispatch(addLocationResponse(payload));
  };

  function postClientDataToServer(
    id: string,
    latitude: number,
    longitude: number
  ) {
    const payload: User = {
      id,
      latitude,
      longitude
    };
    dispatch(postActiveUserToServer(payload));
  }

  async function makeAPICalls(reverseGeocodingAPI: string, weatherAPI: string) {
    const reverseGeocodingResponse = await axios.get(reverseGeocodingAPI);
    const locationData = reverseGeocodingResponse.data;
    setReverseGeocodingData(locationData);

    const weatherResponse = await axios.get(weatherAPI);
    const weatherData = weatherResponse.data;
    setWeather(weatherData.data[0]);

    const idOfNewClient = generateId();
    
    initClient(idOfNewClient, latitude, longitude);
    postClientDataToServer(idOfNewClient, latitude, longitude);
    startAddingLocationResponse(
      idOfNewClient,
      latitude,
      longitude,
      locationData.features[3].place_name,
      weatherData.data[0].app_temp,
      weatherData.data[0].weather.description,
      weatherData.data[0].wind_spd.toFixed(0)
    );
  }

  useEffect(() => {
    if (latitude && longitude) {
      const reverseGeocodingAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoicm9tYW4tb2xleW5payIsImEiOiJja2VsbjBibmUwNTFpMnR0ODRwem1menNnIn0.p-Q1LOmIrDEa5novYhknqg`;
      const weatherAPI = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=4753c247db0043ffaae3452cd9c5ed3f`;
      makeAPICalls(reverseGeocodingAPI, weatherAPI);
    }
  }, []);
	return <View style={styles.container}>
      {
        latitude && longitude
        ?
        <View>
          <Text style={styles.subtitle}>Координаты:</Text>
          <Text>Широта: {latitude.toFixed(4)}</Text>
          <Text>Долгота: {longitude.toFixed(4)}</Text>
          <View style={styles.separator}>
            <Text style={styles.title}>Отлично!</Text>
            <View>
              <Text style={styles.subtitle}>Небольшие данные по погоде:</Text>
              <View>
                <Text>{`Температура: ${weather ? weather.app_temp + "°" : "подождите..."}`}</Text>
                <Text>{weather ? weather.weather.description : "Подождите..."}</Text>
                <Text>{`Ветер: ${weather ? weather.wind_spd.toFixed(0) + " м/с" : "подождите..."}`}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.subtitle}>Твой адрес:</Text>
              <Text>
                {
                  reverseGeocodingData.features && reverseGeocodingData.features[0]
                  && <Text>{reverseGeocodingData.features[0].place_name}</Text>
                }
              </Text>
              <Text>Сейчас ты можешь перейти к карте.</Text>
            </View>
          </View>
        </View>
        :
        <Text>Loading...</Text>
      }
			
	</View>
}

const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 32,
    textAlign: 'left',
  },
  textCenter: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 30,
  },
  textLeft: {
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 30,
  },
  separator: {
    marginVertical: 60,
  },
});