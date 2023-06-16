import { CDN_IMG_URL } from "../constant";

const RestrauntCard = ({ imgKey, name, cuisine, rating }) => {
  return (
    <div className="card">
      <img src={CDN_IMG_URL + imgKey} />
      <h2>{name}</h2>
      <h3>{cuisine.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

export default RestrauntCard;
