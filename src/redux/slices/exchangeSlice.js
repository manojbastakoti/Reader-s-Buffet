const { createSlice } = require("@reduxjs/toolkit");

const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    exchangeTokenCount: 0,
  },
  reducers: {
    setExchangeTokenCount: (state, action) => {
      state.exchangeTokenCount = action.payload;
    },
  },
});

export const { setExchangeTokenCount } = exchangeSlice.actions;
export default exchangeSlice.reducer;
