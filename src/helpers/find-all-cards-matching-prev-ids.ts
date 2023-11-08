import { type Card } from '../data/card';

export const findAllCardsMatchingPrevIds = (cards: Card[], id: string): string[] => {
    let result: string[] = [id];
    cards.forEach((card) => {
        if (card.prevCard === id) {
            result = result.concat(findAllCardsMatchingPrevIds(cards, card.id));
        }
    });
    return result;
};
