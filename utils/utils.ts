import { LocationResponse, LocationResponseArguments, User, UserArguments } from '../types/types';

export function createLocationResponsePayload(...args: LocationResponseArguments): LocationResponse {
    const [ id, latitude, longitude, location, temperature, weatherDesc, wind ] = args;

    return {
      id,
      latitude,
      longitude,
      date: new Date(),
      location,
      temperature,
      weatherDesc,
      wind,
    }
  };
  export function createClientPayload(...args: UserArguments): User {
    const [ id, latitude, longitude ] = args;

    return {
      id,
      latitude,
      longitude
    }
  }