import { User, Action, LocationResponse } from "../../types/types";
import axios from 'axios';
import { 
    SET_CLIENT,
    SET_ACTIVE_USERS,
    ADD_ACTIVE_USER,
    DELETE_ACTIVE_USER,
    ADD_LOCATION_RESPONSE
    } from "../../types/constants";
import { ThunkDispatch } from "redux-thunk";

export function setClient(client: User | null): Action {
    return {
        type: SET_CLIENT,
        body: client,
    };
};

export function setActiveUsers(users: User[]): Action {
    return {
        type: SET_ACTIVE_USERS,
        body: users,
    };
};

export function addLocationResponse(response: LocationResponse) {
    return {
        type: ADD_LOCATION_RESPONSE,
        body: response,
    };
};

export function addActiveUser(user: User | null): Action {
    return {
        type: ADD_ACTIVE_USER,
        body: user
    };
};

export function deleteActiveUser(userId: string): Action {
    return {
        type: DELETE_ACTIVE_USER,
        body: userId,
    };
};

export function postActiveUserToServer(user: User | null) {
    if (user) {
        return async (dispatch: ThunkDispatch<{}, {}, Action>) => {
            await axios.post("https://any-title-7a738.firebaseio.com/activeUsers.json", JSON.stringify(user));
            dispatch(addActiveUser(user));
        }
    }
};
async function _getKeyOfActiveUserToDelete(id: string) {
    const nodeToDelete = await axios.get(`https://any-title-7a738.firebaseio.com/activeUsers.json?orderBy="id"&equalTo="${id}"`);
    const key = Object.keys(nodeToDelete.data)[0];
    return key;
}
export function deleteActiveUserOnServer(id: string) {
    return async (dispatch: ThunkDispatch<{}, {}, Action>) => {
        const keyOfUser = await _getKeyOfActiveUserToDelete(id);
        await axios.delete(`https://any-title-7a738.firebaseio.com/activeUsers/${keyOfUser}.json`);
        dispatch(deleteActiveUser(id));
    }
}
export function fetchActiveUsersFromServer() {
    return async (dispatch: ThunkDispatch<{}, {}, Action>) => {
        return fetch("https://any-title-7a738.firebaseio.com/activeUsers.json")
            .then(res => res.json())
            .then(data => {
                dispatch(setActiveUsers(data));
            });
    }
}