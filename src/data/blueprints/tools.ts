import { Tool } from '../cards/tool';
import { type ItemType, ResourceItemType, ToolItemType, WorkerItemType } from '../../enums/item-type';
import { type ResourceEffect } from '../../interfaces/resource-effect';

export const getTools = (tool: ItemType): Tool | null => {
    switch (tool) {
        case 'AXE': {
            return new Tool('Axe', ToolItemType.AXE, 1);
        }
        default: {
            return null;
        }
    }
};

export const getToolBlueprint = (location: ItemType): ResourceEffect | null => {
    switch (location) {
        case 'AXE': {
            return { resources: [ResourceItemType.WOOD, ResourceItemType.STONE], initiator: WorkerItemType.PERSON, quantity: 1, decreaseDurability: true, removeInitiator: false };
        }
        default: {
            return null;
        }
    }
};
