"use client";
import "./SoftwareProposalForm.css";
import { useState } from "react";
import telefoneValidation from "../../lib/telefoneValidation";
import Input from "../FormProps/Input";
import Select from "../FormProps/Select";
import mySqlAdjustment from "../FormProps/mySqlAdjustment";
const ramosEmpresa = [
  "Agrícola",
  "Alimentícia",
  "Automotiva",
  "Consultoria",
  "Eletro-Eletrônica",
  "Embalagem",
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

export default function UpgradeForm(props) {
  const [loginState, setLoginState] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    ramo: "",
    software: "",
    area: "",
    licença: "",
    sobrenome: "",
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
      if (input.getAttribute("obrigatorio") == "true" && input.value == "") {
        input.classList.add("error");
        setInputErrorName(`Preencha o campo de ${input.id}`);
        input.placeholder = `${input.id} está vazio`;
        Errors.push("Vazio");
      } else if (
        input.getAttribute("obrigatorio") == "true" &&
        input.value != ""
      ) {
        input.classList.remove("error");
        input.placeholder = `${input.id}`;
        Errors.pop;
      }
    });
    if (
      !telefoneValidation(AllInputs[4].value) &&
      AllInputs[4].value.length > 0
    ) {
      Errors.push("Telefone Inválido");
      AllInputs[4].classList.add("error");
      AllInputs[4].placeholder = `${AllInputs[4].id} está incorreto`;
      setInputErrorName(`Telefone está incorreto`);
    } else if (
      telefoneValidation(AllInputs[4].value) &&
      AllInputs[4].value.length > 0
    ) {
      AllInputs[4].classList.remove("error");
      AllInputs[4].placeholder = `${AllInputs[4].id}`;
      Errors.pop;
    }

    if (
      !telefoneValidation(AllInputs[5].value) &&
      AllInputs[5].value.length > 0
    ) {
      Errors.push("Celular Inválido");
      AllInputs[5].classList.add("error");
      AllInputs[5].placeholder = `${AllInputs[5].id} está incorreto`;
      setInputErrorName(`Celular está incorreto`);
    } else {
      AllInputs[5].classList.remove("error");
      AllInputs[5].placeholder = `${AllInputs[5].id}`;
      Errors.pop;
    }

    AllSelects.map((select) => {
      if (
        select.getAttribute("obrigatorio") == "true" &&
        select.value.length == 0
      ) {
        Errors.push("Select vazio");
        select.classList.add("error");
        setInputErrorName(`Preencha o campo de ${select.id}`);
      } else if (
        select.getAttribute("obrigatorio") == "true" &&
        select.value.length > 0
      ) {
        select.classList.remove("error");
        Errors.pop;
      }
    });

    mySqlAdjustment(AllInputs[0], 100, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[1], 50, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[2], 100, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[3], 40, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[4], 20, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[5], 20, Errors, setInputErrorName);

    if (Errors.length <= 0) {
      setInputErrorName("");
      return true;
    }
  }

  function handleChange(event, key) {
    setLoginState({ ...loginState, [key]: event.target.value });
  }

  function submit(e) {
    handleError();
    if (!handleError()) {
      e.preventDefault();
    }
  }
  return (
    <div className="form-container">
      <h2>
        <span>Preencha o formulário</span>
      </h2>
      <form
        onSubmit={submit}
        method="POST"
        action="../php/software-proposal.php"
        className="proposal-form"
      >
        <Input
          nome="Nome"
          onChange={(event) => handleChange(event, "nome")}
          obrigatorio
          propsValue={loginState.nome}
        />
        <Input
          nome="Empresa"
          onChange={(event) => handleChange(event, "empresa")}
          obrigatorio
          propsValue={loginState.empresa}
        />
        <Select
          arrayOptions={ramosEmpresa.map((ramo) => {
            return ramo;
          })}
          nome="Ramo de Atuação"
          altName="ramo"
          onChange={(event) => handleChange(event, "ramo")}
        />
        <Input
          nome="Área em que trabalha"
          altName="area"
          onChange={(event) => handleChange(event, "area")}
          propsValue={loginState.area}
        />
        <Input
          nome="E-mail"
          altName="email"
          onChange={(event) => handleChange(event, "email")}
          propsValue={loginState.email}
          obrigatorio
        />

        <div className="dual-inputs">
          <Input
            nome="Telefone"
            onChange={(event) => handleChange(event, "telefone")}
            propsValue={loginState.telefone}
            obrigatorio
          />
          <Input
            nome="Celular"
            onChange={(event) => handleChange(event, "celular")}
            propsValue={loginState.celular}
          />
        </div>
        <Select
          arrayOptions={props.data.map((software) => {
            return software.nome;
          })}
          nome="Software"
          altName="software"
          onChange={(event) => handleChange(event, "software")}
          obrigatorio
        />
        <Select
          arrayOptions={[
            "1",
            "2",
            "3",
            "4",
            "5 a 10",
            "11 a 20",
            "21 a 50",
            "50 a 100",
            "Ilimitada",
          ]}
          nome="Número de Licenças"
          altName="licenca"
          onChange={(event) => handleChange(event, "licenca")}
          obrigatorio
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
