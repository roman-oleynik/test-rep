import React from 'react';
import './style.scss';

type Props = {
    size: number,
    highlighted: boolean
}

export function InfiniteIcon({ size, highlighted }: Props) {
    return (
        <svg
            x="0px"
            y="0px"
            viewBox="0 0 500 500"
            className={`infinite-icon ${highlighted ? "infinite-icon_highlighted" : ""}`}
            style={{height: size + "px", width: size + 'px'}}
        >
            <g>
                <path d="M227.021,18.108C101.693,18.108,0,120.07,0,245.398s101.192,227.289,227.824,227.289v-75.979
                    c-83.577,0-151.844-67.877-151.844-151.311c0-83.433,67.34-151.311,150.773-151.311c81.733,0,148.493,65.152,151.181,146.245
                    h-37.439l75.15,105.561l75.15-105.561h-36.818C451.281,117.335,350.654,18.108,227.021,18.108z"/>
            </g>
        </svg>
    );
}