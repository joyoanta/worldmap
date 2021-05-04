
import { useState, useEffect } from 'react';
import Countries from './Components/Countries/Countries';


function App() {

   const [countris, setCountries] = useState([]);
   useEffect(()=>{

      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error=> console.log(error));
      
   }, [])

  return (

    
    <div className="">
      <h1 style={{textAlign:"center"}}>Country Loaded : {countris.length}</h1>
      <ul>
          {

          countris.map(country => <Countries country={country} key={country.alpha2Code}></Countries>)
          }

      </ul>
    </div>
  );
}

export default App;
