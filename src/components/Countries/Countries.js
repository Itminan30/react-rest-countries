import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    } , [])
    return (
        <div>
            <h1>Hello From Other Countries</h1>
            <h2>Number of Countries: {countries.length}</h2>
            <Country prop={countries} countries={countries}></Country>
        </div>
    );
};

export default Countries;