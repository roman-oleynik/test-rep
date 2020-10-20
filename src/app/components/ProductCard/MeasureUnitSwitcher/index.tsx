import { MeasureUnits } from 'app/types';
import React from 'react';
import './style.scss';

type Props = {
    measureUnit: MeasureUnits
    setMeasureUnit: (EO: React.ChangeEvent<HTMLInputElement>) => void
};

export function MeasureUnitSwitcher({ measureUnit, setMeasureUnit }: Props) {
    return <div className="product-card__switcher">
        <div
            className={`bg ${measureUnit === MeasureUnits.SqMeter ? "bg_active" : ""}`}
        >
            <label className={`product-card__measure-unit ${measureUnit === MeasureUnits.SqMeter ? "product-card__measure-unit_active" : ""}`}>
                За м<sup>2</sup>:
                <input
                    className="invisible-input"
                    name="measure-unit"
                    value="m2"
                    type="radio"
                    onChange={setMeasureUnit}
                />
            </label>
        </div>
        <div
            className={`bg ${measureUnit === MeasureUnits.Pack ? "bg_active" : ""}`}
        >
            <label className={`product-card__measure-unit ${measureUnit === MeasureUnits.Pack ? "product-card__measure-unit_active" : ""}`}>
                За упаковку:
                <input
                    className="invisible-input"
                    name="measure-unit"
                    value="pack"
                    type="radio"
                    onChange={setMeasureUnit}
                />
            </label>
        </div>
    </div>
}