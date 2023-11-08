import { type ItemType } from '../enums/item-type';

export interface ResourceEffect {
    resources: ItemType[]
    initiator: ItemType
    decreaseDurability: boolean
    removeInitiator: boolean
    quantity: number
}
