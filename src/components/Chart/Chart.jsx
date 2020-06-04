import React, { useState, useEffect } from "react";
import {getDailyData} from './../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {

  const [dailyData, setDailyData] = useState([]);

  useEffect(() =>{
    const fetchApi = async () =>{
      setDailyData( await getDailyData());
    }
    fetchApi();
  },[]);

  const Chart = (
    dailyData ? 
    (<Line
    data = {{
      labels: dailyData.map(({ date }) => date),
      datasets: [{
        data: dailyData.map(({confirmed}) => confirmed),
        label: 'Infected',
        borderColor: '#3333ff',
        backgroundColor: 'rgba(0,0,255,0.3)',
        fill: true,
      }, {
        data: dailyData.map(({deaths}) => deaths),
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        fill: true,
      }],
    }}
    />)
    :null 

  );

  return(
    <div className={styles.container}>
      {Chart}
    </div>
  );
};

export default Chart;
