import Section from "../components/Section/Section.jsx";
import { Grid } from "../utils/styles/generalStyles";
import Course from "../components/Course/Course.jsx";
import { useEffect, useState } from "react";
import coursesMock from "../utils/mock/courses";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import { ThreeDots } from "react-loader-spinner";
import { Loader } from "../components/Loader/Loader.js";

const Courses = () => {
  const [filterCourses, setFilterCourses] = useState([]);

  const [loader, setLoader] = useState(false);

  const handleSearch = (e) => {
    const searchCourse = e.target.value;
    const newFilter = coursesMock.filter((value) => {
      return value.title.toLowerCase().includes(searchCourse.toLowerCase());
    });
    setFilterCourses(newFilter);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setFilterCourses(coursesMock);
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <Section
        title="Browse all our courses"
        subtitle="We recommend that you choose one of the featured courses. If you don't find anything for
        you here, search for courses in detail on the courses page."
      >
        {loader ? (
          <SearchBar
            onValueChange={handleSearch}
            placeholder="Search..."
            disabled={true}
          ></SearchBar>
        ) : (
          <SearchBar
            onValueChange={handleSearch}
            placeholder="Search..."
            disabled={false}
          ></SearchBar>
        )}

        {loader ? (
          <Loader>
            <ThreeDots loader={loader} color="#bf3939" />
          </Loader>
        ) : (
          <Grid>
            {filterCourses.map((value) => (
              <Course
                key={value.id}
                imgSrc={value.imgSrc}
                imgAlt={value.imgAlt}
                title={value.title}
                subtitle={value.subtitle}
                time={value.time}
                id={value.id}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Courses;
