import { Resource } from '../cards/resource';
import { type ItemType, LocationItemType, ResourceItemType, WorkerItemType } from '../../enums/item-type';
import { type ResourceEffect } from '../../interfaces/resource-effect';

export const getResources = (location: ItemType): Resource | null => {
    switch (location) {
        case 'GRAIN': {
            return new Resource('Grain', ResourceItemType.GRAIN, 1);
        }
        case 'STONE': {
            return new Resource('Stone', ResourceItemType.STONE, 1);
        }
        case 'WOOD': {
            return new Resource('Wood', ResourceItemType.WOOD, 1);
        }
        default: {
            return null;
        }
    }
};

export const getResourceBlueprint = (location: ItemType): ResourceEffect | null => {
    switch (location) {
        case 'GRAIN': {
            return null;
        }
        case 'STONE': {
            return { resources: [LocationItemType.MOUNTAIN], initiator: WorkerItemType.PERSON, quantity: 2, decreaseDurability: true, removeInitiator: false };
        }
        case 'WOOD': {
            return { resources: [LocationItemType.FOREST], initiator: WorkerItemType.PERSON, quantity: 2, decreaseDurability: true, removeInitiator: false };
        }
        default: {
            return null;
        }
    }
};
