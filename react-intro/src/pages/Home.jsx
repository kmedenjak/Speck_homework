import { Grid } from "../utils/styles/generalStyles";
import Section from "../components/Section/Section.jsx";
import Course from "../components/Course/Course.jsx";
import Hero from "../components/Hero/Hero.jsx";
import HeroImg from "../assets/images/landing.jpg";

import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";
import { ThreeDots } from "react-loader-spinner";
import { Loader } from "../components/Loader/Loader";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setCourses(coursesMock);
      setLoader(false);
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
        {loader ? (
          <Loader>
            <ThreeDots loader={loader} color="#bf3939" />
          </Loader>
        ) : (
          <Grid>
            {courses.map(
              (value, index) =>
                index < 4 && (
                  <Course
                    key={value.id}
                    imgSrc={value.imgSrc}
                    imgAlt={value.imgAlt}
                    title={value.title}
                    subtitle={value.subtitle}
                    time={value.time}
                    id={value.id}
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
