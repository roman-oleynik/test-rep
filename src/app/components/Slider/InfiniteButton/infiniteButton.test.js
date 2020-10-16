import { create, act } from 'react-test-renderer';
import React from 'react';
import { InfiniteButton } from '.';
import { InfiniteIcon } from '../icons/Infinite';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import { setInfinite } from '../state/actions';

describe("<InfiniteButton />", () => {
    let component;
    it('should render a highlighted icon', () => {
        act(() => {
            component = create(
                <InfiniteButton
                    dispatch={jest.fn()}
                    infinite={true}
                />
            );
        });
        const classNameOfIcon = component.root.findByType(InfiniteIcon).children[0].props.className;
        expect(classNameOfIcon).toBe("infinite-icon infinite-icon_highlighted");
    });
    it('should render an unhighlighted icon', () => {
        act(() => {
            component = create(
                <InfiniteButton
                    dispatch={jest.fn()}
                    infinite={false}
                />
            );
        });
        const classNameOfIcon = component.root.findByType(InfiniteIcon).children[0].props.className;
        expect(classNameOfIcon).toBe("infinite-icon ");
    });
    it('should call dispatch on button click', () => {
        const dispatch = jest.fn();
        const infinite = false;
        act(() => {
            component = create(
                <InfiniteButton
                    dispatch={dispatch}
                    infinite={infinite}
                />
            );
        });
        const button = component.root.findByProps({className: "slider__infinite"});
        button.props.onClick();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(setInfinite(!infinite));
    });
})

