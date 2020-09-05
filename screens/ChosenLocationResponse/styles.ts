import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
});