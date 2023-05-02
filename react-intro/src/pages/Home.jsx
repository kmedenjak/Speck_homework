import { Grid } from "../utils/styles/generalStyles";
import Section from "../components/Section/Section.jsx";
import Course from "../components/Course/Course.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/landing.jpg";

import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";

const Home = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Hero
        title="Learn what matters with Speck!"
        subtitle="Make a turnaround in your career or upgrade your current skill set with
        knowledge-based lessons from IT practice."
        button="Explore courses"
        heroImg={HeroImg}
        imgAlt="HeroImg"
      />

      <Section
        title="Open your new possibilities"
        subtitle="We recommend that you choose one of the featured courses. If you dont find 
          anything for you here, search for courses in detail on
          the courses page."
      >
        {courses && (
          <Grid>
            {courses.map(
              (course, index) =>
                index < 4 && (
                  <Course
                    key={course.id}
                    imgSrc={course.imgSrc}
                    imgAlt={course.imgAlt}
                    title={course.title}
                    subtitle={course.subtitle}
                    time={course.time}
                    id={course.id}
                  />
                )
            )}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;
