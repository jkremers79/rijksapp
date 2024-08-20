import "./GalleryCard.css";
import { Link } from "react-router-dom";

export const GalleryCard = ({ artObject }) => {
  return (
    <Link to={`./art/${artObject.objectNumber}`}>
      <div key={artObject.objectNumber} className="art_card">
        <div className="header_container">
          <h1>{artObject.title}</h1>
        </div>
        <img src={artObject.headerImage.url} alt={artObject.title} />
      </div>
    </Link>
  );
};
