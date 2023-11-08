import { type Card } from '../data/card';
import { CARD_HEIGHT, CARD_WIDTH } from './variables';

export const checkCardsCollision = (cardId: string, cards: Card[], newXPos: number, newYPos: number): string[] => {
    const collisionCardIds: string[] = [];
    cards.forEach((card) => {
        if (card.id !== cardId && newXPos >= card.positionX - CARD_WIDTH && newXPos <= card.positionX + CARD_WIDTH && newYPos >= card.positionY - CARD_HEIGHT && newYPos <= card.positionY + CARD_HEIGHT) {
            collisionCardIds.push(card.id);
        }
    });
    return collisionCardIds;
};
