import globe from "../images/icons/globe.svg";
export default function Header() {
  return (
    <header>
      <img src={globe} alt="globe" />
      <h1>my travel journal.</h1>
    </header>
  );
}
