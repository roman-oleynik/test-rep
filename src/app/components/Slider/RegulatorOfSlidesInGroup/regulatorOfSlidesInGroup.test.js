import { create, act } from 'react-test-renderer';
import React from 'react';
import { RegulatorOfSlidesInGroup } from '.';
import { setNumOfSlidesInGroup } from '../state/actions';

describe("<RegulatorOfSlidesInGroup />", () => {
    let component;
    const dispatch = jest.fn();
    let slidesInGroup = 1;
    beforeEach(() => {
        dispatch.mock.calls = [];
        act(() => {
            component = create(
                <RegulatorOfSlidesInGroup
                    dispatch={dispatch}
                    slidesInGroup={slidesInGroup}
                />
            );
        });
    });
    it('should call dispatch on change with a proper value', () => {
        const rangeInput = component.root.findByProps({className: "slider__range"}).children[0];
        rangeInput.props.onChange({
            target: {value: "2"},
            stopPropagation: jest.fn()
        });
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(setNumOfSlidesInGroup(2));
        rangeInput.props.onChange({
            target: {value: "4"},
            stopPropagation: jest.fn()
        });
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(setNumOfSlidesInGroup(4));
    });
    it('should display a correct value in the label of slides count', () => {
        const slidesCountLabel = component.root.findByProps({className: "slider__count"});
        expect(slidesCountLabel.children[0]).toEqual(String(slidesInGroup));
    });
})

