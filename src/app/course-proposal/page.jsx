import Form from "./Form";
import Courses from "@/lib/courses";
import "./CourseProposal.css";
export default function CourseProposal() {
  return (
    <main>
      <h1 className="page-title">Proposta de Curso</h1>
      <p className="page-desc">
        Para receber uma Proposta do(s) Curso(s) da VTB, favor preencher a
        tabela abaixo.
      </p>
      <Form data={Courses} />
    </main>
  );
}
