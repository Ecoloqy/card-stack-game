import { reducer as cardsReducer } from './cards/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        cardsStore: cardsReducer
    },
    devTools: {
        trace: process.env.NODE_ENV === 'development'
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
