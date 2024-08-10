import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Gallery.css";

export const Gallery = () => {
  const APIKEY = import.meta.env.VITE_API_KEY;

  const { apiData, serverError, isLoading } = useFetch(
    `https://www.rijksmuseum.nl/api/en/collection?key=${APIKEY}&involvedMaker=Rembrandt+van+Rijn`
  );

  console.log(apiData);
  serverError && console.log(serverError.message);

  return (
    <>
      <h1>Rijks Gallery</h1>
      {isLoading ? (
        <h1>Loading the data...</h1>
      ) : (
        apiData &&
        apiData.artObjects.map((artObject) => {
          return (
            <div key={artObject.objectNumber}>
              <p>{artObject.title}</p>
              <img src={artObject.webImage.url} width="500px" />
            </div>
          );
        })
      )}
    </>
  );
};
