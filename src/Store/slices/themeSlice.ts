import { createSlice } from '@reduxjs/toolkit'

const initialState: { theme: 'light' | 'dark' | 'system' } = {
    theme: "dark",
  };

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
       setTheme: (state, action) => {
           state.theme = action.payload
       },
      

    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = ThemeSlice.actions

export default ThemeSlice.reducer