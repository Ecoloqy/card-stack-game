import React, { type ReactElement } from 'react';
import { type IconProps } from '../../../interfaces/icon-item-props';

export const PersonIcon = ({ width = '20px', height = '20px', fillColor = 'white', strokeColor = 'none' }: IconProps): ReactElement => {
    return (
        <>
            <svg height={height} width={width} fill={fillColor} stroke={strokeColor} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
                 <g>
                    <path className="st0" d="M159.131,169.721c5.635,58.338,43.367,96.867,96.871,96.867c53.502,0,91.23-38.53,96.867-96.867l7.988-63.029
                        C365.812,44.768,315.281,0,256.002,0c-59.281,0-109.812,44.768-104.86,106.692L159.131,169.721z"/>
                    <path className="st0" d="M463.213,422.569l-3.824-24.35c-3.203-20.417-16.035-38.042-34.475-47.361l-80.473-40.693
                        c-2.519-1.274-4.57-3.194-6.289-5.338c-23.297,24.632-51.6,39.12-82.15,39.12c-30.549,0-58.856-14.488-82.152-39.12
                        c-1.719,2.144-3.77,4.064-6.289,5.338l-80.472,40.693c-18.442,9.319-31.272,26.944-34.475,47.361l-3.826,24.35
                        c-1.363,8.692,0.436,21.448,8.222,27.825C67.42,458.907,105.875,512,256.002,512c150.125,0,188.578-53.093,198.988-61.606
                        C462.779,444.017,464.576,431.261,463.213,422.569z"/>
                </g>
            </svg>
        </>
    );
};