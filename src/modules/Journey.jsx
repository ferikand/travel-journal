import locationIcon from "../images/icons/location-icon.svg";
export default function Jorney(props) {
  console.log(props);
  return (
    <div className="container">
      <img src={props.imageUrl} alt="" />
      <div className="figinformation">
        <div className="location">
          <img src={locationIcon} alt="" className="location-icon" />
          <p className="country">{props.location}</p>
          <a href={props.googleMapsUrl} className="mapLink">
            View on Google Maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <div className="dates">
          {props.startDate} - {props.endDate}
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}
