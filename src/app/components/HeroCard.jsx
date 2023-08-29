import "./HeroCard.css";
import Image from "next/image";
function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-text">
        <h1>
          Construindo um futuro com <span>software</span> e
          <span> tecnologia de qualidade!</span>
        </h1>
        <p>
          Nossa missão é impulsionar seu progresso por meio da tecnologia.
          Agende uma reunião com um de nossos consultores agora mesmo para dar o
          próximo passo.
        </p>
        <div className="hero-buttons">
          <button className="começe-agora">Comece agora</button>
          <button className="como-funciona">Como funciona?</button>
        </div>
      </div>
      <Image
        className="hero-image"
        src="/develop-image.png"
        alt="deveplopment illustrative image"
        width={500}
        height={500}
      />
    </div>
  );
}

export default HeroCard;
