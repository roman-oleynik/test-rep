import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { generateId } from '../modules/generateId';
import { setClient, addActiveUser, postActiveUserToServer, addLocationResponse } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types/types';
import axios from 'axios';

type Props = {
	latitude: number,
	longitude: number
};

export function GeodataAndWeather({latitude, longitude}: Props) {
  const dispatch = useDispatch();
  const [ reverseGeocodingData, setReverseGeocodingData ] = useState<any>({});
  const client = useSelector((state: State) => state.client);
  const [ weather, setWeather ] = useState<any>(null);

  async function makeAPICalls(reverseGeocodingAPI: string, weatherAPI: string) {
    const reverseGeocodingResponse = await axios.get(reverseGeocodingAPI);
    const locationData = reverseGeocodingResponse.data;
    setReverseGeocodingData(locationData);
    const weatherResponse = await axios.get(weatherAPI);
    const weatherData = weatherResponse.data;
    // console.log(weatherData.data[0]);
    setWeather(weatherData.data[0]);

    const clientPayload = {
      id: generateId(),
      latitude,
      longitude
    };

    const locationResponse = {
      id: clientPayload.id,
      latitude,
      longitude,
      date: new Date().toISOString().slice(0,10),
      location: locationData.features[0].place_name
    };

    dispatch(setClient(clientPayload));
    dispatch(postActiveUserToServer(clientPayload));
    dispatch(addLocationResponse(locationResponse));
  }

  useEffect(() => {
    if (latitude && longitude) {
      const reverseGeocodingAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoicm9tYW4tb2xleW5payIsImEiOiJja2VsbjBibmUwNTFpMnR0ODRwem1menNnIn0.p-Q1LOmIrDEa5novYhknqg`;
      const weatherAPI = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=4753c247db0043ffaae3452cd9c5ed3f`;
      makeAPICalls(reverseGeocodingAPI, weatherAPI);
    }
  }, []);
	return <View>
      {
        latitude && longitude
        ?
        <>
          <View>
            <Text>Latitude: {latitude}</Text>
            <Text>Longitude: {longitude}</Text>
            {
              reverseGeocodingData.features && reverseGeocodingData.features[0]
              && <Text>{reverseGeocodingData.features[0].place_name}</Text>
            }
          </View>
          <View>
            {
              weather
              ?
              <View>
                <Text>Temperature: {weather.app_temp}</Text>
                <Text>Temperature: {weather.app_temp}</Text>
              </View>
              :
              <Text>Weather has not loaded</Text>
            }
          </View>
        </>
        :
        <Text>Loading...</Text>
      }
			
	</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});