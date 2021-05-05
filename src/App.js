
import { useState, useEffect } from 'react';
import Countries from './Components/Countries/Countries';
import Cart from './Components/Cart/Cart';


function App() {

   const [countris, setCountries] = useState([]);
   const [cart, setCart] = useState([]);

   
   useEffect(()=>{

      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error=> console.log(error));
      
   }, [])


   const handleAddCountry = (country) => {
      console.log("Country Added");
      const newCart = [...cart, country];
      setCart(newCart);

      

   }

  return (

    
    <div className="">
      <h1 style={{textAlign:"center"}}>Country Loaded : {countris.length}</h1>
      <h2 style={{textAlign:"center"}}>Country Added: {cart.length}</h2>
      <Cart cart={cart} ></Cart>
      <ul>
          {

          countris.map(country => <Countries  handleAddCountry = {handleAddCountry} country={country} key={country.alpha2Code}></Countries>)
          }

      </ul>
    </div>
  );
}

export default App;
