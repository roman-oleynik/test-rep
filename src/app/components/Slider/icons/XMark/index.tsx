import React from 'react';
import './style.scss';

type Props = {
    size: number,
}

export function XMarkIcon({ size }: Props) {
    return (
        <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 28 28"
            style={{height: size + "px", width: size + 'px'}}
            className="x-mark-icon"

        >
            <g id="x">
                <g>
                    <polygon points="28,22.398 19.594,14 28,5.602 22.398,0 14,8.402 5.598,0 0,5.602 8.398,14 0,22.398 
                        5.598,28 14,19.598 22.398,28"/>
                </g>
            </g>
        </svg>
    );
}