import { useState, useEffect } from 'react'

/**
 * 🎯 ContactForm - Complete TODOs 3-6
 */

function ContactForm({ onSubmit, editingContact, onCancel }) {
  // TODO 3: Create state for form fields (name, email, phone) and error message
  // Hint: use useState for each field
  const [name, setName] = useState('')

  // TODO 4: Use useEffect to sync form with editingContact
  // - When editingContact exists: populate fields with its values
  // - When editingContact is null: clear all fields
  // - Dependency array should include editingContact

  // TODO 5: Implement handleSubmit
  // - Prevent default form behavior
  // - Validate: name and email are required
  // - If invalid: set error message and return
  // - If valid: call onSubmit({ name, email, phone })
  // - If valid and NOT editing: clear the form
  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement here
  }

  const isEditing = editingContact !== null

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{isEditing ? 'Edit Contact' : 'New Contact'}</h2>

      {/* TODO 6: Add error display and remaining input fields (email, phone)
          
          Each input should:
          - Be a controlled component (value + onChange)
          - Have a label with className="form-label"
          - Be wrapped in a div with className="form-group"
          
          Use className="form-row" to group inputs horizontally
          
          Follow the same pattern as the name input below */}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="name">name *</label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* TODO 6: Add email input (required) and phone input (optional) here */}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Save Changes' : 'Add Contact'}
        </button>
        {isEditing && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default ContactForm
