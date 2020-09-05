import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GeodataAndWeather } from '../components/GeodataAndWeather';
import { useSelector, useDispatch } from 'react-redux';
import { State, User } from '../types/types';
import { setClient, addActiveUser, deleteActiveUserOnServer } from '../redux/actions/actions';
import LocationResponses from '../components/LocationResponses';


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
  const { latitude, longitude } = useLocation();
  const [ isGeodataHidden, setIsGeodataHidden ] = useState(true);
  const [ isConnectButtonDisabled, setIsConnectButtonDisabled ] = useState(false);
  const [ isDisconnectButtonDisabled, setIsDisconnectButtonDisabled ] = useState(false);
  const client = useSelector((state: State) => state.client);
  
  const onConnectPressed = () => {
    setIsGeodataHidden(false);
    setIsDisconnectButtonDisabled(true);
  }
  const onDisconnectPressed = () => {
    setIsDisconnectButtonDisabled(true);
    if (client) {
      dispatch(deleteActiveUserOnServer(client.id));
    }
  };
  const manageViewOnClientChange = (client: User) => {
    if (client) {
      setIsDisconnectButtonDisabled(false);
    } else {
      setIsGeodataHidden(true);
    }
  };
  useEffect(() => {
    manageViewOnClientChange(client);
  }, [client]);
  return (
    <View style={styles.container}>
      {
        !isGeodataHidden
        ?
        <>
          <GeodataAndWeather
            latitude={latitude}
            longitude={longitude}
          />
          <TouchableOpacity
            disabled={isDisconnectButtonDisabled}
            onPress={onDisconnectPressed}>
              <View style={isDisconnectButtonDisabled ? styles.buttonDisabled : styles.button_disconnect}>
                <Text style={styles.buttonText}>Отключиться</Text>
              </View>
          </TouchableOpacity>
        </>
        :
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Привет!</Text>
          <Text style={styles.simpleText}>Сейчас я помогу тебе найти единомышленников.</Text>
          <TouchableOpacity
            disabled={isConnectButtonDisabled}
            onPress={onConnectPressed}>
              <View style={isConnectButtonDisabled ? styles.buttonDisabled : styles.button_connect}>
                <Text style={styles.buttonText}>Жми сюда</Text>
              </View>
          </TouchableOpacity>
        </View>
        
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  simpleText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button_connect: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonDisabled: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  button_disconnect: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#ee3766'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  logo: {
    height: 200,
    width: 200
  }
});
