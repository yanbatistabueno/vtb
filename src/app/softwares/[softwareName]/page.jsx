import Slugify from "@/lib/slugify";
import softwares from "@/lib/softwares";
import "./SelectedSoftware.css";
import Link from "next/link";
import Carousel from "@/app/components/Carousel";
import ModuloContainer from "@/app/components/ModuloContainer";
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
  const slides = [
    `/software-images/${Slugify(software[0].nome)}.png`,
    `/software-images/${Slugify(software[0].nome)}-2.png`,
    `/software-images/${Slugify(software[0].nome)}-3.png`,
    `/software-images/${Slugify(software[0].nome)}-4.png`,
    `/software-images/${Slugify(software[0].nome)}-5.png`,
    `/software-images/${Slugify(software[0].nome)}-6.png`,
  ];
  let moduleSlides = [];
  if (software[0].modulos) {
    moduleSlides = software[0].modulos.map((modulo) => {
      return modulo;
    });
  }

  return (
    <main className="selected-software">
      <div className="div-container">
        <div>
          <h1 className="software-name">
            Software: <span>{software[0].nome}</span>
          </h1>
          <div className="software-info-container">
            <p dangerouslySetInnerHTML={{ __html: software[0].desc }}></p>
            {software[0].desc2.map((desc) => {
              return <p dangerouslySetInnerHTML={{ __html: desc }}></p>;
            })}

            {/* {software[0].modulos.recursos && (
              <div>
                <h2>
                  <span>Recursos: </span>
                </h2>
                {software[0].modulos.recursos.map((recurso) => {
                  return (
                    <li dangerouslySetInnerHTML={{ __html: recurso }}></li>
                  );
                })}
              </div>
            )} */}
          </div>
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
      </div>
      {/* {software[0].modulos && (
        <div>
          <p>
            <span>
              <b>Módulos que acompanham o Sistema:</b>
            </span>
          </p>
          <ul>
            {software[0].modulos.map((element) => {
              return (
                <li key={element.nome}>
                  {
                    <>
                      <div>
                        <Link href={`/softwares/${Slugify(element.nome)}`}>
                          <b>{element.nome}</b>
                        </Link>
                        : {element.desc}
                      </div>
                      <span>Recursos:</span>
                      <ul>
                        {element.recursos &&
                          element.recursos.map((recurso) => {
                            return <li>{recurso}</li>;
                          })}
                      </ul>
                    </>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      )} */}
      {software[0].modulos && (
        // <div className="modulo">
        //   <Carousel Slide={moduleSlides} />
        // </div>
        // <select>
        //   {moduleSlides.map((modulo) => {
        //     return <ModuloContainer nome={modulo.nome} />;
        //   })}
        // </select>
        <ModuloContainer modulos={moduleSlides} />
      )}
      <div className="snapshot-container">
        <Carousel type="snapshot" Slide={slides} />
      </div>
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
