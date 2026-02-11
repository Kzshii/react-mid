# 🎯 React Mid-Level Challenge

## Contact Manager with Redux Toolkit | ⏱️ 20 minutes

```bash
npm install && npm run dev
```

---

## 📝 TODOs (4 total)

### `src/store/contactsSlice.js`

| # | Task |
|---|------|
| 1 | Implement `addContact` reducer |
| 2 | Implement `updateContact` reducer |
| 3 | Implement `deleteContact` reducer |

### `src/components/ContactForm.jsx`

| # | Task |
|---|------|
| 4 | Complete `handleSubmit` with validation |

---

## 📚 Quick Reference

```javascript
// Redux Toolkit reducers can mutate state directly (uses Immer)
addContact: (state, action) => {
  const newContact = {
    id: Date.now().toString(),
    ...action.payload
  }
  state.items.push(newContact)
}

// Update item
updateContact: (state, action) => {
  const index = state.items.findIndex(c => c.id === action.payload.id)
  if (index !== -1) {
    state.items[index] = action.payload
  }
}

// Delete item
deleteContact: (state, action) => {
  state.items = state.items.filter(c => c.id !== action.payload)
}
```

---

## 📁 Project Structure

```
src/
├── store/
│   ├── index.js            # ✅ Store configured
│   └── contactsSlice.js    # 👈 TODOs 1-3
├── components/
│   ├── ContactForm.jsx     # 👈 TODO 4
│   └── ContactList.jsx     # ✅ Done
├── App.jsx                 # ✅ Done (uses Redux)
└── main.jsx                # ✅ Provider configured
```

---

## ✅ Checklist

- [ ] Add contact works
- [ ] Edit contact works
- [ ] Delete contact works
- [ ] Validation shows error for empty fields

---

**Good luck! 🍀**
