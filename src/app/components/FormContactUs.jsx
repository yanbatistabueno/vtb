"use client";
import "./FormContactUs.css";
import { useState } from "react";
import softwares from "@/lib/softwares";
import Slugify from "@/lib/slugify";
import FormError from "../components/FormError";
import telefoneValidation from "../../lib/telefoneValidation";
import { useSearchParams } from "next/navigation";

import Input from "../FormProps/Input";
import Select from "../FormProps/Select";
import mySqlAdjustment from "../FormProps/mySqlAdjustment";
export default function FormContactUs() {
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
  const params = useSearchParams();
  const msgParam = params.get("msg");
  const softwareParam = params.get("software");
  let filtredAssunto = "";
  if (softwareParam) {
    softwares.filter((software) => {
      if (Slugify(software.nome) == Slugify(softwareParam)) {
        if (msgParam) {
          filtredAssunto =
            msgParam == "demo"
              ? `Demonstração do Software: ${software.nome}`
              : msgParam == "soli"
              ? `Solicitação de Download: ${software.nome}`
              : "";
        }
      } else {
        return;
      }
    });
  }

  const [loginState, setLoginState] = useState({
    nome: "",
    email: "",
    assunto: filtredAssunto,
    telefone: "",
    celular: "",
    mensagem: "",
    empresa: "",
    ramo: "",
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
    const textArea = document.querySelector("textarea");

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
      !telefoneValidation(AllInputs[2].value) &&
      AllInputs[2].value.length > 0
    ) {
      Errors.push("Telefone Inválido");
      AllInputs[2].classList.add("error");
      AllInputs[2].placeholder = `${AllInputs[2].id} está incorreto`;
      setInputErrorName(`Telefone está incorreto`);
    } else if (
      telefoneValidation[AllInputs[2].value] &&
      AllInputs[2].value.length > 0
    ) {
      AllInputs[2].classList.remove("error");
      AllInputs[2].placeholder = `${AllInputs[2].id}`;
      Errors.pop;
    }

    if (
      !telefoneValidation(AllInputs[3].value) &&
      AllInputs[3].value.length > 0
    ) {
      Errors.push("Celular Inválido");
      AllInputs[3].classList.add("error");
      AllInputs[3].placeholder = `${AllInputs[3].id} está incorreto`;
      setInputErrorName(`Celular está incorreto`);
      // setLoginState({ ...loginState, telefone: "" });
    } else if (
      (telefoneValidation(AllInputs[3].value) &&
        AllInputs[3].value.length > 0) ||
      AllInputs[3].value.length == 0
    ) {
      AllInputs[3].classList.remove("error");
      AllInputs[3].placeholder = `${AllInputs[3].id}`;
      Errors.pop;
    }
    if (textArea.value == "" || textArea.value.length < 5) {
      Errors.push("Mensagem Inválida");
      textArea.classList.add("error");
      textArea.placeholder = `${textArea.id} está curta demais`;
      setInputErrorName(`Mensagem está curta demais`);
      setLoginState({ ...loginState, mensagem: "" });
    } else {
      textArea.classList.remove("error");
      textArea.placeholder = `${textArea.id}`;
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
    mySqlAdjustment(AllInputs[1], 40, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[2], 20, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[3], 20, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[4], 50, Errors, setInputErrorName);
    mySqlAdjustment(AllInputs[5], 100, Errors, setInputErrorName);

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
    <div className="contact-summary">
      <FormError error={errorType.error} nomeError={errorType.errorName} />
      <li className="li-disable">DÚVIDAS E SUGESTÕES</li>
      <h1>Preencha os Campos</h1>
      <form
        onSubmit={submit}
        method="POST"
        action="http://localhost/php/contact-us.php"
        className="contact-us"
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
          nome="Assunto"
          onChange={(event) =>
            handleChange(
              event,
              event.target.altName ? event.target.altName : event.target.name
            )
          }
          obrigatorio
          propsValue={loginState.assunto}
        />

        <Select
          nome="Ramo de Atuação"
          altName="ramo"
          onChange={(event) => handleChange(event, "ramo")}
          arrayOptions={ramosEmpresa.map((ramo) => {
            return ramo;
          })}
        />
        <div>
          <p className="obrigatorio">Campo obrigatório*</p>
          <textarea
            placeholder="Mensagem"
            value={loginState.mensagem}
            id="Mensagem"
            name="mensagem"
            onChange={(event) => handleChange(event, "mensagem")}
          ></textarea>
        </div>

        <button>Enviar</button>
      </form>
      {inputErrorName != "" && (
        <p className="error-tag">
          Erro ao enviar o formulário: <br /> <span>{inputErrorName}</span>
        </p>
      )}
    </div>
  );
}
