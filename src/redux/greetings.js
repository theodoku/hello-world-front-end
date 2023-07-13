import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/greetings';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    const res = await fetch(API_URL);
    const greeting = await res.json();
    const message = greeting.greeting;
    return message;
  },
);

const initialState = {
  message: '',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => ({
      ...state,
      message: action.payload,
    }));
  },
});

export default greetingsSlice.reducer;
