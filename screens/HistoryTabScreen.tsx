import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { State, LocationResponse } from '../types/types';
import { setChosenLocationResponse } from '../redux/actions/actions';

type Props = {
  navigation: any
}

export default function HistoryTabScreen({navigation}: Props) {
  const dispatch = useDispatch();
  const locationResponses = useSelector((state: State) => state.locationResponses);

  const onLocationResponsePress = (locationResponse: LocationResponse) => {
    dispatch(setChosenLocationResponse(locationResponse));
    navigation.navigate("ChosenLocationResponse");
  };

  return (
    <ScrollView style={styles.container}>
      {
        locationResponses.length > 0 &&
        locationResponses.map((el: LocationResponse) => {
          return <TouchableOpacity
            key={el.id}
            onPress={() => onLocationResponsePress(el)}>
            <View>
              <Text>
                {el.location}
              </Text>
            </View>
          </TouchableOpacity>
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
