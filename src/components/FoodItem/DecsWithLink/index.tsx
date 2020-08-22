import React from 'react';
import './style.scss';

type Props = {
    select: () => void
};

export function DecsWithLink(props: Props) {
    return <>
        {"Чего стоишь? Порадуй котэ, "}
        <button 
            onClick={props.select}
            aria-label="Купить корм" 
            className="food-item__buy link_blue"
        >купи.</button>
    </>
}