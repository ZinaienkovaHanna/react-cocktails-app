import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from './cocktails/reducer';

const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
