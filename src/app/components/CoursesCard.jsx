import "./CoursesCard.css";
import Link from "next/link";
import Slugify from "@/lib/slugify";
function CoursesCard(props) {
  function returnCourse() {
    window.scrollTo(0, 0);
  }
  return (
    <div key={props.CourseNome} className="course-card">
      <p>{props.courseNome}</p>
      <div className="course-card-tag course-card-tag-container">
        <p>Tipo:</p>
        <button onClick={props.onClick}>
          <span>
            <p>{props.courseTipo}</p>
          </span>
        </button>
      </div>
      <div className="course-card-tag">
        <p>Duração:</p>
        <p>
          <span>{props.courseTime}</span>
        </p>
      </div>
      <Link
        className="anchor-course"
        onClick={returnCourse}
        href={`/courses/${Slugify(props.courseNome)}`}
      >
        Saiba Mais
      </Link>
    </div>
  );
}

export default CoursesCard;
