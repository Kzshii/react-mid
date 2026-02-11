# 🎯 React Mid-Level Challenge

## Contact Manager | ⏱️ 20 minutes

```bash
npm install && npm run dev
```

---

## 📝 TODOs (6 total)

### `src/App.jsx`

| # | Task | Concept |
|---|------|---------|
| 1 | Use `useSelector` to get data from Redux | React-Redux hooks |
| 2 | Implement `handleSaveContact` using dispatch | Conditional logic |

### `src/components/ContactForm.jsx`

| # | Task | Concept |
|---|------|---------|
| 3 | Create state for form fields | `useState` |
| 4 | Sync form with `editingContact` | `useEffect` |
| 5 | Implement `handleSubmit` with validation | Form handling |
| 6 | Create the input fields (controlled components) | JSX, controlled inputs |

---

## 📚 Quick Reference

```javascript
// useState
const [name, setName] = useState('')

// useSelector
const data = useSelector((state) => state.contacts.items)

// useEffect with dependency
useEffect(() => {
  if (editingContact) {
    setName(editingContact.name)
  } else {
    setName('')
  }
}, [editingContact])

// Controlled input
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// dispatch actions
dispatch(addContact({ name, email, phone }))
dispatch(updateContact({ id, name, email, phone }))
```

---

## 📁 Project Structure

```
src/
├── store/
│   ├── index.js            # ✅ Done
│   └── contactsSlice.js    # ✅ Done
├── components/
│   ├── ContactForm.jsx     # 👈 TODOs 3-6
│   └── ContactList.jsx     # ✅ Done
├── App.jsx                 # 👈 TODOs 1-2
└── main.jsx                # ✅ Done
```

---

## ✅ Checklist

- [ ] Form fields render correctly
- [ ] Add contact works
- [ ] Edit contact populates form
- [ ] Update contact works
- [ ] Validation shows error

---

**Good luck! 🍀**
