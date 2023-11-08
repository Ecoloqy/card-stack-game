import './style.scss';
import React, { type ReactElement } from 'react';

export interface ProgressBarProps {
    value: number
    maxValue?: number
}

export const ProgressBar = ({ value, maxValue = 100 }: ProgressBarProps): ReactElement => {
    return (
        <input readOnly={true} className="range-slider" type="range" min="1" max={maxValue} value={value}/>
    );
};
