import Data from "@/lib/courses";
import Form from "./Form";
export default function ConsultoryProposal() {
  return (
    <main>
      <h1>Proposta de Consultoria</h1>
      <Form data={Data} />
    </main>
  );
}
