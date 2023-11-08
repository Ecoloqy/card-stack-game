import { Worker } from '../cards/worker';
import { type ItemType, ToolItemType, WorkerItemType } from '../../enums/item-type';
import { type ResourceEffect } from '../../interfaces/resource-effect';

export const getWorkers = (location: ItemType): Worker | null => {
    switch (location) {
        case 'PERSON': {
            return new Worker('Person', WorkerItemType.PERSON, 1);
        }
        case 'SAMURAI': {
            return new Worker('Samurai', WorkerItemType.SAMURAI, 1);
        }
        default: {
            return null;
        }
    }
};

export const getWorkerBlueprint = (location: ItemType): ResourceEffect | null => {
    switch (location) {
        case 'PERSON': {
            return { resources: [WorkerItemType.PERSON], initiator: WorkerItemType.PERSON, quantity: 1, decreaseDurability: false, removeInitiator: false };
        }
        case 'SAMURAI': {
            return { resources: [ToolItemType.AXE], initiator: WorkerItemType.PERSON, quantity: 1, decreaseDurability: true, removeInitiator: true };
        }
        default: {
            return null;
        }
    }
};
