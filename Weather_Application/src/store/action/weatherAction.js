import { FETCH_WEATHER_PENDING, FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, SET_CITY } from "../constants/weatherConstants";
import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API

export const fetchWeatherPending = () => {

    return {
        type: FETCH_WEATHER_PENDING,
    }
}

export const fetchCurrentSuccess = (data) => {

    return {
        type: FETCH_CURRENT_SUCCESS,
        payload: data
    }
}

export const fetchForecastSuccess = (data) => {

    return {
        type: FETCH_FORECAST_SUCCESS,
        payload: data
    }
}

export const fetchWeatherError = (error) => {
    
    return {
        type: FETCH_WEATHER_ERROR,
        payload: error
    }
}

export const setCity = (city) => {

    return {
        type: SET_CITY,
        payload: city
    }
}

export const fetchWeather = (city) => {

    return async (dispatch) => {

        dispatch(fetchWeatherPending());
       
        try {
                 
            const currentWeatherDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            const forecastDetails = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)

            console.log(currentWeatherDetails);
            console.log(forecastDetails)

            dispatch(fetchCurrentSuccess(currentWeatherDetails.data));
            dispatch(fetchForecastSuccess(forecastDetails.data.list));

        } catch(error){
            dispatch(fetchWeatherError(error.response?.data?.message || "Something went wrong"));
        }
    }
}

