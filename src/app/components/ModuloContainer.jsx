"use client";
import "./ModuloContainer.css";
import { useState } from "react";
import Carousel from "@/app/components/Carousel";
export default function ModuloContainer(props) {
  let [currentModulo, setCurrentModulo] = useState(0);
  function changeModulo(modulo) {
    setCurrentModulo(modulo.target.value);
  }
  const slides = [
    `/software-images/modulos/${props.modulos[currentModulo].nome}/${props.modulos[currentModulo].nome}_img-1.png`,
    `/software-images/modulos/${props.modulos[currentModulo].nome}/${props.modulos[currentModulo].nome}_img-2.png`,
    `/software-images/modulos/${props.modulos[currentModulo].nome}/${props.modulos[currentModulo].nome}_img-3.png`,
    `/software-images/modulos/${props.modulos[currentModulo].nome}/${props.modulos[currentModulo].nome}_img-4.png`,
  ];
  return (
    <div className="modulo-container">
      <h1>Módulos que acompanham o Sistema:</h1>
      <div className="select-container">
        <select onChange={(e) => changeModulo(e)}>
          {props.modulos.map((modulo, index) => {
            return <option value={index}>{modulo.nome}</option>;
          })}
        </select>
      </div>
      {props.modulos[currentModulo].recursos && (
        <div className="recursos">
          <p>
            <span>{props.modulos[currentModulo].subTitulo}</span>
          </p>
          <p>{props.modulos[currentModulo].desc}</p>
          {props.modulos[currentModulo].comentario && (
            <p className="comentario">
              <span>{props.modulos[currentModulo].comentario}</span>
            </p>
          )}
          <h2>
            <span>Recursos:</span>
          </h2>
          {props.modulos[currentModulo].recursos.map((recurso) => {
            return (
              <div>
                <h3>
                  <span>{recurso.recursoNome}</span>
                </h3>
                <ul className="recurso-list">
                  {recurso.recursoLista &&
                    recurso.recursoLista.map((e) => {
                      return <li>{e}</li>;
                    })}
                </ul>
              </div>
            );
          })}
          <Carousel type="snapshot" Slide={slides} />
        </div>
      )}
    </div>
  );
}
