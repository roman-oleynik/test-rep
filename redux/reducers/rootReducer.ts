import { Action, State, User, LocationResponse } from '../../types/appDataTypes';
import {
    SET_CLIENT,
    SET_ACTIVE_USERS,
    ADD_ACTIVE_USER,
    DELETE_ACTIVE_USER,
    GET_LOCATION_RESPONSES,
    ADD_LOCATION_RESPONSE,
    DELETE_LOCATION_RESPONSE,
    SET_CHOSEN_LOCATION_RESPONSE,
    SET_ERROR
} from '../../types/constants';
import { combineReducers } from 'redux';


function clientReducer(state: User | null = null, action: Action) {
    switch(action.type) {
        case SET_CLIENT:
            return action.body;
        case DELETE_ACTIVE_USER:
            return null;
        default:
            return state;
    }
};

function activeUsersReducer(state: User[] = [], action: Action) {
    switch(action.type) {
        case SET_ACTIVE_USERS:
            const arrayOfUsers = [];
            for (let key in action.body) {
                arrayOfUsers.push(action.body[key]);
            }
            return arrayOfUsers;
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

function errorReducer(state: string = "", action: Action) {
    switch(action.type) {
        case SET_ERROR:
            return action.body;
        default:
            return state;
    }
}

export const rootReducer = combineReducers<State>({
    client: clientReducer,
    activeUsers: activeUsersReducer,
    locationResponses: locationResponsesReducer,
    chosenLocationResponse: chosenLocationResponseReducer,
    error: errorReducer,
});