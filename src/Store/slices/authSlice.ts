import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'


export interface AuthState {
    authenticated: boolean,

}

const initialState: AuthState = {
    authenticated: false,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication: (state, action) => {
            state.authenticated = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setAuthentication } = authSlice.actions

export default authSlice.reducer