import "./HeroCard.css";
import Link from "next/link";
function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-text">
        <h1>
          Construindo um futuro com <span>treinamentos especializados</span>,
          <span> softwares</span> e <span>tecnologia de qualidade!</span>
        </h1>
        <h2>
          Nossos softwares facilitam a implementação e gerenciamento das
          principais ferramentas da qualidade. Softwares com interface
          simplificada e de fácil manuseio podendo ser utilizados diretamente em
          chão de fábrica ou em laboratórios.
        </h2>
        <h1>
          Clique
          <Link href={"/softwares"}>
            <b> aqui </b>
          </Link>
          para ver nosso cátalogo completo.
        </h1>
      </div>
    </div>
  );
}

export default HeroCard;
