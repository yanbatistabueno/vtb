import courses from "@/lib/courses";
import FiltredSearch from "../components/FiltredSearch";

import "./Courses.css";
export default async function UserList() {
  const allTags = courses.map((course) => {
    return course.tag;
  });

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const tags = removeDuplicates(allTags);
  return (
    <main>
      <h1>Lista de Cursos</h1>
      <FiltredSearch
        tags={tags} //Apenas adicione uma tag que exista em um dos items da database
        type="course"
        data={courses}
      />
    </main>
  );
}
