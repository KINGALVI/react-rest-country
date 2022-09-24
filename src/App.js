import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <RestCountry></RestCountry>
      <Country></Country>
    </div>
  );
}

function RestCountry() {
  const [country, SetCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => SetCountries(data))
  }, [])
  return (
    <div>
      <h1>{country.length}</h1>
      {
        country.map(country => <Countrys name={country.name.common} population={country.population}></Countrys>)
      }
    </div>
  )
}

function Countrys(props) {
  return (
    <div>
      <h1>Country Name : {props.name}</h1>
      <h3>Population : {props.population}</h3>
    </div>
  )
}

export default App;
