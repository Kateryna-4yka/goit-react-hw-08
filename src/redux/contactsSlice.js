import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector ([selectContacts, selectNameFilter], 
  (contacts, wordForFilter) => {
  return contacts.filter(el => {return el.name.toLowerCase().includes(wordForFilter.toLowerCase().trim())})});  


  export const selectAllContacts = createSelector ([selectContacts], 
    (contacts) => {
    return contacts.length});

const slice = createSlice ({
    name: `contacts`, 
    initialState: 
        {contacts: {
            items: [],
            loading: false,
            error: null
    }},
  // Додаємо обробку зовнішніх екшенів функцій
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.contacts.loading = true;
      state.contacts.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.loading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.loading =  false;
      state.contacts.error = action.payload;
      console.log(action)
    })

    .addCase(addContact.pending, (state) => {
      state.contacts.loading =  true;
      state.contacts.error = null;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.loading =  false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.contacts.loading =  false;
      state.contacts.error = action.payload;
    })

    .addCase(deleteContact.pending, (state) => {
      state.contacts.loading = true;
      state.contacts.error = null;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.loading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(el=> el.id !==action.payload.id);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.contacts.loading =  false;
      state.contacts.error = action.payload;
    });
  },
});
 
  export default slice.reducer;
