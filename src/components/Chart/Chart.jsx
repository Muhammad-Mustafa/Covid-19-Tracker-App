import React, { useState, useEffect } from "react";
import {getDailyData} from './../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {

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

  const barChart = (
    confirmed ? 
    (<Bar
    data={{
      labels: ['Infected', 'Recovered', 'Deaths'],
      datasets:[{
        label:'People',
        backgroundColor:[
          'rgba(0,0,255,0.5)',
          'rgba(0,255,0,0.5)',
          'rgba(255,0,0,0.5)',
        ],
        data:[confirmed.value, recovered.value, deaths.value],
      }]
    }}
    options={{
      legend: {display: false},
      title: {display: true, title: `Current state in ${country},`},
    }}  
    />)
    : null
  );

  return(
    <div className={styles.container}>
      {country ? barChart : Chart }
    </div>
  );
};

export default Chart;
