import { reducer } from '.';
import { goToConcreteSlide, goToNextSlide, goToPrevSlide, setInfinite, setLastTypeOfSlideSwitch, setNumOfSlideGroups, setNumOfSlidesInGroup } from '../actions';


describe("reducer", () => {
    describe("the GO_TO_PREV_SLIDE action", () => {
        it("should decrease curSlideNumber", () => {
            const state = {
                curSlideNumber: 6,
                slidesAmount: 10,
                infinite: true,
            };
            expect(reducer(state, goToPrevSlide()).curSlideNumber).toBe(state.curSlideNumber - 1)
        });
        it("should go to the last slide", () => {
            const state = {
                curSlideNumber: 1,
                slidesAmount: 10,
                infinite: true,
            };
            expect(reducer(state, goToPrevSlide()).curSlideNumber).toBe(state.slidesAmount)
        });
        it("shouldn't decrease the curSlideNumber", () => {
            const state = {
                curSlideNumber: 1,
                slidesAmount: 10,
                infinite: false,
            };
            expect(reducer(state, goToPrevSlide()).curSlideNumber).toBe(state.curSlideNumber);
        });
    });
    describe("the GO_TO_NEXT_SLIDE action", () => {
        it("should increase curSlideNumber", () => {
            const state = {
                curSlideNumber: 6,
                slidesAmount: 10,
                infinite: true,
            };
            expect(reducer(state, goToNextSlide()).curSlideNumber).toBe(state.curSlideNumber + 1)
        });
        it("should go to the first slide", () => {
            const state = {
                curSlideNumber: 10,
                slidesAmount: 10,
                infinite: true,
            };
            expect(reducer(state, goToNextSlide()).curSlideNumber).toBe(1)
        });
        it("shouldn't increase the curSlideNumber", () => {
            const state = {
                curSlideNumber: 10,
                slidesAmount: 10,
                infinite: false,
            };
            expect(reducer(state, goToNextSlide()).curSlideNumber).toBe(state.curSlideNumber);
        });
    });
    describe("the GO_TO_CONCRETE_SLIDE action", () => {
        it("should switch to a concrete slide", () => {
            const state = {
                curSlideNumber: 6,
                slidesAmount: 10,
                infinite: true,
            };
            expect(reducer(state, goToConcreteSlide(5)).curSlideNumber).toBe(5);
            expect(reducer(state, goToConcreteSlide(6)).curSlideNumber).toBe(6);
            expect(reducer(state, goToConcreteSlide(1)).curSlideNumber).toBe(1);
            expect(reducer(state, goToConcreteSlide(0)).curSlideNumber).toBe(1);
            expect(reducer(state, goToConcreteSlide(100)).curSlideNumber).toBe(state.slidesAmount);
        });
    });
    describe("the SET_INFINITE action", () => {
        it("should toggle correctly", () => {
            const state = {
                infinite: true,
            };
            expect(reducer(state, setInfinite(false)).infinite).toBe(false);
            expect(reducer(state, setInfinite(true)).infinite).toBe(true);
            expect(reducer(state, setInfinite(null)).infinite).toBe(state.infinite);
            expect(reducer(state, setInfinite("null")).infinite).toBe(state.infinite);
            expect(reducer(state, setInfinite(124)).infinite).toBe(state.infinite);
            expect(reducer(state, setInfinite({})).infinite).toBe(state.infinite);
        });
    });
    describe("the SET_NUM_OF_SLIDE_GROUPS action", () => {
        it("should set value", () => {
            const state = {
                slidesAmount: 5,
            };
            expect(reducer(state, setNumOfSlideGroups(12)).slidesAmount).toBe(12);
            expect(reducer(state, setNumOfSlideGroups(16)).slidesAmount).toBe(16);
            expect(reducer(state, setNumOfSlideGroups(0)).slidesAmount).toBe(state.slidesAmount);
            expect(reducer(state, setNumOfSlideGroups(5)).slidesAmount).toBe(5);
        });
    });
    describe("the SET_NUM_OF_SLIDES_IN_GROUP action", () => {
        it("should set value", () => {
            const state = {
                slidesInGroup: 1,
            };
            expect(reducer(state, setNumOfSlidesInGroup(2)).slidesInGroup).toBe(4);
            expect(reducer(state, setNumOfSlidesInGroup(1)).slidesInGroup).toBe(2);
            expect(reducer(state, setNumOfSlidesInGroup(0)).slidesInGroup).toBe(1);
            expect(reducer(state, setNumOfSlidesInGroup(5)).slidesInGroup).toBe(state.slidesInGroup);
            expect(reducer(state, setNumOfSlidesInGroup(-1)).slidesInGroup).toBe(state.slidesInGroup);
        });
    });
    describe("the SET_LAST_TYPE_OF_SLIDE_SWITCH action", () => {
        it("should set value", () => {
            const state = {
                typeOfLastSlideSwitch: "",
            };
            expect(reducer(state, setLastTypeOfSlideSwitch("")).typeOfLastSlideSwitch).toBe("");
            expect(reducer(state, setLastTypeOfSlideSwitch("prev")).typeOfLastSlideSwitch).toBe("prev");
            expect(reducer(state, setLastTypeOfSlideSwitch("next")).typeOfLastSlideSwitch).toBe("next");
            expect(reducer(state, setLastTypeOfSlideSwitch("hello world")).typeOfLastSlideSwitch).toBe(state.typeOfLastSlideSwitch);
        });
    });
    describe("irrelevant actions", () => {
        it("should return state without changes", () => {
            const state = {
                curSlideNumber: 1,
                slidesAmount: 1,
                infinite: true,
                slidesInGroup: 1,
                typeOfLastSlideSwitch: "",
            };
            expect(reducer(state, {type: "SOME_UNKNOWN_ACTION"})).toEqual(state);
        });
    });
})

