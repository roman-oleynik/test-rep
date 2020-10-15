import React, { useRef } from 'react';
import { goToConcreteSlide, setLastTypeOfSlideSwitch } from '../state/actions';
import { Action } from '../types';
import './style.scss';

type Props = {
    dispatch: React.Dispatch<Action>,
    slidesAmount: number,
    curSlideNumber: number
}


export function SlideNumberPicker({ dispatch, slidesAmount, curSlideNumber }: Props) {
    const curSlideInputRef = useRef<HTMLInputElement>(null);

    const handleSlideNavSubmit = (EO: React.FormEvent<HTMLFormElement>) => {
        EO.preventDefault();

        if (!curSlideInputRef.current) {
            return;
        }
        dispatch(setLastTypeOfSlideSwitch(""));
        dispatch(goToConcreteSlide(+curSlideInputRef.current.value));
    };

    const validateSlideNumberInput = (EO: React.ChangeEvent<HTMLInputElement>) => {
        if (!curSlideInputRef.current) {
            return;
        }
        if (!EO.target.value.match(/^\d+$/)) {
            curSlideInputRef.current.value = "";
        }
        if (+EO.target.value > slidesAmount) {
            curSlideInputRef.current.value = String(slidesAmount);
        }
        if (+EO.target.value < 1) {
            curSlideInputRef.current.value = "";
        }
    };
    return (
        <div
            role="navigation"
            className="slider__nav"
        >
            <form
                className="slider__form"
                onSubmit={handleSlideNavSubmit}
            >
                <input
                    key={curSlideNumber}
                    type="search"
                    required
                    className="slider__input"
                    style={{width: String(slidesAmount).length * 0.7 + "em"}}
                    defaultValue={curSlideNumber}
                    ref={curSlideInputRef}
                    onChange={validateSlideNumberInput}
                />
            </form>
            <span className="slider__text">/ {slidesAmount}</span>
        </div>
    );
};
