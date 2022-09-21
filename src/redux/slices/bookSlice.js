import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = bookSlice.reducers;
