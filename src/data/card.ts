import { type CardType } from '../types/card-type';
import { type ItemType } from '../enums/item-type';

export class Card {
    id!: string;
    text!: string;
    type!: ItemType;
    cardType!: CardType;
    durability!: number;
    executionPoints!: number;
    positionX!: number;
    positionY!: number;
    prevCard!: string | null;
    zIndex!: number | null;
}
