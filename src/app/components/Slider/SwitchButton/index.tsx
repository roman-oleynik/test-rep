import React from 'react';
import { goToNextSlide, goToPrevSlide, setLastTypeOfSlideSwitch } from '../state/actions';
import { Action } from '../types';
import './style.scss';

type Props = {
    direction: string,
    dispatch: React.Dispatch<Action>,
    children: JSX.Element,
    disabled: boolean
}

export function SwitchButton({ direction, children, disabled, dispatch }: Props) {
    const handleSlideSwitching = (EO: React.SyntheticEvent<HTMLButtonElement>) => {
        const typeOfClick = (EO.target as HTMLButtonElement).dataset.testid;
        if (typeOfClick === "prev") {
            dispatch(setLastTypeOfSlideSwitch("prev"));
            dispatch(goToPrevSlide());
        } else {
            dispatch(setLastTypeOfSlideSwitch("next"));
            dispatch(goToNextSlide());
        }
    };

    return (
        <button
            type="button"
            className={`slider__button slider__button_${direction}`}
            data-testid={direction}
            onClick={handleSlideSwitching}
            disabled={disabled}
        >
            {
                children
            }
        </button>
    );
};