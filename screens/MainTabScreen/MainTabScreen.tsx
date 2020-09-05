import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GeodataAndWeather } from '../../components/GeodataAndWeather/GeodataAndWeather';
import { useSelector, useDispatch } from 'react-redux';
import { State, User } from '../../types/types';
import { setClient, addActiveUser, deleteActiveUserOnServer } from '../../redux/actions/actions';
import LocationResponses from '../../components/LocationResponses';
import { styles } from './styles';
import { AppTitleContent } from '../../components/AppTitleContent/AppTitleContent';


function useLocation() {
	const [latitude, setLatitude] = useState<any>(0);
	const [longitude, setLongitude] = useState<any>(0);
  const [error, setError] = useState<any>("");

	function onSuccess(position: any) {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	}
	function onError() {
		setError('Unable to retrieve your location');
	}
	if(!navigator.geolocation) {
		setError('Geolocation is not supported by your browser');
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
	return {
		latitude,
		longitude,
		error,
	};
}

export default function MainTabScreen() {
  const dispatch = useDispatch();
  const client = useSelector((state: State) => state.client);

  const { latitude, longitude } = useLocation();

  const [ isGeodataHidden, setIsGeodataHidden ] = useState(true);
  const [ isDisconnectButtonDisabled, setIsDisconnectButtonDisabled ] = useState(false);
  
  const onConnectPressed = () => {
    setIsGeodataHidden(false);
    setIsDisconnectButtonDisabled(true);
  }
  const onDisconnectPressed = () => {
    setIsDisconnectButtonDisabled(true);
    dispatch( deleteActiveUserOnServer(client.id) );
  };
  const hideGeodataOnClientIsNull = (client: User) => {
    if (!client) {
      setIsGeodataHidden(true);
    }
  };
  const enableButtonOnClientInit = (client: User) => {
    if (client) {
      setIsDisconnectButtonDisabled(false);
    }
  };

  useEffect(() => {
    hideGeodataOnClientIsNull(client);
    enableButtonOnClientInit(client)
  }, [client]);

  return (
    <View style={styles.container}>
      {
        !isGeodataHidden
        ?
        <View style={styles.container}>
          <GeodataAndWeather
            latitude={latitude}
            longitude={longitude}
          />
          <TouchableOpacity
            style={isDisconnectButtonDisabled
              ? styles.buttonDisabled : styles.buttonDisconnect}
            disabled={isDisconnectButtonDisabled}
            onPress={onDisconnectPressed}>
              <Text style={styles.buttonText}>Отключиться</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.container}>
          <AppTitleContent />
          <TouchableOpacity
            style={styles.buttonConnect}
            onPress={onConnectPressed}>
              <Text style={styles.buttonText}>Жми сюда</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}


