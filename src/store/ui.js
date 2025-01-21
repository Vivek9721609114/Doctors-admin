import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState: { isModalName: "" },
    reducers: {
        onModalOpen: (state, action) => {
            state.isModalName = action.payload.name
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;