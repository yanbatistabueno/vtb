import Data from "@/lib/courses";
import Form from "./Form";
export default function ConsultoryProposal() {
  return (
    <main>
      <h1 className="page-title">Proposta de Consultoria</h1>
      <p className="page-desc">
        Para receber uma Proposta de Consultoria , favor preencher a tabela
        abaixo.
      </p>
      <Form data={Data} />
    </main>
  );
}
