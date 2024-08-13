import { GalleryCard } from "../components/GalleryCard";
import { useFetch } from "../hooks/useFetch";
import "./Gallery.css";

export const Gallery = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { apiData, fetchError, isLoading } = useFetch(
    `https://www.rijksmuseum.nl/api/en/collection?key=${APIKEY}&type=painting&toppieces=true`
  );

  console.log(apiData);

  return (
    <>
      <h1>Rijks Gallery</h1>
      {isLoading ? (
        <h1>Loading the gallery...</h1>
      ) : fetchError ? (
        <>
          <p>Oops, something went wrong</p>
          <p>{fetchError.message}</p>
        </>
      ) : (
        apiData &&
        apiData.artObjects.map((artObject) => (
          <GalleryCard key={artObject.id} artObject={artObject} />
        ))
      )}
    </>
  );
};
