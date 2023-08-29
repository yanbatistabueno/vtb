import "./ContactUs.css";

import FormContactUs from "../components/FormContactUs";
export default function FaleConosco({ searchParams }) {
  return (
    <main>
      <h1>Fale Conosco</h1>

      <div className="contact-container">
        <FormContactUs id="form" params={searchParams} />
        <div className="contact-card">
          <li className="li-disable">DETALHES DE CONTATO</li>
          <h1>Nossos Contatos</h1>
          <p>
            Se você tem alguma dúvida ou sugestão, fale com a gente. É a
            oportunidade da VTB ser uma empresa melhor para todos os nossos
            clientes.
          </p>
          <div>
            <div className="contact-info">
              <img className="contact-icon" src="earth-icon.png" alt="" />
              <div>
                <h3>ENDEREÇO:</h3>
                <p>
                  Rua Tenente Gomes Ribeiro, 57 Vila Clementino -São Paulo - SP
                  Salas 46 CEP - 04038-040
                </p>
              </div>
            </div>
            <div className="contact-info">
              <img className="contact-icon" src="whatsapp-icon.png" alt="" />
              <div>
                <h3>TELEFONE:</h3>
                <p>(11) 99274-8577</p>
              </div>
            </div>
            <div className="contact-info">
              <img className="contact-icon" src="email-icon.png" alt="" />
              <div>
                <h3>E-MAILS:</h3>
                <p>softwares@vtb.com.br</p>
                <p>suporte@vtb.com.br</p>
              </div>
            </div>
            <div className="contact-info">
              <img className="contact-icon" src="skype-icon.png" alt="" />
              <div>
                <h3>SKYPE:</h3>
                <p>vtb.suporte.softwares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
