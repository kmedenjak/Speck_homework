import Grid from "../components/Grid/Grid.jsx";
import Section from "../components/Section/Section.jsx";
import Course from "../components/Course/Course.jsx";
import Hero from "../components/Hero/Hero.jsx"
import CoursePage from "./CoursePage.jsx";
import LectureImg1 from "../assets/images/lecture-1.jpg"
import LectureImg2 from "../assets/images/lecture-2.jpg"
import LectureImg3 from "../assets/images/lecture-3.jpg"
import LectureImg5 from "../assets/images/lecture-5.jpg"
import LectureImg6 from "../assets/images/lecture-6.jpg"
import LectureImg7 from "../assets/images/lecture-7.jpg"
import LectureImg8 from "../assets/images/lecture-8.jpg"
import HeroImg from "../assets/images/landing.jpg"
import { Link } from "react-router-dom";

const Home =() => {
  return (
  <>

        <Hero title="Learn what matters with Speck!" 
        subtitle="Make a turnaround in your career or upgrade your current skill set with
        knowledge-based lessons from IT practice."
        button="Explore courses"
        heroImg ={HeroImg}
        imgAlt="HeroImg"/>

        <Section title="Open your new possibilities" 
          subtitle="We recommend that you choose one of the featured courses. If you dont find 
          anything for you here, search for courses in detail on
          the courses page.">

          <Grid>
            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg1}
              imgAlt="Lecture1"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"/>
            </Link>

            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg2}
              imgAlt="Lecture2"
              title="HTML & CSS"
              subtitle="Learn HTML & CSS basics..."
              time="100 min"/>
            </Link>

            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg3}
              imgAlt="Lecture3"
              title="Version Control Systems"
              subtitle="Learn GIT and Gitflow basics..."
              time="90 min"/>
            </Link>

            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg5}
              imgAlt="Lecture5"
              title="Advanced CSS"
              subtitle="BEM methodology, grid, flex..."
              time="120 min"/>
            </Link>

            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg6}
              imgAlt="Lecture6"
              title="Introduction"
              subtitle="Get to know us better..."
              time="60 min"/>
            </Link>

            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg7}
              imgAlt="Lecture7"
              title="HTML & CSS"
              subtitle="Learn HTML & CSS basics..."
              time="100 min"/>
            </Link>

            <Link to="/course" element={<CoursePage />}>
              <Course imgSrc={LectureImg8}
              imgAlt="Lecture8"
              title="Version Control Systems"
              subtitle="Learn GIT and Gitflow basics..."
              time="90 min"/>
            </Link>

          </Grid>

        </Section>

  </>
  )
}

export default Home;
