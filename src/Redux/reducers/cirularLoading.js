import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
    error: null,
    loading: false,
};

const circularLoading = createSlice({
    name: 'Handle Message with Circular bar',
    initialState,
    reducers: {
        onSetCircularState: (state, action) => {
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

export const { onSetCircularState, setLoading, setError } = circularLoading.actions;

export default circularLoading.reducer;
