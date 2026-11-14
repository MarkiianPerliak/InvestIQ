import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from "./store";
import { contactAdapter } from './reducer';
import { filterValue } from "./constants";

export const {
  selectAll: selectContacts,
  selectIds,
  selectById,
} = contactAdapter.getSelectors((state: RootState) => state.contacts);

export const selectFilter = (state: RootState) => state.filter.filter;

export const selectIsLoading = (state: RootState) => state.contacts.isloading;

export const selectErrorMessage = (state: RootState) => state.contacts.errorMessage;

export const selectAddContactLoader = (state: RootState) => state.contacts.addContactLoader;


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter], (contacts, filter) => {
    switch (filter) {
      case filterValue.saved:
        return contacts.filter((contact) => contact.saved === true);
    
      default:
        return contacts;
    }
  }
);