import * as React from "react";
import CountryCard from "./CountryCard";
import './CardGrid.css';
// import { useState } from 'react';
import { useSearchParams } from "react-router-dom"; //Link, Route, Routes, 
// import Home from '../pages/Home';

function CardGrid(props) {

    const data = props.data;
    const [searchParams, setSearchParams] = useSearchParams('');
    // let [countryData, setCountryData] = useState('');
    let country = searchParams.get("user");


    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let newCountry = formData.get("country");
        if (!newCountry) return;
        setSearchParams({ country: newCountry });
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className='SearchBar' defaultValue={country ?? undefined} type='text' name='country' placeholder='Search for a country...'></input>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className='CountryCards'>
            {
            data.map((country) => {
                    return(
                        <CountryCard key={country.cca2} img={country.flags.png} countryName={country.name.common} population={country.population} region={country.region} capital={country.capital} />
                    );  
                })
            }
            </div>
        </div>
    );
}

export default CardGrid;


// .slice(0,amt)