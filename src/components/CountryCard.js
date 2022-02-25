import './CountryCard.css';

function CountryCard(props) {

    return(
        <div className='Card'>
            <img className='Flag' src={props.img} alt={props.alt} />
            <div className='Info'>
                <h1 className='CountryName'>{props.countryName}</h1>
                <p><span className='Stats'>Population:</span> {props.population}</p>
                <p><span className='Stats'>Region:</span> {props.region}</p>
                <p><span className='Stats'>Capital:</span> {props.capital}</p>
            </div>
        </div>
    );
}

export default CountryCard;