import { type CardType } from '../../types/card-type';
import { v4 as uuidv4 } from 'uuid';
import { type Card } from '../card';
import { CARD_Z_INDEX } from '../../helpers/variables';
import { type ItemType, type ResourceItemType } from '../../enums/item-type';

export class Resource implements Card {
    id: string = (() => uuidv4())();
    text!: string;
    type!: ItemType;
    cardType: CardType = 'RESOURCE';
    durability!: number;
    executionPoints: number = 0;
    positionX: number = 0;
    positionY: number = 0;
    prevCard: string | null = null;
    zIndex: number | null = CARD_Z_INDEX;

    constructor (text: string, type: ResourceItemType, durability: number) {
        this.text = text;
        this.type = type;
        this.durability = durability;
    }
}
