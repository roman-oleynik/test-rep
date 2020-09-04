import { Action, State, User, LocationResponse } from '../../types/types';
import {
    SET_CLIENT,
    SET_ACTIVE_USERS,
    ADD_ACTIVE_USER,
    DELETE_ACTIVE_USER,
    GET_LOCATION_RESPONSES,
    ADD_LOCATION_RESPONSE,
    DELETE_LOCATION_RESPONSE,
    SET_CHOSEN_LOCATION_RESPONSE
} from '../../types/constants';
import { combineReducers } from 'redux';


function clientReducer(state: User = {} as User, action: Action) {
    switch(action.type) {
        case SET_CLIENT:
            return {...action.body};
        case DELETE_ACTIVE_USER:
            return {};
        default:
            return state;
    }
};

function activeUsersReducer(state: User[] = [], action: Action) {
    switch(action.type) {
        case SET_ACTIVE_USERS:
            return [...action.body];
        case ADD_ACTIVE_USER:
            return [...state, action.body];
        case DELETE_ACTIVE_USER:
            return state.filter((el: User) => el.id !== action.body);
        default:
            return state;
    }
};

function locationResponsesReducer(state: LocationResponse[] = [], action: Action) {
    switch(action.type) {
        case GET_LOCATION_RESPONSES:
            return state;
        case ADD_LOCATION_RESPONSE:
            return [...state, action.body];
        case DELETE_LOCATION_RESPONSE:
            return state;
        default:
            return state;
    }
};

function chosenLocationResponseReducer (state: LocationResponse = {} as LocationResponse, action: Action) {
    switch(action.type) {
        case SET_CHOSEN_LOCATION_RESPONSE:
            return {...action.body};
        default:
            return state;
    }
};

export const rootReducer = combineReducers<State>({
    client: clientReducer,
    activeUsers: activeUsersReducer,
    locationResponses: locationResponsesReducer,
    chosenLocationResponse: chosenLocationResponseReducer,
});