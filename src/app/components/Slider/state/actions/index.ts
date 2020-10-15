export const GO_TO_PREV_SLIDE = "GO_TO_PREV_SLIDE";
export const GO_TO_NEXT_SLIDE = "GO_TO_NEXT_SLIDE";
export const GO_TO_CONCRETE_SLIDE = "GO_TO_CONCRETE_SLIDE";
export const SET_INFINITE = "SET_INFINITE";
export const SET_NUM_OF_SLIDE_GROUPS = "SET_NUM_OF_SLIDE_GROUPS";
export const SET_NUM_OF_SLIDES_IN_GROUP = "SET_NUM_OF_SLIDES_IN_GROUP";
export const SET_LAST_TYPE_OF_SLIDE_SWITCH = "SET_LAST_TYPE_OF_SLIDE_SWITCH";

export const goToPrevSlide = () => ({ type: GO_TO_PREV_SLIDE });
export const goToNextSlide = () => ({ type: GO_TO_NEXT_SLIDE });
export const goToConcreteSlide = (slide: number) => ({ type: GO_TO_CONCRETE_SLIDE, body: slide });
export const setInfinite = (infinite: boolean) => ({ type: SET_INFINITE, body: infinite });
export const setNumOfSlideGroups = (numOfSlideGroups: number) => ({ type: SET_NUM_OF_SLIDE_GROUPS, body: numOfSlideGroups });
export const setNumOfSlidesInGroup = (numOfSlides: number) => ({ type: SET_NUM_OF_SLIDES_IN_GROUP, body: numOfSlides });
export const setLastTypeOfSlideSwitch = (typeOfSlideSwitch: string) => ({ type: SET_LAST_TYPE_OF_SLIDE_SWITCH, body: typeOfSlideSwitch });
