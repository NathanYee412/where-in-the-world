import CountryCard from "./CountryCard";
import './CardGrid.css';

function CardGrid(props) {

    const data = props.data;

    return(
        <div className='CountryCards'>
        {data.slice(0,20).map((country) => {
        console.log(country.capital);
          return(
            <CountryCard img={country.flags.png} countryName={country.name.common} population={country.population} region={country.region} capital="None" />
          );
        })
        }
      </div>
    );
}

export default CardGrid;