import "./GalleryCard.css";
import { Link } from "react-router-dom";

export const GalleryCard = ({ artObject }) => {
  return (
    <div key={artObject.objectNumber}>
      <p>{artObject.title}</p>
      <img src={artObject.webImage.url} width="300px" />
    </div>
  );
};
