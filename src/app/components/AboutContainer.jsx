import AboutCard from "./AboutCard";

function Container() {
  return (
    <div className="about-container">
      <h1>Por que contratar a VTB?</h1>
      <AboutCard
        h2Text="Somos o destino único para atender todas as necessidades da sua
          empresa em serviços de tecnologia e desenvolvimento."
        pText="Com mais de 40 anos de experiência em desenvolvimento e consultoria de
        software, atendemos desde startups até empresas listadas na bolsa de
        valores. Nossa diversidade de habilidades e metodologia ajudam você a
        alcançar seus objetivos, independentemente da fase do seu negócio."
        side="right"
      />
      <AboutCard
        h2Text="Pioneira em CEP: Treinamento, Implantação e Desenvolvimento de Softwares de Qualidade"
        pText="É pioneira no treinamento e implantação do CEP - Controle Estatístico do Processo. Tem registro no SINMETRO / INMETRO sob número 825/91, como entidade integrante do Sistema Nacional de Metrologia, Normalização e Qualidade Industrial.
        Desenvolve e mantém contínuo aperfeiçoamento nos Softwares de CEP, MSA, FMEA, GESTÃO DA QUALIDADE, HACCP, CALIBRAÇÃO DE INSTRUMENTOS e CONFIABILIDADE."
        side="left"
      />
    </div>
  );
}

export default Container;
