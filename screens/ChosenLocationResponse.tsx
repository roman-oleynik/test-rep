import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { State, LocationResponse } from '../types/types';


export default function ChosenLocationResponse(props: any) {
  const chosenLocationResponse = useSelector((state: State) => state.chosenLocationResponse);
  return (<>
    <Text>{chosenLocationResponse.latitude}</Text>
    <Text>{chosenLocationResponse.longitude}</Text>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
