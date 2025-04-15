import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';


export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, wordForFilter) => {
    const normalized = wordForFilter.toLowerCase().trim();

    return contacts.filter(el => {
      const nameMatches = el.name?.toLowerCase().includes(normalized);
      const numberMatches = el.number?.includes(normalized);
      return nameMatches || numberMatches;
    });
  }
);


  export const selectAllContacts = createSelector ([selectContacts], (contacts) => {return contacts.length});