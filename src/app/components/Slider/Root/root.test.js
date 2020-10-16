import React from 'react';
import { Slider } from '.';
import { SlidesModel } from '../model/model';
import { cleanup, render, screen } from '@testing-library/react';


describe("<Slider /> with a collage", () => {
    let component;
    beforeEach(() => {
        component = render(
            <Slider
                data={SlidesModel.data}
                collage={true}
                close={close}
            />
        );
    });
    afterEach(() => cleanup());

    it('should render a slide', () => {
        expect(component.getAllByTestId("slide-group")).toHaveLength(1);
    });
    it('should render the RegulatorOfSlidesInGroup', () => {
        expect(component.getAllByTestId("amountOfSlidesOnScreen")).toHaveLength(1);
    });
    it('should render the close button', () => {
        expect(component.getAllByTestId("close")).toHaveLength(1);
    });
    it('should render the prev and the next buttons', () => {
        expect(component.getAllByTestId("prev")).toHaveLength(1);
        expect(component.getAllByTestId("next")).toHaveLength(1);
    });
    it('should render the SlideNumberPicker', () => {
        expect(component.getAllByTestId("slider-nav")).toHaveLength(1);
    });
    it('should render the InfiniteButton', () => {
        expect(component.getAllByTestId("slider-infinite")).toHaveLength(1);
    });
});

describe("<Slider /> without a collage", () => {
    let component;
    beforeEach(() => {
        component = render(
            <Slider
                data={SlidesModel.data}
                collage={false}
                close={close}
            />
        );
    });
    afterEach(() => cleanup());

    it("shouldn't render the RegulatorOfSlidesInGroup", () => {
        let amountOfRangeInputs;
        try {
            amountOfRangeInputs = component.getAllByTestId("amountOfSlidesOnScreen").length;
        } catch {
            amountOfRangeInputs = null;
        }
        expect(amountOfRangeInputs).toBeNull();
    });
});