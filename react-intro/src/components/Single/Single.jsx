import PropTypes from "prop-types";
import {
  SingleCourse as SingleCourseWrapper,
  SingleCourseFigure,
  SingleCourseImg,
  Content,
} from "./SingleStyle.js";

const Single = ({ img, alt, text }) => {
  return (
    <SingleCourseWrapper>
      <SingleCourseFigure>
        <SingleCourseImg src={img} alt={alt} />
      </SingleCourseFigure>
      <Content>{text}</Content>
    </SingleCourseWrapper>
  );
};

Single.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
};

export default Single;
