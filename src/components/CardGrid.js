import CountryCard from "./CountryCard";
import './CardGrid.css';

import { useState } from 'react';


function CardGrid(props) {

    const data = props.data;
    const [searchTerm, setSearchTerm] = useState('');
    
    return(
        <div>
            <div>
                <form>
                    <input className='SearchBar' value={searchTerm} onInput={e => setSearchTerm(e.target.value)} type='text' id='country' name='country' placeholder='Search for a country...'></input>
                </form>
            </div>
            <div className='CountryCards'>
            {
            data.map((country) => { 
                if(searchTerm === '') {
                    return(
                        <CountryCard key={country.cca2} img={country.flags.png} countryName={country.name.common} population={country.population} region={country.region} capital="None" />
                    );  
                }
                if(country.name.common === searchTerm) {
                    return(
                        <CountryCard key={country.cca2} img={country.flags.png} countryName={country.name.common} population={country.population} region={country.region} capital="None" />
                    );
                }

                return(<div />);

            })
            }
            </div>
        </div>
    );
}

export default CardGrid;


// .slice(0,amt)