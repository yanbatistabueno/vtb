import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "VTB - Consultoria e Treinamento",
  description:
    "Website da VTB - Mostra os cursos, softwares, consultoria e treinamento da empresa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
