import React, { useEffect } from 'react';
import './style.scss';

type Props = {
    isLoaded: boolean
}

export function Preloader({ isLoaded }: Props) {
    return <>
        <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
            <span className="spinner"></span>
        </div>
    </>
}