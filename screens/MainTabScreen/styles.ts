import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    buttonConnect: {
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
    buttonDisconnect: {
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
  });