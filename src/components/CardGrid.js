import CountryCard from "./CountryCard";
import './CardGrid.css';

import { useState } from 'react';

function CardGrid(props) {

    const data = props.data;
    const filter = props.filter;

    return(
        <div>
            <div>
                <form action='/'>
                    <input className='SearchBar' type='text' id='country' name='country' placeholder='Search for a country...'></input>
                </form>
            </div>
            <div className='CountryCards'>
            {data.slice(0,filter).map((country) => {
            console.log(country.capital);
            return(
                <CountryCard img={country.flags.png} countryName={country.name.common} population={country.population} region={country.region} capital="None" />
            );
            })
            }
            </div>
        </div>
    );
}

export default CardGrid;