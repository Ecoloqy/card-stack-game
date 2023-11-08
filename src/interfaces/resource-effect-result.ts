import { type ItemType, type LocationItemType, type ResourceItemType, type ToolItemType, type WorkerItemType } from '../enums/item-type';
import { type ResourceEffect } from './resource-effect';

export interface ResourceEffectResult extends ResourceEffect {
    item: ItemType
    itemType: typeof WorkerItemType | typeof LocationItemType | typeof ResourceItemType | typeof ToolItemType
}
