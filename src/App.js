import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountryCard from './components/CountryCard';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      const data = await response;

      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Navbar />
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

export default App;
