import { useState } from 'react';

export function useGeolocation() {
	const [latitude, setLatitude] = useState<any>(0);
	const [longitude, setLongitude] = useState<any>(0);
    const [error, setError] = useState<any>("");

        function onSuccess(position: any) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }
        function onError() {
            setError('Unable to retrieve your location');
        }
        if(!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    return {
        latitude,
        longitude,
        error,
    };
};