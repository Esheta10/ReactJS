# 🌦️ Weather Application (React + Redux + Redux Thunk)

A beginner-friendly Weather Application built to learn and master **React**, **Redux**, **Redux Thunk (Async Middleware)**, and **OpenWeatherMap API** integration.


<img width="468" height="317" alt="image" src="https://github.com/user-attachments/assets/5857bacb-6c03-4b2c-bad9-5570087d627e" />

---

## 📑 Table of Contents
- [Overview](#-overview)
- [Key Concepts Learned](#-key-concepts-learned)
- [Redux Data Flow in this App](#-redux-data-flow-in-this-app)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Step-by-Step Explanation of Code](#-step-by-step-explanation-of-code)
  - [1. Constants (`weatherConstants.js`)](#1-constants-weatherconstantsjs)
  - [2. Actions & Thunk (`weatherAction.js`)](#2-actions--thunk-weatheractionjs)
  - [3. Reducer (`weatherReducer.js`)](#3-reducer-weatherreducerjs)
  - [4. Store Configuration (`store.js`)](#4-store-configuration-storejs)
  - [5. React Integration (`Provider`, `useSelector`, `useDispatch`)](#5-react-integration-provider-useselector-usedispatch)
- [Common Mistakes & Gotchas](#-common-mistakes--gotchas-for-beginners)
- [Setup & Installation](#-setup--installation)

---

## 🌟 Overview

This project fetches real-time weather information and 5-day forecast data from the OpenWeatherMap API based on city search input. It demonstrates how to manage complex asynchronous application state cleanly using **Redux**.

---

## 🧠 Key Concepts Learned

1. **Global State Management**: Keeping state in a centralized Redux store rather than passing props manually across components.
2. **Predictable State Updates**: State cannot be modified directly; components dispatch actions, and pure reducer functions compute the new state.
3. **Async Operations with Redux Thunk**: Handling API calls (async actions) in Redux by returning functions `(dispatch) => { ... }` instead of plain action objects.
4. **React-Redux Hooks**:
   - `useSelector`: Reads data/state from the Redux store.
   - `useDispatch`: Dispatches actions to update store state.

---

---

## 📂 Project Architecture & Directory Structure

```text
Weather_Application/
├── .env                              # Environment variable (API Key)
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      # App root with Redux <Provider>
    ├── App.jsx                       # Main layout component
    ├── index.css                     # Tailwind CSS & DaisyUI styles
    ├── components/
    │   ├── Search.jsx                # Search input & submit form
    │   └── CurrentWeather.jsx        # Displays live weather data
    └── store/
        ├── store.js                  # Redux store with Thunk & DevTools
        ├── constants/
        │   └── weatherConstants.js   # Action type string constants
        ├── action/
        │   └── weatherAction.js      # Synchronous and async (Thunk) action creators
        └── reducers/
            └── weatherReducer.js     # State reducer function
```

---

## 🔍 Code Explanation:

### 1. Constants (`weatherConstants.js`)
Constants avoid typos in action type names across action creators and reducers.

```javascript
export const FETCH_WEATHER_PENDING = "FETCH_WEATHER_PENDING";
export const FETCH_CURRENT_SUCCESS = "FETCH_CURRENT_SUCCESS";
export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";
export const SET_CITY = "SET_CITY";
```

---

### 2. Actions & Thunk (`weatherAction.js`)
- **Synchronous Actions**: Plain JS objects with `type` and `payload`.
- **Async Action (Thunk)**: `fetchWeather(city)` returns a function that receives `dispatch`. It dispatches a `PENDING` action before the API call, then `SUCCESS` or `ERROR` based on the response.

```javascript
export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherPending()); // Set loading = true

    try {
      const currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );

      dispatch(fetchCurrentSuccess(currentWeather.data));
      dispatch(fetchForecastSuccess(forecast.data.list));
    } catch (error) {
      dispatch(fetchWeatherError(error.response?.data?.message || "Something went wrong"));
    }
  };
};
```

---

### 3. Reducer (`weatherReducer.js`)
Reducers are pure functions: `(prevState, action) => newState`.

```javascript
const initialState = {
  city: "Mumbai",
  current: null,
  forecast: null,
  error: null,
  loading: false,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_CURRENT_SUCCESS:
      return { ...state, loading: false, current: action.payload };
    case FETCH_FORECAST_SUCCESS:
      return { ...state, loading: false, forecast: action.payload };
    case FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
```

---

### 4. Store Configuration (`store.js`)
The store brings together the reducer, middleware (`thunk`), and Redux DevTools.

```javascript
import { createStore, compose, applyMiddleware } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";
import { thunk } from "redux-thunk";

const reduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  weatherReducer,
  compose(applyMiddleware(thunk), reduxDevtool)
);

export default store;
```

---

### 5. React Integration (`Provider`, `useSelector`, `useDispatch`)

1. **Provide Store (`main.jsx`)**:
   ```jsx
   <Provider store={store}>
     <App />
   </Provider>
   ```

2. **Dispatch Actions (`Search.jsx`)**:
   ```jsx
   const dispatch = useDispatch();
   dispatch(fetchWeather(cityName));
   ```

3. **Read State (`CurrentWeather.jsx`)**:
   ```jsx
   const { current, loading, error } = useSelector((state) => state);
   ```

---

## ⚠️ Common Mistakes & Gotchas 

1. **Incorrect State Selection**:
   - If using `createStore(weatherReducer)`, the root state is directly `{ city, current, ... }`. Accessing `state.weatherReducer.city` will throw `TypeError: Cannot read properties of undefined`.
2. **Forgetting `dispatch()` in Thunk**:
   - Calling `fetchWeatherPending()` inside an async action does nothing unless wrapped in `dispatch(fetchWeatherPending())`.
3. **Mutating State Directly**:
   - Never mutate state (e.g., `state.city = action.payload`). Always return a new object with spread operator `{ ...state, city: action.payload }`.
4. **API Endpoint Typos**:
   - Free tier OpenWeatherMap endpoint is `https://api.openweathermap.org/...` (not `pro.openweathermap.org`).

---

## 🚀 Setup & Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd Weather_Application
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variable**:
   Create a `.env` file in the root folder:
   ```env
   VITE_WEATHER_API=your_openweathermap_api_key
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

