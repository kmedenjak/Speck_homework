import styled from "styled-components";
import { breakpoints } from "../../utils/styles/theme";

export const SingleCourse = styled.article`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    gap: 49px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    gap: 90px;
  }
`;

export const SingleCourseFigure = styled.figure`
  width: 100%;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin-bottom: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    height: 300px;
  }

  @media screen and (${breakpoints.tablet}) {
    margin: 0;
    height: 350px;
    width: 350px;
    flex-shrink: 0;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 450px;
    height: 450px;
  }
`;

export const SingleCourseImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 150%;
`;
