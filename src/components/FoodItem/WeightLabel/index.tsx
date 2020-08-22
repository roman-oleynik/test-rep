import React from 'react';
import './style.scss';

type Props = {
    isMouseOver: boolean
    isSelected: boolean
    isDisabled: boolean
    weight: number
};

export function WeightLabel({isMouseOver, isSelected, isDisabled, weight}: Props) {
    const weightClassList: string = `
        food-item__circle 
        ${isMouseOver && isSelected && !isDisabled ? "food-item__circle_sel-over" : ""}
        ${isMouseOver && !isSelected && !isDisabled ? "food-item__circle_over" : ""} 
        ${isSelected && !isDisabled ? "food-item__circle_sel" : ""}
        ${isDisabled ? "food-item__circle_dis" : ""}
    `;

    return <span className={weightClassList}>
        <p className="food-item__weight aligner">
            {weight}
        </p>
        <span className="font-smaller">кг</span>
    </span>
}