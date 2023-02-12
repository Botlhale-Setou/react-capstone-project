import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './Countries/CountriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export default store;