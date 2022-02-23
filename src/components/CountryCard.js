import './CountryCard.css';

function CountryCard(props) {

    return(
        <div className='Card'>
            <img src={props.img} alt={props.alt} />
            <h1>{props.countryName}</h1>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
        </div>
    );
}

export default CountryCard;