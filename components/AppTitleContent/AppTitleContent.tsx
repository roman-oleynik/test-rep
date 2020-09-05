import { Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

export function AppTitleContent() {
	return (
		<>
			<Image
					source={require('../../assets/images/logo.png')}
					style={styles.logo}
			/>
			<Text style={styles.title}>Привет!</Text>
			<Text style={styles.simpleText}>Сейчас я помогу тебе найти единомышленников.</Text>
		</>
	)
}