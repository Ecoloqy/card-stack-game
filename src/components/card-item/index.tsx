import React, { type DragEventHandler, type ReactElement } from 'react';
import { type Card } from '../../data/card';
import './style.scss';
import { CARD_EXECUTION_POINTS, CARD_HEIGHT, CARD_WIDTH, CARD_Z_INDEX } from '../../helpers/variables';
import { type DraggedCardData } from '../../contexts/cards/state';
import { IconItem } from '../layout/icon-item';
import { ProgressBar } from '../progress-bar';

export interface CardItemProps {
    card: Card
    draggedCardData: DraggedCardData | null
    setDraggedCardData: (card: Card, xOffset: number, yOffset: number, xStart: number, yStart: number) => void
}

const CardItem = ({ card, draggedCardData, setDraggedCardData }: CardItemProps): ReactElement => {
    const onDragEvent: DragEventHandler<HTMLDivElement> = (event: React.DragEvent<HTMLDivElement>): void => {
        setDraggedCardData(card, event.clientX, event.clientY, card.positionX, card.positionY);
    };

    return (
        <div className={'column card-item-container' + (draggedCardData?.cardId === card.id ? ' dragged' : '')}
             draggable={true}
             id={card.id}
             onDragStart={onDragEvent}
             data-id={card.id}
             style={{ left: card.positionX, top: card.positionY, height: CARD_HEIGHT, width: CARD_WIDTH, zIndex: card.zIndex ?? CARD_Z_INDEX }}
        >
            {card.executionPoints !== 0 &&
                <div className="execution-bar">
                    <ProgressBar value={card.executionPoints} maxValue={CARD_EXECUTION_POINTS} />
                </div>
            }
            <div className="row header">{card.text}</div>
            <IconItem type={card.type} width={CARD_WIDTH - 20 + 'px'} height={CARD_HEIGHT - 20 + 'px'} fillColor={'gold'} />
        </div>
    );
};

export default CardItem;
