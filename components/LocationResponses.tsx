import * as WebBrowser from 'expo-web-browser';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';



export default function LocationResponses({ path }: { path: string }) {
  return <Text>EditScreenInfo</Text>
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: 200,
    margin: 20,
  }
});
