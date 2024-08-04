"use client";

import "./ConsultoryProposal.css";
import React, { useState } from "react";
import Input from "../FormProps/Input";
import Select from "../FormProps/Select";
import telefoneValidation from "../../lib/telefoneValidation";
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

export default function CourseForm(props) {
  const [loginState, setLoginState] = useState({
    nome: "",
    email: "",
    area: "",
    telefone: "",
    empresa: "",
    ramo: "",
    curso1: "",
    curso2: "",
    curso3: "",
    curso4: "",
    curso5: "",
    curso6: "",
    outro: "",
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
        setInputErrorName(`${input.id} está vazio`);
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
      // setLoginState({ ...loginState, telefone: "" });
    } else if (telefoneValidation(AllInputs[4].value)) {
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
      // setLoginState({ ...loginState, telefone: "" });
    } else if (
      (telefoneValidation(AllInputs[5].value) &&
        AllInputs[5].value.length > 0) ||
      AllInputs[5].value.length == 0
    ) {
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
        setInputErrorName(`${select.id} está vazio`);
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
    mySqlAdjustment(AllInputs[6], 100, Errors, setInputErrorName);
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
    if (handleError()) {
      console.log("sucesso! :)");
    } else {
      e.preventDefault();
      console.log("ops");
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
        action="../php/consultory-proposal.php"
        className="consultory-form"
      >
        <Input
          nome="Nome"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          obrigatorio
          propsValue={loginState.nome}
        />
        <Input
          nome="Empresa"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          obrigatorio
          propsValue={loginState.empresa}
        />
        <Input
          nome="Área de Trabalho"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          altName="area"
          propsValue={loginState.area}
        />
        <Select
          nome="Ramo de Atuação"
          arrayOptions={ramosEmpresa.map((ramo) => {
            return ramo;
          })}
          altName="ramo"
          onChange={(event) => handleChange(event, "ramo")}
        />
        <Input
          nome="E-mail"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          altName="email"
          obrigatorio
          propsValue={loginState.email}
        />
        <div className="dual-inputs">
          <Input
            nome="Telefone"
            onChange={(event) =>
              handleChange(
                event,
                event.target.altName ? event.target.altName : event.target.name
              )
            }
            obrigatorio
            propsValue={loginState.telefone}
          />
          <Input
            nome="Celular"
            onChange={(event) =>
              handleChange(
                event,
                event.target.altName ? event.target.altName : event.target.name
              )
            }
            propsValue={loginState.celular}
          />
        </div>
        <ul className="select-list">
          <Select
            nome="1ª opção"
            arrayOptions={props.data.map((data) => {
              return data.nome;
            })}
            altName="1opcao"
            onChange={(event) => handleChange(event, "curso1")}
            obrigatorio
          />
          <Select
            nome="2ª opção"
            arrayOptions={props.data.map((data) => {
              return data.nome;
            })}
            altName="2opcao"
            onChange={(event) => handleChange(event, "curso2")}
          />
          <Select
            nome="3ª opção"
            arrayOptions={props.data.map((data) => {
              return data.nome;
            })}
            altName="3opcao"
            onChange={(event) => handleChange(event, "curso3")}
          />
        </ul>
        <ul className="select-list">
          <Select
            nome="4ª opção"
            arrayOptions={props.data.map((data) => {
              return data.nome;
            })}
            altName="4opcao"
            onChange={(event) => handleChange(event, "curso4")}
          />
          <Select
            nome="5ª opção"
            arrayOptions={props.data.map((data) => {
              return data.nome;
            })}
            altName="5opcao"
            onChange={(event) => handleChange(event, "curso5")}
          />
          <Select
            nome="6ª opção"
            arrayOptions={props.data.map((data) => {
              return data.nome;
            })}
            altName="6opcao"
            onChange={(event) => handleChange(event, "curso6")}
          />
        </ul>
        <Input
          nome="Outro"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          propsValue={loginState.outro}
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
