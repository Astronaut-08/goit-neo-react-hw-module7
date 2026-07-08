//  файл слайсу для фільтрів
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const contactsSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, {payload}) {
            state.name = payload
        }
    }
})

export const {changeFilter} = contactsSlice.actions
export default contactsSlice.reducer
