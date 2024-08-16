import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./ArtPage.css";

export const ArtPage = () => {
  const { objectId } = useParams();
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { isLoading, fetchError, apiData } = useFetch(
    `https://www.rijksmuseum.nl/api/en/collection/${objectId}?key=${APIKEY}`
  );

  return (
    <>
      {isLoading ? (
        <h1>Loading artwork...</h1>
      ) : fetchError ? (
        <>
          <p>Oops, something went wrong</p>
          <p>{fetchError.message}</p>
        </>
      ) : (
        apiData && console.log(apiData.artObject)
      )}
    </>
  );
};
