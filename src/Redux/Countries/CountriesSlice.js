const LINK = 'https://restcountries.com/v3.1/region/africa';
const INIT_COUNTRIES = 'initializeCountries';

const initialState = {
  countries: [],
};

export default function countriesSlice(state = initialState, action) {
  switch (action.type) {
    case INIT_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}

const setCountries = (countries) => ({
  type: INIT_COUNTRIES,
  payload: countries,
});

const fetchData = () => async (dispatch) => {
  await fetch(LINK)
    .then((response) => response.json())
    .then((res) => {
      const countryDB = res.map((item) => ({
        name: item.name.common,
        offName: item.name.official,
        currencies: item.currencies,
        capital: item.capital,
        region: item.subregion,
        languages: item.languages,
        latlng: item.latlng,
        area: item.area,
        timezones: item.timezones,
        flags: item.flags,
      }));
      dispatch(setCountries(countryDB));
    });
};

export { fetchData };
