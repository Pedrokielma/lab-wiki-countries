import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json';

import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>


      <Routes>
      <Route path="/:id" element={ <CountryDetails countries={countriesData} /> } />
      <Route path="/" element={ <CountriesList countries={countriesData} /> } />
      
      </Routes>

    </div>
  );
}

export default App;
