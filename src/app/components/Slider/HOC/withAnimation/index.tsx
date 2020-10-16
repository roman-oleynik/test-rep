import React from 'react';
import { CSSTransition } from 'react-transition-group';

export function withAnimation(typeOfLastSlideSwitch: string, key: number) {
    return (Component: JSX.Element) => {
        return (
            <CSSTransition
                data-testid="css-transition"
                key={key}
                in={true}
                appear={true}
                timeout={300}
                classNames={
                    typeOfLastSlideSwitch === "next"
                    ?
                    "slide-right"
                    :
                    typeOfLastSlideSwitch === "prev"
                    ?
                    "slide-left"
                    :
                    "bubble"
                }
            >
                {Component}
            </CSSTransition>
        );
    }
}