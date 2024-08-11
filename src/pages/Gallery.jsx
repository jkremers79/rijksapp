import { GalleryCard } from "../components/GalleryCard";
import { useFetch } from "../hooks/useFetch";
import "./Gallery.css";

export const Gallery = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { apiData, serverError, isLoading } = useFetch(
    `https://www.rijksmuseum.nl/api/en/collection?key=${APIKEY}&involvedMaker=Rembrandt+van+Rijn`
  );

  console.log(apiData);

  return (
    <>
      <h1>Rijks Gallery</h1>
      {isLoading ? (
        <h1>Loading the data...</h1>
      ) : serverError ? (
        <>
          <p>Oops, something went wrong</p>
          <p>{serverError.message}</p>
        </>
      ) : (
        apiData.artObjects.map((artObject) => (
          <GalleryCard key={artObject.id} artObject={artObject} />
        ))
      )}
    </>
  );
};
