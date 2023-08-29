"use client";
import "./SoftwareProposalForm.css";
import { useState } from "react";
import telefoneValidation from "../../lib/telefoneValidation";
const ramosEmpresa = [
  "Agrícola",
  "Alimentícia",
  "Automotiva",
  "Consultoria",
  "Eletro-Eletrônica",
  "Embalagem",
  "Farmacêutica",
  "Farmacêutica",
  "Mecânica",
  "Médica",
  "Metalúrgica",
  "Metrologia",
  "Mineradora",
  "Plástico/Borracha",
  "Química",
  "Serviços",
  "Siderúrgica",
  "Têxtil",
  "Vidraria",
  "Outro",
];
const estados = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MS",
  "MT",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export default function UpgradeForm(props) {
  const [loginState, setLoginState] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    bairro: "",
    cidade: "",
    serial: "",
    ramo: "",
    software: "",
    estado: "",
  });

  const [errorType, setErrorType] = useState({
    error: false,
    errorName: "",
  });
  const [inputErrorName, setInputErrorName] = useState("");
  const Errors = [];

  function handleError() {
    const AllInputs = [...document.querySelectorAll("input")].map((x) => x);
    const AllSelects = [...document.querySelectorAll("select")].map((x) => x);
    AllInputs.map((input) => {
      if (input.value == "") {
        input.classList.add("error");
        setInputErrorName(`${input.id} está vazio`);
        input.placeholder = `O campo ${input.id.toLowerCase()} está vazio`;
        Errors.push("Vazio");
      } else {
        input.classList.remove("error");
        input.placeholder = `Seu ${input.id.toLowerCase()}`;
        Errors.pop;
      }
    });
    if (!telefoneValidation(AllInputs[3].value)) {
      Errors.push("Telefone Inválido");
      AllInputs[3].classList.add("error");
      AllInputs[3].placeholder = `Seu ${AllInputs[3].id.toLowerCase()} está incorreto`;
      setInputErrorName(`Telefone está incorreto`);
      // setLoginState({ ...loginState, telefone: "" });
    } else {
      AllInputs[3].classList.remove("error");
      AllInputs[3].placeholder = `Seu ${AllInputs[3].id.toLowerCase()}`;
      Errors.pop;
    }

    if (!telefoneValidation(AllInputs[4].value)) {
      Errors.push("Celular Inválido");
      AllInputs[4].classList.add("error");
      AllInputs[4].placeholder = `Seu ${AllInputs[4].id.toLowerCase()} está incorreto`;
      setInputErrorName(`Celular está incorreto`);
      // setLoginState({ ...loginState, telefone: "" });
    } else {
      AllInputs[4].classList.remove("error");
      AllInputs[4].placeholder = `Seu ${AllInputs[4].id.toLowerCase()}`;
      Errors.pop;
    }

    AllSelects.map((select) => {
      if (select.value == "") {
        Errors.push("Select vazio");
        select.classList.add("error");
        setInputErrorName(`${select.id} está vazio`);
      } else {
        select.classList.remove("error");
        Errors.pop;
      }
    });

    if (Errors.length <= 0) {
      setInputErrorName("");
      return true;
    }
  }

  function handleChange(event, key) {
    setLoginState({ ...loginState, [key]: event.target.value });
  }

  function submit(e) {
    e.preventDefault();
    handleError();
    console.log(Errors);
    if (handleError()) {
      console.log("sucesso! :)");
    } else {
      console.log("ops");
    }
  }

  return (
    <div className="form-container">
      <h2>
        <span>Preencha o formulário</span>
      </h2>
      <form onSubmit={submit} className="upgrade-form">
        <input
          onChange={(event) => handleChange(event, "nome")}
          placeholder="Nome"
          id="Nome"
        />
        <input
          onChange={(event) => handleChange(event, "empresa")}
          placeholder="Empresa"
          id="Empresa"
        />

        <div>
          <div className="select-info">
            <p>Ramo de atuação:</p>
            <p className="obrigatorio">Campo obrigatório*</p>
          </div>
          <select
            onChange={(event) => handleChange(event, "ramo")}
            name=""
            id="Ramo de Atuação"
          >
            <option value="">Selecione</option>
            {ramosEmpresa.map((ramo) => {
              return <option value={ramo}>{ramo}</option>;
            })}
          </select>
        </div>
        <input
          onChange={(event) => handleChange(event, "email")}
          placeholder="E-mail"
          id="E-mail"
          type="email"
        />
        <div className="dual-inputs">
          <input
            onChange={(event) => handleChange(event, "telefone")}
            placeholder="Telefone"
            id="Telefone"
          />
          <input
            onChange={(event) => handleChange(event, "celular")}
            placeholder="Celular"
            id="Celular"
          />
        </div>
        <input
          onChange={(event) => handleChange(event, "bairro")}
          placeholder="Bairro"
          id="Bairro"
        />
        <input
          onChange={(event) => handleChange(event, "cidade")}
          placeholder="Cidade"
          id="Cidade"
        />
        <div>
          <div className="select-info">
            <p>Estado:</p>
            <p className="obrigatorio">Campo obrigatório*</p>
          </div>
          <select
            name=""
            id="Estado"
            onChange={(event) => handleChange(event, "estado")}
          >
            <option value="">Selecione</option>
            {estados.map((ramo) => {
              return <option value={ramo}>{ramo}</option>;
            })}
          </select>
        </div>
        <div>
          <div className="select-info">
            <p>Software que tenho:</p>
            <p className="obrigatorio">Campo obrigatório*</p>
          </div>
          <select
            name=""
            id="Software"
            onChange={(event) => handleChange(event, "software")}
          >
            <option value="">Selecione</option>
            {props.data.map((data) => {
              return <option value={data.nome}>{data.nome}</option>;
            })}
          </select>
        </div>
        <input
          onChange={(event) => handleChange(event, "serial")}
          placeholder="Serial Number"
          id="Serial Number"
        />
        <button className="send-form">Enviar</button>
      </form>
      {inputErrorName != "" && (
        <p className="upgrade-tag-error">
          Erro ao enviar o formulário: <br /> <span>{inputErrorName}</span>
        </p>
      )}
    </div>
  );
}
