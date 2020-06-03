import React, { Component } from "react";

    //  Insted of doing these type of Imports From the component 
    //  Make a index.html file inside components folder then in 
    //  That folder import all the components and then import in a new way

// import Cards from './components/Cards/Cards';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fatchData } from './api'

class App extends Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const data = await fatchData();

    this.setState({
      data: data,
    })
  }
  render() {

    const {data} = this.state;

    return (
      <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker />
          <Chart />
      </div>
    );
  }
}

export default App;
