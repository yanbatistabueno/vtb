import Slugify from "@/lib/slugify";
import courses from "@/lib/courses";
import "./SelectedCourse.css";
import Link from "next/link";
export default async function CourseName({ params }) {
  const course = await getSelectedCourse({ params });
  if (course == "") {
    return (
      <main>
        <h2>
          <span>Curso não existe ou foi não digitado corretamente.</span>
        </h2>
      </main>
    );
  }

  return (
    <main className="selected-course">
      <h1>
        Nome do Curso: <span>{course[0].nome}</span>
      </h1>
      <div className="course-info-container">
        <h3>
          <b>Objetivo do Curso: </b>
        </h3>
        {course[0].desc.map((desc) => {
          return <p key={desc}>{desc}</p>;
        })}
        <p>
          <b>Publico Alvo:</b> {course[0].publico}
        </p>
        <div className="course-info-list">
          <p>
            <b>Programa:</b>
          </p>
          <ul>
            {course[0].programa.map(function (e) {
              return <li dangerouslySetInnerHTML={{ __html: e }}></li>;
            })}
          </ul>
        </div>

        <p>
          <b>Carga Horária: </b>
          {course[0].tempo}
        </p>
      </div>
      <div className="anchor-links">
        <Link href={`/course-proposal`} className="anchor-button">
          <div className="anchor-container">
            Proposta de curso
            <div className="anchor-icon">
              <img src="/two-arrows-icon.png" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

export async function getSelectedCourse({ params }) {
  const selectedCourse = courses.filter(
    (course) => Slugify(course.nome) == params.courseName
  );
  return selectedCourse;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseName: Slugify(course.nome),
  }));
}

export async function generateMetadata({ params }) {
  const course = await getSelectedCourse({ params });
  if (course == "") {
    return {
      title: "Curso inextistente",
    };
  }
  return {
    title: course[0].nome,
  };
}
