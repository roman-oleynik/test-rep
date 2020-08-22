import React from 'react';
import { mousesToStr } from '../../../utils/ts/mousesToStr';

import './style.scss';
import { CatFoodItem } from '../../../model';


type Props = {
    isMouseOver: boolean
    isSelected: boolean
    isDisabled: boolean
    model: CatFoodItem
};

export function TextOfCard({
        isMouseOver, 
        isSelected, 
        isDisabled, 
        model
    }: Props) {
    const { filling, portions, mouses, isClientSatisfied } = model;

    return <header className={`food-item__header ${isDisabled ? "food-item__header_dis" : ""}`}>
        {
            !isMouseOver && isSelected && !isDisabled
            ?
            <p className="food-item__dislike">Котэ не одобряет?</p>
            :
            <p className="food-item__text">Сказочное заморское яство</p>
        }
        <h3 className="food-item__title">
            Нямушка <br/>
            <span className="small-title">{filling}</span>
        </h3>
        <ul className="food-item__list">
            <li className="food-item__item">{portions} порций</li>
            <li className="food-item__item">{`${mousesToStr(mouses)} в подарок`}</li>
            {
                isClientSatisfied && <li className="food-item__item">заказчик доволен</li>
            }
        </ul>
    </header>
}