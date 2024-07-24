import React, { createContext, useState, useEffect } from "react";
import fetchData from "../Request/Request";

export const MyDataContext = createContext();

const MyDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "https://kitsu.io/api/edge/anime";

  const fetchDataFromApi = async () => {
    try {
      const result = await fetchData(apiUrl);
      setData(result);
      console.log("Data fetched successfully");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [apiUrl]);

  return (
    <MyDataContext.Provider value={{ data, loading, error, fetchData: fetchDataFromApi }}>
      {children}
    </MyDataContext.Provider>
  );
};

export default MyDataProvider;
