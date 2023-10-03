import React from 'react';

const CountrySelect = ({ countries, onSelect }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {countries.map((country, index) => (
                <option key={index} value={country.value}>
                    <img src={country.flag} alt={country.label} width="20" height="15" />
                    {country.label}
                </option>
            ))}
        </select>
    );
};

export default CountrySelect;