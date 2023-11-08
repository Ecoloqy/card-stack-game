import React, { type ReactElement } from 'react';
import { type IconItemProps } from '../../../interfaces/icon-item-props';
import { CathedralIcon } from '../../icons/cathedral-icon';
import { SamuraiIcon } from '../../icons/samurai-icon';
import { GrainIcon } from '../../icons/grain-icon';
import { CampIcon } from '../../icons/camp-icon';
import { ForestIcon } from '../../icons/forest-icon';
import { MountainIcon } from '../../icons/mountain-icon';
import { PersonIcon } from '../../icons/person-icon';
import { AxeIcon } from '../../icons/axe-icon';
import { WoodIcon } from '../../icons/wood-icon';
import { StoneIcon } from '../../icons/stone-icon';
import { LocationItemType, ResourceItemType, ToolItemType, WorkerItemType } from '../../../enums/item-type';

export const IconItem = ({ type, width, height, fillColor, strokeColor }: IconItemProps): ReactElement => {
    switch (type) {
        case WorkerItemType.SAMURAI: {
            return <SamuraiIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case WorkerItemType.PERSON: {
            return <PersonIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case ResourceItemType.GRAIN: {
            return <GrainIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case ResourceItemType.STONE: {
            return <StoneIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case ResourceItemType.WOOD: {
            return <WoodIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case LocationItemType.CATHEDRAL: {
            return <CathedralIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case LocationItemType.CAMP: {
            return <CampIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case LocationItemType.FOREST: {
            return <ForestIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case LocationItemType.MOUNTAIN: {
            return <MountainIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        case ToolItemType.AXE: {
            return <AxeIcon width={width} height={height} fillColor={fillColor} strokeColor={strokeColor} />;
        }
        default: {
            return <></>;
        }
    }
};
