import React from 'react';
import './Contries.css'

const Countries = (props) => {
  
    const {name, capital, flag, population, region, subregion} = props.country ; 
    const handleAddCountry = props.handleAddCountry;
     
    return (
        <div className='countryStyle'>
            <img className='flagStyle' src={flag} alt=""/>
            <h4> {name} - Capital : {capital}</h4>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Sub region : {subregion}</p>
            <button onClick={()=>handleAddCountry(props.country)}>Country Added </button>
            
           
        </div>
    );
};

export default Countries;