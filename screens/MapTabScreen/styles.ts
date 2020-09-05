import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
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
  