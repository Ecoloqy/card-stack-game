import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Card } from '../../data/card';
import { type DraggedCardData, initialState } from './state';
import { deserialize, serialize } from './serializer';

const cardsState = createSlice({
    initialState,
    name: 'cards',
    reducers: {
        setCards (state, { payload }: PayloadAction<Card[]>) {
            state.cards = payload.reduce((cards, card) => ({ ...cards, [card.id]: serialize(card) }), {}) ?? {};
            state.ids = payload.map((card) => card.id) ?? [];
        },
        setCard (state, { payload }: PayloadAction<Card>) {
            state.cards[payload.id] = serialize(payload);
            state.ids = [...state.ids.filter((id) => id !== payload.id), payload.id];
        },
        setCardZIndex (state, { payload }: PayloadAction<{ id: string, zIndex: number | null }>) {
            const card = deserialize<Card>(state.cards[payload.id]);
            state.cards[payload.id] = serialize({ ...card, zIndex: payload.zIndex });
        },
        setCardExecutionPoints (state, { payload }: PayloadAction<{ id: string, executionPoints: number }>) {
            const card = deserialize<Card>(state.cards[payload.id]);
            state.cards[payload.id] = serialize({ ...card, executionPoints: payload.executionPoints });
        },
        setCardDurability (state, { payload }: PayloadAction<{ id: string, durability: number }>) {
            const card = deserialize<Card>(state.cards[payload.id]);
            state.cards[payload.id] = serialize({ ...card, durability: payload.durability });
        },
        removeCard (state, { payload }: PayloadAction<string>) {
            state.ids = state.ids.filter((id) => id !== payload);
            state.cards[payload] = null;
        },
        setDraggedCard (state, { payload }: PayloadAction<DraggedCardData | null>) {
            state.draggedCard = payload;
        },
        setDraggedCards (state, { payload }: PayloadAction<string[]>) {
            state.draggedCardsIds = payload;
        },
        setInterval (state, { payload }: PayloadAction<{ id: string, interval: NodeJS.Timer }>) {
            state.intervals[payload.id] = payload.interval;
        },
        removeInterval (state, { payload }: PayloadAction<string>) {
            if (state.intervals[payload] !== null) {
                clearInterval(state.intervals[payload]!);
            }
            state.intervals[payload] = null;
        }
    }
});

export const actions = cardsState.actions;
export const reducer = cardsState.reducer;
