import React from 'react';
import './style.scss';

type Props = {
    title: string
    associatedProducts: string
};

export function CardTextContent({ title, associatedProducts }: Props) {
    return <div className="product-card__text-content">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__associated">
            <b className="product-card__text-bold">Могут понадобиться: </b>
            {
                associatedProducts.split("\n").map((el: string, i: number) => {
                    return <a href="#" key={i} className="product-card__associated-link">{` ${el} `}</a>
                })
            }
        </div>
    </div>
}