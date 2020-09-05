import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string,
  address: string
};

export function Address({ title, address }: Props) {
  return <View style={styles.container}>
    <Text style={styles.subtitle}>{title}</Text>
    <Text>{address}</Text>
  </View>
};
