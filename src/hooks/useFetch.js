import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [apiData, setApiData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async function () {
      console.log("Firing useEffect");
      try {
        setIsLoading(true);
        const response = await axios.get(url,
          {
            timeout: 30000
          });
        setApiData(response.data);
      } catch (error) {
        setFetchError(error);
      }
      finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { apiData, isLoading, fetchError };
}
