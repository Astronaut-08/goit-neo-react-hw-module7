// файл слайсу для контактів
import { createSlice } from "@reduxjs/toolkit";


 const initialState = {
    items: [] 
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, {payload}) {
            state.items.push(payload)
        },
        deleteContact(state, {payload}) {
            state.items = state.items.filter(el => el.id !== payload)
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions
export default contactsSlice.reducer
