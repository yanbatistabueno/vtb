import Link from "next/link";
import "./SoftwareCard.css";
import Slugify from "@/lib/slugify";
export default function SoftwareCard(props) {
  function returnToTop() {
    window.scrollTo({ top: 0 });
  }
  console.log(props.onClick);
  return (
    <div style={props.style} className="software-card">
      <h3>
        <b>{props.softwareNome}</b>
      </h3>
      <div className="software-image-container">
        <img
          className="software-image"
          src={`software-images/${Slugify(props.softwareNome)}.png`}
          alt=""
        />
        <img
          className="software-image additional"
          src={`software-images/${Slugify(props.softwareNome)}-2.png`}
          alt=""
        />
        <img
          className="software-image additional2"
          src={`software-images/${Slugify(props.softwareNome)}-3.png`}
          alt=""
        />
      </div>
      <p className="software-desc">{props.softwareDesc}</p>
      {props.softwareAnchor && (
        <div className="software-tag">
          <p>Tipo:</p>

          <button onClick={props.onClick}>
            <span>{props.softwareAnchor}</span>
          </button>
        </div>
      )}

      <Link
        onClick={returnToTop}
        className="anchor-software"
        href={`/softwares/${Slugify(props.softwareNome)}`}
      >
        Saiba Mais
      </Link>
    </div>
  );
}
