import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// the data of this function will be for the Cards Component 

export const fatchData = async (country) => {
  let modifiedURL = url;

  if(country){
    modifiedURL = `${url}/countries/${country}`;
  }
  try {
    //In this Api call in responce we get data.comfired, data.recovered etc
    //and then returinng all the data in the return statmenet

    const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(modifiedURL);
    console.log({ confirmed, recovered, deaths, lastUpdate });
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
      console.log(err)
  }
};

// The data from this function will be for the Chart Component

export const getDailyData = async () => {
  try {

    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({

      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,      
    
    })
    );

    return modifiedData;
  } catch (err) {
    console.log(err);  
  }
};

//The data from this function is for the countryPicker Conponenet 

export const fetchCountries = async () => {
  try {

    const {data :{ countries }} = await axios.get(`${url}/countries`);

    return(countries.map((country) => country.name))

  } catch (error) {
    console.log(error);
  }
};
