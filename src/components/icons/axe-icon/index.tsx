import React, { type ReactElement } from 'react';
import { type IconProps } from '../../../interfaces/icon-item-props';

export const AxeIcon = ({ width = '20px', height = '20px', fillColor = 'white', strokeColor = 'none' }: IconProps): ReactElement => {
    return (
        <>
            <svg height={height} width={width} fill={fillColor} stroke={strokeColor} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
                <g>
                    <g>
                        <polygon points="419.008,129.382 449.823,98.566 375.746,24.489 335.065,65.173 282.764,25.167 203.453,104.477 243.46,156.777 223.468,176.767 202.667,223.968 0,426.634 60.877,487.511 307.669,240.719 378.801,333.711 512,200.512"/>
                    </g>
                </g>
            </svg>
        </>
    );
};
