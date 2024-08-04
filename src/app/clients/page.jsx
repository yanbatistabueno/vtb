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
      {/* <div className="flex-container">
        <div className="flex-test-container">
          <div className="flex-test-1"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-4"></div>
        </div>
        <div className="flex-test-container">
          <div className="flex-test-3"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-2"></div>
          <div className="flex-test-3"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-1"></div>
          <div className="flex-test-4"></div>
          <div className="flex-test-2"></div>
        </div>
      </div> */}
      <FiltredSearch type="clients" tags={tags} data={clients} />
    </main>
  );
}
