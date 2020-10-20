import { MeasureUnits } from 'app/types';
import React from 'react';
import './style.scss';

type Props = {
    measureUnit: MeasureUnits
    discountPricePerSqMeter: number
    discountPricePerPack: number
    retailPricePerSqMeter: number
    retailPricePerPack: number
};

export function Prices(props: Props) {
    return <div className="product-card__price">
        <p>
            <strong className="product-card__price-label product-card__price-label_discount">
            {
                props.measureUnit === MeasureUnits.SqMeter ? props.discountPricePerSqMeter : props.discountPricePerPack
            } ₽
            </strong>
        </p>
        <p>
            <span className="product-card__price-label ">
            {
                props.measureUnit === MeasureUnits.Pack ? props.retailPricePerSqMeter : props.retailPricePerPack
            } ₽
            </span>
        </p>
        <span className="product-card__price-score">Можно купить за {(props.retailPricePerPack * 0.2).toFixed(0)} баллов.</span>
    </div>
}