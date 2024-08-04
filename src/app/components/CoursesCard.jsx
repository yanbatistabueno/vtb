import "./CoursesCard.css";
import Link from "next/link";
import Slugify from "@/lib/slugify";
function CoursesCard(props) {
  function returnCourse() {
    window.scrollTo(0, 0);
  }
  return (
    <div key={props.CourseNome} className="course-card">
      <Link
        onClick={returnCourse}
        href={`/courses/${Slugify(props.courseNome)}`}
      >
        {props.courseNome}
      </Link>
      <div className="course-card-tag">
        <p>Duração:</p>
        <p>
          <span>{props.courseTime}</span>
        </p>
      </div>
    </div>
  );
}

export default CoursesCard;
