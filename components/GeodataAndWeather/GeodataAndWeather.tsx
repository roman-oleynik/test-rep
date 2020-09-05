import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { generateId } from '../../modules/generateId';
import { postActiveUserToServer, addLocationResponse } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { LocationResponseArguments, User, UserArguments, LocationResponse } from '../../types/appDataTypes';
import { styles } from './styles';
import { useWeatherAPI } from '../../hooks/useWeatherAPI';
import { useReverseGeocodingAPI } from '../../hooks/useReverseGeocodingAPI';
import { createLocationResponsePayload, createClientPayload } from '../../utils/utils';
import { Coords } from '../Coords/Coords';
import { Weather } from '../Weather/Weather';
import { Address } from '../Address/Address';

type Props = {
	latitude: number,
  longitude: number,
  onError: () => void,
};


export function GeodataAndWeather({latitude, longitude, onError}: Props) {
  const dispatch = useDispatch();
  const { weather, weatherError } = useWeatherAPI(latitude, longitude);
  const { reverseGeocodingData, reverseGeocodingError } = useReverseGeocodingAPI(latitude, longitude);
  
  useEffect(() => {
    if (weather && reverseGeocodingData) {
      const idOfNewClient = generateId();

      postClientDataToServer(idOfNewClient, latitude, longitude);
      startAddingLocationResponse(
        idOfNewClient,
        latitude,
        longitude,
        reverseGeocodingData.features[3].place_name,
        weather.app_temp,
        weather.weather.description,
        weather.wind_spd
      );
    } 
    if (weatherError) {
      onError();
    }
    if (reverseGeocodingError) {
      onError();
    }
  }, [weather, reverseGeocodingData]);

  function startAddingLocationResponse(...args: LocationResponseArguments) {
    const payload = createLocationResponsePayload(...args);
    dispatch( addLocationResponse(payload) );
  };

  function postClientDataToServer(...args: UserArguments) {
    const payload: User = createClientPayload(...args);
    dispatch( postActiveUserToServer(payload) );
  }

	return <View style={styles.container}>
      {
        latitude && longitude
        ?
        <View>
          <Coords
            latitude={latitude}
            longitude={longitude}
          />
          <View style={styles.separator}>
            <Text style={styles.title}>Отлично!</Text>
            <Weather
              title="Небольшие данные о погоде:"
              temperature={weather ? weather.app_temp + "°" : "подождите..."}
              description={weather ? weather.weather.description : "Подождите..."}
              wind={weather ? weather.wind_spd.toFixed(0) + " м/с" : "подождите..."}
            />
            {
              reverseGeocodingData 
              && reverseGeocodingData.features 
              && reverseGeocodingData.features[0]
              && <Address
                title="Твой адрес:"
                address={reverseGeocodingData.features[0].place_name}
              />
            }
            <Text>Сейчас ты можешь перейти к карте.</Text>
          </View>
        </View>
        :
        <Text>Loading...</Text>
      }
			
	</View>
}

