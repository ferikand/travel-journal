import data from "../data";
import Jorney from "./Journey";
export default function Journeys() {
  const information = data.map((el) => <Jorney key={el.title} {...el} />);
  // console.log(information);
  return (
    <div className="wrapper">
      <main>{information}</main>
    </div>
  );
}
