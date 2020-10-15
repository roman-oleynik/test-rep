import React from 'react';
import './style.scss';

export function withRoundedBackground(Component: JSX.Element) {
    return <div className="rounded-bg">
        {Component}
    </div>
};
