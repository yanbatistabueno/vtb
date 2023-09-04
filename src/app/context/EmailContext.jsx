"use client";
import { createContext, useState } from "react";

export const Context = createContext();

function EmailProvider() {
  const [loginState, setLoginState] = useState({
    nome: "João Pedro Martins",
    idade: "20",
  });
  return <Context.Provider value={loginState}>{children}</Context.Provider>;
}

export default EmailProvider;
