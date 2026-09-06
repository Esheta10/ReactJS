import React from 'react'
import { useSelector } from "react-redux"

const CurrentWeather = () => {
  const { current, loading, error } = useSelector((state) => state);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (error) {
    return <div className="alert alert-error">{error}</div>;
  }

  if (!current) return null;

  return (
    <div className="card bg-neutral text-neutral-content w-96 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{current.name}</h2>
        <p className="text-4xl font-semibold">
          {Math.round(current.main?.temp - 273.15)}°C
        </p>
        <p className="capitalize">{current.weather?.[0]?.description}</p>
        <div className="flex gap-4 mt-2 text-sm">
          <span>Humidity: {current.main?.humidity}%</span>
          <span>Wind: {current.wind?.speed} m/s</span>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;