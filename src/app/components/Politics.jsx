import "./Politics.css";

export default function Politics() {
  return (
    <div className="politics-container">
      <h1><span>Política da Qualidade</span></h1>
      <div className="list-container">
      <ul className="politics-list-container">
        <h3>
          A VTB através da competência, ética e profissionalismo da sua Direção
          e dos seus colaboradores objetiva:
        </h3>
        
        <li>
          Fornecer produtos e serviços que atendam às diferentes expectativas e
          necessidades de seus Clientes e partes interessadas;
        </li>
        <li>
          Aumentar a segurança, qualidade e rapidez nas informações demandadas
          em suas atividades;
        </li>
        <li>
          Melhorar continuamente a eficácia do seu Sistema de Gestão da
          Qualidade e dos resultados do negócio.
        </li>
      </ul>
      <div className="list-logo">
        <img  src="/product-quality.png" />
      </div>
      
      </div>
      
    </div>
  );
}
