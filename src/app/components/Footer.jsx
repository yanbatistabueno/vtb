import "./Footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h2>Menu</h2>
          <div className="footer-links-container">
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>SOFTWARES</Link>
            <Link href={"/"}>CONSULTORIA / AUDITORIA</Link>
            <Link href={"/"}>CURSOS</Link>
            <Link href={"/"}>CLIENTES</Link>
            <Link href={"/"}>FALE CONOSCO</Link>
          </div>
        </div>
        <div>
          <h2>Contato</h2>
          <div className="footer-links-container">
            <div className="footer-imgs-container">
              <img src="/whatsapp-icon.png" alt="" />
              <p>(11) 99274-8577</p>
            </div>
            <div className="footer-imgs-container">
              <img src="/email-icon.png" alt="" />
              <p>Comercial: softwares@vtb.com.br</p>
            </div>
            <div className="footer-imgs-container">
              <img src="/email-icon.png" alt="" />
              <p>Suporte: suporte@vtb.com.br</p>
            </div>
            <div className="footer-imgs-container">
              <img src="/skype-icon.png" alt="" />
              <p>Skype: vtb.suporte.softwares</p>
            </div>
          </div>
        </div>
        <img className="vtb-logo" src="/vtb-logo.png" alt="" />
      </div>
      <hr />
      <div className="copyright-container">
        <p>2023 ©VTB Consultoria e Treinamento</p>
      </div>
    </footer>
  );
}
