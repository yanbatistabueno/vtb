"use client";
import "./FormContactUs.css";
import { useState } from "react";
import softwares from "@/lib/softwares";
import Slugify from "@/lib/slugify";
import FormError from "../components/FormError";
import telefoneValidation from "../../lib/telefoneValidation";
export default function FormContactUs(props) {
  console.log(props.params);
  let filtredAssunto = "";
  let filtredSoftware = "";
  if (props.params.software) {
    softwares.filter((software) => {
      if (Slugify(software.nome) == Slugify(props.params.software)) {
        if (props.params.msg) {
          filtredAssunto =
            props.params.msg == "demo"
              ? `Demonstração do Software: ${software.nome}`
              : props.params.msg == "soli"
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
    mensagem: "",
    empresa: "",
  });

  const [errorType, setErrorType] = useState({
    error: false,
    errorName: "",
  });
  const [inputErrorName, setInputErrorName] = useState("");
  const Errors = [];
  function handleError() {
    const AllInputs = [...document.querySelectorAll("input")].map((x) => x);
    const textArea = document.querySelector("textarea");

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
    if (!telefoneValidation(AllInputs[2].value)) {
      Errors.push("Telefone Inválido");
      AllInputs[2].classList.add("error");
      AllInputs[2].placeholder = `Seu ${AllInputs[2].id.toLowerCase()} está incorreto`;
      setInputErrorName(`Telefone está incorreto`);
      // setLoginState({ ...loginState, telefone: "" });
    } else {
      AllInputs[2].classList.remove("error");
      AllInputs[2].placeholder = `Seu ${AllInputs[2].id.toLowerCase()}`;
      Errors.pop;
    }
    if (textArea.value == "" || textArea.value.length < 5) {
      Errors.push("Mensagem Inválida");
      textArea.classList.add("error");
      textArea.placeholder = `Sua ${textArea.id.toLowerCase()} está curta demais`;
      setInputErrorName(`Mensagem está curta demais`);
      setLoginState({ ...loginState, mensagem: "" });
    } else {
      textArea.classList.remove("error");
      textArea.placeholder = `${textArea.id}`;
      Errors.pop;
    }
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
      <form onSubmit={submit} method="POST" action="http://localhost/php/contact-us.php">
        <input
          value={loginState.nome}
          onChange={(event) => handleChange(event, "nome")}
          placeholder="Seu nome"
          type="text"
          id="Nome"
          name="nome"
        />
        <input
          value={loginState.email}
          placeholder="Seu e-mail"
          type="email"
          id="Email"
          onChange={(event) => handleChange(event, "email")}
          name="email"
        />
        <input
          value={loginState.telefone}
          placeholder="Telefone (XX)XXXXX-XXXX"
          type="text"
          id="Telefone"
          onChange={(event) => handleChange(event, "telefone")}
          name="telefone"
        />
        <input
          value={loginState.empresa}
          placeholder="Empresa"
          type="text"
          id="Empresa"
          onChange={(event) => handleChange(event, "empresa")}
          name="empresa"
        />
        <input
          value={loginState.assunto}
          placeholder="Assunto"
          type="text"
          id="Assunto"
          onChange={(event) => handleChange(event, "assunto")}
          name="assunto"
        />

        <textarea
          placeholder="Mensagem"
          value={loginState.mensagem}
          id="mensagem"
          name="mensagem"
          onChange={(event) => handleChange(event, "mensagem")}
        ></textarea>
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
