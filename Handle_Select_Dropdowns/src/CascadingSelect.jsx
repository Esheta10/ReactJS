import React, { useState } from "react";

const CascadingSelect = () => {
  // Data Mapping
  const countriesData = {
    USA: ["New York", "San Francisco", "Dallas", "Washington"],
    India: ["New Delhi", "Mumbai", "Hyderabad", "Gurugram"],
    Germany: ["Berlin", "Munich", "Hamburg", "Bonn"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Country Change Handler
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity(""); // country change hone par city ke values reset kar rahe
  };

  return (
    <div className="flex flex-col items-center justify-center text-2xl mt-10 gap-4">
      {/* Country Dropdown */}
      <select value={selectedCountry} onChange={handleCountryChange} className="p-4 border-2">
        <option value="">Select a country</option>
        {Object.keys(countriesData).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
       {selectedCountry && (
        <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedCountry} // country select hone se pehle disabled rahega
            className="p-4 border-2"
        >
                    <option value="">Select a city</option>
                    {countriesData[selectedCountry]?.map((city) => (
                    <option value={city} key={city}>
                        {city}
                    </option>
                    ))}
        </select>
        )}
    </div>
  );
};

export default CascadingSelect;
