import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface menuToggleState {
  value: { shrink: boolean };
}

const initialState: menuToggleState = {
  value: { shrink: false },
};

export const menuToggleSlice = createSlice({
  name: 'menuToggle',
  initialState: initialState,
  reducers: {
    toggleMenuState: (state) => {
      state.value.shrink = !state.value.shrink;
    },
    shrinkMenu: (state, action?: PayloadAction<boolean | null>) => {
      if (!action?.payload) {
        state.value.shrink = !!action?.payload;
      } else {
        state.value.shrink = !state.value.shrink;
      }
    },
  },
});

export const { toggleMenuState, shrinkMenu } = menuToggleSlice.actions;

export default menuToggleSlice.reducer;
