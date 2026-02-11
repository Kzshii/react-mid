import { useState, useEffect } from 'react'

/**
 * 🎯 ContactForm - Complete TODO 4
 */

function ContactForm({ onSubmit, editingContact, onCancel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name)
      setEmail(editingContact.email)
      setPhone(editingContact.phone || '')
    } else {
      setName('')
      setEmail('')
      setPhone('')
    }
    setError('')
  }, [editingContact])

  // TODO 4: Complete handleSubmit
  // - Validate: name and email are required (set error message if empty)
  // - If valid: call onSubmit({ name, email, phone }) and clear the form
  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement here
  }

  const isEditing = editingContact !== null

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{isEditing ? 'Edit Contact' : 'New Contact'}</h2>

      {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}

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

        <div className="form-group">
          <label className="form-label" htmlFor="email">email *</label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="phone">phone</label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            placeholder="Optional"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
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
