import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GeodataAndWeather } from '../components/GeodataAndWeather';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../types/types';
import { setClient, addActiveUser, deleteActiveUserOnServer } from '../redux/actions/actions';

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
  const client = useSelector((state: State) => state.client);
  
  const onConnectPressed = () => {
    setIsGeodataHidden(false);
  }
  const onDisconnectPressed = () => {
    setIsGeodataHidden(true);
    if (client) {
      dispatch(deleteActiveUserOnServer(client.id));
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Привет!</Text>
      <Text style={styles.simpleText}>Это приложение создано для того, чтобы находить своих единомышленников и быстро консолидироваться. 
        Так мы можем оперативно объединяться в большую толпу и противостоять нашему общему врагу (если интернет не отключат :)). Также при помощи него можно фиксировать посещаемость митингов (если все посетители его установят). 
        Пока что это программа с примитивным интерфейсом, отображающая всех людей, кто ее использует. Однако сюда можно добавить возможность вносить отметки на карте,
        которые показывают расположение силовиков или добавить чат, где можно обсуждать действия насчет движения к определенной локации (можно добавить специальный маркер для этого). 
      </Text>
      <Text style={styles.simpleText}>Подключитесь, чтобы работать с приложением.</Text>
      {
        !isGeodataHidden
        ?
        <>
          <GeodataAndWeather latitude={latitude} longitude={longitude} />
          <TouchableOpacity
            onPress={onDisconnectPressed}>
              <View style={styles.button_disconnect}>
                <Text style={styles.buttonText}>Disconnect</Text>
              </View>
          </TouchableOpacity>
        </>
        :
        <TouchableOpacity
          onPress={onConnectPressed}>
            <View style={styles.button_connect}>
              <Text style={styles.buttonText}>Подключиться</Text>
            </View>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  simpleText: {
    fontSize: 14,
    textAlign: 'center',
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
  }
});
