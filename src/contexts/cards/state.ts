import { LocationItemType, ResourceItemType, ToolItemType, WorkerItemType } from '../../enums/item-type';
import { getWorkers } from '../../data/blueprints/workers';
import { getLocations } from '../../data/blueprints/locations';
import { getResources } from '../../data/blueprints/resources';
import { getTools } from '../../data/blueprints/tools';
import { serialize } from './serializer';

export interface DraggedCardData {
    cardId: string
    xOffset: number
    yOffset: number
    xStart: number
    yStart: number
}

export interface CardsStoreState {
    cards: Record<string, string | null>
    ids: string[]
    draggedCard: DraggedCardData | null
    draggedCardsIds: string[]
    intervals: Record<string, NodeJS.Timer | null>
}

const deck = [
    getWorkers(WorkerItemType.PERSON),
    getWorkers(WorkerItemType.PERSON),
    getWorkers(WorkerItemType.SAMURAI),
    getLocations(LocationItemType.CAMP),
    getLocations(LocationItemType.FOREST),
    getLocations(LocationItemType.MOUNTAIN),
    getLocations(LocationItemType.CATHEDRAL),
    getResources(ResourceItemType.GRAIN),
    getResources(ResourceItemType.STONE),
    getResources(ResourceItemType.WOOD),
    getTools(ToolItemType.AXE)
].filter((card) => card !== null).map((card) => card!);

export const initialState: CardsStoreState = {
    cards: deck.reduce((cards, card) => ({ ...cards, [card.id]: serialize(card) }), {}),
    ids: deck.map((card) => card.id),
    draggedCard: null,
    draggedCardsIds: [],
    intervals: {}
};
