import { type ItemType, LocationItemType, ResourceItemType, ToolItemType, WorkerItemType } from '../../enums/item-type';
import { getWorkerBlueprint, getWorkers } from './workers';
import { getLocationBlueprint, getLocations } from './locations';
import { getResourceBlueprint, getResources } from './resources';
import { getToolBlueprint, getTools } from './tools';
import { type ResourceEffect } from '../../interfaces/resource-effect';
import { type Blueprints } from '../../types/blueprints';
import { type ResourceEffectResult } from '../../interfaces/resource-effect-result';
import { type Worker } from '../cards/worker';
import { type Location } from '../cards/location';
import { type Resource } from '../cards/resource';
import { type Tool } from '../cards/tool';

export const getItemFromType = (itemType: ItemType, enumType: typeof WorkerItemType | typeof LocationItemType | typeof ResourceItemType | typeof ToolItemType): Worker | Location | Resource | Tool | null => {
    switch (enumType) {
        case WorkerItemType: {
            return getWorkers(itemType);
        }
        case LocationItemType: {
            return getLocations(itemType);
        }
        case ResourceItemType: {
            return getResources(itemType);
        }
        case ToolItemType: {
            return getTools(itemType);
        }
        default: {
            return null;
        }
    }
};

export const findMatchingResourceEffect = (allCardTypes: ItemType[]): ResourceEffectResult | null => {
    const blueprints = getAllBlueprintTypes();

    return blueprints.effects
        .filter((effect) => [...effect.resources, effect.initiator].length === allCardTypes.length)
        .find((effect) => allCardTypes.every((cardType) => [...effect.resources, effect.initiator].includes(cardType)) && [...effect.resources, effect.initiator].every((cardType) => allCardTypes.includes(cardType))) ?? null;
};

export const getAllBlueprintTypes = (): Blueprints => {
    const blueprints: Blueprints = { recipes: {}, effects: [] };
    [WorkerItemType, LocationItemType, ResourceItemType, ToolItemType].forEach((itemType) => {
        const items: ItemType[] = Object.values(itemType);
        items.forEach((item) => {
            const selectedFunction = getBlueprintsFunction(itemType);
            if (selectedFunction != null) {
                const resourceEffect = selectedFunction(item);
                if (resourceEffect !== null) {
                    blueprints.recipes[resourceEffect.resources.join(':')] = { ...resourceEffect, item, itemType };
                    blueprints.effects.push({ ...resourceEffect, item, itemType });
                }
            }
        });
    });

    return blueprints;
};

const getBlueprintsFunction = (enumType: typeof WorkerItemType | typeof LocationItemType | typeof ResourceItemType | typeof ToolItemType): ((item: ItemType) => ResourceEffect | null) | null => {
    switch (enumType) {
        case WorkerItemType: {
            return getWorkerBlueprint;
        }
        case LocationItemType: {
            return getLocationBlueprint;
        }
        case ResourceItemType: {
            return getResourceBlueprint;
        }
        case ToolItemType: {
            return getToolBlueprint;
        }
        default: {
            return null;
        }
    }
};
