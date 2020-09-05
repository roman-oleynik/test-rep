import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { State, LocationResponse } from '../../types/types';
import { setChosenLocationResponse } from '../../redux/actions/actions';
import { styles } from './styles';
import { LocationResponseLink } from '../../components/LocationResponseLink/LocationResponseLink';

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
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {
          locationResponses.length > 0
          ?
          locationResponses
          .sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds())
          .map((el: LocationResponse) => {
            return <LocationResponseLink
              key={el.id}
              data={el}
              onPress={() => onLocationResponsePress(el)}
            />
          })
          :
          <View style={styles.singleTextView}>
            <Text>Пока пусто.</Text>
          </View>
        }
      </View>
    </ScrollView>
  );
}


