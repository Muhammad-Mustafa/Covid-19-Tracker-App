import React, { Component } from "react";

    //  Insted of doing these type of Imports From the component 
    //  Make a index.html file inside components folder then in 
    //  That folder import all the components and then import in a new way

// import Cards from './components/Cards/Cards';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fatchData } from './api'

import coronaImage from './images/image.png'

class App extends Component {

  state = {
    data: {},
    country: "",
  }

  async componentDidMount(){
    const data = await fatchData();

    this.setState({
      data: data,
    })
  }

  handelCountryChange = async (country) => {
    
    const data = await fatchData(country);
    this.setState({ data: data, country: country});

  }
  render() {

    const {data, country } = this.state;

    return (
      <div className={styles.container}>
          <img ClassName={styles.image} src={coronaImage} alt="COVID-19" /> 
          <Cards data={data} />
          <CountryPicker handelCountryChange={ this.handelCountryChange } />
          <Chart data={ data } country={ country } />
      </div>
    );
  }
}

export default App;
