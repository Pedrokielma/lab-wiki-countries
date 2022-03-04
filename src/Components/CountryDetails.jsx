import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function CountryDetails(props) {
    const [countries, setCountries] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setCountries(props.countries);
      }, [props.countries]);

      const foundCountrie = props.countries.find((countrie) => {
        return countrie.name.common === id;
      });
    


  return (
    <div className="col-5">
   { console.log(props.countries.name.common)}
   <h1> {props.countries.name.common} </h1>
   
    </div>
  )
}

export default CountryDetails