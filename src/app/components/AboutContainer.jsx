import "./AboutCard.css";
import Link from "next/link";
function Container() {
  return (
    <div className="about-container">
      <h1>Cursos / Treinamentos</h1>
      <div className="about-card">
        <div className="about-text-card">
          <h2>
            Mais de 100.000 profissionais treinados em pequenas, médias e
            grandes empresas.
          </h2>
          <p>
            Treinamentos voltados para as áreas da Qualidade, Engenheira,
            Manufatura, Gestão e Operacional. Adequação dos treinamentos à
            necessidade do cliente com customização do material didático e carga
            horária. Treinamentos ministrados na modalidade In Company e
            Online/EAD. Veja
            <Link href={"/courses"}>
              <b> aqui </b>
            </Link>
            no catálogo completo de cursos
          </p>
        </div>
      </div>
      <h1>Por que a VTB?</h1>
      <div className="about-card">
        <div className="about-text-card">
          <h2>
            Pioneira em CEP: Treinamento, Implantação e Desenvolvimento de
            Softwares de Qualidade.
          </h2>
          <p>
            É pioneira no treinamento e implantação do CEP - Controle
            Estatístico do Processo. Tem registro no SINMETRO / INMETRO sob
            número 825/91, como entidade integrante do Sistema Nacional de
            Metrologia, Normalização e Qualidade Industrial. Desenvolve e mantém
            contínuo aperfeiçoamento nos Softwares de CEP, MSA, FMEA, GESTÃO DA
            QUALIDADE, HACCP, CALIBRAÇÃO DE INSTRUMENTOS e CONFIABILIDADE.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Container;
