import ListComponent from "./ListComponent";
import "./Consultory.css";
import Link from "next/link";
export default function Consultory() {
  return (
    <main>
      <h1>Consultoria</h1>
      <div className="unordered-list">
        <p>
          Com Engenheiros Consultores especializados em gestão de risco,
          processos de manufatura e sistemas de gestão a VTB Consultoria elabora
          diagnósticos e propõe soluções eficientes e eficazes para seus
          problemas ou requisitos normativos.
        </p>
        <p>
          A Metodologia VTB para desenvolvimento de Projetos de Consultoria se
          baseia em:
        </p>
        <ul>
          <li>Inovação Estratégica</li>
          <li>Mudança da cultura organizacional da empresa</li>
          <li>Ciclo PDCA(Plan-Do-Check-Act)</li>
          <li>Pensamento baseado em Riscos e Oportunidades</li>
          <li>Utilização de ferramentas consagradas na administração</li>
          <li>
            Cost Savings - A VTB Consultoria já gerou mais de 600 milhões de
            reais em Savings para seus clientes desde 1983.
          </li>
        </ul>
      </div>
      <div className="anchor-links">
        <Link href={`/consultory-proposal`} className="anchor-button">
          <div className="anchor-container">
            Proposta de Consultoria
            <div className="anchor-icon">
              <img src="/two-arrows-icon.png" alt="" />
            </div>
          </div>
        </Link>
      </div>
      <h1>Áreas de Atuação</h1>
      <ListComponent
        title="Qualidade / Estatística"
        items={[
          "CEP - Controle Estatístico do Processo",
          "FMEA - Análise do Modo e Efeito de Falhas",
          "DOE - Projeto de Experimentos e Taguchi",
        ]}
      />
      <ListComponent
        title="Medição"
        items={[
          "Análise do Sistema de Medição (MSA)",
          "Incerteza de Medição",
          "Comprovação Metrológica",
          "ISO IEC 17025:2017",
        ]}
      />
      <ListComponent
        title="Sistemas de Gestão"
        items={[
          "APQP-PPAP-Automotiva",
          "Desenvolvimento de Fornecedores",
          "ISO/IEC 17025:2017 – Gestão Laboratorial",
          "ISO 14001:2015 - Gestão Ambiental",
          "ISO 9001:2015 - Gestão da Qualidade",
          "IATF 16949:2016 - Qualidade da Qualidade Automotiva",
          "ISO 45001:2018 - Segurança e Saúde Ocupacional",
          "SA 8000:2014 - Gestão da Responsabilidade Social",
          "Sistema de Gestão Integrada",
          "ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018",
          "VDA 6.3:2016 - Automotiva",
        ]}
      />
      <ListComponent
        title="Manufatura / Melhoria Contínua"
        items={[
          "Eliminação de Desperdício em Processos / KAIZEN",
          "JIT / KANBAN",
          "Manufatura Enxuta",
          "Programa 5S's",
          "QFD - Desdobramento da Função Qualidade",
          "STR - Sistema de Troca Rápida",
          "TPM - Manutenção Produtiva Total",
        ]}
      />
      <ListComponent
        title="Projeto"
        items={[
          "DFMEA - Análise do Modo e Efeito de Falhas do Projeto",
          "GD&T - Dimensionamento Geométrico e Tolerância",
          "Planejamento da Confiabilidade do Produto",
          "Projeto para Manufatura (DFM) / Projeto para Montagem (DFA)",
          "EAV - Engenharia e Análise do Valor",
        ]}
      />
      <ListComponent
        title="Alimentos / Medicamentos"
        items={[
          "APPCC /HACCP - Análise de Perigos e Pontos Críticos de Controle",
          "BPF / GMP - Boas Práticas de Fabricação",
          "ISO 22000:2018/FSSC 22000 - Requisitos do Sistema de Gestão de Segurança de Alimentos",
        ]}
      />
      <ListComponent
        title="Gestão Estratégica"
        items={[
          "ISO 10002:2005 - Gestão da Satisfação do Cliente",
          "Gestão de Riscos e Compliance",
          "Liderança, Gerenciamento e Tomada de Decisão",
        ]}
      />
      <h1>Capacitação de Fornecedores</h1>
      <div className="capacitação">
        <h3>
          <span>Projeto de CUSTO ZERO para empresa contratante!</span>
        </h3>
        <ol className="ordered-list">
          <li>
            A empresa contratante define quais requisitos e boas práticas devem
            ser capacitadas junto a seus fornecedores.
          </li>
          <li>
            A VTB assessora os fornecedores em termos de treinamento e
            consultoria visando otimizar a qualidade de seus produtos e
            serviços, bem como, reduzir custos.
          </li>
          <li>
            A VTB realiza Auditoria Interna no fornecedor emitindo uma
            Declaração de Conformidade do Fornecedor (SDOC - Suppliers
            Declaration of Conformity) relativa ao atendimento dos requisitos do
            cliente, em termos de Normas e Documentos de referência utilizados
            na auditoria interna.
          </li>
          <li>
            Esse ciclo será repetido periodicamente nos fornecedores conforme
            solicitação da empresa contratante.
          </li>
        </ol>
      </div>
    </main>
  );
}
