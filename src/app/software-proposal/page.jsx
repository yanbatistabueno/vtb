import Form from "./SoftwareProposalForm";
import softwares from "@/lib/softwares";

export default function SoftwareProposal() {
  return (
    <main className="software-proposal">
      <h1 className="page-title">Proposta de Software</h1>
      <p className="page-desc">
        Para receber os preços dos melhores softwares de Qualidade preencha o
        formulário abaixo.
      </p>
      <Form data={softwares} />
    </main>
  );
}
