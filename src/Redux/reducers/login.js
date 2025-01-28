import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
    error: null,
    loading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        onSetLoginState: (state, action) => {
            state.value = action.payload;
            state.error = null;          
            state.loading = false;       
        },
        setLoading: (state) => {
            state.loading = true;        
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;       
        },
    },
});

export const { onSetLoginState, setLoading, setError } = loginSlice.actions;

export default loginSlice.reducer;
