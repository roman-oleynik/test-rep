import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { State, LocationResponse } from '../types/types';

const height = Dimensions.get('window').height;

export default function ChosenLocationResponse() {
  const { 
    latitude,
    longitude,
    temperature,
    date,
    location,
    weatherDesc,
    wind
  } = useSelector((state: State) => state.chosenLocationResponse);
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Координаты:</Text>
      <Text>{`Широта: ${latitude.toFixed(4)}`}</Text>
      <Text>{`Долгота: ${longitude.toFixed(4)}`}</Text>
      <View>
        <Text style={styles.subtitle}>Погода:</Text>
        <View>
          <Text>{`Температура: ${temperature}°`}</Text>
          <Text>{weatherDesc}</Text>
          <Text>{`Ветер: ${wind} м/с.`}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Местоположение:</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
