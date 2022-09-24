import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <RestCountrys></RestCountrys>
    </div>
  );
}

function RestCountrys() {
  const [countrys , SetCountries]=useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>SetCountries(data))
  },[])
  return (
    <div>
      <h1>{countrys.length}</h1>
      {
        countrys.map(country=><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h1>Country Name : {props.name}</h1>
      <h3>Population : {props.population}</h3>
    </div>
  )
}

export default App;
