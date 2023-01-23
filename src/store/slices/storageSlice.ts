import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DbTable } from 'models/database-model';

export type Database = {
  [key in DbTable]: Array<Record<string, any>>;
};
let database: Database;

export interface storageState {
  value: Database | null;
}

const initialState: storageState = {
  value: null,
};

export const storageSlice = createSlice({
  name: 'storage',
  initialState: initialState,
  reducers: {
    updateStorage: (state, action: PayloadAction<Database>) => {
      if (!!action.payload) {
        // StorageService.saveFile('db', FileTypes.JSON, JSON.stringify(database)).then();
        state.value = action.payload;
      }
    },
  },
});

export const { updateStorage } = storageSlice.actions;

export default storageSlice.reducer;
