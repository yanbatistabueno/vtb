import softwares from "@/lib/softwares";

import FiltredSearch from "../components/FiltredSearch";
import "./Softwares.css";
export default async function SoftwareList() {
  const allTags = softwares.map((software) => {
    return software.tag;
  });

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const tags = removeDuplicates(allTags);
  return (
    <main>
      <h1>Lista de Softwares</h1>
      <FiltredSearch tags={tags} type="software" data={softwares} />
    </main>
  );
}
