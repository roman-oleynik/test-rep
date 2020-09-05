import { useState, useEffect } from 'react';
import axios from 'axios';

export type ReverseGeocodingData = {
  features: Array<any>
};

type ReverseGeocodingHookReturnType = {
  reverseGeocodingData: ReverseGeocodingData | null,
  reverseGeocodingError: string,
};

export function useReverseGeocodingAPI(latitude: number, longitude: number): ReverseGeocodingHookReturnType {
  const [ reverseGeocodingData, setReverseGeocodingData ] = useState<ReverseGeocodingData | null>(null);
  const [ reverseGeocodingError, setError ] = useState<string>("");

  async function makeAPICall(apiUrl: string): Promise<void> {
    try {
      const reverseGeocodingResponse = await axios.get(apiUrl);
      setReverseGeocodingData(reverseGeocodingResponse.data);
    } catch (err) {
      console.log(err);
      setError("Couldn't fetch the reverse geocoding data");
      return;
    }
  }

  useEffect(() => {
    if (latitude && longitude) {
      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoicm9tYW4tb2xleW5payIsImEiOiJja2VsbjBibmUwNTFpMnR0ODRwem1menNnIn0.p-Q1LOmIrDEa5novYhknqg`;
      makeAPICall(apiUrl);
    }
  }, []);

  return {
    reverseGeocodingData,
    reverseGeocodingError
  };
}