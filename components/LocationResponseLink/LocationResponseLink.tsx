import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LocationResponse } from '../../types/appDataTypes';
import { styles } from './styles';

type Props = {
  data: LocationResponse
  onPress: () => void
};

export function LocationResponseLink({ data, onPress }: Props) {
  return <TouchableOpacity
    onPress={onPress}
    style={styles.link}>
    <View>
      <Text style={styles.textBig}>{data.date.toUTCString()}</Text>
      <Text style={styles.textMedium}>{data.location}</Text>
      <Text style={styles.textSmall}>{data.latitude.toFixed(4)}/{data.longitude.toFixed(4)}</Text>
    </View>
  </TouchableOpacity>
}