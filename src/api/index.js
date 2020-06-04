import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// the data of this function will be for the Cards Component 

export const fatchData = async () => {
  try {
    //In this Api call in responce we get data.comfired, data.recovered etc
    //and then returinng all the data in the return statmenet

    const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
      console.log(err.message)
  }
};

// The data from this function will be for the Chart Component

export const getDailyData = async () => {
  try {

    const { data } = await axios.get(`${url}/daily`);

    console.log( data );
    
  } catch (err) {
    console.log(err.message);  
  }
};
