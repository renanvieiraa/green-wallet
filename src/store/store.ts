import { configureStore } from '@reduxjs/toolkit';
import menuToggleSlice from './slices/menuToggleSlice';
import storageReducer from './slices/storageSlice';
export const store = configureStore({
  reducer: {
    storage: storageReducer,
    menuToggle: menuToggleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
