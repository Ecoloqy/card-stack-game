import { type IconItemType } from '../enums/icon-type';

export interface IconProps {
    width?: string
    height?: string
    fillColor?: string
    strokeColor?: string
}

export interface IconItemProps extends IconProps {
    type: IconItemType
}
