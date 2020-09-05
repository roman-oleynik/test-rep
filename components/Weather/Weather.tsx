import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string,
  temperature: string,
  description: string,
  wind: string,
}

export function Weather({ title, temperature, description, wind }: Props) {
  return <View style={styles.container}>
    <Text style={styles.subtitle}>{title}</Text>
    <Text>{`Температура: ${temperature}`}</Text>
    <Text>{description}</Text>
    <Text>{`Ветер: ${wind}`}</Text>
  </View>
}