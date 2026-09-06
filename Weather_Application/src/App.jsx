import React from 'react'
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchWeather } from './store/action/weatherAction'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'

const App = () => {

  const state = useSelector(state => state.city)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchWeather("Mumbai"))
  },[])

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-10">
        <Search/>
        <CurrentWeather/>
    </div>
  )
}

export default App
