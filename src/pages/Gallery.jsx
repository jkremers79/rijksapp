import { GalleryCard } from "../components/GalleryCard";
import { useFetch } from "../hooks/useFetch";
import "./Gallery.css";

export const Gallery = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { apiData, fetchError, isLoading } = useFetch(
    `https://www.rijksmuseum.nl/api/en/collection?key=${APIKEY}&involvedMaker=Rembrandt+van+Rijn&ps=30`
  );

  console.log(apiData);

  return (
    <div className="gallery_wrapper">
      {isLoading ? (
        <h1>Loading the gallery...</h1>
      ) : fetchError ? (
        <div className="fetch_error">
          <p>Oops, something went wrong</p>
          <p>{fetchError.message}</p>
        </div>
      ) : (
        apiData &&
        apiData.artObjects.map((artObject) => (
          <GalleryCard key={artObject.id} artObject={artObject} />
        ))
      )}
    </div>
  );
};
