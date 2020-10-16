import { create, act } from 'react-test-renderer';
import React from 'react';
import { CloseSliderButton } from '.';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';

describe("<CloseSliderButton />", () => {
    it('should execute a callback passed through props on click', () => {
        const callback = jest.fn();
        const component = create(
            <CloseSliderButton
                callback={callback}
            />
        );
        const button = component.root.findByProps({className: "slider__close-button"});
        button.props.onClick();
        expect(callback).toHaveBeenCalledTimes(1);
    });
})

