import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { State, LocationResponse } from '../types/types';

export default function HistoryTabScreen() {
  const locationResponses = useSelector((state: State) => state.locationResponses);
  console.log(locationResponses);
  return (
    <ScrollView style={styles.container}>
      {
        locationResponses.length > 0 &&
        locationResponses.map((el: LocationResponse) => {
          return <View key={el.id}>
            <Text>{el.location}</Text>
          </View>
        })
      }
    </ScrollView>
  );
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
