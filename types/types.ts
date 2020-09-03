export type Action = {
    type: string,
    body: any
};
export type User = {
    id: string,
    latitude: number,
    longitude: number,
};
export type LocationResponse = {
    id: string,
    latitude: number,
    longitude: number,
    date: string,
    location: string
};
export type State = {
    client: User,
    activeUsers: User[],
    locationResponses: LocationResponse[],
    chosenLocationResponse: LocationResponse,
};