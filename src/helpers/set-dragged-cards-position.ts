import { actions } from '../contexts/cards/reducers';
import { CARD_STACK_OFFSET, CARD_Z_INDEX } from './variables';
import { type Card } from '../data/card';
import { type Dispatch } from 'redux';
import { findAllCardsMatchingPrevIds } from './find-all-cards-matching-prev-ids';
import { findAllCardsMatchingIds } from './find-all-cards-matching-ids';

export const setDraggedCardsPositionIfCollision = (dispatch: Dispatch, cards: Card[], draggedCards: Card[], draggedCard: Card, collisionCardIds: string[], newXPos: number, newYPos: number): string => {
    const collisionCardId = collisionCardIds[collisionCardIds.length - 1];
    draggedCards.forEach((card, index) => {
        const collisionCard = cards.find((card) => card.id === collisionCardId) ?? null;
        const prevCardId = index > 0 ? draggedCards[index - 1].id : collisionCardId ?? null;
        dispatch(actions.setCard({
            ...card,
            prevCard: prevCardId,
            zIndex: CARD_Z_INDEX,
            positionX: collisionCard?.positionX != null ? collisionCard?.positionX : newXPos,
            positionY: collisionCard?.positionY != null ? collisionCard?.positionY + ((index + 1) * CARD_STACK_OFFSET) : newYPos
        }));
    });

    const nextCardIds = findAllCardsMatchingPrevIds(cards, draggedCard.id);
    const previousCardIds = findAllCardsMatchingIds(cards, collisionCardId).reverse();
    const stackCardsIds: string[] = previousCardIds.concat(nextCardIds).reverse();

    stackCardsIds.forEach((stackCardId, index) => {
        dispatch(actions.setCardZIndex({ id: stackCardId, zIndex: CARD_Z_INDEX - index - 1 }));
    });
    return collisionCardId;
};

export const setDraggedCardsPositionIfNoCollision = (dispatch: Dispatch, draggedCards: Card[], newXPos: number, newYPos: number): void => {
    draggedCards.forEach((card, index) => {
        dispatch(actions.setCard({
            ...card,
            prevCard: index > 0 ? draggedCards[index - 1].id : null,
            zIndex: CARD_Z_INDEX,
            positionX: newXPos,
            positionY: newYPos + (index * CARD_STACK_OFFSET)
        }));
    });
};
