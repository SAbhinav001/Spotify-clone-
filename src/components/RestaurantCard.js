import { CDN_IMG_URL } from "../constant";

const RestrauntCard = ({ name, cuisines , cloudinaryImageId , lastMiletravelString, }) => {
  return (
    <div className="card">
      <img src={CDN_IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <div className="txt-wrp"> <h3>{cuisines}</h3></div>
      <h4>{lastMiletravelString} distance</h4>
    </div>
  );
};

export default RestrauntCard;
