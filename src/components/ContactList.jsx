/**
 * ============================================
 * 🎯 COMPONENT: ContactList
 * ============================================
 * 
 * This component displays the list of contacts.
 * Already implemented - use as reference!
 * 
 * Props:
 * - contacts: array of contacts
 * - onEdit: function to edit a contact
 * - onDelete: function to remove a contact
 */

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="contact-list">
      <div className="list-header">
        <h2 className="list-title">Contact List</h2>
        <span className="contact-count">{contacts.length} contacts</span>
      </div>

      <div className="contact-items">
        {contacts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <p>No contacts registered yet.</p>
            <p>Add your first contact using the form above!</p>
          </div>
        ) : (
          contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-email">{contact.email}</span>
                {contact.phone && (
                  <span className="contact-phone">📞 {contact.phone}</span>
                )}
              </div>
              
              <div className="contact-actions">
                <button 
                  className="btn-edit"
                  onClick={() => onEdit(contact)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => onDelete(contact.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ContactList
