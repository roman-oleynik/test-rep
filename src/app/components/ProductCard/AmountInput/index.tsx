import React from 'react';
import './style.scss';

type Props = {
    value: number
    setValue: (EO: React.SyntheticEvent<HTMLButtonElement>) => void
};

export function AmountInput({ value, setValue }: Props) {
    return <div className="product-card__amount-container">
        <button
            type="button"
            className="product-card__spin product-card__spin_top"
            data-spin-dir="up"
            onClick={setValue}
        ></button>
        <button
            type="button"
            className="product-card__spin product-card__spin_bottom"
            data-spin-dir="down"
            onClick={setValue}
        ></button>
        <input
            type="number"
            className="product-card__amount"
            value={value}
            defaultValue={value}
        />
    </div>
}