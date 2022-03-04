import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function CountriesList(props) {
    
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(props.countries);
      }, [props.countries]);

  return (
    <div className="row col-5" >
    {countries.map((countrie)=>{
        return (
            <>
            <Link className="list-group-item list-group-item-action" to={`/${countrie.alpha3Code}`}>{countrie.name.common}</Link>
            </>
            )
    })}

    </div>

    
  )
}

export default CountriesList