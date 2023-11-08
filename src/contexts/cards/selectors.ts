import { deserialize } from './serializer';
import { type Card } from '../../data/card';
import { type RootState } from '../store';
import { type DraggedCardData } from './state';

export const getCard = (state: RootState, id: string | null): Card | null => id !== null ? deserialize<Card>(state.cardsStore.cards[id]) : null;

export const getCards = (state: RootState): Card[] => state.cardsStore.ids.map((id) => deserialize<Card>(state.cardsStore.cards[id])).filter((card) => card !== null).map((card) => card!) ?? [];

export const getDraggedCardData = (state: RootState): DraggedCardData | null => state.cardsStore.draggedCard;

export const getDraggedCard = (state: RootState): Card | null => {
    const draggedCard = state.cardsStore.draggedCard;
    if (draggedCard !== null) {
        return deserialize<Card>(state.cardsStore.cards[draggedCard.cardId]);
    }
    return null;
};

export const getDraggedCards = (state: RootState): Card[] => {
    return state.cardsStore.draggedCardsIds.map((id) => deserialize<Card>(state.cardsStore.cards[id])).filter((card) => card !== null).map((card) => card!) ?? [];
};
