import axios from "axios";

const url = "https://covid19.mathdro.id/api";

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
