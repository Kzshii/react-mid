import { useSelector, useDispatch } from 'react-redux'
import {
  addContact,
  updateContact,
  deleteContact,
  setEditingContact,
  clearEditingContact,
} from './store/contactsSlice'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

/**
 * ============================================
 * 🎯 REACT MID-LEVEL CHALLENGE
 * ============================================
 * 
 * Implement a Contact Manager using Redux Toolkit.
 * Complete TODOs 1-3 in contactsSlice.js
 * Complete TODO 4 in ContactForm.jsx
 */

function App() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.items)
  const editingContact = useSelector((state) => state.contacts.editingContact)

  const handleSaveContact = (contactData) => {
    if (editingContact) {
      dispatch(updateContact({ id: editingContact.id, ...contactData }))
    } else {
      dispatch(addContact(contactData))
    }
  }

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  const handleEditContact = (contact) => {
    dispatch(setEditingContact(contact))
  }

  const handleCancelEdit = () => {
    dispatch(clearEditingContact())
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Contact Manager</h1>
        <p className="app-subtitle">React Mid-Level Challenge • Redux Toolkit</p>
      </header>

      <div className="challenge-box">
        <div className="challenge-title">📋 Instructions</div>
        <div className="challenge-text">
          Complete <span className="todo-marker">3 TODOs</span> in <code>contactsSlice.js</code> and
          <span className="todo-marker"> 1 TODO</span> in <code>ContactForm.jsx</code>
        </div>
      </div>

      <ContactForm
        onSubmit={handleSaveContact}
        editingContact={editingContact}
        onCancel={handleCancelEdit}
      />

      <ContactList
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
    </div>
  )
}

export default App
