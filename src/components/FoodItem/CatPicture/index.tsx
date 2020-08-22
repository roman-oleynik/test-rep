import React from 'react';
import cat from '../../../assets/img/cat.png';

import './style.scss';

type Props = {
    isDisabled: boolean
};

export function CatPicture({isDisabled}: Props) {
    return <div className="food-item__mask">
        <img 
            src={cat} 
            className={`food-item__image ${isDisabled ? "food-item__image_dis" : ""}`}
            alt="Кот смотрит прямо в душу."
        />
    </div>
}