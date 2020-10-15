import {
    GO_TO_CONCRETE_SLIDE,
    GO_TO_NEXT_SLIDE,
    GO_TO_PREV_SLIDE,
    SET_INFINITE,
    SET_LAST_TYPE_OF_SLIDE_SWITCH,
    SET_NUM_OF_SLIDES_IN_GROUP,
    SET_NUM_OF_SLIDE_GROUPS
} from "../actions";
import { Action, SliderState } from "../../types";



export const initState: SliderState = {
    curSlideNumber: 1,
    slidesAmount: 1,
    infinite: true,
    slidesInGroup: 1,
    typeOfLastSlideSwitch: "",
};



export const reducer = (state: SliderState, action: Action): SliderState => {
    switch(action.type) {
        case GO_TO_PREV_SLIDE:
            if (state.infinite && state.curSlideNumber < 2) {
                return {...state, curSlideNumber: state.slidesAmount};
            } else if (!state.infinite && state.curSlideNumber < 2) {
                return {...state, curSlideNumber: 1};
            }
            return {...state, curSlideNumber: state.curSlideNumber - 1};
        case GO_TO_NEXT_SLIDE:
            if (state.infinite && state.curSlideNumber > state.slidesAmount - 1) {
                return {...state, curSlideNumber: 1};
            } else if (!state.infinite && state.curSlideNumber > state.slidesAmount - 1) {
                return {...state, curSlideNumber: state.slidesAmount};
            }
            return {...state, curSlideNumber: state.curSlideNumber + 1};
        case GO_TO_CONCRETE_SLIDE:
            return {...state, curSlideNumber: action.body};
        case SET_INFINITE:
            return {...state, infinite: action.body};
        case SET_NUM_OF_SLIDE_GROUPS:
            return {...state, slidesAmount: action.body};
        case SET_NUM_OF_SLIDES_IN_GROUP:
            return {...state, slidesInGroup: Math.pow(2, action.body)};
        case SET_LAST_TYPE_OF_SLIDE_SWITCH:
            return {...state, typeOfLastSlideSwitch: action.body};
        default:
            return state;
    }
};