import { type Card } from '../data/card';
import { findAllCardsMatchingIds } from './find-all-cards-matching-ids';

export const findAllCardsBelow = (cards: Card[], cardId: string): Card[] => {
    return findAllCardsMatchingIds(cards, cardId).map((id) => cards.find((c) => c.id === id)!) ?? [];
};
