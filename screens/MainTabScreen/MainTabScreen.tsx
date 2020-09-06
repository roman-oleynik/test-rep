import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { GeodataAndWeather } from '../../components/GeodataAndWeather/GeodataAndWeather';
import { useSelector, useDispatch } from 'react-redux';
import { State, User } from '../../types/appDataTypes';
import { deleteActiveUserOnServer, setError } from '../../redux/actions/actions';
import { styles } from './styles';
import { AppTitleContent } from '../../components/AppTitleContent/AppTitleContent';
import { useGeolocation } from '../../hooks/useGeolocation';


export default function MainTabScreen() {
  const dispatch = useDispatch();
  const client = useSelector((state: State) => state.client);
  const error = useSelector((state: State) => state.error);

  const { latitude, longitude } = useGeolocation();

  const [ isGeodataHidden, setIsGeodataHidden ] = useState(true);
  const [ isDisconnectButtonDisabled, setIsDisconnectButtonDisabled ] = useState(false);
  
  const onConnectPressed = () => {
    setIsGeodataHidden(false);
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
  const onReloadPressed = () => {
    dispatch( setError('') );
  };
  const onBackPressed = () => {
    setIsGeodataHidden(true);
    dispatch( setError('') );
  };

  useEffect(() => {
    hideGeodataOnClientIsNull(client);
    enableButtonOnClientInit(client);
  }, [client]);

  if (error) {
    return <View style={styles.container}>
      <Text>{error}</Text>
      <TouchableOpacity
        style={styles.buttonConnect}
        onPress={onReloadPressed}>
          <Text style={styles.buttonText}>Попробовать снова</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDisconnect}
        onPress={onBackPressed}>
          <Text style={styles.buttonText}>Назад</Text>
      </TouchableOpacity>
    </View>
  }
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


