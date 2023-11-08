import { Location } from '../cards/location';
import { type ItemType, LocationItemType } from '../../enums/item-type';
import { type ResourceEffect } from '../../interfaces/resource-effect';

export const getLocations = (location: ItemType): Location | null => {
    switch (location) {
        case 'CAMP': {
            return new Location('Camp', LocationItemType.CAMP, 20);
        }
        case 'CATHEDRAL': {
            return new Location('Cathedral', LocationItemType.CATHEDRAL, 20);
        }
        case 'FOREST': {
            return new Location('Forest', LocationItemType.FOREST, 5);
        }
        case 'MOUNTAIN': {
            return new Location('Mountain', LocationItemType.MOUNTAIN, 5);
        }
        default: {
            return null;
        }
    }
};

export const getLocationBlueprint = (location: ItemType): ResourceEffect | null => {
    switch (location) {
        case 'CAMP': {
            return null;
        }
        case 'CATHEDRAL': {
            return null;
        }
        case 'FOREST': {
            return null;
        }
        case 'MOUNTAIN': {
            return null;
        }
        default: {
            return null;
        }
    }
};
