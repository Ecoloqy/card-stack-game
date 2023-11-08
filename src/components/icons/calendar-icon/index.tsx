import React, { type ReactElement } from 'react';
import { type IconProps } from '../../../interfaces/icon-item-props';

export const CalendarIcon = ({ width = '20px', height = '20px', fillColor = 'white', strokeColor = 'none' }: IconProps): ReactElement => {
    return (
        <>
            <svg height={height} width={width} fill={fillColor} stroke={strokeColor} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
                <g>
                    <path className="st0" d="M149.193,103.525c15.994,0,28.964-12.97,28.964-28.972V28.964C178.157,12.97,165.187,0,149.193,0
                        C133.19,0,120.22,12.97,120.22,28.964v45.589C120.22,90.556,133.19,103.525,149.193,103.525z"/>
                    <path className="st0" d="M362.815,103.525c15.994,0,28.964-12.97,28.964-28.972V28.964C391.78,12.97,378.81,0,362.815,0
                        c-16.003,0-28.972,12.97-28.972,28.964v45.589C333.843,90.556,346.813,103.525,362.815,103.525z"/>
                    <path className="st0" d="M435.164,41.287h-17.925v33.266c0,30.017-24.415,54.431-54.423,54.431c-30.017,0-54.431-24.414-54.431-54.431
                        V41.287H203.615v33.266c0,30.017-24.414,54.431-54.422,54.431c-30.018,0-54.432-24.414-54.432-54.431V41.287H76.836
                        c-38.528,0-69.763,31.235-69.763,69.763v331.187C7.073,480.765,38.308,512,76.836,512h358.328
                        c38.528,0,69.763-31.235,69.763-69.763V111.05C504.927,72.522,473.691,41.287,435.164,41.287z M470.982,442.237
                        c0,19.748-16.07,35.818-35.818,35.818H76.836c-19.749,0-35.818-16.07-35.818-35.818V155.138h429.964V442.237z"/>
                    <rect x="183.676" y="377.571" className="st0" width="56.727" height="56.727"/>
                    <rect x="183.676" y="289.65" className="st0" width="56.727" height="56.727"/>
                    <rect x="95.765" y="377.571" className="st0" width="56.718" height="56.727"/>
                    <rect x="95.765" y="289.65" className="st0" width="56.718" height="56.727"/>
                    <rect x="359.517" y="201.73" className="st0" width="56.718" height="56.727"/>
                    <rect x="271.597" y="201.73" className="st0" width="56.735" height="56.727"/>
                    <rect x="271.597" y="289.65" className="st0" width="56.735" height="56.727"/>
                    <rect x="359.517" y="377.571" className="st0" width="56.718" height="56.727"/>
                    <rect x="359.517" y="289.65" className="st0" width="56.718" height="56.727"/>
                    <rect x="271.597" y="377.571" className="st0" width="56.735" height="56.727"/>
                    <rect x="183.676" y="201.73" className="st0" width="56.727" height="56.727"/>
                    <rect x="95.765" y="201.73" className="st0" width="56.718" height="56.727"/>
                </g>
            </svg>
        </>
    );
};