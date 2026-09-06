const initialState = {
  city: "Mumbai", // default city
  current: null, // live weather data
  forecast: null, // next days ka forecast array
  error: null, // error message
  loading: false, // loading spinner toggle
};
export const weatherReducer = (state = initialState, action) => {
  if (action.type === "FETCH_WEATHER_PENDING") {
    return { ...state, loading: true, error: null };

  } else if (action.type === "FETCH_CURRENT_SUCCESS") {
    return { ...state, loading: false, current: action.payload };

  } else if (action.type === "FETCH_FORECAST_SUCCESS") {
    return { ...state, loading: false, forecast: action.payload };

  } else if (action.type === "FETCH_WEATHER_ERROR") {
    return { ...state, loading: false, error: action.payload };

  } else if (action.type === "SET_CITY") {
    return { ...state, city: action.payload };
    
  } else {
    return state;
  }
};
