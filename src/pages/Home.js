import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import CardGrid from "../components/CardGrid";

function Home() {

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


    return(
        <div>
            <Navbar />
            <CardGrid data={data} />
        </div>
        
    );
}

export default Home;