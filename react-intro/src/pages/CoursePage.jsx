import Section from "../components/Section/Section.jsx";
import Single from "../components/Single/Single.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import coursesMock from "../utils/mock/courses.js";

const CoursePage = () => {
  const { id } = useParams();

  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  useEffect(() => {
    courses && setCourse(courses.find((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    course && (
      <Section title={course.title} subtitle={course.subtitle}>
        <Single
          img={course.imgSrc}
          alt={course.imgAlt}
          text={course.content}
        ></Single>
      </Section>
    )
  );
};

export default CoursePage;
