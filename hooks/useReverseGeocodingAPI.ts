import { useState, useEffect } from 'react';
import axios from 'axios';

export function useReverseGeocodingAPI(latitude: number, longitude: number) {
  const [ reverseGeocodingData, setReverseGeocodingData ] = useState<any>(null);

  async function makeAPICall(apiUrl: string) {
    const reverseGeocodingResponse = await axios.get(apiUrl);
    setReverseGeocodingData(reverseGeocodingResponse.data);
  }

  useEffect(() => {
    if (latitude && longitude) {
      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoicm9tYW4tb2xleW5payIsImEiOiJja2VsbjBibmUwNTFpMnR0ODRwem1menNnIn0.p-Q1LOmIrDEa5novYhknqg`;
      makeAPICall(apiUrl);
    }
  }, []);

  return reverseGeocodingData || null;
}