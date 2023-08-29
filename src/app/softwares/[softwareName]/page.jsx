import Slugify from "@/lib/slugify";
import softwares from "@/lib/softwares";
import "./SelectedSoftware.css";
import Link from "next/link";
export default async function SoftwareName({ params }) {
  const software = await getSelectedSoftware({ params });
  if (software == "") {
    return (
      <main className="error-container">
        <h1>Erro 404</h1>
        <h2>
          <span>
            O Software que você digitou não existe ou foi digitado
            incorretamente.
          </span>
        </h2>
        <p>
          Verifique se as credencias estão corretas ou se o Software pesquisado
          realmente existe.
        </p>
        <Link href={"/softwares"}>
          <span>Voltar para página de softwares</span>
        </Link>
      </main>
    );
  }

  return (
    <main className="selected-software">
      <h1>
        Nome do Software: <span>{software[0].nome}</span>
      </h1>
      <div className="software-info-container">
        <p>{software[0].desc}</p>
        {software[0].versão && (
          <p>
            <b>Versão:</b> {software[0].versão}
          </p>
        )}
        {software[0].série && (
          <p>
            <b>Série:</b> {software[0].série}
          </p>
        )}
        {software[0].sistema && (
          <p>
            <b>Sistema:</b> {software[0].sistema}
          </p>
        )}
        {software[0].preview && (
          <p>
            <b>Preview: </b> {software[0].preview}
          </p>
        )}
        {software[0].licença && (
          <p>
            <b>Licença: </b> {software[0].licença}
          </p>
        )}
        {software[0].tipo && (
          <p>
            <b>Tipo de armazenamento: </b>
            {software[0].tipo}
          </p>
        )}
        {software[0].download && (
          <p>
            <b>Tamanho do download: </b> {software[0].download}
          </p>
        )}
        {software[0].modules && (
          <div>
            <p>
              <b>Modulos: </b>
            </p>
            <ul>
              {software[0].modules.map((element) => {
                return <li key={element.nome}>{`${element}`}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="anchor-links">
        <Link
          href={`/softwares-pdfs/${Slugify(software[0].nome)}.pdf`}
          target="_blank"
          className="anchor-button"
        >
          <div className="anchor-container">
            Veja uma apresentação
            <div className="anchor-icon">
              <img src="/apresentation-icon.png" alt="" />
            </div>
          </div>
        </Link>
        <Link
          href={`/contact-us?msg=demo&software=${Slugify(software[0].nome)}`}
          className="anchor-button"
        >
          <div className="anchor-container">
            Solicite uma demonstração
            <div className="anchor-icon">
              <img src="/demo-icon.png" alt="" />
            </div>
          </div>
        </Link>
        <Link
          href={`/contact-us?msg=soli&software=${Slugify(software[0].nome)}`}
          className="anchor-button"
        >
          <div className="anchor-container">
            Solicite o download
            <div className="anchor-icon">
              <img src="/download-icon.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href={"/upgrade"} className="anchor-button">
          <div className="anchor-container">
            Solicite um upgrade
            <div className="anchor-icon">
              <img src="/upgrade-icon.png" alt="" />
            </div>
          </div>
        </Link>
        <Link href={"/software-proposal"} className="anchor-button">
          <div className="anchor-container">
            Proposta de software
            <div className="anchor-icon">
              <img src="/two-arrows-icon.png" alt="" />
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="bottom-container">
        <div className="images-container">
          <div className="software-images">
            <img
              src={`/software-images/${Slugify(software[0].nome)}.png`}
              alt=""
            />
            <img
              src={`/software-images/${Slugify(software[0].nome)}-2.png`}
              alt=""
            />
            <img
              src={`/software-images/${Slugify(software[0].nome)}-3.png`}
              alt=""
            />
          </div>
        </div>
      </div> */}
    </main>
  );
}

export async function getSelectedSoftware({ params }) {
  const selectedSoftware = softwares.filter(
    (software) => Slugify(software.nome) == params.softwareName
  );
  return selectedSoftware;
}

export async function generateStaticParams() {
  return softwares.map((software) => ({
    softwareName: Slugify(software.nome),
  }));
}

export async function generateMetadata({ params }) {
  const softwares = await getSelectedSoftware({ params });
  if (softwares == "") {
    return {
      title: "Software inextistente",
    };
  }
  return {
    title: softwares[0].nome,
  };
}
