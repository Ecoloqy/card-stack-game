import React, { type ReactElement } from 'react';
import { type IconItemProps } from '../../../interfaces/icon-item-props';
import { GrainIcon } from '../../icons/grain-icon';
import { ClockIcon } from '../../icons/clock-icon';
import { CalendarIcon } from '../../icons/calendar-icon';
import { LayoutIconType } from '../../../enums/icon-type';

export const IconItemLayout = ({ type, width, height, fillColor, strokeColor }: IconItemProps): ReactElement => {
    switch (type) {
        case LayoutIconType.FOOD: {
            return <GrainIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case LayoutIconType.CLOCK: {
            return <ClockIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case LayoutIconType.CALENDAR: {
            return <CalendarIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        default: {
            return <></>;
        }
    }
};
