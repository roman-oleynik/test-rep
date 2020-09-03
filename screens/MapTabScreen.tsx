import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import EditScreenInfo from '../components/LocationResponses';

export default function MapTabScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
