import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./ArtPage.css";

export const ArtPage = () => {
  const { objectId } = useParams();
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { isLoading, fetchError, apiData } = useFetch(
    `https://www.rijksmuseum.nl/api/en/collection/${objectId}?key=${APIKEY}`
  );

  apiData && console.log(apiData.artObject);

  return (
    <>
      {isLoading ? (
        <h1>Loading artwork...</h1>
      ) : fetchError ? (
        <div className="fetch_error">
          <p>Oops, something went wrong</p>
          <p>{fetchError.message}</p>
        </div>
      ) : (
        apiData && (
          <div className="art_page_container">
            <h1>{apiData.artObject.title}</h1>
            <img
              src={apiData.artObject.webImage.url}
              alt={apiData.artObject.title}
            />
            <p>{apiData.artObject.label.description}</p>
          </div>
        )
      )}
    </>
  );
};
