import { type Card } from '../data/card';

export const findAllCardsMatchingIds = (cards: Card[], id: string): string[] => {
    let result: string[] = [id];
    cards.forEach((card) => {
        if (card.id === id && card.prevCard !== null) {
            result = result.concat(findAllCardsMatchingIds(cards, card.prevCard));
        }
    });
    return result;
};
