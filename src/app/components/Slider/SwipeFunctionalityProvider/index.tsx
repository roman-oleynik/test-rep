import React from 'react';
import { goToNextSlide, goToPrevSlide, setLastTypeOfSlideSwitch } from '../state/actions';
import { Action } from '../types';
import './style.scss';

type Props = {
    dispatch: React.Dispatch<Action>,
    children: React.ReactFragment
}

export function SwipeFunctionalityProvider({ children, dispatch }: Props) {
    let startX: number = 0;
    let startY: number = 0;
    let isMoved: boolean = false;

    const handleTouchStart = (EO: React.TouchEvent<HTMLElement>) => {
        startX = EO.changedTouches[0].clientX;
        startY = EO.changedTouches[0].clientY;
    }
    const handleTouchMove = () => isMoved = true;
    const handleTouchEnd = (EO: React.TouchEvent<HTMLElement>) => {
        if (!isMoved) {
            return;
        }
        const endX: number = EO.changedTouches[0].clientX;
        const endY: number = EO.changedTouches[0].clientY;
        if (Math.abs(endY - startY) > Math.abs(endX - startX)) {
            return
        }
        if (endX > startX) {
            dispatch(setLastTypeOfSlideSwitch("prev"));
            dispatch(goToPrevSlide());
        } else {
            dispatch(setLastTypeOfSlideSwitch("next"));
            dispatch(goToNextSlide());
        }
        isMoved = false;
    };
    return (
        <div
            className="slider__screen"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
};