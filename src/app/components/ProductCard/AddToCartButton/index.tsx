import React from 'react';
import './style.scss';

type Props = {
    children: JSX.Element,
    product: string
};

export function AddToCartButton({ children, product }: Props) {
    return (
        <button
            type="submit"
            className="button-cart"
            data-product-id={product}
        >
            <div role="image" className="button-cart__icon"></div>
            {children}
        </button>
    );
}