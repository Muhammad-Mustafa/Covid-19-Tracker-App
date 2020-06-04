import React, { useState, useEffect } from "react";
import {getDailyData} from './../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {

  const [dailyData, setDailyData] = useState({});

  useEffect(() =>{
    const fetchApi = async () =>{
      setDailyData( await getDailyData());
    }
    fetchApi();
    // console.log({ dailyData });
  });

  const Chart = (
    dailyData[0] ? 
    (<Line
    data = {{
      labels: '',
      datasets: [{}, {}],
    }}
    />)
    :null 

  );

  return(
    <div></div>
  );
};

export default Chart;
