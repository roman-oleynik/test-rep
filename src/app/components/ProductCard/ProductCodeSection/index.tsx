import React from 'react';
import './style.scss';

type Props = {
    code: string,
    isActive: boolean
};

export function ProductCodeSection({ code, isActive }: Props) {
    return <div className="product-card__code-section">
        <span className="product-card__code">Код: {code}</span>
        <div className="product-card__is-active">
        {
            isActive
            ?
            <a className="product-card__active">В наличии</a>
            :
            <span className="product-card__not-active">Нет в наличии</span>
        }
        </div>
    </div>;
}