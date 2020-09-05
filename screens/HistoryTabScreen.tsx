import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { State, LocationResponse } from '../types/types';
import { setChosenLocationResponse } from '../redux/actions/actions';

const height = Dimensions.get('window').height;

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
          .sort((a, b) => new Date(a.date).getMilliseconds() - new Date(b.date).getMilliseconds())
          .map((el: LocationResponse) => {
            return <TouchableOpacity
              key={el.id}
              onPress={() => onLocationResponsePress(el)}
              style={styles.link}>
                <View>
                  <Text style={styles.textBig}>{new Date(el.date).toLocaleDateString()}</Text>
                  <Text style={styles.textMedium}>{el.location}</Text>
                  <Text style={styles.textSmall}>{el.latitude.toFixed(4)}/{el.longitude.toFixed(4)}</Text>
                </View>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  link: {
    width: '100%',
    height: 80,
    borderColor: '#000',
    borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  textSmall: {
    fontSize: 12,
    paddingTop: 2,
  },
  textMedium: {
    fontSize: 16,
    paddingTop: 2,
  },
  textBig: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightseagreen',
  },
  singleTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
