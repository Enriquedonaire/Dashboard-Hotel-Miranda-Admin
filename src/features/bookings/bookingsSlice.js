import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import randomDelay from "../../utils/randomDelay";
import bookings from "../../db/bookings.json";




export const fetchBookings = createAsyncThunk('bookings/fetchBookings',
    async () => { return await randomDelay(bookings)}
);

export const fetchBooking = createAsyncThunk('booking/fetchBooking',
    ({booking}) => { return {booking}}
);


const initialState = {
  bookings: [],
  booking: {}
}



export const bookingsSlice = createSlice({
  name: "bookingsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "pending";
        console.log("Loading...");
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = "rejected";
        console.log("Failure while fetching Bookings!");
      });
        builder
        .addCase(fetchBooking.fulfilled, (state, action) => {
            state.booking = state.bookings.find(booking => booking.id === action.payload)
        });
    }

  });

export default bookingsSlice.reducer;
export const selectBookings = (state) => state.bookings.bookings;
export const selectBooking = (state) => state.bookings.singleBooking;
export const bookingsStatus = (state) => state.bookings.status;

