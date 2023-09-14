import Link from "next/link";
import softwares from "@/lib/softwares";
import Form from "./UpgradeForm";
export default function Upgrade() {
  return (
    <main>
      <h1 className="page-title">Solicite Upgrade</h1>
      <p className="page-desc">
        Para adquirir uma versão superior a sua (Ex.: de WinCEP Plus 3.xx para
        WinCEP Plus 5.xx) preencha o formulário abaixo para fazer o requerimento
        da proposta de Upgrade do software. Saiba as versões atuais de cada
        software da VTB.
      </p>
      <p className="page-desc">
        Saiba as{" "}
        <Link href={"/versions"}>
          <span>versões atuais</span>
        </Link>{" "}
        de cada software da VTB.
      </p>
      <Form data={softwares} />
    </main>
  );
}
