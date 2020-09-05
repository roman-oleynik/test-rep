import * as React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { State } from '../../types/appDataTypes';
import { Coords } from '../../components/Coords/Coords';
import { Weather } from '../../components/Weather/Weather';
import { Address } from '../../components/Address/Address';
import { styles } from './styles';


export default function ChosenLocationResponse() {
  const { 
    latitude,
    longitude,
    temperature,
    location,
    weatherDesc,
    wind
  } = useSelector((state: State) => state.chosenLocationResponse);
  return (
    <View style={styles.container}>
      <Coords
        latitude={latitude}
        longitude={longitude}
      />
      <Weather
        title="Погода:"
        temperature={`${temperature}°`}
        description={weatherDesc}
        wind={`${wind} м/с.`}
      />
      <Address
        title="Местоположение:"
        address={location}
      />
    </View>
  );
}


