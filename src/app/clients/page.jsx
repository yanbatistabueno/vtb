import clients from "@/lib/clients";
import FiltredSearch from "../components/FiltredSearch";
import "./Clients.css";
export default function Clients() {
  const allTags = clients.map((client) => {
    return client.nome.charAt(0);
  });

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const tags = removeDuplicates(allTags);

  return (
    <main>
      <h1>Lista de Clientes</h1>
      <FiltredSearch type="clients" tags={tags} data={clients} />
    </main>
  );
}
