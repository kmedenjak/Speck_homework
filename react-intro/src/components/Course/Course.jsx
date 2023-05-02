import PropTypes from "prop-types";
import {
  Course as CourseWrpper,
  CourseFigure,
  CourseImg,
  Title,
  Subtitle,
  Time,
} from "./CourseStyle.js";
import { Link } from "react-router-dom";

const Course = ({ imgSrc, imgAlt, title, subtitle, time, id }) => {
  return (
    <CourseWrpper>
      <Link to={`/course/${id}`}>
        <CourseFigure>
          <CourseImg src={imgSrc} alt={imgAlt} />
        </CourseFigure>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Time>{time}</Time>
      </Link>
    </CourseWrpper>
  );
};

Course.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.number
};

export default Course;
