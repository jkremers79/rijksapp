import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async function () {
      try {
        console.log("test");
        const response = await axios.get(url);
        setApiData(response.data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { apiData, isLoading, serverError };
}
