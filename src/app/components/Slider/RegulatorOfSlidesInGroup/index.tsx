import React from 'react';
import { setNumOfSlidesInGroup } from '../state/actions';
import { Action } from '../types';
import './style.scss';

type Props = {
    dispatch: React.Dispatch<Action>,
    slidesInGroup: number
}


export function RegulatorOfSlidesInGroup({dispatch, slidesInGroup}: Props) {
    const handleRangeChange = (EO: React.ChangeEvent<HTMLInputElement>) => {
        EO.stopPropagation();
        dispatch(setNumOfSlidesInGroup(+EO.target.value));
    };

    return (
        <div className="slider__range">
            <input
                id="amountOfSlidesOnScreen"
                data-testid="amountOfSlidesOnScreen"
                className="slider__range-input"
                type="range"
                min={0}
                max={2}
                defaultValue={0}
                onChange={handleRangeChange}
            />
            <label htmlFor="amountOfSlidesOnScreen" className="slider__count">{slidesInGroup}</label>
        </div>
    );
}