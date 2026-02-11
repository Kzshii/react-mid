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
 * Implement a Contact Manager.
 * Complete TODOs 1-2 below and TODOs 3-4 in ContactForm.jsx
 */

function App() {
  const dispatch = useDispatch()

  // TODO 1: Use useSelector to get contacts and editingContact from Redux state
  // - state.contacts.items contains the contacts array
  // - state.contacts.editingContact contains the contact being edited (or null)
  const contacts = [] // Fix this
  const editingContact = null // Fix this

  // TODO 2: Implement handleSaveContact
  // - If editingContact exists: dispatch updateContact with { id, name, email, phone }
  // - If editingContact is null: dispatch addContact with { name, email, phone }
  const handleSaveContact = (contactData) => {
    // Implement here
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
        <p className="app-subtitle">React Mid-Level Challenge</p>
      </header>

      <div className="challenge-box">
        <div className="challenge-title">📋 Instructions</div>
        <div className="challenge-text">
          Complete <span className="todo-marker">2 TODOs</span> in <code>App.jsx</code> and
          <span className="todo-marker"> 2 TODOs</span> in <code>ContactForm.jsx</code>
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
