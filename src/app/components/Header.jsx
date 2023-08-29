"use client";
import "./Header.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [navVisibility, setNavVisibility] = useState(true);
  function openNav() {
    setNavVisibility((prevNav) => !prevNav);
  }

  function goToTop() {
    window.scrollTo(0, 0);
    setNavVisibility((prevNav) => !prevNav);
  }

  return (
    <header>
      <div className="info">
        <div className="info-text">
          <Image
            src="/whatsapp-icon.png"
            width={20}
            height={20}
            alt="whatsapp icon"
          />

          <p>(11) 99274-8577</p>
        </div>
        <div className="info-text">
          <Image
            className="info-icon"
            width={20}
            height={20}
            src="/email-icon.png"
            alt="icon e-mail"
          />
          <p>softwares@vtb.com.br</p>
        </div>
        <div className="info-text">
          <Image
            width={20}
            height={20}
            className="info-icon"
            src="/email-icon.png"
            alt="icon e-mail"
          />
          <p>suporte@vtb.com.br</p>
        </div>
        <div className="info-text">
          <Image
            width={20}
            height={20}
            className="info-icon"
            src="/skype-icon.png"
            alt="icon skype"
          />
          <p>vtb.suporte.softwares</p>
        </div>
      </div>
      <div className="header">
        <img className="logo" src="/vtb-logo.png" alt="icon logo vtb" />
        <button className="hamburguer-menu" onClick={openNav}>
          <Image
            width={40}
            height={40}
            src={navVisibility ? "/hamburguer-menu.png" : "/close-menu.png"}
            alt="icon menu open close"
          />
        </button>
        <nav data-visible={navVisibility ? "true" : "false"}>
          <ul>
            <Link onClick={goToTop} href={`/`}>
              Home
            </Link>
            <Link onClick={goToTop} href={"/softwares"}>
              Softwares
            </Link>
            <Link onClick={goToTop} href={"/consultory"}>
              Consultoria / Auditoria
            </Link>
            <Link onClick={goToTop} href={"/courses"}>
              Cursos
            </Link>
            <Link onClick={goToTop} href={"/clients"}>
              Clientes
            </Link>
          </ul>
          <Link
            className="contrate-button-container"
            onClick={goToTop}
            href={"/contact-us"}
          >
            <button className="contrate-button">Fale conosco</button>
          </Link>

          {/* <div className="language-container">
            <Image
              width={30}
              height={30}
              className="flag-icon"
              src="/br-flag.png"
              alt="icon brazil flag"
            />
            <Image
              width={30}
              height={30}
              className="flag-icon"
              src="/us-flag.png"
              alt="icon usa flag"
            />
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
