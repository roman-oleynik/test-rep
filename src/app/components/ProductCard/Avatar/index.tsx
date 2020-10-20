import React from 'react';
import './style.scss';

type Props = {
    src: string
};

export function Avatar({ src }: Props) {
    return <picture>
        <img
            src={src}
            className="product-card__picture"
        />
    </picture>
}