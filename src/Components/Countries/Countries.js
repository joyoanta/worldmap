import React from 'react';
import './Contries.css'

const Countries = (props) => {
  
    const {name, capital, flag} = props.country ; 
     
    return (
        <div className='countryStyle'>
            <img className='flagStyle' src={flag} alt=""/>
            <h4> {name} - {capital}</h4>
            
           
        </div>
    );
};

export default Countries;