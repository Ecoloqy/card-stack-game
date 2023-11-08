import React, { type ReactElement } from 'react';
import { type Card } from '../../data/card';
import './style.scss';
import { useDispatch } from 'react-redux';
import CardItem from '../card-item';
import {
    getCards,
    getDraggedCard,
    getDraggedCardData,
    getDraggedCards
} from '../../contexts/cards/selectors';
import { useAppSelector } from '../../contexts/store';
import { actions } from '../../contexts/cards/reducers';
import { checkCardsCollision } from '../../helpers/check-cards-collision';
import { CARD_EXECUTION_POINTS, CARD_STACK_OFFSET, CARD_Z_INDEX } from '../../helpers/variables';
import { findAllCardsMatchingPrevIds } from '../../helpers/find-all-cards-matching-prev-ids';
import {
    setDraggedCardsPositionIfCollision,
    setDraggedCardsPositionIfNoCollision
} from '../../helpers/set-dragged-cards-position';
import { findAllCardsBelow } from '../../helpers/find-all-cards-below';
import { findMatchingResourceEffect, getItemFromType } from '../../data/blueprints/blueprints';

const CardBoard = (): ReactElement => {
    const dispatch = useDispatch();
    const cards = useAppSelector(getCards);
    const draggedCard = useAppSelector(getDraggedCard);
    const draggedCardData = useAppSelector(getDraggedCardData);
    const draggedCards = useAppSelector(getDraggedCards);

    const onDropEvent = (event: React.DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.stopPropagation();

        if (draggedCard !== null && draggedCards.length !== 0 && draggedCardData !== null) {
            const newXPos = draggedCardData.xStart + event.clientX - draggedCardData.xOffset;
            const newYPos = draggedCardData.yStart + event.clientY - draggedCardData.yOffset;

            const draggedCardsIds = draggedCards.map((card) => card.id);
            const collisionCardIds = checkCardsCollision(draggedCardData.cardId, cards, newXPos, newYPos).filter((id) => !draggedCardsIds.includes(id));

            if (collisionCardIds.length !== 0) {
                const collisionId = setDraggedCardsPositionIfCollision(dispatch, cards, draggedCards, draggedCard, collisionCardIds, newXPos, newYPos);

                // TODO: action after card drop on another card
                const craftingCards = [draggedCard, ...findAllCardsBelow(cards, collisionId)];
                console.log(craftingCards);

                const effect = findMatchingResourceEffect(craftingCards.map((card) => card.type));

                if (effect !== null) {
                    resetInterval(draggedCard);
                    const interval = setInterval(() => {
                        if (draggedCard.executionPoints >= CARD_EXECUTION_POINTS) {
                            if (effect.decreaseDurability) {
                                craftingCards.forEach((craftingCard) => {
                                    if (craftingCard.id === draggedCard.id) {
                                        if (effect.removeInitiator) {
                                            dispatch(actions.removeCard(craftingCard.id));
                                        }
                                    } else {
                                        craftingCard.durability--;
                                        dispatch(actions.setCardDurability({ id: craftingCard.id, durability: craftingCard.durability }));
                                    }
                                });
                            }
                            craftingCards.forEach((craftingCard) => {
                                console.log(craftingCard);
                                if (craftingCard.durability <= 0) {
                                    dispatch(actions.removeCard(craftingCard.id));
                                }
                            });
                            const effectCard = getItemFromType(effect.item, effect.itemType);
                            if (effectCard !== null) {
                                console.log(effectCard);
                                dispatch(actions.setCard(effectCard));
                            }
                            resetInterval(draggedCard);
                        }

                        draggedCard.executionPoints++;
                        dispatch(actions.setCardExecutionPoints({ id: draggedCard.id, executionPoints: draggedCard.executionPoints }));
                    }, 1000);
                    dispatch(actions.setInterval({ id: draggedCard.id, interval }));
                }
            } else {
                setDraggedCardsPositionIfNoCollision(dispatch, draggedCards, newXPos, newYPos);

                // TODO: action after card drop in empty area
                resetInterval(draggedCard);
            }
        }

        dispatch(actions.setDraggedCards([]));
        dispatch(actions.setDraggedCard(null));
    };

    const onDragOverEvent = (event: React.DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.stopPropagation();

        if (draggedCards.length !== 0 && draggedCardData !== null && draggedCard !== null) {
            const newXPos = draggedCardData.xStart + event.clientX - draggedCardData.xOffset;
            const newYPos = draggedCardData.yStart + event.clientY - draggedCardData.yOffset;

            draggedCards.forEach((card, index) => {
                dispatch(actions.setCard({
                    ...card,
                    positionX: newXPos,
                    positionY: newYPos + (index * CARD_STACK_OFFSET)
                }));
            });
        }
    };

    const setDraggedCardData = (card: Card, xOffset: number, yOffset: number, xStart: number, yStart: number): void => {
        dispatch(actions.setDraggedCard({ cardId: card.id, xOffset, yOffset, xStart, yStart }));

        const foundCardsIds = findAllCardsMatchingPrevIds(cards, card.id);
        dispatch(actions.setDraggedCards(foundCardsIds));
        foundCardsIds.forEach((cardId, index) => {
            dispatch(actions.setCardZIndex({ id: cardId, zIndex: index + CARD_Z_INDEX + 1 }));
        });
    };

    const resetInterval = (card: Card): void => {
        card.executionPoints = 0;
        dispatch(actions.setCardExecutionPoints({ id: card.id, executionPoints: card.executionPoints }));
        dispatch(actions.removeInterval(card.id));
    };

    return (
        <div
            className="card-board-container"
            onDragOver={onDragOverEvent}
            onDrop={onDropEvent}
        >
             {cards.map((card: Card, index: number) => (
                <CardItem card={card} draggedCardData={draggedCardData} key={index} setDraggedCardData={setDraggedCardData} />
             ))}
        </div>
    );
};

export default CardBoard;
