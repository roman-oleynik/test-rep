import React, { useState } from 'react';

import './style.scss';
import { DecsWithLink } from '../DecsWithLink';
import { WeightLabel } from '../WeightLabel';
import { CatPicture } from '../CatPicture';
import { TextOfCard } from '../Text';
import { CatFoodItem } from '../../../model';


type Props = {
    model: CatFoodItem
};


export function FoodItem({ model }: Props) {
    const { weight, subContent, onDisable, filling } = model;

    const [isSelected, setIsSelected] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSelected(e.target.checked);
    };

    const disable = () => {
        setIsDisabled(true);
    }

    return (
        <section className="food-item" aria-label={`Нямушка ${filling}`}>
            <label className="food-item__label">
                <input
                    aria-hidden="true"
                    className="food-item__checkbox"
                    type="checkbox"
                    disabled={isDisabled}
                    onChange={onCheckboxChange}
                />
                <div
                    className={`food-item__content ${isDisabled ? "food-item__content_dis" : ""}`}
                    onMouseOver={() => setIsMouseOver(true)}
                    onMouseOut={() => setIsMouseOver(false)}
                >
                    <svg className="button-shape" x="0px" y="0px" viewBox="0 0 328.5 488.5">
                        <path d="M63.7,4.3h250.6c5.5,0,10,4.5,10,10v460c0,5.5-4.5,10-10,10h-300c-5.5,0-10-4.5-10-10V59.9L63.7,4.3z"/>
                    </svg>
                    <TextOfCard
                        isMouseOver = {isMouseOver}
                        isSelected = {isSelected}
                        isDisabled = {isDisabled}
                        disable = {disable}
                        model = {model}
                    />
                    <CatPicture isDisabled = {isDisabled} />
                    <WeightLabel
                        isMouseOver = {isMouseOver}
                        isSelected = {isSelected}
                        isDisabled = {isDisabled}
                        weight = {weight}
                    />
                </div>
            </label>
            
            <p className="food-item__description">
                {isDisabled && onDisable}
                {isSelected && !isDisabled && subContent}
                {!isSelected && !isDisabled && 
                    <DecsWithLink />
                }
            </p>
        </section>
    );
}