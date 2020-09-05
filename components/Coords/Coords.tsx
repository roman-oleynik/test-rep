import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  latitude: number,
  longitude: number,
}

export function Coords({ latitude, longitude }: Props) {
  return <View style={styles.container}>
    <Text style={styles.subtitle}>Координаты:</Text>
    <Text>Широта: {latitude.toFixed(4)}</Text>
    <Text>Долгота: {longitude.toFixed(4)}</Text>
  </View>
}