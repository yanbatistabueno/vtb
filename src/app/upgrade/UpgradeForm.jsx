"use client";
import "./UpgradeForm.css";
import React, { useState } from "react";

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

    if (!telefoneValidation(AllInputs[3].value)) {
      Errors.push("Telefone Inválido");
      AllInputs[3].classList.add("error");
      AllInputs[3].placeholder = `${AllInputs[3].id} está incorreto`;
      setInputErrorName(`Telefone está incorreto`);
      // setLoginState({ ...loginState, telefone: "" });
    } else {
      AllInputs[3].classList.remove("error");
      AllInputs[3].placeholder = `${AllInputs[3].id}`;
      Errors.pop;
    }

    if (
      !telefoneValidation(AllInputs[4].value) &&
      AllInputs[4].value.length > 0
    ) {
      Errors.push("Celular Inválido");
      AllInputs[4].classList.add("error");
      AllInputs[4].placeholder = `${AllInputs[4].id} está incorreto`;
      setInputErrorName(`Celular está incorreto`);
      // setLoginState({ ...loginState, telefone: "" });
    } else if (
      (telefoneValidation(AllInputs[4].value) &&
        AllInputs[4].value.length > 0) ||
      AllInputs[4].value.length == 0
    ) {
      AllInputs[4].classList.remove("error");
      AllInputs[4].placeholder = `${AllInputs[4].id}`;
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
    mySqlAdjustment(AllInputs[2], 40, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[3], 20, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[4], 20, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[5], 100, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[6], 100, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[7], 50, Errors, setInputErrorName);

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
    console.log(Errors);
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
        action="../php/upgrade-software.php"
        className="upgrade-form"
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
        <Select
          nome="Ramo de Atuação"
          altName="ramo"
          onChange={(event) => handleChange(event, "ramo")}
          arrayOptions={ramosEmpresa.map((ramo) => {
            return ramo;
          })}
        />
        <Input
          nome="E-mail"
          altName="email"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
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
        <Input
          nome="Bairro"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          obrigatorio
          propsValue={loginState.bairro}
        />
        <Input
          nome="Cidade"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          obrigatorio
          propsValue={loginState.cidade}
        />

        <Select
          nome="Software que tenho"
          altName="software"
          onChange={(event) => handleChange(event, "software")}
          arrayOptions={props.data.map((software) => {
            return software.nome;
          })}
          obrigatorio
        />

        <Input
          nome="Serial Number"
          altName="serial"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          propsValue={loginState.serial}
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
