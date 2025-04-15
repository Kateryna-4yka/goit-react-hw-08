import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

const slice = createSlice ({
    name: `contacts`, 
    initialState: 
        {contacts: {
            items: [],
            loading: false,
            error: null
    }},

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
    })


// прибераємо данні, щоб не світилися після розлогіну користувача


    .addCase (logOut.fulfilled, (state)=>{
      state.contacts.items = [];
    })
  },
});
 
  export default slice.reducer;
