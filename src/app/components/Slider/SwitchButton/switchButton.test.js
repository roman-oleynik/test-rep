import { create } from 'react-test-renderer';
import React from 'react';
import { SwitchButton } from '.';
import { LeftArrowIcon } from '../icons/LeftArrow';
import { goToNextSlide, goToPrevSlide, setLastTypeOfSlideSwitch } from '../state/actions';


describe("<SwitchButton />", () => {
    const dispatch = jest.fn();
    beforeEach(() => {
        dispatch.mock.calls = [];
    })
    it('should render the next or prev button', () => {
        let direction = "next";
        let component = create(
            <SwitchButton
                direction={direction}
                dispatch={dispatch}
                disabled={false}
            >
                <LeftArrowIcon size={24} />
            </SwitchButton>
        );
        expect(component.root.findByProps({className: `slider__button slider__button_${direction}`})).toBeTruthy();
        direction = "next";
        component = create(
            <SwitchButton
                direction={direction}
                dispatch={dispatch}
                disabled={false}
            >
                <LeftArrowIcon size={24} />
            </SwitchButton>
        );
        expect(component.root.findByProps({className: `slider__button slider__button_${direction}`})).toBeTruthy();
    });
    test('a click on the "next" button should call dispatch twice', () => {
        let direction = "next";
        let component = create(
            <SwitchButton
                direction={direction}
                dispatch={dispatch}
                disabled={false}
            >
                <LeftArrowIcon size={24} />
            </SwitchButton>
        );
        const button = component.root.findByProps({className: `slider__button slider__button_${direction}`});
        button.props.onClick({target: {dataset: {testid: direction}}});
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(setLastTypeOfSlideSwitch(direction));
        expect(dispatch).toHaveBeenCalledWith(goToNextSlide());
    });
    test('a click on the "prev" button should call dispatch twice', () => {
        let direction = "prev";
        let component = create(
            <SwitchButton
                direction={direction}
                dispatch={dispatch}
                disabled={false}
            >
                <LeftArrowIcon size={24} />
            </SwitchButton>
        );
        const button = component.root.findByProps({className: `slider__button slider__button_${direction}`});
        button.props.onClick({target: {dataset: {testid: direction}}});
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(setLastTypeOfSlideSwitch(direction));
        expect(dispatch).toHaveBeenCalledWith(goToPrevSlide());
    });
})

