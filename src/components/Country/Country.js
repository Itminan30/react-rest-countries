import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country-container'>
            {
                props.countries.map(country => <div className='country mt-5' key={country.cca3}>
                    <h1 className='mt-3 mb-3'>{country.name.common}</h1>
                    <img src={country.flags.png} alt="" />
                    <p className='mt-4'><b>Population:</b> {country.population}</p>
                    <p><b>Area:</b> {country.area}</p>
                    <p><b>Region:</b> <a href={country.maps.googleMaps}  >{country.region}</a></p>
                    </div>)
            }
        </div>
    );
};

export default Country;