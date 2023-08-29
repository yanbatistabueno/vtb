import Form from "./SoftwareProposalForm";
import softwares from "@/lib/softwares";
export default function SoftwareProposal() {
  return (
    <main>
      <h1 className="page-title">Proposta de Software</h1>
      <p>
        Para receber os preços dos melhores softwares de Qualidade preencha o
        formulário abaixo.
      </p>
      <Form data={softwares} />
    </main>
  );
}
