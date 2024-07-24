import axios from "axios";

const fetchData = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;

const apiUrl = "https://kitsu.io/api/edge/anime";
fetchData(apiUrl).then(data => console.log(data)).catch(error => console.error(error));
