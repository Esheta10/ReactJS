import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchWeather, setCity } from '../store/action/weatherAction';

const Search = () => {

  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);

  const handleInput = (e) => {
    dispatch(setCity(e.target.value));
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (city && city.trim()) {
      dispatch(fetchWeather(city.trim()));
    }
  }

  return (
    <form onSubmit={handleSearch} className="join">
      <div>
        <label className="input validator join-item">
          <input
            type="search"
            required
            value={city || ''}
            placeholder="Search city..."
            onChange={handleInput}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary join-item">
        Search
      </button>
    </form>
  )
}

export default Search
