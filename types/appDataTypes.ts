export type Action = {
    type: string,
    body: any
};
export type User = {
    id: string,
    latitude: number,
    longitude: number,
};
export type UserArguments = [
    string,
    number,
    number,
];
export type LocationResponse = {
    id: string,
    latitude: number,
    longitude: number,
    date: Date,
    location: string,
    temperature: number,
    weatherDesc: string,
    wind: number
};
export type LocationResponseArguments = [
    string,
    number,
    number,
    string,
    number,
    string,
    number,
];
export type State = {
    client: User,
    activeUsers: User[],
    locationResponses: LocationResponse[],
    chosenLocationResponse: LocationResponse,
    error: string,
};