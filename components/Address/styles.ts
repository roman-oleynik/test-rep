import { StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 32,
        textAlign: 'left',
    },
});