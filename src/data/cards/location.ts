import { type CardType } from '../../types/card-type';
import { v4 as uuidv4 } from 'uuid';
import { type Card } from '../card';
import { CARD_Z_INDEX } from '../../helpers/variables';
import { type ItemType, type LocationItemType } from '../../enums/item-type';

export class Location implements Card {
    id: string = (() => uuidv4())();
    text!: string;
    type!: ItemType;
    cardType: CardType = 'LOCATION';
    durability!: number;
    executionPoints: number = 0;
    positionX: number = 0;
    positionY: number = 0;
    prevCard: string | null = null;
    zIndex: number | null = CARD_Z_INDEX;

    constructor (text: string, type: LocationItemType, durability: number) {
        this.text = text;
        this.type = type;
        this.durability = durability;
    }
}
