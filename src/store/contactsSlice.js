import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  editingContact: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: Date.now().toString(),
        ...action.payload,
      }
      state.items.push(newContact)
    },

    updateContact: (state, action) => {
      const index = state.items.findIndex(c => c.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
      state.editingContact = null
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload)
    },

    setEditingContact: (state, action) => {
      state.editingContact = action.payload
    },

    clearEditingContact: (state) => {
      state.editingContact = null
    },
  },
})

export const {
  addContact,
  updateContact,
  deleteContact,
  setEditingContact,
  clearEditingContact,
} = contactsSlice.actions

export default contactsSlice.reducer
