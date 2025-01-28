import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
    error: null,
    loading: false,
};

const messageLoadingSlice = createSlice({
    name: 'Handle Message with Snackbar State',
    initialState,
    reducers: {
        onSetMessagingState: (state, action) => {
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

export const { onSetMessagingState, setLoading, setError } = messageLoadingSlice.actions;

export default messageLoadingSlice.reducer;
