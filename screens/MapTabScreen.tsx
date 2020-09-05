import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../types/types';
import { fetchActiveUsersFromServer } from '../redux/actions/actions';

const height = Dimensions.get('window').height;

export default function MapTabScreen() {
  const dispatch = useDispatch();
  const activeUsers = useSelector((state: State) => state.activeUsers);
  const client = useSelector((state: State) => state.client);

  useEffect(() => {
    dispatch(fetchActiveUsersFromServer());
    console.log(client);
  }, [client]);
  return (
    <View>
      {
    //     client
    //     ?
    //     <MapView
    //       style={styles.map}
    //       region={{
    //         latitude: client.latitude,
    //         longitude: client.longitude,
    //         latitudeDelta: 0.015,
    //         longitudeDelta: 0.0121
    //       }}
    //     >
    //       {
    //         activeUsers.length > 0 &&
    //         activeUsers.map(el => {
    //           return <Marker
    //             key={el.id}
    //             coordinate={{
    //               latitude: el.latitude,
    //               longitude: el.longitude,
    //             }}
    //           />
    //         })
    //       }
    //     </MapView>
    //     :
    //     <View style={styles.singleTextView}>
    //       <Text>Подключитесь, чтобы увидеть карту.</Text>
    //     </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300
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
  map: {
    height
  },
  singleTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  }
});
