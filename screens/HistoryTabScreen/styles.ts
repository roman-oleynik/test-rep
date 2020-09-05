import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  link: {
    width: '100%',
    height: 80,
    borderColor: '#000',
    borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  textSmall: {
    fontSize: 12,
    paddingTop: 2,
  },
  textMedium: {
    fontSize: 16,
    paddingTop: 2,
  },
  textBig: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightseagreen',
  },
  singleTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  }
});