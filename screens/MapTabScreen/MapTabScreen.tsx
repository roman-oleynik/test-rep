import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { State, User } from '../../types/appDataTypes';
import { fetchActiveUsersFromServer } from '../../redux/actions/actions';
import { styles } from './styles';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props: any) => {
  return <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    {
      props.activeUsers.length > 0 &&
      props.activeUsers.map((el: User) => {
        return <Marker
          position={{ lat: el.latitude, lng: el.longitude }}
        />
      })
    }
    
  </GoogleMap>
}));

export default function MapTabScreen() {
  const dispatch = useDispatch();
  const activeUsers = useSelector((state: State) => state.activeUsers);
  const client = useSelector((state: State) => state.client);

  useEffect(() => {
    dispatch(fetchActiveUsersFromServer());
  }, [client]);
  return (
    <View>
      {
        client
        ?
        <MyMapComponent
          latitude={client.latitude}
          longitude={client.longitude}
          activeUsers={activeUsers}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        :
        <View style={styles.singleTextView}>
          <Text>Подключитесь, чтобы увидеть карту.</Text>
        </View>
      }
      
      {/* {
        client
        ?
        <MapView
          style={styles.map}
          region={{
            latitude: client.latitude,
            longitude: client.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          {
            activeUsers.length > 0 &&
            activeUsers.map(el => {
              return <Marker
                key={el.id}
                coordinate={{
                  latitude: el.latitude,
                  longitude: el.longitude,
                }}
              />
            })
          }
        </MapView>
        :
        <View style={styles.singleTextView}>
          <Text>Подключитесь, чтобы увидеть карту.</Text>
        </View>
      } */}
    </View>
  );
}
