import React from 'react';
import './style.scss';

export function DecsWithLink() {
    return <>
        {"Чего стоишь? Порадуй котэ, "}
        <a aria-label="Купить корм" href="#" className="reset-link-style link_blue">купи.</a>
    </>
}