import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { Contact } from "./reducer";

const contactsUrl = "https://6a8edbd1a12b7de8cc0f0f15.mockapi.io/phones";

interface NewContact {
  text: string;
  number: string;
}

interface ThunkConfig {
  rejectValue: string;
}

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : "Request failed";

export const getContacts = createAsyncThunk<Contact[], void, ThunkConfig>(
  "contacts/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Contact[]>(contactsUrl);
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const addContacts = createAsyncThunk<Contact, NewContact, ThunkConfig>(
  "contacts/post",
  async ({ text, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<Contact>(contactsUrl, {
        text,
        number,
        saved: false,
      });
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const deleteContacts = createAsyncThunk<string, string, ThunkConfig>(
  "contacts/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${contactsUrl}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const checkContact = createAsyncThunk<
  Contact,
  Pick<Contact, "id" | "saved">,
  ThunkConfig
>("contacts/put", async ({ id, saved }, { rejectWithValue }) => {
  try {
    const { data } = await axios.put<Contact>(`${contactsUrl}/${id}`, {
      saved: !saved,
    });
    return data;
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});