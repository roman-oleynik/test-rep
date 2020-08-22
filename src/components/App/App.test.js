import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './index';
import { FoodItem } from '../FoodItem/Root';
import { TextOfCard } from '../FoodItem/Text';
import { WeightLabel } from '../FoodItem/WeightLabel';
import { model } from '../../model';


describe("App.js integration tests", () => {
    it("should change state on the checkbox change", () => {
        const component = renderer.create(<App model={model} />);
        expect(component.toJSON()).toMatchSnapshot();

        const foodItem = renderer.create(<FoodItem model={model[0]} />);
        const checkbox = foodItem.root.findByProps({className: "food-item__checkbox"});
        
        checkbox.props.onChange({target: {checked: true}});
        expect(foodItem.toJSON()).toMatchSnapshot();

        checkbox.props.onChange({target: {checked: false}});
        expect(foodItem.toJSON()).toMatchSnapshot();

        checkbox.props.onChange({target: {checked: true}});
        expect(foodItem.toJSON()).toMatchSnapshot();
    });
    it("sholud highlight the 'WeightLabel' after a cursor hover", () => {
        const foodItem = renderer.create(<FoodItem model={model[0]} />);
        const container = foodItem.root.findByProps({className: "food-item__content "});
        container.props.onMouseOver();
        expect(foodItem.root.findByType(WeightLabel).props.isMouseOver).toBe(true);
    });
    it("should show the 'Котэ не одобряет' after a click and a mouseover", () => {
        const disable = jest.fn();
        const component = renderer.create(
            <TextOfCard
                isMouseOver = {true}
                isSelected = {true}
                isDisabled = {false}
                disable = {disable}
                model = {model[0]}
            />
        );
        expect(component.root.findByProps({className: "food-item__dislike"}).props.children).toBe("Котэ не одобряет?");
    });
    it("should call the 'disable' function once after the click the 'Котэ не одобряет?' button", () => {
        const disable = jest.fn().mockImplementation(() => {});
        const component = renderer.create(
            <TextOfCard
                isMouseOver = {true}
                isSelected = {true}
                isDisabled = {false}
                disable = {disable}
                model = {model[0]}
            />
        );
        const dislike = component.root.findByProps({className: "food-item__dislike"});
        dislike.props.onClick();
        expect(disable).toHaveBeenCalledTimes(1);
    });
})