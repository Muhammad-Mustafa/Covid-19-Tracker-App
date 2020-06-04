import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from './../../api'

import styles from './CountryPicker.module.css';


const CountryPicker = ({ handelCountryChange }) => {
  
  const [countries, setCountries] = useState([])
  
  useEffect(() =>{
    const getCountries = async () =>{
      setCountries(await fetchCountries());
    }

    getCountries();
  }, [setCountries]);

  return(

    <FormControl style={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {countries.map((country, i) => <option key={i} value={country} >{country}</option> )}
      </NativeSelect>
    </FormControl>
  
  )


};

export default CountryPicker;
