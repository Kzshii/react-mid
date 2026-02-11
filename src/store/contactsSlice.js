import { createSlice } from '@reduxjs/toolkit'

/**
 * 🎯 CONTACTS SLICE - Complete TODOs 1-3
 */

const initialState = {
  items: [],
  editingContact: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // TODO 1: Implement addContact reducer
    // - Generate id using Date.now().toString()
    // - Add the new contact to state.items
    addContact: (state, action) => {
      // action.payload = { name, email, phone }
      // Implement here
    },

    // TODO 2: Implement updateContact reducer
    // - Find the contact by id and update its data
    // - Clear editingContact
    updateContact: (state, action) => {
      // action.payload = { id, name, email, phone }
      // Implement here
    },

    // TODO 3: Implement deleteContact reducer
    // - Remove the contact with the given id from state.items
    deleteContact: (state, action) => {
      // action.payload = contactId
      // Implement here
    },

    // ✅ Already implemented
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
