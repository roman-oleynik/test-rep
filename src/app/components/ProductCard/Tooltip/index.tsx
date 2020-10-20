import React from 'react';
import './style.scss';

type Props = {
    unit: string
    unitAlt: string
    amountOfUnits: number
};

export function Tooltip({ unit, unitAlt, amountOfUnits }: Props) {
    return <div className="product-card__tooltip">
        <div className="product-card__tooltip-icon"></div>
        <div className="product-card__tooltip-text">
            <span className="product-card__unit-type">
                Продается {unit === "упаковка" ? "в упаковках" : unit === "штука" ? "поштучно" : "на развес"}
            </span>
            <span className="product-card__unit-size">
                {` 1 ${unit === "упаковка" ? "упак." : "шт."} = ${amountOfUnits} ${unitAlt}`}
            </span>
        </div>
    </div>
}