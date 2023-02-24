import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import randomDelay from "../../utils/randomDelay";
import contact from "../../db/contact.json";


export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async () => { return await randomDelay(contact)}
);

const initialState = {
  contacts: [],
  status: null,
};

export const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "pending";
        console.log("Loading...");
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.status = "rejected";
        console.log("Failure while fetching the requested data!");
      });
  },
});

export default contactSlice.reducer;
export const selectContacts = (state) => state.contacts.contacts;
export const contactsStatus = (state) => state.contacts.status;
