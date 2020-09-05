import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
      height,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 40,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 32,
      textAlign: 'left',
    },
    textCenter: {
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 30,
    },
    textLeft: {
      fontSize: 14,
      textAlign: 'left',
      lineHeight: 30,
    },
    separator: {
      marginVertical: 60,
    },
});