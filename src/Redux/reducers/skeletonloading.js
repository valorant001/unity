import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
    error: null,
    loading: false,
};

const skeletonloading = createSlice({
    name: 'Handle Sekeleton Loading State',
    initialState,
    reducers: {
        onSetSekeletonLoadingState: (state, action) => {
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

export const { onSetSekeletonLoadingState, setLoading, setError } = skeletonloading.actions;

export default skeletonloading.reducer;
