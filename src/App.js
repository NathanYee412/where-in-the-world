import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
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
      <CardGrid data={data} />
      
    </div>
  );
}

export default App;
